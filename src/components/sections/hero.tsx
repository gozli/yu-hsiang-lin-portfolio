"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Download } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/constants";

export function HeroSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pt-16">
      <div className="grid items-center gap-12 md:grid-cols-12">
        <motion.div
          className="md:col-span-7"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-400" />
            <span className="font-medium text-emerald-400">{SITE.status}</span>
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tighter md:text-7xl">
            {SITE.name}
          </h1>
          <p className="mt-3 text-2xl tracking-tight text-muted-foreground md:text-3xl">
            {SITE.title}
            <br />
            <span className="text-foreground/80">& {SITE.subtitle}</span>
          </p>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            {SITE.tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Button asChild size="lg" className="rounded-2xl">
              <a href={SITE.cvPath} download>
                <Download />
                Download CV
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-2xl">
              <a href="#contact">
                Contact Me
                <ArrowRight />
              </a>
            </Button>
          </div>

          <div className="mt-8 flex items-center gap-8 text-sm">
            <div className="text-xs leading-tight text-muted-foreground">
              Based on {SITE.location}
              <br />
              <span className="text-foreground/70">Welcome to global remote and cross-domain collaboration</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="md:col-span-5"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="relative mx-auto max-w-[380px]">
            <div className="aspect-square overflow-hidden rounded-[3rem] border border-border shadow-2xl shadow-black/40">
              <Image
                src="/images/YH_profiles.jpg"
                alt={`${SITE.name} - Professional headshot`}
                width={800}
                height={800}
                className="h-full w-full object-cover grayscale-[0.15]"
                priority
              />
            </div>
            <div className="absolute -bottom-3 -right-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div>
                  <div className="text-xs text-muted-foreground">Currently at</div>
                  <div className="font-semibold tracking-tight">
                    DesaySV · {SITE.location}
                  </div>
                </div>
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Check className="h-4 w-4 text-emerald-400" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
