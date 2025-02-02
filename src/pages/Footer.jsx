"use client";
import Link from "next/link";

const Footer = () => {
  return (
    <footer role="contentinfo" className="lg:px-28 px-4 py-32 bg-[#000]">
      <div className="grid grid-cols-3">
        <div className="lg:col-span-1 col-span-3">
          <div
            id="block-8"
            className="widget widget_block"
            data-area="qodef-footer-top-area-column-1"
          >
            <h3 className="text-[#8E7861] mb-3 lg:pr-[15%]">
              Recognizing the need is the primary condition
            </h3>
            <p className="text-[#ccc] text-[16px] lg:pr-[15%] mb-3">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident sunt in culpa.
            </p>
          </div>
          <div
            id="tadao_core_social_icons_group-4"
            className="widget widget_tadao_core_social_icons_group"
            data-area="qodef-footer-top-area-column-1"
          >
            <div className="flex gap-5">
              <span className="qodef-icon-holder qodef--textual">
                <a
                  className="text-[#8E7861]"
                  href="https://www.instagram.com/qodeinteractive/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  IG
                </a>
              </span>
              <span className="qodef-icon-holder qodef--textual">
                <a
                  className="text-[#8E7861]"
                  href="https://www.facebook.com/QodeInteractive/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  FB
                </a>
              </span>
              <span className="qodef-icon-holder qodef--textual">
                <a
                  className="text-[#8E7861]"
                  href="https://www.linkedin.com/company/qode-themes/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LI
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-3">
          <div
            id="tadao_core_title_widget-3"
            className="widget widget_tadao_core_title_widget"
            data-area="qodef-footer-top-area-column-2"
          >
            <h5 className="text-[#8E7861] mb-3">Contact</h5>
          </div>
          <div
            id="block-12"
            className="widget widget_block"
            data-area="qodef-footer-top-area-column-2"
          >
            <p style={{ marginBottom: "12px" }}>
              <a
                className="text-[#ccc]"
                rel="noreferrer noopener"
                href="https://www.google.com/maps/place/Seestrasse+21,+8002+Z%C3%BCrich,+Switzerland/data=!4m2!3m1!1s0x479009f9149bc8ab:0x80b507c3ea8d2191?sa=X&amp;ved=2ahUKEwit4bHY9pL-AhXL9bsIHdpxD4EQ8gF6BAgZEAI"
                target="_blank"
              >
                A: Seestrasse 21, Zurich, Switzerland
              </a>
            </p>
            <p style={{ marginBottom: "12px" }}>
              <a
                className="text-[#ccc]"
                rel="noreferrer noopener"
                href="mailto:tadao@example.com"
                target="_blank"
              >
                E: tadao@example.com
              </a>
            </p>
            <p style={{ marginBottom: "12px" }}>
              <a
                className="text-[#ccc]"
                rel="noreferrer noopener"
                href="tel:123456789"
                data-type="URL"
                target="_blank"
              >
                T: 99 4 11 123 456
              </a>
            </p>
            <p style={{ marginBottom: "12px" }}>
              <a
                className="text-[#ccc]"
                rel="noreferrer noopener"
                href="tel:123456789"
                data-type="tel"
                data-id="tel:123456789"
                target="_blank"
              >
                T: 99 4 11 123 457
              </a>
            </p>
            <p className="text-[#ccc]">H: Tuesday to Friday 11am - 6pm</p>
          </div>
        </div>
        <div className="lg:col-span-1 col-span-3">
          <div
            id="tadao_core_title_widget-4"
            className="widget widget_tadao_core_title_widget"
            data-area="qodef-footer-top-area-column-3"
          >
            <h5 className="text-[#8E7861] mb-3">Projects</h5>
          </div>
          <div
            id="nav_menu-2"
            className="widget widget_nav_menu"
            data-area="qodef-footer-top-area-column-3"
          >
            <div className="menu-footer-menu-container">
              <ul id="menu-footer-menu" className="menu ps-0 lg:ps-3">
                <li
                  id="menu-item-69"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-69"
                >
                  <Link className="text-[#ccc]" href="#">
                    Residential
                  </Link>
                </li>
                <li
                  id="menu-item-70"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-70"
                >
                  <Link className="text-[#ccc]" href="#">
                    Interior
                  </Link>
                </li>
                <li
                  id="menu-item-71"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-71"
                >
                  <Link className="text-[#ccc]" href="#">
                    Competitions
                  </Link>
                </li>
                <li
                  id="menu-item-72"
                  className="menu-item menu-item-type-custom menu-item-object-custom menu-item-72"
                >
                  <Link className="text-[#ccc]" href="#">
                    Reuse
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div
            id="tadao_core_button-3"
            className="widget widget_tadao_core_button"
            data-area="qodef-footer-top-area-column-3"
          >
            <a
              className="qodef-shortcode qodef-m  qodef-button qodef-layout--textual  qodef-html--link"
              href="#"
              target="_self"
              data-hover-color="#8e7861"
              style={{ color: "#8e7861", margin: "-35px 0px 0px" }}
            >
              <span className="uppercase">Join our newsletter</span>
              <span className="qodef-m-arrow">
                <svg
                  className="qodef-svg--arrow-right"
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="10"
                >
                  <g>
                    <path d="M30 4.5H0"></path>
                    <path d="m 35.07 4.5 l -8.75 5 V -0.3 Z"></path>
                  </g>
                </svg>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div>
        <div className="lg:pt-20">
          <div className="flex lg:flex-row flex-col lg:justify-between lg:items-center">
            <header
              id="page-header"
              role="banner"
              style={{ width: "auto !important" }}
            >
              <div id="page-header-inner" className="qodef-skin--light">
                <a
                  className="qodef-header-logo-link qodef-height--set qodef-source--svg-path qodef--animate flex gap-4 items-end "
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
                    <path
                      d="M.8.8h80.1V74H.8Z"
                      style={{ "--qode-path-length": 308 }}
                    />
                  </svg>
                </a>
              </div>
            </header>
            <p className="text-[#ccc]">
              © 2023{" "}
              <Link
                className="text-[#8E7861]"
                href="https://qodeinteractive.com/"
                passHref
              >
                Qode Interactive
              </Link>
              , All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
