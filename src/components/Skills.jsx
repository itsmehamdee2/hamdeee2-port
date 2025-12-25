import { AnimatePresence } from "motion/react";
import { motion, useScroll, useTransform } from "motion/react";
import Button from "../comp/Button";
import Card from "../comp/Card";
import { useState } from "react";
import { mySkills } from "../../data";
const Skills = () => {
  const { scrollYProgress } = useScroll();
  const lineWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const [item, setItem] = useState(mySkills);
  // const menuItems = [...new Set(mySkills.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = mySkills.filter((skill) => {
      return skill.category === cat;
    });
    setItem(newItems);
  };

  return (
    <section id="skills" className="w-full h-full relative">
      <motion.div
        className="fixed  top-0 left-0 h-[5px] bg-red-800"
        style={{ width: lineWidth }}
      />
      <div className="relatitve min-h-screen overflow-hidden  bg-violet-100 text-[#6441a5]">
        <div className="container mx-auto flex">
          <div className=" text-center pt-10 h-auto w-full">
            <div className="flex flex-row gap-2 items-center justify-center">
              <h1 className="text-6xl text-[#6441a5] relative"> SKILLS</h1>
            </div>

            <div className="flex scale-62 md:scale-100 gap-2 items-center justify-center pt-4">
              {/* {menuItems.map((val) => (
                <Button onClick={() => filterItems("")}> {val}</Button>
              ))} */}
              <button type="button " onClick={() => filterItems("frontend")}>
                <Button> FRONTEND</Button>
              </button>
              <button type="button " onClick={() => filterItems("backend")}>
                <Button> BACKEND</Button>
              </button>
              <button type="button " onClick={() => filterItems("tools")}>
                <Button> TOOLS</Button>
              </button>
              <button type="button " onClick={() => filterItems("others")}>
                <Button> OTHERS</Button>
              </button>
              <button type="button " onClick={() => setItem(mySkills)}>
                <Button> All</Button>
              </button>
            </div>
            <div className="scale-90 md:scale-90">
              <Card item={item} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
