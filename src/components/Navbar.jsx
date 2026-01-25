import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  // Active route (no router required)
  const pathname = useMemo(() => {
    if (typeof window === "undefined") return "/";
    return window.location.pathname || "/";
  }, []);

  const isActive = (path) => {
    if (path === "/") return pathname === "/";
    return pathname === path || pathname.startsWith(path + "/");
  };

  const linkClass = (path) => {
    const active = isActive(path);
    return [
      "transition",
      active ? "text-[var(--color-accent)]" : "text-white",
      "hover:text-[var(--color-accent)]",
    ].join(" ");
  };

  const mobileLinkClass = (path) => {
    const active = isActive(path);
    return [
      "block",
      "transition",
      active ? "text-[var(--color-accent)]" : "text-white",
      "hover:text-[var(--color-accent)]",
    ].join(" ");
  };

  const navEnter = {
    hidden: { y: -14, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const servicesIsActive = isActive("/services");

  return (
    <motion.nav
      variants={navEnter}
      initial="hidden"
      animate="show"
      className="w-full fixed top-0 left-0 z-50 bg-[var(--color-primary)] shadow-lg"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <a href="/" className="text-2xl font-bold tracking-wide text-white">
          Easy D <span className="text-[var(--color-accent)]">Logistics</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-white font-medium">
          <a href="/" className={linkClass("/")}>
            Home
          </a>

          <a href="/about" className={linkClass("/about")}>
            About
          </a>

          {/* Services Dropdown */}
          <div className="relative group">
            <button
              className={[
                "flex items-center gap-1 transition",
                servicesIsActive ? "text-[var(--color-accent)]" : "text-white",
                "hover:text-[var(--color-accent)]",
              ].join(" ")}
            >
              Services <span className="text-xs opacity-70">▼</span>
            </button>

            <div
              className="
                absolute top-full left-0 mt-3 w-56
                rounded-xl bg-[var(--color-primary-softer)]
                border border-white/10 shadow-xl
                opacity-0 invisible translate-y-2
                transition-all duration-200
                group-hover:opacity-100
                group-hover:visible
                group-hover:translate-y-0
              "
            >
              <a
                href="/services"
                className={[
                  "block px-4 py-3 text-sm transition hover:bg-white/5",
                  servicesIsActive ? "text-[var(--color-accent)]" : "text-white",
                ].join(" ")}
              >
                All Services
              </a>
            </div>
          </div>

          <a href="/pricing" className={linkClass("/pricing")}>
            Pricing
          </a>

          <a href="/contact" className={linkClass("/contact")}>
            Contact
          </a>

          {/* Phone */}
          <a
            href="tel:13852928031"
            className="flex items-center gap-2 text-white/80 hover:text-[var(--color-accent)] transition"
          >
            📞 385-292-8031
          </a>

          {/* CTA */}
          <motion.a
            href="/contact"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="
              ml-2 px-6 py-2 rounded-lg font-semibold
              bg-[var(--color-accent)]
              text-[var(--color-primary)]
              transition hover:opacity-90
            "
          >
            Talk to a Dispatcher
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden text-white text-3xl"
          onClick={() => {
            setMenuOpen(!menuOpen);
            if (menuOpen) setServicesOpen(false);
          }}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[var(--color-primary)] border-t border-white/10 px-6 py-6 space-y-6 text-white text-lg"
          >
            <a href="/" className={mobileLinkClass("/")} onClick={() => setMenuOpen(false)}>
              Home
            </a>

            <a
              href="/about"
              className={mobileLinkClass("/about")}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            {/* Mobile Services Accordion */}
            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={[
                  "flex justify-between w-full py-2 font-semibold transition",
                  servicesIsActive ? "text-[var(--color-accent)]" : "text-white",
                ].join(" ")}
              >
                Services <span>{servicesOpen ? "−" : "+"}</span>
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.22 }}
                    className="overflow-hidden mt-2 ml-4 space-y-3 text-white/80 text-base"
                  >
                    <a
                      href="/services"
                      className={[
                        "block transition hover:text-[var(--color-accent)]",
                        servicesIsActive ? "text-[var(--color-accent)]" : "text-white/80",
                      ].join(" ")}
                      onClick={() => setMenuOpen(false)}
                    >
                      All Services
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <a
              href="/pricing"
              className={mobileLinkClass("/pricing")}
              onClick={() => setMenuOpen(false)}
            >
              Pricing
            </a>

            <a
              href="/contact"
              className={mobileLinkClass("/contact")}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a href="tel:13852928031" className="block font-semibold">
              📞 385-292-8031
            </a>

            <motion.a
              href="/contact"
              whileTap={{ scale: 0.98 }}
              className="block text-center py-3 rounded-lg font-semibold bg-[var(--color-accent)] text-[var(--color-primary)]"
              onClick={() => setMenuOpen(false)}
            >
              Talk to a Dispatcher
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}