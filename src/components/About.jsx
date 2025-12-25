import { ArrowRight, Award, Briefcase, Code2, Code2Icon } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { about } from "../../data";
const About = () => {
  return (
    <section
      id="about"
      className="w-full relative bg-[#6441a5] py-20  text-white h-full"
    >
      <div>
        <div className="w-full relative max-md:h-5/12">
          <div className="flex justify-center items-center">
            <h2 className="text-6xl ">ABOUT ME</h2>
          </div>

          <div className="flex relative justify-center items-center  container py-10 mx-auto">
            <div className="grid relative grid-cols-2 py-10 items-center max-md:grid-cols-1">
              <div className="py-10 h-auto mx-6  text-center overflow-hidden relative rounded-2xl">
                <p className="text-md  text-justify  px-4">
                  "As an enthusiast and aspiring to be a fullstack web
                  developer. I,{" "}
                  <span className="text-lg font-bold uppercase text-transparent bg-clip-text bg-linear-to-r from-violet-400 to-violet-300">
                    {" "}
                    Ahmed Hamdee Alonto{" "}
                  </span>
                  bring with me a strong foundation in technology as a{" "}
                  <span className="font-bold text-lg text-violet-300">
                    Graduate{" "}
                  </span>
                  of the{" "}
                  <span className="text-violet-600 font-bold text-lg">
                    {" "}
                    Bachelor of Science in Information Technology Major in
                    Multimedia Systems at MSU-IIT{" "}
                  </span>
                  . My passion lies in creating dynamic, user-friendly websites
                  and exploring innovative solutions that bridge design and
                  functionality. With a keen interest in modern web technologies
                  and continuous learning, I am driven to sharpen my skills and
                  contribute to building digital experiences that make a
                  meaningful impact. My journey as a developer is fueled by
                  curiosity, creativity, and the determination to grow into a
                  professional who can turn ideas into interactive realities."
                </p>
                <p className="text-md italic text-justify  px-4 py-2">
                  "Any fool can write code that a computer can understand. Good
                  programmers write code that humans can understand." – Martin
                  Fowler.
                </p>
              </div>
              <div className="py-5 pr-5 h-auto  text-center overflow-hidden relative rounded-2xl">
                {about.map((ab, i) => (
                  <div
                    key={i}
                    className=" container mx-auto text-center shadow-[5px_5px_0_white]   bg-[#6441a5] hover:scale-100 scale-98 transform max-md:scale-95 max-md:hover:scale-96    transition-all duration-300  border border-white py-4 my-2 overflow-hidden relative rounded-2xl"
                  >
                    <div className="flex flex-row">
                      <div className="mx-2  justify-center border-r items-center flex flex-row">
                        <Award className="text-violet-500 w-10 hover:rotate-180  transform transition-all duration-500  mx-auto" />
                      </div>
                      <div className="flex w-full flex-col">
                        <h1 className="text-lg ">{ab.title}</h1>
                        <ol>
                          <li className="">
                            <h1 className="font-light text-sm text-left pl-1 pt-5 ">
                              {ab.description}
                            </h1>
                            <h1 className="font-light text-sm text-left pl-1 pt-5 ">
                              {ab.description1}
                            </h1>
                            <h1 className="font-light text-sm text-left pl-1 pt-5 ">
                              {ab.description2}
                            </h1>
                          </li>
                        </ol>
                      </div>{" "}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
