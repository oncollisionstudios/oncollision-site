import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/sections/Hero";
import Games from "../components/sections/Games";
import Team from "../components/sections/Team";
import Devlog from "../components/sections/Devlog";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <Games />
      <Team />
      <Devlog />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}