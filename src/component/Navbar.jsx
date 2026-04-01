import { Fragment, useState } from "react";
import { IoMdMenu } from "react-icons/io";
import { RxCross2 } from "react-icons/rx"; // ✅ Cross icon
import { GiLaurelCrown } from "react-icons/gi";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setIsMenuOpen(false); // ✅ close menu on click
  };

  return (
    <Fragment>
      <nav className="fixed top-0 w-full bg-black py-3 border-b border-gray-700 z-50 shadow-lg">
        
        {/* CONTAINER */}
        <div className="max-w-[1400px] mx-auto flex items-center justify-between px-5 sm:px-12 p-2">

          {/* Logo */}
          <div className="flex items-center cursor-pointer group">
            <GiLaurelCrown className="text-[#CE0928] text-3xl mr-2 group-hover:text-white transition-all duration-500" />
            <span className="text-white font-bold text-xl hidden sm:block group-hover:text-[#CE0928] transition-colors duration-300">
              Abdullah Khalid
            </span>
          </div>

          {/* Mobile menu button */}
        {/* Mobile menu button */}
<div className="lg:hidden fixed top-5 right-5 z-[60]">
  <button
    onClick={toggleMenu}
    className="text-white hover:text-[#CE0928] transition-all duration-300 transform hover:scale-110"
  >
    {isMenuOpen ? <RxCross2 size={28} /> : <IoMdMenu size={28} />}
  </button>
</div>

          {/* Desktop menu */}
          <div className="hidden lg:flex items-center">
            <ul className="flex items-center gap-8">
              {["Home", "About", "Skills", "Resume", "Services", "Projects"].map(
                (item, index) => {
                  const lowercaseItem = item.toLowerCase();
                  return (
                    <li
                      onClick={() => handleLinkClick(lowercaseItem)}
                      key={index}
                      className="font-medium cursor-pointer relative group"
                    >
                      <a
                        href={`#${lowercaseItem}`}
                        className={`transition-all duration-300 ${
                          activeLink === lowercaseItem
                            ? "text-[#CE0928]"
                            : "text-white hover:text-[#CE0928]"
                        }`}
                      >
                        {item}
                        <span
                          className={`absolute bottom-0 left-0 h-0.5 transition-all duration-500 ${
                            activeLink === lowercaseItem
                              ? "bg-[#CE0928] w-full"
                              : "bg-[#CE0928] w-0 group-hover:w-full"
                          }`}
                        ></span>
                      </a>
                    </li>
                  );
                }
              )}
            </ul>
          </div>

          {/* Contact button */}
          <div className="hidden lg:flex">
            <button
              onClick={() => {
                window.location.href = "#contact";
                setActiveLink("contact");
              }}
              className="text-white bg-gradient-to-r from-[#ce0928] to-[#ff4d5e] px-6 py-2 rounded-md hover:from-[#ff4d5e] hover:to-[#ce0928] transition-all duration-300 shadow-lg font-medium cursor-pointer"
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Overlay */}
        {isMenuOpen && (
          <div
            onClick={toggleMenu}
            className="fixed inset-0 bg-black/50 z-40"
          ></div>
        )}

        {/* Mobile Menu */}
        <div
          className={`lg:hidden fixed top-0 right-0 h-full w-full bg-black px-6 py-6 transform transition-transform duration-300 z-50 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col items-center justify-center h-full gap-8">
            {["Home", "About", "Skills", "Resume", "Services", "Projects", "Contact"].map(
              (item, index) => {
                const lowercaseItem = item.toLowerCase();
                return (
                  <li key={index} className="w-full text-center">
                    <a
                      onClick={() => handleLinkClick(lowercaseItem)}
                      href={`#${lowercaseItem}`}
                      className={`block py-3 text-xl transition-all duration-300 ${
                        activeLink === lowercaseItem
                          ? "text-[#CE0928]"
                          : "text-white hover:text-[#CE0928]"
                      }`}
                    >
                      {item}
                    </a>
                  </li>
                );
              }
            )}
          </ul>
        </div>

      </nav>
    </Fragment>
  );
};

export default Navbar;