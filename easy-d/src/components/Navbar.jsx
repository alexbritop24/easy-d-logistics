import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/services", label: "Services" },
    { to: "/pricing", label: "Pricing" },
    { to: "/faq", label: "FAQ" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full bg-primary/90 backdrop-blur border-b border-slate-700 z-50">
      <nav className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo / Brand */}
        <Link to="/" className="text-xl font-bold tracking-wide text-accent">
          Easy D Logistics
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                `text-sm ${
                  isActive ? "text-accent" : "text-white"
                } hover:text-accent transition`
              }
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/get-started"
            className="px-4 py-2 rounded-full bg-accent text-primary-softer text-sm font-semibold hover:bg-accent-soft transition"
          >
            Start Today
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white border border-slate-600 rounded-md px-2 py-1"
          onClick={() => setOpen(!open)}
        >
          Menu
        </button>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-primary border-t border-slate-700">
          <div className="flex flex-col px-4 py-3 space-y-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className="text-white text-sm hover:text-accent"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/get-started"
              onClick={() => setOpen(false)}
              className="px-4 py-2 rounded-full bg-accent text-primary-softer text-sm font-semibold text-center hover:bg-accent-soft transition"
            >
              Start Today
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}