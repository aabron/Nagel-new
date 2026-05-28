import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer
      className="flex flex-col md:flex-row justify-between items-center gap-4 bg-black"
      style={{ padding: "22px 36px" }}
    >
      <img src="Nagel_Controls-removebg-preview.png" alt="Nagel Controls" className="w-[150px] h-full invert" />
      <div className="flex gap-6">
        <a
          href="/#services"
          className="text-[11px] text-[#666] hover:text-white transition-colors"
        >
          Services
        </a>
        <Link
          href="/recent"
          className="text-[11px] text-[#666] hover:text-white transition-colors"
        >
          Recent Projects
        </Link>
        <a
          href="/#clients"
          className="text-[11px] text-[#666] hover:text-white transition-colors"
        >
          Clients
        </a>
        <Link
          href="/contact"
          className="text-[11px] text-[#666] hover:text-white transition-colors"
        >
          Contact
        </Link>
        <a
          href="https://www.linkedin.com/company/nagel-controls/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] text-[#666] hover:text-white transition-colors"
        >
          LinkedIn
        </a>
      </div>
      <span className="text-[11px] text-[#444]">
        © {new Date().getFullYear()} All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
