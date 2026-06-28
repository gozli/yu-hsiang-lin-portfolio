"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";

interface MotionWrapperProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  id?: string;
}

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function MotionWrapper({
  children,
  className,
  delay = 0,
  id,
}: MotionWrapperProps) {
  return (
    <motion.section
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
      variants={fadeUp}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  className,
}: {
  eyebrow: string;
  title: string;
  className?: string;
}) {
  return (
    <div className={className}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-teal-400">
        {eyebrow}
      </p>
      <h2 className="section-header font-display text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
    </div>
  );
}
