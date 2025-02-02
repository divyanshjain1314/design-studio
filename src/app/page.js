"use client";
import Header from "../pages/Header";
import ArticleSlider from "../pages/ArticleSlider";
import Contact from "../pages/Contact";
import Footer from "../pages/Footer";
import ImageSlider from "../pages/ImageSlider";
import SlickSlider from "../pages/SliderComponent ";

import { useState } from "react";

const ImageList = ({ imageData }) => {
  return (
    <>
      {imageData.map((items) => {
        // Use state for tracking visibility of each image
        const [isVisible, setIsVisible] = useState(false);

        const handleMouseEnter = () => {
          setIsVisible(true); // Show text on hover
        };

        const handleMouseLeave = () => {
          setIsVisible(false); // Hide text when mouse leaves
        };

        return (
          <div key={items.id} className="col-span-1 cursor-pointer ">
            <div
              className="relative"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <img
                src={items.imageUrl}
                alt={items.title}
                className="w-full h-[200px] object-cover"
              />
              <div
                className={`${isVisible ? "" : ""} transition-all delay-1000`}
              >
                <div
                  className={`${
                    isVisible ? "bg-[#0000]" : "bg-[#000]"
                  } transition-all delay-100 ease-in-out inset-0 absolute border-[1px] border-[#302E2C]`}
                ></div>
                <div className="absolute bottom-0 left-0 text-[#8E7861] p-5 pb-0 flex gap-4 w-full justify-between">
                  <div
                    className={`${
                      isVisible ? "hidden" : ""
                    }  transition-all delay-100 ease-in-out flex items-end`}
                  >
                    <span className="text-3xl flex items-center gap-2 pb-5">
                      {" "}
                      {items.title} &#x2192;
                    </span>
                  </div>
                  <div
                    className={`${
                      isVisible ? "hidden" : ""
                    }  transition-all delay-100 ease-in-out text-9xl text-[#211E19]`}
                  >
                    0{items.id}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default function Home() {
  const [expandedCategory, setExpandedCategory] = useState(null); // To track the expanded category
  const imageData = [
    {
      id: 1,
      title: "G13 HOUSE",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?t=st=1738397446~exp=1738401046~hmac=00f87b7679930658628ea736c733029163f4bcd6f6096f8ae0aaacbabe6a140f&w=900",
      isVisible: false,
    },
    {
      id: 2,
      title: "JADE HOUSE",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?t=st=1738397446~exp=1738401046~hmac=00f87b7679930658628ea736c733029163f4bcd6f6096f8ae0aaacbabe6a140f&w=900",
      isVisible: false,
    },
    {
      id: 3,
      title: "ART SPACE",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?t=st=1738397446~exp=1738401046~hmac=00f87b7679930658628ea736c733029163f4bcd6f6096f8ae0aaacbabe6a140f&w=900",
      isVisible: false,
    },
    {
      id: 4,
      title: "3D MODELING",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?t=st=1738397446~exp=1738401046~hmac=00f87b7679930658628ea736c733029163f4bcd6f6096f8ae0aaacbabe6a140f&w=900",
      isVisible: false,
    },
    {
      id: 5,
      title: "ARCA STUDIO",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?t=st=1738397446~exp=1738401046~hmac=00f87b7679930658628ea736c733029163f4bcd6f6096f8ae0aaacbabe6a140f&w=900",
      isVisible: false,
    },
    {
      id: 6,
      title: "LIGHT & SHAPES",
      imageUrl:
        "https://img.freepik.com/free-photo/3d-rendering-modern-dining-room-living-room-with-luxury-decor_105762-1932.jpg?t=st=1738397446~exp=1738401046~hmac=00f87b7679930658628ea736c733029163f4bcd6f6096f8ae0aaacbabe6a140f&w=900",
      isVisible: false,
    },
  ];
  const categories = [
    {
      title: "Consultancy",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Architecture",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Projects",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      title: "Construction",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  const toggleCategory = (index) => {
    // Toggle the category visibility
    setExpandedCategory(expandedCategory === index ? null : index);
  };
  return (
    <main>
      <div className="relative h-[100vh] ">
        <div className="absolute bg-[#00000094] top-0 bottom-0 left-0 right-0 z-[10]"></div>
        <div className="absolute top-0 left-0 right-0 w-full px-4">
          <Header/>
        </div>
        <div className="w-full bg-gray-300">
          <SlickSlider />
          <div className="z-20">
            <div className="absolute translate-y-[30%] top-[15%] left-14 px-5 carousel-text">
              <h2 className="text-7xl uppercase text-white z-20">
                Experiences <br /> & Knowledge <br /> Integrated
              </h2>
              <p className="text-white w-1/2 pt-4">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Reprehenderit, accusamus. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Aliquid, iste!
              </p>
            </div>
          </div>
          <div className="absolute translate-y-[50%] top-0 right-14 z-[12] px-5">
            <nav
              className="qodef-header-navigation"
              role="navigation"
              aria-label="Top Menu"
            >
              <ul id="menu-main-menu-1" className="">
                <li className="text-white text-[18px] font-[600] mb-3 uppercase text-right">
                  Home
                </li>
                <li className="text-white text-[18px] font-[600] mb-3 uppercase text-right">
                  Pages
                </li>
                <li className="text-white text-[18px] font-[600] mb-3 uppercase text-right">
                  Portfolio
                </li>
                <li className="text-white text-[18px] font-[600] mb-3 uppercase text-right">
                  Shop
                </li>
                <li className="text-white text-[18px] font-[600] mb-3 uppercase text-right">
                  Blog
                </li>
                <li className="text-white text-[18px] font-[600] mb-3 uppercase text-right">
                  Landing
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <section>
        <div className="grid grid-cols-2">
          <ImageList imageData={imageData} />
        </div>
      </section>

      <section className=" bg-[#000] pb-16">
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col  justify-center pl-[20%] h-full">
            <h3 className="text-5xl text-white uppercase mb-4">
              start with idea{" "}
            </h3>
            <p className="text-white mb-3 font-[300]">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non provident sunt in culpa qui officia deserunt.{" "}
            </p>
            <p className="text-white mb-3 font-[300]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus.
            </p>
            <div className="pt-4">
              <button
                type="button"
                className="border-[#8E7861] border text-white px-5 py-2 hover:bg-[#8E7861]"
              >
                Explore more
              </button>
            </div>
          </div>
          <div>
            <img
              src="/h1-img-3.png"
              className="w-full h-auto object-cover"
              alt=""
            />
          </div>
        </div>
      </section>

      <section className=" bg-[#000] pb-16 px-4">
        <div className="grid grid-cols-2 h-[435px] gap-4">
          <div className="col-span-1">
            <div>
              <img
                src="/h1-img-7.jpg"
                alt=""
                className="w-full object-cover h-[435px]"
              />
            </div>
          </div>
          <div className="col-span-1">
            <div className="grid grid-cols-2 gap-4">
              <div className="col-span-1">
                <img
                  src="/team-img-1.jpg"
                  alt=""
                  className="w-full object-cover h-[315px]"
                />
                <div className="mt-4">
                  <h5  className="qodef-e-title entry-title">
                    <a
                      className="text-[#8E7861] font-[600] uppercase"
                    >
                      Atishay Jain
                    </a>
                  </h5>
                  <p className="text-[#b3b3b3]">CEO / Architect</p>
                  <div className="">
                    <ul className="flex gap-5 p-0 ">
                      <li className="qodef-social-icon">
                        <a
                          className="text-[#8E7861]"
                          href="https://www.instagram.com"
                          target="_blank"
                        >
                          IG{" "}
                        </a>
                      </li>
                      <li className="qodef-social-icon">
                        <a
                          className="text-[#8E7861]"
                          href="https://www.facebook.com"
                          target="_blank"
                        >
                          FB{" "}
                        </a>
                      </li>
                      <li className="qodef-social-icon">
                        <a
                          className="text-[#8E7861]"
                          href="https://www.linkedin.com"
                          target="_blank"
                        >
                          LI{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-span-1">
                <img
                  src="/team-image-n-1.jpg"
                  alt=""
                  className="w-full object-cover h-[315px]"
                />
                <div className="mt-4">
                  <h5  className="qodef-e-title entry-title">
                    <a
                      className="text-[#8E7861] font-[600] uppercase"
                    >
                      Victoria Savano
                    </a>
                  </h5>
                  <p className="text-[#b3b3b3]">Urbanism and spatial planning</p>
                  <div className="">
                    <ul className="flex gap-5 p-0 ">
                      <li className="qodef-social-icon">
                        <a
                          className="text-[#8E7861]"
                          href="https://www.instagram.com"
                          target="_blank"
                        >
                          IG{" "}
                        </a>
                      </li>
                      <li className="qodef-social-icon">
                        <a
                          className="text-[#8E7861]"
                          href="https://www.facebook.com"
                          target="_blank"
                        >
                          FB{" "}
                        </a>
                      </li>
                      <li className="qodef-social-icon">
                        <a
                          className="text-[#8E7861]"
                          href="https://www.linkedin.com"
                          target="_blank"
                        >
                          LI{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#000] pt-5 px-5">
        <div className="pb-28">
          <ImageSlider />
        </div>
        <div className="grid grid-cols-2 p-20 gap-5 pb-44">
          <div className="col-span-1">
            <h2 className="uppercase text-[#8E7861] text-[44px] font-[500] mb-3">
              array of services and skills
            </h2>
            <p className="text-white">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur cepteur sint occaecat.
            </p>

            <button
              type="button"
              className="text-[#8E7861] flex gap-2 items-center"
            >
              Read More <span className="text-4xl">&#x2192;</span>
            </button>
          </div>
          <div className="col-span-1">
            {categories.map((category, index) => (
              <div
                key={index}
                className="mb-4 border-b border-[#8E7861] py-[13px]"
              >
                <div
                  className="cursor-pointer text-lg font-semibold "
                  onClick={() => toggleCategory(index)}
                >
                  <div className="flex justify-between items-center">
                    <h6 className="text-[#8E7861] ">{category.title}</h6>
                    <span className="text-[#8E7861] text-[50px] font-[100]">
                      {expandedCategory === index ? "-" : "+"}
                    </span>
                  </div>
                </div>
                <div
                  className={`mt-2 overflow-hidden transition-all duration-500 ease-in-out ${
                    expandedCategory === index
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <p
                    className={`mt-2 text-white pb-10 transition-all duration-1000 ease-in-out ${
                      expandedCategory === index ? "" : "hidden"
                    }`}
                  >
                    {category.content}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video section */}

      <section>
        <video
          src="https://videos.pexels.com/video-files/3773486/3773486-hd_1920_1080_30fps.mp4"
          className="w-full h-[600px] object-cover"
          controls
          autoPlay
          loop
          muted
          aria-label="Background Video"
        ></video>
      </section>

      {/* ArticleSlider */}

      <section className="bg-[#000] py-28 ps-20">
      <div className="ps-3 mb-12">
        <h3 className="text-[#8E7861] uppercase text-4xl font-[600] mb-4">read insights</h3>

        <p className="text-[#ccc]">Duis aute irure dolor in reprehenderit in voluptate velit esse.</p>
      </div>
        <ArticleSlider />
      </section>

      {/* Marque */}

      <section className="bg-[#000] text-[#8E7861] border-y border-[#8E7861] py-8">
        <marquee behavior="scroll" direction=""  >
          <div className="flex gap-3">
            <div className="flex gap-3">
              <span className="qodef-m-text-1">
                BUILDING SPACES FOR EVERY PURPOSE SINCE 2005{" "}
              </span>
              <span className="qodef-m-separator"></span>
              <span className="qodef-m-text-2">
                architecture &amp; interior design{" "}
              </span>
              <span className="qodef-m-separator"></span>
              <span className="qodef-m-text-3">
                BUILDING SPACES FOR EVERY PURPOSE SINCE 2005{" "}
              </span>
              <span className="qodef-m-separator"></span>
            </div>
            <div className="flex gap-3">
              <span className="qodef-m-text-1">
                BUILDING SPACES FOR EVERY PURPOSE SINCE 2005{" "}
              </span>
              <span className="qodef-m-separator"></span>
              <span className="qodef-m-text-2">
                architecture &amp; interior design{" "}
              </span>
              <span className="qodef-m-separator"></span>
              <span className="qodef-m-text-3">
                BUILDING SPACES FOR EVERY PURPOSE SINCE 2005{" "}
              </span>
              <span className="qodef-m-separator"></span>
            </div>
            <div className="flex gap-3">
              <span className="qodef-m-text-1">
                BUILDING SPACES FOR EVERY PURPOSE SINCE 2005{" "}
              </span>
              <span className="qodef-m-separator"></span>
              <span className="qodef-m-text-2">
                architecture &amp; interior design{" "}
              </span>
              <span className="qodef-m-separator"></span>
              <span className="qodef-m-text-3">
                BUILDING SPACES FOR EVERY PURPOSE SINCE 2005{" "}
              </span>
              <span className="qodef-m-separator"></span>
            </div>
          </div>
        </marquee>
      </section>

      {/* Contact section  */}

      <Contact />

      {/* Footer Section */}

      <section>
        <Footer />
      </section>
    </main>
  );
}
