import React from "react";
import { Link } from "react-scroll";

import pic from "../assets/myimg.jfif";

import { IoLogoYoutube } from "react-icons/io";
import { FaReact, FaGithub, FaLinkedin, FaHtml5 } from "react-icons/fa";
import { SiTypescript, SiAngular, SiTailwindcss } from "react-icons/si";

import { WindowDots } from "./ui/Chrome";

function Home() {
  return (
    <div
      name="Home"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 pb-16 pt-14 md:pb-24 md:pt-20"
    >
      <div className="grid gap-10 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        <div>
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1 font-mono text-xs text-mint">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-mint" />
            open to new opportunities
          </div>

          <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-2xl shadow-black/40">
            <div className="flex items-center gap-3 border-b border-line bg-surface2 px-4 py-2.5">
              <WindowDots />
              <span className="font-mono text-xs text-muted">bash — zsh</span>
            </div>
            <div className="space-y-2 px-5 py-6 font-mono text-sm md:text-base">
              <p className="text-muted">
                <span className="text-mint">raju@dev</span>
                <span className="text-line">:</span>
                <span className="text-amber">~</span>
                <span className="text-line">$</span> whoami
              </p>
              <p className="text-2xl font-display font-semibold text-ivory md:text-4xl">
                Raju Ranjan Kumar
                <span className="cursor-blink text-amber">_</span>
              </p>
              <p className="animate-fade-up text-base text-muted md:text-lg">
                Frontend Developer — React.js &amp; Angular
              </p>
              <p
                className="animate-fade-up pt-2 leading-relaxed text-muted"
                style={{ animationDelay: "120ms" }}
              >
                4+ years building scalable, high-performance web apps —
                enterprise dashboards, real-time systems, and role-based
                workflows. Currently shipping frontend at{" "}
                <span className="text-ivory">CodeAegis</span>.
              </p>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              to="Portfolio"
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer rounded-md bg-amber px-5 py-2.5 font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              View projects →
            </Link>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Raju_Ranjan_Kumar_Resume.pdf"
              className="rounded-md border border-line px-5 py-2.5 font-mono text-sm text-ivory transition-colors hover:border-mint hover:text-mint"
            >
              ↓ Download résumé
            </a>
          </div>

          <div className="mt-10 flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
            <div className="space-y-2">
              <h2 className="font-mono text-xs text-muted">available_on:</h2>
              <ul className="flex gap-4">
                <li>
                  <a
                    href="https://www.linkedin.com/in/raju-ranjan-kumar-9bb282207/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <FaLinkedin className="text-2xl text-muted hover:text-mint cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a href="https://github.com/Raju-Ranjan-Kumar" target="_blank" rel="noreferrer">
                    <FaGithub className="text-2xl text-muted hover:text-mint cursor-pointer" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@rajuranjankumar1869"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <IoLogoYoutube className="text-2xl text-muted hover:text-mint cursor-pointer" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="space-y-2">
              <h2 className="font-mono text-xs text-muted">currently_working_on:</h2>
              <div className="flex gap-4">
                <FaHtml5 className="text-2xl text-muted hover:scale-110 hover:text-ivory duration-200 cursor-pointer" />
                <FaReact className="text-2xl text-muted hover:scale-110 hover:text-ivory duration-200 cursor-pointer" />
                <SiAngular className="text-2xl text-muted hover:scale-110 hover:text-ivory duration-200 cursor-pointer" />
                <SiTypescript className="text-2xl text-muted hover:scale-110 hover:text-ivory duration-200 cursor-pointer" />
                <SiTailwindcss className="text-2xl text-muted hover:scale-110 hover:text-ivory duration-200 cursor-pointer" />
              </div>
            </div>
          </div>
        </div>

        <div className="hidden md:block">
          <img
            src={pic}
            alt="Raju Ranjan Kumar"
            className="mx-auto h-64 w-64 rounded-full border border-line object-cover shadow-2xl shadow-black/50 ring-1 ring-amber/20"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
