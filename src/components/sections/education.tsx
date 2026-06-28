"use client";

import { GraduationCap } from "lucide-react";
import { MotionWrapper, SectionHeader } from "@/components/motion-wrapper";
import { Card, CardContent } from "@/components/ui/card";
import { EDUCATION } from "@/lib/constants";

export function EducationSection() {
  return (
    <MotionWrapper id="education" className="border-t border-border py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="EDUCATION"
          title="Academic Background"
          className="mb-10"
        />

        <div className="grid gap-6 md:grid-cols-2">
          {EDUCATION.map((item) => (
            <Card key={item.school} className="rounded-3xl">
              <CardContent className="flex gap-5 p-7">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-teal-500/10">
                  <GraduationCap className="h-6 w-6 text-teal-400" />
                </div>
                <div>
                  <div className="flex flex-wrap items-baseline gap-2">
                    <h3 className="text-lg font-semibold">
                      {item.degree} · {item.field}
                    </h3>
                    <span className="text-xs text-muted-foreground">
                      {item.period}
                    </span>
                  </div>
                  <p className="mt-1 font-medium text-teal-400">{item.school}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {item.highlight}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
