"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Phone, MapPin, Award, Check, Building2, Users, Landmark, FileText, Scale, Home as HomeIcon, Palmtree, Download, Handshake, TrendingUp, Linkedin, ChevronLeft, ChevronRight } from "lucide-react";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen flex flex-col bg-[#FAFAF8]">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${scrolled
        ? "bg-white/95 backdrop-blur-xl border-[#E4E4E7] py-4"
        : "bg-transparent border-white/10 py-6"
        }`}>
        <div className="max-w-[1400px] mx-auto px-6 md:px-20 flex justify-between items-center">
          <Link href="/" className="relative h-16 w-16 transition-all duration-300">
            <Image
              src="/logo.png"
              alt="VG INNFRA Logo"
              fill
              className="object-contain"
              priority
            />
          </Link>
          <div className={`hidden md:flex items-center gap-12 text-sm font-medium transition-colors duration-500 ${scrolled ? "text-[#71717A]" : "text-white/90"
            }`}>
            <Link href="#model" className={`text-xs uppercase tracking-widest hover:text-[#A68B5B] transition-colors`}>Model</Link>
            <Link href="#structure" className={`text-xs uppercase tracking-widest hover:text-[#A68B5B] transition-colors`}>Structure</Link>
            <Link href="#process" className={`text-xs uppercase tracking-widest hover:text-[#A68B5B] transition-colors`}>Process</Link>
            <Link href="#contact" className={`px-6 py-3 text-xs uppercase tracking-widest font-semibold transition-all duration-300 ${scrolled
              ? "bg-[#18181B] text-white hover:bg-[#A68B5B]"
              : "bg-white text-[#18181B] hover:bg-[#A68B5B] hover:text-white"
              }`}>
              Get in Touch
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative w-full h-screen flex items-center bg-[#101010]">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero.jpg"
            alt="Luxury Architecture"
            fill
            className="object-cover opacity-80"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-20 pt-20">
          <div className="max-w-3xl space-y-8">
            <div
              className="inline-flex items-center gap-3 px-4 py-2 border border-white/20 bg-white/5 backdrop-blur-sm text-white/90 text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium opacity-0 animate-[fadeUp_0.8s_ease-out_0.2s_forwards]"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#A68B5B]"></span>
              Branded Asset Development Model
            </div>

            <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-medium leading-[1.15] text-white opacity-0 animate-[fadeUp_0.8s_ease-out_0.4s_forwards]">
              Secure Ownership <span className="text-[#C7B796] inline-block mx-2"></span> <span className="whitespace-nowrap">Co Invested Development</span> <span className="text-[#C7B796] inline-block mx-2"></span> Shared Growth
            </h1>

            <div className="h-px w-24 bg-[#A68B5B] opacity-0 animate-[fadeUp_0.8s_ease-out_0.5s_forwards]" />

            <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed font-light opacity-0 animate-[fadeUp_0.8s_ease-out_0.6s_forwards]">
              You own the land. We co invest, build, brand, and monetise — <span className="text-white font-serif italic">value is created together.</span>
            </p>

            <p className="text-white/60 text-sm italic opacity-0 animate-[fadeUp_0.8s_ease-out_0.7s_forwards] border-l-2 border-[#A68B5B] pl-4">
              For investors, landowners & capital partners seeking long-term real estate growth.
            </p>

            <div className="pt-8 opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards]">
              <a
                href="https://wa.me/919711154000?text=Hello%2C%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20VG%20Infra%E2%80%99s%20real%20estate%20investment%20opportunities.%20Kindly%20guide%20me%20on%20the%20next%20steps."
                target="_blank"
                className="inline-flex items-center justify-center gap-2 md:gap-4 bg-[#A68B5B] text-white px-5 py-3 md:px-8 md:py-4 text-[10px] md:text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-[#18181B] transition-all duration-300 group shadow-lg shadow-black/20 w-full md:w-auto"
              >
                Request Investment Prospectus
                <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-2 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </section>



      {/* How It Works */}
      <section id="model" className="py-24 md:py-32 bg-[#FAFAF8]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">

            {/* Left Column - Sticky */}
            <div className="hidden lg:block w-1/2 relative">
              <div className="sticky top-32">
                <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-4">The Model</span>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#18181B] leading-[1.1] mb-8">
                  How We <br /> Work Together
                </h2>
                <div className="relative h-[600px] w-full overflow-hidden rounded-sm shadow-2xl">
                  <Image
                    src="/images/model-section.png"
                    alt="Process Architecture"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-[1.5s]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <div className="absolute bottom-8 left-8 text-white max-w-xs">
                    <p className="font-serif text-xl italic">"Institutional-grade transparency at every step."</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Title */}
            <div className="lg:hidden text-center mb-10">
              <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-2">The Model</span>
              <h2 className="text-4xl font-serif text-[#18181B]">How We Work Together</h2>
            </div>

            {/* Right Column - Scrollable Steps with Timeline */}
            <div className="w-full lg:w-1/2 flex flex-col gap-10 lg:pt-32 pb-10 relative">

              {/* Step 1 */}
              <div className="group relative bg-[#FAFAF8] md:pl-24 transition-all duration-300">
                <div className="hidden md:flex absolute left-0 top-0 w-20 h-20 rounded-full border border-[#E4E4E7] bg-white items-center justify-center text-3xl font-serif text-[#18181B] group-hover:text-white group-hover:bg-[#A68B5B] group-hover:border-[#A68B5B] transition-all duration-500 z-10 shadow-sm">
                  1
                </div>
                {/* Mobile Number */}
                <div className="md:hidden text-6xl font-serif text-[#18181B] mb-4">01</div>

                <div className="p-8 bg-white border border-[#E4E4E7] group-hover:border-[#A68B5B] group-hover:shadow-lg transition-all duration-300 relative">
                  <h3 className="text-2xl font-serif text-[#18181B] mb-3">You Own the Land</h3>
                  <p className="text-[#71717A] leading-relaxed text-base font-light mb-5">
                    Land remains 100% in your name or SPV. Complete security of your asset base.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <span className="px-3 py-1 bg-[#FAFAF8] border border-[#E4E4E7] text-[#A68B5B] text-xs uppercase tracking-wider font-semibold rounded-sm">No Transfer</span>
                    <span className="px-3 py-1 bg-[#FAFAF8] border border-[#E4E4E7] text-[#A68B5B] text-xs uppercase tracking-wider font-semibold rounded-sm">No Dilution</span>
                  </div>
                </div>
              </div>

              {/* Step 2 */}
              <div className="group relative bg-[#FAFAF8] md:pl-24 transition-all duration-300">
                <div className="hidden md:flex absolute left-0 top-0 w-20 h-20 rounded-full border border-[#E4E4E7] bg-white items-center justify-center text-3xl font-serif text-[#18181B] group-hover:text-white group-hover:bg-[#A68B5B] group-hover:border-[#A68B5B] transition-all duration-500 z-10 shadow-sm">
                  2
                </div>
                {/* Mobile Number */}
                <div className="md:hidden text-6xl font-serif text-[#18181B] mb-4">02</div>

                <div className="p-8 bg-white border border-[#E4E4E7] group-hover:border-[#A68B5B] group-hover:shadow-lg transition-all duration-300 relative">
                  <h3 className="text-2xl font-serif text-[#18181B] mb-3">We Co-Invest</h3>
                  <p className="text-[#71717A] leading-relaxed text-base font-light mb-4">
                    VG INNFRA invests capital alongside you in:
                  </p>
                  <div className="space-y-2 mb-6">
                    {["Design & Planning", "Construction Execution", "Branding & Marketing"].map((item, i) => (
                      <div key={i} className="flex items-center gap-3 text-sm text-[#18181B]">
                        <span className="w-1.5 h-1.5 bg-[#A68B5B] rounded-full"></span>
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="p-4 bg-[#FAFAF8] border-l-2 border-[#A68B5B]">
                    <p className="text-[#A68B5B] text-sm font-medium italic serif leading-relaxed">
                      "We don’t just manage projects — we invest our own capital."
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="group relative bg-[#FAFAF8] md:pl-24 transition-all duration-300">
                <div className="hidden md:flex absolute left-0 top-0 w-20 h-20 rounded-full border border-[#E4E4E7] bg-white items-center justify-center text-3xl font-serif text-[#18181B] group-hover:text-white group-hover:bg-[#A68B5B] group-hover:border-[#A68B5B] transition-all duration-500 z-10 shadow-sm">
                  3
                </div>
                {/* Mobile Number */}
                <div className="md:hidden text-6xl font-serif text-[#18181B] mb-4">03</div>

                <div className="p-8 bg-white border border-[#E4E4E7] group-hover:border-[#A68B5B] group-hover:shadow-lg transition-all duration-300 relative">
                  <h3 className="text-2xl font-serif text-[#18181B] mb-4">Branded Development</h3>
                  <div className="grid grid-cols-1 gap-4">
                    {[
                      { text: "Faster Sales Velocity", sub: "Premium positioning drives demand" },
                      { text: "Higher Realistion", sub: "Command market-leading per sq. ft. rates" },
                      { text: "Buyer Confidence", sub: "Trust through institutional branding" }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-4 items-start group/item">
                        <div className="w-8 h-8 rounded-full bg-[#FAFAF8] border border-[#E4E4E7] flex items-center justify-center text-[#A68B5B] shrink-0 group-hover/item:bg-[#A68B5B] group-hover/item:text-white transition-all">
                          <ArrowRight className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-[#18181B] font-medium text-sm">{item.text}</h4>
                          <p className="text-xs text-[#71717A] mt-0.5">{item.sub}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Step 4 */}
              <div className="group relative bg-[#FAFAF8] md:pl-24 transition-all duration-300">
                <div className="hidden md:flex absolute left-0 top-0 w-20 h-20 rounded-full border border-[#E4E4E7] bg-white items-center justify-center text-3xl font-serif text-[#18181B] group-hover:text-white group-hover:bg-[#A68B5B] group-hover:border-[#A68B5B] transition-all duration-500 z-10 shadow-sm">
                  4
                </div>
                {/* Mobile Number */}
                <div className="md:hidden text-6xl font-serif text-[#18181B] mb-4">04</div>

                <div className="p-8 bg-white border border-[#E4E4E7] group-hover:shadow-lg transition-all duration-300 relative">
                  <h3 className="text-2xl font-serif text-[#18181B] mb-6">Shared Growth</h3>
                  <ul className="space-y-4">
                    {[
                      "You retain majority of project upside",
                      "We earn performance-linked fees",
                      "Interests stay fully aligned"
                    ].map((txt, i) => (
                      <li key={i} className="flex gap-3 items-center">
                        <div className="w-5 h-5 rounded-full bg-[#18181B] flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-white" />
                        </div>
                        <span className="text-[#18181B] text-sm font-medium">{txt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* Why This Model is Safer (Replaces Structure) */}
      <section id="structure" className="bg-[#18181B] py-24 md:py-32 border-y border-white/10 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5 pointer-events-none"
          style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '24px 24px' }}>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 md:px-20 relative z-10">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-16">
            <div className="lg:w-1/3">
              <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-4">Trust & Security</span>
              <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">Why This Model <br /> Is Safer</h2>
              <p className="text-white/60 text-base leading-relaxed max-w-sm">
                Built on a foundation of transparency, legal
                robustness, and aligned incentives to protect your land ownership.
              </p>
            </div>

            <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-12">
              {[
                { icon: Shield, title: "100% Secure Land Ownership", desc: "Land title remains in your name throughout." },
                { icon: FileText, title: "Registered JDA + POA", desc: "Legally binding, registered agreements." },
                { icon: Users, title: "Co-Invested Execution", desc: "We invest capital, sharing the risk." },
                { icon: Scale, title: "Transparent Legal Framework", desc: "Clear rights, obligations, and exit terms." },
                { icon: Award, title: "Proven Delivery Experience", desc: "14+ years of execution excellence." }
              ].map((item, idx) => (
                <div key={idx} className={`flex gap-5 group cursor-default ${idx === 4 ? 'sm:col-span-2' : ''}`}>
                  <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#A68B5B] shrink-0 group-hover:bg-[#A68B5B] group-hover:text-white transition-all duration-300 shadow-lg shadow-black/20">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-white font-serif text-xl mb-2 group-hover:text-[#A68B5B] transition-colors">{item.title}</h4>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Investors Trust Section */}
      <section className="py-24 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/2">
              <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-4">Trust & Credibility</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#18181B] leading-tight mb-6">
                Why Investors <br /> Trust VG INNFRA
              </h2>
              <div className="h-1 w-20 bg-[#A68B5B]"></div>
            </div>

            <div className="md:w-1/2 w-full">
              <ul className="space-y-6">
                {[
                  "Capital invested alongside partners",
                  "Land ownership never diluted",
                  "Institutional exposure (Banks & SWAMIH)",
                  "Multiple delivered & exited projects"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 group">
                    <div className="w-10 h-10 rounded-full bg-[#FAFAF8] border border-[#E4E4E7] flex items-center justify-center shrink-0 group-hover:bg-[#18181B] group-hover:border-[#18181B] transition-colors duration-300">
                      <Check className="w-4 h-4 text-[#A68B5B]" />
                    </div>
                    <span className="text-lg md:text-xl text-[#18181B] font-light group-hover:translate-x-2 transition-transform duration-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Proven Track Record Section */}
      <section className="bg-[#18181B] py-24 border-b border-white/10">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          {/* Section Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-2">Performance</span>
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide mb-2">PROVEN TRACK RECORD</h2>
              <p className="text-white/60 text-sm font-light uppercase tracking-wider">Delivered & Executed Projects</p>
            </div>

            <Link
              href="#portfolio"
              className="hidden md:inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#18181B] transition-all duration-300"
            >
              View Delivered Projects & Achievements <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-b border-white/10 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {[
              { val: "₹900 Cr+", label: "Projects Executed" },
              { val: "45 Lakh+", label: "Sq. Ft. Delivered" },
              { val: "14 Years+", label: "Development Experience" },
              { val: "NCR • Goa", label: "Key Markets", sub: "Jaipur • Dehradun" }
            ].map((stat, i) => (
              <div key={i} className="group py-12 px-6 first:pl-0 last:pr-0">
                <div className="text-3xl md:text-5xl font-serif text-[#C7B796] mb-3 group-hover:text-white transition-colors duration-300">
                  {stat.val}
                </div>
                <div className="text-white/60 text-xs uppercase tracking-widest font-medium mb-1">
                  {stat.label}
                </div>
                {stat.sub && (
                  <div className="text-white/40 text-[10px] uppercase tracking-wider">{stat.sub}</div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Button */}
          <div className="mt-10 md:hidden">
            <Link
              href="#portfolio"
              className="inline-flex w-full justify-center items-center gap-3 px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#18181B] transition-all duration-300"
            >
              View Delivered Projects & Achievements <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
        </div>
      </section>

      {/* Typical Assets Section */}
      <section className="py-24 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="mb-16">
            <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-3">Our Focus</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#18181B] tracking-tight mb-6">Typical Assets We Develop</h2>
            <div className="h-1 w-20 bg-[#A68B5B]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Luxury Villas", icon: HomeIcon },
              { title: "Premium & Luxury Apartments", icon: Building2 },
              { title: "Boutique Residential Projects", icon: Palmtree },
              { title: "Select High-Value Urban Developments", icon: Landmark }
            ].map((asset, i) => (
              <div key={i} className="group relative p-8 bg-[#FAFAF8] border border-[#E4E4E7] hover:border-[#A68B5B] hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[#E4E4E7]/20 rounded-bl-full -mr-8 -mt-8 transition-colors group-hover:bg-[#A68B5B]/10"></div>

                <div className="w-12 h-12 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-[#18181B] mb-6 group-hover:bg-[#A68B5B] group-hover:border-[#A68B5B] group-hover:text-white transition-all duration-300 relative z-10">
                  <asset.icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-serif text-[#18181B] leading-snug relative z-10">
                  {asset.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Real Estate Participation Models (New Section) */}
      <section className="py-24 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="max-w-3xl mb-16">
            <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-3">Engagement Models</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#18181B] tracking-tight mb-6">Strategic Real Estate <br /> Participation Models</h2>
            <div className="h-1 w-20 bg-[#A68B5B] mb-8"></div>
            <p className="text-[#71717A] text-lg font-light leading-relaxed">
              We structure real estate investments to maximise value, manage risk, and align returns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                title: "Joint Development Model",
                desc: "Invest in land while we handle planning, construction, and sales — with profits shared under a defined structure.",
                icon: Handshake
              },
              {
                title: "Early Entry Investment Model",
                desc: "Participate in our ongoing projects at an early stage with structured terms and defined return potential.",
                icon: TrendingUp
              },
              {
                title: "Landowner Development Model",
                desc: "Own land? We evaluate, develop, and execute the project, sharing the completed inventory as agreed.",
                icon: MapPin
              },
              {
                title: "Fully Managed Investment Model",
                desc: "A complete, hands-off structure where we manage land, development, and exit end-to-end.",
                icon: Shield
              }
            ].map((model, i) => (
              <div key={i} className="group flex gap-6 p-8 border border-[#E4E4E7] hover:border-[#A68B5B] hover:shadow-lg transition-all duration-300 bg-[#FAFAF8]">
                <div className="shrink-0">
                  <div className="w-14 h-14 rounded-full bg-white border border-[#E4E4E7] flex items-center justify-center text-[#A68B5B] group-hover:bg-[#A68B5B] group-hover:text-white transition-all duration-300 shadow-sm">
                    <model.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-serif text-[#18181B] mb-3 group-hover:text-[#A68B5B] transition-colors">
                    {i + 1}. {model.title}
                  </h3>
                  <p className="text-[#71717A] text-sm leading-relaxed group-hover:text-[#18181B]/80 transition-colors">
                    {model.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-[#18181B] text-white/80 rounded-sm border-l-4 border-[#A68B5B]">
            <p className="text-sm md:text-base italic font-serif tracking-wide">
              "Each model is structured case-by-case based on feasibility, capital structure, and alignment."
            </p>
          </div>
        </div>

      </section>

      {/* Who This Is For Section */}
      <section className="py-24 bg-[#18181B] text-white">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
            {/* Left: Heading & Summary */}
            <div className="lg:w-1/3">
              <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-4">Target Audience</span>
              <h2 className="text-3xl md:text-5xl font-serif mb-8 leading-tight">Who This Is For</h2>
              <div className="p-6 border-l-2 border-[#A68B5B] bg-white/5">
                <p className="text-white/80 text-lg font-light leading-relaxed italic">
                  "If you own land or capital and seek structured, premium real estate growth, this model is built for you."
                </p>
              </div>
            </div>

            {/* Right: List of 3 */}
            <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Strategic Landowners", icon: MapPin },
                { title: "HNI & NRI Investors", icon: Users },
                { title: "Family Offices & Boutique Funds", icon: Building2 }
              ].map((item, i) => (
                <div key={i} className="group p-8 border border-white/10 bg-white/5 hover:bg-[#A68B5B] hover:border-[#A68B5B] transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-[#A68B5B] mb-6 group-hover:bg-white group-hover:text-[#A68B5B] transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif text-white group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About VG INNFRA Section */}
      <section className="py-24 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
            {/* Left: Image */}
            <div className="w-full lg:w-1/2 relative h-[500px] rounded-sm overflow-hidden shadow-2xl group">
              <Image
                src="/images/about-luxury.png"
                alt="VG INNFRA Luxury Development"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-[1.5s]"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Right: Text */}
            <div className="w-full lg:w-1/2">
              <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-4">About Us</span>
              <h2 className="text-4xl md:text-5xl font-serif text-[#18181B] mb-8 leading-tight">ABOUT <br /> VG INNFRA</h2>
              <div className="space-y-6">
                <p className="text-[#18181B] text-lg md:text-xl font-light leading-relaxed">
                  VG INNFRA is a brand-first real estate development platform focused on creating premium and ultra-luxury residential assets through co-invested, institutional-grade structures.
                </p>
                <p className="text-[#71717A] text-base leading-relaxed">
                  We combine capital, creativity, and execution expertise to unlock value for landowners and investors alike, delivering projects that stand as landmarks of quality and design.
                </p>
              </div>
              <div className="mt-10">
                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-[#18181B] border-b border-[#18181B] pb-1 uppercase tracking-widest text-xs font-semibold hover:text-[#A68B5B] hover:border-[#A68B5B] transition-colors"
                >
                  Discover Our Vision <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section (Updated) */}
      <section id="portfolio" className="py-24 bg-[#FAFAF8] border-b border-[#E4E4E7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="mb-16">
            <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-3">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#18181B] tracking-tight mb-6">Featured Developments</h2>
            <div className="h-1 w-20 bg-[#A68B5B]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Serene Valley Estate",
                location: "Dehradun, Uttarakhand",
                type: "Luxury Villas / Land",
                status: "Delivered",
                tagColor: "bg-green-500",
                images: [
                  "/images/projects/dehradun/dehradun1.jpeg",
                  "/images/projects/dehradun/dehradun2.jpeg",
                  "/images/projects/dehradun/dehradun3.jpeg",
                  "/images/projects/dehradun/dehradun4.jpeg",
                  "/images/projects/dehradun/dehradun5.jpeg",
                  "/images/projects/dehradun/dehradun6.jpeg"
                ]
              },
              {
                name: "Noida Residency",
                location: "Noida, UP",
                type: "Residential Project",
                status: "Delivered",
                tagColor: "bg-green-500",
                images: ["/images/projects/noida/noida1.jpeg"]
              },
              {
                name: "Pitampura Landmark",
                location: "Pitampura, New Delhi",
                type: "Residential / Commercial",
                status: "Ongoing",
                tagColor: "bg-yellow-500",
                images: ["/images/projects/delhi-pritampura/delhi1.jpeg"]
              },
              {
                name: "Noida Extension Heights",
                location: "Noida Extension",
                type: "470 Apartments",
                status: "Upcoming",
                tagColor: "bg-blue-500",
                images: ["/images/projects/noida-un/WhatsApp Image 2026-02-16 at 18.28.51.jpeg"]
              },
              {
                name: "Goa Coastal Villas",
                location: "North Goa",
                type: "6 Luxury Stand-alone Villas",
                status: "Ongoing",
                tagColor: "bg-yellow-500",
                images: [
                  "/images/projects/goa/goa1.jpeg",
                  "/images/projects/goa/goa2.jpeg"
                ]
              }
            ].map((project, i) => (
              <ProjectCard key={i} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* RERA & Banking Approvals */}
      <section className="py-16 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-1/3">
              <h3 className="text-xl font-serif text-[#18181B] mb-2">Compliance & Approvals</h3>
              <p className="text-[#71717A] text-sm leading-relaxed">
                Fully compliant with RERA regulations and approved by leading financial institutions.
              </p>
            </div>
            <div className="md:w-2/3 flex flex-wrap gap-8 items-center justify-center md:justify-end">
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 relative mb-2">
                  <Image src="/images/logos/rera-logo.svg" alt="RERA Registered" fill className="object-contain" />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-[#71717A] mb-1">RERA Registered</span>
              </div>
              <div className="h-12 w-px bg-[#E4E4E7] mx-4 hidden md:block"></div>
              <div className="flex gap-8 items-center opacity-100">
                <div className="w-24 h-12 relative">
                  <Image src="/images/logos/hdfc-logo.svg" alt="HDFC Bank" fill className="object-contain" />
                </div>
                <div className="w-24 h-12 relative">
                  <Image src="/images/logos/sbi-logo.svg" alt="SBI" fill className="object-contain" />
                </div>
                <div className="w-24 h-12 relative">
                  <Image src="/images/logos/icici-logo.png" alt="ICICI Bank" fill className="object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section id="process" className="py-24 bg-white border-b border-[#E4E4E7]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="mb-16">
            <span className="text-[#A68B5B] text-xs uppercase tracking-widest font-semibold block mb-3">Process</span>
            <h2 className="text-3xl md:text-5xl font-serif text-[#18181B] tracking-tight mb-6">WHAT HAPPENS NEXT</h2>
            <div className="h-1 w-20 bg-[#A68B5B]"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "Confidential Discussion", desc: "Understanding your asset & goals." },
              { title: "Land / Opportunity Assessment", desc: "Technical & market feasibility." },
              { title: "Structure & Feasibility Shared", desc: "Transparent proposal for value unlocking." }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-start text-left group">
                <div className="w-16 h-16 rounded-full border border-[#E4E4E7] bg-[#FAFAF8] flex items-center justify-center text-[#18181B] text-xl font-serif mb-6 group-hover:bg-[#18181B] group-hover:text-white transition-all duration-300 shadow-lg">
                  {i + 1}
                </div>
                <h3 className="text-xl font-serif text-[#18181B] mb-3">{step.title}</h3>
                <p className="text-[#71717A] text-sm">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / CTA (Restored Split Layout) */}
      <footer id="contact" className="bg-[#18181B] text-white py-24 md:py-32">
        <div className="max-w-[1400px] mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* Left Column */}
            <div>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                Transform Your Land into a <span className="text-[#71717A]">Branded Wealth Asset.</span>
              </h2>

            </div>

            {/* Right Column */}
            <div className="border border-white/10 p-10 md:p-16">
              <div className="mb-8">
                <span className="text-2xl font-serif font-semibold tracking-tight text-white block mb-2">
                  VG<span className="text-[#A68B5B]">.</span>INNFRA
                </span>
                <p className="text-white/60 text-xs uppercase tracking-widest">Transforming Ownership into Branded Wealth</p>
              </div>

              <h3 className="font-serif text-xl mb-4 text-[#C7B796]">Selective Partnerships Only</h3>
              <p className="text-white/60 text-sm leading-relaxed mb-8">
                Capital and land aligned for long-term value creation. We engage exclusively with landowners and investors who share our vision.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 text-sm text-white/50 hover:text-white transition-colors">
                  <MapPin className="w-4 h-4 mt-1 text-[#A68B5B]" />
                  <span>KD-170, First Floor, Pitampura, Near Kohat Metro Station, New Delhi - 110034</span>
                </div>
                <div className="flex items-start gap-4 text-sm text-white/50 hover:text-white transition-colors">
                  <div className="w-4 h-4 mt-1 text-[#A68B5B] flex items-center justify-center font-serif">@</div>
                  <a href="mailto:partnerships@vg-infra.com">partnerships@vg-infra.com</a>
                </div>
                <div className="flex items-start gap-4 text-sm text-white/50 hover:text-white transition-colors">
                  <Linkedin className="w-4 h-4 mt-1 text-[#A68B5B]" />
                  <a href="https://www.linkedin.com/in/verun-gupta-417657102" target="_blank" rel="noopener noreferrer">Verun Gupta</a>
                </div>
                <div className="flex items-start gap-4 text-sm text-white/50 hover:text-white transition-colors">
                  <Users className="w-4 h-4 mt-1 text-[#A68B5B]" />
                  <a href="#">Investor Relations</a>
                </div>
                {/* 
                <div className="flex items-start gap-4 text-sm text-white/50">
                   <div className="w-4 h-4" /> 
                   <span>partners@vginnfra.com</span>
                </div>
                */}
              </div>
            </div>
          </div>

          <div className="mt-24 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-widest">
            <span>© 2026 VG INNFRA • All Rights Reserved</span>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
            </div>
          </div>
        </div>
      </footer>
      {/* Floating Action Buttons */}
      <div className="fixed top-1/2 right-2 md:right-8 -translate-y-1/2 z-50 flex flex-col gap-3 md:gap-4 items-end">
        {/* LinkedIn */}
        <div className="group flex items-center gap-3">
          <span className="hidden md:block bg-white text-[#18181B] px-3 py-1.5 rounded-md text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            LinkedIn
          </span>
          <a
            href="https://www.linkedin.com/in/verun-gupta-417657102"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 md:w-14 md:h-14 bg-[#0A66C2] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 text-white"
          >
            <Linkedin className="w-5 h-5 md:w-7 md:h-7" />
          </a>
        </div>

        {/* WhatsApp */}
        <div className="group flex items-center gap-3">
          <span className="hidden md:block bg-white text-[#18181B] px-3 py-1.5 rounded-md text-xs font-semibold shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
            WhatsApp
          </span>
          <a
            href="https://wa.me/919711154000?text=Hello%2C%20I%E2%80%99m%20interested%20in%20learning%20more%20about%20VG%20Infra%E2%80%99s%20real%20estate%20investment%20opportunities.%20Kindly%20guide%20me%20on%20the%20next%20steps."
            target="_blank"
            className="w-10 h-10 md:w-14 md:h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-300 text-white"
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 md:w-8 md:h-8 fill-white" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>
      </div>
    </main >
  );
}
