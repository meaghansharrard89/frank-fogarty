import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation(); // Get current location
  const [currentPage, setCurrentPage] = useState(location.pathname); // Set initial current page

  return (
    <>
      <nav className="bg-greenAccent navbar">
        <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button
                type="button"
                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-darkGreenAccent hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              ></button>
            </div>
            <div className="flex items-center justify-center sm:justify-start">
              <div className="flex-shrink-0 items-center"></div>
              <div className="hidden sm:ml-6 sm:block">
                <div className="flex space-x-4">
                  <NavLink
                    exact
                    to="/"
                    className={`${
                      currentPage === "/"
                        ? "bg-darkGreenAccent text-white"
                        : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
                    } rounded-md px-3 py-2 text-m font-medium`}
                    onClick={() => setCurrentPage("/")}
                  >
                    HOME
                  </NavLink>
                  <NavLink
                    to="/publications"
                    className={`${
                      currentPage === "/publication"
                        ? "bg-darkGreenAccent text-white"
                        : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
                    } rounded-md px-3 py-2 text-m font-medium`}
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
                    } rounded-md px-3 py-2 text-m font-medium`}
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
                    } rounded-md px-3 py-2 text-m font-medium`}
                    onClick={() => setCurrentPage("/research")}
                  >
                    RESEARCH
                  </NavLink>
                  <NavLink
                    exact
                    to="/contact"
                    className={`${
                      currentPage === "/contact"
                        ? "bg-darkGreenAccent text-white"
                        : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
                    } rounded-md px-3 py-2 text-m font-medium`}
                    onClick={() => setCurrentPage("/contact")}
                  >
                    CONTACT
                  </NavLink>
                </div>
              </div>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div className="relative ml-3">
                <div></div>
              </div>
            </div>
          </div>
        </div>

        <div className="sm:hidden" id="mobile-menu">
          <div className="space-y-1 pb-4 text-center">
            <NavLink
              exact
              to="/"
              className={`${
                currentPage === ""
                  ? "bg-darkGreenAccent text-white"
                  : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
              } block rounded-md px-3 py-2 text-base font-medium`}
              onClick={() => setCurrentPage("")}
            >
              HOME
            </NavLink>
            <NavLink
              exact
              to="/publication"
              className={`${
                currentPage === "/publications"
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
            <NavLink
              exact
              to="/contact"
              className={`${
                currentPage === "/contact"
                  ? "bg-darkGreenAccent text-white"
                  : "text-gray-300 hover:bg-darkGreenAccent hover:text-white"
              } block rounded-md px-3 py-2 text-m font-medium`}
              onClick={() => setCurrentPage("/contact")}
            >
              CONTACT
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
