import React, { useState } from "react";
import { BsMap } from "react-icons/bs";
import { AiOutlineBarChart, AiOutlinePieChart } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BiSolidShoppingBags } from "react-icons/bi";
// import { NavLink } from "react-router-dom";
import { NavLink } from "react-router-dom";
import DatePicker from "react-datepicker";


const navigation = [
    { name: "Lending Plan", href: "/geospatial", icon: BsMap, current: true },
    {
      name: "Lending Approval",
      href: "/lendingApproval",
      icon: AiOutlinePieChart,
      current: false,
    },
   
    {
      name: "Portfolio",
      href: "/portfolio",
      icon: BiSolidShoppingBags,
      current: false,
    },
    {
      name: "PipeLine",
      href: "/pipeline",
      icon: FaUserFriends,
      current: false,
    },
  ];
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

const GeospaticalTabLinks = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };
  return (
    <div className="ben__GeospatialPage ben_LandingPage  w-full block flex-wrap">
        <div className="">
            <div className="TabsLayout mb-6 flex flex-wrap justify-content-between border-b">
            <ul className="ben__DashboardLinks flex items-center flex-wrap flex1 border0">
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
          <div className="pageTitle block bg-benThinBlue text-benBlue f16 rounded-md p-5 semibold mb-5">
            TOTAL: 132 operations, amounting to UA 3,961 million as Lending Plan
          </div>
          <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div className="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">
                    Geospatial Analytics
                  </p>
                </div>
                <div className="mb-4">
                  <div className="ben__DashboardLinks flex items-center flex-wrap gap-x-2">
                  
                  
                  <div className="relative block rounded-md px-4 py-3 text-base flex items-center f14 datePicker-border custm_datepicker mb-4 ">
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

                    <div>
                      <select
                        name="region"
                        id="region"
                        className="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box mb-4"
                      >
                        <option value>Report Type</option>
                        <option value="PAK">Pending</option>
                        <option value="US">Approve</option>
                        <option value="CA">Reject</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap CardDivgap justify-between grid-margin grid_boxes">
                  <div className="col-box card bg-white rounded-md card-shadow w-25 flex flex1 flex-col justify-center">
                      <div className="cardBody">
                        <div className="flex w-full gap-x-3 justify-between">
                          <div class="">
                            <p class="f14 text-black mb-1">PORTFOLIO</p>
                            <p class="text-benLightBlue f17 text-bold mb-1">UA 5,898 m </p>
                            <p className="text-benGray f15 mb-3">296</p>                       
                          </div>
                          <div className="flex flex-col justify-between">
                            <div className="BgRed icon_bg border_Red border-l border-r border-t border-b">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#FA6767" stroke="none"><path d="M2224 4832 c-141 -49 -233 -173 -250 -336 l-7 -65 514 -4 c570 -4 562 -3 705 -73 180 -88 314 -255 365 -452 17 -69 19 -113 19 -519 0 -346 3 -445 13 -448 6 -2 200 -6 430 -7 l418 -3 -3 815 -3 815 -23 57 c-29 71 -75 129 -137 174 -94 67 -51 64 -1069 64 -852 -1 -925 -2 -972 -18z"></path><path d="M944 4192 c-101 -35 -186 -118 -225 -220 -16 -43 -23 -87 -26 -177 l-6 -120 839 0 c784 0 843 -1 904 -18 144 -41 291 -127 380 -223 25 -27 115 -146 199 -264 84 -118 160 -221 169 -227 10 -8 48 -13 99 -13 l83 0 0 428 c0 462 -3 490 -55 594 -57 113 -161 200 -282 238 -63 19 -91 20 -1047 20 -909 -1 -985 -2 -1032 -18z"></path><path d="M766 3460 c-73 -13 -144 -38 -206 -73 -79 -44 -179 -149 -222 -232 -72 -138 -68 -71 -68 -1283 0 -749 3 -1108 11 -1144 20 -97 83 -211 158 -286 76 -76 194 -142 289 -161 75 -15 3590 -15 3664 0 97 20 211 83 286 158 76 76 142 194 161 289 7 35 11 295 11 770 0 789 1 772 -62 902 -44 91 -168 214 -262 259 -124 59 -142 61 -776 61 -388 0 -588 4 -615 11 -80 22 -116 60 -270 276 -217 304 -244 333 -375 399 -120 60 -87 58 -915 60 -418 1 -782 -2 -809 -6z m1234 -1512 c48 -33 72 -70 77 -120 7 -58 -23 -118 -74 -149 l-38 -24 -365 0 -365 0 -38 24 c-51 31 -81 91 -74 149 5 50 29 87 77 120 33 22 36 22 400 22 364 0 367 0 400 -22z m6 -534 c53 -39 69 -71 69 -134 0 -63 -16 -95 -69 -134 -26 -20 -42 -21 -384 -24 -234 -2 -370 1 -394 8 -101 29 -140 168 -71 251 50 58 53 59 455 56 353 -2 368 -3 394 -23z"></path></g></svg>
                            </div>
                            <p className="f11"><span className="rounded-circle px-2 badge-red py-1 badge"><i class="ri-arrow-down-line"></i>5.27%</span></p>
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-box card bg-white rounded-md card-shadow w-25 flex flex1 flex-col justify-center">
                        <div className="cardBody">
                          <div className="flex w-full gap-x-3 justify-between">
                              <div class="">
                                  <p class="f14 text-black mb-1">LENDING APPROVAL</p>
                                  <p class="text-benLightBlue f17 text-bold mb-1"> UA 1,854,578.3</p>
                                  <p className="text-benGray f15 mb-3">321</p>                              
                                </div>
                                <div className="flex flex-col justify-between">
                                  <div className="BgGreen icon_bg border_Green border-l border-t border-b border-r">
                                      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                                        <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#42D29D" stroke="none">
                                          <path d="M2414 4719 c-89 -15 -206 -57 -294 -106 -113 -63 -266 -215 -327 -323 -201 -357 -144 -788 143 -1074 170 -171 382 -258 624 -258 242 0 454 87 624 258 287 286 344 717 143 1074 -61 108 -214 260 -327 323 -178 99 -393 138 -586 106z"></path>
                                          <path d="M832 3880 c-197 -52 -367 -201 -445 -390 -37 -90 -48 -150 -48 -256 0 -107 19 -192 66 -289 82 -170 248 -304 435 -351 85 -22 235 -21 320 1 148 38 304 148 389 274 135 200 148 465 34 684 -51 98 -172 219 -270 270 -146 76 -326 97 -481 57z"></path>
                                          <path d="M3952 3880 c-169 -45 -336 -176 -415 -327 -91 -175 -103 -380 -31 -561 76 -189 254 -345 454 -397 85 -22 235 -23 320 -1 236 60 424 248 485 485 19 73 22 222 6 296 -53 243 -247 444 -487 505 -100 26 -233 26 -332 0z"></path><path d="M1955 2755 c-152 -34 -252 -90 -366 -204 -95 -95 -146 -176 -188 -299 l-26 -77 -3 -840 c-2 -826 -2 -841 18 -873 11 -18 34 -41 52 -52 32 -20 53 -20 1118 -20 1065 0 1086 0 1118 20 18 11 41 34 52 52 20 32 20 47 18 873 l-3 840 -26 77 c-42 123 -93 204 -188 299 -95 95 -176 146 -299 188 l-77 26 -570 2 c-451 1 -583 -1 -630 -12z"></path>
                                          <path d="M642 2379 c-287 -37 -523 -241 -614 -529 -23 -75 -23 -77 -23 -595 l0 -520 23 -57 c47 -117 144 -213 260 -260 55 -22 67 -23 434 -26 l377 -3 -12 33 c-15 44 -23 1572 -8 1708 6 52 18 122 27 155 9 33 19 70 21 83 l5 22 -213 -1 c-118 -1 -243 -5 -277 -10z"></path><path d="M3993 2368 c2 -13 12 -50 21 -83 9 -33 21 -103 27 -155 15 -136 7 -1664 -8 -1708 l-12 -33 377 3 c367 3 379 4 434 26 116 47 213 143 260 260 l23 57 0 520 c0 519 0 520 -24 595 -75 240 -244 418 -471 495 -101 34 -203 45 -433 45 l-199 0 5 -22z"></path></g>
                                      </svg>
                                  </div> 
                                  <p className="f11"><span className="rounded-circle px-2 badge-red py-1 badge"><i class="ri-arrow-down-line"></i>3.27%</span></p>    
                                </div>
                                          
                          </div>
                        </div>
                  </div>
                  <div className="col-box card bg-white rounded-md card-shadow w-25 flex flex1 flex-col justify-center">
                        <div className="cardBody">
                          <div className="flex w-full gap-x-3 justify-between">
                              <div class="">
                                  <p class="f14 text-black mb-1">LENDING PLAN</p>
                                  <p class="text-benLightBlue f17 text-bold mb-1"> UA 1,854,578.3</p>
                                  <p className="text-benGray f15 mb-3">321</p>
                                  
                                </div>
                                <div className="flex flex-col justify-between">
                                  <div className="BgPurple border_purple icon_bg  border-t border-l border-r border-b">
                                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                        <path d="M2 4C2 3.44772 2.44772 3 3 3H10.4142L12.4142 5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21L3 21C2.45 21 2 20.55 2 20V4ZM10.5858 6L9.58579 5H4V7H9.58579L10.5858 6ZM4 9V19L20 19V7H12.4142L10.4142 9H4Z" fill="#7C86FF">                            
                                        </path>
                                      </svg>
                                  </div>    
                                  <p className="f11"><span className="rounded-circle px-2 badge-red py-1 badge"><i class="ri-arrow-down-line"></i>3.27%</span></p>
                                </div>                                         
                          </div>
                        </div>
                  </div>
                  <div className="col-box card bg-white rounded-md card-shadow w-25 flex1 flex flex-col justify-center">
                    <div className="cardBody">
                      <div className="flex w-full gap-x-3 justify-between">
                          <div class="">
                            <p class="f14 text-black mb-1"> IOP CYCLE</p>
                            <p class="text-benLightBlue f17 text-bold mb-1"> UA 1,854,578.3</p>
                            <p className="text-benGray f15 mb-3">186</p>
                            
                          </div>
                          <div className="flex flex-col justify-between">
                            <div className="BgLtblue border_Ltblue icon_bg border-t border-l border-r border-b">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#44BADC" stroke="none"><path d="M2245 4964 c-156 -21 -287 -52 -450 -105 -517 -170 -963 -516 -1275 -989 -136 -207 -275 -541 -329 -790 -69 -323 -69 -719 -1 -1034 11 -49 22 -91 24 -93 2 -3 25 11 50 30 125 96 281 133 456 107 35 -5 66 -8 67 -6 2 2 -4 34 -13 72 -57 246 -58 536 -2 794 58 269 194 552 368 765 84 103 252 260 360 338 112 79 357 203 486 245 524 172 1100 99 1563 -198 l83 -53 -133 -133 c-126 -126 -134 -136 -134 -173 0 -45 24 -77 64 -85 51 -11 1042 -136 1075 -136 48 0 65 8 82 41 13 27 9 73 -56 580 -39 304 -75 560 -81 570 -13 25 -41 39 -80 39 -28 0 -50 -18 -172 -138 l-139 -139 -137 92 c-330 221 -666 349 -1056 400 -144 19 -480 18 -620 -1z"></path><path d="M4861 3140 c-77 -66 -232 -120 -346 -120 -27 0 -79 5 -115 10 -35 5 -66 8 -67 6 -2 -2 4 -34 13 -72 72 -310 54 -667 -48 -978 -41 -128 -166 -374 -245 -486 -87 -123 -310 -346 -433 -433 -112 -79 -358 -204 -486 -245 -525 -172 -1100 -99 -1567 201 l-79 50 133 133 c126 126 134 136 134 173 0 43 -23 76 -58 85 -12 3 -220 30 -462 61 -242 31 -469 60 -505 65 -88 13 -152 12 -171 -3 -43 -33 -43 -29 31 -608 39 -303 75 -560 80 -570 14 -25 42 -39 81 -39 28 0 51 18 174 140 l141 141 45 -34 c245 -188 619 -359 929 -426 324 -69 717 -69 1037 0 616 133 1160 510 1516 1049 195 295 336 690 378 1059 15 138 7 515 -15 641 -23 132 -46 230 -54 230 -4 -1 -22 -14 -41 -30z"></path></g></svg>
                            </div>
                            <p className="f11"><span className="rounded-circle px-2 badge-green py-1 badge"><i class="ri-arrow-up-line"></i> 8.27%</span></p>   
                          </div>                      
                      </div>
                    </div>
                  </div>
            
                  <div className="col-box card bg-white rounded-md card-shadow w-25 flex1 flex flex-col justify-center">
                    <div className="cardBody">
                      <div className="flex w-full gap-x-3 justify-between">
                          <div class="">
                            <p class="f14 text-black mb-1"> PIPELINE</p>
                            <p class="text-benLightBlue f17 text-bold mb-1"> UA 1,854,578.3</p>
                            <p className="text-benGray f15 mb-3">296</p>                        
                            </div>
                            <div className="flex flex-col justify-between">
                              <div className="BgLtYellow icon_bg border_LtYellow  border-l border-r border-t border-b">
                                <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#F9BC0D" stroke="none"><path d="M490 1160 l0 -40 150 0 150 0 0 40 0 40 -150 0 -150 0 0 -40z"></path><path d="M530 960 l0 -120 110 0 110 0 0 120 0 120 -110 0 -110 0 0 -120z"></path><path d="M87 793 c-4 -3 -7 -73 -7 -155 l0 -148 40 0 40 0 0 155 0 155 -33 0 c-19 0 -37 -3 -40 -7z"></path><path d="M490 645 l0 -155 150 0 150 0 0 155 0 155 -150 0 -150 0 0 -155z"></path><path d="M1120 646 l0 -156 40 0 41 0 -3 153 -3 152 -37 3 -38 3 0 -155z"></path><path d="M200 645 l0 -115 125 0 126 0 -3 113 -3 112 -122 3 -123 3 0 -116z"></path><path d="M837 753 c-4 -3 -7 -55 -7 -115 l0 -108 125 0 125 0 0 115 0 115 -118 0 c-65 0 -122 -3 -125 -7z"></path><path d="M530 330 l0 -120 110 0 110 0 0 120 0 120 -110 0 -110 0 0 -120z"></path><path d="M490 130 l0 -40 150 0 150 0 0 40 0 40 -150 0 -150 0 0 -40z"></path></g></svg>
                              </div>  
                              <p className="f11"><span className="rounded-circle px-2 badge-green py-1 badge"><i class="ri-arrow-up-line"></i>  9.27%</span></p>
                            </div>                       
                      </div>
                    </div>
                  </div>
              </div>
        </div>
    </div>
  );
};

export default GeospaticalTabLinks;
