'use client';

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Services from "@/components/Services";
import About from "@/components/About";
import Companies from "@/components/Companies";
import Footer from "@/components/Footer";

function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(true);

  const toggle = () => {
    const v = videoRef.current;
    if (!v) return;
    if (v.paused) {
      v.play();
      setPlaying(true);
    } else {
      v.pause();
      setPlaying(false);
    }
  };

  return (
    <section
      className="split-2 grid border-b border-black"
      style={{ gridTemplateColumns: "1fr 1fr", borderBottomWidth: "1.5px" }}
    >
      {/* Left */}
      <div
        className="border-r border-black flex flex-col justify-between"
        style={{ padding: "52px 40px 48px", borderRightWidth: "1.5px" }}
      >
        <div>
          <div className="text-[10px] tracking-[0.16em] uppercase text-[#bbb] mb-5">
            Controls Engineering · Brighton, MI
          </div>
          <h1
            className="text-[40px] md:text-[44px] font-medium text-black leading-[1.05]"
            style={{ letterSpacing: "-0.025em" }}
          >
            Controls
            <br />
            Engineering
            <br />
            <span className="text-[#ccc]">and Automation</span>
            <br />
            Solutions.
          </h1>
          <p className="text-[12px] text-[#999] leading-[1.75] mt-7 mb-6 max-w-[320px]">
            From panel building and PLC programming to robot integration and
            vision systems — we can handle it all.
          </p>
          <div className="flex flex-wrap gap-[10px]">
            <a
              href="#services"
              className="text-[12px] bg-black text-cream rounded-[4px] font-medium hover:opacity-90 transition-opacity"
              style={{ padding: "11px 24px" }}
            >
              Explore Services
            </a>
            <Link
              href="/recent"
              className="text-[12px] border border-[#ccc] text-[#555] rounded-[4px] hover:border-black hover:text-black transition-colors"
              style={{ padding: "11px 24px" }}
            >
              View Projects →
            </Link>
          </div>
        </div>
      </div>

      {/* Right */}
      <div
        className="relative flex items-center justify-center bg-[#111]"
        style={{ padding: "32px", minHeight: "340px" }}
      >
        <div
          className="relative w-full max-w-[550px] rounded-[10px] overflow-hidden border border-[#2a2a2a] bg-[#1a1a1a]"
          style={{ aspectRatio: "16 / 10" }}
        >
          <video
            ref={videoRef}
            src="https://nagel-images.s3.us-east-1.amazonaws.com/8mb.video-4xe-sFKpjee3.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="block w-full h-full object-cover opacity-90"
          />
          {/* <button
            type="button"
            onClick={toggle}
            aria-label={playing ? "Pause video" : "Play video"}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 cursor-pointer group"
          >
            <span className="w-11 h-11 rounded-full bg-white/10 border border-white/25 flex items-center justify-center group-hover:bg-white/20 transition-colors">
              {playing ? (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden
                >
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              ) : (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="white"
                  aria-hidden
                  style={{ marginLeft: 3 }}
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              )}
            </span>
            <span className="text-[10px] uppercase tracking-[0.1em] text-white/30">
              See our work
            </span>
          </button> */}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section
      className="split-2 grid border-b border-black"
      style={{ gridTemplateColumns: "1fr 1fr", borderBottomWidth: "1.5px" }}
    >
      <div
        className="border-r border-black"
        style={{ padding: "60px 40px", borderRightWidth: "1.5px" }}
      >
        <div className="section-eyebrow">Get in touch</div>
        <h2
          className="text-[32px] font-medium text-black leading-[1.1] mb-3 mt-4"
          style={{ letterSpacing: "-0.02em" }}
        >
          Let&apos;s build
          <br />
          something
          <br />
          <em className="not-italic text-[#ccc]">that works.</em>
        </h2>
        <p className="text-[13px] text-[#aaa] leading-[1.75] mb-7">
          Tell us about your project. We&apos;ll put together a solution that
          fits your operation, timeline, and budget.
        </p>
        <Link
          href="/contact"
          className="inline-block text-[12px] bg-black text-cream rounded-[4px] font-medium hover:opacity-90 transition-opacity"
          style={{ padding: "11px 24px" }}
        >
          Get a Quote
        </Link>
      </div>

      <div
        className="flex flex-col justify-center"
        style={{ padding: "60px 40px" }}
      >
        {[
          { label: "Email", value: "richard.nagel@nagelcontrols.com" },
          { label: "Phone", value: "+1 (517) 499-7264" },
          { label: "Address", value: "1175 Rickett Rd, Suite 1, Brighton, MI" },
          { label: "LinkedIn", value: "Nagel Controls" },
        ].map((row, i, arr) => (
          <div
            key={row.label}
            className={`flex items-baseline gap-3 py-[14px] border-b border-[var(--rule-soft)] ${
              i === 0 ? "border-t" : ""
            }`}
          >
            <span className="text-[10px] uppercase tracking-[0.1em] text-[#ccc] min-w-[60px]">
              {row.label}
            </span>
            <span className="text-[12px] text-[#444]">{row.value}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <div
      className={`pg transition-opacity duration-700 ${
        isLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <NavBar />
      <Hero />
      <Services />
      <About />
      <Companies />
      <CTA />
      <Footer />
    </div>
  );
}
