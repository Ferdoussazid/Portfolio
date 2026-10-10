"use client";

import React, { useEffect, useState, useRef } from "react";

interface Spark {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  opacity: number;
}

interface TrailDot {
  id: number;
  x: number;
  y: number;
  opacity: number;
}

export const FancyCursor: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [trail, setTrail] = useState<TrailDot[]>([]);
  const [sparks, setSparks] = useState<Spark[]>([]);

  // Smooth position tracking
  const mousePos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const lastTrailTime = useRef(0);
  const sparkIdCounter = useRef(0);
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only enable on desktop fine-pointer devices
    if (typeof window === "undefined") return;
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return;

    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }

      // Add gentle stardust particle trail when moving
      const now = performance.now();
      if (now - lastTrailTime.current > 75) {
        lastTrailTime.current = now;
        const newDot: TrailDot = {
          id: now,
          x: e.clientX,
          y: e.clientY,
          opacity: 0.6,
        };
        setTrail((prev) => [...prev.slice(-8), newDot]);
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      setIsClicking(true);

      // Create 5 minimal playful sparks
      const newSparks: Spark[] = [];
      const sparkCount = 5;
      for (let i = 0; i < sparkCount; i++) {
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5;
        const speed = 1.5 + Math.random() * 2;
        newSparks.push({
          id: ++sparkIdCounter.current,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          size: 2.5 + Math.random() * 1.5,
          opacity: 0.9,
        });
      }
      setSparks((prev) => [...prev, ...newSparks]);
    };

    const handleMouseUp = () => {
      setIsClicking(false);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Check for interactive element hovering
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const interactive = target.closest(
        'a, button, input, textarea, select, [role="button"], .cursor-pointer, [data-interactive="true"]'
      );
      setIsHovered(!!interactive);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });
    window.addEventListener("mouseup", handleMouseUp, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseover", handleMouseOver, { passive: true });

    // Silky smooth interpolation loop for the outer trailing halo
    let animId: number;
    const lerp = (a: number, b: number, n: number) => a + (b - a) * n;

    const loop = () => {
      ringPos.current.x = lerp(ringPos.current.x, mousePos.current.x, 0.18);
      ringPos.current.y = lerp(ringPos.current.y, mousePos.current.y, 0.18);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringPos.current.x}px, ${ringPos.current.y}px, 0)`;
      }

      // Animate sparks
      setSparks((prev) => {
        if (prev.length === 0) return prev;
        return prev
          .map((s) => ({
            ...s,
            x: s.x + s.vx,
            y: s.y + s.vy,
            opacity: s.opacity - 0.04,
          }))
          .filter((s) => s.opacity > 0.05);
      });

      // Fade trail dots
      setTrail((prev) => {
        if (prev.length === 0) return prev;
        return prev
          .map((t) => ({ ...t, opacity: t.opacity - 0.03 }))
          .filter((t) => t.opacity > 0.05);
      });

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseover", handleMouseOver);
      cancelAnimationFrame(animId);
    };
  }, [isVisible]);

  if (!mounted || !isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[9999] overflow-hidden select-none">
      {/* Fading Stardust Trail */}
      {trail.map((dot) => (
        <div
          key={dot.id}
          className="absolute rounded-full bg-cyan-400"
          style={{
            left: dot.x - 1.5,
            top: dot.y - 1.5,
            width: 3,
            height: 3,
            opacity: dot.opacity * 0.5,
            boxShadow: "0 0 6px rgba(0, 245, 212, 0.6)",
            transform: "translateZ(0)",
          }}
        />
      ))}

      {/* Radiant Click Sparks */}
      {sparks.map((s) => (
        <div
          key={s.id}
          className="absolute rounded-full bg-gradient-to-tr from-cyan-300 to-emerald-300"
          style={{
            left: s.x - s.size / 2,
            top: s.y - s.size / 2,
            width: s.size,
            height: s.size,
            opacity: s.opacity,
            boxShadow: `0 0 8px rgba(0, 245, 212, ${s.opacity})`,
            transform: "translateZ(0)",
          }}
        />
      ))}

      {/* Smooth Trailing Halo Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-[width,height,border-color,background-color] duration-200 ease-out will-change-transform"
        style={{
          width: isHovered ? 48 : isClicking ? 24 : 32,
          height: isHovered ? 48 : isClicking ? 24 : 32,
          border: isHovered
            ? "1.5px solid rgba(0, 245, 212, 0.7)"
            : "1px solid rgba(0, 245, 212, 0.35)",
          backgroundColor: isHovered
            ? "rgba(0, 245, 212, 0.08)"
            : "rgba(0, 245, 212, 0.02)",
          backdropFilter: isHovered ? "blur(1px)" : "none",
          boxShadow: isHovered
            ? "0 0 16px rgba(0, 245, 212, 0.35), inset 0 0 8px rgba(0, 245, 212, 0.15)"
            : "0 0 8px rgba(0, 245, 212, 0.15)",
        }}
      />

      {/* Central Precision Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 rounded-full pointer-events-none transition-[transform,background-color] duration-75 will-change-transform"
        style={{
          width: isClicking ? 4 : isHovered ? 8 : 6,
          height: isClicking ? 4 : isHovered ? 8 : 6,
          backgroundColor: isHovered ? "#38bdf8" : "#00f5d4",
          boxShadow: isHovered
            ? "0 0 10px #38bdf8, 0 0 16px rgba(56, 189, 248, 0.8)"
            : "0 0 8px #00f5d4, 0 0 12px rgba(0, 245, 212, 0.7)",
        }}
      />
    </div>
  );
};
