"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Users,
  Target,
  Award,
  TrendingUp,
  Code,
  Shield,
  Zap,
  Globe,
  CheckCircle,
  Play,
  Quote,
} from "lucide-react";

export default function AboutPage() {
  const [activeValue, setActiveValue] = useState(0);
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveValue((prev) => (prev + 1) % 4);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-green-50/30 to-slate-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-24 px-6">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-green-400/10 rounded-full blur-3xl animate-float-delayed" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-green-500/5 to-green-500/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold mb-6 animate-fade-in">
              <div className="w-2 h-2 bg-green-600 rounded-full animate-pulse" />
              Trusted by 100+ Companies 
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-tight animate-slide-up">
              <span className="bg-gradient-to-r from-gray-900 via-green-900 to-gray-900 bg-clip-text text-transparent">
                Building Digital
              </span>
              <br />
              <span className="bg-gradient-to-r from-green-600 via-green-600 to-green-600 bg-clip-text text-transparent">
                Excellence
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto animate-fade-in-delayed">
              We transform bold ideas into powerful digital solutions that drive
              growth, innovation, and lasting impact.
            </p>

            
{/* Hero Buttons */}
<div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-delayed-2">
  <Link
    href="/contact"
    className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
  >
    Start Your Project
    <ArrowRight
      size={20}
      className="group-hover:translate-x-1 transition-transform"
    />
  </Link>

  <button
    type="button"
    onClick={() => setIsVideoOpen(true)}
    className="group px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-green-600 hover:shadow-xl transition-all duration-300 flex items-center gap-2"
  >
    <Play
      size={20}
      className="group-hover:scale-110 transition-transform"
    />
    Watch Our Story
  </button>
</div>

{/* YouTube Video Modal */}
{isVideoOpen && (
  <div
    className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 p-4"
    onClick={() => setIsVideoOpen(false)}
  >
    <div
      className="relative w-full max-w-4xl overflow-hidden rounded-2xl bg-black shadow-2xl"
      onClick={(e) => e.stopPropagation()}
    >
      {/* Close Button */}
      <button
        type="button"
        onClick={() => setIsVideoOpen(false)}
        className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-black/70 text-2xl text-white hover:bg-red-600"
        aria-label="Close video"
      >
        &times;
      </button>

      {/* Responsive YouTube Player */}
      <div className="aspect-video w-full">
        <iframe
          className="h-full w-full"
          src="https://www.youtube.com/embed/ENUc2ikVeB8?autoplay=1&rel=0"
          title="Watch Our Story"
          allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </div>
  </div>
)}

          </div>
        </div>

        {/* Stats Bar */}
        <div className="max-w-7xl mx-auto mt-20 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "10000+", label: "Happy Clients", icon: Users },
              { number: "100+", label: "Projects Delivered", icon: Target },
              { number: "10+", label: "Years Experience", icon: Award },
              { number: "99%", label: "Client Satisfaction", icon: TrendingUp },
            ].map((stat, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl hover:scale-105 transition-all duration-300"
              >
                <stat.icon className="w-8 h-8 text-green-600 mb-3" />
                <div className="text-4xl font-bold bg-gradient-to-r from-green-600 to-green-600 bg-clip-text text-transparent mb-1">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-block px-4 py-2 bg-green-50 text-green-600 rounded-full text-sm font-semibold mb-4">
                Our Story
              </div>
              <h2 className="text-5xl font-bold mb-6 text-gray-900 leading-tight">
                From a pool of ambitious professionals to a technology group.{" "}
                <span className="text-green-600"></span>
              </h2>
              <div className="space-y-4 text-lg text-gray-600 leading-relaxed">
                <p>
                  Global Tech is a company, founded by a pool of talented and ambitious professionals having more than 15 years of experiences in Business Development, ERP Solutions, Software Development, System & Networking Solutions. We grouped together with an aim to provide one step solution for Software, System, Networking and Cloud Computing. We develop Organization Management Software (OMS) as per customer need and deliver customized ERP software which helps them for their business growth. After all these years of hard work and experience, Global Tech now has a Tech Group.
                </p>
                {/* <p>
                  Today, we combine cutting-edge technology with human-centered
                  design to create solutions that don't just work—they
                  transform. Our approach is built on collaboration,
                  transparency, and a relentless commitment to excellence.
                </p>
                <p>
                  From startups to Fortune 500 companies, we've helped
                  organizations across industries realize their digital
                  ambitions and achieve measurable results.
                </p> */}
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/case-studies"
                  className="inline-flex items-center gap-2 text-green-600 font-semibold hover:gap-3 transition-all"
                >
                  View Case Studies
                  <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-green-100 to-green-100 overflow-hidden shadow-2xl">
                <img
                  src="/aboutimage.png"
                  alt="Global Tech Team"
                  className=""
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-gray-100 max-w-xs">
                <div className="text-3xl font-bold text-green-600 mb-1">
                  10+
                </div>
                <div className="text-sm text-gray-600">
                  Years of delivering excellence in digital solutions
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-gray-900 via-green-900 to-gray-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] bg-repeat" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-green-200 max-w-2xl mx-auto">
              The principles that guide every decision we make and every
              solution we build
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Code,
                title: "Innovation First",
                description:
                  "We push boundaries with cutting-edge technology and creative problem-solving",
                color: "from-green-500 to-teal-500",
              },
              {
                icon: Shield,
                title: "Trust & Security",
                description:
                  "Your data and success are our top priority, protected at every level",
                color: "from-green-500 to-green-500",
              },
              {
                icon: Zap,
                title: "Speed & Quality",
                description:
                  "Rapid delivery without compromising on excellence or attention to detail",
                color: "from-green-500 to-green-500",
              },
              {
                icon: Globe,
                title: "Global Impact",
                description:
                  "Building solutions that scale globally while serving locally",
                color: "from-green-500 to-green-500",
              },
            ].map((value, idx) => (
              <div
                key={idx}
                className={`group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer ${
                  activeValue === idx ? "ring-2 ring-white/30 scale-105" : ""
                }`}
                onMouseEnter={() => setActiveValue(idx)}
              >
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                >
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-3">{value.title}</h3>
                <p className="text-green-200 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Mission */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-3xl p-12 shadow-xl border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Mission
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To empower businesses with innovative digital solutions that
                drive growth, efficiency, and competitive advantage. We&apos;re
                committed to turning complex challenges into elegant,
                user-friendly technology that delivers real business value.
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-br from-green-50 to-green-50 rounded-3xl p-12 shadow-xl border border-green-100">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Our Vision
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                To be the world&apos;s most trusted digital transformation partner,
                recognized for our innovation, integrity, and impact. We
                envision a future where technology seamlessly enhances every
                aspect of business and life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold mb-4 text-gray-900">
              Why Choose Global Tech?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We don&apos;t just build software—we build partnerships that drive
              lasting success
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "End-to-End Expertise",
                description:
                  "From strategy to deployment, our full-stack team handles every aspect of your digital journey with precision and care.",
                points: [
                  "Strategic Planning",
                  "UI/UX Design",
                  "Development",
                  "Deployment & Support",
                ],
              },
              {
                title: "Proven Track Record",
                description:
                  "With 1200+ successful projects across 25+ industries, we have the experience to deliver results that matter.",
                points: [
                  "98% Client Retention",
                  "Award-Winning Solutions",
                  "Industry Recognition",
                  "Global Reach",
                ],
              },
              {
                title: "Agile & Transparent",
                description:
                  "Stay in control with regular updates, clear communication, and flexible development processes tailored to your needs.",
                points: [
                  "Weekly Progress Reports",
                  "Dedicated Project Manager",
                  "Flexible Engagement Models",
                  "Complete Transparency",
                ],
              },
            ].map((reason, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-50 to-green-50 rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:scale-105 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {reason.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {reason.description}
                </p>
                <ul className="space-y-3">
                  {reason.points.map((point, pidx) => (
                    <li key={pidx} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 bg-gradient-to-br from-slate-50 to-green-50">
  <div className="max-w-6xl mx-auto">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold mb-4 text-gray-900">
        Meet The Founder
      </h2>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto">
        The vision and leadership behind Global Tech
      </p>
    </div>

    {/* Owner Card */}
    <div className="flex justify-center">
      {[
        {
          name: "Sanjay Rauniyar",
          role: "Managing Director",
          image: "/myimage.png",
          bio: "Driven by innovation, technology, and a mission to build scalable digital solutions that empower businesses."
        }
      ].map((owner, idx) => (
        <div
          key={idx}
          className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 max-w-md"
        >
          <div className="aspect-square bg-gradient-to-br from-green-100 to-green-100 overflow-hidden">
            <img
              src={owner.image}
              alt={owner.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
            />
          </div>

          <div className="p-8 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-1">
              {owner.name}
            </h3>
            <p className="text-green-600 font-semibold mb-4">
              {owner.role}
            </p>
            <p className="text-gray-600 leading-relaxed">
              {owner.bio}
            </p>
          </div>
        </div>
      ))}
    </div>

  </div>
</section>


      {/* Testimonial */}
      <section className="py-24 px-6 bg-gradient-to-r from-gray-800 to-green-900">
        <div className="max-w-5xl mx-auto text-center text-white">
          <Quote className="w-16 h-16 mx-auto mb-8 opacity-50" />
          <blockquote className="text-3xl md:text-4xl font-bold mb-8 leading-relaxed">
            &quot;Global Tech transformed our digital presence completely. Their
            expertise, professionalism, and commitment to our success exceeded
            all expectations.&quot;
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full overflow-hidden">
              <img
                src="/myimage.png"
                alt="Client"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="text-left">
              <div className="font-bold text-lg">Sanjay Rauniyar</div>
              <div className="text-green-100"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 text-gray-900">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Let&apos;s discuss how we can help transform your digital vision into
            reality. Get a free consultation with our experts.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-gradient-to-r from-green-600 to-green-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-green-500/50 transition-all duration-300 hover:scale-105 flex items-center gap-2"
            >
              Get Started Today
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
            <Link
              href="/case-studies"
              className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 hover:border-green-600 hover:shadow-xl transition-all duration-300"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </section>

      {/* Video Modal */}
      {isVideoOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-6"
          onClick={() => setIsVideoOpen(false)}
        >
          <div
            className="relative w-full max-w-5xl aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
            >
              ✕
            </button>
            {/* Replace with actual video */}
            <div className="w-full h-full flex items-center justify-center text-white">
              <Play size={64} />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(-20px) scale(1.05);
          }
        }
        @keyframes float-delayed {
          0%,
          100% {
            transform: translateY(0) scale(1);
          }
          50% {
            transform: translateY(20px) scale(0.95);
          }
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
        .animate-fade-in-delayed {
          animation: fade-in 1s ease-out 0.2s backwards;
        }
        .animate-fade-in-delayed-2 {
          animation: fade-in 1s ease-out 0.4s backwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out;
        }
      `}</style>
    </div>
  );
}
