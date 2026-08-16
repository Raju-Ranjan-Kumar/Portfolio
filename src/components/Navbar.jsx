import React, { useEffect, useState } from "react";
import { Link } from "react-scroll";

const NAV_ITEMS = [
  { to: "Home", label: "home.jsx" },
  { to: "About", label: "about.md" },
  { to: "Experiance", label: "skills.json" },
  { to: "Portfolio", label: "projects.js" },
  { to: "Resume", label: "resume.pdf" },
  { to: "Contact", label: "contact.js" },
];

function Navbar() {
  const [menu, setMenu] = useState(false);
  const [active, setActive] = useState("Home");

  useEffect(() => {
    const sections = NAV_ITEMS.map((n) => document.querySelector(`[name="${n.to}"]`)).filter(
      Boolean
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.getAttribute("name"));
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-ink/90 backdrop-blur">
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20">
        <div className="flex items-center justify-between h-16">
          <Link
            to="Home"
            smooth={true}
            duration={500}
            offset={-70}
            className="flex items-center gap-2 font-mono text-sm text-ivory cursor-pointer"
          >
            <span className="text-mint">~/</span>
            <span className="font-semibold">raju.dev</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth={true}
                duration={500}
                offset={-70}
                onSetActive={() => setActive(item.to)}
                className={`group flex cursor-pointer items-center gap-2 rounded-t-md border-b-2 px-3 py-2 font-mono text-xs transition-colors ${
                  active === item.to
                    ? "border-amber text-ivory"
                    : "border-transparent text-muted hover:text-ivory"
                }`}
              >
                <span
                  className={`h-1.5 w-1.5 rounded-full ${
                    active === item.to ? "bg-amber" : "bg-line group-hover:bg-muted"
                  }`}
                />
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            className="rounded-md border border-line p-2 text-ivory md:hidden"
            onClick={() => setMenu((v) => !v)}
            aria-expanded={menu}
            aria-label="Toggle navigation menu"
          >
            <span className="font-mono text-xs">{menu ? "esc" : "menu"}</span>
          </button>
        </div>

        {menu && (
          <nav className="border-t border-line py-3 md:hidden" aria-label="Primary mobile">
            <div className="flex flex-col gap-1">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setMenu(false)}
                  className={`flex cursor-pointer items-center gap-2 rounded-md px-3 py-2 text-left font-mono text-xs ${
                    active === item.to ? "bg-surface text-amber" : "text-muted"
                  }`}
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-current" />
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Navbar;
