//import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/sections/About";
import Navbar from "./components/sections/Navbar";
// import { AnimatePresence, motion } from "framer-motion";
/*  {<AnimatePresence exitBeforeEnter>
      </AnimatePresence> }*/

// import Services from "./components/sections/Services";
import "./app.scss";
import ContactUs from "./components/sections/ContactUs";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";

function App() {
  return (
    <div className='App'>
      <Navbar />

      <div className='sections'>
        <About />
        <Skills />
        {/* <Services /> */}
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
