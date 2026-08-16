import React from "react";
import { SectionEyebrow, WindowDots } from "./ui/Chrome";

function Resume() {
  return (
    <div
      name="Resume"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 md:py-24"
    >
      <SectionEyebrow file="resume.pdf">1 page</SectionEyebrow>
      <h1 className="mb-8 font-display text-2xl font-semibold text-ivory md:text-3xl">
        Résumé
      </h1>

      <div className="grid gap-6 md:grid-cols-[280px_1fr] md:items-start">
        <div className="rounded-lg border border-line bg-surface p-6">
          <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-md bg-coral/10 font-mono text-xs font-semibold text-coral">
            PDF
          </div>
          <p className="mb-1 break-words font-display text-base font-semibold text-ivory">
            Raju_Ranjan_Kumar_Resume.pdf
          </p>
          <p className="mb-5 font-mono text-xs text-muted">
            Updated · 1 page · React.js &amp; Angular
          </p>
          <div className="flex flex-col gap-3">
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              download="Raju_Ranjan_Kumar_Resume.pdf"
              className="rounded-md bg-amber px-4 py-2.5 text-center font-mono text-sm font-medium text-ink transition-transform hover:-translate-y-0.5"
            >
              ↓ Download
            </a>
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="rounded-md border border-line px-4 py-2.5 text-center font-mono text-sm text-ivory transition-colors hover:border-mint hover:text-mint"
            >
              Open in new tab ↗
            </a>
          </div>
        </div>

        <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-xl shadow-black/30">
          <div className="flex items-center gap-3 border-b border-line bg-surface2 px-4 py-2.5">
            <WindowDots />
            <span className="font-mono text-xs text-muted">preview — resume.pdf</span>
          </div>
          <iframe
            title="Résumé preview"
            src={`${process.env.PUBLIC_URL}/resume.pdf`}
            className="h-[520px] w-full bg-ink"
          />
          <p className="border-t border-line px-4 py-2 text-center font-mono text-[11px] text-muted">
            Preview not loading?{" "}
            <a
              href={`${process.env.PUBLIC_URL}/resume.pdf`}
              target="_blank"
              rel="noreferrer"
              className="text-amber hover:text-mint"
            >
              Open resume.pdf directly ↗
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
