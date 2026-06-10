import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Zap, Phone } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/emergency", label: "Emergency" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/85 backdrop-blur-lg">
      <div className="container-x flex h-16 items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2.5 group" aria-label="Voltline Electric home">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-navy-deep text-amber transition-transform group-hover:scale-105">
            <Zap className="h-5 w-5" strokeWidth={2.5} />
          </span>
          <span className="font-display text-xl font-semibold tracking-tight text-foreground">
            Voltline<span className="text-amber">.</span>
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: l.to === "/" }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+18005551234"
            className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-amber transition-colors"
          >
            <Phone className="h-4 w-4" />
            (800) 555-1234
          </a>
          <Link to="/contact" className="btn-primary text-sm">Get a Quote</Link>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden grid h-11 w-11 place-items-center rounded-lg text-foreground"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <nav className="container-x flex flex-col py-4 gap-1" aria-label="Mobile">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-3 text-base font-medium text-foreground hover:bg-muted"
              >
                {l.label}
              </Link>
            ))}
            <a href="tel:+18005551234" className="mt-2 flex items-center gap-2 rounded-md px-3 py-3 text-base font-semibold text-foreground">
              <Phone className="h-4 w-4" /> (800) 555-1234
            </a>
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary mt-2">
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
