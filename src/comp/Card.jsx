import React from "react";
import CountUp from "../add/CountUp";
function Card({ item }) {
  return (
    <div className="grid grid-cols-3 relative container mx-auto pt-3 md:pt-15 gap-3 max-sm:grid-cols-1 max:md-grid-cols-2 justify-center  items-center">
      {item.map((skill, key) => (
        <div
          className="p-4  rounded-lg shadows  hover:transition-transform duration-300 border max-md:scale-95 max-md:shadow-[7px_7px_0_#6441a5]  hover:scale-105   bg-violet-100 text-[#6441a5] hover:shadow-[7px_7px_0_#4a4080]  shadow-[7px_7px_0_#4a4080] "
          key={key}
        >
          <div>
            <h2 className="text-2xl">{skill.name}</h2>
          </div>
          {/* <div className="w-full my-5 bg-white  h-2 rounded-full overflow-hidden">
            <div
              className="bg-green-500 h-2 rounded-full origin-left animate-[grow_2.5s_ease-out] "
              style={{ width: skill.level + "%" }}
            ></div>
          </div>
          <div className="text-right mb-9 mt-1">
            <span className="text-sm text-muted-foreground">
              <CountUp
                from={0}
                to={skill.level}
                separator=","
                direction="up"
                duration={1}
                className="count-up-text text-lg"
              >
                %
              </CountUp>
            </span>
          </div> */}
          {/* <div>
            <h2 className="uppercase text-md border rounded-2xl ">
              {skill.category}
            </h2>
          </div> */}
        </div>
      ))}
    </div>
  );
}

export default Card;

{
  /* <div className="grid grid-cols-3 relative container mx-auto mt-15 gap-3 max-sm:grid-cols-1 max:md-grid-cols-2 justify-center  items-center">
  {mySkills.map((skill, key) => (
    <div
      className="p-4 rounded-lg shadows border hover:transition-transform duration-300 max-md:scale-95 max-md:hover:scale-97 hover:scale-105 shadow-2xl bg-black/60 hover:shadow-lg"
      key={key}
    >
      <div>
        <h2 className="text-2xl">{skill.name}</h2>
      </div>
      <div className="w-full my-5 bg-white  h-2 rounded-full overflow-hidden">
        <div
          className="bg-green-500 h-2 rounded-full origin-left animate-[grow_2.5s_ease-out] "
          style={{ width: skill.level + "%" }}
        ></div>
      </div>
      <div className="text-right mb-9 mt-1">
        <span className="text-sm text-muted-foreground">
          <CountUp
            from={0}
            to={skill.level}
            separator=","
            direction="up"
            duration={1}
            className="count-up-text text-lg"
          >
            %
          </CountUp>
        </span>
      </div>
      <div>
        <h2 className="uppercase text-md border rounded-2xl ">
          {skill.category}
        </h2>
      </div>
    </div>
  ))}
</div>; */
}
