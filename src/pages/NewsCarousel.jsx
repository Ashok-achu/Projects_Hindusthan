import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/NewsCarousel.css";

const newsData = [
  { image: "/news/n1.jpeg", title: "OUR NEWS ARTICLE IN", paper: "இந்து தமிழ்" },
  { image: "/news/n2.jpeg", title: "OUR NEWS ARTICLE IN", paper: "தினமணி" },
  { image: "/news/n3.jpeg", title: "OUR NEWS ARTICLE IN", paper: "தினமலர்" },
  { image: "/news/n4.jpeg", title: "OUR NEWS ARTICLE IN", paper: "THE HINDU" },
];

const NewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="news-section">
      <h2 className="news-title">News @ Hindusthan</h2>
      <Slider {...settings}>
        {newsData.map((item, index) => (
          <div key={index} className="news-card">
            <img src={item.image} alt="News" className="news-image" />
            <div className="news-content">
              <h3>{item.title}</h3>
              <p>{item.paper}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default NewsCarousel;
