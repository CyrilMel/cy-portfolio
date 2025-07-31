import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <section id="landing"><Landing /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Project /></section>
        <section id="certificate"><Certificate /></section>
        <section id="contact"><Contact /></section>
        <Footer />
      </main>
    </>
  );
}

export default App;
