import { useState,useRef  } from "react";
import Overallefficiency from "components/corporate/WorkForce/optimization/OverallEfficiency";
import BySector from "components/corporate/WorkForce/optimization/BySector";
import ByRegion from "components/corporate/WorkForce/optimization/ByRegion";
import Byfinacingwindow from "components/corporate/WorkForce/optimization/ByFInacingWindow";
import ByDepartment from "components/corporate/WorkForce/optimization/ByDepartment";
import BySovergionAndNonSovergion from "components/corporate/WorkForce/optimization/BySovergionAndNonSovergion";
import ByTransitionStates from "components/corporate/WorkForce/optimization/ByTransitionStates";
import ReportTable from "components/corporate/WorkForce/optimization/ReportTable";
import DatePicker from "react-datepicker";
import { IoPrintOutline } from "react-icons/io5";
import { HiOutlineCloudDownload } from "react-icons/hi";
import Shortfallcount from "components/corporate/WorkForce/optimization/Shortfallcount";
import OverallEffciencyPrecentage from "components/corporate/WorkForce/optimization/OverallEffciencyPrecentage";
import Decentralizedevolution from "components/corporate/WorkForce/optimization/Decentralizedevolution";
import DistributionComplex from "components/corporate/WorkForce/optimization/DistributionComplex";
import DistributionComplexTable from "components/corporate/WorkForce/optimization/DistributionComplexTable";
import ByNature from "components/corporate/WorkForce/optimization/ByNature";
import Decnetralizedlocation from "components/corporate/WorkForce/optimization/Decentralizedlocation";
import Centralizedlocation from "components/corporate/WorkForce/optimization/Centralizedlocation";
import Decentralizedlocation2 from "components/corporate/WorkForce/optimization/Decentralizedlocation2";
import Centralizedlocation2 from "components/corporate/WorkForce/optimization/Centralizedlocation2";
import Decentralizedlocation from "components/corporate/WorkForce/optimization/Decentralizedlocation";
import { BsMap } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlinePieChart } from "react-icons/ai";
import { BiSolidShoppingBags } from "react-icons/bi";
import { FaUserFriends } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import DecentralizationRatio from "components/corporate/WorkForce/optimization/DecentralizationRatio";
import OnGrandpresenceIndex from "components/corporate/WorkForce/optimization/OnGrandpresenceIndex";
import DecentralizationRate from "components/corporate/WorkForce/optimization/DecentralizationRate";
import GrowthRate from "components/corporate/WorkForce/optimization/GrowthRate";
import EandSCategarization from "components/corporate/WorkForce/optimization/EandSCategarization";

