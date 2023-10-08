import React, { useState } from "react";
import { Button } from "../global/Button";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Features", link: "/features" },
    { name: "Pricing", link: "/pricing" },
  ];

  return (
    <nav className="relative bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-5">
        <div className="flex gap-10">
          <a href="/" className="flex items-center">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8 mr-3"
              alt="Flowbite Logo"
            />
            <span className="self-center text-1xl font-semibold whitespace-nowrap dark:text-white">
              PushNote
            </span>
          </a>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              menuOpen ? "block" : "hidden"
            } ${menuOpen ? "absolute" : ""}  `}
            id="navbar-sticky"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <ul className=" w-full flex flex-col p-4 md:p-0 mt-12 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {navLinks.map((e) => (
                <li key={e.name}>
                  <a
                    href={e.link}
                    className="block py-2 pl-3 pr-4 text-black  rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500"
                    aria-current="page"
                  >
                    {e.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex md:order-2">
          <Button title={"Try Now"} />
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={menuOpen}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};
