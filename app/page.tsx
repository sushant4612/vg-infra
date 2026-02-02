"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Shield, Phone, MapPin, Award, Check, Building2, Users, Landmark, FileText, Scale, Home as HomeIcon, Palmtree } from "lucide-react";

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
          <Link href="/" className="flex items-center gap-2">
            <span className={`text-2xl md:text-3xl font-serif font-semibold tracking-tight transition-colors duration-500 ${scrolled ? "text-[#18181B]" : "text-white"
              }`}>
              VG<span className="text-[#A68B5B]">.</span>INNFRA
            </span>
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
            src="/images/hero_luxury_building_1770050956412.png"
            alt="Luxury Architecture"
            fill
            className="object-cover opacity-80"
            priority
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

            <div className="pt-8 opacity-0 animate-[fadeUp_0.8s_ease-out_0.8s_forwards]">
              <Link
                href="#contact"
                className="inline-flex items-center gap-4 bg-[#A68B5B] text-white px-8 py-4 text-sm uppercase tracking-widest font-semibold hover:bg-white hover:text-[#18181B] transition-all duration-300 group shadow-lg shadow-black/20"
              >
                Request a Call
                <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
              </Link>
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
              <h2 className="text-3xl md:text-4xl font-serif text-white tracking-wide">PROVEN TRACK RECORD</h2>
            </div>

            <Link
              href="#portfolio"
              className="hidden md:inline-flex items-center gap-3 px-6 py-3 border border-white/20 text-white text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-[#18181B] transition-all duration-300"
            >
              View Track Record <ArrowRight className="w-3 h-3" />
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
              View Track Record <ArrowRight className="w-3 h-3" />
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
              <span className="text-[#C7B796] text-xs uppercase tracking-widest font-semibold block mb-6">Call to Action</span>
              <h2 className="text-4xl md:text-6xl font-serif leading-tight mb-8">
                Transform Your Land into a <span className="text-[#71717A]">Branded Wealth Asset.</span>
              </h2>
              <a href="tel:+919711154000" className="inline-flex items-center gap-4 text-white hover:text-[#C7B796] transition-colors group">
                <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#C7B796] group-hover:text-[#18181B] transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="flex flex-col">
                  <span className="text-xl md:text-2xl font-serif tracking-wide">+91 97111 54000</span>
                  <span className="text-xs uppercase tracking-widest text-white/50 group-hover:text-white/70">Request a Confidential Call</span>
                </div>
              </a>
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
                <div className="flex items-start gap-4 text-sm text-white/50">
                  <MapPin className="w-4 h-4 mt-1 text-[#A68B5B]" />
                  <span>New Delhi, India</span>
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
    </main >
  );
}
