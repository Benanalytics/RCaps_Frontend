import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RDVP from "components/home/RDVP";
import RDVPMandates from "components/home/RDVPMandates";
import LendingApprovalTrend from "./home/LendingApprovalTrend";
import AdbPublic from "./home/AdbPublic";
import AdbPrivate from "./home/AdbPrivate";
import Tsfincluding from "./home/Tsfincluding";
import OtherProgram from "./home/OtherProgram";
import CorporateAnalytics from "components/home/Slider2";
import { instance } from "utls/instances";
import $ from "jquery";

const Home = () => {
  const [chartData, setChartData] = useState([]);
  const [selectedRange, setSelectedRange] = useState("Max");
  const [UaADBData, setUaADBData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await instance.get(
        `DataManagement/HomePage/GetFinacialTrajectories`,
        {
          params: {
            timeInterval: selectedRange,
          },
        }
      );
      const data = response.data;
      setChartData(data);
      setUaADBData(data.financialDataModels);
    };

    fetchData();
  }, [selectedRange]);

  const handleRangeSelectorChange = (range) => {
    setSelectedRange(range);
  };


  const totalUaInMillionsAdbPublic = UaADBData.reduce(
    (total, item) => total + item.uaInMillionsAdbPublic,
    0
  ).toFixed(1);
  const totalUaInMillionsAdbPrivate = UaADBData.reduce(
    (total, item) => total + item.uaInMillionsAdbPrivate,
    0
  ).toFixed(1);
  const totalUaInMillionsAdfIncludingTsf = UaADBData.reduce(
    (total, item) => total + item.uaInMillionsAdfIncludingTsf,
    0
  ).toFixed(1);
  const totalUaInMillionsOthers = UaADBData.reduce(
    (total, item) => total + item.uaInMillionsOthers,
    0
  ).toFixed(1);

  // const totaladbYOY = UaADBData.reduce(
  //   (total, item) => total + item.adbPublicYOY +item.adbPrivateYOY +item.adfIncludingTsfYOY +item.othersYOY ,
  //   0
  // ).toFixed(1);

  const data = [
    { cover: "/assets/images/CompanyProfileMac.png", title: "image1" },
    { cover: "/assets/images/CompanyProfileMac.png", title: "image2" },
    { cover: "/assets/images/CompanyProfileMac.png", title: "image3" },
    { cover: "/assets/images/CompanyProfileMac.png", title: "image4" },
    { cover: "/assets/images/CompanyProfileMac.png", title: "image5" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };
  return (
    <div className="ben__HomePage">
      <body
        data-spy="scroll"
        data-target="#navbar-example"
        className="scrollbar"
      >
        <div class="wrapper">
        
         
            <div className="HomeBanner_layout">
              <div className="max-w-benContainer">
                <div class="HomeBanner_content">
                  <div class="HomeBanner_leftpanel">
                    <div class="HomeBanner_title">
                      <h1 className="f26 text-white semibold">
                        Empowering Africa's development with Data-Driven
                        Insights –{" "}
                        <span className="gradient_text">
                          RDVP Corporate Analytics and Performance System
                        </span>
                      </h1>
                      <p className="f16 text-white semibold">
                        By democratizing analytics, we are advancing the Bank's
                        development operations with insights to enhance project
                        efficacy and support the economic transformation of
                        African nations. This approach broadens access to
                        analytics, enabling more stakeholders to contribute to
                        and benefit from data-driven decision-making.{" "}
                      </p>
                      <div className="flex justify-end w100">
                        <button class="gradient_btn themebtn btn text-white rounded-md f14 flex gap-x-2 items-center">
                          Read More <i class="ri-arrow-right-line f16"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                  {/* <div class="HomeBanner_img">
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
            </div> */}
                </div>
              </div>
            </div>
          
          
         
            <RDVP />
         
        
            <CorporateAnalytics />
        
          
            <div className="Feature_Layout pt_80 pb_80">
              <div className="max-w-benContainer">
                <div className="Feature_LayoutMain_heading text-center">
                  <div className="heading_topImg text-center">
                    <img
                      src="/assets/images/heading_topIcon.png"
                      alt="Icon"
                      class=""
                    />
                  </div>
                  <h2 className="secondary_title">Our Features</h2>
                  <p className="f16 text-benGray">
                    RCAPS delivers real-time reporting, comprehensive KPI
                    analysis, and in-depth insights into <br></br>lending and
                    portfolio performance, fostering impactful decision-making
                    and strategic resource allocation.{" "}
                  </p>
                </div>
                <div>
                  <div className="features_cards">
                    <div className="features_col Homebg_ltbrown rounded-md">
                      <div className="features_col_img">
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
                            fill="#EDBA74"
                            stroke="none"
                          >
                            <path d="M4565 4953 c-121 -44 -205 -118 -258 -231 -29 -61 -32 -76 -32 -162 0 -52 2 -108 5 -124 5 -28 0 -32 -347 -238 l-353 -210 -37 32 c-49 44 -130 80 -209 93 -155 27 -321 -47 -419 -186 l-20 -29 -313 154 -313 153 4 30 c8 57 -12 149 -48 221 -125 254 -461 310 -670 113 -101 -96 -150 -241 -125 -370 7 -35 13 -73 14 -85 1 -17 -83 -84 -401 -322 l-402 -300 -40 18 c-207 100 -457 7 -560 -209 -34 -71 -36 -83 -36 -171 0 -108 16 -161 73 -249 111 -168 350 -229 537 -137 88 44 154 112 199 206 29 61 31 71 29 170 -1 58 -3 118 -5 133 -3 27 21 46 402 331 l405 302 65 -24 c56 -21 78 -23 160 -20 104 5 175 30 239 83 l33 29 358 -179 358 -179 12 -40 c29 -99 120 -198 228 -249 52 -24 83 -32 148 -35 237 -13 425 151 450 392 l7 65 378 226 c208 124 382 225 387 225 5 0 34 -11 64 -25 152 -69 346 -28 467 100 201 212 140 546 -123 675 -62 31 -80 35 -165 37 -73 3 -108 -1 -146 -14z" />
                            <path d="M4366 3260 c-15 -5 -37 -17 -48 -27 -50 -45 -48 31 -48 -1534 0 -1448 0 -1462 20 -1494 39 -63 53 -65 407 -65 300 0 320 1 351 20 18 11 41 34 52 52 20 33 20 54 20 1488 0 1401 -1 1457 -19 1490 -10 19 -34 44 -52 55 -32 19 -54 20 -344 22 -170 1 -323 -2 -339 -7z" />
                            <path d="M1489 2957 c-19 -12 -42 -38 -51 -57 -17 -33 -18 -118 -18 -1340 0 -1222 1 -1307 18 -1340 9 -19 32 -45 51 -57 34 -23 38 -23 360 -23 306 0 328 1 358 20 18 10 40 34 50 52 17 31 18 101 18 1348 0 1247 -1 1317 -18 1348 -10 18 -32 42 -50 52 -30 19 -52 20 -358 20 -322 0 -326 0 -360 -23z" />
                            <path d="M2913 2390 c-18 -10 -40 -34 -50 -52 -17 -31 -18 -90 -18 -1063 0 -973 1 -1032 18 -1063 10 -18 32 -42 50 -52 30 -19 52 -20 358 -20 322 0 326 0 360 23 74 49 69 -26 69 1112 0 1138 5 1063 -69 1112 -34 23 -38 23 -360 23 -306 0 -328 -1 -358 -20z" />
                            <path d="M68 1823 c-14 -9 -36 -33 -47 -54 -21 -36 -21 -45 -21 -780 0 -725 1 -745 20 -777 11 -18 34 -41 52 -52 31 -19 51 -20 351 -20 354 0 368 2 407 65 20 32 20 48 20 784 0 830 3 791 -63 831 -30 19 -52 20 -362 20 -289 -1 -333 -3 -357 -17z" />
                          </g>
                        </svg>
                      </div>
                      <h3 className="f18 text-black text-bold semi-bold">
                        Custom Analytics
                      </h3>
                      <p className="semi-bold f16 text-benGray">
                        Adaptive tools for strategic decisions.
                      </p>
                    </div>
                    <div className="features_col Homebg_ltRed rounded-md">
                      <div className="features_col_img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M20 3.75C12.4414 3.75 6.25 9.94141 6.25 17.5V25C6.25 26.6162 7.30469 27.9932 8.75 28.5156V28.75C8.75 32.1826 11.5674 35 15 35H16.6016C17.0361 35.7471 17.8271 36.25 18.75 36.25H21.25C22.627 36.25 23.75 35.127 23.75 33.75C23.75 32.373 22.627 31.25 21.25 31.25H18.75C17.8271 31.25 17.0361 31.7529 16.6016 32.5H15C12.9297 32.5 11.25 30.8203 11.25 28.75H13.75V17.5H8.75C8.75 11.3086 13.8086 6.25 20 6.25C26.1914 6.25 31.25 11.3086 31.25 17.5H26.25V28.75H30C32.0557 28.75 33.75 27.0557 33.75 25V17.5C33.75 9.94141 27.5586 3.75 20 3.75ZM8.75 20H11.25V26.25H10C9.30664 26.25 8.75 25.6934 8.75 25V20ZM28.75 20H31.25V25C31.25 25.6934 30.6934 26.25 30 26.25H28.75V20Z"
                            fill="#FD8B8B"
                          />
                        </svg>
                      </div>
                      <h3 className="f18 text-black text-bold semi-bold">
                        Analytics Support
                      </h3>
                      <p className="semi-bold f16 text-benGray">
                        Uninterrupted, informed data analysis.
                      </p>
                    </div>
                    <div className="features_col Homebg_ltblue rounded-md">
                      <div className="features_col_img">
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
                            fill="#21A7F9"
                            stroke="none"
                          >
                            <path d="M2642 5027 c-43 -13 -116 -78 -132 -117 l-12 -30 -706 0 c-524 0 -715 -3 -746 -12 -55 -16 -138 -99 -154 -154 -8 -27 -12 -117 -12 -257 l0 -215 -88 -7 c-123 -9 -305 -40 -382 -65 -147 -49 -255 -125 -302 -212 l-23 -43 0 -1355 0 -1355 23 -42 c46 -87 156 -165 302 -213 77 -25 259 -56 382 -65 l88 -7 0 -215 c0 -140 4 -230 12 -257 16 -55 99 -138 154 -154 31 -9 222 -12 746 -12 l706 0 12 -30 c28 -68 129 -130 210 -130 81 0 182 62 210 130 l12 30 706 0 c524 0 715 3 746 12 55 16 138 99 154 154 7 24 12 100 12 177 l0 136 189 3 c207 3 216 6 265 72 21 27 21 38 21 486 0 448 0 459 -21 486 -49 66 -58 69 -265 72 l-189 3 0 79 0 79 189 3 c207 3 216 6 265 72 21 27 21 38 21 486 0 448 0 459 -21 486 -49 66 -58 69 -265 72 l-189 3 0 79 0 79 189 3 c207 3 216 6 265 72 21 27 21 38 21 486 0 448 0 459 -21 486 -49 66 -58 69 -265 72 l-189 3 0 136 c0 77 -5 153 -12 177 -16 55 -99 138 -154 154 -31 9 -222 12 -746 12 l-706 0 -12 30 c-17 42 -90 104 -138 118 -47 14 -105 14 -150 -1z m133 -172 c16 -15 25 -36 25 -55 0 -19 -9 -40 -25 -55 -15 -16 -36 -25 -55 -25 -19 0 -40 9 -55 25 -16 15 -25 36 -25 55 0 19 9 40 25 55 15 16 36 25 55 25 19 0 40 -9 55 -25z m-265 -165 c28 -68 129 -130 210 -130 81 0 182 62 210 130 l12 30 705 0 704 0 24 -25 c24 -23 25 -29 25 -159 l0 -135 -189 -3 c-207 -3 -216 -6 -265 -72 -21 -27 -21 -38 -21 -486 0 -448 0 -459 21 -486 49 -66 58 -69 265 -72 l189 -3 0 -79 0 -79 -189 -3 c-207 -3 -216 -6 -265 -72 -21 -27 -21 -38 -21 -486 0 -448 0 -459 21 -486 49 -66 58 -69 265 -72 l189 -3 0 -79 0 -79 -189 -3 c-207 -3 -216 -6 -265 -72 -21 -27 -21 -38 -21 -486 0 -448 0 -459 21 -486 49 -66 58 -69 265 -72 l189 -3 0 -135 c0 -130 -1 -136 -25 -159 l-24 -25 -704 0 -705 0 -12 30 c-28 68 -129 130 -210 130 -81 0 -182 -62 -210 -130 l-12 -30 -705 0 -704 0 -24 25 c-25 24 -25 24 -25 239 l0 214 88 7 c123 9 305 40 382 65 145 48 256 127 303 215 19 35 22 60 25 197 l4 158 159 0 159 0 0 55 c0 69 18 113 59 148 65 54 146 46 226 -25 l48 -42 164 167 164 168 -41 46 c-69 78 -77 159 -23 224 35 41 79 59 148 59 l55 0 0 240 0 240 -55 0 c-69 0 -113 18 -148 59 -54 65 -46 146 25 226 l42 48 -167 164 -168 164 -46 -40 c-78 -70 -159 -78 -224 -24 -41 35 -59 79 -59 148 l0 55 -159 0 -159 0 -4 158 c-4 179 -13 208 -90 283 -48 46 -195 121 -283 143 -80 20 -230 43 -337 51 l-88 7 0 214 c0 215 0 215 25 239 l24 25 704 0 705 0 12 -30z m2370 -850 l0 -400 -400 0 -400 0 0 400 0 400 400 0 400 0 0 -400z m-4000 80 l0 -160 80 0 80 0 0 161 0 161 83 -7 c195 -15 335 -48 440 -103 73 -38 117 -87 117 -132 0 -94 -159 -179 -416 -221 -121 -21 -514 -18 -634 4 -324 60 -465 180 -349 297 84 84 310 148 562 158 l37 2 0 -160z m-559 -374 c142 -64 302 -93 559 -103 275 -10 542 26 695 93 44 19 86 38 93 41 9 4 12 -39 12 -198 0 -178 -2 -207 -18 -231 -50 -76 -185 -134 -398 -169 -106 -18 -502 -18 -608 0 -199 33 -346 93 -392 160 -23 35 -24 40 -24 238 0 112 2 203 4 203 2 0 36 -15 77 -34z m1699 -141 c20 -59 82 -128 148 -163 84 -45 164 -52 251 -22 l64 21 59 -59 59 -59 -21 -64 c-53 -154 20 -322 169 -390 l51 -24 0 -87 0 -86 -35 -12 c-59 -20 -128 -82 -163 -148 -45 -84 -52 -164 -22 -251 l21 -64 -59 -59 -59 -59 -64 21 c-87 30 -167 23 -251 -22 -66 -35 -128 -104 -148 -163 l-12 -35 -84 0 -84 0 0 163 0 162 93 1 c239 1 443 154 523 394 26 76 26 244 0 320 -84 249 -315 414 -561 398 l-55 -3 0 163 0 162 84 0 84 0 12 -35z m64 -483 c91 -42 149 -100 194 -190 35 -72 37 -81 37 -172 0 -91 -2 -100 -37 -172 -45 -90 -103 -148 -192 -189 -65 -31 -171 -47 -220 -35 -25 6 -26 9 -26 86 l0 79 50 -6 c78 -9 136 12 195 71 101 102 101 230 0 332 -59 59 -117 80 -195 71 l-50 -6 0 79 c0 53 4 80 13 84 6 3 47 4 89 2 60 -3 93 -11 142 -34z m2796 -362 l0 -400 -400 0 -400 0 0 400 0 400 400 0 400 0 0 -400z m-4559 346 c156 -72 341 -101 639 -101 298 0 483 29 639 101 41 19 75 34 77 34 2 0 4 -91 4 -202 0 -177 -2 -206 -18 -230 -50 -76 -185 -134 -398 -169 -121 -21 -514 -18 -634 4 -189 35 -322 92 -366 156 -23 35 -24 41 -24 238 0 112 2 203 4 203 2 0 36 -15 77 -34z m1654 -291 c50 -49 15 -135 -55 -135 -19 0 -40 9 -55 25 -50 49 -15 135 55 135 19 0 40 -9 55 -25z m-1654 -349 c156 -72 341 -101 639 -101 298 0 483 29 639 101 41 19 75 34 77 34 2 0 4 -91 4 -202 0 -177 -2 -206 -18 -230 -50 -76 -185 -134 -398 -169 -106 -18 -502 -18 -608 0 -199 33 -346 93 -392 160 -23 35 -24 40 -24 238 0 112 2 203 4 203 2 0 36 -15 77 -34z m4559 -986 l0 -400 -400 0 -400 0 0 400 0 400 400 0 400 0 0 -400z m-4559 346 c142 -64 302 -93 559 -103 278 -10 541 26 695 93 44 19 86 38 93 41 9 4 12 -39 12 -199 0 -199 -1 -204 -24 -239 -46 -67 -193 -127 -392 -160 -106 -18 -502 -18 -608 0 -213 35 -348 93 -398 169 -16 24 -18 53 -18 230 0 111 2 202 4 202 2 0 36 -15 77 -34z m2454 -1251 c50 -49 15 -135 -55 -135 -41 0 -80 39 -80 80 0 41 39 80 80 80 19 0 40 -9 55 -25z" />
                            <path d="M4240 4000 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z" />
                            <path d="M4240 3680 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z" />
                            <path d="M4240 2720 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z" />
                            <path d="M4240 2400 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z" />
                            <path d="M4240 1440 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z" />
                            <path d="M4240 1120 l0 -80 240 0 240 0 0 80 0 80 -240 0 -240 0 0 -80z" />
                          </g>
                        </svg>
                      </div>
                      <h3 className="f18 text-black text-bold semi-bold">
                        Data Integrity
                      </h3>
                      <p className="semi-bold text-benGray">
                        Security for operational support.
                      </p>
                    </div>
                    <div className="features_col Homebg_green rounded-md">
                      <div className="features_col_img">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="100%"
                          height="100%"
                          viewBox="0 0 40 41"
                          fill="none"
                        >
                          <path
                            d="M15 2.82812C10.1807 2.82812 6.25 6.75879 6.25 11.5781C6.25 14.5908 7.78809 17.2666 10.1172 18.8438C5.65918 20.7578 2.5 25.1816 2.5 30.3281H5C5 24.791 9.46289 20.3281 15 20.3281C16.7188 20.3281 18.3203 20.7773 19.7266 21.5391C18.3398 23.2578 17.5 25.4551 17.5 27.8281C17.5 33.3359 21.9922 37.8281 27.5 37.8281C33.0078 37.8281 37.5 33.3359 37.5 27.8281C37.5 22.3203 33.0078 17.8281 27.5 17.8281C25.3174 17.8281 23.2861 18.5459 21.6406 19.7422C21.0889 19.3955 20.4883 19.1025 19.8828 18.8438C22.2119 17.2666 23.75 14.5908 23.75 11.5781C23.75 6.75879 19.8193 2.82812 15 2.82812ZM15 5.32812C18.4668 5.32812 21.25 8.11133 21.25 11.5781C21.25 15.0449 18.4668 17.8281 15 17.8281C11.5332 17.8281 8.75 15.0449 8.75 11.5781C8.75 8.11133 11.5332 5.32812 15 5.32812ZM27.5 20.3281C31.6553 20.3281 35 23.6729 35 27.8281C35 31.9834 31.6553 35.3281 27.5 35.3281C23.3447 35.3281 20 31.9834 20 27.8281C20 23.6729 23.3447 20.3281 27.5 20.3281ZM31.6016 24.4297L27.5 28.5312L24.6484 25.6797L22.8516 27.4766L26.6016 31.2266L27.5 32.0859L28.3984 31.2266L33.3984 26.2266L31.6016 24.4297Z"
                            fill="#4FCC8F"
                          />
                        </svg>
                      </div>
                      <h3 className="f18 text-black text-bold semi-bold">
                        Decision Efficiency
                      </h3>
                      <p className="semi-bold f16 text-benGray">
                        Cohesive analytical environment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        
         
            <div className="Strategic_layout pt_80 pb_80">
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
                        Strategic Analytics Suite
                      </h2>
                      <p className="f16 text-benGray">
                        At the core of the Bank's operations, our analytics
                        integrate people metrics, resource utilization, and
                        performance data to drive development activities and
                        enhance decision science.
                      </p>
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
                              Optimizing talent for productivity through People
                              Analytics
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
                              Sharpening the Bank's impact with Performance
                              Analytics.
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
                              Supporting Bank's Strategic Initiatives with
                              Data-Driven Decision Science.
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
                              Delivering Analytics for operational efficiency
                              and geographic reach.
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div class="homeAbout_right">
                    <img
                      src="/assets/images/Strategic_right.png"
                      alt="Icon"
                      class=""
                    />
                    {/* <div class="headimg_rightImg">
                     
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
        
         
            <div className="lendingApproval_layout relative pt_80 pb_80">
              <div className="max-w-benContainer">
                <div className="Feature_LayoutMain_heading">
                  <div className="heading_topImg text-center">
                    <img
                      src="/assets/images/heading_topIcon.png"
                      alt="Icon"
                      class=""
                    />
                  </div>
                  <h2 className="secondary_title">
                    Lending Approval Trend Analysis
                  </h2>
                  <p className="f16 text-benGray">
                    Year-Over-Year Visualization of Approval Volumes and
                    Patterns.
                  </p>
                </div>
                <br></br>
                <div className="lendingApproval_Content">
                  <div className="lendingApproval_trendBtn">
                    <button
                      onClick={() => handleRangeSelectorChange("10D")}
                      className={`mr-2 ${
                        selectedRange === "10D" ? "active" : ""
                      }  btn btn-primary`}
                    >
                      10D
                    </button>
                    {/* <button 
          onClick={() => handleRangeSelectorChange("5D")}
          className={`mr-2 ${selectedRange === "5D" ? "active" : ""}  btn btn-primary`}
        >
          5D
        </button> */}
                    <button
                      onClick={() => handleRangeSelectorChange("1M")}
                      className={`mr-2 ${
                        selectedRange === "1M" ? "active" : ""
                      } btn btn-primary`}
                    >
                      1M
                    </button>
                    <button
                      onClick={() => handleRangeSelectorChange("3M")}
                      className={`mr-2 ${
                        selectedRange === "3M" ? "active" : ""
                      } btn btn-primary`}
                    >
                      3M
                    </button>
                    {/* <button
          onClick={() => handleRangeSelectorChange("YTD")}
          className={`mr-2 ${selectedRange === "YTD" ? "active" : ""} btn btn-primary`}
        >
          YTD
        </button> */}

                    <button
                      onClick={() => handleRangeSelectorChange("1Y")}
                      className={`mr-2 ${
                        selectedRange === "1Y" ? "active" : ""
                      } btn btn-primary`}
                    >
                      1Y
                    </button>

                    <button
                      onClick={() => handleRangeSelectorChange("3Y")}
                      className={`mr-2 ${
                        selectedRange === "3Y" ? "active" : ""
                      } btn btn-primary`}
                    >
                      3Y
                    </button>

                    <button
                      onClick={() => handleRangeSelectorChange("5Y")}
                      className={`mr-2 ${
                        selectedRange === "5Y" ? "active" : ""
                      } btn btn-primary`}
                    >
                      5Y
                    </button>

                    <button
                      onClick={() => handleRangeSelectorChange("10Y")}
                      className={`mr-2 ${
                        selectedRange === "10Y" ? "active" : ""
                      } btn btn-primary`}
                    >
                      10Y
                    </button>

                    <button
                      onClick={() => handleRangeSelectorChange("Max")}
                      className={`mr-2 ${
                        selectedRange === "Max" ? "active" : ""
                      } btn btn-primary`}
                    >
                      Max
                    </button>

                    <button
                      onClick={() => handleRangeSelectorChange("Projection")}
                      className={`mr-2 ${
                        selectedRange === "Projection" ? "active" : ""
                      } btn btn-primary`}
                    >
                      Projection
                    </button>
                  </div>
                  <div className="LendingApproval_Left">
                    <LendingApprovalTrend data={UaADBData} />
                  </div>

                  <div class="LendingApproval_right">
                    <div class="LendingApproval_heading">
                      <h6 className="f12">FINANCIAL TRAJECTORIES OF BANK</h6>
                      <p className="f12">
                        YTD and Growth Trends Across Instruments
                      </p>
                    </div>

                    <div className="LendingApproval_data">
                      <div className="lending_Value lending_YTD">
                        <p
                          className={`f15 semi-bold text-bold ${
                            chartData.ytd < 0 ? "text-red" : "text-green"
                          }`}
                        >
                          {chartData.ytd}%
                        </p>
                        <div class="flex items-center gap-x-1">
                          <p className="f12 semi-bold text-bold">YTD </p>
                          {chartData.ytd < 0 ? (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.0"
                                width="11"
                                height="11"
                                viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g
                                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                  fill="#F62626"
                                  stroke="none"
                                >
                                  <path d="M63 4663 c35 -60 609 -1052 1276 -2206 668 -1153 1217 -2097 1221 -2097 4 0 553 944 1221 2097 667 1154 1241 2146 1276 2206 l62 107 -2559 0 -2559 0 62 -107z"></path>
                                </g>
                              </svg>
                            </span>
                          ) : (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.0"
                                width="11"
                                height="11"
                                viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g
                                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                  fill="#138A77"
                                  stroke="none"
                                >
                                  <path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path>
                                </g>
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="lending_Value lending_Cagr">
                        <p
                          className={`f15 semi-bold text-bold ${
                            chartData.cagr < 0 ? "text-red" : "text-green"
                          }`}
                        >
                          {chartData.cagr}%
                        </p>
                        <div class="flex items-center gap-x-1">
                          <p className="f12 semi-bold text-bold"> CAGR </p>
                          {chartData.cagr < 0 ? (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.0"
                                width="11"
                                height="11"
                                viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g
                                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                  fill="#F62626"
                                  stroke="none"
                                >
                                  <path d="M63 4663 c35 -60 609 -1052 1276 -2206 668 -1153 1217 -2097 1221 -2097 4 0 553 944 1221 2097 667 1154 1241 2146 1276 2206 l62 107 -2559 0 -2559 0 62 -107z"></path>
                                </g>
                              </svg>
                            </span>
                          ) : (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.0"
                                width="11"
                                height="11"
                                viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g
                                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                  fill="#138A77"
                                  stroke="none"
                                >
                                  <path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path>
                                </g>
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="lending_Value lending_Cagr">
                        <p
                          className={`f15 semi-bold text-bold ${
                            chartData.totalYoy < 0 ? "text-red" : "text-green"
                          }`}
                        >
                          {chartData.totalYoy}%
                        </p>
                        <div class="flex items-center gap-x-1">
                          <p className="f12 semi-bold text-bold"> YOY </p>
                          {chartData.totalYoy < 0 ? (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.0"
                                width="11"
                                height="11"
                                viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g
                                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                  fill="#F62626"
                                  stroke="none"
                                >
                                  <path d="M63 4663 c35 -60 609 -1052 1276 -2206 668 -1153 1217 -2097 1221 -2097 4 0 553 944 1221 2097 667 1154 1241 2146 1276 2206 l62 107 -2559 0 -2559 0 62 -107z"></path>
                                </g>
                              </svg>
                            </span>
                          ) : (
                            <span>
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                version="1.0"
                                width="11"
                                height="11"
                                viewBox="0 0 512.000000 512.000000"
                                preserveAspectRatio="xMidYMid meet"
                              >
                                <g
                                  transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                                  fill="#138A77"
                                  stroke="none"
                                >
                                  <path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path>
                                </g>
                              </svg>
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    <div class="list_dataContent">
                      <ul>
                        <li>
                          <div class="flex items-center financial_listContent">
                            <div class="list_heading f12 text-benGray">
                              ADB Public
                            </div>
                            <div class="list_graph">
                              <AdbPublic data={UaADBData} />
                            </div>
                            <div class="list_data">
                              <div class="f13 text-benGray">
                                {" "}
                                UA{" "}
                                {new Intl.NumberFormat("en-IN").format(
                                  totalUaInMillionsAdbPublic
                                )}{" "}
                                m
                              </div>
                              {/* UA {new Intl.NumberFormat('en-IN').format(combinedUAProjectOtherData.totalUAMillion)} m */}
                              <div
                                className="f12"
                                style={{
                                  color:
                                    chartData.adbPublicYOY < 0
                                      ? "red"
                                      : "green",
                                }}
                              >
                                {chartData.adbPublicYOY}%
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center financial_listContent">
                            <div class="list_heading f12 text-benGray">
                              ADB Private
                            </div>
                            <div class="list_graph">
                              <AdbPrivate data={UaADBData} />
                            </div>
                            <div class="list_data">
                              <div class="f13 text-benGray">
                                {" "}
                                UA{" "}
                                {new Intl.NumberFormat("en-IN").format(
                                  totalUaInMillionsAdbPrivate
                                )}{" "}
                                m
                              </div>
                              {/* <div class="f12 text-green">{chartData.adbPrivateYOY}%</div> */}
                              <div
                                className="f12"
                                style={{
                                  color:
                                    chartData.adbPrivateYOY < 0
                                      ? "red"
                                      : "green",
                                }}
                              >
                                {chartData.adbPrivateYOY}%
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center financial_listContent">
                            <div class="list_heading f12 text-benGray">
                              ADF Including TSF
                            </div>
                            <div class="list_graph">
                              <Tsfincluding data={UaADBData} />
                            </div>
                            <div class="list_data">
                              <div class="f13 text-benGray">
                                {" "}
                                UA{" "}
                                {new Intl.NumberFormat("en-IN").format(
                                  totalUaInMillionsAdfIncludingTsf
                                )}{" "}
                                m
                              </div>
                              {/* <div class="f12 text-green">{chartData.adfIncludingTsfYOY}%</div> */}
                              <div
                                className="f12"
                                style={{
                                  color:
                                    chartData.adfIncludingTsfYOY < 0
                                      ? "red"
                                      : "green",
                                }}
                              >
                                {chartData.adfIncludingTsfYOY}%
                              </div>
                            </div>
                          </div>
                        </li>
                        <li>
                          <div class="flex items-center financial_listContent">
                            <div class="list_heading f12 text-benGray">
                              Other
                            </div>

                            <div class="list_graph">
                              <OtherProgram data={UaADBData} />
                            </div>
                            <div class="list_data">
                              <div class="f13 text-benGray">
                                {" "}
                                UA{" "}
                                {new Intl.NumberFormat("en-IN").format(
                                  totalUaInMillionsOthers
                                )}{" "}
                                m
                              </div>
                              {/* <div class="f12 text-green">{chartData.othersYOY}%</div> */}
                              <div
                                className="f12"
                                style={{
                                  color:
                                    chartData.othersYOY < 0 ? "red" : "green",
                                }}
                              >
                                {chartData.othersYOY}%
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
       
            <RDVPMandates />
       

        
            <div className="Feature_Layout pt_80 pb_80 adfb_collaboraton_layout">
              <div className="max-w-benContainer">
                <div className="Feature_LayoutMain_heading text-center">
                  <div className="heading_topImg text-center">
                    <img
                      src="/assets/images/heading_topIcon.png"
                      alt="Icon"
                      class=""
                    />
                  </div>
                  <h2 className="secondary_title">Adfb Collaboration</h2>
                  <p className="f16 text-benGray">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's<br></br> standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. <br></br>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
                  </p>
                </div>
                <div className="adfb_collaboration_img">
                   <img  src="/assets/images/adfb_logo.png" alt=""  />
                </div>
              </div>
            </div>
        

        </div>
      </body>
    </div>
  );
};

export default Home;
