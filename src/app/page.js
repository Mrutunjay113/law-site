import About from "@/components/About";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import PracticeArea from "@/components/Practice-Area";
import ContactUs from "@/components/contact-us";
import Navbar from "@/components/navbar";
import WhyChooseUs from "@/components/why-choose-us";

export default function Home() {
  return (
    <div>
      <Navbar />
      <section id="home">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="practice-areas">
        <PracticeArea />
      </section>
      <section id="why-choose-us">
        <WhyChooseUs />
      </section>
      <section id="contact">
        <ContactUs />
      </section>
      <Footer />
    </div>
  );
}
