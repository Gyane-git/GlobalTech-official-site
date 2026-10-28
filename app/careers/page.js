"use client";

import { useState } from "react";
import Link from "next/link";

// ====== OFFICIAL CONTACT ======
const CAREERS_EMAIL = "careers@globaltechnepal.com";

const perks = [
  {
    icon: "🚀",
    title: "Growth & Learning",
    text: "Training budget, mentorship and clear career paths to help you grow every year.",
  },
  {
    icon: "🏠",
    title: "Flexible Work",
    text: "Hybrid and remote-friendly options with flexible working hours.",
  },
  {
    icon: "💰",
    title: "Competitive Pay",
    text: "Market-leading salary, performance bonuses and festival allowances.",
  },
  {
    icon: "🩺",
    title: "Health & Wellbeing",
    text: "Health insurance, paid leave and a supportive, balanced workplace.",
  },
  {
    icon: "🌏",
    title: "Global Projects",
    text: "Work with international clients on challenging, real-world products.",
  },
  {
    icon: "🤝",
    title: "Great Culture",
    text: "A friendly, inclusive team that celebrates ideas and wins together.",
  },
];

const jobs = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "4+ years",
    description:
      "Build and scale web applications using Next.js, Node.js and .NET. You will own features end to end, from design to deployment.",
    requirements: [
      "Strong experience with React / Next.js",
      "Backend experience with .NET or Node.js",
      "Good knowledge of SQL databases and REST APIs",
      "Comfortable with Git and code reviews",
    ],
  },
  {
    id: 2,
    title: "Frontend Developer",
    department: "Engineering",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "1-3 years",
    description:
      "Create fast, accessible and beautiful user interfaces for our clients' products.",
    requirements: [
      "Solid HTML, CSS and JavaScript fundamentals",
      "Experience with React and Tailwind CSS",
      "Eye for design and attention to detail",
    ],
  },
  {
    id: 3,
    title: "UI/UX Designer",
    department: "Design",
    location: "Hybrid",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Design intuitive product experiences, from research and wireframes to polished prototypes.",
    requirements: [
      "Strong portfolio in web or mobile design",
      "Proficiency in Figma",
      "Understanding of user research and usability",
    ],
  },
  {
    id: 4,
    title: "QA Engineer",
    department: "Engineering",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "2+ years",
    description:
      "Ensure every release is reliable by planning, writing and running manual and automated tests.",
    requirements: [
      "Experience with test planning and bug tracking",
      "Knowledge of automation tools is a plus",
      "Good communication skills",
    ],
  },
  {
    id: 5,
    title: "Business Development Executive",
    department: "Sales",
    location: "Kathmandu, Nepal",
    type: "Full-time",
    experience: "1+ years",
    description:
      "Find new clients, build relationships and help us grow our presence in new markets.",
    requirements: [
      "Excellent communication and negotiation skills",
      "Experience in IT sales is a plus",
      "Self-motivated and target driven",
    ],
  },
  {
    id: 6,
    title: "Software Engineering Intern",
    department: "Internship",
    location: "Kathmandu, Nepal",
    type: "Internship",
    experience: "Fresher",
    description:
      "Learn from experienced engineers while working on real projects. Great start for your career.",
    requirements: [
      "Basic knowledge of programming",
      "Eager to learn and take feedback",
      "Currently studying or recently graduated in IT or related field",
    ],
  },
];

const process = [
  { step: "01", title: "Apply", text: "Send your CV and a short note about yourself." },
  { step: "02", title: "Screening", text: "A quick call with our HR team to get to know you." },
  { step: "03", title: "Technical Round", text: "A practical discussion or task relevant to the role." },
  { step: "04", title: "Offer", text: "Meet the team, get your offer and join us!" },
];
// ============================

