import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: true,
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

const articles = [
  {
    title: "Innovate Stone Structures",
    image:
      "https://tadao.qodeinteractive.com/wp-content/uploads/2023/05/blog-img-4.jpg",
    date: "3 May",
    author: "Juliette Manon",
    category: "Building",
    link: "https://tadao.qodeinteractive.com/innovate-stone-structures/",
  },
  {
    title: "Home design materials",
    image:
      "https://tadao.qodeinteractive.com/wp-content/uploads/2023/05/h1-img-blog-img.jpg",
    date: "5 May",
    author: "Juliette Manon",
    category: "Building",
    link: "https://tadao.qodeinteractive.com/home-design-materials/",
  },
  {
    title: "Start with the view & air",
    image:
      "https://tadao.qodeinteractive.com/wp-content/uploads/2023/05/h1-img-blog-img-1.jpg",
    date: "5 May",
    author: "Juliette Manon",
    category: "Building",
    link: "https://tadao.qodeinteractive.com/start-with-the-view-air/",
  },
  // Add more articles as needed
];

const ArticleSlider = () => {
  return (
    <div className="article-slider-container relative">
      <Slider {...settings}>
        {articles.map((article, index) => (
          <div
            key={index}
            className="px-6"
          >
            <div className="qodef-e-inner">
              <div className="mb-4">
                <div className="qodef-e-media-image">
                  <a href={article.link}>
                    <img
                      loading="lazy"
                      decoding="async"
                      src={article.image}
                      alt={article.title}
                      className="attachment-full size-full wp-post-image"
                    />
                  </a>
                </div>
              </div>
              <div className="flex gap-3">
                <div className=" ">
                  <a href="#" className="bg-[#8E7861] text-[#ccc] flex flex-col justify-center items-center py-2 px-3">
                    <div className="qodef-date-day">
                      {article.date.split(" ")[0]}
                    </div>
                    <div className="">
                      {article.date.split(" ")[1]}
                    </div>
                  </a>
                </div>
                <div className="qodef-e-right">
                  <div className="mb-2">
                    <div className="flex gap-3">
                      <a href="#" className="text-[#ccc]">
                        {article.author}
                      </a>
                      <div className="text-[#ccc]">|</div>
                      <a href="#" className="text-[#ccc]">
                        {article.category}
                      </a>
                    </div>
                  </div>
                  <h4 className="qodef-e-title entry-title">
                    <a href={article.link} className="text-[#8E7861]">
                      {article.title}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default ArticleSlider;
