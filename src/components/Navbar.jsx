import {
  BicepsFlexed,
  Briefcase,
  Clipboard,
  Home,
  PersonStanding,
  User,
} from "lucide-react";
function Navbar() {
  return (
    <nav className="fixed text-white bottom-5 lg:bottom-8 w-full overflow:hidden z-50">
      <div className="container mx-auto">
        <div className="w-full bg-black/70 h-15 rounded-full max-w-115  px-5 flex items-center justify-between text-2xl   mx-auto backdrop-blur-2xl">
          <a
            href="#"
            className="cursor-pointer text-[#a0a0c0] hover:scale-110 transition-all duration-300 w-15 h-15 flex items-center justify-center "
          >
            <Home />
          </a>
          <a
            href="#about"
            className="cursor-pointer text-[#a0a0c0]  hover:scale-110 transition-all duration-300 w-15 h-15 flex items-center justify-center "
          >
            <User />
          </a>

          <a
            href="#skills"
            className="cursor-pointer text-[#a0a0c0]  hover:scale-110 transition-all duration-300 w-15 h-15 flex items-center justify-center "
          >
            <BicepsFlexed />
          </a>

          <a
            href="#projects"
            className="cursor-pointer  text-[#a0a0c0] hover:scale-110 transition-all duration-300 w-15 h-15 flex items-center justify-center "
          >
            <Briefcase />
          </a>
          <a
            href=""
            className="cursor-pointer text-[#a0a0c0]  hover:scale-110 transition-all duration-300 w-15 h-15 flex items-center justify-center "
          >
            <Clipboard />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
