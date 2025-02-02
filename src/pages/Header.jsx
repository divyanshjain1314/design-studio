"use client"
import React from "react";

const Header = () => {
  return (
    <header id="page-header" role="banner" >
      <div id="page-header-inner" className="qodef-skin--light">
        <a
          className="qodef-header-logo-link qodef-height--set qodef-source--svg-path qodef--animate flex gap-4 items-end w-full "
          href="https://tadao.qodeinteractive.com/"
          rel="home"
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
          <span className="border-b-2 w-full pb-3 font-[600] text-[16px] leading-[1.25em] uppercase">
            Design Studio
          </span>
        </a>
      </div>
    </header>
  );
};

export default Header;
