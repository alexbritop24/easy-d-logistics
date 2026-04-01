import { motion } from "framer-motion";
import heroBg from "../assets/dispatch-team-portrait.jpeg";

export default function Hero() {
  return (
    <section
      className="relative pt-36 pb-24 md:pt-44 md:pb-32 text-white overflow-hidden"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Main dark overlay for readability */}
      <div className="absolute inset-0 bg-[var(--color-primary)]/78" />

      {/* Secondary gradient for depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-[var(--color-primary)]/20 to-black/45" />

      {/* Soft accent glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(147,197,253,0.12),transparent_38%)]" />

      <div className="relative max-w-6xl mx-auto text-center px-6">
        
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-sm text-sm md:text-base text-white/80"
        >
          24/7 Dispatch Support
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
        >
          Dispatching Solutions{" "}
          <span className="block text-[var(--color-accent)]">
            That Scale With Your Fleet
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="mt-6 text-lg md:text-xl text-white/85 max-w-3xl mx-auto leading-relaxed"
        >
          From owner operators to growing trucking fleets, we handle load booking,
          broker communication, and paperwork so you can stay focused on the road.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
          className="mt-12 flex flex-col sm:flex-row justify-center gap-4"
        >
          {/* Primary CTA */}
          <a
            href="/contact"
            className="
              px-8 py-3
              bg-[var(--color-accent)]
              text-[var(--color-primary)]
              font-semibold
              rounded-lg
              transition
              hover:opacity-90
            "
          >
            Contact Us
          </a>

          {/* Secondary CTA */}
          <a
            href="/services"
            className="
              px-8 py-3
              border border-white/40
              rounded-lg
              text-white
              transition
              hover:border-[var(--color-accent)]
              hover:text-[var(--color-accent)]
            "
          >
            View Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto"
        >
          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5">
            <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              24/7
            </div>
            <div className="mt-1 text-sm md:text-base text-white/75">
              Dispatcher availability
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5">
            <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              Fast
            </div>
            <div className="mt-1 text-sm md:text-base text-white/75">
              Broker communication & updates
            </div>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm px-6 py-5">
            <div className="text-2xl md:text-3xl font-bold text-[var(--color-accent)]">
              Reliable
            </div>
            <div className="mt-1 text-sm md:text-base text-white/75">
              Paperwork and load support
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}