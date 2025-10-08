import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PracticeArea from "@/components/Practice-Area";
import ContactUs from "@/components/contact-us";
import Navbar from "@/components/navbar";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <section id="home" aria-label="Hero Section">
          <Hero />
        </section>
        <section id="about" aria-label="About Us">
          <About />
        </section>
        <section id="practice-areas" aria-label="Practice Areas">
          <PracticeArea />
        </section>
        <section id="why-choose-us" aria-label="Why Choose Us">
          <WhyChooseUs />
        </section>
        <section id="contact" aria-label="Contact Us">
          <ContactUs />
        </section>
      </main>
      <Footer />
    </>
  );
}
