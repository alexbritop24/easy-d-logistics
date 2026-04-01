// src/pages/Home.jsx
import useSEO from "../hooks/useSEO";

import Hero from "../components/Hero";
import TrustBadges from "../components/TrustBadges";
import ServicesOverview from "../components/ServicesOverview";
import HowItWorks from "../components/HowItWorks";
import EarningsProjection from "../components/EarningsProjection";
import Testimonials from "../components/Testimonials";
import CTABanner from "../components/CTABanner";

export default function Home() {
  useSEO({
    title: "Easy D Logistics | 24/7 Dispatching for Owner-Operators & Fleets",
    description:
      "24/7 dispatching for owner-operators and small fleets. We handle load booking, broker negotiation, and paperwork so you can focus on the road.",
    path: "/",
    ogImage: "/easy-d-logo.png",
  });

  return (
    <>
      <Hero />
      <TrustBadges />
      <ServicesOverview />
      <HowItWorks />
      <EarningsProjection />
      <Testimonials />
      <CTABanner />
    </>
  );
}