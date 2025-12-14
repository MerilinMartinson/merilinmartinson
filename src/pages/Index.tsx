import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Research from "@/components/Research";
import Teaching from "@/components/Teaching";
import CV from "@/components/CV";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <Hero />
        <About />
        <Research />
        <Teaching />
        <CV />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
