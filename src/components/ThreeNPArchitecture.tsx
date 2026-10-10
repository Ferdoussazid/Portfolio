"use client";

import React, { useState } from "react";
import { 
  Server, 
  Layers, 
  Globe, 
  Database, 
  CheckCircle2, 
  Zap, 
  Terminal
} from "lucide-react";
import { sounds } from "./SoundEffects";

export const ThreeNPArchitecture: React.FC = () => {
  const [activePillar, setActivePillar] = useState<"node" | "nest" | "next" | "postgres">("nest");

  const pillars = [
    {
      id: "node" as const,
      name: "Node.js",
      subtitle: "Async Runtime & Event Loop",
      icon: Zap,
      color: "from-green-500 to-emerald-400",
      accent: "text-emerald-400",
      border: "hover:border-emerald-500/50",
      description: "Non-blocking, event-driven JavaScript engine running high-concurrency payment callbacks and webhook workers without thread starvation.",
      codeSnippet: `// Node.js Event Loop Microservice Handler
import { EventEmitter } from 'events';

export class PaymentWorker extends EventEmitter {
  async processWebhookBatch(tasks) {
    return Promise.allSettled(
      tasks.map(t => this.verifySignatureAndSettle(t))
    );
  }
}`,
      metrics: ["Asynchronous I/O", "High Concurrency", "Event Driven"],
    },
    {
      id: "nest" as const,
      name: "NestJS",
      subtitle: "Enterprise TypeScript Architecture",
      icon: Server,
      color: "from-blue-600 to-indigo-600",
      accent: "text-blue-400",
      border: "hover:border-blue-500/50",
      description: "Robust, modular microservice architecture built with TypeScript, dependency injection, DTO validation pipes, and JWT guards for clean scalable codebases.",
      codeSnippet: `@Injectable()
export class OrderService {
  constructor(
    @InjectRepository(Order)
    private readonly orderRepo: Repository<Order>,
    private readonly bkashService: BkashPaymentService,
  ) {}

  async createCustomerOrder(dto: CreateOrderDto) {
    const payment = await this.bkashService.initAgreement(dto);
    return this.orderRepo.save({ ...dto, status: 'PENDING_PAYMENT' });
  }
}`,
      metrics: ["Modular DI", "DTO Validation", "Role Guards"],
    },
    {
      id: "next" as const,
      name: "Next.js",
      subtitle: "App Router & Fluid Modern UI",
      icon: Globe,
      color: "from-cyan-500 to-blue-500",
      accent: "text-cyan-400",
      border: "hover:border-cyan-500/50",
      description: "Server-side rendering, streaming Suspense, client components, and lightning-fast edge delivery powering interactive frontend applications.",
      codeSnippet: `// Next.js App Router Server Component
import { Suspense } from 'react';
import OrderLiveTracker from '@/components/OrderLiveTracker';

export default async function CustomerDashboardPage({ params }) {
  const userOrders = await fetchOrdersFromPostgres(params.userId);

  return (
    <Suspense fallback={<SkeletonLoader />}>
      <OrderLiveTracker orders={userOrders} />
    </Suspense>
  );
}`,
      metrics: ["SSR / SSG", "Turbopack", "Edge Caching"],
    },
    {
      id: "postgres" as const,
      name: "PostgreSQL",
      subtitle: "Relational Modeling & ACID Security",
      icon: Database,
      color: "from-blue-500 to-indigo-500",
      accent: "text-blue-400",
      border: "hover:border-blue-500/50",
      description: "Industrial-grade relational database engine enforcing foreign key integrity, row-level concurrency locks, and indexed queries for food delivery & fintech orders.",
      codeSnippet: `-- PostgreSQL Scalable Schema with ACID Indexing
CREATE TABLE customer_orders (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_id UUID REFERENCES users(id) ON DELETE CASCADE,
  amount_bdt NUMERIC(10, 2) NOT NULL,
  payment_trx_id VARCHAR(64) UNIQUE,
  status VARCHAR(32) DEFAULT 'CREATED',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
CREATE INDEX idx_orders_customer ON customer_orders(customer_id);`,
      metrics: ["ACID Compliance", "Foreign Keys", "Optimized Indexes"],
    },
  ];

  const currentPillar = pillars.find((p) => p.id === activePillar)!;

  return (
    <section id="3np" className="py-24 relative overflow-hidden bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono font-semibold">
            <Layers className="w-3.5 h-3.5" />
            <span>FULL-STACK ARCHITECTURAL CORNERSTONE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-emerald-400 glow-text-cyan">3NP Development</span> Engine
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            A cohesive full-stack architecture combining <strong>Node.js</strong>, <strong>NestJS</strong>, <strong>Next.js</strong>, and <strong>PostgreSQL</strong> into resilient enterprise systems.
          </p>
        </div>

        {/* 4 Pillars Grid Navigation */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = activePillar === pillar.id;
            return (
              <button
                key={pillar.id}
                onClick={() => {
                  sounds.playClick();
                  setActivePillar(pillar.id);
                }}
                className={`p-5 rounded-2xl border text-left transition-all duration-300 backdrop-blur-md relative overflow-hidden group ${
                  isSelected
                    ? "bg-white/[0.07] border-white/30 shadow-[0_0_30px_rgba(0,245,212,0.15)]"
                    : "bg-white/[0.02] border-white/5 hover:border-white/20 hover:bg-white/[0.04]"
                }`}
              >
                {isSelected && (
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.color}`} />
                )}
                <div className={`p-2.5 rounded-xl bg-white/5 w-fit ${pillar.accent} mb-3 group-hover:scale-110 transition-transform`}>
                  <Icon className="w-5 h-5" />
                </div>
                <div className="font-bold text-base text-white">{pillar.name}</div>
                <div className="text-xs text-slate-400 mt-1 font-mono">{pillar.subtitle}</div>
              </button>
            );
          })}
        </div>

        {/* Interactive Deep Dive Console */}
        <div className="mt-8 rounded-3xl bg-[#080d1c] border border-white/10 p-6 sm:p-8 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Description & Metrics */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-3">
                <div className={`p-3 rounded-2xl bg-gradient-to-br ${currentPillar.color} text-white shadow-lg`}>
                  <currentPillar.icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{currentPillar.name}</h3>
                  <p className="text-xs font-mono text-slate-400">{currentPillar.subtitle}</p>
                </div>
              </div>

              <p className="text-sm text-slate-300 leading-relaxed">
                {currentPillar.description}
              </p>

              <div className="space-y-2">
                <span className="text-xs font-mono uppercase text-slate-400 tracking-wider block">
                  Core Competencies:
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentPillar.metrics.map((m, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-slate-200 flex items-center gap-1.5"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{m}</span>
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300 space-y-2">
                <span className="font-bold text-white flex items-center gap-1.5">
                  <Terminal className="w-3.5 h-3.5 text-cyan-400" />
                  <span>Real-World Implementation in Ferdous&apos;s Portfolio:</span>
                </span>
                <p className="text-slate-400">
                  Engineered in the <strong>Food Delivery Management System</strong>, customer backend repository on GitHub tested comprehensively via Postman collections.
                </p>
              </div>
            </div>

            {/* Code Snippet Terminal */}
            <div className="lg:col-span-7">
              <div className="rounded-2xl bg-[#04060b] border border-white/10 overflow-hidden shadow-2xl">
                <div className="flex items-center justify-between px-4 py-3 bg-white/[0.03] border-b border-white/5 text-xs font-mono text-slate-400">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500/80" />
                    <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
                    <span className="w-3 h-3 rounded-full bg-green-500/80" />
                    <span className="ml-2 text-slate-300">{currentPillar.name.toLowerCase()}-service.ts</span>
                  </div>
                  <span className="text-[11px] text-slate-500">TypeScript / SQL</span>
                </div>
                <div className="p-5 font-mono text-xs text-slate-300 overflow-x-auto">
                  <pre className="text-slate-200">
                    <code>{currentPillar.codeSnippet}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
