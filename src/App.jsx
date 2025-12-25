import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import { motion, useScroll, useTransform } from "motion/react";
import Projects from "./components/Projects";

const App = () => {
  // const { scrollYProgress } = useScroll();
  // const y1 = useTransform(scrollYProgress, [0, 0.1], [100, 0]);
  // const opacity1 = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
  // const scale1 = useTransform(scrollYProgress, [0, 0.1], [0.8, 1]);

  // const y2 = useTransform(scrollYProgress, [0.2, 0.3], [100, 0]);
  // const opacity2 = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  // const scale2 = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

  // // const y3 = useTransform(scrollYProgress, [0.4, 0.5], [100, 0]);
  // // const opacity3 = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  // // const scale3 = useTransform(scrollYProgress, [0.4, 0.5], [0.8, 1]);

  return (
    <div
      className="relative"
      // {
      // className="bg-transparent bg-linear-to-r from-violet-600 to-blue-500}
    >
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* 
      <motion.div
        style={{ y: y1, opacity: opacity1, scale: scale1 }}
      ></motion.div>

      <motion.div
        style={{ y: y2, opacity: opacity2, scale: scale2 }}
      ></motion.div>
      <motion.div
        style={{ y: y2, opacity: opacity2, scale: scale2 }}
      ></motion.div> */}
    </div>
  );
};

export default App;
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Menu from "./compenentss/menu";

// function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Menu />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
