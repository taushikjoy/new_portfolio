import About from "./components/sections/About";
import Navbar from "./components/sections/Navbar";

// import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
/*  {<AnimatePresence exitBeforeEnter>
      </AnimatePresence> }*/

// import Services from "./components/sections/Services";
import "./app.scss";
import ContactUs from "./components/sections/ContactUs";
import Skills from "./components/sections/Skills";
import Projects from "./components/sections/Projects";
// import Projectdetail from "./components/sections/Projectdetail";
// import ProjectTest from "./components/sections/ProjectTest";

function App() {
  // const location = useLocation();
  return (
    <div className='App'>
      <Navbar />

      <div className='sections'>
        <About />
        <Skills />
        <Projects />
        <ContactUs />
      </div>
    </div>
  );
}

export default App;
