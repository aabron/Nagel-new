'use client';

import React, { useState } from "react";
import Link from "next/link";

type NavBarProps = {
  isNotHome?: boolean;
};

const NavBar = ({ isNotHome }: NavBarProps) => {
  const [open, setOpen] = useState(false);

  const sectionHref = (id: string) => (isNotHome ? `/#${id}` : `#${id}`);

  const links = [
    { label: "Services", href: sectionHref("services") },
    { label: "About", href: sectionHref("about") },
    { label: "Projects", href: "/recent" },
    { label: "Clients", href: sectionHref("clients") },
  ];

  return (
    <nav
      className="relative flex items-center justify-between bg-cream border-b border-black"
      style={{ padding: "20px 36px", borderBottomWidth: "1.5px" }}
    >
      {/* Logo */}
      <Link
        href="/"
        className="text-[12px] font-medium text-black tracking-[0.08em] uppercase"
      >
        <img src="Nagel_Controls-removebg-preview.png"  alt="Nagel Controls" className="w-[150px] h-full" />
      </Link>

      {/* Desktop nav */}
      <div className="hidden md:flex items-center gap-8">
        {links.map((l) =>
          l.href.startsWith("/") && !l.href.startsWith("/#") ? (
            <Link
              key={l.label}
              href={l.href}
              className="text-[12px] text-[#888] hover:text-black transition-colors"
            >
              {l.label}
            </Link>
          ) : (
            <a
              key={l.label}
              href={l.href}
              className="text-[12px] text-[#888] hover:text-black transition-colors"
            >
              {l.label}
            </a>
          )
        )}
      </div>

      {/* Right side */}
      <div className="hidden md:flex items-center gap-4">
        <a
          href="tel:+15174997264"
          className="text-[11px] text-[#aaa] hover:text-black transition-colors"
        >
          (517) 499-7264
        </a>
        <Link
          href="/contact"
          className="text-[11px] bg-black text-cream font-medium rounded-[4px] hover:opacity-90 transition-opacity"
          style={{ padding: "8px 18px" }}
        >
          Get a Quote
        </Link>
      </div>

      {/* Mobile menu trigger */}
      <button
        type="button"
        aria-label="Toggle menu"
        onClick={() => setOpen((v) => !v)}
        className="md:hidden inline-flex items-center justify-center w-8 h-8 rounded-[4px] border border-[#ddd]"
      >
        <div className="flex flex-col gap-[3px]">
          <span
            className={`block w-4 h-[1.5px] bg-black transition-transform ${
              open ? "translate-y-[5px] rotate-45" : ""
            }`}
          />
          <span
            className={`block w-4 h-[1.5px] bg-black transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-4 h-[1.5px] bg-black transition-transform ${
              open ? "-translate-y-[5px] -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {/* Mobile dropdown */}
      {open && (
        <div
          className="md:hidden absolute left-0 right-0 top-full bg-cream border-b border-black z-50"
          style={{ borderBottomWidth: "1.5px" }}
        >
          <div className="flex flex-col">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[12px] text-[#555] hover:text-black px-9 py-4 border-t border-[var(--rule-soft)]"
              >
                {l.label}
              </a>
            ))}
            <div className="px-9 py-4 flex items-center justify-between border-t border-[var(--rule-soft)]">
              <a
                href="tel:+15174997264"
                className="text-[11px] text-[#888]"
              >
                (517) 499-7264
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="text-[11px] bg-black text-cream font-medium rounded-[4px]"
                style={{ padding: "8px 18px" }}
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
