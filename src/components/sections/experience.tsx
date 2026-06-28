"use client";

import { ArrowRight } from "lucide-react";
import { MotionWrapper, SectionHeader } from "@/components/motion-wrapper";
import { EXPERIENCES, PREVIOUS_ROLES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function ExperienceSection() {
  return (
    <MotionWrapper
      id="experience"
      className="border-t border-border bg-secondary/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="CAREER PATH"
            title="15+ years of practical experience"
          />
          <a
            href="#projects"
            className="hidden items-center text-sm font-medium text-teal-400 hover:text-teal-300 md:flex"
          >
            Explore Detailed Projects
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>

        <div className="max-w-4xl space-y-8">
          {EXPERIENCES.map((exp, index) => (
            <div key={exp.id} className="relative flex gap-6">
              {index < EXPERIENCES.length - 1 && (
                <div className="absolute left-4 top-10 bottom-0 w-px bg-border" />
              )}
              <div
                className={cn(
                  "relative z-10 mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-2xl text-xs font-bold text-white ring-4 ring-background",
                  exp.active ? "bg-teal-500" : "bg-slate-600"
                )}
              >
                {exp.year}
              </div>
              <div className="flex-1 pb-4">
                <div className="flex flex-wrap items-baseline gap-x-3">
                  <h3 className="text-xl font-semibold tracking-tight">
                    {exp.role}
                  </h3>
                  <span className="text-sm font-medium text-teal-400">
                    {exp.company} · {exp.location}
                  </span>
                </div>
                <p className="mt-0.5 text-xs text-muted-foreground">
                  {exp.period}
                </p>
                <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-muted-foreground">
                  {exp.highlights.map((item) => (
                    <li key={item.slice(0, 32)}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <p className="pl-14 pt-2 text-xs text-muted-foreground">
            <span className="font-medium text-foreground/70">Early experience:</span>
            {PREVIOUS_ROLES}
          </p>
        </div>
      </div>
    </MotionWrapper>
  );
}
