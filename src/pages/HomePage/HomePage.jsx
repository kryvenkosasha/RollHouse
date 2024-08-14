import Descriprion from "../../components/Description/Description";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import Navigation from "../../components/Navigation/Navigation";
import Testimonials from "../../components/Testimonials/Testimonials";

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main>
        <Hero />
        <Descriprion />
        <Testimonials />
      </main>
      <Footer />
    </>
  );
}
