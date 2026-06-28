import { SITE } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="border-t border-border py-8 text-center text-xs text-muted-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} {SITE.name} ({SITE.nameZh}).
        Specially developed for professionals pursuing opportunities in embedded systems and automotive field.
      </div>
    </footer>
  );
}
