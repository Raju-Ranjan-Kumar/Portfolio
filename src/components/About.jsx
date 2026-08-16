import React from "react";
import { SectionEyebrow } from "./ui/Chrome";

const FACTS = [
  { k: "experience", v: "4+ years" },
  { k: "based_in", v: "Delhi, India" },
  { k: "role", v: "Frontend Developer" },
  { k: "stack", v: "React.js · Angular" },
];

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 md:py-24"
    >
      <SectionEyebrow file="about.md">README</SectionEyebrow>

      <div className="grid gap-8 md:grid-cols-[1fr_320px]">
        <div className="rounded-lg border border-line bg-surface p-6 md:p-8">
          <h1 className="font-display text-2xl font-semibold text-ivory md:text-3xl">
            About
          </h1>
          <div className="mt-4 space-y-4 leading-relaxed text-muted">
            <p>
              I'm a frontend developer who builds interfaces that hold up
              under real usage — enterprise dashboards, real-time systems,
              and multi-role workflow platforms where the data changes
              constantly and the UI can't fall behind.
            </p>
            <p>
              Over 4+ years at <span className="text-ivory">CodeAegis</span>,
              I've shipped production apps in both{" "}
              <span className="text-ivory">React.js</span> and{" "}
              <span className="text-ivory">Angular</span> — from a
              ride-booking platform to a legal CRM to a crowd-shipping app —
              usually owning the frontend end-to-end: architecture, state
              management, API integration, and the CI/CD pipeline that ships
              it.
            </p>
            <p>
              I care about clean component architecture, reusable design
              systems, and code that the next developer can actually read.
              Off the clock, I'm usually exploring what's new in the React
              and Angular ecosystems.
            </p>
          </div>

          <div className="mt-6 border-t border-line pt-6">
            <h2 className="font-mono text-xs uppercase tracking-wide text-mint">
              Certifications
            </h2>
            <p className="mt-2 text-sm text-muted">
              HTML5 &amp; CSS3 — Pirple.com (Sep 2021) ·{" "}
              <a
                href="https://www.pirple.com/certificates/ya0kattgyc"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber hover:text-mint"
              >
                View certificate ↗
              </a>
            </p>
          </div>
        </div>

        <div className="space-y-3">
          {FACTS.map((f) => (
            <div
              key={f.k}
              className="flex items-center justify-between rounded-md border border-line bg-surface px-4 py-3 font-mono text-xs"
            >
              <span className="text-muted">{f.k}:</span>
              <span className="text-ivory">{f.v}</span>
            </div>
          ))}
          <a
            href="https://github.com/Raju-Ranjan-Kumar"
            target="_blank"
            rel="noreferrer"
            className="block rounded-md border border-line bg-surface px-4 py-3 text-center font-mono text-xs text-mint transition-colors hover:border-mint"
          >
            github.com/Raju-Ranjan-Kumar ↗
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
