import { useEffect, useState } from "react";
import { Menu, Phone, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { BUSINESS_NAME, BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { ESTIMATE_HREF, NAV_LINKS } from "@/lib/nav";
import { ctaButton } from "./buttons";
import { Logo } from "./logo";

// Every page opens with a dark hero, so the header is transparent-on-dark at
// the top and switches to a solid warm-white bar once scrolled.
export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [path, setPath] = useState("");

  useEffect(() => {
    setPath(window.location.pathname.replace(/\/+$/, "") || "/");
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // The header is always a solid white bar so the logo (white background) fits the nav normally.
  const solid = true;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        solid
          ? "border-b border-border/70 bg-white shadow-[0_8px_30px_-12px_rgba(0,0,0,0.2)] backdrop-blur-md"
          : "bg-gradient-to-b from-black/45 to-transparent",
      )}
    >
      <div className="mx-auto flex h-[5rem] max-w-7xl items-center justify-between gap-4 px-5 sm:h-[5.5rem] sm:px-6">
        <a href="/" className="flex shrink-0 items-center" aria-label={`${BUSINESS_NAME} — home`}>
          <Logo className="h-[4.4rem] sm:h-[4.9rem]" />
        </a>

        <nav className="hidden items-center gap-7 xl:gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => {
            const active = path === link.href;
            return (
              <a
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "relative py-1 text-sm font-medium transition-colors after:absolute after:inset-x-0 after:-bottom-0.5 after:h-0.5 after:origin-left after:scale-x-0 after:bg-accent after:transition-transform hover:after:scale-x-100",
                  active && "after:scale-x-100",
                  solid ? "text-foreground/80 hover:text-accent" : "text-white/90 hover:text-white",
                  active && (solid ? "text-accent" : "text-white"),
                )}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={BUSINESS_PHONE_TEL}
            className={cn(
              "hidden items-center gap-2 text-sm font-semibold transition-colors xl:flex",
              solid ? "text-primary hover:text-accent" : "text-white hover:text-white/80",
            )}
          >
            <Phone className={cn("size-4", solid ? "text-accent" : "text-red-light")} />
            {BUSINESS_PHONE}
          </a>
          <a href={ESTIMATE_HREF} className={ctaButton({ variant: "red", size: "sm" })}>
            Get an Estimate
          </a>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <a
            href={BUSINESS_PHONE_TEL}
            aria-label={`Call ${BUSINESS_PHONE}`}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-lg transition-colors",
              solid ? "text-accent hover:bg-secondary" : "text-white hover:bg-white/10",
            )}
          >
            <Phone className="size-5" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className={cn(
              "inline-flex size-11 items-center justify-center rounded-lg transition-colors",
              solid ? "text-primary hover:bg-secondary" : "text-white hover:bg-white/10",
            )}
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </div>
      </div>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="absolute inset-0 bg-primary/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden
          />
          <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-background shadow-2xl">
            <div className="flex h-[4.5rem] items-center justify-between border-b border-border px-5">
              <Logo className="h-14" />
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex size-10 items-center justify-center rounded-lg text-foreground hover:bg-secondary"
                aria-label="Close menu"
              >
                <X className="size-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-1 overflow-y-auto px-4 py-6" aria-label="Mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3.5 text-base font-medium transition-colors hover:bg-secondary hover:text-accent",
                    path === link.href ? "bg-secondary text-accent" : "text-foreground/80",
                  )}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <div className="mt-auto border-t border-border p-6">
              <a
                href={BUSINESS_PHONE_TEL}
                className="flex items-center justify-center gap-2 rounded-lg border border-border bg-secondary py-3.5 text-base font-semibold text-primary"
              >
                <Phone className="size-5 text-accent" />
                {BUSINESS_PHONE}
              </a>
              <a
                href={ESTIMATE_HREF}
                onClick={() => setOpen(false)}
                className={cn(ctaButton({ variant: "red", size: "md" }), "mt-3 w-full")}
              >
                Get an Estimate
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
