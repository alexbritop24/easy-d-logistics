import Hero from "../components/Hero.jsx";
import TrustBadges from "../components/TrustBadges.jsx";
import HowItWorks from "../components/HowItWorks.jsx";
import ServicesOverview from "../components/ServicesOverview.jsx";
import EarningsProjection from "../components/EarningsProjection.jsx";
import Testimonials from "../components/Testimonials.jsx";
import CTABanner from "../components/CTABanner.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <TrustBadges />
      <HowItWorks />
      <ServicesOverview />
      <EarningsProjection />
      <Testimonials />
      <CTABanner />
    </>
  );
}