import React from "react";

type Service = {
  title: string;
  sub: string;
  icon: React.ReactNode;
  img: string;
};

const stroke = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const services: Service[] = [
  {
    title: "Poka Yoke & Vision Systems",
    sub: "Error-proofing for accuracy and quality",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" {...stroke}>
        <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
        <circle cx="12" cy="12" r="3" />
        <path d="m15 9 3-3" />
      </svg>
    ),
    img: "20240208_141110.jpg"
  },
  {
    title: "Seamless Automation",
    sub: "Integrated systems built for reliability",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" {...stroke}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.01a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09c0 .66.39 1.26 1 1.51.61.26 1.31.12 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82c.25.61.85 1 1.51 1H21a2 2 0 0 1 0 4h-.09c-.66 0-1.26.39-1.51 1z" />
      </svg>
    ),
    img: "machine.jpg"
  },
  {
    title: "Panel Building",
    sub: "Turnkey, schematic to final assembly",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" {...stroke}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
    img: "cabinet.jpg"
  },
  {
    title: "PLC & HMI Programming",
    sub: "Logic and interface built to perform",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" {...stroke}>
        <rect x="5" y="5" width="14" height="14" rx="2" />
        <rect x="9" y="9" width="6" height="6" />
        <path d="M9 2v3M15 2v3M9 19v3M15 19v3M2 9h3M2 15h3M19 9h3M19 15h3" />
      </svg>
    ),
    img: "Capture.PNG"
  },
  {
    title: "Robot Programming",
    sub: "End-to-end setup and optimization",
    icon: (
      <svg viewBox="0 0 24 24" width="15" height="15" {...stroke}>
        <rect x="4" y="8" width="16" height="12" rx="2" />
        <path d="M12 2v4" />
        <circle cx="9" cy="14" r="1.2" />
        <circle cx="15" cy="14" r="1.2" />
        <path d="M9 18h6" />
      </svg>
    ),
    img: "IMG_0493.jpeg"
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="border-b border-black"
      style={{ borderBottomWidth: "1.5px" }}
    >
      {/* Header */}
      <div
        className="flex justify-between items-baseline border-b border-[var(--rule)]"
        style={{ padding: "36px 36px 28px" }}
      >
        <span className="section-eyebrow">What we do</span>
        <span className="text-[11px] text-[#ccc] font-mono">
          0{services.length} services
        </span>
      </div>

      {/* Grid */}
      <div
        className="services-grid-5 grid"
        style={{ gridTemplateColumns: "repeat(5, 1fr)" }}
      >
        {services.map((s, i) => (
          <div
            key={s.title}
            className={`p-[28px_22px] hover:bg-[var(--cream-3)] transition-colors ${i < services.length - 1
              ? "border-r border-[var(--rule)]"
              : ""
              }`}
          >

            <div className="flex items-center justify-between flex-row gap-2">
              <div className="font-mono text-[10px] text-[#bbb] mb-6">
                0{i + 1}
              </div>
              <div className="w-[34px] h-[34px] border border-[#ddd] rounded-[7px] flex items-center justify-center mb-[14px] text-[#555]">
                {s.icon}
              </div>
            </div>
            <div className="w-full h-[250px] mb-5">
              <img src={s.img} alt={s.title} className="w-full h-full object-cover rounded-lg" />
            </div>
            <div className="text-[12px] font-medium text-[var(--ink-soft)] leading-[1.4]">
              {s.title}
            </div>
            <div className="text-[11px] text-[#bbb] mt-1 leading-[1.5]">
              {s.sub}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
