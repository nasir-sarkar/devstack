import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import Logo from "../assets/logo.png";

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 z-50 bg-base-100 border-b border-base-200">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <button
          onClick={handleMenuToggle}
          className="btn btn-ghost btn-square lg:hidden"
        >
          {isMenuOpen ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>

        <a href="#home" className="flex items-center">
          <img src={Logo} alt="logo" className="h-8 w-auto" />
        </a>

        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link, ind) => (
            <li key={ind}>
              <a href={`#${link.toLowerCase()}`} className="hover:text-primary">
                {link}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button className="btn btn-ghost btn-sm">Sign In</button>
          <button className="btn btn-sm rounded-full border-none btn-brand-gradient px-5">
            Sign Up
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <ul className="lg:hidden flex flex-col gap-1 px-4 py-3 border-t border-base-200">
          {navLinks.map((link, ind) => (
            <li key={ind}>
              <a
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsMenuOpen(false)}
                className="block px-2 py-2 rounded-lg text-sm font-medium hover:bg-base-200"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
