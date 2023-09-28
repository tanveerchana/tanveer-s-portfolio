import { useState } from "react";

export default function Navbar() {
  const [isHovering, setIsHovering] = useState(false);

  const handleHover = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav>
      <div className="flex justify-between px-4 py-5 sm:px-8 md:px-10 lg:px-12 xl:px-16 2xl:px-20">
        <div
          className="flex cursor-pointer"
          onMouseEnter={handleHover}
          onMouseLeave={handleMouseLeave}
        >
          <div className={`circle ${isHovering ? "square" : ""}`}></div>
          <a className="px-3 text-2xl font-bold">Tanveer Singh</a>
        </div>
        <div className="hidden sm:flex">
          <ul className="flex">
            <li className="text-2xl cursor-pointer  text-blue-700 hover:text-gray-500 px-5 font-bold" href="#">
              Home
            </li>
            <li className="text-2xl cursor-pointer hover:text-gray-500 px-5 font-bold" href="#">
              Work
            </li>
            <li className="text-2xl cursor-pointer hover:text-gray-500 px-5 font-bold" href="#">
              About
            </li>
          </ul>
        </div>
        <div className="sm:hidden">
          <button type="button" onClick={toggleNavbar}>
            <svg
              className={`${isOpen ? "hidden" : "block"} h-7 w-7`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`${isOpen ? "block" : "hidden"} h-7 w-7`}
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className={`${isOpen ? "block" : "hidden"} sm:hidden`}>
      <div className="bg-blue-200">
        <ul className="flex flex-col items-center my-2 py-2">
          <li className="text-2xl cursor-pointer hover:text-gray-500 py-2.5 px-5 font-bold" href="#">
            Home
          </li>
          <li className="text-2xl cursor-pointer hover:text-gray-500 py-2.5 px-5 font-bold" href="#">
            Work
          </li>
          <li className="text-2xl cursor-pointer hover:text-gray-500 py-2.5 px-5 font-bold" href="#">
            About
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}
