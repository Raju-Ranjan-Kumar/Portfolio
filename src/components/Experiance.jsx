import React from "react";
import { SectionEyebrow, WindowDots } from "./ui/Chrome";

const SKILLS = [
  { category: "languages", items: ["JavaScript (ES6+)", "TypeScript"] },
  { category: "frontend", items: ["React.js", "Angular", "HTML5", "CSS3"] },
  {
    category: "ui_libraries",
    items: ["Tailwind CSS", "Material-UI", "PrimeNG", "Bootstrap"],
  },
  { category: "state_management", items: ["Redux", "NgRx"] },
  { category: "apis", items: ["RESTful integration", "Real-time data handling"] },
  {
    category: "devops_tools",
    items: ["Git", "GitHub", "GitLab", "Azure DevOps", "CI/CD pipelines", "IIS config"],
  },
];

function Experiance() {
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 md:py-24"
    >
      <SectionEyebrow file="skills.json">stack</SectionEyebrow>
      <h1 className="mb-8 font-display text-2xl font-semibold text-ivory md:text-3xl">
        Skills
      </h1>
      <p className="mb-6 font-mono text-xs text-muted">
        4+ years of experience across the technologies below.
      </p>

      <div className="overflow-hidden rounded-lg border border-line bg-surface shadow-xl shadow-black/30">
        <div className="flex items-center gap-3 border-b border-line bg-surface2 px-4 py-2.5">
          <WindowDots />
          <span className="font-mono text-xs text-muted">skills.json</span>
        </div>
        <div className="grid gap-x-8 gap-y-6 p-6 font-mono text-sm md:grid-cols-2 md:p-8">
          {SKILLS.map((group) => (
            <div key={group.category}>
              <p className="mb-2 text-muted">
                <span className="text-amber">"{group.category}"</span>: [
              </p>
              <ul className="ml-4 space-y-1">
                {group.items.map((item) => (
                  <li key={item} className="text-ivory">
                    <span className="text-mint">+</span> "{item}",
                  </li>
                ))}
              </ul>
              <p className="text-muted">]</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
