import React from "react";
import { ArrowDown, Ghost, Github, Instagram, Linkedin } from "lucide-react";
import TextType from "../add/TextType";
import {
  AnimatePresence,
  motion,
  spring,
  useScroll,
  useTransform,
} from "motion/react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Links } from "../../data";

const Hero = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id={"#"}
      className="relative min-h-screen overflow-hidden pt-20 lg:pt-36 text-white bg-slate-100 "
    >
      <motion.div
        className="fixed top-0 left-0 h-[5px] bg-red-400"
        style={{ width: lineWidth }}
      />
      {/* <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full"></div> */}
      <div className="w-full  relative h-full">
        <div className="relative flex ">
          <motion.div
            initial={{ x: "120%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.8 }}
            className="md:absolute md:scale-95 md:top-10 md:right-20 scale-60  absolute top-90 -right-25 "
          >
            <SyntaxHighlighter
              language="javascript"
              customStyle={{
                margin: "0",
                padding: "2rem",
                height: "100%",
                borderRadius: "20px",
                background: "rgba(30, 41, 59, 1)",
                backdropFilter: "blur(10px)",
              }}
              style={vscDarkPlus}
            >
              {`const aboutMe = () => {
  name: "Ahmed Hamdee Alonto"
  profession: "Aspiring Fullstack Web Developer",
  stack: {
    frontend: ["React", "NextJs", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    backend: ["NodeJS", "Express", "PostgreSQL"],
    tools: ["VSCode", "Git/GitHub", "Figma", "Postman","Bruno", "Canva", "Docker"]
        },  
  education: {
    degree: "Bachelor of Science in Information Technology Major in Multimedia Systems",
    institution: "MSU-IIT",
    graduationYear: 2017
  },
  }`}
            </SyntaxHighlighter>
          </motion.div>
        </div>
        <div>
          <span></span>
        </div>
        {/* {header text} */}

        <div>
          <div className="flex mx-15 justify-center md:justify-start items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.3 }}
              className="text-6xl pt-10 mt-2 md:mt-10 text-[#4a4080] max-md:text-2xl tracking-tighter"
            >
              <TextType
                className=" tracking-tighter  max-md:text-2xl"
                text={["HI", "HELLO"]}
              />{" "}
              I'M
            </motion.h1>
          </div>

          <div className="flex mx-15 justify-center md:justify-start  md:mt-0 text-right items-center">
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="max-md:text-5xl  text-[#4a4080] tracking-tighter text-7xl"
            >
              {" "}
              AHMED{" "}
            </motion.h1>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.5 }}
              className="text-transparent   tracking-tighter max-md:text-6xl px-2 font-semibold text-8xl bg-clip-text bg-linear-to-r from-violet-500 to-violet-400"
            >
              HAMDEE
            </motion.span>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 0.7 }}
            className="flex justify-center mx-15  md:justify-start items-center"
          >
            <span className=" max-md:text-5xl text-[#4a4080] tracking-tighter  font-semibold text-8xl">
              ALONTO
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.1 }}
            className="flex justify-center mx-15 text-[#4a4080]  md:justify-start items-center"
          >
            <h1 className="font-extralight text-[#4a4080] max-md:text-xl text-lg">
              Your{" "}
              <TextType
                className="pt-3 text-xl uppercase  text-transparent bg-clip-text max-md:text-xl bg-linear-to-r from-violet-400 to-violet-600"
                text={[
                  "Coder Enthusiast",
                  "Frontend Developer",
                  "Fullstack Web Developer",
                ]}
              />
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.2 }}
            className="flex justify-center mx-15  md:justify-start items-center"
          >
            <p className="font-extralight text-[#4a4080] max-md:text-sm text-md">
              Find me on
            </p>
          </motion.div>

          {/* {logo icons} */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 1.7 }}
            className="flex justify-center mx-15 md:justify-start items-center "
          >
            <ul className="flex-row items-center justify-center flex py-1 gap-2">
              <li>
                <a href="https://www.github.com/itsmehamdee2" target="blank">
                  <Github
                    target="blank"
                    size={30}
                    className="grayscale-0 cursor-pointer h-10 w-10 p-1 max-md:w-7 max-md:h-7 rounded-full    text-violet-500  border-white transform transition-all duration-300 hover:scale-110 hover:shadow-[0_0_5px_violet]"
                  />
                </a>
              </li>
              <li>
                <a
                  target="blank"
                  href="https://www.linkedin.com/in/ahamdeealonto/"
                >
                  <Linkedin
                    size={30}
                    className="grayscale-0 h-10 w-10 p-1 cursor-pointer max-md:w-7  max-md:h-7 rounded-full  text-violet-500 border-white transform transition-all duration-300  hover:scale-110 hover:shadow-[0_0_5px_violet]"
                  />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/thefroozch" target="blank">
                  <Instagram
                    size={30}
                    className="grayscale-0 h-10 w-10 p-1 cursor-pointer max-md:w-7 max-md:h-7  rounded-full text-violet-500 border-white transform transition-all duration-300  hover:scale-110 hover:shadow-[0_0_5px_violet]"
                  />
                </a>
              </li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, delay: 2.1 }}
            className="flex justify-center mx-15 md:justify-start relative py-2 max-md:py-1 gap-4 items-center"
          >
            <button className="relative  inline-flex cursor-pointer h-12 active:scale-95 hover:scale-105 shadow-[5px_5px_0_#4a4080]   duration-300 transistion overflow-hidden rounded-lg p-px focus:outline-none">
              <span className="inline-flex border h-full w-full cursor-pointer items-center justify-center rounded-lg   bg-slate-100 px-7 text-sm font-medium text-[#4a4080] backdrop-blur-3xl gap-2 undefined">
                Download CV
              </span>
            </button>
            <button className="relative inline-flex  cursor-pointer h-12 active:scale-95 shadow-[5px_5px_0_#4a4080]  hover:scale-105 duration-300 transistion overflow-hidden rounded-lg p-px focus:outline-none">
              <span className="inline-flex h-full w-full items-center justify-center outline rounded-lg  bg-slate-950/30 px-7 text-sm font-medium text-[#4a4080] backdrop-blur-3xl gap-2 undefined">
                <a href="#skills">View my work</a>
              </span>
            </button>
          </motion.div>
        </div>
      </div>
      <div className="flex items-center  md:justify-end justify-center  px-15 mx-15-my-7 max-md:my-0 max-md:justify-center max-md:py-6 animate-bounce">
        <ArrowDown className="" />
        <p>Scroll Down</p>
      </div>
    </section>
  );
};

export default Hero;
