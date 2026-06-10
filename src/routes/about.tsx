import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  ShieldCheck, Clock, Award, Zap, ArrowRight, CheckCircle2,
  Heart, Users, Lightbulb, Target, Phone,
} from "lucide-react";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — Voltline Electric" },
      { name: "description", content: "Meet Voltline Electric. 15+ years of licensed electrical work across Canada. Master electricians, flat-rate pricing, and a 2-year workmanship warranty." },
      { property: "og:title", content: "About Us — Voltline Electric" },
      { property: "og:description", content: "15+ years of licensed electrical work across Canada. Master electricians, flat-rate pricing, and a 2-year workmanship warranty." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/about" },
    ],
    links: [
      { rel: "canonical", href: "/about" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <SiteLayout>
      <Hero />
      <Story />
      <Values />
      <StatsBar />
      <TeamCTA />
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
          <Award className="h-3.5 w-3.5" />
          ESA Licensed · Master Electricians
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
          Built on craft.<br />
          <span className="text-amber">Powered by trust.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/75 leading-relaxed">
          Voltline started with one van, one tool bag, and a simple belief: that electrical work should feel safe, transparent, and even enjoyable. Today we're a team of licensed master electricians serving thousands of Canadian homes and businesses — with the same care we gave on day one.
        </p>
      </div>
    </section>
  );
}

function Story() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">Our story</span>
          <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
            From a single van to a nationwide team.
          </h2>
          <p className="mt-5 text-muted-foreground text-lg leading-relaxed">
            In 2009, founder James Voltline started taking calls after hours because he couldn't stand the thought of families sitting in the dark. Word spread. Neighbors told neighbors. Soon, what began as a side hustle became a full-service electrical company built on one promise: treat every home like it's your own.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Today, Voltline Electric employs over 30 licensed electricians across Ontario, Quebec, BC, and Alberta. We've completed more than 4,200 projects — from single outlet swaps to full commercial buildouts — and we've never stopped answering the phone at 2 a.m.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-3">
            <Link to="/services" className="btn-primary">
              See our services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/contact" className="btn-outline !text-foreground !border-foreground/20 hover:!bg-foreground/5">
              Get in touch
            </Link>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl bg-muted border border-border p-8 md:p-10">
            <div className="grid gap-6">
              {[
                { year: "2009", event: "First emergency call answered at midnight" },
                { year: "2013", event: "Hired first apprentice; expanded to commercial" },
                { year: "2017", event: "Crossed 1,000 projects; opened Calgary office" },
                { year: "2021", event: "Launched EV charger division with rebate support" },
                { year: "2024", event: "4,200+ projects and a 4.9-star average rating" },
              ].map((m) => (
                <div key={m.year} className="flex gap-4">
                  <div className="font-display text-xl font-semibold text-amber w-14 shrink-0">{m.year}</div>
                  <div className="text-sm text-muted-foreground leading-relaxed">{m.event}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Values() {
  const values = [
    { icon: ShieldCheck, title: "Safety first", desc: "Every install is ESA-compliant. We don't cut corners — we sign off on them." },
    { icon: Heart, title: "Genuine care", desc: "Drop cloths, shoe covers, and a walkthrough before we leave. Your home deserves respect." },
    { icon: Target, title: "Transparent pricing", desc: "Flat-rate quotes before we start. No hourly games, no surprise fees." },
    { icon: Lightbulb, title: "Modern craft", desc: "We stay current on EV chargers, smart panels, and home automation so you don't have to." },
  ];
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl text-center mx-auto">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">What drives us</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            Four values. Zero compromise.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-border bg-card p-7 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-xl bg-navy-deep text-amber">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-foreground">{title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatsBar() {
  const stats = [
    { n: "15+", l: "Years in business" },
    { n: "30+", l: "Licensed electricians" },
    { n: "4,200+", l: "Projects completed" },
    { n: "4.9★", l: "Average rating" },
    { n: "2yr", l: "Workmanship warranty" },
    { n: "24/7", l: "Emergency response" },
  ];
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl font-semibold text-navy">{s.n}</div>
              <div className="text-sm text-muted-foreground mt-1">{s.l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamCTA() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-3xl bg-amber p-10 md:p-16 text-navy-deep">
          <div className="absolute -bottom-20 -right-20 h-72 w-72 rounded-full bg-navy-deep/10" />
          <div className="relative max-w-2xl">
            <h2 className="font-display text-3xl md:text-5xl font-semibold">Join the thousands who trust Voltline.</h2>
            <p className="mt-4 text-lg text-navy-deep/80">
              Whether it's a new build, a renovation, or a midnight emergency, we're ready to show you what premium electrical service feels like.
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
