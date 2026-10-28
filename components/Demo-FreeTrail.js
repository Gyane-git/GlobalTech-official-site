"use client";

import { useState } from "react";
import {
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Phone,
  MessageSquare,
  Users,
  Building2,
  Layers,
  Laptop,
} from "lucide-react";

export default function FreeTrials() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);
  const [demoForm, setDemoForm] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    city: "",
    inquiry: "Request a live demo",
    interest: "OMS Cloud Accounting",
    message: "",
  });

  const handleStartTrial = async (e) => {
    if (e) e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("Please enter a valid work email address.");
      return;
    }

    setStatus("");
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/trial", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const result = await response.json();
      if (!response.ok) {
        throw new Error(
          result.error || "Could not dispatch email. Please reach our marketing desk."
        );
      }
      setStatus("success");
      setEmail("");
    } catch (error) {
      // In case SMTP is offline or local dev, fallback gracefully to informative modal
      setStatus(
        error.message ||
          "Demo request received. For immediate activation, contact our marketing team at +977-9851069643."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleDemoSubmit = (event) => {
    event.preventDefault();
    if (!demoForm.name.trim() || !demoForm.company.trim() || !demoForm.mobile.trim()) {
      alert("Please fill in Name, Company, and Mobile number.");
      return;
    }

    const details = [
      "📌 *New Demo Request from GlobalTech OMS Website*",
      `• *Name:* ${demoForm.name.trim()}`,
      `• *Company:* ${demoForm.company.trim()}`,
      `• *Mobile:* ${demoForm.mobile.trim()}`,
      `• *Email:* ${demoForm.email.trim() || "Not provided"}`,
      `• *City:* ${demoForm.city.trim() || "Not provided"}`,
      `• *Inquiry:* ${demoForm.inquiry}`,
      `• *Interested in:* ${demoForm.interest}`,
      `• *Message:* ${demoForm.message.trim() || "I would like to request an on-site or online demonstration."}`,
    ].join("\n");

    window.open(
      `https://wa.me/9779802069643?text=${encodeURIComponent(details)}`,
      "_blank",
      "noopener,noreferrer"
    );

    setDemoOpen(false);
    setDemoForm({
      name: "",
      company: "",
      mobile: "",
      email: "",
      city: "",
      inquiry: "Request a live demo",
      interest: "OMS Cloud Accounting",
      message: "",
    });
  };

  return (
    <section
      id="trial"
      className="relative overflow-hidden bg-[#0a4d4d] py-16 sm:py-24 px-4 sm:px-6 lg:px-8 text-white"
    >
      {/* Background Subtle Gradient & Grid Pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-15"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255, 255, 255, 0.25) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      <div
        aria-hidden="true"
        className="absolute -right-24 -top-24 h-[500px] w-[500px] rounded-full bg-emerald-400/15 blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-lime-400/10 blur-3xl pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Value Proposition */}
          <div className="lg:col-span-7">
            {/* Government Certification Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-lime-400/30 bg-emerald-950/60 px-4 py-1.5 text-xs font-semibold text-lime-300 backdrop-blur-md mb-6 shadow-sm">
              <ShieldCheck size={15} className="text-lime-400" />
              <span>Certified by Inland Revenue Department (IRD) Nepal</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.12]">
              Transform Your{" "}
              <span className="bg-gradient-to-r from-lime-300 via-emerald-200 to-white bg-clip-text text-transparent">
                Accounting
              </span>
              <br />
              Into The Cloud Era.
            </h1>

            {/* Subheading */}
            <p className="mt-6 text-base sm:text-lg text-emerald-100/90 leading-relaxed max-w-2xl font-normal">
              Built specifically for Nepal&apos;s commercial landscape. Streamline electronic billing, multi-godown inventory, VAT Annexure 13, payroll, and financial reports from a single trusted platform.
            </p>

            {/* Feature Pills */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-2 gap-3 max-w-xl text-xs sm:text-sm font-medium text-emerald-50">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lime-400 shrink-0" />
                <span>100% Nepal VAT & PAN Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lime-400 shrink-0" />
                <span>Offline Billing + Auto Cloud Sync</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lime-400 shrink-0" />
                <span>Multi-Branch & Multi-Warehouse</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-lime-400 shrink-0" />
                <span>Local Kathmandu Support Team</span>
              </div>
            </div>

            {/* Quick Mobile App Showcase */}
            <div className="mt-10 border-t border-emerald-800/70 pt-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-emerald-300/80 mb-3">
                Also available on mobile devices:
              </p>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#trial"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-700/60 bg-emerald-900/50 px-3.5 py-2 text-xs font-medium text-emerald-100 backdrop-blur-sm hover:bg-emerald-800/60 transition"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.1 22C7.79 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight text-emerald-300">Apple</div>
                    <div className="text-xs font-semibold leading-tight">App Store</div>
                  </div>
                </a>

                <a
                  href="#trial"
                  className="inline-flex items-center gap-2.5 rounded-xl border border-emerald-700/60 bg-emerald-900/50 px-3.5 py-2 text-xs font-medium text-emerald-100 backdrop-blur-sm hover:bg-emerald-800/60 transition"
                >
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-tight text-emerald-300">Android</div>
                    <div className="text-xs font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: High-Conversion Trial & Demo Card */}
          <div className="lg:col-span-5">
            <div className="rounded-3xl border border-white/20 bg-white/95 p-6 sm:p-8 text-slate-900 shadow-2xl backdrop-blur-md">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
                  <Sparkles size={13} /> 30-Day Free Trial
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  No credit card required
                </span>
              </div>

              <h2 className="mt-4 text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
                Start Exploring OMS Today
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-600 leading-relaxed">
                Enter your work email to receive demo credentials, or schedule an on-site walkthrough with our Kathmandu implementation specialists.
              </p>

              <form onSubmit={handleStartTrial} className="mt-5 space-y-3">
                <div>
                  <label htmlFor="trial-email" className="sr-only">
                    Work Email Address
                  </label>
                  <input
                    id="trial-email"
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your work email (e.g. info@company.com)"
                    className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-xl bg-[#01403e] px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:bg-[#075351] active:scale-[0.99] disabled:opacity-50"
                >
                  {isSubmitting ? "Processing..." : "Get Instant Demo Login"}
                </button>

                <div className="relative py-1 text-center">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-slate-200"></div>
                  </div>
                  <span className="relative bg-white px-3 text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                    or
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setDemoOpen(true)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-emerald-700 bg-emerald-50/50 px-5 py-3 text-sm font-semibold text-emerald-800 transition hover:bg-emerald-100"
                >
                  <MessageSquare size={16} /> Request Custom Demo / Consultation
                </button>

                {status && status !== "success" && (
                  <p role="alert" className="text-xs font-medium text-red-600 pt-1">
                    {status}
                  </p>
                )}
              </form>

              {/* Direct helpline inside card */}
              <div className="mt-5 rounded-2xl bg-slate-50 p-3.5 border border-slate-100 flex items-center justify-between text-xs text-slate-600">
                <span className="flex items-center gap-1.5 font-medium">
                  <Phone size={13} className="text-emerald-700" /> Need immediate assistance?
                </span>
                <a
                  href="tel:+97715329949"
                  className="font-bold text-emerald-800 hover:underline"
                >
                  01-5329949
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Trust Metrics Bar */}
        <div className="mt-16 pt-10 border-t border-emerald-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-lime-300">10,000+</div>
            <div className="text-xs font-medium text-emerald-200/90 mt-1">Active Users in Nepal</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-lime-300">15+ Years</div>
            <div className="text-xs font-medium text-emerald-200/90 mt-1">Software & ERP Excellence</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-lime-300">100%</div>
            <div className="text-xs font-medium text-emerald-200/90 mt-1">IRD & VAT Tax Compliant</div>
          </div>
          <div className="p-3">
            <div className="text-2xl sm:text-3xl font-extrabold text-lime-300">99.8%</div>
            <div className="text-xs font-medium text-emerald-200/90 mt-1">Customer Renewal Rate</div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      {status === "success" && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-md w-full rounded-2xl bg-white p-6 sm:p-7 text-slate-900 shadow-2xl">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 mb-4">
              <CheckCircle2 size={28} />
            </div>
            <h3 className="text-xl font-bold text-slate-900">
              Demo Request Dispatched!
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-slate-600 leading-relaxed">
              We have forwarded your trial access request. You can also explore our online live demo environment immediately:
            </p>

            <div className="mt-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4 text-xs space-y-1.5 text-slate-800">
              <div>
                <span className="font-semibold text-emerald-900">Live Demo URL:</span>{" "}
                <a
                  href="http://omslite.globaltech.com.np/Account/Login"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-emerald-800 underline"
                >
                  omslite.globaltech.com.np
                </a>
              </div>
              <div>
                <span className="font-semibold text-emerald-900">Username:</span> demo
              </div>
              <div>
                <span className="font-semibold text-emerald-900">Password:</span> 123
              </div>
            </div>

            <p className="mt-3 text-xs text-slate-500">
              For an immediate guided walkthrough, call our marketing desk at{" "}
              <a href="tel:+9779851069643" className="font-bold text-emerald-800 underline">
                +977-9851069643
              </a>.
            </p>

            <button
              type="button"
              onClick={() => setStatus("")}
              className="mt-6 w-full rounded-xl bg-[#01403e] py-3 text-xs font-semibold text-white hover:bg-[#075351] transition"
            >
              Close and Continue
            </button>
          </div>
        </div>
      )}

      {/* Demo Booking Modal */}
      {demoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-3 sm:p-5"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setDemoOpen(false);
          }}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="demo-form-title"
            className="relative max-h-[92vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-white p-6 sm:p-8 text-slate-900 shadow-2xl"
          >
            <button
              type="button"
              aria-label="Close demo request form"
              onClick={() => setDemoOpen(false)}
              className="absolute right-5 top-5 text-2xl text-slate-400 hover:text-slate-600"
            >
              ✕
            </button>

            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800 mb-2">
              <Building2 size={13} /> On-Site / Virtual Demo
            </span>
            <h2 id="demo-form-title" className="text-2xl font-bold tracking-tight text-slate-900">
              Schedule an OMS Demonstration
            </h2>
            <p className="mt-1 text-xs text-slate-600">
              Tell us what your organization runs and our Kathmandu team will coordinate with you.
            </p>

            <form onSubmit={handleDemoSubmit} className="mt-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Your Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    value={demoForm.name}
                    onChange={(e) => setDemoForm({ ...demoForm, name: e.target.value })}
                    placeholder="e.g. Sunita Shrestha"
                    className="mt-1 block w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Company Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    value={demoForm.company}
                    onChange={(e) => setDemoForm({ ...demoForm, company: e.target.value })}
                    placeholder="e.g. Shrestha Enterprises"
                    className="mt-1 block w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Mobile / WhatsApp <span className="text-red-500">*</span>
                  </label>
                  <input
                    required
                    type="tel"
                    value={demoForm.mobile}
                    onChange={(e) => setDemoForm({ ...demoForm, mobile: e.target.value })}
                    placeholder="e.g. 9851000000"
                    className="mt-1 block w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    City / Location
                  </label>
                  <input
                    value={demoForm.city}
                    onChange={(e) => setDemoForm({ ...demoForm, city: e.target.value })}
                    placeholder="e.g. Kathmandu, Biratnagar"
                    className="mt-1 block w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Primary Module Needed
                </label>
                <select
                  value={demoForm.interest}
                  onChange={(e) => setDemoForm({ ...demoForm, interest: e.target.value })}
                  className="mt-1 block w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                >
                  <option value="OMS Cloud Accounting">OMS Cloud Accounting</option>
                  <option value="Complete ERP Solution">Complete ERP Solution</option>
                  <option value="POS & Retail Billing">POS & Retail Billing</option>
                  <option value="Hospital & Clinical Management">Hospital & Clinical Management</option>
                  <option value="Payroll & HR Management">Payroll & HR Management</option>
                  <option value="Restaurant & F&B">Restaurant & F&B</option>
                  <option value="Custom Software Development">Custom Software Development</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700">
                  Specific Requirements / Questions
                </label>
                <textarea
                  rows={3}
                  value={demoForm.message}
                  onChange={(e) => setDemoForm({ ...demoForm, message: e.target.value })}
                  placeholder="Number of users, branches, or legacy software you are currently using..."
                  className="mt-1 block w-full rounded-xl border border-slate-300 px-3.5 py-2 text-xs text-slate-900 outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-700 to-[#01403e] px-4 py-3 text-xs font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:brightness-110 active:scale-[0.99]"
              >
                <MessageSquare size={15} /> Send Demo Request via WhatsApp
              </button>

              <p className="text-center text-[11px] text-slate-500">
                Direct calling available at{" "}
                <a href="tel:+97715329949" className="font-semibold text-emerald-800 underline">
                  01-5329949
                </a>{" "}
                |{" "}
                <a href="tel:+9779851069643" className="font-semibold text-emerald-800 underline">
                  9851069643
                </a>
              </p>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}
