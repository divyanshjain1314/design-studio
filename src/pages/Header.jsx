"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [isFixed, setIsFixed] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScroll = () => {
    if (window.scrollY > 50) {
      // Change 50 to the scroll position at which you want the header to become fixed
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      id="page-header"
      role="banner"
      className={
        isFixed ? "page-header-fixed bg-[#000] w-full px-4 z-50 pt-[18px]" : ""
      }
    >
      <div id="page-header-inner" className="qodef-skin--light">
        <Link
          className="qodef-header-logo-link qodef-height--set qodef-source--svg-path qodef--animate flex gap-4 items-end w-full "
          href="/"
          passHref
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="65"
            height="60"
            viewBox="0 0 81.7 74.8"
            strokeWidth="2"
          >
            <path
              d="M14.2 34S41.6 48 41.4 74.7"
              style={{ "--qode-path-length": 53 }}
            />
            <path
              d="M25.8 16.3S57.4 32.2 62 74"
              style={{ "--qode-path-length": 72 }}
            />
            <path
              d="M56.7 16.3S25 32.2 20.3 74"
              style={{ "--qode-path-length": 72 }}
            />
            <path
              d="M68.2 34.2s-26.9 14-26.6 40.5"
              style={{ "--qode-path-length": 52 }}
            />
            <path
              d="M2 74.7S3.1 32.5 41 1"
              style={{ "--qode-path-length": 87 }}
            />
            <path
              d="M80 74.7S78.7 32.4 41 1"
              style={{ "--qode-path-length": 87 }}
            />
            <path d="M.8.8h80.1V74H.8Z" style={{ "--qode-path-length": 308 }} />
          </svg>
          <div
            className={`${
              isFixed ? " border-[#8E7861] flex justify-between" : ""
            } border-b-2 w-full pb-3 font-[600] text-[16px] leading-[1.25em] uppercase`}
          >
            Design Studio
            {isFixed && (
              <div className="hidden lg:block">
                <ul id="menu-main-menu-1" className="flex m-0 gap-4">
                  <li className="text-[#8E7861] text-[14px] font-[600] uppercase text-right">
                    Home
                  </li>
                  <li className="text-[#8E7861] text-[14px] font-[600] uppercase text-right">
                    Pages
                  </li>
                  <li className="text-[#8E7861] text-[14px] font-[600] uppercase text-right">
                    Portfolio
                  </li>
                  <li className="text-[#8E7861] text-[14px] font-[600] uppercase text-right">
                    Shop
                  </li>
                  <li className="text-[#8E7861] text-[14px] font-[600] uppercase text-right">
                    Blog
                  </li>
                  <li className="text-[#8E7861] text-[14px] font-[600] uppercase text-right">
                    Landing
                  </li>
                </ul>
              </div>
            )}
          </div>
        </Link>
      </div>

      {/* Off-canvas menu */}
      {isMenuOpen && (
        <div
          className="lg:hidden fixed top-0  left-0 w-full h-full bg-opacity-70 z-20"
          onClick={() => setIsMenuOpen(false)} // Close the menu when clicking outside
        >
          <div
            className="w-2/3 bg-black absolute top-0 left-0 h-full p-4"
            onClick={(e) => e.stopPropagation()} // Prevent closing the menu when clicking inside
          >
            <div className="absolute top-4 right-0 flex items-center justify-center me-4">
              <button
                onClick={() => setIsMenuOpen(false)}
                className=" text-white text-2xl pb-2 px-3 rounded-full border border-[#8E7861] cursor-pointer"
              >x</button>
            </div>
            <ul className="flex flex-col gap-6 text-[#8E7861] text-[18px] font-[600] uppercase pt-20">
              <li>Home</li>
              <li>Pages</li>
              <li>Portfolio</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Landing</li>
            </ul>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
