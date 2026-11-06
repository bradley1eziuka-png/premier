import { useEffect, useState, type FormEvent } from "react";
import { CheckCircle2, Info } from "lucide-react";

import { FORM_IS_DEMO, submitEstimate } from "@/lib/form-submit";
import { siteConfig } from "@/config";
import { SEASON } from "@/config/season";
import { BUSINESS_PHONE, BUSINESS_PHONE_TEL } from "@/lib/site-config";
import { FORM_SERVICE_OPTIONS, FORM_SERVICE_PARAMS, PRIMARY_SERVICE } from "@/lib/services-data";
import { ctaButton } from "./buttons";

type Values = {
  name: string;
  phone: string;
  email: string;
  service: string;
  location: string;
  details: string;
};

// The service dropdown defaults to the active season's primary service
// (Christmas Light Installation in Holiday Mode) and follows ?service=
// deep links from CTAs (christmas | landscaping).
const DEFAULT_SERVICE = PRIMARY_SERVICE.formLabel;
const EMPTY: Values = {
  name: "",
  phone: "",
  email: "",
  service: DEFAULT_SERVICE,
  location: "",
  details: "",
};

// Estimate form card. Delivery is handled by src/lib/form-submit.ts
// (Formspree, GHL webhook, or demo). The success state only appears after the
// provider confirms receipt; in demo mode nothing is sent and the UI says so.
export function EstimateFormCard({
  id = "estimate",
  className,
}: {
  id?: string;
  className?: string;
}) {
  const [values, setValues] = useState<Values>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof Values, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "demo" | "error">(
    "idle",
  );
  const [honeypot, setHoneypot] = useState("");

  useEffect(() => {
    const param = new URLSearchParams(window.location.search).get("service");
    const match = param ? FORM_SERVICE_PARAMS[param] : undefined;
    if (match) setValues((v) => ({ ...v, service: match }));
  }, []);

  function update<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
    if (errors[key]) setErrors((e) => ({ ...e, [key]: undefined }));
  }

  function validate() {
    const next: Partial<Record<keyof Values, string>> = {};
    if (values.name.trim().length < 2) next.name = "Please enter your full name.";
    if (values.phone.replace(/\D/g, "").length < 7)
      next.phone = "Please enter a valid phone number.";
    if (values.email.trim() && !/^\S+@\S+\.\S+$/.test(values.email.trim()))
      next.email = "Please enter a valid email address.";
    if (!values.service) next.service = "Please select a service.";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    const result = await submitEstimate(values, honeypot);
    if (result.status === "success") {
      setStatus("success");
      setValues(EMPTY);
    } else if (result.status === "demo") {
      setStatus("demo");
    } else {
      setStatus("error");
    }
  }

  const fieldBase =
    "h-12 w-full rounded-lg border bg-white px-4 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-accent/30";
  const fieldOk = "border-border focus:border-accent";
  const fieldErr = "border-destructive focus:border-destructive";
  const label = "mb-1.5 block text-sm font-semibold text-primary";

  return (
    <div
      id={id}
      className={
        "scroll-mt-28 overflow-hidden rounded-3xl border border-border bg-white shadow-[0_30px_70px_-30px_rgba(0,0,0,0.55)]" +
        (className ? ` ${className}` : "")
      }
    >
      <div className="h-1.5 bg-gradient-to-r from-burgundy via-accent to-burgundy" aria-hidden />
      <div className="p-6 sm:p-7">
        <div className="mb-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-accent">
            Estimate Request
          </span>
          <h2 className="mt-3 font-display text-[1.75rem] font-semibold leading-tight tracking-tight text-primary sm:text-3xl">
            {SEASON.form.title}
          </h2>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
            {SEASON.form.body}
          </p>
        </div>

        {status === "demo" ? (
          <div
            role="status"
            className="flex flex-col items-center rounded-2xl border border-border bg-secondary/60 px-6 py-10 text-center"
          >
            <span className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <Info className="size-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
              Mockup — Not Sent
            </h3>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              This form isn't connected to an inbox yet, so your request was not delivered. It must
              be connected before launch. To reach Premier now, call{" "}
              <a href={BUSINESS_PHONE_TEL} className="font-semibold text-accent hover:underline">
                {BUSINESS_PHONE}
              </a>
              .
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-accent hover:underline"
            >
              Back to the form
            </button>
          </div>
        ) : status === "success" ? (
          <div className="flex flex-col items-center rounded-2xl border border-border bg-secondary/60 px-6 py-10 text-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-accent/10 text-accent">
              <CheckCircle2 className="size-8" />
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight text-primary">
              Thank You — We'll Be in Touch
            </h3>
            <p className="mt-3 max-w-sm text-[0.95rem] leading-relaxed text-muted-foreground">
              Your estimate request has been received. We'll reach out to learn more about your
              project.
            </p>
            <p className="mt-6 text-sm text-muted-foreground">
              Need to reach us sooner?{" "}
              <a href={BUSINESS_PHONE_TEL} className="font-semibold text-primary hover:text-accent">
                Call {BUSINESS_PHONE}
              </a>
            </p>
            <button
              type="button"
              onClick={() => setStatus("idle")}
              className="mt-6 text-sm font-semibold text-accent hover:underline"
            >
              Submit another request
            </button>
          </div>
        ) : (
          <form onSubmit={onSubmit} noValidate className="relative space-y-3.5">
            {/* Honeypot: hidden from people, tempting to bots. */}
            <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
              <label htmlFor="est-website">Leave this field empty</label>
              <input
                id="est-website"
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor={`${id}-name`} className={label}>
                Full Name <span className="text-accent">*</span>
              </label>
              <input
                id={`${id}-name`}
                type="text"
                autoComplete="name"
                value={values.name}
                onChange={(e) => update("name", e.target.value)}
                placeholder="Your full name"
                className={`${fieldBase} ${errors.name ? fieldErr : fieldOk}`}
                aria-invalid={!!errors.name}
              />
              {errors.name && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.name}</p>
              )}
            </div>

            <div className="grid gap-3.5 sm:grid-cols-2">
              <div>
                <label htmlFor={`${id}-phone`} className={label}>
                  Phone Number <span className="text-accent">*</span>
                </label>
                <input
                  id={`${id}-phone`}
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  value={values.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  placeholder="Best number to reach you"
                  className={`${fieldBase} ${errors.phone ? fieldErr : fieldOk}`}
                  aria-invalid={!!errors.phone}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs font-medium text-destructive">{errors.phone}</p>
                )}
              </div>
              <div>
                <label htmlFor={`${id}-email`} className={label}>
                  Email Address
                </label>
                <input
                  id={`${id}-email`}
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  value={values.email}
                  onChange={(e) => update("email", e.target.value)}
                  placeholder="you@email.com"
                  className={`${fieldBase} ${errors.email ? fieldErr : fieldOk}`}
                  aria-invalid={!!errors.email}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs font-medium text-destructive">{errors.email}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor={`${id}-service`} className={label}>
                Service Needed <span className="text-accent">*</span>
              </label>
              <select
                id={`${id}-service`}
                value={values.service}
                onChange={(e) => update("service", e.target.value)}
                className={`${fieldBase} ${errors.service ? fieldErr : fieldOk} cursor-pointer`}
                aria-invalid={!!errors.service}
              >
                {FORM_SERVICE_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>
                    {opt}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs font-medium text-destructive">{errors.service}</p>
              )}
            </div>

            <div>
              <label htmlFor={`${id}-location`} className={label}>
                Project Location
              </label>
              <input
                id={`${id}-location`}
                type="text"
                autoComplete="address-level2"
                value={values.location}
                onChange={(e) => update("location", e.target.value)}
                placeholder="City or neighborhood"
                className={`${fieldBase} ${fieldOk}`}
              />
            </div>

            <div>
              <label htmlFor={`${id}-details`} className={label}>
                Project Details
              </label>
              <textarea
                id={`${id}-details`}
                rows={3}
                value={values.details}
                onChange={(e) => update("details", e.target.value)}
                placeholder="Tell us about your property and what you have in mind."
                className="w-full rounded-lg border border-border bg-white px-4 py-3 text-base text-foreground transition-colors placeholder:text-muted-foreground/60 focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>

            <button
              type="submit"
              disabled={status === "submitting"}
              className={ctaButton({ variant: "red", size: "lg" }) + " w-full"}
            >
              {status === "submitting" ? "Sending…" : "Request My Estimate"}
            </button>

            {status === "error" && (
              <p className="text-center text-sm font-medium text-destructive">
                We couldn't send your request. Please try again or call us at{" "}
                <a href={BUSINESS_PHONE_TEL} className="underline">
                  {BUSINESS_PHONE}
                </a>
                .
              </p>
            )}

            {FORM_IS_DEMO && siteConfig.form.showDemoNotice && (
              <p className="rounded-md bg-secondary px-3 py-2 text-center text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                Mockup — form requires connection before launch
              </p>
            )}
          </form>
        )}
      </div>
    </div>
  );
}
