import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Collapse, Dropdown, initTWE, Ripple } from "tw-elements";
import logo from "../../src/assets/logo-01.png";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  useEffect(() => {
    initTWE({ Collapse, Dropdown, Ripple });
  }, []);

  return (
    <>
      {/* <!-- Main navigation container --> */}
      <nav className="flex-no-wrap relative flex w-full items-center justify-between bg-zinc-50 py-3 shadow-dark-mild dark:bg-neutral-700 lg:flex-wrap lg:justify-start lg:py-4">
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* <!-- Hamburger button for mobile view --> */}
          <button
            className="block border-0 bg-transparent px-2 text-black/50 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-twe-collapse-init
            data-twe-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <!-- Hamburger icon --> */}
            <span className="[&>svg]:w-7 [&>svg]:stroke-black/50 dark:[&>svg]:stroke-neutral-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clip-rule="evenodd"
                />
              </svg>
            </span>
          </button>

          {/* <!-- Collapsible navigation container --> */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-twe-collapse-item
          >
            {/* <!-- Logo --> */}
            <a
              className="mb-4 me-5 ms-2 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img src={logo} className="h-8" alt="TE Logo" loading="lazy" />
            </a>
            {/* <!-- Left navigation links --> */}
            <ul
              className="list-style-none me-auto flex flex-col ps-0 lg:flex-row"
              data-twe-navbar-nav-ref
              data-twe-dropdown-ref
            >
              {/* Menu 01 */}
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <div class="relative" data-twe-dropdown-ref>
                  <a
                    className="text-black/70 text-sm font-medium transition duration-200 hover:text-orange-500 hover:ease-in-out focus:text-orange-500 lg:px-2"
                    href="#"
                    type="button"
                    id="dropdownMenuButton2"
                    data-twe-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    Study Abroad Steps
                    <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
                  </a>
                  <ul
                    class="absolute z-[1000] float-left m-0 hidden w-48 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block "
                    aria-labelledby="dropdownMenuButton2"
                    data-twe-dropdown-menu-ref
                  >
                    <li>
                      <a
                        class="block w-full whitespace-nowrap bg-white px-4 py-4 text-sm font-normal text-neutral-700 hover:text-white hover:bg-orange-500 focus:bg-orange-500 focus:outline-none "
                        href="#"
                        data-twe-dropdown-item-ref
                      >
                        Action
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Menu 02 */}
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <div class="relative" data-twe-dropdown-ref>
                  <a
                    className="text-black/70 text-sm font-medium transition duration-200 hover:text-orange-500 hover:ease-in-out focus:text-orange-500 lg:px-2"
                    href="#"
                    type="button"
                    id="dropdownMenuButton2"
                    data-twe-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    Study Destinations
                    <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
                  </a>
                  <ul
                    class="absolute z-[1000] float-left m-0 hidden w-48 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block "
                    aria-labelledby="dropdownMenuButton2"
                    data-twe-dropdown-menu-ref
                  >
                    <li>
                      <a
                        class="block w-full whitespace-nowrap bg-white px-4 py-4 text-sm font-normal text-neutral-700 hover:text-white hover:bg-orange-500 focus:bg-orange-500 focus:outline-none "
                        href="#"
                        data-twe-dropdown-item-ref
                      >
                        Action
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Menu 03 */}
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <div class="relative" data-twe-dropdown-ref>
                  <a
                    className="text-black/70 text-sm font-medium transition duration-200 hover:text-orange-500 hover:ease-in-out focus:text-orange-500 lg:px-2"
                    href="#"
                    type="button"
                    id="dropdownMenuButton2"
                    data-twe-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    Our Services
                    <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
                  </a>
                  <ul
                    class="absolute z-[1000] float-left m-0 hidden w-48 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block "
                    aria-labelledby="dropdownMenuButton2"
                    data-twe-dropdown-menu-ref
                  >
                    <li>
                      <a
                        class="block w-full whitespace-nowrap bg-white px-4 py-4 text-sm font-normal text-neutral-700 hover:text-white hover:bg-orange-500 focus:bg-orange-500 focus:outline-none "
                        href="#"
                        data-twe-dropdown-item-ref
                      >
                        Action
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
              {/* Menu 04 */}
              <li className="mb-4 lg:mb-0 lg:pe-2" data-twe-nav-item-ref>
                <div class="relative" data-twe-dropdown-ref>
                  <a
                    className="text-black/70 text-sm font-medium transition duration-200 hover:text-orange-500 hover:ease-in-out focus:text-orange-500 lg:px-2"
                    href="#"
                    type="button"
                    id="dropdownMenuButton2"
                    data-twe-dropdown-toggle-ref
                    aria-expanded="false"
                  >
                    IELTS
                    <FontAwesomeIcon className="ml-2" icon={faCaretDown} />
                  </a>
                  <ul
                    class="absolute z-[1000] float-left m-0 hidden w-48 list-none overflow-hidden rounded-lg border-none bg-white bg-clip-padding text-base shadow-lg data-[twe-dropdown-show]:block "
                    aria-labelledby="dropdownMenuButton2"
                    data-twe-dropdown-menu-ref
                  >
                    <li>
                      <a
                        class="block w-full whitespace-nowrap bg-white px-4 py-4 text-sm font-normal text-neutral-700 hover:text-white hover:bg-orange-500 focus:bg-orange-500 focus:outline-none "
                        href="#"
                        data-twe-dropdown-item-ref
                      >
                        Action
                      </a>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
            {/* <!-- Left links --> */}
          </div>

          {/* <!-- Right elements --> */}
          <div className="relative flex items-center">
            <button className="px-3 py-2 bg-orange-500 text-white rounded-md hover:scale-105 transition duration-300">
              Inquire Now
            </button>
          </div>
          {/* <!-- Right elements --> */}
        </div>
      </nav>
    </>
  );
};

export default Header;
