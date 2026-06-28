"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { MotionWrapper, SectionHeader } from "@/components/motion-wrapper";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { PROJECTS } from "@/lib/constants";

function ProjectImageGallery({
  projectId,
  images: initialImages,
  alt,
}: {
  projectId: string;
  images: readonly string[];
  alt: string;
}) {
  const [images, setImages] = useState<string[]>([...initialImages]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentImage = images[activeIndex];

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // ESC 鍵關閉 Modal
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === "Escape") closeModal();
  }, []);

  // 監聽 ESC 鍵關閉 Modal
useEffect(() => {
  const handleEsc = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      closeModal();
    }
  };

  if (isModalOpen) {
    document.addEventListener("keydown", handleEsc);
  }

  return () => {
    document.removeEventListener("keydown", handleEsc);
  };
}, [isModalOpen]);

  return (
    <div className="space-y-3">
      {/* 主圖展示區 - 點擊開啟放大 Modal */}
      <div
        className="group relative cursor-zoom-in overflow-hidden rounded-2xl border border-border bg-secondary"
        onClick={openModal}
      >
        <div className="relative w-full">
          <Image
            src={currentImage}
            alt={alt}
            width={1200}
            height={800}
            className="h-auto w-full object-contain transition-transform duration-300 group-hover:scale-[1.015]"
            unoptimized={currentImage.startsWith("data:")}
          />
        </div>
      </div>

      {/* 多圖縮圖列 */}
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto pb-1">
          {images.map((src, index) => (
            <button
              key={`${projectId}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`relative h-14 w-20 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                activeIndex === index
                  ? "border-teal-400 scale-[1.02]"
                  : "border-border opacity-70 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`${alt} thumbnail ${index + 1}`}
                width={80}
                height={56}
                className="h-full w-full object-cover"
                unoptimized={src.startsWith("data:")}
              />
            </button>
          ))}
        </div>
      )}

      {/* ==================== 圖片放大 Modal ==================== */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={closeModal}
        >
          <div
            className="relative max-h-[90vh] max-w-[95vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={currentImage}
              alt={alt}
              width={1600}
              height={1200}
              className="max-h-[90vh] w-auto object-contain rounded-xl"
              unoptimized={currentImage.startsWith("data:")}
            />

            {/* 關閉按鈕 */}
            <button
              onClick={closeModal}
              className="absolute -right-2 -top-2 rounded-full bg-white p-2 text-black shadow-lg hover:bg-gray-200"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export function ProjectsSection() {
  return (
    <MotionWrapper
      id="projects"
      className="border-t border-border bg-secondary/30 py-16 md:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="SELECTED WORK"
            title="Major Projects Led and Significant Contribution"
          />
          <p className="max-w-xs text-sm text-muted-foreground md:text-right">
          All content is based on actual technical contributions
          </p>
        </div>

        <div className="space-y-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
            >
              <Card className="overflow-hidden rounded-3xl p-6 md:p-8">
                <div className="grid gap-8 md:grid-cols-5">
                  <div className="md:col-span-2">
                    <ProjectImageGallery
                      projectId={project.id}
                      //defaultImage={project.image}
                      images={project.images}
                      alt={project.title}
                    />
                    <p className="mt-2 text-center text-[10px] text-muted-foreground">
                      {project.period}
                    </p>
                  </div>

                  <div className="md:col-span-3">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <h3 className="font-display text-xl font-semibold tracking-tight md:text-2xl">
                          {project.title}
                        </h3>
                        <p className="mt-0.5 text-sm font-medium text-teal-400">
                          {project.company}
                        </p>
                      </div>
                      <Badge variant="success" className="shrink-0">
                        {project.metric}
                      </Badge>
                    </div>

                    <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>

                    <div className="mt-5">
                      <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        Ｍy contributions
                      </p>
                      <ul className="space-y-1.5 text-sm text-muted-foreground">
                        {project.contributions.map((item) => (
                          <li key={item.slice(0, 24)} className="flex gap-2">
                            <span className="mt-1 text-teal-400">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="rounded-xl">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionWrapper>
  );
}
