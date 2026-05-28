'use client';

import React, { useRef, useState } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const fieldClass =
  "w-full bg-white border border-[var(--rule)] rounded-[6px] px-3 py-3 text-[13px] text-[var(--ink-soft)] placeholder:text-[#bbb] focus:outline-none focus:border-black transition-colors";

const labelClass =
  "block text-[10px] uppercase tracking-[0.12em] text-[#888] mb-2";

function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    phoneNumber: "",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const form = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setFormSubmitted(false);
    setError(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data?.error || "Failed to send message.");
      }

      setFormSubmitted(true);
      setFormData({
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
      if (form.current) form.current.reset();
    } catch (err) {
      const message = err instanceof Error ? err.message : "Something went wrong.";
      setError(message);
    } finally {
      setIsSubmitting(false);
    }
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
          className="border-r border-black flex flex-col justify-between"
          style={{
            padding: "52px 40px",
            borderRightWidth: "1.5px",
            minHeight: "320px",
          }}
        >
          <div>
            <div className="section-eyebrow">Get in touch</div>
            <h1
              className="text-[40px] font-medium text-black leading-[1.05] mt-5"
              style={{ letterSpacing: "-0.025em" }}
            >
              Let&apos;s build
              <br />
              something
              <br />
              <span className="text-[#ccc]">that works.</span>
            </h1>
            <p className="text-[13px] text-[#999] leading-[1.75] mt-6 max-w-[360px]">
              Tell us about your project — PLC programming, panel building,
              vision systems, or full automation. We&apos;ll put together a
              proposal that fits your operation, timeline, and budget.
            </p>
          </div>
        </div>

        <div
          className="bg-[var(--cream-2)] flex flex-col justify-center"
          style={{ padding: "52px 40px" }}
        >
          <div className="text-[11px] uppercase tracking-[0.12em] text-[#bbb] mb-6">
            Direct Contact
          </div>
          {[
            { label: "Email", value: "richard.nagel@nagelcontrols.com", href: "mailto:richard.nagel@nagelcontrols.com" },
            { label: "Phone", value: "+1 (517) 499-7264", href: "tel:+15174997264" },
            { label: "Address", value: "1175 Rickett Rd, Suite 1, Brighton, MI" },
            { label: "LinkedIn", value: "Nagel Controls", href: "https://www.linkedin.com/company/nagel-controls/" },
            { label: "Response", value: "Typically within 24 hours" },
          ].map((row, i) => (
            <div
              key={row.label}
              className={`flex items-baseline gap-3 py-[14px] border-b border-[#dddcd8] ${
                i === 0 ? "border-t" : ""
              }`}
            >
              <span className="text-[10px] uppercase tracking-[0.1em] text-[#bbb] min-w-[80px]">
                {row.label}
              </span>
              {row.href ? (
                <a
                  href={row.href}
                  target={row.href.startsWith("http") ? "_blank" : undefined}
                  rel={row.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-[13px] text-[var(--ink-soft)] hover:underline"
                >
                  {row.value}
                </a>
              ) : (
                <span className="text-[13px] text-[var(--ink-soft)]">
                  {row.value}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Form section */}
      <section
        className="border-b border-black"
        style={{ borderBottomWidth: "1.5px" }}
      >
        {/* Section header */}
        <div
          className="flex justify-between items-baseline border-b border-[var(--rule)]"
          style={{ padding: "36px 36px 28px" }}
        >
          <span className="section-eyebrow">Project inquiry</span>
          <span className="text-[11px] text-[#ccc] font-mono">
            06 fields · ~2 min
          </span>
        </div>

        <div style={{ padding: "40px" }}>
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="grid gap-6 max-w-[760px] mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className={labelClass}>
                  First name *
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="John"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="lastName" className={labelClass}>
                  Last name *
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Doe"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className={labelClass}>
                Company *
              </label>
              <input
                type="text"
                id="company"
                name="company"
                placeholder="Your Company Name"
                value={formData.company}
                onChange={handleChange}
                required
                className={fieldClass}
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className={labelClass}>
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john@company.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>
              <div>
                <label htmlFor="phoneNumber" className={labelClass}>
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phoneNumber"
                  name="phoneNumber"
                  placeholder="(248) 123-4567"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  required
                  className={fieldClass}
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your project requirements, timeline, and any specific needs..."
                value={formData.message}
                onChange={handleChange}
                rows={6}
                className={`${fieldClass} resize-vertical leading-[1.6]`}
              />
            </div>

            <div className="flex items-center justify-between flex-wrap gap-4 pt-2">
              <span className="text-[11px] text-[#aaa]">
                We&apos;ll never share your information.
              </span>
              <button
                type="submit"
                disabled={isSubmitting}
                className="text-[12px] bg-black text-cream rounded-[4px] font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                style={{ padding: "11px 24px" }}
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </button>
            </div>

            {formSubmitted && (
              <div className="bg-white border border-[var(--rule)] rounded-[6px] p-4 text-[12px] text-[var(--ink-soft)]">
                Thanks — your message has been sent. We&apos;ll get back to you
                within 24 hours.
              </div>
            )}
            {error && (
              <div className="bg-white border border-[#e6c2c2] rounded-[6px] p-4 text-[12px] text-[#7a3030]">
                {error}
              </div>
            )}
          </form>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Contact;
