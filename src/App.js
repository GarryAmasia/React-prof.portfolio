import About from "./components/About";
import Contact from "./components/Contact";
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
      <Contact />
    </div>
  );
}

export default App;
