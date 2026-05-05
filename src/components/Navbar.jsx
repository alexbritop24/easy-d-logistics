import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [complianceOpen, setComplianceOpen] = useState(false);

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
      "transition duration-200",
      active ? "text-[var(--color-accent)]" : "text-white/88",
      "hover:text-[var(--color-accent)]",
    ].join(" ");
  };

  const mobileLinkClass = (path) => {
    const active = isActive(path);
    return [
      "block transition duration-200 text-center",
      active ? "text-[var(--color-accent)]" : "text-white/90",
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
  const complianceIsActive =
    isActive("/dot-compliance") ||
    isActive("/mc-number-setup") ||
    isActive("/dispatch-services-utah");

  return (
    <motion.nav
      variants={navEnter}
      initial="hidden"
      animate="show"
      className="fixed top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6 pt-4">
        <div
          className="
            flex items-center justify-between
            rounded-2xl border border-white/10 bg-black/45
            backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.28)]
            px-5 md:px-6 py-4
          "
        >
          <a href="/" className="flex items-center shrink-0">
            <img
              src="/easy-d-logo-navbar.png"
              alt="Easy D Logistics"
              className="h-10 md:h-11 w-auto object-contain"
            />
          </a>

          <div className="hidden md:flex items-center gap-8 text-white font-medium">
            <a href="/" className={linkClass("/")}>Home</a>
            <a href="/about" className={linkClass("/about")}>About</a>

            {/* Services dropdown */}
            <div className="relative group">
              <button
                className={[
                  "flex items-center gap-1 transition duration-200",
                  servicesIsActive ? "text-[var(--color-accent)]" : "text-white/88",
                  "hover:text-[var(--color-accent)]",
                ].join(" ")}
              >
                Services <span className="text-xs opacity-70">▼</span>
              </button>

              <div
                className="
                  absolute top-full left-0 mt-3 w-56 rounded-2xl
                  bg-[var(--color-primary-softer)]/95 backdrop-blur-xl
                  border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.35)]
                  opacity-0 invisible translate-y-2 transition-all duration-200
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                "
              >
                <a
                  href="/services"
                  className={[
                    "block px-4 py-3 text-sm rounded-2xl transition hover:bg-white/5",
                    isActive("/services") ? "text-[var(--color-accent)]" : "text-white/90",
                  ].join(" ")}
                >
                  All Services
                </a>
              </div>
            </div>

            {/* DOT Compliance dropdown */}
            <div className="relative group">
              <button
                className={[
                  "flex items-center gap-1 transition duration-200",
                  complianceIsActive ? "text-[var(--color-accent)]" : "text-white/88",
                  "hover:text-[var(--color-accent)]",
                ].join(" ")}
              >
                DOT Compliance <span className="text-xs opacity-70">▼</span>
              </button>

              <div
                className="
                  absolute top-full left-0 mt-3 w-64 rounded-2xl
                  bg-[var(--color-primary-softer)]/95 backdrop-blur-xl
                  border border-white/10 shadow-[0_12px_35px_rgba(0,0,0,0.35)]
                  opacity-0 invisible translate-y-2 transition-all duration-200
                  group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                  overflow-hidden
                "
              >
                <a
                  href="/dot-compliance"
                  className={[
                    "block px-4 py-3 text-sm transition hover:bg-white/5",
                    isActive("/dot-compliance") ? "text-[var(--color-accent)]" : "text-white/90",
                  ].join(" ")}
                >
                  DOT & MC Compliance
                </a>

                <a
                  href="/mc-number-setup"
                  className={[
                    "block px-4 py-3 text-sm transition hover:bg-white/5",
                    isActive("/mc-number-setup") ? "text-[var(--color-accent)]" : "text-white/90",
                  ].join(" ")}
                >
                  MC Number Setup
                </a>

                <a
                  href="/dispatch-services-utah"
                  className={[
                    "block px-4 py-3 text-sm transition hover:bg-white/5",
                    isActive("/dispatch-services-utah") ? "text-[var(--color-accent)]" : "text-white/90",
                  ].join(" ")}
                >
                  Dispatch Services Utah
                </a>
              </div>
            </div>

            <a href="/pricing" className={linkClass("/pricing")}>Pricing</a>
            <a href="/contact" className={linkClass("/contact")}>Contact</a>

            <a
              href="tel:13852928031"
              className="flex items-center gap-2 text-white/70 hover:text-[var(--color-accent)] transition duration-200"
            >
              📞 385-292-8031
            </a>

            <motion.a
              href="/contact"
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.15 }}
              className="
                ml-1 px-6 py-2.5 rounded-xl font-semibold
                bg-[var(--color-accent)] text-[var(--color-primary)]
                shadow-[0_10px_24px_rgba(143,199,238,0.14)]
                transition hover:opacity-90
              "
            >
              Contact Us
            </motion.a>
          </div>

          <button
            className="md:hidden text-white text-3xl leading-none"
            onClick={() => {
              setMenuOpen(!menuOpen);
              if (menuOpen) {
                setServicesOpen(false);
                setComplianceOpen(false);
              }
            }}
            aria-label="Toggle navigation menu"
          >
            ☰
          </button>
        </div>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="
                md:hidden mt-3 rounded-3xl border border-white/10
                bg-[var(--color-primary-softer)]/96 backdrop-blur-2xl
                shadow-[0_18px_40px_rgba(0,0,0,0.4)]
                px-7 py-8 text-white
              "
            >
              <div className="flex flex-col items-center text-center space-y-7">
                <a href="/" className={mobileLinkClass("/")} onClick={() => setMenuOpen(false)}>
                  Home
                </a>

                <a href="/about" className={mobileLinkClass("/about")} onClick={() => setMenuOpen(false)}>
                  About
                </a>

                {/* Mobile Services */}
                <div className="w-full">
                  <button
                    onClick={() => setServicesOpen(!servicesOpen)}
                    className={[
                      "flex justify-center items-center gap-3 w-full py-2 font-semibold transition duration-200",
                      servicesIsActive ? "text-[var(--color-accent)]" : "text-white/90",
                    ].join(" ")}
                  >
                    <span>Services</span>
                    <span>{servicesOpen ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {servicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden mt-3"
                      >
                        <a
                          href="/services"
                          className="block text-white/78 hover:text-[var(--color-accent)] transition"
                          onClick={() => setMenuOpen(false)}
                        >
                          All Services
                        </a>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Compliance */}
                <div className="w-full">
                  <button
                    onClick={() => setComplianceOpen(!complianceOpen)}
                    className={[
                      "flex justify-center items-center gap-3 w-full py-2 font-semibold transition duration-200",
                      complianceIsActive ? "text-[var(--color-accent)]" : "text-white/90",
                    ].join(" ")}
                  >
                    <span>DOT Compliance</span>
                    <span>{complianceOpen ? "−" : "+"}</span>
                  </button>

                  <AnimatePresence>
                    {complianceOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden mt-3"
                      >
                        <div className="flex flex-col items-center space-y-3 text-base">
                          <a
                            href="/dot-compliance"
                            className="text-white/78 hover:text-[var(--color-accent)] transition"
                            onClick={() => setMenuOpen(false)}
                          >
                            DOT & MC Compliance
                          </a>

                          <a
                            href="/mc-number-setup"
                            className="text-white/78 hover:text-[var(--color-accent)] transition"
                            onClick={() => setMenuOpen(false)}
                          >
                            MC Number Setup
                          </a>

                          <a
                            href="/dispatch-services-utah"
                            className="text-white/78 hover:text-[var(--color-accent)] transition"
                            onClick={() => setMenuOpen(false)}
                          >
                            Dispatch Services Utah
                          </a>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <a href="/pricing" className={mobileLinkClass("/pricing")} onClick={() => setMenuOpen(false)}>
                  Pricing
                </a>

                <a href="/contact" className={mobileLinkClass("/contact")} onClick={() => setMenuOpen(false)}>
                  Contact
                </a>

                <a href="tel:13852928031" className="block font-semibold text-white/80 text-center">
                  📞 385-292-8031
                </a>

                <motion.a
                  href="/contact"
                  whileTap={{ scale: 0.98 }}
                  className="
                    w-full text-center py-4 rounded-2xl font-semibold
                    bg-[var(--color-accent)] text-[var(--color-primary)]
                    shadow-[0_10px_24px_rgba(143,199,238,0.14)]
                  "
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}