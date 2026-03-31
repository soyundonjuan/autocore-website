import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import PlatformPage from "./pages/PlatformPage";
import PricingPage from "./pages/PricingPage";
import PrivacyPage from "./pages/PrivacyPage";
import ThankYouPage from "./pages/ThankYouPage";
import TermsPage from "./pages/TermsPage";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/plataforma" element={<PlatformPage />} />
        <Route path="/nosotros" element={<AboutPage />} />
        <Route path="/precios" element={<PricingPage />} />
        <Route path="/gracias" element={<ThankYouPage />} />
        <Route path="/politica-de-privacidad" element={<PrivacyPage />} />
        <Route path="/terminos-y-condiciones" element={<TermsPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
}

export default App;
