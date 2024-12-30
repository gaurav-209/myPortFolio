import React from "react";
import Slider from "react-slick";
import "./Card3.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState, useEffect } from "react";

const NextArrow = ({ onClick }) => {
  return (
    <div className="arrow next" onClick={onClick}>
      &#8250; {/* Unicode for a right arrow */}
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = ({ onClick }) => {
  return (
    <div className="arrow prev" onClick={onClick}>
      &#8249; {/* Unicode for a left arrow */}
    </div>
  );
};

const Card3 = ({ data = [] }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size to toggle slider
  useEffect(() => {
    const updateScreenSize = () => {
      setIsMobile(window.innerWidth < 1025); // 1024px breakpoint for large screens
    };

    updateScreenSize();
    window.addEventListener("resize", updateScreenSize);

    return () => window.removeEventListener("resize", updateScreenSize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 8, // Number of slides visible at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    nextArrow: <NextArrow />, // Add Next Arrow
    prevArrow: <PrevArrow />,
    responsive: [
      
      {
        breakpoint: 1025, // Adjust for medium screens
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 600, // Adjust for small screens
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      {Array.isArray(data) && data.length > 0 ? (
        data.map((item, index) => (
          <div className="card3" key={index}>
            <img src={item.imagesrc} alt={item.alt} className="card-image" />
            <div className="title">{item.title}</div>
            <div className="desc2">{item.desc}</div>
          </div>
        ))
      ) : (
        <div className="fallback">
          <p>No data available</p>
        </div>
      )}
    </Slider>
  );
};

export default Card3;
