import useSEO from "../hooks/useSEO";
import { motion } from "framer-motion";
import Reveal from "../components/Reveal";

export default function DispatchServicesPage() {
  useSEO({
    title: "Truck Dispatch Services | Owner Operators & Fleets | Easy D Logistics",
    description:
      "Professional truck dispatch services for owner-operators and fleets. We handle load booking, rate negotiation, and paperwork so you stay loaded and profitable.",
    path: "/truck-dispatch-services",
  });

  return (
    <main className="bg-[var(--color-primary)] text-white">

      {/* HERO */}
      <section className="px-6 pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-6xl mx-auto text-center">
          
          <Reveal>
            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
              Truck Dispatch Services
              <span className="block text-[var(--color-accent)]">
                That Keep You Moving
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.05}>
            <p className="mt-6 text-white/75 max-w-2xl mx-auto">
              We help owner-operators and small fleets stay loaded, negotiate better rates,
              and handle paperwork so you can focus on driving and earning.
            </p>
          </Reveal>

        </div>
      </section>

      {/* SEO CONTENT */}
      <section className="px-6 pb-20">
        <div className="max-w-5xl mx-auto">

          <h2 className="text-3xl font-bold">
            Dispatch Services For Owner Operators
          </h2>

          <p className="mt-6 text-white/70">
            Our truck dispatch services are built to help drivers maximize revenue,
            reduce downtime, and operate more efficiently. We handle load booking,
            broker communication, and rate negotiation to keep your truck moving.
          </p>

          <p className="mt-4 text-white/70">
            We work with dry van, flatbed, hotshot, and reefer carriers across the United States.
          </p>

          <p className="mt-4 text-white/70">
            If you are just starting, we can also help with{" "}
            <a href="/mc-number-setup" className="text-[var(--color-accent)] underline">
              MC number setup
            </a>{" "}
            and full{" "}
            <a href="/dot-compliance" className="text-[var(--color-accent)] underline">
              DOT compliance
            </a>.
          </p>

        </div>
      </section>

    </main>
  );
}