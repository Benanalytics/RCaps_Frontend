import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const RDVP = () => {
  const ref = useRef();


  const data = [
    { cover: '/assets/images/Slide1.jpg', title: 'image1' },
    { cover: '/assets/images/Slide3.jpg', title: 'image2' },
    { cover: '/assets/images/SlideX.jpg', title: 'image3' },
    { cover: '/assets/images/SlideY.jpg', title: 'image4' },
    { cover: '/assets/images/Slide9.jpg', title: 'image5' },


  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000,
  };

  return (
    <div>
        <div className="Home_aboutLayout relative">
          <div className="homeAbout_Content">
            <div className="homeAbout_left pt_80 pb_80">
              <div className='homeAbout_leftContent flex flex-col justify-center  h100'>
                  <div className="heading_topImg">
                    <img src="/assets/images/heading_topIcon.png" alt="Icon" class="" />
                  </div>
                  <h2 className="secondary_title">About RCAPS</h2>
                  <p>RCAPS, an integral part of the African Development Bank's RDVP Complex, drives corporate, operational insight and effectiveness across Africa. Design to stands as a inspiration of data-driven progress and decision-making in the Bank’s development efforts</p><p class="mt-5">Established as a cornerstone of the African Development Bank (AfDB), the RDVP embodies our commitment to driving sustainable economic development and regional integration across the continent. Our dedication to Africa’s progress..</p>
                  <div className='mt-15'>
                    <button class="gradient_btn themebtn btn text-white rounded-md f14 flex gap-x-2 items-center">View More <i class="ri-arrow-right-line f16"></i></button>
                  </div>
              </div>
            </div>
            <div className="homeAbout_right">
              <Slider {...settings}>
                {data.map((item, index) => (
                  <div className='slider_outer' key={index}>
                    <img
                        src={item.cover}
                    alt={item.title}
                      className="headimg_rightImg"
                    />
                  </div>
                ))}
              </Slider>
            {/* <Slider {...settings}>
    {data.map((item, index) => (
      <div key={index}>
        <img
          src={item.cover}
          alt={item.title}
          className=""
        />
      </div>
    ))}
  </Slider> */}
            {/* <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.cover}
                    alt={item.title}
                    className=""
                  />
                </div>
              ))}
            </Slider> */}
            {/* <Slider {...settings}>
              {data.map((item, index) => (
                <div key={index}>
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="headimg_rightImg"
                  />
                </div>
              ))}
            </Slider> */}
          </div>
         </div>
       </div>

    </div>
  );
};



export default RDVP;
