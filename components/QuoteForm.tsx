"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { SERVICES, BUSINESS } from "@/lib/services";

type Status = "idle" | "sending" | "sent" | "error";
type Errors = Record<string, string>;

/* The three canonical stages. When a service is pre-selected (service pages)
   the picker stage is skipped, but the progress rail still shows all three. */
const CANON = ["service", "project", "details"] as const;
type Stage = (typeof CANON)[number];

const STAGE_META: Record<Stage, { title: string; rail: string; hint: string }> = {
  service: { title: "What do you need?", rail: "Service", hint: "Choose the work you'd like priced — one tap." },
  project: { title: "About the job", rail: "Project", hint: "A few quick details so your quote is accurate." },
  details: { title: "Your details", rail: "Details", hint: "Where we send the quote and how we reach you." },
};

const SCALES = [
  { value: "Small", label: "Small", hint: "A path, steps or corner" },
  { value: "Medium", label: "Medium", hint: "A driveway or patio" },
  { value: "Large", label: "Large", hint: "Whole garden / several areas" },
  { value: "Not sure", label: "Not sure yet", hint: "Help me work it out" },
];

const TIMEFRAMES = ["As soon as possible", "Within 1–3 months", "Just planning ahead"];

const NEXT_STEPS = [
  { n: "01", t: "We review your details", d: "Usually the same working day." },
  { n: "02", t: "We call to arrange a visit", d: "A time that suits you — no obligation." },
  { n: "03", t: "You get a fixed written quote", d: "Clear scope, clear price, no surprises." },
];

const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.trim());
const phoneOk = (v: string) => v.replace(/\D/g, "").length >= 7;

