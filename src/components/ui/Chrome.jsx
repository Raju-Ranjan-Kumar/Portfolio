import React from "react";

export function WindowDots() {
  return (
    <div className="flex gap-1.5" aria-hidden="true">
      <span className="h-2.5 w-2.5 rounded-full bg-coral/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-amber/70" />
      <span className="h-2.5 w-2.5 rounded-full bg-mint/70" />
    </div>
  );
}

export function SectionEyebrow({ file, children }) {
  return (
    <div className="mb-3 flex items-center gap-2 font-mono text-xs text-muted">
      <span className="text-mint">+</span>
      <span>{file}</span>
      <span className="h-px flex-1 bg-line" />
      <span>{children}</span>
    </div>
  );
}
