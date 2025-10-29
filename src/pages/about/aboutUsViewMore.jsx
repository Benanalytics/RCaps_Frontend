import React, { useState } from "react";
import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const AboutUsViewMore = () => {
  const [tabIndex, setTabIndex] = useState(0);
 
  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000,
    
    
  };
  const data = [
    { cover: '/assets/images/catalyzing_continental.png'},
    { cover: '/assets/images/catalyzing_continental.png'},
    { cover: '/assets/images/catalyzing_continental.png'},
  
  ];


  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000,
  };
  const data2 = [
    { cover: '/assets/images/startegic_pillar.png'},
    { cover: '/assets/images/startegic_pillar.png'},
    { cover: '/assets/images/startegic_pillar.png'},
   
  
  ];

  const settings3 = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,      
    autoplaySpeed: 3000,
  };
  const data3 = [
    { cover: '/assets/images/strategic_resilience.png'},
    { cover: '/assets/images/strategic_resilience.png'},
    { cover: '/assets/images/strategic_resilience.png'},
    
  
  ];
 
  return (
    <div className="ben__HomePage">
   <div className="innerBanner_layout relative">
        <div className="max-w-benContainer z_index1 relative">
          <h2 className="gradient_text secondary_content text-center bold semi-bold">
          Selected Thematic Priorities - Guiding Focused Initiatives
          </h2>
        
        </div>
      </div>

      <div className="Catalyzing_Continental thematic relative pt_80 pb_80">
        <div className="max-w-benContainer">
          <div className="Strategic_Content">
            <div className="homeAbout_left">
              <div className="Feature_LayoutMain_heading">
                <div className="heading_topImg text-center">
                  <img
                    src="/assets/images/heading_topIcon.png"
                    alt="Icon"
                    class=""
                  />
                </div>
                <h2 className="secondary_title">
                  Catalyzing Continental Integration: Coordination Hub Functions
                </h2>
                <p className="f16 text-benGray">
                  The Regional Integration Coordination Office (RDRI){" "}
                  <b>
                    serves as the organizational “hub” within the Bank mandated
                    with the implementation of Regional Integration workstream.
                  </b>
                </p>
                <p className="f16 text-benGray mt-5">
                  Specifically, in line with the new{" "}
                  <b>Terms of References for RDRI,</b> which seeks to accelerate
                  the implementation <b>of Integrate Africa</b> and move closer
                  to a <b>One Bank Delivery model,</b> the core functions of
                  RDRI are:
                </p>
              </div>
              <div className="strategic_list">
                <ul>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      Regional Integration <b>strategy development,</b>{" "}
                      programming and mainstreaming;
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      Management of the <b>ADF Regional Operations Envelope;</b>
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      Monitoring and reporting of regional operations{" "}
                      <b>performance;</b>
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      Regional Integration-related{" "}
                      <b>project development and management;</b>
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      Knowledge, analytical products and <b>advocacy;</b>
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      Dialogue and <b>engagement</b> with the AUC, the RECs and
                      other partners.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="homeAbout_right">
            <Slider {...settings}>
                            {data.map((item, index) => (
                              <div className="slider_outer rounded-md" key={index}>
                                    <img  src={item.cover}  alt={item.title} className="slider_img" />
                                 
                              </div>
                            ))}
                          </Slider>
            </div>
          </div>
        </div>
      </div>

      <div className="Strategic_Pillarlayout thematic relative pt_80 pb_80">
        <div className="max-w-benContainer">
          <div className="Strategic_Content">
            <div className="homeAbout_left">
            <Slider {...settings2}>
                            {data2.map((item, index) => (
                              <div className="slider_outer rounded-md" key={index}>
                                    <img  src={item.cover}  alt={item.title} className="slider_img" />
                                 
                              </div>
                            ))}
                          </Slider>
            </div>
            <div class="homeAbout_right">
              <div className="Feature_LayoutMain_heading">
               
                <div className="heading_topImg text-center">
                  <img
                    src="/assets/images/heading_topIcon.png"
                    alt="Icon"
                    class=""
                  />
                </div>
       
                <h2 className="secondary_title">
                  Strategic Pillars for Seamless Regional Integration
                </h2>
                <p className="f16 text-benGray">
                  The{" "}
                  <b>
                    Regional Integration Strategy Framework (RISF) 2018 – 2025,
                    approved by the Board in March 2018,
                  </b>{" "}
                  lays-out the strategies for the Bank in accelerating Regional
                  Integration.{" "}
                </p>
                <p className="f16 text-benGray mt-5">
                  The RISF is based on <b>Three Inter-dependent Pillars:</b>{" "}
                </p>
              </div>
              <div className="strategic_list">
                <ul>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      <b>Pillar 1:</b> Infrastructure Connectivity –
                      strengthening regional connectivity;
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      <b> Pillar 2:</b> Trade and Investment – support of the
                      BIAT Action Plan, which focuses on market expansion &
                      integration, trade facilitation, transport logistics,
                      transit management, investment linkages, investment
                      competitiveness and industrialization, etc.;
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      <b>Pillar 3:</b> Financial Integration – deals with
                      harmonization/linkage of the financial sector to enable
                      access to a deeper pool of funding/investments, payments
                      systems, etc., while providing opportunities to invest,
                      among other benefits.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="Strategizing_Resilience thematic relative pt_80 pb_80">
        <div className="max-w-benContainer">
          <div className="Strategic_Content">
            <div className="homeAbout_left">
              <div className="Feature_LayoutMain_heading">
                <div className="heading_topImg text-center">
                  <img
                    src="/assets/images/heading_topIcon.png"
                    alt="Icon"
                    class=""
                  />
                </div>
                <h2 className="secondary_title">
                  Strategizing Resilience: Shaping Africa's Institutional
                  Strengths
                </h2>
              </div>
              <div className="strategic_list">
                <ul>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      Fragility is identified as a special area of emphasis of
                      the Bank’s Ten-Year Strategy. The new{" "}
                      <b>
                        Strategy for Addressing Fragility and Building
                        Resilience in Africa (2022-2026)
                      </b>{" "}
                      offers a roadmap for building more resilient institutions,
                      economies, and societies across the continent over the
                      next five years.
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      The Transition States Coordination Office (RDTS) provides{" "}
                      <b>
                        critical inputs into programming and operational
                        documents
                      </b>{" "}
                      in the area of fragility and resilience.
                    </span>
                  </li>
                  <li>
                    <span className="tick_icon">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="100%"
                        height="100%"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#7C86FF"
                          stroke="none"
                        >
                          <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z" />
                          <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16 text-benGray">
                      RDTS also manages the <b>Transition Support Facility,</b>{" "}
                      established in 2008 as an operationally autonomous entity,
                      that seeks to better address the needs and legitimate
                      demands from states affected by fragility. More than UA 2
                      billion has been mobilized since.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
            <div class="homeAbout_right">
            <Slider {...settings3}>
                            {data3.map((item, index) => (
                              <div className="slider_outer rounded-md" key={index}>
                                    <img  src={item.cover}  alt={item.title} className="slider_img" />
                                 
                              </div>
                            ))}
                          </Slider>
            </div>
          </div>
        </div>
      </div>

  
    </div>
  );
};

export default AboutUsViewMore;
