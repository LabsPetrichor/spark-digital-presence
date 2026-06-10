import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Phone, ArrowRight, Clock, AlertTriangle, ShieldCheck, MapPin,
  Zap, CheckCircle2, Activity, Flame, Power,
} from "lucide-react";

export const Route = createFileRoute("/emergency")({
  head: () => ({
    meta: [
      { title: "24/7 Emergency Electrician — Voltline Electric" },
      { name: "description", content: "Emergency electrical service across Canada. Real electricians on the road in under 60 minutes. Sparks, power outages, burning smells — call now." },
      { property: "og:title", content: "24/7 Emergency Electrician — Voltline Electric" },
      { property: "og:description", content: "Emergency electrical service across Canada. Real electricians on the road in under 60 minutes. Call now." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/emergency" },
    ],
    links: [
      { rel: "canonical", href: "/emergency" },
    ],
  }),
  component: EmergencyPage,
});

function EmergencyPage() {
  return (
    <SiteLayout>
      <Hero />
      <Emergencies />
      <ResponsePromise />
      <SafetySteps />
      <Coverage />
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
      <div className="absolute -bottom-20 -left-20 h-[300px] w-[300px] rounded-full bg-red-500/10 blur-3xl" />

      <div className="container-x relative py-20 md:py-28 grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7">
          <span className="inline-flex items-center gap-2 rounded-full border border-red-400/30 bg-red-500/10 px-3 py-1 text-xs font-medium text-red-400">
            <AlertTriangle className="h-3.5 w-3.5" />
            Live emergency dispatch
          </span>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
            Electrical emergency?<br />
            <span className="text-amber">We're on our way.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-cream/75 leading-relaxed">
            Sparks, burning smells, or a total power outage don't wait for business hours. Our licensed master electricians are on call 24/7, with real trucks on the road across Canada.
          </p>
          <div className="mt-9 flex flex-col sm:flex-row gap-3">
            <a href="tel:+18005551234" className="btn-primary !bg-red-500 !text-white hover:!bg-red-600 !shadow-none">
              <Phone className="h-4 w-4" /> Call (800) 555-1234
            </a>
            <Link to="/contact" className="btn-outline">
              Request callback <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="mt-10 flex items-center gap-6 text-sm text-cream/70">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-amber" />
              Under 60 min response
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-amber" />
              ESA licensed
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 relative">
          <div className="relative rounded-2xl bg-gradient-to-br from-red-900/30 to-navy/60 p-8 border border-red-400/20">
            <div className="absolute -top-4 -right-4 grid h-16 w-16 place-items-center rounded-2xl bg-red-500 text-white shadow-lg">
              <AlertTriangle className="h-7 w-7" strokeWidth={2.5} />
            </div>
            <h3 className="font-display text-2xl font-semibold">What to do right now</h3>
            <ul className="mt-6 space-y-4">
              {[
                "If you see sparks or smell burning, turn off the main breaker immediately.",
                "Evacuate the area if there's smoke or fire risk.",
                "Call 911 if there's an active fire.",
                "Then call us — we'll be there within the hour.",
              ].map((t) => (
                <li key={t} className="flex items-start gap-3 text-sm text-cream/85">
                  <CheckCircle2 className="h-5 w-5 text-amber shrink-0 mt-0.5" />
                  {t}
                </li>
              ))}
            </ul>
            <a href="tel:+18005551234" className="btn-primary w-full mt-7 !bg-red-500 !text-white hover:!bg-red-600 !shadow-none">
              <Phone className="h-4 w-4" /> Call emergency line
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Emergencies() {
  const items = [
    { icon: Power, title: "Complete power outage", desc: "No power to part or all of your home or business. We'll diagnose and restore safely." },
    { icon: Flame, title: "Burning smell or smoke", desc: "Overheating wires, failing breakers, or arcing connections. Shut off power and call immediately." },
    { icon: Zap, title: "Sparks or arcing", desc: "Visible sparks from outlets, panels, or switches indicate a serious fire hazard." },
    { icon: AlertTriangle, title: "Repeated breaker trips", desc: "A breaker that won't stay on often signals an overload or short circuit that needs expert attention." },
    { icon: Activity, title: "Flickering or dimming lights", desc: "Loose connections, failing panels, or overloaded circuits that can damage appliances." },
    { icon: ShieldCheck, title: "Exposed or damaged wiring", desc: "Rodent damage, water intrusion, or physical damage to wiring is a shock and fire risk." },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-wider text-red-500">Common emergencies</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            If it feels unsafe, it probably is.
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Here are the emergencies we respond to most often. When in doubt, call us — we'd rather check and find nothing than miss something serious.
          </p>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-red-300 hover:shadow-elegant">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-red-50 text-red-600 group-hover:bg-red-500 group-hover:text-white transition-colors">
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

function ResponsePromise() {
  return (
    <section className="bg-muted/50 py-20 md:py-28">
      <div className="container-x">
        <div className="rounded-3xl bg-navy-deep p-10 md:p-16 text-cream overflow-hidden relative">
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-amber/10" />
          <div className="grid lg:grid-cols-2 gap-12 items-center relative">
            <div>
              <h2 className="font-display text-3xl md:text-5xl font-semibold">Our emergency promise.</h2>
              <p className="mt-4 text-lg text-cream/80 leading-relaxed">
                When you call our emergency line, you get a real electrician — not a call centre. We dispatch the nearest licensed technician immediately and keep you updated on their ETA.
              </p>
              <div className="mt-8 grid sm:grid-cols-2 gap-5">
                {[
                  { t: "Under 60 min", d: "Average response time in metro areas" },
                  { t: "Licensed pro", d: "ESA-certified master electrician, every time" },
                  { t: "Upfront pricing", d: "No hourly billing surprises in a crisis" },
                  { t: "Safe & clean", d: "We leave your space safer than we found it" },
                ].map((b) => (
                  <div key={b.t} className="rounded-xl bg-navy/60 border border-cream/10 p-5">
                    <div className="font-display text-2xl font-semibold text-amber">{b.t}</div>
                    <div className="mt-1 text-sm text-cream/70">{b.d}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <a href="tel:+18005551234" className="flex items-center justify-center gap-3 rounded-2xl bg-red-500 px-8 py-6 font-display text-2xl font-semibold text-white hover:bg-red-600 transition-colors shadow-lg">
                <Phone className="h-7 w-7" />
                (800) 555-1234
              </a>
              <p className="text-center text-sm text-cream/60">
                Available 24 hours a day, 7 days a week, including holidays.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SafetySteps() {
  const steps = [
    { n: "1", t: "Stay calm", d: "Most electrical emergencies are manageable if you act quickly and carefully." },
    { n: "2", t: "Shut off power", d: "Turn off the main breaker at your electrical panel if it's safe to do so." },
    { n: "3", t: "Evacuate if needed", d: "If you see smoke or flames, leave immediately and call 911." },
    { n: "4", t: "Call Voltline", d: "Once immediate danger is handled, call us. We'll be there within the hour." },
  ];

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-amber">Safety first</span>
          <h2 className="mt-3 font-display text-3xl md:text-5xl font-semibold text-foreground">
            What to do while you wait.
          </h2>
        </div>
        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div key={s.n} className="relative rounded-2xl border border-border p-7 bg-card text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-navy-deep text-amber font-display text-xl font-semibold">
                {s.n}
              </div>
              <h3 className="mt-5 font-semibold text-foreground text-lg">{s.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Coverage() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-amber">Coverage</span>
            <h2 className="mt-3 font-display text-3xl md:text-4xl font-semibold text-foreground">
              Serving homes & businesses across Canada.
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              With hubs in Toronto, Calgary, Vancouver, and Montreal, our emergency fleet covers major metro areas and surrounding regions. If you're outside our immediate range, we'll coordinate a trusted partner to get you safe.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              {["Toronto, ON", "Mississauga, ON", "Vaughan, ON", "Calgary, AB", "Vancouver, BC", "Montreal, QC"].map((city) => (
                <span key={city} className="inline-flex items-center gap-1.5 rounded-full border border-border bg-card px-3 py-1.5 text-sm text-foreground">
                  <MapPin className="h-3.5 w-3.5 text-amber" />
                  {city}
                </span>
              ))}
            </div>
          </div>
          <div className="rounded-2xl bg-muted border border-border p-8">
            <h3 className="font-display text-xl font-semibold text-foreground">Not sure if we cover your area?</h3>
            <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
              Give us a call. Even if you're outside our primary service zones, we have a network of licensed partner electricians we can dispatch on our behalf.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="tel:+18005551234" className="btn-primary">
                <Phone className="h-4 w-4" /> Call now
              </a>
              <Link to="/contact" className="btn-outline !text-foreground !border-foreground/20 hover:!bg-foreground/5">
                Send a message
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
