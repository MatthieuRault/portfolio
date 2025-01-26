import MainSection from "../components/home/MainSection";
import Navbar from "../components/layout/Navbar";
import About from "../components/home/About";
import ProjectsSection from "../components/projects/ProjectsSection";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <MainSection />
        <About />
        <ProjectsSection />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
