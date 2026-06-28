"use client";

import { Cpu, Factory, Plane, Shield } from "lucide-react";
import { MotionWrapper, SectionHeader } from "@/components/motion-wrapper";
import { ABOUT } from "@/lib/constants";

const iconMap = {
  cpu: Cpu,
  shield: Shield,
  factory: Factory,
  drone: Plane,
} as const;

export function AboutSection() {
  return (
    <MotionWrapper
      id="about"
      className="border-t border-border py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl">
          <SectionHeader eyebrow={ABOUT.eyebrow} title={ABOUT.heading} />

          <div className="mt-10 grid gap-10 md:grid-cols-12">
            <div className="space-y-5 text-[15px] leading-relaxed text-muted-foreground md:col-span-7">
              {ABOUT.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 24)}>{paragraph}</p>
              ))}
            </div>

            <div className="md:col-span-5">
              <div className="rounded-3xl border border-border bg-card p-7">
                <p className="mb-4 text-xs uppercase tracking-widest text-muted-foreground">
                  Core competencies
                </p>
                <ul className="space-y-3 text-sm">
                  {ABOUT.focusAreas.map(({ icon, label }) => {
                    const Icon = iconMap[icon];
                    return (
                      <li key={label} className="flex gap-3">
                        <Icon className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                        <span>{label}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
            {ABOUT.stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-border bg-card p-5 text-center"
              >
                <div className="stat-number font-display text-3xl font-semibold text-teal-400">
                  {stat.value}
                </div>
                <div className="mt-1 text-xs text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
