import { useState, useEffect } from "react";
import PremiumCafeLoader from "./components/PremiumCafeLoader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reviews from "./components/Reviews";
import Contact from "./components/Contact";
import Location from "./components/Location";
import Footer from "./components/Footer";
import StickyActions from "./components/StickyActions";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [loading]);

  return (
    <>
      <PremiumCafeLoader onComplete={() => setLoading(false)} />
      
      {/* We can still render the app behind the loader, so it's ready when the loader fades */}
      <div className={`transition-opacity duration-1000 ${loading ? 'opacity-0' : 'opacity-100'}`}>
        <Navbar />
        
        <main>
          <Hero />
          <div className="space-y-stack-lg md:space-y-32">
            <About />
            <Menu />
            <Gallery />
            <Reviews />
            <Contact />
            <Location />
          </div>
        </main>
        
        <Footer />
        <StickyActions />
      </div>
    </>
  );
}

export default App;
