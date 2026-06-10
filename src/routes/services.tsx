import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Home, Building2, BatteryCharging, Zap, Wrench, ShieldCheck,
  ArrowRight, CheckCircle2, Phone, Clock, Star,
} from "lucide-react";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Our Services — Voltline Electric" },
      { name: "description", content: "Residential wiring, commercial fitouts, EV charger installs, panel upgrades, repairs, and safety audits by licensed Canadian master electricians. Flat-rate quotes." },
      { property: "og:title", content: "Our Services — Voltline Electric" },
      { property: "og:description", content: "Residential wiring, commercial fitouts, EV charger installs, panel upgrades, repairs, and safety audits by licensed Canadian master electricians." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/services" },
    ],
    links: [
      { rel: "canonical", href: "/services" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <SiteLayout>
      <Hero />
      <ServiceGrid />
      <Process />
      <PricingNote />
      <CTA />
    </SiteLayout>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy-deep text-cream">
      <div className="absolute inset-0 opacity-[0.07]" style={{
        backgroundImage: "radial-gradient(circle at 1px 1px, var(--color-cream) 1px, transparent 0)",
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-amber/20 blur-3xl" />

      <div className="container-x relative py-20 md:py-28 max-w-4xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-medium text-amber">
          <Zap className="h-3.5 w-3.5" />
          Full-service electrical
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
          Every electrical need,<br />
          <span className="text-amber">one expert team.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/75 leading-relaxed">
          From a flickering light to a full commercial buildout, Voltline's licensed master electricians deliver code-compliant work with transparent, flat-rate pricing.
        </p>
        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <Link to="/contact" className="btn-primary">
            Book a free estimate <ArrowRight className="h-4 w-4" />
          </Link>
          <a href="tel:+18005551234" className="btn-outline">
            <Phone className="h-4 w-4" /> (800) 555-1234
          </a>
        </div>
      </div>
    </section>
  );
}

function ServiceGrid() {
  const services = [
    {
      icon: Home,
      title: "Residential",
      desc: "Complete home electrical services including rewiring, lighting design, smart home integration, basement finishes, and knob-and-tube removal.",
      features: ["Rewiring & renovations", "Lighting design & install", "Smart home integration", "Knob-and-tube removal"],
    },
    {
      icon: Building2,
      title: "Commercial",
      desc: "Office fitouts, retail buildouts, warehouse power distribution, tenant improvements, and ongoing maintenance contracts.",
      features: ["Office & retail fitouts", "Code compliance upgrades", "Maintenance contracts", "Emergency repairs"],
    },
    {
      icon: BatteryCharging,
      title: "EV Chargers",
      desc: "Level 2 home and workplace EV charger installations. We handle the electrical permit, ESA inspection, and rebate paperwork.",
      features: ["Level 2 charger install", "Load calculation & panel check", "Permit & ESA inspection", "Rebate paperwork handled"],
    },
    {
      icon: Zap,
      title: "Panel Upgrades",
      desc: "100A to 200A service upgrades, sub-panel additions, and whole-home surge protection for modern power demands.",
      features: ["100A → 200A upgrades", "Sub-panel installs", "Whole-home surge protection", "Service mast replacement"],
    },
    {
      icon: Wrench,
      title: "Repairs & Troubleshooting",
      desc: "Breaker issues, flickering lights, dead outlets, aluminum wiring remediation, and power restoration.",
      features: ["Breaker & outlet issues", "Flickering & dimming lights", "Aluminum wiring remediation", "Power restoration"],
    },
    {
      icon: ShieldCheck,
      title: "Safety Audits",
      desc: "Pre-purchase inspections, insurance compliance reports, ESA certifications, and arc-fault protection upgrades.",
      features: ["Pre-purchase inspections", "Insurance compliance reports", "ESA certifications", "Arc-fault upgrades"],
    },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc, features }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-amber hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-amber group-hover:bg-amber group-hover:text-navy-deep transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <ul className="mt-5 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-amber shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Process() {
  const steps = [
    { n: "01", t: "Get in touch", d: "Call or book online — we respond within the hour, every hour." },
    { n: "02", t: "Free estimate", d: "On-site assessment with a written, flat-rate quote." },
    { n: "03", t: "Quality work", d: "Licensed electricians, premium materials, code-compliant install." },
    { n: "04", t: "Warranty", d: "Walkthrough, ESA inspection where required, and 2-year guarantee." },
  ];
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">How it works</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">A simple, four-step process.</h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border p-7 bg-card">
              <div className="font-display text-5xl font-semibold text-amber/80">{s.n}</div>
              <h3 className="mt-3 font-semibold text-foreground text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingNote() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-semibold text-foreground">Honest, upfront pricing.</h2>
              <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
                We quote by the job, not by the hour. That means you know the exact cost before we pick up a screwdriver — and if we find something unexpected, we talk to you first.
              </p>
              <div className="mt-6 space-y-3">
                {[
                  "Free on-site estimates",
                  "No hidden fees or surprise charges",
                  "Detailed written quotes",
                  "Flexible payment options",
                ].map((t) => (
                  <div key={t} className="flex items-center gap-3 text-sm text-foreground">
                    <CheckCircle2 className="h-5 w-5 text-amber shrink-0" />
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="grid gap-4">
              <div className="rounded-xl bg-muted p-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">Service call & diagnosis</div>
                  <div className="text-sm text-muted-foreground">Waived with any repair</div>
                </div>
                <div className="font-display text-2xl font-semibold text-navy">$89</div>
              </div>
              <div className="rounded-xl bg-muted p-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">Panel upgrade (100A → 200A)</div>
                  <div className="text-sm text-muted-foreground">Includes permit & ESA</div>
                </div>
                <div className="font-display text-2xl font-semibold text-navy">From $2,400</div>
              </div>
              <div className="rounded-xl bg-muted p-6 flex items-center justify-between">
                <div>
                  <div className="font-semibold text-foreground">Level 2 EV charger install</div>
                  <div className="text-sm text-muted-foreground">Rebate paperwork included</div>
                </div>
                <div className="font-display text-2xl font-semibold text-navy">From $1,200</div>
              </div>
              <p className="text-xs text-muted-foreground mt-1">Prices are estimates. Every job is unique — call for a free, no-obligation quote.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-navy-deep p-10 md:p-16 text-cream">
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-amber/10" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-semibold">Ready to get started?</h2>
            <p className="mt-4 text-lg text-cream/80">
              Tell us what you need. We'll respond within the hour with a free, no-obligation estimate.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="btn-primary">
                Book a free estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+18005551234" className="btn-outline">
                <Phone className="h-4 w-4" /> (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
