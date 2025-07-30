import Navbar from './components/Navbar';
import Landing from './components/Landing';

function App() {
  return (
    <>
      <Navbar />
      <main className="flex items-center justify-center text-white px-4 pt-10">
        <Landing />
      </main>
    </>
  );
}

export default App;