export default function CareersPage() {
  const departments = ["All", ...new Set(jobs.map((j) => j.department))];
  const [filter, setFilter] = useState("All");
  const [openId, setOpenId] = useState(null);

  const visibleJobs =
    filter === "All" ? jobs : jobs.filter((j) => j.department === filter);

  const applyLink = (title) =>
    `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(
      `Application for ${title}`
    )}&body=${encodeURIComponent(
      "Hello Global Tech team,\n\nI would like to apply for this position. Please find my CV attached.\n\nName:\nPhone:\nLinkedIn / Portfolio:\n"
    )}`;

  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-green-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-wide">
            Careers
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Build your career
            <span className="block text-green-400">with Global Tech</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            Join a passionate team creating technology that matters. We are
            always looking for talented people who love to learn, build and grow.
          </p>
          <a
            href="#openings"
            className="mt-10 inline-block rounded-full bg-green-500 px-8 py-3 font-semibold text-white transition hover:bg-green-400"
          >
            View Open Positions
          </a>
        </div>
      </section>

      {/* Perks */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Why join us?</h2>
          <p className="mt-4 text-gray-600">
            We take care of our people so they can do the best work of their lives.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {perks.map((p) => (
            <div
              key={p.title}
              className="rounded-2xl border border-gray-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-2xl">
                {p.icon}
              </div>
              <h3 className="mt-5 text-lg font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Openings */}
      <section id="openings" className="scroll-mt-20 bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold md:text-4xl">Open positions</h2>
            <p className="mt-4 text-gray-600">
              {jobs.length} roles available right now.
            </p>
          </div>

          {/* Filter */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {departments.map((d) => (
              <button
                key={d}
                onClick={() => setFilter(d)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition ${
                  filter === d
                    ? "bg-green-600 text-white shadow"
                    : "border border-gray-200 bg-white text-gray-700 hover:border-green-500"
                }`}
              >
                {d}
              </button>
            ))}
          </div>

          {/* Job list */}
          <div className="mt-10 space-y-4">
            {visibleJobs.map((job) => {
              const isOpen = openId === job.id;
              return (
                <div
                  key={job.id}
                  className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                >
                  <button
                    onClick={() => setOpenId(isOpen ? null : job.id)}
                    className="flex w-full items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={isOpen}
                  >
                    <div>
                      <h3 className="text-lg font-semibold">{job.title}</h3>
                      <div className="mt-2 flex flex-wrap gap-2 text-xs">
                        <span className="rounded-full bg-green-50 px-3 py-1 font-medium text-green-700">
                          {job.department}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                          📍 {job.location}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                          {job.type}
                        </span>
                        <span className="rounded-full bg-gray-100 px-3 py-1 text-gray-700">
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <span
                      className={`text-2xl text-green-600 transition-transform ${
                        isOpen ? "rotate-45" : ""
                      }`}
                    >
                      +
                    </span>
                  </button>

                  {isOpen && (
                    <div className="border-t border-gray-100 px-6 pb-6 pt-5">
                      <p className="text-gray-700">{job.description}</p>
                      <h4 className="mt-5 text-sm font-semibold uppercase tracking-wide text-gray-500">
                        Requirements
                      </h4>
                      <ul className="mt-3 list-disc space-y-1 pl-5 text-gray-700">
                        {job.requirements.map((r) => (
                          <li key={r}>{r}</li>
                        ))}
                      </ul>
                      <a
                        href={applyLink(job.title)}
                        className="mt-6 inline-block rounded-full bg-green-600 px-6 py-2.5 text-sm font-semibold text-white transition hover:bg-green-700"
                      >
                        Apply Now
                      </a>
                    </div>
                  )}
                </div>
              );
            })}

            {visibleJobs.length === 0 && (
              <p className="text-center text-gray-500">
                No open positions in this department right now.
              </p>
            )}
          </div>
        </div>
      </section>

      {/* Hiring process */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Our hiring process</h2>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {process.map((s) => (
            <div key={s.step} className="rounded-2xl border border-gray-200 p-6">
              <span className="text-3xl font-bold text-green-500">{s.step}</span>
              <h3 className="mt-3 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{s.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-gray-800 to-green-900 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Don&apos;t see a role that fits?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-green-100">
            We are always happy to meet talented people. Send us your CV and we
            will contact you when a suitable position opens.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${CAREERS_EMAIL}?subject=General%20Application`}
              className="rounded-full bg-white px-8 py-3 font-semibold text-green-700 transition hover:bg-green-50"
            >
              Send Your CV
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-white/40 px-8 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}