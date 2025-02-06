import React from 'react'
import Carousel from "react-bootstrap/Carousel";

const HomeBanner = () => {
  return (
    <div className="relative overflow-hidden" id="HOME_CAROUSEL" >
      <Carousel fade style={{ height: "100vh" }}>
        <Carousel.Item>
          <img
            className="w-full object-cover h-full"
            src="https://img.freepik.com/free-photo/loft-home-office-interior-design_53876-143117.jpg?t=st=1738357184~exp=1738360784~hmac=b2eb609092dbbe89e0e96a79bbe1b8278f2f301d9c22ed94d370b0bfa8e99566&w=740"
            alt=""
          />
          {/* <div className="z-20">
            <div className="absolute translate-y-[50%] top-[15%] left-14 px-5 carousel-text">
              <h2 className="text-7xl uppercase text-white z-20">
                Experiences <br /> & Knowledge <br /> Integrated
              </h2>
            </div>
          </div> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-full object-cover h-full"
            src="https://img.freepik.com/free-photo/yellow-armchair-living-room-with-copy-space_43614-940.jpg?ga=GA1.1.942608024.1721156636&semt=ais_hybrid"
            alt=""
          />
          {/* <div className="z-20">
            <div className="absolute translate-y-[50%] top-[15%] left-14 px-5 carousel-text">
              <h2 className="text-7xl uppercase text-white z-20">
                Experiences <br /> & Knowledge <br /> Integrated
              </h2>
            </div>
          </div> */}
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="w-full object-cover h-full"
            src="https://img.freepik.com/free-photo/3d-rendering-loft-luxury-living-room-with-shelf-near-dining-table_105762-2053.jpg?t=st=1738396572~exp=1738400172~hmac=1dc3ff4d16586a298b58f56eb37954fec9d49874ebee8c9edbb465dd7402326a&w=740"
            alt=""
          />
          {/* <div className="z-20">
            <div className="absolute translate-y-[50%] top-[15%] left-14 px-5 carousel-text">
              <h2 className="text-7xl uppercase text-white z-20">
                Experiences <br /> & Knowledge <br /> Integrated
              </h2>
            </div>
          </div> */}
        </Carousel.Item>
      </Carousel>
    </div>
  )
}

export default HomeBanner