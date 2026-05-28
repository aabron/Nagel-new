'use client';

import React, { useMemo, useState } from "react";
import Link from "next/link";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

type Project = {
  title: string;
  client?: string;
  year?: string;
  location?: string;
  description: string;
  technologies: string[];
  images: string[];
  videos?: string[];
};

const projects: Project[] = [
  {
    title: "Y2 Punch Press",
    client: "Confidential — Mexico",
    year: "2024",
    location: "Brighton, MI → Mexico",
    description:
      "Programmed and built the panel for the Y2 punch press, with the HMI translated into Spanish for the destination plant in Mexico. The cabinet utilizes a Siemens PLC.",
    technologies: [
      "Siemens PLC",
      "HMI Programming",
      "Spanish Translation",
      "Panel Building",
    ],
    images: ["machine.jpg", "wiring.jpg"],
  },
  {
    title: "Permobil Wheelchair Assembly",
    client: "Permobil",
    year: "2024",
    location: "Brighton, MI",
    description:
      "A measurement table built for Permobil — uses Keyence cameras to verify the distance between wheels so each chair leaves the line tracking straight. The system tells the operator in real time whether the assembly is within acceptable margins.",
    technologies: [
      "Keyence Vision",
      "Quality Control",
      "Precision Measurement",
      "Assembly Automation",
    ],
    images: ["20240208_141110.jpg"],
  },
  {
    title: "KM Bezel Press",
    client: "KM Automotive",
    year: "2023",
    location: "Michigan",
    description:
      "Automated bezel pressing system for KM automotive components. This precision system ensures consistent pressure and positioning for quality interior parts production.",
    technologies: [
      "Precision Pressing",
      "Automotive Components",
      "Quality Assurance",
      "Automated Systems",
    ],
    images: ["KM Bezel Presslam-1.jpg"],
  },
  {
    title: "311D Sonic Welding",
    client: "Inoac",
    year: "2024",
    location: "Brighton, MI → Mexico",
    description:
      "A two-robot cell using Fanuc robots to sonic-weld leather to plastic. Sonic welding is performed via a Sonopet J2. The system was commissioned at Inoac in Mexico.",
    technologies: [
      "Fanuc Robotics",
      "Sonic Welding",
      "Sonopet J2",
      "Automated Welding",
    ],
    images: ["IMG_9629.JPG"],
    videos: [
      "https://nagel-images.s3.us-east-1.amazonaws.com/8mb.video-4xe-sFKpjee3.mp4",
      "https://nagel-images.s3.us-east-1.amazonaws.com/IMG_9633.mp4",
    ],
  },
];

const isVideo = (src: string) =>
  /\.(mp4|mov|webm|m4v)(\?|$)/i.test(src);

const RecentPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mediaIndex, setMediaIndex] = useState(0);

  const project = projects[currentIndex];
  const allMedia = useMemo(
    () => [...project.images, ...(project.videos || [])],
    [project]
  );
  const currentMedia = allMedia[mediaIndex];

  const nextMedia = () =>
    setMediaIndex((p) => (p === allMedia.length - 1 ? 0 : p + 1));
  const prevMedia = () =>
    setMediaIndex((p) => (p === 0 ? allMedia.length - 1 : p - 1));

  const selectProject = (i: number) => {
    setCurrentIndex(i);
    setMediaIndex(0);
  };

  return (
    <div className="pg">
      <NavBar isNotHome />

      {/* Hero */}
      <section
        className="split-2 grid border-b border-black"
        style={{ gridTemplateColumns: "1fr 1fr", borderBottomWidth: "1.5px" }}
      >
        <div
          className="border-r border-black"
          style={{
            padding: "52px 40px",
            borderRightWidth: "1.5px",
            minHeight: "280px",
          }}
        >
          <div className="section-eyebrow">Recent work</div>
          <h1
            className="text-[40px] font-medium text-black leading-[1.05] mt-5"
            style={{ letterSpacing: "-0.025em" }}
          >
            Selected
            <br />
            projects from
            <br />
            <span className="text-[#ccc]">the shop floor.</span>
          </h1>
          <p className="text-[13px] text-[#999] leading-[1.75] mt-6 max-w-[420px]">
            A look at controls work we&apos;ve shipped — panel builds, robot
            cells, vision systems and automation projects for customers across
            automotive and manufacturing.
          </p>
        </div>

        <div
          className="bg-[var(--cream-2)] flex flex-col justify-center"
          style={{ padding: "52px 40px" }}
        >
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#bbb] mb-6">
            By the numbers
          </div>
          <div
            className="grid grid-cols-3 rounded-[8px] overflow-hidden border border-[var(--rule)]"
            style={{ gap: "1px", background: "var(--rule)" }}
          >
            {[
              { num: `${projects.length}`, label: "Featured" },
              { num: "100+", label: "Projects shipped" },
              { num: "15+", label: "Years experience" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-cream"
                style={{ padding: "22px 16px" }}
              >
                <div className="text-[28px] font-medium text-black leading-none">
                  {s.num}
                </div>
                <div className="text-[10px] uppercase tracking-[0.08em] text-[#aaa] mt-[5px]">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Project explorer */}
      <section
        className="border-b border-black"
        style={{ borderBottomWidth: "1.5px" }}
      >
        {/* Section header */}
        <div
          className="flex justify-between items-baseline border-b border-[var(--rule)]"
          style={{ padding: "36px 36px 28px" }}
        >
          <span className="section-eyebrow">Project index</span>
          <span className="text-[11px] text-[#ccc] font-mono">
            0{currentIndex + 1} / 0{projects.length}
          </span>
        </div>

        {/* Body: index list + detail */}
        <div
          className="split-2 grid"
          style={{ gridTemplateColumns: "320px 1fr" }}
        >
          {/* Index list */}
          <div
            className="border-r border-black"
            style={{ borderRightWidth: "1.5px" }}
          >
            {projects.map((p, i) => {
              const active = i === currentIndex;
              return (
                <button
                  key={p.title}
                  onClick={() => selectProject(i)}
                  className={`w-full text-left border-b border-[var(--rule-soft)] transition-colors ${
                    active
                      ? "bg-[var(--cream-3)]"
                      : "hover:bg-[var(--cream-3)]"
                  }`}
                  style={{ padding: "20px 24px" }}
                >
                  <div className="flex items-baseline justify-between gap-3 mb-1">
                    <span className="font-mono text-[10px] text-[#bbb]">
                      0{i + 1}
                    </span>
                    {active && (
                      <span className="font-mono text-[10px] text-black">
                        active →
                      </span>
                    )}
                  </div>
                  <div
                    className={`text-[14px] font-medium leading-[1.3] ${
                      active ? "text-black" : "text-[var(--ink-soft)]"
                    }`}
                  >
                    {p.title}
                  </div>
                  <div className="text-[11px] text-[#aaa] mt-1">
                    {p.client} {p.year && `· ${p.year}`}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detail panel */}
          <div className="flex flex-col">
            {/* Media */}
            <div
              className="relative bg-[#111] flex items-center justify-center"
              style={{ padding: "32px", minHeight: "360px" }}
            >
              <div
                className="relative w-full max-w-[640px] h-full rounded-[10px] overflow-hidden border border-[#2a2a2a] bg-[#1a1a1a]"
              >
                {isVideo(currentMedia) ? (
                  <video
                    key={currentMedia}
                    src={currentMedia}
                    controls
                    muted
                    playsInline
                    className="w-full h-full object-cover"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/${currentMedia}`}
                    alt={`${project.title} — media ${mediaIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>

              {allMedia.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={prevMedia}
                    aria-label="Previous media"
                    className="absolute left-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="15 18 9 12 15 6" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    onClick={nextMedia}
                    aria-label="Next media"
                    className="absolute right-6 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors flex items-center justify-center"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </button>
                </>
              )}

              {allMedia.length > 1 && (
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                  {allMedia.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      aria-label={`Go to media ${i + 1}`}
                      onClick={() => setMediaIndex(i)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        i === mediaIndex ? "bg-white" : "bg-white/30"
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Meta + description */}
            <div
              className="border-t border-[var(--rule)]"
              style={{ padding: "36px 40px" }}
            >
              <div className="flex items-baseline justify-between gap-6 flex-wrap mb-4">
                <h2
                  className="text-[28px] font-medium text-black leading-[1.1]"
                  style={{ letterSpacing: "-0.02em" }}
                >
                  {project.title}
                </h2>
                <div className="font-mono text-[10px] text-[#bbb]">
                  0{currentIndex + 1} / 0{projects.length}
                </div>
              </div>

              {/* Meta strip */}
              <div className="flex flex-wrap gap-x-8 gap-y-3 mb-6 pb-6 border-b border-[var(--rule-soft)]">
                {[
                  { label: "Client", value: project.client },
                  { label: "Year", value: project.year },
                  { label: "Location", value: project.location },
                ]
                  .filter((r) => r.value)
                  .map((r) => (
                    <div key={r.label} className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-[0.12em] text-[#bbb]">
                        {r.label}
                      </span>
                      <span className="text-[12px] text-[var(--ink-soft)] mt-1">
                        {r.value}
                      </span>
                    </div>
                  ))}
              </div>

              <p className="text-[13px] text-[#777] leading-[1.8] max-w-[720px]">
                {project.description}
              </p>

              <div className="mt-6">
                <div className="text-[10px] uppercase tracking-[0.12em] text-[#bbb] mb-3">
                  Technologies
                </div>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] text-[var(--ink-soft)] bg-white border border-[var(--rule)] rounded-[4px]"
                      style={{ padding: "6px 10px" }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Pager */}
            <div
              className="border-t border-[var(--rule)] flex justify-between"
              style={{ padding: "20px 40px" }}
            >
              <button
                type="button"
                onClick={() =>
                  selectProject(
                    currentIndex === 0 ? projects.length - 1 : currentIndex - 1
                  )
                }
                className="text-[12px] text-[#555] hover:text-black transition-colors"
              >
                ← Previous project
              </button>
              <button
                type="button"
                onClick={() =>
                  selectProject(
                    currentIndex === projects.length - 1 ? 0 : currentIndex + 1
                  )
                }
                className="text-[12px] text-[#555] hover:text-black transition-colors"
              >
                Next project →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="split-2 grid border-b border-black"
        style={{ gridTemplateColumns: "1fr 1fr", borderBottomWidth: "1.5px" }}
      >
        <div
          className="border-r border-black"
          style={{ padding: "52px 40px", borderRightWidth: "1.5px" }}
        >
          <div className="section-eyebrow">Start something</div>
          <h2
            className="text-[28px] font-medium text-black leading-[1.1] mt-4 mb-3"
            style={{ letterSpacing: "-0.02em" }}
          >
            Have a project
            <br />
            <span className="text-[#ccc]">in mind?</span>
          </h2>
          <p className="text-[13px] text-[#999] leading-[1.75] mb-6 max-w-[380px]">
            Tell us about it. We&apos;ll put together a controls solution that
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
          className="bg-[var(--cream-2)] flex flex-col justify-center"
          style={{ padding: "52px 40px" }}
        >
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#bbb] mb-6">
            What we cover
          </div>
          <div className="flex flex-col">
            {[
              "Panel building — schematic to assembly",
              "PLC & HMI programming",
              "Robot programming & commissioning",
              "Vision systems & error-proofing",
              "Full automation integration",
            ].map((line, i) => (
              <div
                key={line}
                className={`flex items-center justify-between py-[14px] border-b border-[#dddcd8] ${
                  i === 0 ? "border-t" : ""
                }`}
              >
                <span className="text-[13px] text-[var(--ink-soft)]">
                  {line}
                </span>
                <span className="font-mono text-[10px] text-[#bbb]">
                  0{i + 1}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default RecentPage;
