import About from "./components/About";
import Hero from "./components/Hero";
import { NavBar } from "./components/NavBar";
import Skills from "./components/Skills";
import Works from "./components/Works";

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Skills />
      <Works />
    </div>
  );
}

export default App;
