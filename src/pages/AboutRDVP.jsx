import React, { useState } from "react";
import OrganizationMap from "./about/organizationMap";
import AboutMap from "./about/aboutMap";
import FinancingOperationMap from "./about/financingOperationMap";
import FinancingOperationsBarChart from "./about/financingOperationsBarChart";
import FinancingOperationsTable from "./about/financingOperationsTable";
import AfdbActivetable from "./about/afdbActivetable";
import AdfActiveBarChart from "./about/adfActiveBarChart";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import AboutUsViewMore from "./about/aboutUsViewMore";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import RdvpComplexPieChart from "./about/rdvpComplexPieChart";

const AboutRDVP = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const redirectToViewPage = () => {
    // Use navigate to navigate to the login page
    navigate("/view"); // Replace '/login' with the actual URL of your login page
  };

  const navigate = useNavigate();
  const data = [
    { cover: "/assets/images/Bilateral_donor/Bilateral1.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral2.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral3.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral4.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral5.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral6.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral7.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral8.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral9.png" },
    { cover: "/assets/images/Bilateral_donor/Bilateral10.png" },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
   
  };

  const data2 = [
    { cover: "/assets/images/MultiLateral_organization/multilateral1.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral2.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral3.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral4.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral5.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral6.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral7.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral8.png" },
    { cover: "assets/images/MultiLateral_organization/multilateral9.png" },
    { cover: "/assets/images/MultiLateral_organization/multilateral9.png" },
  ];
  const settings2 = {
    dots: true,
    infinite: true,
    speed: 1800,
    slidesToShow: 5,
    slidesToScroll: 5,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="ben__HomePage">
    <div className="innerBanner_layout relative">
      <div className="max-w-benContainer z_index1 relative">
        <h2 className="gradient_text secondary_content text-center bold semi-bold">
          About Us
        </h2>
        <nav aria-label="breadcrumb" className="breadcrumb_content mt-2">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <a href="#">Home</a>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              About
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <div className="Strategic_layout structureRDVP shape_remove relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="Strategic_Content">
          <div className="homeAbout_left">
            <div className="card card-shadow">
              <div className="cardBody">
                {/* <img src="/assets/images/StructureRDVP.png" alt="Icon" class="" /> */}
                <RdvpComplexPieChart />
              </div>
            </div>
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
                Structure of the RDVP Complex
              </h2>
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
                      Acts as the main interface of the Bank with the Regional
                      Member Countries (RMCs) through <b>5</b>{" "}
                      <span className="orange_text">Regional Hubs,</span>{" "}
                      <b>31</b>{" "}
                      <span className="ltBlue_text">Country Offices</span> and{" "}
                      <b>5</b>{" "}
                      <span className="skyBlue_text">Liaison Offices</span>
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
                      Oversees the operationalization of the Bank’s Regional
                      Business Units and related decentralization aspects;
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
                      Guides the preparation of regional and country strategy
                      papers that provide the framework for the Bank’s lending
                      and non-lending operations along the Ten-Year Strategy
                      and High 5s;
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
                      Leads and coordinates{" "}
                      <b>fragility and regional integration</b> work programs
                      across the Bank; and.
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
                      Conducts business development, builds operational
                      pipeline, executes the lending program and oversees a
                      portfolio of operations within the context of a One Bank
                      approach.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="tree_structureLayout relative pt_80 pb_80">
      <div className="">
        <div className="text-center top_heading max-w-benContainer">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">
            Mandate and Structure of the RDVP Complex{" "}
          </h2>
          <p className="f16 text-benGray">
            Uniting Expertise for a Prosperous Africa: The Framework of Our
            Leadership Team embodies commitment to collaborative governance
            and strategic oversight, championing the the "One Bank". Anchored
            by visionary leadership dedicated to fostering sustainable
            development and spurring transformation to enhance the quality of
            life across the continent
          </p>
        </div>
        <div className="organization_structure">
          <div className=" ">
            <OrganizationMap />
          </div>
          <div class="flex gap-x-2 items-center justify-end organization_structureBtn">
            <button
              type="button"
              class="btn btn-xs gradient_btn2 rounded-md f11 semi-bold flex gap-x-2 items-center"
            >
              Meet the Portfolio Monitoring and Delivery Team{" "}
              <i class="ri-arrow-right-line f16"></i>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div className="Rdvp_complex relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="text-center top_heading">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">
            Mandate and Structure of the RDVP Complex{" "}
          </h2>
          <p className="f16 text-benGray">
            Expanding Impact and Engagement: The Bank’s operational network
            includes a decentralized regional hubs, country offices, and
            liaison entities, illustrating our commitment to fostering
            sustainable growth and regional integration across Africa.
          </p>
        </div>
        <div className="lendingApproval_Content Rdvp_complex_content mt-5">
          <div className="LendingApproval_Left ">
            <div className="mt-5">
              <AboutMap />
            </div>
          </div>
          <div className="LendingApproval_right">
            <div className="rdvp_conplexShape_outer relative">
              <div className="rdvp_conplexShape">
                <div className="LendingApproval_heading">
                  <h6 className="f13 text_bold text-center semi-bold">
                    The Bank’s current footprint includes:
                  </h6>
                </div>
                <div className="list_dataContent">
                  <ul>
                    <li>
                      <div className="flex financial_listContent gap-x-3">
                        <span className="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span className="tick_content f14 text-benGray">
                          5 Regional Hubs headed by DG and DDG
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex financial_listContent gap-x-3">
                        <span class="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span class="tick_content f14 text-benGray">
                          1 Country Office headed by DG
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex financial_listContent gap-x-3">
                        <span class="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span class="tick_content f14 text-benGray">
                          31 Country Offices headed by Country Manager
                        </span>
                      </div>
                    </li>
                    <li>
                      <div className="flex financial_listContent gap-x-3">
                        <span class="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span class="tick_content f14 text-benGray">
                          5 Liaison Offices
                        </span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="relative task_manager">
              <div className="task_manager_content">
                <h2 className="f36 text-benLightBlue themeBlue">375</h2>
                <p className="f14 text-benGray">Decentralized task Manager</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="Feature_Layout about_performance pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="Feature_LayoutMain_heading text-center top_heading">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">RDVP Performance Objectives</h2>
          <p className="f16 text-benGray">
            Driving Excellence and Impact: The RDVP delineates clear
            performance objectives to enhance strategic execution, operational
            development,<br></br> program delivery, and management efficiency
          </p>
        </div>
        <div>
          <div className="features_cards three_col">
            <div className="features_col rounded-md">
              <div className="features_col_img">
                <img src="/assets/images/ObjectiveIcon1.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Strategies
                </h3>
                <p className="semi-bold f16 text-benGray">
                  Deliver strategies, build partnerships and dialogue with
                  clients.
                </p>
              </div>
            </div>
            <div className="features_col rounded-md">
              <div className="features_col_img">
                <img src="/assets/images/ObjectiveIcon2.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Develop Operations
                </h3>
                <p className="semi-bold f16 text-benGray">
                  Develop a solid operations pipeline
                </p>
              </div>
            </div>
            <div className="features_col rounded-md">
              <div className="features_col_img">
                <img src="/assets/images/ObjectiveIcon3.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Deliver Program
                </h3>
                <p className="semi-bold text-benGray">
                  Deliver the Bank’s lending program
                </p>
              </div>
            </div>
            <div className="features_col rounded-md">
              <div className="features_col_img">
                <img src="/assets/images/ObjectiveIcon4.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Performance
                </h3>
                <p className="semi-bold f16 text-benGray">
                  Strengthen portfolio performance and improve
                  quality-at-entry.
                </p>
              </div>
            </div>
            <div className="features_col rounded-md">
              <div className="features_col_img">
                <img src="/assets/images/ObjectiveIcon5.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Implement
                </h3>
                <p className="semi-bold f16 text-benGray">
                  Implement the regional integration and fragility work
                  programs.
                </p>
              </div>
            </div>
            <div className="features_col rounded-md">
              <div className="features_col_img">
                <img src="/assets/images/ObjectiveIcon6.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">Manage</h3>
                <p className="semi-bold f16 text-benGray">
                  Manage people and offices effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="Strategic_layout finance_operations about_img  relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="Strategic_Content items-start">
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
                Development Financing Operations
              </h2>
              <p className="f16 text-benGray">
                <span className="skyBlue_text">
                  Country Strategy Papers (CSPs) and Regional Integration
                  Strategy Papers (RISPs)
                </span>{" "}
                are the main programming instruments for Bank support to RMCs.
                They set out the <b>priority sectors</b> and a multi-year{" "}
                <b>Indicative Operational Program</b> for financing.
              </p>
              <p className="mt-5">
                Financing is conducted in the framework of the{" "}
                <span className="skyBlue_text">Bank’s Credit Policy,</span>{" "}
                with dedicated financing windows for the different categories
                of countries
              </p>
              <div className="financing_list">
                <ul>
                  <li className="red_icon">
                    <span className="iconShape">
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
                          fill="#9E3755"
                          stroke="none"
                        >
                          <path d="M2360 5114 c-626 -57 -1181 -313 -1611 -743 -395 -396 -638 -883 -726 -1458 -23 -154 -24 -546 0 -703 86 -572 332 -1068 726 -1460 399 -398 880 -637 1461 -727 159 -24 537 -24 700 0 572 85 1067 332 1460 726 398 399 637 881 727 1461 25 161 25 539 0 700 -90 580 -331 1065 -726 1461 -395 395 -889 641 -1453 725 -99 14 -466 26 -558 18z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16">17 ADB COUNTRIES</span>
                  </li>
                  <li className="green_icon">
                    <span className="iconShape">
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
                          fill="#335D65"
                          stroke="none"
                        >
                          <path d="M2313 4293 c-133 -230 -692 -1198 -1242 -2151 -551 -953 -1001 -1735 -1001 -1738 0 -2 1121 -4 2490 -4 1370 0 2490 2 2490 4 0 3 -415 724 -923 1603 -508 879 -1067 1847 -1242 2151 -175 303 -322 552 -325 552 -3 0 -115 -188 -247 -417z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16">31 ADF COUNTRIES</span>
                  </li>
                  <li className="orange_icon">
                    <span className="iconShape">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="15"
                        height="15"
                        viewBox="0 0 451.000000 268.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,268.000000) scale(0.100000,-0.100000)"
                          fill="#FF7A41"
                          stroke="none"
                        >
                          <path d="M0 1340 l0 -1340 2250 0 2250 0 0 1340 0 1340 -2250 0 -2250 0 0 -1340z" />
                        </g>
                      </svg>
                    </span>
                    <span className="tick_content f16">
                      17 BLEND COUNTRIES
                    </span>
                  </li>
                </ul>
              </div>
              <div className="development_financing_map relative mt-4">
                  <div class="flex justify-center flex-col rounded-md development_financing_map_content">
                    <ul>
                      <li class="flex gap-x-2 mb-2">
                        <span class="iconShape">
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
                              fill="#9E3755"
                              stroke="none"
                            >
                              <path d="M2360 5114 c-626 -57 -1181 -313 -1611 -743 -395 -396 -638 -883 -726 -1458 -23 -154 -24 -546 0 -703 86 -572 332 -1068 726 -1460 399 -398 880 -637 1461 -727 159 -24 537 -24 700 0 572 85 1067 332 1460 726 398 399 637 881 727 1461 25 161 25 539 0 700 -90 580 -331 1065 -726 1461 -395 395 -889 641 -1453 725 -99 14 -466 26 -558 18z"></path>
                            </g>
                          </svg>
                        </span>
                        <div>
                          <div class="f13 red_icon text_bold">ADB</div>
                          <div class="f12 semibold text-benGray">
                            Countries Eligible for ADB resources Only.
                          </div>
                        </div>
                      </li>
                      <li class="flex gap-x-2 mb-2">
                        <span class="iconShape traingle_icon">
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
                              fill="#335D65"
                              stroke="none"
                            >
                              <path d="M2313 4293 c-133 -230 -692 -1198 -1242 -2151 -551 -953 -1001 -1735 -1001 -1738 0 -2 1121 -4 2490 -4 1370 0 2490 2 2490 4 0 3 -415 724 -923 1603 -508 879 -1067 1847 -1242 2151 -175 303 -322 552 -325 552 -3 0 -115 -188 -247 -417z"></path>
                            </g>
                          </svg>
                        </span>
                        <div>
                          <div class="f13 green_icon text_bold">ADF</div>
                          <div class="f12 semibold text-benGray">
                            Countries Eligible for ADF resources Only.
                          </div>
                        </div>
                      </li>
                      <li class="flex gap-x-2 mb-2">
                        <span class="iconShape orange_Icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            version="1.0"
                            width="15"
                            height="15"
                            viewBox="0 0 451.000000 268.000000"
                            preserveAspectRatio="xMidYMid meet"
                          >
                            <g
                              transform="translate(0.000000,268.000000) scale(0.100000,-0.100000)"
                              fill="#FF7A41"
                              stroke="none"
                            >
                              <path d="M0 1340 l0 -1340 2250 0 2250 0 0 1340 0 1340 -2250 0 -2250 0 0 -1340z"></path>
                            </g>
                          </svg>
                        </span>
                        <div>
                          <div class="f13 orange_icon text_bold">Blend</div>
                          <div class="f12 semibold text-benGray">
                            Countries Eligible for ADB resources Only.
                          </div>
                        </div>
                      </li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>
          <div class="homeAbout_right">
            <FinancingOperationMap />
            
          </div>
        </div>
      </div>
    </div>

    <div className="Developemnet_financing_layout relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="text-center top_heading">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">
            Development Financing Operations
          </h2>
          <p className="f16 text-benGray">
            Enabling Sustainable Development: Our Approach to Financing
            Operations reflects a meticulous journey from conceptualization to{" "}
            <br></br>evaluation, aligning with our strategic imperatives and
            the broader vision of fostering long-term growth across Africa.
          </p>
        </div>
        <div className="activePortfolio_content steps_layout">
          <div className="homeAbout_left">
            <div className="steps_counter">
              <h5 className="f22 text-benLightBlue">Programming 01</h5>
              <p className="f16 text-benGray">
                Set strategic direction and identify country-level
                opportunities.
              </p>
            </div>
            <div className="steps_counter">
              <h5 className="f22 Orange_text">Identification 02</h5>
              <p className="f16 text-benGray">
                Screen project proposals for strategic and beneficiary fit.
              </p>
            </div>
            <div className="steps_counter">
              <h5 className="f22 green_text02">Preparation 03</h5>
              <p className="f16 text-benGray">
                Ensure project viability with in-depth studies and stakeholder
                input.
              </p>
            </div>
            <div className="steps_counter">
              <h5 className="f22 blue_text02">Appraisal 04</h5>
              <p className="f16 text-benGray">
                Evaluate all project aspects for comprehensive Board review.
              </p>
            </div>
          </div>
          <div className="Financing_center">
            <div>
              <img src="/assets/images/steps_img.png" alt="Icon" class="" />
            </div>
          </div>
          <div className="homeAbout_right">
            <div className="steps_counter">
              <h5 className="f22 blue_text08">Approval 05</h5>
              <p className="f16 text-benGray">
                Negotiate terms, present to Board of the AfDB, and finalize
                project activation.
              </p>
            </div>
            <div className="steps_counter">
              <h5 className="f22 pink_text">
                Implementation & Supervision 06
              </h5>
              <p className="f16 text-benGray">
                Oversee project execution and monitor progress.
              </p>
            </div>
            <div className="steps_counter">
              <h5 className="f22 green_text06">Completion & Learning 07</h5>
              <p className="f16 text-benGray">
                Assess outcomes, validate learning, and guide future
                Operations.
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-x-2 items-center justify-end">
          <button
            type="button"
            className="btn btn-xs gradient_btn2 rounded-md f11 semi-bold flex gap-x-2 items-center"
          >
            Explore the Operations Manual for in-depth insights{" "}
            <i class="ri-arrow-right-line f16"></i>
          </button>
        </div>
      </div>
    </div>

    <div className="Financial_operationsLayout relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="text-center top_heading">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">
            Development Financing Operations
          </h2>
          <p className="f16 text-benGray">
            Charting Progress in Development Impact: A steadfast commitment to
            growth through strategic financial <br></br> engagement and
            unwavering support for sustainable development across the African
            continent
          </p>
        </div>
        <div className="Strategic_Content activePortfolio_content items-start">
          <div className="homeAbout_left ">
            {/* <h5 className="f16 text-benGray">Graph</h5> */}

            <FinancingOperationsBarChart />
          </div>
          <div className="homeAbout_right rounded-md">
            {/* <h5 className="f16 text-benGray">Table</h5> */}
            <FinancingOperationsTable />
          </div>
        </div>
      </div>
    </div>

    <div className="Active_portfolio_layout relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="text-center top_heading">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">The AfDB Active Portfolio</h2>
          <p className="f16 text-benGray">
            Demonstrating Impact and Reach: Our portfolio showcases a dynamic
            mix of public and private sector <br></br> projects, each driving
            progress and development throughout Africa
          </p>
        </div>
        <div className="Strategic_Content activePortfolio_content items-none justify-between">
          <div className="homeAbout_left Card_layout rounded-md">
            <div className="active_Portfolio">
              <h5 className="f16 text-benGray">
                AfDB Group Ongoing Portfolio: As Of August 2023
              </h5>
              <AfdbActivetable />
            </div>
          </div>
          <div className="homeAbout_right Card_layout rounded-md flex flex-wrap flex-col justify-between">
            <h5 className="f16 text-benGray">
              AfDB Group Ongoing Portfolio:{" "}
            </h5>
            <AdfActiveBarChart />
          </div>
        </div>
        <div class="link_btn">
          <a href="javasscript:void();">
            View More{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="11"
              viewBox="0 0 18 11"
              fill="none"
            >
              <path
                d="M12.9609 0.0307617L11.9062 1.10889L15.1172 4.31982H0.0703125V5.81982H15.1172L11.9062 9.03076L12.9609 10.1089L18 5.06982L12.9609 0.0307617Z"
                fill="#0481FF"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div>

    <div className="Strategic_Thematiclayout finance_operations relative pt_80 pb_80">
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
                Selected Thematic Priorities - Guiding Focused Initiatives
              </h2>
              <p className="f16 text-benGray">
                Our regional directorates steer the strategic course for
                country offices, managing sovereign operations, business
                growth, and project execution. Central to our objectives is
                the effective implementation of the Bank’s High 5s priorities.
                Under the RDVP's leadership, we are dedicated to reinforcing
                the Bank's commitment to addressing fragility and enhancing
                regional integration efforts.
              </p>
            </div>
            <div class="features_cards Thematic_PrioritiesCards two_col">
              <div class="features_col rounded-md thematic_green">
                <div class="features_col_img">
                  <img src="/assets/images/ThematicIcon1.png" />
                </div>
                <div class="features_content">
                  <p class="semi-bold f16 text-benGray">
                    Light Up and Power Africa
                  </p>
                </div>
              </div>
              <div class="features_col rounded-md thematic_yellow">
                <div class="features_col_img">
                  <img src="/assets/images/ThematicIcon2.png" />
                </div>
                <div class="features_content">
                  <p class="semi-bold f16 text-benGray">Feed Africa</p>
                </div>
              </div>
              <div class="features_col rounded-md thematic_brown">
                <div class="features_col_img">
                  <img src="/assets/images/ThematicIcon3.png" />
                </div>
                <div class="features_content">
                  <p class="semi-bold f16 text-benGray">
                    Industrialize Africa
                  </p>
                </div>
              </div>
              <div class="features_col rounded-md thematic_blue">
                <div class="features_col_img">
                  <img src="/assets/images/ThematicIcon4.png" />
                </div>
                <div class="features_content">
                  <p class="semi-bold f16 text-benGray">Integrate Africa</p>
                </div>
              </div>
              <div class="features_col rounded-md thematic_red flex1">
                <div class="features_col_img">
                  <img src="/assets/images/ThematicIcon5.png" />
                </div>
                <div class="features_content">
                  <p class="semi-bold f16 text-benGray">
                    Improve the Quality of Life for the People of Africa
                  </p>
                </div>
              </div>
            </div>
            <div className="link_btn">
              <a href="javasscript:void();" onClick={redirectToViewPage}>
                View More{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="11"
                  viewBox="0 0 18 11"
                  fill="none"
                >
                  <path
                    d="M12.9609 0.0307617L11.9062 1.10889L15.1172 4.31982H0.0703125V5.81982H15.1172L11.9062 9.03076L12.9609 10.1089L18 5.06982L12.9609 0.0307617Z"
                    fill="#0481FF"
                  />
                </svg>
              </a>
            </div>
          </div>
          <div class="homeAbout_right">
            <img src="/assets/images/thematic1.png" />
          </div>
        </div>
      </div>
    </div>

    <div className="building_portfolio relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="text-center top_heading">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">
            Building Partnerships On The Ground
          </h2>
          <p className="f16 text-benGray">
            RDVP is also on the ground building partnerships with
            international, regional, and bilateral organizations, and{" "}
            <br></br>championing various initiatives. Below a non-exhaustive
            list.{" "}
          </p>
        </div>
      </div>
      <div className="">
        <div className="tabs_layout flex items-center gap-x-4 justify-center">
          <div className="theme_Tabs max-w-benContainer">
            <Tabs
              selectedIndex={tabIndex}
              onSelect={(tabIndex) => setTabIndex(tabIndex)}
            >
              <TabList className="flex mb-5 theme_TabsContent partners_tabs">
                <Tab
                  className="px-4 py-3 text-center rounded-md tabs_item text-benGray f16"
                  style={
                    tabIndex === 0
                      ? { backgroundColor: "#007bff", color: "#fff" }
                      : {}
                  }
                >
                  {" "}
                  BILATERAL DONORS
                </Tab>
                <Tab
                  className="px-4 py-3 text-center rounded-md tabs_item text-benGray f16"
                  style={
                    tabIndex === 1
                      ? { backgroundColor: "#007bff", color: "#fff" }
                      : {}
                  }
                >
                  {" "}
                  MULTILATERAL ORGANIZATIONS
                </Tab>
                <Tab
                  className="px-4 py-3 text-center rounded-md tabs_item text-benGray f16"
                  style={
                    tabIndex === 2
                      ? { backgroundColor: "#007bff", color: "#fff" }
                      : {}
                  }
                >
                  {" "}
                  OTHER PARTNERS
                </Tab>
              </TabList>

              <TabPanel>
                <div className="partner_content">
                  <div className="cofinancing_content">
                    <div className="text-benLightBlue f22 mb-1 text-center">
                      $ <span className="f28 text-bold">5,679 </span>million
                    </div>
                    <div className="cofinancing_Value flex items-center gap-x-4 justify-center flex-wrap">
                      <div className="cofinancing_item  text-benGray f16 rounded-md flex items-center gap-x-3">
                        <span className="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span className="tick_content f16 text-benGray">
                          <b>$3,975 billion</b> sovereign cofinancing
                        </span>
                      </div>
                      <div className="cofinancing_item text-benGray f16 rounded-md flex items-center gap-x-3">
                        <span className="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span className="tick_content f16 text-benGray">
                          <b>$1,704 billion</b> nonsovereign cofinancing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_outer">
                    <Slider {...settings} className="custom-slider">
                      {data.map((item, index) => (
                        <div
                          className="slider_outer rounded-md"
                          key={index}
                          style={{ padding: "5px" }}
                        >
                          <img
                            src={item.cover}
                            alt={item.title}
                            className="slider_img"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div class="mb-2">
                  <div className="partner_content">
                    <div className="cofinancing_content">
                      <div className="text-benLightBlue f22 mb-1 text-center">
                        $ <span className="f28 text-bold">5,679 </span>million
                      </div>
                      <div className="cofinancing_Value flex items-center gap-x-4 justify-center flex-wrap">
                        <div className="cofinancing_item  text-benGray f16 rounded-md flex items-center gap-x-3">
                          <span className="tick_icon tick-sm">
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
                                <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                                <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                              </g>
                            </svg>
                          </span>
                          <span className="tick_content f16 text-benGray">
                            <b>$3,975 billion</b> sovereign cofinancing
                          </span>
                        </div>
                        <div className="cofinancing_item text-benGray f16 rounded-md flex items-center gap-x-3">
                          <span className="tick_icon tick-sm">
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
                                <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                                <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                              </g>
                            </svg>
                          </span>
                          <span className="tick_content f16 text-benGray">
                            <b>$1,704 billion</b> nonsovereign cofinancing
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="carousel_outer">
                      <Slider {...settings2}>
                        {data2.map((item, index) => (
                          <div
                            className="slider_outer rounded-md"
                            key={index}
                          >
                            <img
                              src={item.cover}
                              alt={item.title}
                              className="slider_img"
                            />
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </TabPanel>

              <TabPanel>
                <div className="partner_content">
                  <div className="cofinancing_content">
                    <div className="text-benLightBlue f22 mb-1 text-center">
                      $ <span className="f28 text-bold">5,679 </span>million
                    </div>
                    <div className="cofinancing_Value flex items-center gap-x-4 justify-center flex-wrap">
                      <div className="cofinancing_item  text-benGray f16 rounded-md flex items-center gap-x-3">
                        <span className="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span className="tick_content f16 text-benGray">
                          <b>$3,975 billion</b> sovereign cofinancing
                        </span>
                      </div>
                      <div className="cofinancing_item text-benGray f16 rounded-md flex items-center gap-x-3">
                        <span className="tick_icon tick-sm">
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
                              <path d="M2370 5113 c-371 -35 -653 -114 -961 -269 -406 -203 -782 -548 -1029 -944 -179 -286 -309 -655 -362 -1025 -17 -118 -17 -512 0 -630 42 -295 120 -553 242 -800 137 -280 272 -468 494 -691 221 -220 412 -357 681 -489 188 -92 309 -137 500 -185 500 -126 1002 -102 1490 71 150 53 408 183 540 271 302 202 573 480 769 788 72 113 188 353 235 486 235 662 194 1372 -115 1993 -124 250 -263 447 -458 648 -214 222 -430 379 -711 518 -296 146 -572 225 -900 255 -102 9 -333 11 -415 3z m545 -342 c628 -106 1158 -448 1511 -977 179 -267 296 -573 351 -909 24 -153 24 -497 0 -650 -108 -668 -474 -1222 -1042 -1580 -243 -153 -537 -261 -850 -312 -154 -24 -497 -24 -650 1 -657 107 -1198 456 -1557 1006 -168 257 -281 557 -335 885 -24 153 -24 497 0 650 81 497 291 912 636 1255 382 381 862 605 1401 654 108 10 418 -4 535 -23z"></path>
                              <path d="M3620 3510 c-14 -6 -366 -351 -782 -768 l-758 -757 -282 282 c-305 304 -307 305 -395 288 -49 -9 -109 -69 -118 -118 -17 -90 -23 -83 363 -469 386 -386 378 -380 469 -363 34 6 132 100 871 838 605 605 835 841 843 866 22 67 -2 139 -63 184 -31 23 -111 32 -148 17z"></path>
                            </g>
                          </svg>
                        </span>
                        <span className="tick_content f16 text-benGray">
                          <b>$1,704 billion</b> nonsovereign cofinancing
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="carousel_outer">
                    <Slider {...settings}>
                      {data.map((item, index) => (
                        <div className="slider_outer rounded-md" key={index}>
                          <img
                            src={item.cover}
                            alt={item.title}
                            className="slider_img"
                          />
                        </div>
                      ))}
                    </Slider>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </div>

    <div className="strategic_plan pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="Feature_LayoutMain_heading text-center">
          <div className="heading_topImg text-center">
            <img
              src="/assets/images/heading_topIcon.png"
              alt="Icon"
              class=""
            />
          </div>
          <h2 className="secondary_title">RDVP Strategic Plan</h2>
          <p className="f16 text-benGray">
            Advancing Strategic Goals: Key Areas of Focus for Enhanced
            Efficiency and Impact. Each initiative is tailored to fortify our
            institution's capabilities, ensuring financial sustainability,
            knowledge sharing, and operational excellence.
          </p>
        </div>
        <div>
          <div className="features_cards three_col">
            <div className="features_col rounded-md bg-ltgreen">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan1.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Pipeline development and Lending Program Delivery
                </h3>
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
                        Ramp up Pipeline in line with High5s and Selectivity
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
                        Further emphasis on Quality at Entry.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltblue2">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan2.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Leveraging
                </h3>
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
                        Strengthen dramatically co-financing and leveraging
                        efforts
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
                        Develop CSPs that have a clear focus on leveraging
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltgreen">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan3.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Portfolio Management
                </h3>
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
                        Accelerate project implementation and disbursement
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
                        Enhance accountability for portfolio performance at
                        regional and country level
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltblue2">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan4.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Knowledge Management
                </h3>
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
                        Better measure impact of knowledge activities across
                        the institution in line with strategic aspirations of
                        Knowledge Bank status.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltgreen">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan5.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Trust Fund Management{" "}
                </h3>
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
                        Increase significantly mobilization and uptake of
                        Trust Fund resources for Bank activities and
                        operations
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltblue2">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan6.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Risk Management
                </h3>
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
                        Monitor compliance with prudential and operational
                        limits
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
                        Be proactive on emerging risks and limit breaches
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltgreen">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan7.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Financial Sustainability
                </h3>
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
                        Monitor cost containment, efficiency gains and income
                        generation efforts in line with Bank Income Model.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltblue2">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan8.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Staffing
                </h3>
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
                        Monitor recruitment timelines to accelerate full
                        operationalization of the DBDM.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="features_col rounded-md bg-ltgreen">
              <div className="features_col_img">
                <img src="/assets/images/strategicPlan9.png" />
              </div>
              <div className="features_content">
                <h3 className="f18 text-black text-bold semi-bold">
                  Information
                </h3>
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
                        Monitor resilience, robustness and adequacy of IT
                        systems and processes, as well as compliance to
                        service delivery standards
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* <div className="Catalyzing_Continental thematic relative pt_80 pb_80">
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
            <img src="/assets/images/catalyzing_continental.png" />
          </div>
        </div>
      </div>
    </div>

    <div className="Strategic_Pillarlayout thematic relative pt_80 pb_80">
      <div className="max-w-benContainer">
        <div className="Strategic_Content">
          <div className="homeAbout_left">
            <img src="/assets/images/startegic_pillar.png" />
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
            <img src="/assets/images/strategic_resilience.png" />
          </div>
        </div>
      </div>
    </div> */}
  </div>
  );
};

export default AboutRDVP;