const CheckIcon = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function QuoteForm({ defaultService }: { defaultService?: string }) {
  const hasPreset = Boolean(defaultService);
  // Stages actually walked through — service stage is dropped when pre-selected.
  const STAGES: Stage[] = hasPreset ? ["project", "details"] : ["service", "project", "details"];

  const [stepIndex, setStepIndex] = useState(0);
  const [status, setStatus] = useState<Status>("idle");
  const [submitError, setSubmitError] = useState("");
  const [errors, setErrors] = useState<Errors>({});

  const [service, setService] = useState(defaultService ?? "");
  const [scale, setScale] = useState("");
  const [timeframe, setTimeframe] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [postcode, setPostcode] = useState("");

  const formRef = useRef<HTMLFormElement>(null);

  const stage = STAGES[stepIndex];
  const isLast = stepIndex === STAGES.length - 1;
  const canonIndex = CANON.indexOf(stage); // position on the 3-stage rail

  const clearErr = (k: string) => setErrors((e) => (e[k] ? { ...e, [k]: "" } : e));

  function focusFirstError() {
    requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>('[aria-invalid="true"]')?.focus();
    });
  }

  function validate(s: Stage): Errors {
    const e: Errors = {};
    if (s === "service" && !service) {
      e.service = "Pick the service you need — or choose ‘Something else’.";
    }
    if (s === "project" && message.trim().length < 5) {
      e.message = "A sentence or two about the job helps us quote accurately.";
    }
    if (s === "details") {
      if (name.trim().length < 2) e.name = "Please tell us your name.";
      if (!phoneOk(phone)) e.phone = "Enter a number we can reach you on.";
      if (!emailOk(email)) e.email = "Enter a valid email address.";
      if (postcode.trim().length < 3) e.postcode = "Your postcode helps us plan the visit.";
    }
    return e;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const stageErrors = validate(stage);
    if (Object.keys(stageErrors).length) {
      setErrors(stageErrors);
      focusFirstError();
      return;
    }
    setErrors({});
    if (!isLast) {
      setStepIndex((i) => i + 1);
      return;
    }
    void doSubmit();
  }

  async function doSubmit() {
    setStatus("sending");
    setSubmitError("");

    const extras: string[] = [];
    if (scale) extras.push(`Approx size: ${scale}`);
    if (timeframe) extras.push(`Timeframe: ${timeframe}`);
    const fullMessage = extras.length
      ? `${message.trim()}\n\n— ${extras.join("\n— ")}`
      : message.trim();

    // Honeypot: read the uncontrolled hidden field the browser would have filled.
    const company =
      (formRef.current?.elements.namedItem("company") as HTMLInputElement | null)?.value ?? "";

    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, postcode, service, message: fullMessage, company }),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch {
      setStatus("error");
      setSubmitError(
        `Something went wrong sending your request. Please call us on ${BUSINESS.phone} and we'll sort it.`,
      );
    }
  }

  function back() {
    setErrors({});
    setStepIndex((i) => Math.max(0, i - 1));
  }

  /* ---------- Success ---------- */
  if (status === "sent") {
    const firstName = name.trim().split(" ")[0];
    return (
      <div className="border border-line border-t-4 border-t-turf bg-white p-6 shadow-[0_18px_44px_-24px_rgba(24,28,34,0.5)] sm:p-8">
        <div className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-full bg-turf text-paper">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M20 6 9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <p className="eyebrow !mb-0">Request received</p>
        </div>

        <h3 className="mt-4 font-[family-name:var(--font-display)] text-2xl font-extrabold tracking-tight">
          Thanks{firstName ? `, ${firstName}` : ""} — we&apos;ve got it.
        </h3>
        <p className="mt-2 leading-relaxed text-ink-soft">
          We&apos;ll be in touch shortly to arrange your free quote
          {service ? ` for ${service.toLowerCase()}` : ""}. If it&apos;s urgent, call us on{" "}
          <a className="font-semibold text-turf underline decoration-turf" href={`tel:${BUSINESS.phoneHref}`}>
            {BUSINESS.phone}
          </a>
          .
        </p>

        <ol className="mt-6 space-y-4 border-t border-line pt-6">
          {NEXT_STEPS.map((s) => (
            <li key={s.n} className="flex gap-4">
              <span className="font-[family-name:var(--font-mono)] text-sm text-turf">{s.n}</span>
              <div>
                <p className="font-[family-name:var(--font-display)] font-bold leading-tight">{s.t}</p>
                <p className="mt-0.5 text-sm text-ink-soft">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-7 flex flex-wrap gap-3">
          <a href={`tel:${BUSINESS.phoneHref}`} className="btn-slab text-sm">
            Call {BUSINESS.phone}
          </a>
          <Link href="/book" className="btn-ghost text-sm">
            Book a visit slot
          </Link>
        </div>
      </div>
    );
  }

  /* ---------- Wizard ---------- */
  const meta = STAGE_META[stage];

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      noValidate
      className="border border-line border-t-4 border-t-turf bg-white shadow-[0_18px_44px_-24px_rgba(24,28,34,0.5)]"
    >
      {/* Header + progress rail */}
      <div className="px-5 pt-5 sm:px-7 sm:pt-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex w-full gap-1.5">
            {CANON.map((c, i) => (
              <span
                key={c}
                className={`h-1.5 flex-1 rounded-full transition-colors ${
                  i <= canonIndex ? "bg-turf" : "bg-line"
                }`}
              />
            ))}
          </div>
        </div>
        <div className="mt-2 flex justify-between font-[family-name:var(--font-mono)] text-[0.6rem] uppercase tracking-[0.16em]">
          {CANON.map((c, i) => (
            <span
              key={c}
              className={
                i < canonIndex ? "text-turf" : i === canonIndex ? "text-tarmac" : "text-ink-soft/50"
              }
            >
              {STAGE_META[c].rail}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-baseline gap-3">
          <span className="font-[family-name:var(--font-mono)] text-turf">
            0{canonIndex + 1}
          </span>
          <h3 className="font-[family-name:var(--font-display)] text-xl font-extrabold tracking-tight">
            {meta.title}
          </h3>
          <span className="ml-auto shrink-0 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-ink-soft">
            Step {canonIndex + 1} / 3
          </span>
        </div>
        <p className="mt-1 text-sm text-ink-soft">{meta.hint}</p>
        {hasPreset && stage === "project" && (
          <p className="mt-3 inline-flex items-center gap-2 border border-line bg-stone px-3 py-1.5 font-[family-name:var(--font-mono)] text-[0.68rem] uppercase tracking-[0.14em] text-tarmac">
            <span className="h-1.5 w-1.5 rounded-full bg-turf" /> Quoting: {service}
          </p>
        )}
      </div>

      {/* Body — re-mounts per stage so it re-animates */}
      <div key={stage} className="step-in px-5 py-6 sm:px-7">
        {stage === "service" && (
          <>
            <div role="group" aria-label="Choose a service" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {[
                ...SERVICES.map((s) => ({ name: s.name, short: s.short })),
                { name: "Something else", short: "Tell us what you have in mind." },
              ].map((opt) => {
                const selected = service === opt.name;
                return (
                  <button
                    key={opt.name}
                    type="button"
                    aria-pressed={selected}
                    onClick={() => {
                      setService(opt.name);
                      clearErr("service");
                    }}
                    className={`relative border-2 p-4 text-left transition-all ${
                      selected
                        ? "border-turf bg-white shadow-[4px_4px_0_0_var(--color-turf)]"
                        : "border-line bg-white hover:border-tarmac"
                    }`}
                  >
                    <span className="flex items-start justify-between gap-2">
                      <span className="font-[family-name:var(--font-display)] font-bold leading-tight">
                        {opt.name}
                      </span>
                      <span
                        className={`mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full border ${
                          selected ? "border-turf bg-turf text-paper" : "border-line text-transparent"
                        }`}
                      >
                        <CheckIcon />
                      </span>
                    </span>
                    <span className="mt-1.5 block text-xs leading-snug text-ink-soft">{opt.short}</span>
                  </button>
                );
              })}
            </div>
            {errors.service && (
              <p role="alert" className="mt-3 text-sm text-turf">
                {errors.service}
              </p>
            )}
          </>
        )}

        {stage === "project" && (
          <div className="grid gap-6">
            <fieldset>
              <legend className="mb-2 block font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
                Roughly how big is the job?{" "}
                <span className="normal-case tracking-normal text-ink-soft/70">(optional)</span>
              </legend>
              <div className="grid grid-cols-2 gap-2">
                {SCALES.map((o) => {
                  const sel = scale === o.value;
                  return (
                    <button
                      key={o.value}
                      type="button"
                      aria-pressed={sel}
                      onClick={() => setScale(sel ? "" : o.value)}
                      className={`border-2 px-3 py-2.5 text-left transition-colors ${
                        sel
                          ? "border-tarmac bg-tarmac text-paper"
                          : "border-line bg-white text-tarmac hover:border-tarmac"
                      }`}
                    >
                      <span className="block font-[family-name:var(--font-display)] text-sm font-bold">
                        {o.label}
                      </span>
                      <span
                        className={`block text-[0.7rem] leading-tight ${
                          sel ? "text-paper/70" : "text-ink-soft"
                        }`}
                      >
                        {o.hint}
                      </span>
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-2 block font-[family-name:var(--font-mono)] text-[0.7rem] uppercase tracking-[0.14em] text-ink-soft">
                When are you hoping to start?{" "}
                <span className="normal-case tracking-normal text-ink-soft/70">(optional)</span>
              </legend>
              <div className="flex flex-wrap gap-2">
                {TIMEFRAMES.map((t) => {
                  const sel = timeframe === t;
                  return (
                    <button
                      key={t}
                      type="button"
                      aria-pressed={sel}
                      onClick={() => setTimeframe(sel ? "" : t)}
                      className={`border-2 px-3.5 py-2 font-[family-name:var(--font-mono)] text-xs transition-colors ${
                        sel
                          ? "border-turf bg-turf text-paper"
                          : "border-line bg-white text-tarmac hover:border-tarmac"
                      }`}
                    >
                      {t}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            <div>
              <label htmlFor="message">Tell us about the job</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={message}
                onChange={(e) => {
                  setMessage(e.target.value);
                  clearErr("message");
                }}
                aria-invalid={errors.message ? true : undefined}
                aria-describedby={errors.message ? "message-err" : undefined}
                placeholder="Rough size of the area, what's there now, and what you'd like…"
              />
              {errors.message && (
                <p id="message-err" role="alert" className="mt-1 text-xs text-turf">
                  {errors.message}
                </p>
              )}
            </div>
          </div>
        )}

        {stage === "details" && (
          <div className="grid gap-4 sm:grid-cols-2">
            <TextField
              id="name"
              label="Name"
              value={name}
              onChange={(v) => {
                setName(v);
                clearErr("name");
              }}
              error={errors.name}
              autoComplete="name"
            />
            <TextField
              id="phone"
              label="Phone"
              type="tel"
              inputMode="tel"
              value={phone}
              onChange={(v) => {
                setPhone(v);
                clearErr("phone");
              }}
              error={errors.phone}
              autoComplete="tel"
            />
            <TextField
              id="email"
              label="Email"
              type="email"
              inputMode="email"
              value={email}
              onChange={(v) => {
                setEmail(v);
                clearErr("email");
              }}
              error={errors.email}
              autoComplete="email"
            />
            <TextField
              id="postcode"
              label="Postcode"
              value={postcode}
              onChange={(v) => {
                setPostcode(v);
                clearErr("postcode");
              }}
              error={errors.postcode}
              autoComplete="postal-code"
              placeholder="BA14…"
            />
            <p className="sm:col-span-2 text-xs leading-relaxed text-ink-soft">
              We&apos;ll only use these to arrange your quote — no spam, no sharing your details.
            </p>
          </div>
        )}
      </div>

      {/* Honeypot — always in the DOM for bots to trip on */}
      <input
        type="text"
        name="company"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden="true"
        defaultValue=""
      />

      {/* Footer nav */}
      <div className="flex flex-wrap items-center gap-3 border-t border-line px-5 py-4 sm:px-7">
        {stepIndex > 0 && (
          <button type="button" onClick={back} className="btn-ghost !px-4 !py-2.5 text-sm">
            ← Back
          </button>
        )}
        <button type="submit" className="btn-slab ml-auto text-sm" disabled={status === "sending"}>
          {isLast
            ? status === "sending"
              ? "Sending…"
              : "Request my free quote"
            : "Continue →"}
        </button>
        {status === "error" && (
          <p role="alert" className="sm:basis-full text-sm text-turf">
            {submitError}
          </p>
        )}
      </div>
    </form>
  );
}

function TextField({
  id,
  label,
  value,
  onChange,
  error,
  type = "text",
  ...rest
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  error?: string;
  type?: string;
  inputMode?: "text" | "tel" | "email";
  autoComplete?: string;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        required
        onChange={(e) => onChange(e.target.value)}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? `${id}-err` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-err`} role="alert" className="mt-1 text-xs text-turf">
          {error}
        </p>
      )}
    </div>
  );
}
