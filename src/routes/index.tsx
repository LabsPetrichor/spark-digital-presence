import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ShieldCheck, Clock, Award, Zap, ArrowRight, CheckCircle2,
  Home, Building2, BatteryCharging, Wrench, Star, Phone,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Voltline Electric — Licensed Electricians in Canada" },
      { name: "description", content: "Premium residential and commercial electrical services across Canada. Panel upgrades, EV chargers, rewiring, and 24/7 emergency response by licensed master electricians." },
      { property: "og:title", content: "Voltline Electric — Licensed Electricians in Canada" },
      { property: "og:description", content: "Premium electrical work, done safely. Residential, commercial, and 24/7 emergency service." },
      { property: "og:url", content: "/" },
    ],
    links: [
      { rel: "canonical", href: "/" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      <Hero />
      <TrustBar />
      <Services />
      <WhyUs />
      <Process />
      <Testimonials />
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

      <div className="container-x relative py-20 md:py-32 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-amber/30 bg-amber/10 px-3 py-1 text-xs font-medium text-amber">
            <span className="h-1.5 w-1.5 rounded-full bg-amber animate-pulse" />
            Available 24/7 · Licensed in Canada
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05]">
            Electrical work,<br />
            <span className="text-amber">done right</span> the first time.
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 leading-relaxed">
            From panel upgrades to full rewires and EV charger installs — Voltline's master electricians deliver code-compliant work with the polish your home deserves.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <Link to="/contact" className="btn-primary">
              Book a Free Estimate <ArrowRight className="h-4 w-4" />
            </Link>
            <a href="tel:+18005551234" className="btn-outline">
              <Phone className="h-4 w-4" /> (800) 555-1234
            </a>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-6 max-w-md">
            {[
              { n: "15+", l: "Years" },
              { n: "4,200+", l: "Projects" },
              { n: "4.9★", l: "Rated" },
            ].map((s) => (
              <div key={s.l}>
                <div className="font-display text-3xl font-semibold text-amber">{s.n}</div>
                <div className="text-xs uppercase tracking-wider text-cream/60 mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl bg-gradient-to-br from-navy to-navy-deep p-8 border border-cream/10 shadow-elegant">
            <div className="absolute -top-4 -right-4 grid h-16 w-16 place-items-center rounded-2xl bg-amber text-navy-deep shadow-glow">
              <Zap className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-2xl font-semibold">Request Service</h3>
            <p className="text-sm text-cream/70 mt-2">Tell us what you need — we'll respond within the hour.</p>
            <div className="mt-6 space-y-3">
              {["Free on-site estimate", "Upfront, flat-rate pricing", "Workmanship warranty included"].map((t) => (
                <div key={t} className="flex items-center gap-3 text-sm text-cream/85">
                  <CheckCircle2 className="h-5 w-5 text-amber shrink-0" />
                  {t}
                </div>
              ))}
            </div>
            <Link to="/contact" className="btn-primary w-full mt-7">Get my quote</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function TrustBar() {
  const items = [
    { icon: ShieldCheck, label: "ESA Licensed" },
    { icon: Award, label: "Master Electricians" },
    { icon: Clock, label: "24/7 Emergency" },
    { icon: CheckCircle2, label: "Fully Insured" },
  ];
  return (
    <section className="border-b border-border bg-muted/40">
      <div className="container-x py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
        {items.map(({ icon: Icon, label }) => (
          <div key={label} className="flex items-center gap-3 justify-center md:justify-start">
            <Icon className="h-5 w-5 text-navy" />
            <span className="text-sm font-medium text-foreground">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

function Services() {
  const services = [
    { icon: Home, title: "Residential", desc: "Rewiring, lighting design, smart home integration, and safety inspections." },
    { icon: Building2, title: "Commercial", desc: "Office fitouts, retail buildouts, code compliance, and maintenance contracts." },
    { icon: BatteryCharging, title: "EV Chargers", desc: "Level 2 home & workplace charger installs with rebate paperwork handled." },
    { icon: Zap, title: "Panel Upgrades", desc: "100A → 200A service upgrades, sub-panels, and surge protection." },
    { icon: Wrench, title: "Repairs", desc: "Troubleshooting, outlet & switch replacement, breaker issues, flickering lights." },
    { icon: ShieldCheck, title: "Safety Audits", desc: "Pre-purchase inspections, insurance reports, and ESA certifications." },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">What we do</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            Everything electrical, under one trusted roof.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            One licensed team for your house, your business, and everything in between.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-amber hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-amber group-hover:bg-amber group-hover:text-navy-deep transition-colors">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
              <Link to="/services" className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy hover:text-amber">
                Learn more <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">Why Voltline</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            Premium craft. Honest pricing. Zero surprises.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg">
            We treat every job — big or small — like it's going into our own home. That means tidy work, real warranties, and electricians who actually answer the phone.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-5">
          {[
            { t: "Flat-rate quotes", d: "Know the price before we start. No hourly surprises." },
            { t: "Same-day service", d: "Most jobs scheduled within 24 hours." },
            { t: "2-year warranty", d: "Backed by a written workmanship guarantee." },
            { t: "Clean & courteous", d: "Drop cloths, shoe covers, and tidy cable runs." },
          ].map((b) => (
            <div key={b.t} className="rounded-xl bg-card border border-border p-6">
              <CheckCircle2 className="h-6 w-6 text-amber" />
              <h3 className="mt-3 font-semibold text-foreground">{b.t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{b.d}</p>
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
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">How it works</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">A simple, four-step process.</h2>
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

function Testimonials() {
  const reviews = [
    { n: "Sarah M.", c: "Toronto, ON", q: "They upgraded our panel and installed an EV charger in one day. Spotless work — felt like a high-end finisher, not a contractor." },
    { n: "David L.", c: "Mississauga, ON", q: "Called at 9pm with a breaker that wouldn't reset. A real electrician was at our door in 40 minutes. Honest, fast, fair." },
    { n: "Priya R.", c: "Vaughan, ON", q: "Wired our entire renovation. Every outlet plumb, every run labelled. Easily the most professional trade we worked with." },
  ];
  return (
    <section className="bg-navy-deep text-cream py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">Reviews</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold">Trusted by 4,000+ Canadian homes.</h2>
        </div>
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <figure key={r.n} className="rounded-2xl bg-navy/60 border border-cream/10 p-7">
              <div className="flex gap-0.5 text-amber">
                {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
              <blockquote className="mt-4 text-cream/90 leading-relaxed">"{r.q}"</blockquote>
              <figcaption className="mt-5 text-sm">
                <div className="font-semibold">{r.n}</div>
                <div className="text-cream/60">{r.c}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-amber p-10 md:p-16 text-navy-deep">
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-navy-deep/10" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-semibold">Ready when you are.</h2>
            <p className="mt-4 text-lg text-navy-deep/80">
              Get a free, no-obligation estimate today. Licensed master electricians, on the road across Canada.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-3">
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 rounded-lg bg-navy-deep px-6 py-3.5 font-semibold text-cream min-h-11 hover:bg-navy transition-colors">
                Book a free estimate <ArrowRight className="h-4 w-4" />
              </Link>
              <a href="tel:+18005551234" className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-navy-deep px-6 py-3.5 font-semibold text-navy-deep min-h-11 hover:bg-navy-deep hover:text-cream transition-colors">
                <Phone className="h-4 w-4" /> (800) 555-1234
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
