import { Link } from "@tanstack/react-router";
import { Zap, Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-navy-deep text-cream mt-24">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-1">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-amber text-navy-deep">
              <Zap className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-semibold">Voltline.</span>
          </div>
          <p className="mt-4 text-sm text-cream/70 leading-relaxed">
            Licensed master electricians serving homes and businesses across Canada with safety, speed, and craft.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber">Services</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            <li><Link to="/services" className="hover:text-amber">Residential Wiring</Link></li>
            <li><Link to="/services" className="hover:text-amber">Panel Upgrades</Link></li>
            <li><Link to="/services" className="hover:text-amber">EV Charger Install</Link></li>
            <li><Link to="/services" className="hover:text-amber">Commercial Fitouts</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            <li><Link to="/about" className="hover:text-amber">About</Link></li>
            <li><Link to="/emergency" className="hover:text-amber">24/7 Emergency</Link></li>
            <li><Link to="/contact" className="hover:text-amber">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber">Contact</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-cream/80">
            <li className="flex items-start gap-2"><Phone className="h-4 w-4 mt-0.5 shrink-0" /> (800) 555-1234</li>
            <li className="flex items-start gap-2"><Mail className="h-4 w-4 mt-0.5 shrink-0" /> hello@voltline.ca</li>
            <li className="flex items-start gap-2"><MapPin className="h-4 w-4 mt-0.5 shrink-0" /> Toronto, ON · Canada</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="container-x py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-cream/60">
          <p>© {new Date().getFullYear()} Voltline Electric. Licensed & Insured · ESA #7012345</p>
          <p>Serving Ontario, Quebec, BC, Alberta & beyond.</p>
        </div>
      </div>
    </footer>
  );
}
