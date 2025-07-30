import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Experience from './components/Experience';

function App() {
  return (
    <>
      <Navbar />
      <main className="text-white">
        <Landing />
        <Experience />
      </main>
    </>
  );
}

export default App;
