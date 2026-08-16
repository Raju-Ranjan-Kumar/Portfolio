import React from "react";
import { SectionEyebrow, WindowDots } from "./ui/Chrome";

const PROJECTS = [
  {
    id: 1,
    name: "Happy Ride",
    domain: "happyrider.app",
    tag: "React",
    period: "Jun 2023 – Nov 2024",
    status: "Shipped",
    description:
      "Multi-service ride-booking platform built for Happy Rider Inc., transforming a decade of offline transportation operations into a scalable, digital-first mobile and web experience.",
    highlights: [
      "Multi-service booking: rides, designated driver, pet-friendly, delivery",
      "Real-time ride tracking with live notifications",
      "Secure payment gateway integration",
      "Admin dashboard for driver, fleet & booking management",
    ],
    link: "https://codeaegis.com/case-study/happy-ride",
    linkLabel: "Read case study",
  },
  {
    id: 2,
    name: "Thoolie",
    domain: "thoolie.legal",
    tag: "React",
    period: "Dec 2023 – Nov 2024",
    status: "Shipped",
    description:
      "Smart legal CRM built for lawyers, entertainment professionals, and creative businesses to simplify contract management, collaboration, and compliance.",
    highlights: [
      "Document automation with attorney-backed templates",
      "E-signature, collaboration & centralized client dashboard",
      "Smart billing and secure payment tracking",
      "60% reduction in manual contract preparation time",
    ],
    link: "https://codeaegis.com/case-study/thoolie",
    linkLabel: "Read case study",
  },
  {
    id: 3,
    name: "Qootuma",
    domain: "qootuma.io",
    tag: "React",
    period: "Sep 2024 – Jan 2025",
    status: "Shipped",
    description:
      "Crowd-shipping app connecting travelers with people needing international shipping — faster, cheaper delivery while travelers earn along the way.",
    highlights: [
      "Traveler ↔ sender matching experience",
      "Responsive UI across Android, iOS & Web",
      "Admin tools for users, requests & payments",
    ],
    link: "https://codeaegis.com/codeaegis-portfolio",
    linkLabel: "View on CodeAegis",
  },
  {
    id: 4,
    name: "Locksmith Hub",
    domain: "locksmithhub.us",
    tag: "React",
    period: "Jan 2025 – Jun 2025",
    status: "Shipped",
    description:
      "Nationwide platform connecting individuals with skilled, verified locksmith professionals for lockouts, repairs, and security upgrades — backed by 24/7 support.",
    highlights: [
      "Real-time locksmith search & instant booking",
      "In-app messaging and push notifications",
      "Admin tools for bookings, pricing & verified pros",
    ],
    link: "https://codeaegis.com/codeaegis-portfolio",
    linkLabel: "View on CodeAegis",
  },
  {
    id: 5,
    name: "Springup Solutions",
    domain: "springup.work",
    tag: "Angular",
    period: "Apr 2025 – Present",
    status: "In progress",
    description:
      "US-based career support platform empowering job seekers — currently building the Ticket to Work program, a role-based workflow connecting people with disabilities to employment.",
    highlights: [
      "Role-based access: Career Coach, Ops Manager, Job Search Assistant",
      "Lead-to-placement workflow with dual-party e-signature",
      "CI/CD pipeline setup in Azure DevOps",
    ],
    link: "https://codeaegis.com/codeaegis-portfolio",
    linkLabel: "View on CodeAegis",
  },
];

function ProjectCard({ project }) {
  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-line bg-surface shadow-xl shadow-black/30 transition-transform hover:-translate-y-1">
      <div className="flex items-center gap-3 border-b border-line bg-surface2 px-4 py-2.5">
        <WindowDots />
        <div className="flex-1 truncate rounded bg-ink px-3 py-1 text-center font-mono text-[11px] text-muted">
          {project.domain}
        </div>
      </div>

      <div className="flex flex-1 flex-col p-5 md:p-6">
        <div className="mb-2 flex items-center justify-between gap-2">
          <h3 className="font-display text-lg font-semibold text-ivory">{project.name}</h3>
          <span
            className={`shrink-0 rounded-full px-2 py-0.5 font-mono text-[10px] ${
              project.status === "Shipped" ? "bg-mint/10 text-mint" : "bg-amber/10 text-amber"
            }`}
          >
            {project.status}
          </span>
        </div>
        <p className="mb-3 font-mono text-xs text-muted">
          {project.tag} · {project.period}
        </p>
        <p className="mb-4 text-sm leading-relaxed text-muted">{project.description}</p>

        <ul className="mb-5 space-y-1.5 text-sm">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-ivory/90">
              <span className="mt-0.5 shrink-0 font-mono text-mint">+</span>
              <span>{h}</span>
            </li>
          ))}
        </ul>

        {/* <a
          href={project.link}
          target="_blank"
          rel="noreferrer"
          className="mt-auto inline-flex items-center gap-1 font-mono text-xs text-amber hover:text-mint"
        >
          {project.linkLabel} ↗
        </a> */}
      </div>
    </div>
  );
}

function PortFolio() {
  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-16 md:py-24"
    >
      <SectionEyebrow file="projects.js">{PROJECTS.length} shipped</SectionEyebrow>
      <h1 className="mb-8 font-display text-2xl font-semibold text-ivory md:text-3xl">
        Projects
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {PROJECTS.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </div>
  );
}

export default PortFolio;
