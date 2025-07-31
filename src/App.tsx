import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Project from './components/Project';
import Certificate from './components/Certificate';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <Landing />
        <Experience />
        <Project />
        <Certificate />
        <Contact />
      </main>
    </>
  );
}

export default App;
