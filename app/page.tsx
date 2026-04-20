import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { VideoEmbed } from "@/components/VideoEmbed";
import { AboutGame } from "@/components/AboutGame";
import { Screenshots } from "@/components/Screenshots";
import { AboutDeveloper } from "@/components/AboutDeveloper";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <VideoEmbed />
        <AboutGame />
        <Screenshots />
        <AboutDeveloper />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
