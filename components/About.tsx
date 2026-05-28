import React from "react";

const platforms = [
  { name: "Allen Bradley", detail: "PLC · HMI · Safety" },
  { name: "Siemens", detail: "S7 · TIA Portal · WinCC" },
  { name: "Robot Integration", detail: "Programming · Commissioning" },
  { name: "Vision Systems", detail: "Cognex · Keyence" },
  { name: "Panel Building", detail: "Design · Assembly · UL Listed" },
];

const steps = [
  {
    title: "Precision",
    sub: "Every solution built to your exact specs, no shortcuts.",
  },
  {
    title: "Innovation",
    sub: "Cutting-edge tech and creative problem-solving on every project.",
  },
  {
    title: "Partnership",
    sub: "We stay close to our clients long after the project ships.",
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="split-2 grid border-b border-black"
      style={{
        gridTemplateColumns: "1fr 1fr",
        borderBottomWidth: "1.5px",
      }}
    >
      {/* Left column */}
      <div
        className="border-r border-black"
        style={{ padding: "52px 40px", borderRightWidth: "1.5px" }}
      >
        <div className="section-eyebrow">Our approach</div>
        <h2
          className="text-[30px] font-medium text-black leading-[1.15] mb-[14px] mt-[16px]"
          style={{ letterSpacing: "-0.02em" }}
        >
          Engineering <em className="not-italic text-[#ccc]">excellence</em>
          <br />
          since 2021.
        </h2>
        <p className="text-[13px] text-[#777] leading-[1.8] mb-7">
          A specialized controls engineering company serving the greater Detroit
          area — high-quality solutions and professional panel building across
          all major platforms.
        </p>

        {/* Stat pair */}
        <div
          className="grid grid-cols-2 mb-7 rounded-[8px] overflow-hidden border border-[var(--rule)]"
          style={{ gap: "1px", background: "var(--rule)" }}
        >
          <div className="bg-cream" style={{ padding: "22px 20px" }}>
            <div className="text-[34px] font-medium text-black leading-none">
              15+
            </div>
            <div className="text-[10px] uppercase tracking-[0.08em] text-[#aaa] mt-[5px]">
              Years experience
            </div>
          </div>
          <div className="bg-cream" style={{ padding: "22px 20px" }}>
            <div className="text-[34px] font-medium text-black leading-none">
              100+
            </div>
            <div className="text-[10px] uppercase tracking-[0.08em] text-[#aaa] mt-[5px]">
              Projects completed
            </div>
          </div>
        </div>

        {/* Steps */}
        <div className="flex flex-col">
          {steps.map((s, i, arr) => (
            <div
              key={s.title}
              className={`grid items-start py-[18px] border-t border-[var(--rule-soft)] ${
                i === arr.length - 1 ? "border-b" : ""
              }`}
              style={{ gridTemplateColumns: "36px 1fr", gap: "10px" }}
            >
              <div className="font-mono text-[10px] text-[#ccc] pt-[2px]">
                0{i + 1}
              </div>
              <div>
                <div className="text-[13px] font-medium text-[var(--ink-soft)] mb-[2px]">
                  {s.title}
                </div>
                <div className="text-[12px] text-[#aaa] leading-[1.6]">
                  {s.sub}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right column */}
      <div
        className="flex flex-col justify-center bg-[var(--cream-2)]"
        style={{ padding: "52px 40px" }}
      >
        <div className="text-[11px] uppercase tracking-[0.12em] text-[#bbb] mb-6">
          Platforms & Expertise
        </div>
        <div className="flex flex-col mb-7">
          {platforms.map((p, i) => (
            <div
              key={p.name}
              className={`flex justify-between items-center py-[15px] border-b border-[#dddcd8] ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <span className="text-[13px] font-medium text-[var(--ink-soft)]">
                {p.name}
              </span>
              <span className="text-[11px] text-[#bbb]">{p.detail}</span>
            </div>
          ))}
        </div>

        {/* Location block */}
        <div className="bg-white border border-[var(--rule)] rounded-[8px] p-5">
          <div className="text-[10px] uppercase tracking-[0.12em] text-[#bbb] mb-3">
            Locations
          </div>
          <div className="text-[13px] font-medium text-[var(--ink-soft)] mb-[3px]">
            Brighton, MI
          </div>
          <div className="text-[11px] text-[#aaa]">
            Serving the greater Detroit area
          </div>
          <div className="h-px bg-[#f0efe9] my-3" />
          <div className="text-[13px] font-medium text-[var(--ink-soft)] mb-[3px]">
            Anywhere in the US
            <span className="text-[10px] text-[#ccc] font-normal">
              - When travel is required
            </span>
          </div>
          <div className="text-[11px] text-[#aaa]">
            We can travel to your location for larger projects.
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
