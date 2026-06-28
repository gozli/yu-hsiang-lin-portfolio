"use client";

import { Cpu, Plane, Shield, Wrench } from "lucide-react";
import { MotionWrapper, SectionHeader } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { SKILL_CATEGORIES } from "@/lib/constants";

const iconMap = {
  cpu: Cpu,
  shield: Shield,
  drone: Plane,
  wrench: Wrench,
} as const;

export function SkillsSection() {
  return (
    <MotionWrapper id="skills" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="EXPERTISE"
          title="Core competencies honed in high-volume production projects"
          className="mb-10"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {SKILL_CATEGORIES.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <div
                key={category.id}
                className="rounded-3xl border border-border bg-card p-7 transition-transform hover:-translate-y-1"
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <div className="mb-5 flex items-center gap-3">
                  <Icon className="h-6 w-6 text-teal-400" />
                  <h3 className="font-semibold tracking-tight">
                    {category.title}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="rounded-xl">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </MotionWrapper>
  );
}
