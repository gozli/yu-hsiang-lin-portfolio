"use client";

import { ExternalLink, Globe, Link2, Mail, Send } from "lucide-react";
import { FormEvent, useState } from "react";
import { MotionWrapper, SectionHeader } from "@/components/motion-wrapper";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CONTACT, SITE, SOCIAL_LINKS } from "@/lib/constants";

const iconMap = {
  mail: Mail,
  linkedin: Link2,
  medium: Globe,
  globe: ExternalLink,
} as const;

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch(CONTACT.formspreeEndpoint, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });

      if (response.ok) {
        setStatus("sent");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <MotionWrapper id="contact" className="border-t border-border py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <SectionHeader eyebrow={CONTACT.eyebrow} title={CONTACT.heading} />
          <p className="mt-5 text-lg text-muted-foreground">{CONTACT.description}</p>
        </div>

        <div className="mx-auto mt-12 grid max-w-5xl gap-10 lg:grid-cols-2">
          <form
            onSubmit={handleSubmit}
            className="space-y-5 rounded-3xl border border-border bg-card p-6 md:p-8"
          >
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" name="name" placeholder="Your name" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="you@example.com"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Please describe the collaboration opportunity or job opportunity..."
                required
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Button
                type="submit"
                size="lg"
                className="rounded-2xl"
                disabled={status === "sending"}
              >
                <Send className="h-4 w-4" />
                {status === "sending" ? "Sending..." : "Send message"}
              </Button>
              <Button
                asChild
                type="button"
                variant="outline"
                size="lg"
                className="rounded-2xl"
              >
                <a href={`mailto:${SITE.email}?subject=Portfolio Contact`}>
                  <Mail className="h-4 w-4" />
                  Send email directly
                </a>
              </Button>
            </div>

            {status === "sent" && (
              <p className="text-sm text-emerald-400">
                  Message sent, thank you for your contact!
              </p>
            )}
            {status === "error" && (
              <p className="text-sm text-red-400">
                  Failed to send, please use mailto to send email directly.
              </p>
            )}

            <p className="text-xs text-muted-foreground">
              Formspree is used for the form (please replace the endpoint in constants.ts).
            </p>
          </form>

          <div className="flex flex-col justify-center space-y-6">
            <div>
              <p className="mb-4 text-sm font-medium text-muted-foreground">
                Contact Information
              </p>
              <div className="space-y-3">
                {SOCIAL_LINKS.map((link) => {
                  const Icon = iconMap[link.icon];
                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.href.startsWith("mailto") ? undefined : "_blank"}
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 text-sm transition-colors hover:border-teal-500/50 hover:bg-secondary"
                    >
                      <Icon className="h-4 w-4 text-teal-400" />
                      <span>{link.label}</span>
                      <span className="ml-auto text-xs text-muted-foreground">
                        {link.href.replace("mailto:", "").replace("https://", "")}
                      </span>
                    </a>
                  );
                })}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-5 text-sm text-muted-foreground">
              <p>{SITE.location} 236</p>
              <p className="mt-1">{SITE.email}</p>
            </div>
          </div>
        </div>
      </div>
    </MotionWrapper>
  );
}
