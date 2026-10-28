
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  MessageSquare,
  Building2,
  CheckCircle2,
  Headphones,
  ShieldCheck,
  Calendar,
  Sparkles,
} from "lucide-react";
import MarketingPageHero from "../../components/MarketingPageHero";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    mobile: "",
    email: "",
    city: "",
    interest: "OMS Cloud Accounting",
    message: "",
    
  });

  const [status, setStatus] = useState({ state: "idle", message: "" });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.mobile || !formData.company) {
      setStatus({
        state: "error",
        message: "Please fill out all required fields (Name, Company, Mobile).",
      });
      return;
    }

    const text = [
      "📌 *New Website Inquiry - GlobalTech OMS*",
      `• *Name:* ${formData.name}`,
      `• *Company:* ${formData.company}`,
      `• *Mobile:* ${formData.mobile}`,
      `• *Email:* ${formData.email || "Not provided"}`,
      `• *City:* ${formData.city || "Not provided"}`,
      `• *Module of Interest:* ${formData.interest}`,
      `• *Message:* ${formData.message || "I would like to request a demo and pricing details."}`,
    ].join("\n");

    const whatsappUrl = `https://wa.me/9779802069643?text=${encodeURIComponent(text)}`;
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");

    setStatus({
      state: "success",
      message:
        "Thank you! Your inquiry has been forwarded to our technical sales team. We will contact you shortly.",
    });

    setFormData({
      name: "",
      company: "",
      mobile: "",
      email: "",
      city: "",
      interest: "OMS Cloud Accounting",
      message: "",
    });
  };

  return (
    <main className="bg-slate-50 text-slate-900 min-h-screen">
      <MarketingPageHero
        eyebrow="Contact & Support"
        breadcrumb="Contact"
        title="Get in touch with Nepal's trusted business software team."
        description="Have a question about OMS software, request a live product demo, or talk to our technical support team in Teku, Kathmandu."
      />

      <section className="relative mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-16 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Column: Office info & quick reach */}
          <div className="lg:col-span-5 space-y-6">
            {/* Quick contact cards */}
            <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800">
                <Sparkles size={13} /> Head Office • Teku, Kathmandu
              </div>
              <h2 className="mt-4 text-2xl font-bold tracking-tight text-[#01403e]">
                Globaltech Solution Pvt. Ltd.
              </h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Pioneering IRD-certified accounting and ERP solutions in Nepal for over 15 years.
              </p>

              <div className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Office Location
                    </p>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      Teku, Kathmandu, Nepal
                    </p>
                    <p className="text-xs text-slate-500">
                      Opposite to Department of Health Services
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Telephone Lines
                    </p>
                    <div className="mt-0.5 flex flex-wrap gap-x-3 text-sm font-medium text-slate-800">
                      <a href="tel:+97715329949" className="hover:text-emerald-700 transition">01-5329949</a>
                      <span>•</span>
                      <a href="tel:+97715329952" className="hover:text-emerald-700 transition">01-5329952</a>
                      <span>•</span>
                      <a href="tel:+97715329982" className="hover:text-emerald-700 transition">01-5329982</a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Sales & WhatsApp Support
                    </p>
                    <div className="mt-0.5 space-y-1 text-sm font-medium text-slate-800">
                      <div>
                        <a href="https://wa.me/9779851069643" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                          +977-9851069643 (Marketing & Demo)
                        </a>
                      </div>
                      <div>
                        <a href="https://wa.me/9779802069643" target="_blank" rel="noreferrer" className="text-emerald-700 hover:underline">
                          +977-9802069643 (Direct WhatsApp)
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Email Inquiries
                    </p>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      <a href="mailto:info@globaltechnepal.com" className="hover:text-emerald-700 transition">
                        info@globaltechnepal.com
                      </a>
                    </p>
                    <p className="text-xs text-slate-500">
                      Support: <a href="mailto:support@globaltechnepal.com" className="hover:underline">support@globaltechnepal.com</a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-emerald-700">
                    <Clock size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      Operating Hours
                    </p>
                    <p className="text-sm font-medium text-slate-800 mt-0.5">
                      Sunday – Friday: 9:30 AM – 6:00 PM
                    </p>
                    <p className="text-xs text-slate-500">
                      Saturday: Closed (24/7 on-call emergency support for hospitals & retail)
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* IRD & Compliance Trust Card */}
            <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-emerald-900 to-[#01403e] p-6 text-white shadow-md">
              <div className="flex items-center gap-2 text-lime-300 text-xs font-semibold uppercase tracking-wider">
                <ShieldCheck size={16} /> Government of Nepal Certified
              </div>
              <h3 className="mt-2 text-lg font-bold">
                Inland Revenue Department (IRD) Approved
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-emerald-100/90">
                Our OMS Billing & ERP software meets all tax requirements set by the IRD Nepal, including electronic billing, VAT register Annexure 13, and CBMS synchronization.
              </p>
              <div className="mt-4 flex items-center gap-3 pt-3 border-t border-emerald-800/80 text-xs text-emerald-200">
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-lime-400" /> VAT & PAN Ready
                </div>
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={14} className="text-lime-400" /> Real-time Sync
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Inquiry & Demo Booking Form */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-slate-200 bg-white p-7 sm:p-9 shadow-sm">
              <div className="mb-6">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-100/70 px-3 py-1 text-xs font-semibold text-emerald-900">
                  <Calendar size={13} /> Schedule a Demo / Request Quote
                </span>
                <h2 className="mt-3 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  Tell us about your organization
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  Fill in your details below and our technical solution specialists will get in touch to arrange an on-site or virtual demonstration.
                </p>
              </div>

              {status.message && (
                <div
                  className={`mb-6 rounded-2xl p-4 text-sm font-medium ${
                    status.state === "success"
                      ? "bg-emerald-50 text-emerald-800 border border-emerald-200"
                      : "bg-red-50 text-red-800 border border-red-200"
                  }`}
                >
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="e.g. Ramesh Thapa"
                      value={formData.name}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Company / Organization Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="company"
                      required
                      placeholder="e.g. Thapa Trading Pvt. Ltd."
                      value={formData.company}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Mobile / WhatsApp Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      required
                      placeholder="e.g. 9851000000"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Work Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="e.g. contact@yourcompany.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      City / Location
                    </label>
                    <input
                      type="text"
                      name="city"
                      placeholder="e.g. Kathmandu, Birgunj, Pokhara"
                      value={formData.city}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700">
                      Primary Module of Interest
                    </label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="mt-1.5 w-full rounded-xl border border-slate-300 bg-white px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:ring-2 focus:ring-emerald-100"
                    >
                      <option value="OMS Cloud Accounting">OMS Cloud Accounting</option>
                      <option value="Complete Enterprise ERP">Complete Enterprise ERP</option>
                      <option value="POS & Retail Billing">POS & Retail Billing</option>
                      <option value="Hospital & Healthcare Manager">Hospital & Healthcare Manager</option>
                      <option value="Payroll & HR Management">Payroll & HR Management</option>
                      <option value="Restaurant & F&B Billing">Restaurant & F&B Billing</option>
                      <option value="Custom Software Development">Custom Software Development</option>
                      <option value="Web & Mobile App Solutions">Web & Mobile App Solutions</option>
                      <option value="Cloud VPS & Domain Hosting">Cloud VPS & Domain Hosting</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-700">
                    Additional Requirements or Questions
                  </label>
                  <textarea
                    name="message"
                    rows={4}
                    placeholder="Tell us about your team size, number of branches, current software, or key challenges..."
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1.5 w-full rounded-xl border border-slate-300 bg-slate-50/50 px-3.5 py-2.5 text-sm text-slate-900 outline-none transition focus:border-emerald-600 focus:bg-white focus:ring-2 focus:ring-emerald-100"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#01403e] to-emerald-800 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-950/20 transition hover:from-[#085552] hover:to-emerald-700 hover:shadow-xl active:scale-[0.99]"
                  >
                    <Send size={16} /> Send Inquiry via WhatsApp & Team
                  </button>
                  <p className="mt-3 text-center text-xs text-slate-500">
                    Prefer direct calling? Reach our sales desk at{" "}
                    <a href="tel:+97715329949" className="font-semibold text-emerald-800 underline">
                      01-5329949
                    </a>{" "}
                    or mobile{" "}
                    <a href="tel:+9779851069643" className="font-semibold text-emerald-800 underline">
                      +977-9851069643
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Interactive Map Embed */}
        <div className="mt-14 rounded-3xl overflow-hidden border border-slate-200 bg-white p-2 shadow-sm">
          <div className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100">
            <div>
              <h3 className="text-lg font-bold text-slate-900">Visit Our Teku Office</h3>
              <p className="text-xs text-slate-500">
                Globaltech Solution Pvt. Ltd., Teku, Kathmandu (Near Bagmati Bridge & Health Dept.)
              </p>
            </div>
            <a
              href="https://maps.google.com/?q=Globaltech+Solution+Teku+Kathmandu"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-300 px-4 py-2 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition"
            >
              Open in Google Maps <MapPin size={13} />
            </a>
          </div>
          <div className="relative h-80 sm:h-96 w-full rounded-2xl overflow-hidden bg-slate-100">
            <iframe
              title="GlobalTech Office Location Teku Kathmandu"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3532.748366479153!2d85.3055416!3d27.6941584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb1855a82894b9%3A0xe9688bc8a906ffea!2sTeku%2C%20Kathmandu%2044600!5e0!3m2!1sen!2snp!4v1700000000000!5m2!1sen!2snp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
