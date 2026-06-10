import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import {
  Phone, Mail, MapPin, Clock, CheckCircle2, ArrowRight, Send,
} from "lucide-react";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Voltline Electric" },
      { name: "description", content: "Book a free estimate or call our 24/7 emergency line. Licensed master electricians serving Toronto and across Canada." },
      { property: "og:title", content: "Contact — Voltline Electric" },
      { property: "og:description", content: "Book a free estimate or call our 24/7 emergency line. Licensed master electricians serving Toronto and across Canada." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [
      { rel: "canonical", href: "/contact" },
    ],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Voltline Electric",
        "description": "Licensed master electricians serving homes and businesses across Canada. Residential, commercial, and 24/7 emergency electrical services.",
        "url": "/",
        "telephone": "+1-800-555-1234",
        "email": "hello@voltline.ca",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Toronto",
          "addressRegion": "ON",
          "addressCountry": "CA",
        },
        "priceRange": "$$",
        "openingHours": ["Mo-Fr 07:00-21:00", "Sa-Su 08:00-18:00"],
        "areaServed": { "@type": "Country", "name": "Canada" },
      }),
    }],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <SiteLayout>
      <Hero />
      <ContactSection />
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
          <Clock className="h-3.5 w-3.5" />
          We reply within the hour
        </span>
        <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.05]">
          Let's talk about<br />
          <span className="text-amber">your project.</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-cream/75 leading-relaxed">
          Whether you need a quick repair, a panel upgrade, or a full commercial fitout, our team is ready to help. Book a free estimate or call us directly.
        </p>
      </div>
    </section>
  );
}

function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Name is required";
    if (!form.email.trim()) {
      next.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      next.email = "Please enter a valid email";
    }
    if (!form.phone.trim()) next.phone = "Phone is required";
    if (!form.service) next.service = "Please select a service";
    if (!form.message.trim()) next.message = "Please describe your project";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
    }
  };

  const update = (key: string, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[key];
        return next;
      });
    }
  };

  return (
    <section className="py-20 md:py-28">
      <div className="container-x">
        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-3">
            <h2 className="font-display text-3xl font-semibold text-foreground">Send us a message</h2>
            <p className="mt-2 text-muted-foreground">Fill out the form below and we'll get back to you within one hour.</p>

            {submitted ? (
              <div className="mt-8 rounded-2xl border border-amber/30 bg-amber/10 p-8 text-center">
                <CheckCircle2 className="mx-auto h-12 w-12 text-amber" />
                <h3 className="mt-4 font-display text-2xl font-semibold text-foreground">Message sent!</h3>
                <p className="mt-2 text-muted-foreground">Thanks for reaching out. A member of our team will contact you within the hour.</p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", service: "", message: "" }); }}
                  className="mt-6 btn-primary"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-8 space-y-5" noValidate>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">Full name</label>
                    <input
                      id="name"
                      type="text"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-amber transition-shadow"
                      placeholder="Jane Doe"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? "name-error" : undefined}
                    />
                    {errors.name && <p id="name-error" className="mt-1.5 text-xs text-red-600">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">Email address</label>
                    <input
                      id="email"
                      type="email"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-amber transition-shadow"
                      placeholder="jane@example.com"
                      aria-invalid={!!errors.email}
                      aria-describedby={errors.email ? "email-error" : undefined}
                    />
                    {errors.email && <p id="email-error" className="mt-1.5 text-xs text-red-600">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-1.5">Phone number</label>
                    <input
                      id="phone"
                      type="tel"
                      value={form.phone}
                      onChange={(e) => update("phone", e.target.value)}
                      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-amber transition-shadow"
                      placeholder="(416) 555-0000"
                      aria-invalid={!!errors.phone}
                      aria-describedby={errors.phone ? "phone-error" : undefined}
                    />
                    {errors.phone && <p id="phone-error" className="mt-1.5 text-xs text-red-600">{errors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-1.5">Service type</label>
                    <select
                      id="service"
                      value={form.service}
                      onChange={(e) => update("service", e.target.value)}
                      className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-amber transition-shadow appearance-none"
                      aria-invalid={!!errors.service}
                      aria-describedby={errors.service ? "service-error" : undefined}
                    >
                      <option value="">Select a service</option>
                      <option value="residential">Residential wiring</option>
                      <option value="commercial">Commercial fitout</option>
                      <option value="ev">EV charger install</option>
                      <option value="panel">Panel upgrade</option>
                      <option value="repair">Repair / troubleshooting</option>
                      <option value="audit">Safety audit</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.service && <p id="service-error" className="mt-1.5 text-xs text-red-600">{errors.service}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-1.5">Project details</label>
                  <textarea
                    id="message"
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                    rows={5}
                    className="w-full rounded-xl border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-amber transition-shadow resize-y"
                    placeholder="Tell us what you need — e.g., 'Upgrading from 100A to 200A in a 1970s bungalow.'"
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? "message-error" : undefined}
                  />
                  {errors.message && <p id="message-error" className="mt-1.5 text-xs text-red-600">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full sm:w-auto">
                  Send message <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          <aside className="lg:col-span-2 space-y-6">
            <div className="rounded-2xl border border-border bg-card p-7">
              <h3 className="font-display text-xl font-semibold text-foreground">Contact info</h3>
              <ul className="mt-5 space-y-4">
                <li className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-amber mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <a href="tel:+18005551234" className="text-sm text-muted-foreground hover:text-amber transition-colors">(800) 555-1234</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="h-5 w-5 text-amber mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <a href="mailto:hello@voltline.ca" className="text-sm text-muted-foreground hover:text-amber transition-colors">hello@voltline.ca</a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-amber mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Head office</div>
                    <div className="text-sm text-muted-foreground">Toronto, ON · Canada</div>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-amber mt-0.5 shrink-0" />
                  <div>
                    <div className="font-medium text-foreground">Hours</div>
                    <div className="text-sm text-muted-foreground">Mon–Fri: 7am – 9pm</div>
                    <div className="text-sm text-muted-foreground">Sat–Sun: 8am – 6pm</div>
                    <div className="text-sm font-semibold text-amber mt-0.5">24/7 emergency line always open</div>
                  </div>
                </li>
              </ul>
            </div>

            <div className="rounded-2xl bg-navy-deep p-7 text-cream">
              <h3 className="font-display text-xl font-semibold">Need help right now?</h3>
              <p className="mt-2 text-sm text-cream/70 leading-relaxed">
                If you're dealing with sparks, burning smells, or a complete power outage, call our emergency line immediately.
              </p>
              <a
                href="tel:+18005551234"
                className="mt-5 inline-flex items-center justify-center gap-2 rounded-lg bg-amber px-5 py-3 font-semibold text-navy-deep min-h-11 hover:bg-amber/90 transition-colors w-full"
              >
                <Phone className="h-4 w-4" /> Call emergency line
              </a>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
