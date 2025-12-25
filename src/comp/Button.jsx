function Button({ children }) {
  return (
    <div className="">
      <button className="relative inline-flex  cursor-pointer h-12 shadow-[5px_5px_0_#6441a5] active:scale-95 hover:scale-105 duration-300 transistion overflow-hidden rounded-lg p-px focus:outline-none">
        <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg  bg-violet-100 px-7 text-sm font-medium text-[#6441a5] backdrop-blur-3xl gap-2 undefined">
          {children}
        </span>
      </button>
    </div>
  );
}

export default Button;
