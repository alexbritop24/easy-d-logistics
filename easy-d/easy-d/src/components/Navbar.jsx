import { useState } from "react";

export default function Navbar() {
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 shadow-lg"
      style={{ backgroundColor: "var(--color-primary)" }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo / Brand */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Easy D{" "}
          <span style={{ color: "var(--color-secondary)" }}>
            Logistics
          </span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-white font-medium items-center">

          <a href="/" className="hover:text-[var(--color-secondary)] transition">
            Home
          </a>

          <a href="/about" className="hover:text-[var(--color-secondary)] transition">
            About
          </a>

          {/* Services Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button
              className="hover:text-[var(--color-secondary)] transition"
            >
              Services
            </button>

            {servicesOpen && (
              <div
                className="absolute top-full left-0 mt-2 w-56 rounded shadow-lg"
                style={{ backgroundColor: "var(--color-bg)" }}
              >
                <a
                  href="/services/dispatch"
                  className="block px-4 py-3 text-sm text-black hover:bg-[var(--color-muted)] transition"
                >
                  Dispatch Services
                </a>
                <a
                  href="/services/compliance"
                  className="block px-4 py-3 text-sm text-black hover:bg-[var(--color-muted)] transition"
                >
                  DOT & Compliance
                </a>
              </div>
            )}
          </div>

          <a href="/pricing" className="hover:text-[var(--color-secondary)] transition">
            Pricing
          </a>

          <a href="/contact" className="hover:text-[var(--color-secondary)] transition">
            Contact
          </a>
        </div>

        {/* CTA */}
        <a
          href="/get-started"
          className="hidden md:block font-semibold px-6 py-2 rounded transition"
          style={{
            backgroundColor: "var(--color-secondary)",
            color: "var(--color-primary)",
          }}
        >
          Get Started
        </a>

      </div>
    </nav>
  );
}