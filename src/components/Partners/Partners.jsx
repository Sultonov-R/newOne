import React from "react";
import "./Partners.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Partners() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 2, 
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="partner_wrapper">
      <div className="partners">
        <h2>Hamkorlarimiz</h2>
      </div>
      <div>
        <Slider {...settings}>
          <div className="partners_detailed">
            <img src="../../gr_1.png" alt="first partner" />
            <p>Africtivistes</p>
          </div>
          <div className="partners_detailed">
            <img src="../../gr_2.png" alt="second partner" />
            <p>ecdpm</p>
          </div>
          <div className="partners_detailed">
            <img src="../../gr_3.png" alt="third partner" />
            <p>Goree Institute</p>
          </div>
          <div className="partners_detailed">
            <p>Code for Africa</p>
          </div>
          <div className="partners_detailed">
            <p>DWF</p>
          </div>
          <div className="partners_detailed">
            <img src="../../gr_4.png" alt="fourth partner" />
            <p>EPD</p>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Partners;
