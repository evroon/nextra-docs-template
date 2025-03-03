import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { HowItWorks } from "../components/HowItWorks";
import { Features } from "../components/Features";
import { Cta } from "../components/Cta";
import "./page.css";
import { FAQ } from "../components/FAQ";
import { Sponsors } from "../components/Sponsors";
import { Services } from "../components/Services";
import { Testimonials } from "../components/Testimonials";
import { Team } from "../components/Team";
import { Pricing } from "../components/Pricing";
import { Newsletter } from "../components/Newsletter";

export default function App() {
  return (
    <>
      <Hero />
      <Sponsors />
      <About />
      <HowItWorks />
      <Features />
      <Services />
      <Cta />
      <Testimonials />
      <Team />
      <Pricing />
      <Newsletter />
      <FAQ />
    </>
  );
}
