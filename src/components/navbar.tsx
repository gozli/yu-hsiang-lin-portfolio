"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.replace("#", ""));

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      let current = "";

      for (const id of sectionIds) {
        const section = document.getElementById(id);
        if (section && section.offsetTop <= scrollPosition) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = () => setMobileOpen(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border glass">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between md:h-20">
          <Link href="#" className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-teal-500">
              <span className="text-lg font-bold tracking-tighter text-white">
                YL
              </span>
            </div>
            <div>
              <div className="font-display text-lg font-semibold tracking-tight md:text-xl">
                {SITE.name}
              </div>
              <div className="hidden text-[10px] text-muted-foreground sm:block">
                EMBEDDED SYSTEMS · AUTOMOTIVE · SECURITY
              </div>
            </div>
          </Link>

          <div className="hidden items-center gap-8 md:flex">
            {NAV_LINKS.map((link) => {
              const id = link.href.replace("#", "");
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-teal-400",
                    activeSection === id
                      ? "text-teal-400"
                      : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            <Button
              asChild
              variant="secondary"
              size="sm"
              className="hidden rounded-xl md:inline-flex"
            >
              <a href={`mailto:${SITE.email}`}>Get in Touch</a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setMobileOpen((open) => !open)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="border-t border-border bg-background md:hidden">
          <div className="flex flex-col gap-1 px-4 py-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleNavClick}
                className="rounded-xl px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${SITE.email}`}
              className="mt-2 flex items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get in Touch
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
