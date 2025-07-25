import Hero from "./components/hero";
import About from "./components/about";
import Features from "./components/features";
import HowItWorks from "./components/howitworks";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Features />
      <HowItWorks />
      <Testimonials />
    </>
  );
}
