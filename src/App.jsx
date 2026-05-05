import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

// Components
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

// Pages
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Pricing from "./pages/Pricing.jsx";
import GetStarted from "./pages/GetStarted.jsx";
import Contact from "./pages/Contact.jsx";
import FAQ from "./pages/FAQ.jsx";
import DotCompliancePage from "./pages/DotCompliancePage.jsx";
import MCSetupPage from "./pages/MCSetupPage.jsx";
import DispatchUtahPage from "./pages/DispatchUtahPage.jsx";
import DispatchServicesPage from "./pages/DispatchServicesPage.jsx";

/* Scroll to top on route change */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="bg-[var(--color-primary)] text-white min-h-screen flex flex-col">
      <ScrollToTop />

      <Navbar />

      <main className="pt-16 flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/get-started" element={<GetStarted />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/dot-compliance" element={<DotCompliancePage />} />
          <Route path="/mc-number-setup" element={<MCSetupPage />} />
          <Route path="/dispatch-services-utah" element={<DispatchUtahPage />} />
          <Route path="/truck-dispatch-services" element={<DispatchServicesPage />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;