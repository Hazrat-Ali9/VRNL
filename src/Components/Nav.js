import React from "react";

const Nav = () => {
  return (
    <div className="fixed w-full">
      <div className="navbar bg-black">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
            </ul>
          </div>
          <img
            className="w-36"
            src="https://vrnlexch.com/images/logos/logo.webp"
            alt=""
          />
        </div>
        <div className="navbar-center hidden lg:flex lg:justify-between lg:items-center">
          <ul className="menu menu-horizontal px-1 gap-14">
            <li>
              <a href="/#section1" className="text-lg text-white text font-normal custom-hover-animation">Home</a>
            </li>
            <li>
              <a href="/#section2" className="text-lg text-white font-normal custom-hover-animation">
                White Label
              </a>
            </li>
            <li>
              <a href="/#section3" className="text-lg text-white font-normal custom-hover-animation">
                Casino Provider
              </a>
            </li>
            <li>
              <a href="/#section5" className="text-lg text-white font-normal custom-hover-animation">
                About Us
              </a>
            </li>
            <li>
              <a href="/#section4" className="text-lg text-white font-normal custom-hover-animation">
                Why VRNL
              </a>
            </li>
            <li>
              <a href="/#section6" className="text-lg text-white font-normal custom-hover-animation">
                Contact Us
              </a>
            </li>
            <li>
              <a href="/" className="text-lg text-white font-normal custom-hover-animation">
                Discover The Latest
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
// Navbar js
