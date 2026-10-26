import Link from "next/link";

export const metadata = {
  title: "Our Clients | Global Tech",
  description:
    "Trusted by businesses across industries. Meet the clients who rely on Global Tech for software, cloud and digital solutions.",
};

const stats = [
  { value: "10000+", label: "Happy Clients" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Industries Served" },
  { value: "99%", label: "Client Retention" },
];

// Replace with your real clients. Add `logo: "/clients/name.png"` to use an image.
const clients = [
  { name: "Nova Bank", industry: "Banking & Finance" },
  { name: "Himal Retail", industry: "Retail & E-commerce" },
  { name: "Everest Telecom", industry: "Telecommunications" },
  { name: "MediCare Plus", industry: "Healthcare" },
  { name: "Sagarmatha Logistics", industry: "Logistics" },
  { name: "EduSpark", industry: "Education" },
  { name: "Urban Estates", industry: "Real Estate" },
  { name: "AgroTech Nepal", industry: "Agriculture" },
];

const industries = [
  "Banking & Finance",
  "Healthcare",
  "Retail & E-commerce",
  "Education",
  "Logistics",
  "Telecommunications",
  "Real Estate",
  "Manufacturing",
];

const testimonials = [
  {
    quote:
      "Global Tech delivered our platform on time and exceeded every expectation. Their team feels like an extension of ours.",
    name: "Aarav Sharma",
    role: "CTO, Nova Bank",
  },
  {
    quote:
      "From planning to launch, the communication was clear and the quality outstanding. Our sales grew noticeably after go-live.",
    name: "Sita Rai",
    role: "Head of Digital, Himal Retail",
  },
  {
    quote:
      "Reliable, secure and scalable. We have trusted them with multiple projects and they have never let us down.",
    name: "Rohan Thapa",
    role: "Operations Director, Sagarmatha Logistics",
  },
];

function getInitials(name) {
  return name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function ClientsPage() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-blue-900 text-white">
        <div className="mx-auto max-w-7xl px-6 py-24 text-center md:py-32">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm tracking-wide">
            Our Clients
          </span>
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-6xl">
            Trusted by businesses
            <span className="block text-blue-400">that move the world forward</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
            We partner with organizations of every size to build reliable,
            scalable and future-ready technology solutions.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="mx-auto -mt-12 max-w-6xl px-6">
        <div className="grid grid-cols-2 gap-4 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-gray-100 md:grid-cols-4 md:p-8">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-3xl font-bold text-blue-600 md:text-4xl">
                {s.value}
              </p>
              <p className="mt-1 text-sm text-gray-500">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Client grid */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Companies we work with</h2>
          <p className="mt-4 text-gray-600">
            A selection of the organizations that trust us with their digital
            transformation.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="group rounded-2xl border border-gray-200 bg-white p-6 text-center transition hover:-translate-y-1 hover:border-blue-500 hover:shadow-lg"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-50 text-xl font-bold text-blue-600 transition group-hover:bg-blue-600 group-hover:text-white">
                {getInitials(c.name)}
              </div>
              <h3 className="mt-4 text-lg font-semibold">{c.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{c.industry}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Industries */}
      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2 className="text-3xl font-bold md:text-4xl">Industries we serve</h2>
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {industries.map((i) => (
              <span
                key={i}
                className="rounded-full border border-gray-200 bg-white px-5 py-2 text-sm font-medium text-gray-700 shadow-sm"
              >
                {i}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold md:text-4xl">What our clients say</h2>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <blockquote className="text-gray-700">
                <span className="mb-2 block text-4xl leading-none text-blue-500">
                  &ldquo;
                </span>
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                  {getInitials(t.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-r from-gray-800 to-green-900 px-8 py-14 text-center text-white">
          <h2 className="text-3xl font-bold md:text-4xl">
            Ready to become our next success story?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-blue-100">
            Tell us about your project and let&apos;s build something great
            together.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-block rounded-full bg-white px-8 py-3 font-semibold text-blue-700 transition hover:bg-blue-50"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}