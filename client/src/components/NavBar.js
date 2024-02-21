import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation(); // Get current location
  const [currentPage, setCurrentPage] = useState(location.pathname); // Set initial current page

  return (
    <>
      <nav className="bg-greenAccent">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex h-16 items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-darkGreenAccent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              ></button>
            </div>
            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className={`${
                      currentPage === "/"
                        ? "bg-darkGreenAccent text-white"
                        : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => setCurrentPage("/")}
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/publication"
                    className={`${
                      currentPage === "/publication"
                        ? "bg-darkGreenAccent text-white"
                        : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => setCurrentPage("/publication")}
                  >
                    PUBLICATIONS
                  </NavLink>
                  <NavLink
                    to="/team"
                    className={`${
                      currentPage === "/team"
                        ? "bg-darkGreenAccent text-white"
                        : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => setCurrentPage("/team")}
                  >
                    TEAM
                  </NavLink>
                  <NavLink
                    to="/research"
                    className={`${
                      currentPage === "/research"
                        ? "bg-darkGreenAccent text-white"
                        : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
                    } rounded-md px-3 py-2 text-sm font-medium`}
                    onClick={() => setCurrentPage("/research")}
                  >
                    RESEARCH
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <button
                type="button"
                className="relative rounded-full bg-greenAccent p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              >
                <span className="absolute -inset-1.5"></span>
              </button>

              <div className="relative ml-3">
                <div>
                  <span className="bg-black absolute -inset-1.5"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 px-2 pb-3 pt-2">
            <NavLink
              exact
              to="/"
              className={`${
                currentPage === "/"
                  ? "bg-darkGreenAccent text-white"
                  : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
              onClick={() => setCurrentPage("/")}
            >
              HOME
            </NavLink>
            <NavLink
              exact
              to="/publication"
              className={`${
                currentPage === "/publication"
                  ? "bg-darkGreenAccent text-white"
                  : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
              onClick={() => setCurrentPage("/publication")}
            >
              PUBLICATIONS
            </NavLink>
            <NavLink
              exact
              to="/team"
              className={`${
                currentPage === "/team"
                  ? "bg-darkGreenAccent text-white"
                  : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
              onClick={() => setCurrentPage("/team")}
            >
              TEAM
            </NavLink>
            <NavLink
              exact
              to="/research"
              className={`${
                currentPage === "/research"
                  ? "bg-darkGreenAccent text-white"
                  : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
              onClick={() => setCurrentPage("/research")}
            >
              RESEARCH
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
