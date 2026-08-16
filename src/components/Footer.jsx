import React from "react";
import { FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="max-w-screen-2xl container mx-auto flex flex-col items-center gap-6 px-4 py-8 md:px-20">
        <div className="flex gap-5 text-muted">
          <a
            href="https://www.linkedin.com/in/raju-ranjan-kumar-9bb282207/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-mint"
          >
            <FaLinkedinIn size={20} />
          </a>
          <FaTwitter size={20} className="opacity-50" />
          <FaInstagram size={20} className="opacity-50" />
          <a
            href="https://github.com/Raju-Ranjan-Kumar"
            target="_blank"
            rel="noreferrer"
            className="hover:text-mint"
          >
            <FaGithub size={20} />
          </a>
        </div>

        <div className="flex w-full flex-wrap items-center justify-between gap-2 border-t border-line pt-4 font-mono text-[11px] text-muted">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-mint" /> main
            </span>
            <span>Delhi, India</span>
          </div>
          <span>© {new Date().getFullYear()} Raju Ranjan Kumar — built with React &amp; Tailwind</span>
        </div>
        <p className="font-mono text-[11px] text-muted">Supportive Partner ❤️ Raju Ranjan</p>
      </div>
    </footer>
  );
}

export default Footer;
