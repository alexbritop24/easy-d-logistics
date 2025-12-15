import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[var(--color-primary)] shadow-lg">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">

        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide text-white">
          Easy D{" "}
          <span className="text-[var(--color-accent)]">Logistics</span>
        </h1>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8 text-white font-medium items-center">

          <a href="/" className="hover:text-[var(--color-accent)] transition">
            Home
          </a>

          <a href="/about" className="hover:text-[var(--color-accent)] transition">
            About
          </a>

          {/* Desktop Services Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-[var(--color-accent)] transition">
              Services ▾
            </button>

            <div className="
              absolute
              top-full
              left-0
              mt-2
              w-44
              bg-[var(--color-primary-softer)]
              border
              border-white/10
              rounded-lg
              opacity-0
              invisible
              group-hover:opacity-100
              group-hover:visible
              transition
            ">
              <a href="/services" className="block px-4 py-2 hover:bg-white/5">
                All Services
              </a>
              <a href="/services/dry-van" className="block px-4 py-2 hover:bg-white/5">
                Dry Van
              </a>
              <a href="/services/flatbed" className="block px-4 py-2 hover:bg-white/5">
                Flatbed
              </a>
              <a href="/services/box-truck" className="block px-4 py-2 hover:bg-white/5">
                Box Truck
              </a>
            </div>
          </div>

          <a href="/pricing" className="hover:text-[var(--color-accent)] transition">
            Pricing
          </a>

          <a href="/contact" className="hover:text-[var(--color-accent)] transition">
            Contact
          </a>

          <a
            href="/get-started"
            className="
              ml-4
              bg-[var(--color-accent)]
              text-[var(--color-primary)]
              font-semibold
              px-5
              py-2
              rounded-lg
              transition
              hover:opacity-90
            "
          >
            Get Started
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[var(--color-primary)] border-t border-white/10 px-6 py-4 space-y-4 text-white">

          <a href="/" onClick={() => setMenuOpen(false)} className="block">
            Home
          </a>

          <a href="/about" onClick={() => setMenuOpen(false)} className="block">
            About
          </a>

          {/* Mobile Services Accordion */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex justify-between w-full"
            >
              Services
              <span>{servicesOpen ? "−" : "+"}</span>
            </button>

            {servicesOpen && (
              <div className="mt-2 ml-4 space-y-2 text-white/80">
                <a href="/services" onClick={() => setMenuOpen(false)} className="block">
                  All Services
                </a>
                <a href="/services/dry-van" onClick={() => setMenuOpen(false)} className="block">
                  Dry Van
                </a>
                <a href="/services/flatbed" onClick={() => setMenuOpen(false)} className="block">
                  Flatbed
                </a>
                <a href="/services/box-truck" onClick={() => setMenuOpen(false)} className="block">
                  Box Truck
                </a>
              </div>
            )}
          </div>

          <a href="/pricing" onClick={() => setMenuOpen(false)} className="block">
            Pricing
          </a>

          <a href="/contact" onClick={() => setMenuOpen(false)} className="block">
            Contact
          </a>

          <a
            href="/get-started"
            onClick={() => setMenuOpen(false)}
            className="
              block
              text-center
              bg-[var(--color-accent)]
              text-[var(--color-primary)]
              font-semibold
              py-2
              rounded-lg
              mt-2
            "
          >
            Get Started
          </a>
        </div>
      )}
    </nav>
  );
}