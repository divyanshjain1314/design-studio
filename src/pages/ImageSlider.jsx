"use client";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ImageSlider() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplaySpeed: 1000,
        },
      },
    ],
  };
  const imageUrls = [
    "/new-client-img-2.png",
    "/new-client-img-8.png",
    "/new-client-img-10.png",
    "/new-client-img-6.png",
    "/new-client-img-4.png",
    "/new-client-img-12.png",
  ];
  return (
    <div className="overflow-hidden">
      <div className="image-slider">
        <Slider {...settings}>
          {imageUrls.map((url, index) => (
            <div key={index} className="px-16">
              <img
                src={url}
                alt={`Image ${index + 1}`}
                id={`image-${url.split("/").pop().split(".")[0]}`} // Generate an ID from the file name
                className="w-full object-contain h-[100px] image-tint"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default ImageSlider;