import EandSRiskCategarization from "components/corporate/WorkForce/optimization/EandSRiskCategarization";
import ReactToPrint from 'react-to-print';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const Optimization = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const componentRef = useRef();
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };


  const downloadPDF = () => {
    const input = document.getElementById("pdf-content");
  
    html2canvas(input, { scrollY: -window.scrollY }).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        const imgWidth = 210;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
  
        pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
        pdf.save("downloaded-report.pdf");
    });
  };
 


  const navigation = [
    {
        name: "PORTFOLIO",
        href: "/corporate/optimization",
        icon: BiSolidShoppingBags,
        current: true,
      },

    { name: "LENDING", href: "/corporate/optimizationLending", icon: BsMap, current: false },

  
    {
      name: "PIPELINE",
      href: "/corporate/optimizationPipeline",
      icon: FaUserFriends,
      current: false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }


  return (
    <div id="pdf-content" style={{ width: "100%", height: "auto" }} ref={componentRef} > 
      <div className="ben_FiltersAction ben_LandingPage  flex items-center gap-2 lendingFilter_Action justify-between flex-wrap printHide">
         <div class="cardTitle flex items-center ben_LandingPage  flex-wrap items-center justify-between w100">
            <div className="TabsLayout mb-6 flex flex-wrap justify-content-between border-b w100">
              <ul className="ben__DashboardLinks flex items-center flex-wrap flex1 border0 w100">
                {navigation.map((item, ind) => (
                  <li key={item.name}>
                    <NavLink
                      to={`/dashboard${item.href}`}
                      className={classNames(
                        item.current ? "" : "",
                        ind === navigation?.length - 1 ? "" : "",
                        "pt-2 pb-2 px-6 flex gap-x-3 items-center semibold f14"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current ? "" : "",
                          "h-4 w-4 shrink-0"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
           
          </div>
       
      </div>
      <div className="cardTitle flex items-center flex-wrap items-center justify-end printHide">
         {/* <div className="mb-4">
              <p class="f14 semibold text-uppercase text-normal">Project In Decentralized Location</p>
          </div> */}
          <div className="flex items-center gap-x-2 flex-wrap">
            <div className="text-base input-box flex items-center f14  mb-4">
                <select
                name="budgetMetric"
                id="budgetMetric"
                class="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box"
              >
                <option value="true">Country</option>
                <option value="1">Program 1</option>
                <option value="2"> Program 2</option>
                <option value="3">Program 3</option>
                </select>
            </div>
          <div className="border_blue relative block bg-white rounded-md px-4 py-3  text-base input-box flex items-center f14 lg:w-58 datePicker-border mb-4">
           
           
            <DatePicker
              selected={startDate}
              onChange={onChange}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              isClearable={true}
              placeholderText="DD/MM/YYYY"
              className=""
              showIcon
            />
          </div>
          <ReactToPrint
        trigger={() => (
          <button className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex gap-x-2 items-center mb-4 print_btn">
            <IoPrintOutline className="h-5 w-5 link-icon" aria-hidden="true" />
            <span className="link-title f14">Print</span>
          </button>
        )}
        content={() => componentRef.current}
      />
          <button
        className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex gap-x-2 items-center btn  mb-4 text-white"
        style={{ backgroundColor: "#7c86ff" }}
        onClick={downloadPDF}
      >
        <HiOutlineCloudDownload className="h-5 w-5 link-icon" aria-hidden="true" />
        <span className="link-title f14">Download Report</span>
      </button>
        </div>
      </div>

      <div className="growth_layout optimizationGrowth">
        <div className="flex flex-wrap CardDivgap justify-between grid-margin grid_boxes">         
          
          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col printnotbreak">
              <div className="cardBody flex flex1 flex-col">                 
                  <div className="flex items-center gap-x-3  justify-between">
                      <div className="flex flex-col items-start">
                        <div class="mb-1">
                            <p class="f20 text_bold">777 </p>
                            <p class="f11 text-benGray">Projects</p>
                        </div>                        
                      </div>
                      <div className="total_landingGraph graph_content">
                        <DecentralizationRatio/>
                      </div>
                  </div>
                  <div class="flex justify-between gap-x-1">
                       <p class="f15 text-benGray mb-2 ">
                          Decentralization Ratio
                        </p>
                        <div className="graph_matrix mb-2 ">
                            <div class="text_red flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-red">
                            <span><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f5907e" stroke="none"><path d="M63 4663 c35 -60 609 -1052 1276 -2206 668 -1153 1217 -2097 1221 -2097 4 0 553 944 1221 2097 667 1154 1241 2146 1276 2206 l62 107 -2559 0 -2559 0 62 -107z"></path></g></svg></span>
                                <span class="f12">-70.26%</span>
                              </div>
                        </div>
                    </div>

                </div>
          </div>

          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col printnotbreak">
              <div className="cardBody flex flex1 flex-col">
                  <div className="flex items-center gap-x-3  justify-between">
                      <div className="flex flex-col items-start">
                        <div class="mb-1">
                            <p class="f20 text_bold">301 </p>
                            <p class="f11 text-benGray">Task Managers</p>
                        </div>                      
                      </div>
                      <div className="total_landingGraph graph_content">
                         <OnGrandpresenceIndex/>
                      </div>
                  </div>
                  <div class="flex justify-between gap-x-1">
                        <p class="f15 text-benGray mb-2 ">
                        On-Grand Presence Index
                        </p>
                        <div className="mb-2 graph_matrix">
                              <div class="text_green flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-green">
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg>
                                </span>
                                <span class="f12">+80.26%</span>
                              </div>
                        </div>
                  </div>
                </div>
          </div>

          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col printnotbreak">
              <div className="cardBody flex flex1 flex-col">                  
                  <div className="flex items-center gap-x-3  justify-between">
                      <div className="flex flex-col items-start">
                        <div class="mb-1">
                            <p class="f20 text_bold">54 </p>
                             <p class="f11 text-benGray">Offices</p>
                        </div>                       
                      </div>
                      <div className="total_landingGraph graph_content">
                         <DecentralizationRate/>
                      </div>
                  </div>
                  <div class="flex justify-between gap-x-1">
                       <p class="f15 text-benGray mb-2 ">
                         Decentralization Rate
                        </p>
                        <div className="mb-2 graph_matrix">
                          <div class="text_green flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-green">
                            <span>
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg>
                            </span>
                            <span class="f12">+70.8%</span>
                          </div>
                        </div>
                  </div>
                </div>
          </div>

          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col printnotbreak">
              <div className="cardBody flex flex1 flex-col">
                  <div className="flex items-center gap-x-3  justify-between">
                      <div className="flex flex-col items-start">
                          <div class="mb-1">
                               <p class="f20 text_bold">341 </p>
                              <p class="f11 text-benGray">Staff</p>
                          </div>                       
                      </div>
                      <div className="total_landingGraph graph_content">
                      <GrowthRate/>
                      </div>
                  </div>
                  <div class="flex justify-between gap-x-1">
                         <p class="f15 text-benGray mb-2 ">
                        Growth Rate of Decentralized Staff 
                        </p>
                        <div className="mb-2 graph_matrix">
                              <div class="text_green flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-green">
                                <span>
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg>
                                </span>
                                <span class="f12">+60%</span>
                              </div>
                          </div>
                    </div>
                </div>
          </div>
        </div>
      
      </div>

     

      <div className="ben__GeospatialPage w-full block">
        <div class="flex CardDivgap flex-wrap justify-between w100">
          <div className="card bg-white rounded-md card-shadow grid-margin w-40 printnotbreak">
            <div className="cardBody ">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
              <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  ANNUAL TARGET ACHIEVEMENT GAUGE
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Decentralized Project Management Progress Indicator
                  </p>
                </div>
                <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
                 
                </div>
              </div>
              <div>
                <Overallefficiency />
              </div>
            </div>
          </div>
          <div className="card bg-white rounded-md card-shadow grid-margin flex1 printnotbreak">
            <div className="cardBody ">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div class="mb-4">
                <p class="f14 semibold text-uppercase text-normal">
                CRITICAL PROJECT METRICS
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Snapshot of Decentralized vs. Centralized Management
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap CardDivgap justify-between grid-margin grid_boxes workLoad_keystats key_statsLayout">

               <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center BgGreen border_Green border-l border-t border-b border-r">
                  <div className="cardBody cardBody15">
                    <div className="flex items-center w-full gap-x-3 items-center">
                     <Decentralizedlocation />
                      <div class="">
                        <p class="text-benLightBlue f22 text-bold mb-1">UA 31.26bn</p>
                        <p className="f13 text-benGray">Managed within the decentralized location{" "}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center BgLtblue border_Ltblue border-b border-t border-l border-r">
                  <div className="cardBody cardBody15">
                    <div className="flex items-center w-full gap-x-3 items-center">
                      <Centralizedlocation />
                      <div class="">
                        <p class="text-benLightBlue f22 text-bold mb-1">330</p>
                        <p className="f13 text-benGray">Project managed within the decentralized location</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center BgLtblue border_Ltblue border-b border-t border-l border-r">
                  <div className="cardBody cardBody15">
                  <div className="flex items-center w-full gap-x-3 items-center">
                      <Decentralizedlocation2 />
                        <div class="">
                          <p class="text-benLightBlue f22 text-bold mb-1">UA 8.89bn</p>
                          <p className="f13 text-benGray">Managed within the centralized location</p>
                        </div>
                    </div>
                  </div>
                </div>

                <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center BgGreen border_Green border-l border-t border-b border-r">
                  <div className="cardBody cardBody15">
                    <div className="flex items-center w-full gap-x-3">
                      <Centralizedlocation2 />
                      <div class="">
                        <p class="text-benLightBlue f18 text-bold mb-1">330</p>
                        <p className="f13 text-benGray">Project managed within the centralized location</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <ul class=" flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom">
                  <li class="px-3 py-3 flex gap-x-4 flex1 justify-center items-center">
                    <div class="BgPurple  icon_bg iconlg_bg">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#7c86ff" stroke="none"><path d="M2414 4719 c-89 -15 -206 -57 -294 -106 -113 -63 -266 -215 -327 -323 -201 -357 -144 -788 143 -1074 170 -171 382 -258 624 -258 242 0 454 87 624 258 287 286 344 717 143 1074 -61 108 -214 260 -327 323 -178 99 -393 138 -586 106z"></path><path d="M832 3880 c-197 -52 -367 -201 -445 -390 -37 -90 -48 -150 -48 -256 0 -107 19 -192 66 -289 82 -170 248 -304 435 -351 85 -22 235 -21 320 1 148 38 304 148 389 274 135 200 148 465 34 684 -51 98 -172 219 -270 270 -146 76 -326 97 -481 57z"></path><path d="M3952 3880 c-169 -45 -336 -176 -415 -327 -91 -175 -103 -380 -31 -561 76 -189 254 -345 454 -397 85 -22 235 -23 320 -1 236 60 424 248 485 485 19 73 22 222 6 296 -53 243 -247 444 -487 505 -100 26 -233 26 -332 0z"></path><path d="M1955 2755 c-152 -34 -252 -90 -366 -204 -95 -95 -146 -176 -188 -299 l-26 -77 -3 -840 c-2 -826 -2 -841 18 -873 11 -18 34 -41 52 -52 32 -20 53 -20 1118 -20 1065 0 1086 0 1118 20 18 11 41 34 52 52 20 32 20 47 18 873 l-3 840 -26 77 c-42 123 -93 204 -188 299 -95 95 -176 146 -299 188 l-77 26 -570 2 c-451 1 -583 -1 -630 -12z"></path><path d="M642 2379 c-287 -37 -523 -241 -614 -529 -23 -75 -23 -77 -23 -595 l0 -520 23 -57 c47 -117 144 -213 260 -260 55 -22 67 -23 434 -26 l377 -3 -12 33 c-15 44 -23 1572 -8 1708 6 52 18 122 27 155 9 33 19 70 21 83 l5 22 -213 -1 c-118 -1 -243 -5 -277 -10z"></path><path d="M3993 2368 c2 -13 12 -50 21 -83 9 -33 21 -103 27 -155 15 -136 7 -1664 -8 -1708 l-12 -33 377 3 c367 3 379 4 434 26 116 47 213 143 260 260 l23 57 0 520 c0 519 0 520 -24 595 -75 240 -244 418 -471 495 -101 34 -203 45 -433 45 l-199 0 5 -22z"></path></g></svg>
                  
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="40"
                        height="40"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="CurrentColor"
                          stroke="none"
                        >
                          <path d="M700 3450 l0 -1050 115 0 115 0 0 940 0 940 780 0 780 0 0 -410 0 -410 405 0 405 0 0 -310 0 -310 110 0 110 0 0 397 0 398 -432 432 -433 433 -977 0 -978 0 0 -1050z m2235 450 l210 -210 -213 0 -212 0 0 210 c0 116 1 210 3 210 1 0 97 -94 212 -210z"></path>
                          <path d="M1220 3575 l0 -115 480 0 480 0 0 115 0 115 -480 0 -480 0 0 -115z"></path>
                          <path d="M1220 3050 l0 -110 815 0 815 0 0 110 0 110 -815 0 -815 0 0 -110z"></path>
                          <path d="M1220 2530 l0 -110 655 0 655 0 0 110 0 110 -655 0 -655 0 0 -110z"></path>
                          <path d="M3245 2626 c-169 -28 -335 -102 -471 -210 -186 -149 -311 -356 -360 -597 -25 -125 -16 -344 20 -464 101 -337 368 -604 696 -694 346 -96 703 -7 964 240 167 158 270 352 306 582 17 106 8 289 -20 397 -91 354 -373 636 -729 726 -119 31 -291 39 -406 20z m360 -230 c139 -38 306 -141 392 -243 133 -158 193 -321 193 -524 0 -345 -216 -641 -550 -751 -87 -29 -106 -32 -230 -32 -100 0 -152 5 -200 18 -283 78 -496 292 -571 572 -32 120 -30 289 5 409 33 110 80 201 146 282 114 141 300 251 478 283 69 13 268 4 337 -14z"></path>
                          <path d="M3320 2162 l0 -69 -57 -29 c-109 -56 -168 -171 -144 -280 23 -103 91 -168 242 -230 93 -38 129 -69 129 -109 0 -60 -112 -83 -227 -47 l-62 20 -35 -104 -35 -104 67 -19 c37 -11 79 -22 95 -25 26 -6 27 -9 27 -71 l0 -65 110 0 110 0 0 83 c0 77 2 85 23 94 43 20 88 66 115 117 38 72 38 178 0 252 -44 85 -110 134 -245 183 -73 27 -113 63 -97 89 21 33 82 45 159 32 39 -6 79 -12 89 -13 15 -2 27 18 58 92 21 51 37 96 34 99 -3 2 -34 12 -68 22 l-63 17 -3 66 -3 67 -109 0 -110 0 0 -68z"></path>
                          <path d="M710 1990 l0 -170 110 0 110 0 0 170 0 170 -110 0 -110 0 0 -170z"></path>
                          <path d="M1220 1590 l0 -110 125 0 125 0 0 110 0 110 -125 0 -125 0 0 -110z"></path>
                          <path d="M705 1577 c-3 -7 -4 -136 -3 -287 l3 -275 768 -3 767 -2 0 115 0 115 -655 0 -655 0 0 175 0 175 -110 0 c-80 0 -112 -4 -115 -13z"></path>
                        </g>
                      </svg> */}
                    </div>
                    <div>
                      <p class="f18 semibold ">321</p>
                      <p class="f14 semibold text-benGray">Staff</p>
                    </div>
                  </li>
                  <li class="px-3 py-3 flex gap-x-4 flex1 justify-center items-center border-l">
                    <div class="BgGreen icon_bg iconlg_bg border_none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="33" height="36" viewBox="0 0 33 36" fill="#4BE7CF">
                          <path d="M18.6208 9.93104C19.6029 9.93104 20.5629 9.63981 21.3795 9.0942C22.1961 8.54858 22.8325 7.77307 23.2083 6.86574C23.5842 5.95841 23.6825 4.96001 23.4909 3.9968C23.2993 3.03358 22.8264 2.14881 22.1319 1.45437C21.4375 0.759929 20.5527 0.287009 19.5895 0.0954132C18.6263 -0.0961823 17.6279 0.00215146 16.7206 0.37798C15.8132 0.753808 15.0377 1.39025 14.4921 2.20683C13.9465 3.0234 13.6553 3.98343 13.6553 4.96552C13.6568 6.28199 14.1804 7.54411 15.1113 8.475C16.0422 9.40589 17.3043 9.92953 18.6208 9.93104ZM16.7587 6.2069C16.7587 6.04228 16.8241 5.88441 16.9405 5.768C17.0569 5.6516 17.2148 5.58621 17.3794 5.58621C17.544 5.58621 17.7019 5.6516 17.8183 5.768C17.9347 5.88441 18.0001 6.04228 18.0001 6.2069V6.29721C18.0003 6.43777 18.0562 6.57252 18.1555 6.67193C18.2549 6.77135 18.3896 6.82733 18.5302 6.82759H18.7114C18.8309 6.8276 18.9468 6.78727 19.0405 6.71312C19.1341 6.63897 19.2 6.53536 19.2274 6.41909C19.2548 6.30282 19.2421 6.1807 19.1914 6.07254C19.1407 5.96438 19.055 5.87651 18.9481 5.82319L17.7377 5.21826C17.4221 5.06128 17.1607 4.81338 16.9872 4.5065C16.8137 4.19962 16.7361 3.84783 16.7643 3.49644C16.7925 3.14504 16.9253 2.81015 17.1456 2.5349C17.3658 2.25965 17.6634 2.05666 18.0001 1.95207V1.86207C18.0001 1.69745 18.0655 1.53958 18.1819 1.42318C18.2983 1.30678 18.4562 1.24138 18.6208 1.24138C18.7854 1.24138 18.9433 1.30678 19.0597 1.42318C19.1761 1.53958 19.2415 1.69745 19.2415 1.86207V1.95207C19.6003 2.06405 19.9142 2.2875 20.1374 2.58998C20.3606 2.89245 20.4816 3.25821 20.4829 3.63414V3.72414C20.4829 3.88876 20.4175 4.04663 20.3011 4.16303C20.1847 4.27944 20.0268 4.34483 19.8622 4.34483C19.6976 4.34483 19.5397 4.27944 19.4233 4.16303C19.3069 4.04663 19.2415 3.88876 19.2415 3.72414V3.63383C19.2413 3.49327 19.1854 3.35852 19.086 3.2591C18.9867 3.15969 18.852 3.10371 18.7114 3.10345H18.5302C18.4107 3.10344 18.2948 3.14377 18.2011 3.21792C18.1074 3.29207 18.0416 3.39568 18.0142 3.51195C17.9868 3.62822 17.9995 3.75034 18.0502 3.8585C18.1009 3.96666 18.1866 4.05453 18.2935 4.10785L19.5038 4.71277C19.8195 4.86975 20.0809 5.11764 20.2544 5.42451C20.4279 5.73139 20.5055 6.08318 20.4773 6.43458C20.4491 6.78597 20.3163 7.12086 20.096 7.3961C19.8758 7.67135 19.5781 7.87433 19.2415 7.97891V8.06897C19.2415 8.23358 19.1761 8.39146 19.0597 8.50786C18.9433 8.62426 18.7854 8.68966 18.6208 8.68966C18.4562 8.68966 18.2983 8.62426 18.1819 8.50786C18.0655 8.39146 18.0001 8.23358 18.0001 8.06897V7.97891C17.6413 7.86695 17.3275 7.64356 17.1043 7.34116C16.881 7.03875 16.76 6.67308 16.7587 6.29721V6.2069Z" fill="#01C38D"/>
                          <path d="M9.93104 29.7936C9.93104 28.8116 9.63981 27.8515 9.0942 27.035C8.54858 26.2184 7.77307 25.5819 6.86574 25.2061C5.95841 24.8303 4.96001 24.7319 3.99679 24.9235C3.03358 25.1151 2.14881 25.5881 1.45437 26.2825C0.759928 26.9769 0.287009 27.8617 0.0954132 28.8249C-0.0961823 29.7881 0.00215146 30.7865 0.37798 31.6939C0.753808 32.6012 1.39025 33.3767 2.20683 33.9223C3.0234 34.4679 3.98343 34.7592 4.96552 34.7592C6.28199 34.7577 7.54411 34.234 8.475 33.3031C9.40589 32.3722 9.92953 31.1101 9.93104 29.7936ZM4.34483 32.8971V32.807C3.98602 32.6951 3.67222 32.4717 3.449 32.1693C3.22577 31.8669 3.10473 31.5012 3.10345 31.1253V31.035C3.10345 30.8704 3.16884 30.7125 3.28525 30.5961C3.40165 30.4797 3.55952 30.4143 3.72414 30.4143C3.88876 30.4143 4.04663 30.4797 4.16303 30.5961C4.27944 30.7125 4.34483 30.8704 4.34483 31.035V31.1253C4.34501 31.2659 4.4009 31.4006 4.50026 31.5001C4.59962 31.5995 4.73434 31.6555 4.8749 31.6557H5.05614C5.1756 31.6557 5.29156 31.6154 5.38521 31.5412C5.47887 31.4671 5.54474 31.3635 5.57214 31.2472C5.59954 31.1309 5.58686 31.0088 5.53616 30.9007C5.48545 30.7925 5.3997 30.7046 5.29281 30.6513L4.08246 30.0464C3.76682 29.8894 3.50542 29.6415 3.33192 29.3346C3.15843 29.0278 3.0808 28.676 3.10902 28.3246C3.13725 27.9732 3.27004 27.6383 3.4903 27.363C3.71055 27.0878 4.00818 26.8848 4.34483 26.7802V26.6902C4.34483 26.5256 4.41022 26.3677 4.52663 26.2513C4.64303 26.1349 4.8009 26.0695 4.96552 26.0695C5.13014 26.0695 5.28801 26.1349 5.40441 26.2513C5.52081 26.3677 5.58621 26.5256 5.58621 26.6902V26.7802C5.94502 26.8922 6.25882 27.1156 6.48205 27.418C6.70527 27.7204 6.82631 28.0861 6.82759 28.462V28.5523C6.82759 28.7169 6.7622 28.8748 6.64579 28.9912C6.52939 29.1076 6.37152 29.173 6.2069 29.173C6.04228 29.173 5.88441 29.1076 5.768 28.9912C5.6516 28.8748 5.58621 28.7169 5.58621 28.5523V28.462C5.58603 28.3214 5.53013 28.1866 5.43078 28.0872C5.33142 27.9878 5.1967 27.9318 5.05614 27.9316H4.8749C4.75544 27.9316 4.63948 27.9719 4.54582 28.046C4.45216 28.1202 4.3863 28.2238 4.3589 28.3401C4.3315 28.4563 4.34418 28.5785 4.39488 28.6866C4.44558 28.7948 4.53133 28.8827 4.63823 28.936L5.84857 29.5409C6.16422 29.6979 6.42563 29.9458 6.59913 30.2526C6.77263 30.5595 6.85027 30.9113 6.82204 31.2627C6.79382 31.6141 6.66102 31.949 6.44076 32.2242C6.2205 32.4995 5.92287 32.7025 5.58621 32.807V32.8971C5.58621 33.0617 5.52081 33.2196 5.40441 33.336C5.28801 33.4524 5.13014 33.5178 4.96552 33.5178C4.8009 33.5178 4.64303 33.4524 4.52663 33.336C4.41022 33.2196 4.34483 33.0617 4.34483 32.8971Z" fill="#01C38D"/>
                          <path d="M28.551 23.5859H4.96484C6.50273 23.5889 7.98501 24.1614 9.12554 25.193C10.2661 26.2247 10.984 27.6423 11.1407 29.1721H28.551C29.0449 29.1721 29.5185 28.976 29.8677 28.6268C30.2169 28.2776 30.4131 27.8039 30.4131 27.3101V25.448C30.4131 24.9542 30.2169 24.4805 29.8677 24.1313C29.5185 23.7821 29.0449 23.5859 28.551 23.5859Z" fill="#01C38D"/>
                          <path d="M24.8269 30.4141H11.1407C10.984 31.9439 10.2661 33.3615 9.12554 34.3932C7.98501 35.4248 6.50273 35.9973 4.96484 36.0003H24.8269C25.3208 36.0003 25.7944 35.8041 26.1436 35.4549C26.4928 35.1057 26.689 34.6321 26.689 34.1382V32.2761C26.689 31.7823 26.4928 31.3087 26.1436 30.9595C25.7944 30.6102 25.3208 30.4141 24.8269 30.4141Z" fill="#01C38D"/>
                          <path d="M3.7234 22.344H25.4475C25.9414 22.344 26.415 22.1478 26.7642 21.7986C27.1134 21.4494 27.3096 20.9758 27.3096 20.482V18.6199C27.3096 18.126 27.1134 17.6524 26.7642 17.3032C26.415 16.954 25.9414 16.7578 25.4475 16.7578H3.7234C3.22955 16.7578 2.75592 16.954 2.40672 17.3032C2.05751 17.6524 1.86133 18.126 1.86133 18.6199V20.482C1.86133 20.9758 2.05751 21.4494 2.40672 21.7986C2.75592 22.1478 3.22955 22.344 3.7234 22.344Z" fill="#01C38D"/>
                          <path d="M30.4135 9.92969H22.3384C21.2663 10.7354 19.9615 11.1711 18.6204 11.1711C17.2793 11.1711 15.9745 10.7354 14.9025 9.92969H7.44801C7.20339 9.92936 6.9611 9.9773 6.73504 10.0708C6.50898 10.1642 6.30357 10.3014 6.1306 10.4743C5.95762 10.6473 5.82048 10.8527 5.72702 11.0788C5.63355 11.3049 5.58561 11.5471 5.58594 11.7918V13.6538C5.58561 13.8984 5.63355 14.1407 5.72702 14.3668C5.82048 14.5929 5.95762 14.7983 6.1306 14.9712C6.30357 15.1442 6.50898 15.2814 6.73504 15.3748C6.9611 15.4683 7.20339 15.5162 7.44801 15.5159H30.4135C30.6581 15.5162 30.9004 15.4683 31.1265 15.3748C31.3526 15.2814 31.558 15.1442 31.7309 14.9712C31.9039 14.7983 32.0411 14.5929 32.1345 14.3668C32.228 14.1407 32.2759 13.8984 32.2756 13.6538V11.7918C32.2759 11.5471 32.228 11.3049 32.1345 11.0788C32.0411 10.8527 31.9039 10.6473 31.7309 10.4743C31.558 10.3014 31.3526 10.1642 31.1265 10.0708C30.9004 9.9773 30.6581 9.92936 30.4135 9.92969Z" fill="#01C38D"/>
                          </svg>
                  
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="40"
                        height="40"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="#42D29D"
                          stroke="none"
                        >
                          <path d="M700 3450 l0 -1050 115 0 115 0 0 940 0 940 780 0 780 0 0 -410 0 -410 405 0 405 0 0 -310 0 -310 110 0 110 0 0 397 0 398 -432 432 -433 433 -977 0 -978 0 0 -1050z m2235 450 l210 -210 -213 0 -212 0 0 210 c0 116 1 210 3 210 1 0 97 -94 212 -210z"></path>
                          <path d="M1220 3575 l0 -115 480 0 480 0 0 115 0 115 -480 0 -480 0 0 -115z"></path>
                          <path d="M1220 3050 l0 -110 815 0 815 0 0 110 0 110 -815 0 -815 0 0 -110z"></path>
                          <path d="M1220 2530 l0 -110 655 0 655 0 0 110 0 110 -655 0 -655 0 0 -110z"></path>
                          <path d="M3245 2626 c-169 -28 -335 -102 -471 -210 -186 -149 -311 -356 -360 -597 -25 -125 -16 -344 20 -464 101 -337 368 -604 696 -694 346 -96 703 -7 964 240 167 158 270 352 306 582 17 106 8 289 -20 397 -91 354 -373 636 -729 726 -119 31 -291 39 -406 20z m360 -230 c139 -38 306 -141 392 -243 133 -158 193 -321 193 -524 0 -345 -216 -641 -550 -751 -87 -29 -106 -32 -230 -32 -100 0 -152 5 -200 18 -283 78 -496 292 -571 572 -32 120 -30 289 5 409 33 110 80 201 146 282 114 141 300 251 478 283 69 13 268 4 337 -14z"></path>
                          <path d="M3320 2162 l0 -69 -57 -29 c-109 -56 -168 -171 -144 -280 23 -103 91 -168 242 -230 93 -38 129 -69 129 -109 0 -60 -112 -83 -227 -47 l-62 20 -35 -104 -35 -104 67 -19 c37 -11 79 -22 95 -25 26 -6 27 -9 27 -71 l0 -65 110 0 110 0 0 83 c0 77 2 85 23 94 43 20 88 66 115 117 38 72 38 178 0 252 -44 85 -110 134 -245 183 -73 27 -113 63 -97 89 21 33 82 45 159 32 39 -6 79 -12 89 -13 15 -2 27 18 58 92 21 51 37 96 34 99 -3 2 -34 12 -68 22 l-63 17 -3 66 -3 67 -109 0 -110 0 0 -68z"></path>
                          <path d="M710 1990 l0 -170 110 0 110 0 0 170 0 170 -110 0 -110 0 0 -170z"></path>
                          <path d="M1220 1590 l0 -110 125 0 125 0 0 110 0 110 -125 0 -125 0 0 -110z"></path>
                          <path d="M705 1577 c-3 -7 -4 -136 -3 -287 l3 -275 768 -3 767 -2 0 115 0 115 -655 0 -655 0 0 175 0 175 -110 0 c-80 0 -112 -4 -115 -13z"></path>
                        </g>
                      </svg> */}
                    </div>
                    <div>
                      <p class="f18 semibold ">UA 40.15bn</p>
                      <p class="f14 semibold text-benGray"> Amount</p>
                    </div>
                  </li>

                  <li class="px-3 py-3 flex gap-x-4 flex1 justify-center items-center  border-l">
                    <div class="BgLtYellow icon_bg iconlg_bg border_none">
                      
                         <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 29 26" fill="none">
                          <g clip-path="url(#clip0_3_14118)">
                          <path d="M11.1687 12.2676C11.6129 12.2676 11.9743 12.5962 11.9743 13C11.9743 13.4038 11.6129 13.7324 11.1687 13.7324C10.7245 13.7324 10.363 13.4038 10.363 13C10.363 12.5962 10.7245 12.2676 11.1687 12.2676Z" fill="#FFA412"/>
                          <path d="M11.9743 9.41113V10.9287C11.7224 10.8472 11.4512 10.8027 11.1687 10.8027C9.8361 10.8027 8.75168 11.7886 8.75168 13C8.75168 14.2114 9.8361 15.1973 11.1687 15.1973C11.4512 15.1973 11.7224 15.1528 11.9743 15.0713V16.5889C11.7106 16.6377 11.441 16.6621 11.1687 16.6621C8.94772 16.6621 7.14035 15.019 7.14035 13C7.14035 10.981 8.94772 9.33789 11.1687 9.33789C11.441 9.33789 11.7106 9.3623 11.9743 9.41113Z" fill="#FFA412"/>
                          <path d="M5.52902 13C5.52902 15.8271 8.05881 18.127 11.1687 18.127C11.4399 18.127 11.709 18.1099 11.9743 18.0747V22.5215H9.55734C9.11262 22.5215 8.75168 22.1934 8.75168 21.7891V20.752C8.09264 20.5815 7.45724 20.3403 6.85192 20.0312L6.04142 20.7686C5.72668 21.0547 5.21696 21.0547 4.90222 20.7686L2.62326 18.6968C2.30841 18.4105 2.30964 17.9462 2.62326 17.6611L3.4343 16.9238C3.09377 16.374 2.82897 15.7964 2.64152 15.1973H1.5007C1.05598 15.1973 0.695038 14.8691 0.695038 14.4648V11.5352C0.695038 11.1309 1.05598 10.8027 1.5007 10.8027H2.64152C2.82897 10.2036 3.09377 9.62598 3.4343 9.07568L2.62326 8.33887C2.30964 8.05376 2.30841 7.58945 2.62326 7.30322L4.90222 5.23145C5.21696 4.94531 5.72668 4.94531 6.04142 5.23145L6.85246 5.96875C7.45724 5.65918 8.09264 5.41846 8.75168 5.24805V4.21094C8.75168 3.80664 9.11262 3.47852 9.55734 3.47852H11.9743V7.92529C11.709 7.89014 11.4399 7.87305 11.1687 7.87305C8.05881 7.87305 5.52902 10.1729 5.52902 13Z" fill="#FFA412"/>
                          <path d="M23.3611 3.90723V7.87305H27.7235L23.3611 3.90723ZM16.0027 7.87305H19.3327C19.7775 7.87305 20.1384 8.20117 20.1384 8.60547C20.1384 9.00977 19.7775 9.33789 19.3327 9.33789H16.0027C15.5579 9.33789 15.197 9.00977 15.197 8.60547C15.197 8.20117 15.5579 7.87305 16.0027 7.87305ZM24.1667 18.127H16.0027C15.5579 18.127 15.197 17.7988 15.197 17.3945C15.197 16.9902 15.5579 16.6621 16.0027 16.6621H24.1667C24.6114 16.6621 24.9724 16.9902 24.9724 17.3945C24.9724 17.7988 24.6114 18.127 24.1667 18.127ZM24.1667 15.1973H16.0027C15.5579 15.1973 15.197 14.8691 15.197 14.4648C15.197 14.0605 15.5579 13.7324 16.0027 13.7324H24.1667C24.6114 13.7324 24.9724 14.0605 24.9724 14.4648C24.9724 14.8691 24.6114 15.1973 24.1667 15.1973ZM24.1667 12.2676H16.0027C15.5579 12.2676 15.197 11.9395 15.197 11.5352C15.197 11.1309 15.5579 10.8027 16.0027 10.8027H24.1667C24.6114 10.8027 24.9724 11.1309 24.9724 11.5352C24.9724 11.9395 24.6114 12.2676 24.1667 12.2676ZM22.5554 9.33789C22.1107 9.33789 21.7497 9.00977 21.7497 8.60547V3.47852H13.5857V22.5215H27.3894C27.8341 22.5215 28.195 22.1934 28.195 21.7891V9.33789H22.5554Z" fill="#FFA412"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_3_14118">
                          <rect width="27.5" height="25" fill="white" transform="translate(0.695038 0.5)"/>
                          </clipPath>
                          </defs>
                          </svg>
                      {/* <svg
                        xmlns="http://www.w3.org/2000/svg"
                        version="1.0"
                        width="40"
                        height="40"
                        viewBox="0 0 512.000000 512.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)"
                          fill="CurrentColor"
                          stroke="none"
                        >
                          <path d="M700 3450 l0 -1050 115 0 115 0 0 940 0 940 780 0 780 0 0 -410 0 -410 405 0 405 0 0 -310 0 -310 110 0 110 0 0 397 0 398 -432 432 -433 433 -977 0 -978 0 0 -1050z m2235 450 l210 -210 -213 0 -212 0 0 210 c0 116 1 210 3 210 1 0 97 -94 212 -210z"></path>
                          <path d="M1220 3575 l0 -115 480 0 480 0 0 115 0 115 -480 0 -480 0 0 -115z"></path>
                          <path d="M1220 3050 l0 -110 815 0 815 0 0 110 0 110 -815 0 -815 0 0 -110z"></path>
                          <path d="M1220 2530 l0 -110 655 0 655 0 0 110 0 110 -655 0 -655 0 0 -110z"></path>
                          <path d="M3245 2626 c-169 -28 -335 -102 -471 -210 -186 -149 -311 -356 -360 -597 -25 -125 -16 -344 20 -464 101 -337 368 -604 696 -694 346 -96 703 -7 964 240 167 158 270 352 306 582 17 106 8 289 -20 397 -91 354 -373 636 -729 726 -119 31 -291 39 -406 20z m360 -230 c139 -38 306 -141 392 -243 133 -158 193 -321 193 -524 0 -345 -216 -641 -550 -751 -87 -29 -106 -32 -230 -32 -100 0 -152 5 -200 18 -283 78 -496 292 -571 572 -32 120 -30 289 5 409 33 110 80 201 146 282 114 141 300 251 478 283 69 13 268 4 337 -14z"></path>
                          <path d="M3320 2162 l0 -69 -57 -29 c-109 -56 -168 -171 -144 -280 23 -103 91 -168 242 -230 93 -38 129 -69 129 -109 0 -60 -112 -83 -227 -47 l-62 20 -35 -104 -35 -104 67 -19 c37 -11 79 -22 95 -25 26 -6 27 -9 27 -71 l0 -65 110 0 110 0 0 83 c0 77 2 85 23 94 43 20 88 66 115 117 38 72 38 178 0 252 -44 85 -110 134 -245 183 -73 27 -113 63 -97 89 21 33 82 45 159 32 39 -6 79 -12 89 -13 15 -2 27 18 58 92 21 51 37 96 34 99 -3 2 -34 12 -68 22 l-63 17 -3 66 -3 67 -109 0 -110 0 0 -68z"></path>
                          <path d="M710 1990 l0 -170 110 0 110 0 0 170 0 170 -110 0 -110 0 0 -170z"></path>
                          <path d="M1220 1590 l0 -110 125 0 125 0 0 110 0 110 -125 0 -125 0 0 -110z"></path>
                          <path d="M705 1577 c-3 -7 -4 -136 -3 -287 l3 -275 768 -3 767 -2 0 115 0 115 -655 0 -655 0 0 175 0 175 -110 0 c-80 0 -112 -4 -115 -13z"></path>
                        </g>
                      </svg> */}
                    </div>
                    <div>
                      <p class="f20 semibold ">1,143</p>
                      <p class="f14 semibold text-benGray"> Projects</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    
      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
          <div className="cardBody printnotbreak">
            <div class="cardTitle flex items-center flex-wrap justify-between">
              <div class="mb-4">
                <p class="f14 semibold text-uppercase text-normal">
                PROJECT SHORTFALL COUNT
                </p>
                <p class="f13 semibold text-light text-benGray">
                  {" "}
                  Quarterly Shortfall Trends in Project Targets
                </p>
              </div>
            </div>
            <div class="mt-4">
              <Shortfallcount />
            </div>
          </div>
        </div>

        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  EFFICIENCY TRENDLINE
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Temporal Efficiency Changes in Project Delivery
                  </p>
                 
                  
            </div>
            </div>
            <div class="mt-4">
              <OverallEffciencyPrecentage />
            </div>
          </div>
        </div>
      
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
            <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap justify-between">
                <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">
                    E&S CATEGORIZATION OF PROJECTS
                    </p>
                    <p class="f13 semibold text-light text-benGray">
                      {" "}
                      Proportion of Centralized vs. Decentralized Management by E&S Risk Category
                    </p>
                  
                </div>
              </div>
              <div class="mt-4">
                {/* <Decentralizedevolution /> */}
                <EandSCategarization/>
              </div>
            </div>
          </div>
        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
              <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  E&S RISK CATEGORIZATION COMPARISON
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Moderate vs. Significant E&S Risk Project Management and Targets
                  </p>
                  
             </div>
            </div>
            <div class="mt-4">
              {/* <BySovergionAndNonSovergion /> */}
              <EandSRiskCategarization/>
            </div>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
            <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap justify-between">
              <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">
                    YEAR-TO-DATE PROJECT PROGRESS
                    </p>
                    <p class="f13 semibold text-light text-benGray">
                      {" "}
                      Performance Against Annual Decentralized Targets
                    </p>
                  
                    
              </div>
              </div>
              <div class="mt-4">
                <Decentralizedevolution />
              </div>
            </div>
          </div>
        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  PROJECT DISTRIBUTION MATRIX
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Comparison of Sovereign and Non-Sovereign Projects
                  </p>
                 
                  
            </div>
            </div>
            <div class="mt-4">
              <BySovergionAndNonSovergion />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap items-center justify-between border-b mb-4">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  STAFF PROJECT MANAGEMENT ASSIGNMENT STATUS
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Distribution of Active and Inactive Staff Across Project Management Roles
                  </p>
                 
                  
            </div>
           </div>
           <div class="flex flex-wrap gap-x-3 justify-between w100 regional_project_content"> 
                <div className="BgGreen w-35 rounded-md">
                    <DistributionComplex />
                </div> 
                <div class="flex1 regional_project_right">
                   <DistributionComplexTable />
                </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin mb-2 printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  REGIONAL PROJECT MANAGEMENT EFFECTIVENESS
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Centralized vs. Decentralized Projects from the Region.
                  </p>
                 
                  
            </div>
            </div>
            <div class="">
              <ByRegion />
            </div>
          </div>
        </div>
        <div className="card bg-white rounded-md card-shadow grid-margin mb-2 printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
              <div className="mb-4">
              <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  OVERVIEW BY SECTOR DEPARTMENT
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Comparison of Project Management between Departments
                  </p>
                 
                  
            </div>
              </div>
              <div className="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
                <select className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14  lg:w-54">
                    <option value>Division</option>
                    <option value>Sector</option>
                </select>
                <select className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 lg:w-54">
                  <option value>Department</option>
                  <option value>Sector</option>
                </select>
              </div>
            </div>
            <div class="">
              <ByDepartment />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  FINANCING WINDOW PATTERNS
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Centralized vs. Decentralized Allocation Across Financial Instruments.
                  </p>
                 
                  
            </div>
            </div>
            <div class="">
              <Byfinacingwindow />
            </div>
          </div>
        </div>

       

        <div className="card bg-white rounded-md card-shadow grid-margin printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  PROJECT DYNAMICS IN TRANSITION STATES
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Analysis of Project Distribution in Different Transition States
                  </p>
                 
                  
            </div>
            </div>
            <div class="">
              <ByTransitionStates />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin mb-2 printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  PROJECT NATURE BREAKDOWN
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Centralized vs. Decentralized Nature Comparison
                  </p>
                 
                  
            </div>
            </div>
            <div class="">
              <ByNature />
            </div>
          </div>
        </div>
        <div className="card bg-white rounded-md card-shadow grid-margin mb-2 printnotbreak">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
            <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                  SECTORAL PROJECT DISPERSION
                  </p>
                  <p class="f13 semibold text-light text-benGray">
                    {" "}
                    Decentralized Project Allocation by Sector
                  </p>
                 
                  
            </div>
            </div>
            <div class="">
              <BySector />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 printnotbreak">
        <ReportTable />
      </div>
      
     
      </div>
  );
};

export default Optimization;
