import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Project from './components/Project';
import Certificate from './components/Certificate';

function App() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <Landing />
        <Experience />
        <Project />
        <Certificate />
      </main>
    </>
  );
}

export default App;
