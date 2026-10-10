"use client";

import React, { useState } from "react";
import { 
  X, 
  CreditCard, 
  ShieldCheck, 
  Terminal, 
  CheckCircle2, 
  RefreshCw, 
  ArrowRight, 
  Lock, 
  Copy, 
  Check, 
  Sparkles, 
  Layers
} from "lucide-react";
import confetti from "canvas-confetti";
import { sounds } from "./SoundEffects";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

export const BkashSimulatorModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState<1 | 2 | 3 | 4>(1);
  const [amount, setAmount] = useState("1500");
  const [invoice, setInvoice] = useState("INV-HYPER-2026");
  const [isProcessing, setIsProcessing] = useState(false);
  const [trxId, setTrxId] = useState("");
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState<"ui" | "json" | "logs">("ui");
  const [logs, setLogs] = useState<string[]>([
    "[SYSTEM READY] bKash Tokenized Gateway Sandbox v1.2.0 initialized.",
    "[AUTH] AppKey & AppSecret loaded from secure environment variables.",
  ]);

  if (!isOpen) return null;

  const addLog = (message: string) => {
    setLogs((prev) => [...prev, `[${new Date().toLocaleTimeString()}] ${message}`]);
  };

  const handleGrantToken = () => {
    sounds.playClick();
    setIsProcessing(true);
    addLog("POST /tokenized/checkout/token/grant -> Requesting bearer token...");

    setTimeout(() => {
      setIsProcessing(false);
      setStep(2);
      addLog("RESPONSE 200 OK: id_token received. Token valid for 3600 seconds.");
      sounds.playClick();
    }, 900);
  };

  const handleCreatePayment = () => {
    sounds.playClick();
    setIsProcessing(true);
    addLog(`POST /tokenized/checkout/create -> Amount: ${amount} BDT, Invoice: ${invoice}`);

    setTimeout(() => {
      setIsProcessing(false);
      setStep(3);
      addLog("RESPONSE 200 OK: paymentID generated [TRX_PAY_928198]. Redirecting customer to bKash UI...");
      sounds.playBkashBeep();
    }, 1000);
  };

  const handleExecutePayment = () => {
    sounds.playClick();
    setIsProcessing(true);
    addLog("POST /tokenized/checkout/execute -> Verifying customer OTP & Agreement...");

    setTimeout(() => {
      const generatedTrx = "BK" + Math.random().toString(36).substring(2, 10).toUpperCase();
      setTrxId(generatedTrx);
      setIsProcessing(false);
      setStep(4);
      addLog(`SUCCESS 200 OK: Payment Executed! Transaction ID: ${generatedTrx}. Agreement Created.`);
      sounds.playSuccess();
      try {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ["#2563eb", "#00f5d4", "#38bdf8", "#10b981"],
        });
      } catch {
        // Ignore
      }
    }, 1200);
  };

  const handleReset = () => {
    sounds.playClick();
    setStep(1);
    setTrxId("");
    setLogs([
      "[SYSTEM READY] bKash Tokenized Gateway Sandbox v1.2.0 reinitialized.",
      "[AUTH] AppKey & AppSecret loaded from secure environment variables.",
    ]);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    sounds.playClick();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-3xl bg-[#090d1a] border border-cyan-500/40 shadow-[0_0_60px_rgba(37,99,235,0.25)] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-gradient-to-r from-blue-600/20 via-cyan-500/10 to-transparent">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-black shadow-lg shadow-blue-600/30">
              bK
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white tracking-wide">
                  bKash Tokenized PGW Simulator
                </h3>
                <span className="px-2 py-0.5 text-[10px] font-mono font-bold bg-blue-600/20 text-cyan-300 rounded border border-blue-500/40">
                  SANDBOX v1.2
                </span>
              </div>
              <p className="text-xs text-slate-400">
                Interactive demonstration of MD. Ferdous Sazid&apos;s production integration architecture
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              sounds.playClick();
              onClose();
            }}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Step Progress Tracker */}
        <div className="grid grid-cols-4 border-b border-white/10 text-xs font-mono bg-white/[0.02]">
          {[
            { num: 1, title: "1. Grant Token" },
            { num: 2, title: "2. Create Payment" },
            { num: 3, title: "3. Agreement & OTP" },
            { num: 4, title: "4. Execute & Webhook" },
          ].map((s) => (
            <div
              key={s.num}
              className={`p-3 text-center border-r border-white/5 last:border-r-0 transition-colors ${
                step === s.num
                  ? "bg-blue-600/20 text-cyan-300 font-bold border-b-2 border-b-cyan-400"
                  : step > s.num
                  ? "text-emerald-400 bg-emerald-500/5"
                  : "text-slate-500"
              }`}
            >
              {step > s.num ? `✓ ${s.title}` : s.title}
            </div>
          ))}
        </div>

        {/* Tab Selector */}
        <div className="flex items-center justify-between px-6 py-2.5 bg-black/40 border-b border-white/5 text-xs">
          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab("ui")}
              className={`px-3 py-1 rounded-lg font-medium transition-colors ${
                activeTab === "ui" ? "bg-white/15 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              Interactive Interface
            </button>
            <button
              onClick={() => setActiveTab("json")}
              className={`px-3 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                activeTab === "json" ? "bg-white/15 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Payload JSON</span>
            </button>
            <button
              onClick={() => setActiveTab("logs")}
              className={`px-3 py-1 rounded-lg font-medium transition-colors flex items-center gap-1 ${
                activeTab === "logs" ? "bg-white/15 text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              <Layers className="w-3.5 h-3.5 text-cyan-400" />
              <span>Backend Logs ({logs.length})</span>
            </button>
          </div>

          <button
            onClick={handleReset}
            className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
          >
            <RefreshCw className="w-3 h-3" />
            <span>Reset Demo</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="p-6 flex-1">
          {activeTab === "ui" && (
            <div className="max-w-xl mx-auto space-y-6">
              {/* STEP 1: Grant Token */}
              {step === 1 && (
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-blue-500/10 text-cyan-400">
                      <Lock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Step 1: Security Handshake</h4>
                      <p className="text-xs text-slate-400">
                        Exchange App Key & App Secret for a secure JWT Bearer Token.
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 font-mono text-xs text-slate-300 space-y-1">
                    <div className="text-slate-500">{"// API Endpoint"}</div>
                    <div className="text-cyan-400">POST /tokenized/checkout/token/grant</div>
                    <div className="text-slate-400">app_key: &quot;23k_live_f89s24...&quot;</div>
                    <div className="text-slate-400">app_secret: &quot;************************&quot;</div>
                  </div>

                  <button
                    onClick={handleGrantToken}
                    disabled={isProcessing}
                    className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Requesting Access Token...</span>
                      </>
                    ) : (
                      <>
                        <span>Generate Bearer Token</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* STEP 2: Create Payment */}
              {step === 2 && (
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/10 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                      <CreditCard className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-base font-bold text-white">Step 2: Create Payment Intent</h4>
                      <p className="text-xs text-slate-400">
                        Set amount, currency, and invoice identifier to generate paymentID.
                      </p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        Amount (BDT)
                      </label>
                      <input
                        type="number"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-xl text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-mono text-slate-400 block mb-1">
                        Invoice ID
                      </label>
                      <input
                        type="text"
                        value={invoice}
                        onChange={(e) => setInvoice(e.target.value)}
                        className="w-full px-3 py-2 bg-black/50 border border-white/10 rounded-xl text-white font-mono text-sm focus:border-cyan-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-black/60 font-mono text-xs text-emerald-400 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Bearer Token Active (Expires in 3590s)</span>
                  </div>

                  <button
                    onClick={handleCreatePayment}
                    disabled={isProcessing}
                    className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:opacity-90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Initializing Payment...</span>
                      </>
                    ) : (
                      <>
                        <span>Initialize Payment Request</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* STEP 3: Agreement & OTP Authentication */}
              {step === 3 && (
                <div className="p-6 rounded-2xl bg-gradient-to-b from-blue-900/20 to-[#090d1a] border border-cyan-500/40 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-cyan-600 flex items-center justify-center text-white font-black text-xs">
                        bK
                      </div>
                      <span className="font-bold text-white text-sm">bKash Payment Checkout</span>
                    </div>
                    <span className="text-xs font-mono text-cyan-300 font-bold">
                      ৳ {amount} BDT
                    </span>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 space-y-3">
                    <div>
                      <span className="text-[11px] text-slate-400 block mb-1">
                        Customer bKash Mobile Number
                      </span>
                      <input
                        type="text"
                        readOnly
                        value="01775004380 (Ferdous Sazid - Verified)"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-cyan-300"
                      />
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-400 block mb-1">
                        Tokenized Agreement Status
                      </span>
                      <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-emerald-500/10 text-emerald-300 text-xs font-mono border border-emerald-500/20">
                        <ShieldCheck className="w-4 h-4" />
                        <span>Tokenized with Agreement Enabled (One-Click Ready)</span>
                      </div>
                    </div>

                    <div>
                      <span className="text-[11px] text-slate-400 block mb-1">
                        Customer PIN Simulation
                      </span>
                      <input
                        type="password"
                        readOnly
                        value="•••••"
                        className="w-full px-3 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-slate-300"
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleExecutePayment}
                    disabled={isProcessing}
                    className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/40"
                  >
                    {isProcessing ? (
                      <>
                        <RefreshCw className="w-4 h-4 animate-spin" />
                        <span>Confirming & Executing Transfer...</span>
                      </>
                    ) : (
                      <>
                        <Check className="w-4 h-4" />
                        <span>Confirm & Execute Payment</span>
                      </>
                    )}
                  </button>
                </div>
              )}

              {/* STEP 4: Success & Verification */}
              {step === 4 && (
                <div className="p-6 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-400/40 flex items-center justify-center text-emerald-400 mx-auto animate-bounce">
                    <Sparkles className="w-8 h-8" />
                  </div>

                  <div>
                    <h4 className="text-xl font-bold text-white">Payment Successfully Executed!</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Tokenized agreement generated and registered with webhook confirmation.
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-black/60 border border-white/10 font-mono text-xs text-left space-y-1.5">
                    <div className="flex justify-between text-slate-400">
                      <span>Transaction ID:</span>
                      <span className="text-emerald-400 font-bold flex items-center gap-1">
                        {trxId}
                        <button
                          onClick={() => copyToClipboard(trxId)}
                          className="hover:text-white"
                          title="Copy TrxID"
                        >
                          {copied ? <Check className="w-3.5 h-3.5 text-white" /> : <Copy className="w-3.5 h-3.5" />}
                        </button>
                      </span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Amount Paid:</span>
                      <span className="text-white">৳ {amount} BDT</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Merchant Invoice:</span>
                      <span className="text-white">{invoice}</span>
                    </div>
                    <div className="flex justify-between text-slate-400">
                      <span>Status Code:</span>
                      <span className="text-emerald-400">0000 (Successful)</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button
                      onClick={handleReset}
                      className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-white/10 text-white hover:bg-white/20 transition-all flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                      <span>Run Another Simulation</span>
                    </button>
                    <button
                      onClick={() => {
                        sounds.playClick();
                        onClose();
                      }}
                      className="flex-1 py-2.5 rounded-xl text-xs font-semibold bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:opacity-90 transition-all"
                    >
                      Close Simulator
                    </button>
                  </div>
                </div>
              )}
            </div>
          )}

          {activeTab === "json" && (
            <div className="p-4 rounded-2xl bg-black/80 border border-white/10 font-mono text-xs text-slate-300 overflow-x-auto">
              <pre className="text-cyan-300">
{`// bKash Tokenized Checkout Payload Schema
// Engineered by MD. Ferdous Sazid for 30+ production systems

{
  "grantTokenPayload": {
    "app_key": "29188x_prod_key_sazid",
    "app_secret": "c76a91df-4a92-4912-8f19-901b0f192",
    "grant_type": "client_credentials"
  },
  "createPaymentPayload": {
    "amount": "${amount}",
    "currency": "BDT",
    "intent": "sale",
    "merchantInvoiceNumber": "${invoice}",
    "callbackURL": "https://api.hypersystems.com/v1/bkash/callback",
    "payerReference": "01775004380",
    "agreementStatus": "1" // Tokenized agreement enabled
  },
  "executePaymentResponse": {
    "paymentID": "TRX_PAY_928198",
    "trxID": "${trxId || 'BK98J2819'}",
    "transactionStatus": "Completed",
    "amount": "${amount}",
    "currency": "BDT",
    "intent": "sale",
    "paymentExecuteTime": "${new Date().toISOString()}",
    "merchantInvoiceNumber": "${invoice}",
    "statusCode": "0000",
    "statusMessage": "Successful"
  }
}`}
              </pre>
            </div>
          )}

          {activeTab === "logs" && (
            <div className="p-4 rounded-2xl bg-black/90 border border-white/10 font-mono text-xs text-slate-300 h-64 overflow-y-auto space-y-1.5">
              {logs.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-cyan-400 select-none">&gt;</span>
                  <span className={log.includes("SUCCESS") ? "text-emerald-400 font-bold" : "text-slate-300"}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
