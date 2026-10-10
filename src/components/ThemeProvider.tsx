"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type Theme = "dark" | "light";

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType>({
  theme: "dark",
  toggleTheme: () => {},
  setTheme: () => {},
});

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<Theme>("dark");

  const applyThemeClass = (newTheme: Theme) => {
    const root = document.documentElement;
    if (newTheme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.remove("dark");
      root.classList.add("light");
    }
  };

  useEffect(() => {
    // Determine theme based on saved override or user's device choice
    const saved = localStorage.getItem("portfolio-theme") as Theme | null;
    let initialTheme: Theme;

    if (saved === "light" || saved === "dark") {
      initialTheme = saved;
    } else {
      // Automatically detect user device preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      initialTheme = prefersDark ? "dark" : "light";
    }

    setThemeState(initialTheme);
    applyThemeClass(initialTheme);

    // Listen for device choice changes if user hasn't set an explicit preference
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleDeviceChange = (e: MediaQueryListEvent) => {
      const currentSaved = localStorage.getItem("portfolio-theme");
      if (!currentSaved) {
        const deviceTheme: Theme = e.matches ? "dark" : "light";
        setThemeState(deviceTheme);
        applyThemeClass(deviceTheme);
      }
    };

    mediaQuery.addEventListener("change", handleDeviceChange);
    return () => mediaQuery.removeEventListener("change", handleDeviceChange);
  }, []);

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    localStorage.setItem("portfolio-theme", newTheme);
    applyThemeClass(newTheme);
  };

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
