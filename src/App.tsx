import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Experience from './components/Experience';
import Project from './components/Project';

function App() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <Landing />
        <Experience />
        <Project />
      </main>
    </>
  );
}

export default App;
