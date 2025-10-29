import React, { useRef, useState } from 'react';
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';

const CorporateAnalytics = () => {
  const ref = useRef();
  const navigate = useNavigate(); 


  const data = [
    { cover: '/assets/images/Geospatial_home.png', title: 'image1' },
    { cover: '/assets/images/Lending_home.png', title: 'image2' },
    { cover: '/assets/images/OverView_home.png', title: 'image3' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,       // Add autoplay property
    autoplaySpeed: 3000,
  };

  const redirectToLoginPage = () => {
    // Use navigate to navigate to the login page
    navigate('/login'); // Replace '/login' with the actual URL of your login page
  };

  return (
    <div className="CoporateAnalysis relative">
    <div className="CoporateAnalysis_Content">
      <div className="CoporateAnalysis_left">
        <div className="CoporateAnalysis_leftContent">
          <div className="headimg_rightImg">
            <Slider {...settings}>
                {data.map((item, index) => (
                    <div key={index}>
                    <img
                        src={item.cover}
                    alt={item.title}
                    className="headimg_rightImg"
                    />
                    </div>
                ))}
                </Slider>
            </div>
        </div>
      </div>
      <div className="CoporateAnalysis_right pt_80 pb_80">
        <div className="homeAbout_leftContent flex flex-col justify-center h100">
          <div className="heading_topImg">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>

          <h2 className="secondary_title">
            RDVP Corporate Analytics and Performance System (RCAPS)
          </h2>
          <p className="f16 text-benGray">
            The RDVP Reporting and Analytics System supports the Regional
            Development, Integration and Business Delivery (RDVP) division
            of the African Development Bank (AfDB). It provides real-time
            reporting and analysis of the RDVP's project and program
            portfolio, focusing on key performance indicators (KPIs) and
            lending delivery.
          </p>
          <p class="mt-5 f16 text-benGray">
            The RDVP Reporting and Analytics System supports the Regional
            Development, Integration and Business Delivery (RDVP) division
            of the African Development Bank (AfDB).
          </p>
          <div className="mt-15">
            <button class="gradient_btn themebtn btn text-white rounded-md f14 flex gap-x-2 items-center"   onClick={redirectToLoginPage}>
              Get Started  <i class="ri-arrow-right-line f16"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};



export default CorporateAnalytics;
