import React, { useState,useMemo, useRef, useEffect } from 'react';
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import PerfectScrollbar from "react-perfect-scrollbar";
import BudgetMatrix from "components/corporate/Budget/utilization/BudgetMatrix";
import BudgetChart from "components/corporate/Budget/utilization/BudgetChart";
import ActualChart from "components/corporate/Budget/utilization/ActualChart";
import Commited from "components/corporate/Budget/utilization/Commited";
import Available from "components/corporate/Budget/utilization/Available";
import Availablebudget from "components/corporate/Budget/utilization/Availablebudget";
import Executionrate from "components/corporate/Budget/utilization/Executionrate";
import Overallutilization from "components/corporate/Budget/utilization/Overallutilization";
import Budgetexecution from "components/corporate/Budget/utilization/Budgetexecution";
import Directlymanaged from "components/corporate/Budget/utilization/Directlymanaged";
import KeyDeliverable from "components/corporate/Budget/utilization/KeyDeliverable";
import Quartlybudget from "components/corporate/Budget/utilization/Quartlybudget";
import CoreBudget from "components/corporate/Budget/utilization/CoreBudget";
import KeyCommitment from "components/corporate/Budget/utilization/KeyCommitment";
import StatusBudget from "components/corporate/Budget/utilization/StatusBudget";
import Summarytable from "components/corporate/Budget/utilization/Summarytable";
import Statusofcdn from "components/corporate/Budget/utilization/Statusofcdn";
import Summarystatus from "components/corporate/Budget/utilization/Summarystatus";
import BudgetUtilization from "components/corporate/Budget/utilization/BudgetUtilization";
import Budgetperfornmance from "components/corporate/Budget/utilization/Budgetperfornmance";
import { BsSearch } from "react-icons/bs";
import DatePicker from "react-datepicker";

import { IoPrintOutline } from "react-icons/io5";
import { HiOutlineCloudDownload } from "react-icons/hi";

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const handlePrint = () => {
  window.print();
};

const Utilization = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [tabIndex, setTabIndex] = useState(0);
  const downloadDropdownRef = useRef(null);
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const [isDownloadVisibles, setDownloadVisibles] = useState(false);
  const [isDownloadVisibleBudget, setDownloadVisibleBudget] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");

  

  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };

  const toggleDownloadBudget = () => {
    setDownloadVisibleBudget(!isDownloadVisibleBudget);
  };

  const toggleDownloads = () => {
    setDownloadVisibles(!isDownloadVisibles);
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  let PageSize = 8;

  const AHVPData = [
    {
      type: "Lending Program",
      budget: 188469,
      actual: 82576,
      committed: 84020,
      inworkflow: 0,
      purchaseREQ: 0,
      utilizationRate: 81,
    },
    {
      type: "Portfolio Management",
      budget: 205320,
      actual: 78024,
      committed: 78024,
      inworkflow: 0,
      purchaseREQ: 0,
      utilizationRate: 40,
    },
  ];

  const RDVPData = [
    {
      type: "Knowledge Management",
      budget: 188469,
      actual: 82576,
      committed: 84020,
      inworkflow: 0,
      purchaseREQ: 0,
      utilizationRate: 81,
    },
    {
      type: "Pipeline Development",
      budget: 205320,
      actual: 78024,
      committed: 78024,
      inworkflow: 0,
      purchaseREQ: 0,
      utilizationRate: 40,
    },
    {
      type: "Portfolio",
      budget: 205320,
      actual: 78024,
      committed: 78024,
      inworkflow: 0,
      purchaseREQ: 0,
      utilizationRate: 40,
    },
    {
      type: "Office Management",
      budget: 205320,
      actual: 78024,
      committed: 78024,
      inworkflow: 0,
      purchaseREQ: 0,
      utilizationRate: 40,
    },
  ];

 

  const tableData = [...AHVPData, ...AHVPData, ...AHVPData, ...RDVPData];

  const csvData = [
    ["WBS", "BUDGET(A)", "ACTUAL(B)", "COMMITTED(C)", "AVAILABLE(D)=(A)-(C)","IN WORKFLOW","PURCHASE REQ","UTILIZATION RATE"],
    ...tableData.map(
      ({ type, budget, actual, committed,inworkflow,purchaseREQ,utilizationRate}) => [
        type, budget, actual, committed,inworkflow,purchaseREQ,utilizationRate
      
      ]
    ),
  ];

  const handle = useFullScreenHandle();

  const AHVPbudgetTotal = AHVPData.map((item) => item.budget).reduce(
    (a, b) => a + b,
    0
  );
  const roundedAHVPbudgetTotal = Number(AHVPbudgetTotal.toFixed(1));
 
  const AHVPactualTotal = AHVPData.map((item) => item.actual).reduce(
    (a, b) => a + b,
    0
  );
  const roundedAHVPactualTotal = Number(AHVPactualTotal.toFixed(1));

  const AHVPcommittedTotal = AHVPData.map((item) => item.committed).reduce(
    (a, b) => a + b,
    0
  );


  const roundedAHVPcommittedTotal = Number(AHVPcommittedTotal.toFixed(1));

  const AHVPinworkflowTotal = AHVPData.map((item) => item.inworkflow).reduce(
    (a, b) => a + b,
    0
  );
  const roundedAHVPinworkflowTotal= Number(AHVPinworkflowTotal.toFixed(1));

  const AHVPpurchaseREQTotal = AHVPData.map((item) => item.purchaseREQ).reduce(
    (a, b) => a + b,
    0
  );
  const roundedAHVPpurchaseREQTotal= Number(AHVPpurchaseREQTotal.toFixed(1));

  const AHVPutilizationRateTotal = AHVPData.map(
    (item) => item.utilizationRate
  ).reduce((a, b) => a - b, 200);

  const roundedAHVPutilizationRateTotal= Number(AHVPutilizationRateTotal.toFixed(1));

  const RDVPbudgetTotal = RDVPData.map((item) => item.budget).reduce(
    (a, b) => a + b,
    0
  );

  const roundedRDVPbudgetTotal= Number(RDVPbudgetTotal.toFixed(1));
  
  const RDVPactualTotal = RDVPData.map((item) => item.actual).reduce(
    (a, b) => a + b,
    0
  );

  const roundedRDVPactualTotal= Number(RDVPactualTotal.toFixed(1));

  const RDVPcommittedTotal = RDVPData.map((item) => item.committed).reduce(
    (a, b) => a + b,
    0
  );
  const roundedRDVPcommittedTotal= Number(RDVPcommittedTotal.toFixed(1));

  const RDVPinworkflowTotal = RDVPData.map((item) => item.inworkflow).reduce(
    (a, b) => a + b,
    0
  );

  const roundedRDVPinworkflowTotal= Number(RDVPinworkflowTotal.toFixed(1));
  const RDVPpurchaseREQTotal = RDVPData.map((item) => item.purchaseREQ).reduce(
    (a, b) => a + b,
    0
  );
  const RDVPutilizationRateTotal = RDVPData.map(
    (item) => item.utilizationRate
  ).reduce((a, b) => a + b, 200);

  const roundedRDVPutilizationRateTotal= Number(RDVPutilizationRateTotal.toFixed(1));

  

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option in the state
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        downloadDropdownRef.current &&
        !downloadDropdownRef.current.contains(event.target)
      ) {
        setDownloadVisible(false);
      }
    };
  
    document.body.addEventListener("click", handleClickOutside);
  
    const toggleDownload = () => {
      
  
      setDownloadVisible(!isDownloadVisible);
    };
  
    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);


  return (
    <div className="ben__GeospatialPage ben_LandingPage  w-full block flex-wrap">

        <div className="ben_FiltersAction flex items-center gap-2 lendingFilter_Action justify-end">
            
          <div className="flex items-center gap-x-2 flex-wrap">
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
                <button
                    className="border_blue bg-white text-benLightGray px-4 py-3 mb-4 rounded-md input-box f14 flex gap-x-2 mb-4 items-center btn text-white"
                    style={{ backgroundColor: "#7c86ff" }}
                  >
                    <HiOutlineCloudDownload
                      className="h-5 w-5 link-icon"
                      aria-hidden="true"
                    />
                    <span className="link-title f14">Download Report</span>
              </button>
          </div>
        </div>

     

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className='flex flex-wrap CardDivgap justify-between flex-col'>
          <div className="flex flex-wrap CardDivgap justify-between grid_boxes workLoad_keystats key_statsLayout">
                  <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
                      <div className="cardBody">
                        <div className="flex items-center w-full gap-x-3 justify-between">
                          <div class="">
                            <p class="f14 text-black mb-3">OVERALL BUDGET</p>
                            <p className="text-benLightBlue f18 text-bold mb-3"> UA 18,54,578.3</p>
                            <div class="textgreen flex items-center gap-x-1">
                                    <span>
                                       <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg>
                                     </span> 
                                    <span className='f14'>10.2%</span>
                             </div>                            
                          </div>
                          <div className="BgRed icon_bg border_Red border-l border-r border-t border-b">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#FA6767" stroke="none">
                              <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                              <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                              <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                              </g>
                            </svg>
                            
                          </div>
                        </div>
                      </div>
                  </div>
                  <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
                        <div className="cardBody">
                          <div className="flex items-center w-full gap-x-3 justify-between">
                              <div class="">
                                  <p class="f14 text-black mb-3">APPROVED BUDGET</p>
                                  <p className="text-benLightBlue f18 text-bold mb-3">UA 15,70,473.7</p>
                                  <div class="text_red flex items-center gap-x-1">
                                    <span>
                                      <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f5907e" stroke="none"><path d="M63 4663 c35 -60 609 -1052 1276 -2206 668 -1153 1217 -2097 1221 -2097 4 0 553 944 1221 2097 667 1154 1241 2146 1276 2206 l62 107 -2559 0 -2559 0 62 -107z"></path></g></svg>
                                    </span> 
                                    <span className='f14'>5.2%</span>
                                  </div>
                            </div>
                            <div className="BgGreen icon_bg border_Green border-l border-t border-b border-r">
                                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                  <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#42D29D" stroke="none">
                                  <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                                  <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                                  <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                                  </g>
                                  </svg>
                            </div>                     
                          </div>
                        </div>
                  </div>
                  <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
                    <div className="cardBody">
                      <div className="flex items-center w-full gap-x-3 justify-between">
                          <div class="">
                            <p class="f14 text-black mb-3">CURRENT ADJUSTED BUDGET</p>
                            <p className="text-benLightBlue f18 text-bold mb-3">UA 18,60,239.6</p>
                            <div class="textgreen flex items-center gap-x-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg>
                                </span> 
                                <span className='f14'>8.2%</span>
                             </div>
                          </div>
                          <div className="BgLtblue icon_bg border_Ltblue border-b border-t border-l border-r">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#44BADC" stroke="none">
                                <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                                <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                                <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                                </g>
                                </svg>
                        </div>                         
                      </div>
                    </div>
                  </div>
            
                  <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
                    <div className="cardBody">
                      <div className="flex items-center w-full gap-x-3 justify-between">
                          <div class="">
                            <p class="f14 text-black mb-3">BASELINE BUDGET</p>
                            <p className="text-benLightBlue f18 text-bold mb-3">UA 18,60,239.6</p>
                            <div class="textgreen flex items-center gap-x-1">
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg>
                                </span> 
                                <span className='f14'>9.2%</span>
                             </div>
                          </div>
                          <div className="BgLtYellow icon_bg border_LtYellow border-l border-r border-t border-b">
                            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#F9BC0D" stroke="none">
                              <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                              <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                              <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                              </g>
                              </svg>
                            {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="40" height="40" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                                <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#F9BC0D" stroke="none">
                                <path d="M700 3450 l0 -1050 115 0 115 0 0 940 0 940 780 0 780 0 0 -410 0 -410 405 0 405 0 0 -310 0 -310 110 0 110 0 0 397 0 398 -432 432 -433 433 -977 0 -978 0 0 -1050z m2235 450 l210 -210 -213 0 -212 0 0 210 c0 116 1 210 3 210 1 0 97 -94 212 -210z"/>
                                <path d="M1220 3575 l0 -115 480 0 480 0 0 115 0 115 -480 0 -480 0 0 -115z"/>
                                <path d="M1220 3050 l0 -110 815 0 815 0 0 110 0 110 -815 0 -815 0 0 -110z"/>
                                <path d="M1220 2530 l0 -110 655 0 655 0 0 110 0 110 -655 0 -655 0 0 -110z"/>
                                <path d="M3245 2626 c-169 -28 -335 -102 -471 -210 -186 -149 -311 -356 -360 -597 -25 -125 -16 -344 20 -464 101 -337 368 -604 696 -694 346 -96 703 -7 964 240 167 158 270 352 306 582 17 106 8 289 -20 397 -91 354 -373 636 -729 726 -119 31 -291 39 -406 20z m360 -230 c139 -38 306 -141 392 -243 133 -158 193 -321 193 -524 0 -345 -216 -641 -550 -751 -87 -29 -106 -32 -230 -32 -100 0 -152 5 -200 18 -283 78 -496 292 -571 572 -32 120 -30 289 5 409 33 110 80 201 146 282 114 141 300 251 478 283 69 13 268 4 337 -14z"/>
                                <path d="M3320 2162 l0 -69 -57 -29 c-109 -56 -168 -171 -144 -280 23 -103 91 -168 242 -230 93 -38 129 -69 129 -109 0 -60 -112 -83 -227 -47 l-62 20 -35 -104 -35 -104 67 -19 c37 -11 79 -22 95 -25 26 -6 27 -9 27 -71 l0 -65 110 0 110 0 0 83 c0 77 2 85 23 94 43 20 88 66 115 117 38 72 38 178 0 252 -44 85 -110 134 -245 183 -73 27 -113 63 -97 89 21 33 82 45 159 32 39 -6 79 -12 89 -13 15 -2 27 18 58 92 21 51 37 96 34 99 -3 2 -34 12 -68 22 l-63 17 -3 66 -3 67 -109 0 -110 0 0 -68z"/>
                                <path d="M710 1990 l0 -170 110 0 110 0 0 170 0 170 -110 0 -110 0 0 -170z"/>
                                <path d="M1220 1590 l0 -110 125 0 125 0 0 110 0 110 -125 0 -125 0 0 -110z"/>
                                <path d="M705 1577 c-3 -7 -4 -136 -3 -287 l3 -275 768 -3 767 -2 0 115 0 115 -655 0 -655 0 0 175 0 175 -110 0 c-80 0 -112 -4 -115 -13z"/>
                                </g>
                                </svg> */}
                        </div>                         
                      </div>
                    </div>
                  </div>
          </div>
          <div className="card bg-white rounded-md card-shadow grid-margin flex1">
            <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">OVERALL UTILIZATION RATE</p>
                </div>
              </div>
            
                
              <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
                  <div className='flex gap-x-1 justify-between items-center flex-wrap'>
                    <div className='overall_utilization_graph' style={{width:'200px'}}>
                          <Overallutilization />
                      </div>
                      <div className='card card bg-purple rounded-md grid-margin flex1 overall_utilization'>
                        <div className='cardBody'>
                            <div class="mb-3 text-center overallOverheads_Account"> 
                              <p class="f42 semibold text-uppercase">39%</p>
                              <p class="f12 semibold text-benGray"> Office Management/Overheads Accounts <br></br> for the approval.</p>
                            </div> 
                            {/* <ul class=" flex justify-center w-full GeopatitalMap flex-wrap chart_bottom ">
                              <li class="py-3 px-3 text-left uac_data">
                                  <p class="f16 semibold text-benLightBlue">UAC 1,734,286</p>
                                  <p class="f11 semibold text-benGray">Approved for 2022</p>
                              </li>
                              <li class="py-3 px-3 text-left border_purple border-l uac_data">
                                <p class="f16 semibold text-benLightBlue">UAC 1,675,597.3</p>
                                <p class="f11 semibold text-benGray">Current/Adjusted Budget </p>
                                </li>
                            </ul> */}
                        </div>
                      </div>
                      
                  </div>
                </div>
                  {/* <div class="mb-4 text-center"> 
                      <p class="f25 semibold text-uppercase">39%</p>
                      <p class="f14 semibold text-benGray"> Office Management/Overheads Accounts for the approval.</p>
                  </div> */}
              
                {/* <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
                      <ul class=" flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom">
                        <li class="px-3 py-3 text-center">
                            <p class="f18 semibold ">UAC 1,734,286</p>
                            <p class="f13 semibold text-benGray">Approved for 2022</p>
                        </li>
                        <li class="text-center px-3 py-3 border-l border-benThinBlue  text-center">
                          <p class="f18 semibold">UAC 1,675,597.3</p>
                          <p class="f13 semibold text-benGray">Current/Adjusted Budget </p>
                          </li>
                      </ul>
              </div> */}
            </div>         
          </div>
        </div>
        {/* <div className="flex flex-wrap CardDivgap justify-center grid-margin">
              <div className="col-box card bg-white rounded-md card-shadow w-50  flex flex-col justify-center">
                  <div className="cardBody">
                    <div className="flex items-center w-full gap-x-3 justify-between">
                      <div class="">
                        <p class="f14 text-black mb-3">OVERALL BUDGET</p>
                        <p className="text-benLightBlue f18 text-bold mb-3"> UA 1,854,578.3</p>
                        <p className="f14 text-black ">5.2%</p>
                      </div>
                      <div className="BgRed icon_bg border_Red border-l border-r border-t border-b">
                         <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#FA6767" stroke="none">
                          <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                          <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                          <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                          </g>
                        </svg>
                        
                      </div>
                    </div>
                  </div>
              </div>
              <div className="col-box card bg-white rounded-md card-shadow w-50  flex flex-col justify-center">
                    <div className="cardBody">
                      <div className="flex items-center w-full gap-x-3 justify-between">
                          <div class="">
                              <p class="f14 text-black mb-3">APPROVED BUDGET</p>
                              <p className="text-benLightBlue f18 text-bold mb-3">UA 1,570,473.7</p>
                              <p className="f14 text-black ">5.2%</p>
                        </div>
                        <div className="BgGreen icon_bg border_Green border-l border-t border-b border-r">
                              <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                              <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#42D29D" stroke="none">
                              <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                              <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                              <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                              </g>
                              </svg>
                        </div>                     
                      </div>
                    </div>
              </div>
              <div className="col-box card bg-white rounded-md card-shadow w-50  flex flex-col justify-center">
                <div className="cardBody">
                  <div className="flex items-center w-full gap-x-3 justify-between">
                      <div class="">
                        <p class="f14 text-black mb-3">CURRENT ADJUSTED BUDGET</p>
                        <p className="text-benLightBlue f18 text-bold mb-3">UA 1,860,239.6</p>
                        <p className="f14 text-black">8.2%</p>
                      </div>
                      <div className="BgLtblue icon_bg border_Ltblue border-b border-t border-l border-r">
                          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#44BADC" stroke="none">
                            <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                            <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                            <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                            </g>
                            </svg>
                    </div>                         
                  </div>
                </div>
              </div>
        
              <div className="col-box card bg-white rounded-md card-shadow w-50  flex flex-col justify-center">
                <div className="cardBody">
                  <div className="flex items-center w-full gap-x-3 justify-between">
                      <div class="">
                        <p class="f14 text-black mb-3">BASELINE BUDGET</p>
                        <p className="text-benLightBlue f18 text-bold mb-3">UA 1,860,239.6</p>
                        <p className="f14 text-black">9.2%</p>
                      </div>
                      <div className="BgLtYellow icon_bg border_LtYellow border-l border-r border-t border-b">
                        <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                          <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#F9BC0D" stroke="none">
                          <path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"/>
                          <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"/>
                          <path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"/>
                          </g>
                          </svg>
                      
                    </div>                         
                  </div>
                </div>
              </div>
        </div> */}
        <div className="card bg-white rounded-md card-shadow grid-margin">
          <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap justify-between">
                <p class="f14 semibold text-uppercase text-normal mb-4">Budget Performance Metric</p>
                  <div class="mb-4">
                      <select  name="budgetMetric"
                    id="budgetMetric" class="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box">
                      <option value>Complex</option>
                    <option value="PAK">Program 1</option>
                    <option value="US"> Program 2</option>
                    <option value="CA">Program 3</option>
                      </select>
                    </div>
              </div>
              <div>
                 <BudgetMatrix />
              </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin ">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap justify-between">
                <p class="f14 semibold text-uppercase text-normal mb-4">KEY DELIVERABLES</p>
                  <div class="mb-4">
                      <select  name="budgetMetric" id="budgetMetric" class="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box">
                        <option value>US Budget</option>
                          <option value="1">Program 1</option>
                          <option value="2"> Program 2</option>
                          <option value="3">Program 3</option>
                      </select>
                    </div>
              </div>
              <div>
                 <KeyDeliverable />
              </div>
          </div>
        </div>

        <div className="flex flex-wrap CardDivgap justify-between grid-margin grid_boxes workLoad_keystats key_statsLayout keyDeliverable_rightContent">

            <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
                <div className="cardBody">                
                  <div className="flex items-center justify-between gap-x-3">
                    <div className="flex1">
                        <div className="f14 semibold text-uppercase text-normal mb-4 border-b dashed">
                           <p className="pb-2 text-benLightBlue">BUDGET</p> 
                        </div>
                        <div className="flex items-center gap-x-2 flex1 justify-between">
                          <div className="">
                            <div className="f13 flex label_withNumber text-benGray mb-2">
                              <label>Consultancy:</label>
                              <span>264.5</span>
                            </div>
                            <div className="f13 flex label_withNumber text-benGray">
                              <label>Mission:</label>
                              <span>364.5</span>
                            </div>                         
                          </div>
                        </div>
                      </div>
                    <div className="keydeliverablegraph">
                      <BudgetChart />
                    </div>
                  </div>
                </div>
              </div>
           
            <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
              <div className="cardBody">                
                <div className="flex items-center justify-between gap-x-3">
                <div className="flex1">
                       <div className="f14 semibold text-uppercase text-normal mb-4 border-b dashed">
                          <p className="pb-2 text-benLightBlue">ACTUAL</p> 
                      </div>
                      <div className="flex items-center gap-x-2 flex1 justify-between">
                        <div className="">
                          <div className="f13 flex label_withNumber text-benGray mb-2">
                            <label>Consultancy:</label>
                            <span>173.7</span>
                          </div>
                          <div className="f13 flex label_withNumber text-benGray">
                            <label>Mission:</label>
                            <span>97.3</span>
                          </div>                         
                        </div>
                      </div>
                    </div>
                  <div className="keydeliverablegraph">
                    <ActualChart />
                  </div>
                </div>
              </div>
            </div>

            <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
                <div className="cardBody">                
                  <div className="flex items-center justify-between gap-x-3">
                    <div className="flex1">
                        <div className="f14 semibold text-uppercase text-normal mb-4 border-b dashed">
                           <p className="pb-2 text-benLightBlue">COMMITTED</p> 
                        </div>
                        <div className="flex items-center gap-x-2 flex1 justify-between">
                          <div className="">
                            <div className="f13 flex label_withNumber text-benGray mb-2">
                              <label>Consultancy:</label>
                              <span>175.2</span>
                            </div>
                            <div className="f13 flex label_withNumber text-benGray">
                              <label>Mission:</label>
                              <span>101.9</span>
                            </div>                         
                          </div>
                        </div>
                      </div>
                    <div className="keydeliverablegraph">
                       <Commited />
                    </div>
                  </div>
                </div>
              </div>
           
            <div className="col-box card bg-white rounded-md card-shadow grid-50 flex1 flex flex-col justify-center">
              <div className="cardBody">                
                <div className="flex items-center justify-between gap-x-3">
                  <div className="flex1">
                       <div className="f14 semibold text-uppercase text-normal mb-4 border-b dashed">
                          <p className="pb-2 text-benLightBlue"> AVAILABLE</p> 
                      </div>
                      <div className="flex items-center gap-x-2 flex1 justify-between">
                        <div className="">
                          <div className="f13 flex label_withNumber text-benGray mb-2">
                            <label>Consultancy:</label>
                            <span>189.3</span>
                          </div>
                          <div className="f13 flex label_withNumber text-benGray">
                            <label>Mission:</label>
                            <span>289.3</span>
                          </div>                         
                        </div>
                      </div>
                    </div>
                  <div className="keydeliverablegraph">
                    <Available />
                  </div>
                </div>
              </div>
            </div>

        </div>
      </div>

      <div class="">
        <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
          <div className="card bg-white rounded-md card-shadow grid-margin">
            <div className="cardBody">
                <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">BREAKDOWN OF AVAILABLE BUDGET</p>
                    <p class="f13 semibold text-light text-red">Coefficient Budget:Current Provisions made available for Complex</p></div>
                  <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
                    <select
                        name="budgetMetric"
                        id="budgetMetric"
                        className="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box"
                      >
                        <option value>Area</option>
                        <option value="1">Program 1</option>
                        <option value="2"> Program 2</option>
                        <option value="3">Program 3</option>
                      </select>
                  </div>
                </div>
                <div>
                  <Availablebudget />
                </div>                        
            </div>
          </div>
          <div className="card bg-white rounded-md card-shadow grid-margin">
            <div className="cardBody">
                <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">OVERALL BUDGET EXECUTION (EXCL.STAFF COSTS)</p>
                    <p class="f13 semibold text-light text-benGray">RDVP Budget (UA millions)</p></div>
                    <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
                    
                    </div>
                </div>
                <div className="mt-4">
                  <div className="cardDiv grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 CardDivgap overall_budgetExecution">
                     <div className="card rounded-md card-shadow grid-margin BgGreen border_Green border-l border-t border-b border-r">
                        <div className="cardBody">
                          <div className="flex items-center justify-between gap-x-3 flex-col">
                              <p className="f30 items-center text-bold block whitespace-nowrap mb-2">
                                23.2
                              </p>
                              <p className="f13 text-benGray">ORIGINAL</p>                            
                          </div>
                        </div>
                      </div>

                      <div className="card rounded-md card-shadow grid-margin BgLtblue border_Ltblue  border-b border-t border-l border-r">
                        <div className="cardBody">
                          <div className="flex items-center justify-between gap-x-3 flex-col">
                              <p className="f25  items-center text-bold block whitespace-nowrap mb-2">
                                23.2
                              </p>
                              <p className="f13 text-benGray">AdJUSTED</p>                            
                          </div>
                        </div>
                      </div>                      
                   </div>
                  <div className="cardDiv grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 CardDivgap overall_budgetExecution">
                     <div className="card rounded-md card-shadow grid-margin BgLtblue border_Ltblue  border-b border-t border-l border-r">
                        <div className="cardBody h100">
                          <div className="flex items-center justify-between gap-x-3 h100">
                              <div className="">
                                    <p className="f14">Execution Rate</p>
                              </div>
                              <div className="w30">
                                  <Executionrate />
                              </div>
                               <div className="mt-2">
                                    <p className="f18 whitespace-nowrap text-bolder">UA 4,569m</p>
                                    <p className="f14">+1.55%</p>
                                </div>
                          </div>
                        </div>
                      </div>     
                    

                    <div className="card rounded-md card-shadow grid-margin BgGreen border_Green border-l border-t border-b border-r">
                        <div className="cardBody">
                          <div className="flex items-center justify-between gap-x-3 flex-col">
                              <p className="f30 items-center text-bold block whitespace-nowrap mb-2">+0.4</p>
                              <p className="f13 text-benGray"> VARAIANCE ORIGINAL / ADJUSTED{" "}</p>                            
                          </div>
                        </div>
                    </div>    
                   
                  </div>
                </div>    
                <div className="text-center">
                    <p className="f12 semibold mb-1 text-benGray">
                      Overall budget adjusted upward mainly due to transfers from the salary savings pool (SVP’s approval)
                    </p>
                    <p className="f12 semibold mb-1 text-benGray">By budget type: 75% for centrally managed and 59% for direct budget allotted respectively</p>
                 </div>                    
            </div>
          </div>


        </div>
      </div>



      <div className="flex CardDivgap ">
        {/* <div className="card bg-white rounded-md card-shadow grid-margin flex1">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">OVERALL UTILIZATION RATE</p>
              </div>
            </div>
           
              
            <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
                  <div>
                    <Overallutilization />
                  </div>
              </div>
                <div class="mb-4 text-center"> 
                    <p class="f25 semibold text-uppercase">39%</p>
                    <p class="f14 semibold text-benGray"> Office Management/Overheads Accounts for the approval.</p>
                </div>
            
              <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
                    <ul class=" flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom">
                      <li class="px-3 py-3 text-center">
                          <p class="f18 semibold ">1,734,286 UAC</p>
                          <p class="f13 semibold text-benGray">Approved for 2022</p>
                      </li>
                      <li class="text-center px-3 py-3 border-l border-benThinBlue  text-center">
                        <p class="f18 semibold">1,675,597.3 UAC</p>
                        <p class="f13 semibold text-benGray">Current/Adjusted Budget </p>
                        </li>
                    </ul>
            </div>
          </div>         
        </div> */}
        <div className="card bg-white rounded-md card-shadow grid-margin budget_performance w100">
          <div className="cardBody">
            <div className="theme_Tabs">
              <Tabs
                selectedIndex={tabIndex}
                onSelect={(tabIndex) => setTabIndex(tabIndex)}
              >
                <TabList className="flex mb-5 theme_TabsContent">
                  <Tab
                    className="px-4 py-3 flex items-center justify-center flex1 text-center"
                    style={
                      tabIndex === 0
                        ? { backgroundColor: "#007bff", color: "#fff" }
                        : {}
                    }
                  >
                    {" "}
                    <span className="link-title f13">Lending And PipeLine</span>
                  </Tab>
                  <Tab
                    className="px-4 py-3 flex items-center justify-center flex1 text-center"
                    style={
                      tabIndex === 1
                        ? { backgroundColor: "#007bff", color: "#fff" }
                        : {}
                    }
                  >
                    {" "}
                    <span className="link-title f13">Non_Lending</span>
                  </Tab>
                  <Tab
                    className="px-4 py-3 flex items-center justify-center flex1 text-center"
                    style={
                      tabIndex === 2
                        ? { backgroundColor: "#007bff", color: "#fff" }
                        : {}
                    }
                  >
                    {" "}
                    <span className="link-title f13">Office management</span>
                  </Tab>
                  <Tab
                    className="px-4 py-3 flex items-center justify-center flex1 text-center"
                    style={
                      tabIndex === 3
                        ? { backgroundColor: "#007bff", color: "#fff" }
                        : {}
                    }
                  >
                    {" "}
                    <span className="link-title f13 ">
                      Portfolio management
                    </span>
                  </Tab>
                </TabList>

                <TabPanel>
                <div class="mb-2">
                    <p class="f14 semibold text-uppercase text-normal">
                        Budget Performance Metric[Figure in UA]
                      </p>
                  </div>

                  <div className="mt-2 flex flex-wrap justify-between budget_performanceLayout">
                     <div className="w-50">
                       <Budgetperfornmance />
                      </div>
                    <div className="w-50">
                        <Quartlybudget />
                      </div>  
                  </div>
                </TabPanel>
                <TabPanel>
                <div class="mb-2">
                    <p class="f14 semibold text-uppercase text-normal">
                        Budget Performance Metric[Figure in UA]
                      </p>
                  </div>

                  <div className="mt-2 flex flex-wrap justify-between">
                  <div className="w-50">
                       <Budgetperfornmance />
                      </div>
                    <div className="w-50">
                        <Quartlybudget />
                      </div>  
                  </div>
                </TabPanel>
                <TabPanel>
                <div class="mb-2">
                    <p class="f14 semibold text-uppercase text-normal">
                        Budget Performance Metric[Figure in UA]
                      </p>
                  </div>
                  <div className="mt-2 flex flex-wrap justify-between">
                  
                    <div className="w-50">
                       <Budgetperfornmance />
                      </div>
                    <div className="w-50">
                        <Quartlybudget />
                      </div>  
                  </div>
                </TabPanel>
                <TabPanel>
                <div class="mb-2">
                    <p class="f14 semibold text-uppercase text-normal">
                        Budget Performance Metric[Figure in UA]
                      </p>
                  </div>
                  <div className="mt-2 flex flex-wrap justify-between">
                    <div className="w-50">
                        <Budgetperfornmance />
                    </div>
                    <div className="w-50">
                        <Quartlybudget />
                    </div>

                  </div>
                </TabPanel>
              </Tabs>
            </div>
          </div>
        </div>
        {/* <div className="card bg-white rounded-md card-shadow grid-margin budget_performance">
          <div className="cardBody">
              <div className="flex budget_filter mb-4">
                  <button className="px-4 py-3 flex items-center justify-center flex1 text-center">
                  <span className="link-title f13">Lending And PipeLine</span>
                </button>
                <button className="px-4 py-3 flex items-center justify-center flex1 text-center">
                  <span className="link-title f13">Non_Lending</span>
                </button>
                <button className="px-4 py-3 flex items-center justify-center flex1 text-center">
                  <span className="link-title f13">Office management</span>
                </button>
                <button
                  className="px-4 py-3 flex items-center justify-center flex1 text-center" style={{ backgroundColor: "#7c86ff" }}>
                  <span className="link-title f13 text-white">Portfolio management</span>
                </button>
              </div>

              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div class="mb-2 mt-2">
                  <p class="f14 semibold text-uppercase text-normal">Budget Performance Metric[Figure in UA]</p>
              </div>
             </div>
          
            <div className="mt-2 flex flex-wrap justify-between">
              <Budgetperfornmance />

              <Quartlybudget />
            </div>
          </div>
        </div> */}
      </div>

{/* 
      <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin ">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">OVERALL UTILIZATION RATE</p>
              </div>
             </div>
           
              
              <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
                  <div>
                    <Overallutilization />
                    </div>
                  <div class=" flex items-center flex-wrap items-center justify-between">
                    <div class="mb-4">
                      <p class="f25 semibold text-uppercase mb-2">39%</p>
                      <p class="f14 semibold text-benGray"> [RDNG] Office Management/Overheads Accounts for the approval.</p>
                    </div>
                 </div>
            
              </div>
              <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">

                <ul class=" flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom">
                  <li class="px-5 py-5 text-center">
                     <p className="f22 semibold ">1,734,286 UAC</p>
                      <p className="f14 semibold text-benGray">Approved for 2022</p>
                  </li>
                  <li class="text-center px-5 py-5 border-l border-benThinBlue  text-center">
                     <p className="f22 semibold">1,675,597.33 UAC</p>
                      <p className="f14 semibold text-benGray">Current/Adjusted Budget </p>
                  </li>                 
                </ul>

            </div>
          </div>         
        </div>
      </div>
     <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin budget_performance">
          <div className="cardBody">
              <div className="flex budget_filter mb-4">
                  <button className="px-4 py-3 flex items-center justify-center flex1 text-center">
                  <span className="link-title f13">Lending And PipeLine</span>
                </button>
                <button className="px-4 py-3 flex items-center justify-center flex1 text-center">
                  <span className="link-title f13">Non_Lending</span>
                </button>
                <button className="px-4 py-3 flex items-center justify-center flex1 text-center">
                  <span className="link-title f13">Office management</span>
                </button>
                <button
                  className="px-4 py-3 flex items-center justify-center flex1 text-center" style={{ backgroundColor: "#7c86ff" }}>
                  <span className="link-title f13 text-white">Portfolio management</span>
                </button>
              </div>

              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div class="mb-2 mt-2">
                  <p class="f14 semibold text-uppercase text-normal">Budget Performance Metric[Figure in UA]</p>
              </div>
             </div>
          
            <div className="mt-2 flex flex-wrap justify-between CardDivgap">
              <div className="w-50">
                <Budgetperfornmance />
              </div>
              
              <div className="w-50">
                <Quartlybudget />
              </div>

            </div>
          </div>
        </div>
      </div> */}

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin ">
          <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                      <p class="f14 semibold text-uppercase text-normal"> Overall budget execution (excl. staff costs){" "}</p>
                      <p class="f13 semibold text-light text-benGray">Centrally Managed</p>
                  </div>
              </div>
              <div className="mt-4">
                <Budgetexecution />
              </div>
          </div>
        </div>
        <div className="card bg-white rounded-md card-shadow grid-margin">
          <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                      <p class="f14 semibold text-uppercase text-normal"> Overall budget execution (excl. staff costs){" "}</p>
                      <p class="f13 semibold text-light text-benGray">Directly Managed </p>
                  </div>
              </div>
            <div className="mt-4">
               <Directlymanaged />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <div className="card bg-white rounded-md card-shadow grid-margin ">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div class="mb-4">
                   <p class="f14 semibold text-uppercase text-normal">CORE BUDGET ACTIVITIES </p>
                </div>
            </div>
            <div className="mt-4">
               <CoreBudget />
            </div>
          </div>
        </div>
        <div className="card bg-white rounded-md card-shadow grid-margin">
          <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">Key Commitment Items</p>
                  </div>
              </div>            
              <div className="mt-4">
                  <KeyCommitment />
              </div>
          </div>
        </div>
      </div>

      <div className="card bg-white rounded-md card-shadow grid-margin">
        <div className="cardBody">
      
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">Budget Composition</p>
                  </div>
                  <div className="flex items-center mb-4 gap-x-2 justify-end">

                      <form className="border_blue relative flex bg-white rounded-md  mb-4 px-4 py-3 text-base input-box flex items-center f14 lg:w-56">
                        <BsSearch className="pointer-events-none absolute inset-y-0 left-5 h-full w-4 text-benGray" />
                        <label htmlFor="search-field" className="sr-only">
                          Search
                        </label>
                        <input
                          id="search-field"
                          className="block h-full w-full border-0 f14 pl-8 text-benGray placeholder:text-benGray bg-transparent f14"
                          placeholder="Search..."
                          type="search"
                          name="search"
                        />
                      </form>
                      <select
                        name="budgetMetric"
                        id="budgetMetric"
                        className="bg-benThinGray text-benLightGray mb-4 py-3 px-6 rounded-md f14 input-box"
                      >
                        <option value>Deliverable Complex</option>
                        <option value="1">Program 1</option>
                        <option value="2"> Program 2</option>
                        <option value="3">Program 3</option>
                      </select>
                      <div className="ellipsis-button" ref={downloadDropdownRef}>
              <i
                className="ri-more-2-fill f18 ellipsis-icon"
                onClick={toggleDownload}
              ></i>
              {isDownloadVisible && (
                <div className="download-dropdown">
                  <a
                    onClick={handle.enter}
                    href="#"
                    className="dropdown-item flex items-center gap-x-2"
                  >
                    <i class="ri-eye-line f16"></i> View in full screen
                  </a>
                  <CSVLink
                    className="dropdown-item flex items-center gap-x-2"
                    filename="my-file.csv"
                    data={csvData}
                  >
                    <i class="ri-eye-line f16"></i>
                    Download CSV
                  </CSVLink>
                  {/* <a
                    href="#"
                    className="dropdown-item flex items-center gap-x-2"
                  >
                    <i class="ri-download-2-line f16"></i> Download
                  </a> */}
                  {/* <a
                    href="#"
                    className="dropdown-item flex items-center gap-x-2"
                  >
                    <i class="ri-eye-line f16"></i> Export
                  </a> */}
                  <a
                    href="#"
                    className="dropdown-item flex items-center gap-x-2"
                  >
                    <i class="ri-download-2-line f16"></i>Download XLS
                  </a>

                  <a
                    href="#"
                    className="dropdown-item flex items-center gap-x-2"
                  >
                    <i class="ri-download-2-line f16"></i> Download PDF document
                  </a>
                  <a
                    href="#"
                    className="dropdown-item flex items-center gap-x-2"
                  >
                    <i class="ri-eye-line f16"></i> Print chart
                  </a>
                </div>
              )}
            </div>
                    </div>
              </div> 
              <FullScreen handle={handle}>
              <div className="mt-4 flow-root">
                  <div className="overflow-x-auto theme-table">
                  <PerfectScrollbar>
                        <table className="min-w-full divide-y divide-gray-300">
                          <thead>
                            <tr>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                WBS
                              </th>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap"
                              >
                                BUDGET(A)
                              </th>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                ACTUAL(B)
                              </th>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                COMMITTED(C)
                              </th>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                AVAILABLE(D)=(A)-(C)
                              </th>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              >
                                IN WORKFLOW
                              </th>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              >
                                PURCHASE REQ
                              </th>
                              <th
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                UTILIZATION RATE
                              </th>                            
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-gray-200 bg-white">
                            <tr>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                <b>1.ACHVP</b>
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td> */}
                            </tr>
                            {AHVPData.map((data, ind) => (
                              <tr>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.type}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget?.toFixed(1)}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.actual?.toFixed(1)}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.committed?.toFixed(1)}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget - data?.committed?.toFixed(1)}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.inworkflow}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.purchaseREQ}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                                  <span
                                    className={`w-3 h-3 block rounded-circle ${
                                      data?.utilizationRate <= 50
                                        ? "bg-benLightGreen"
                                        : "bg-benPink"
                                    } mr-1`}
                                  />
                                  {data?.utilizationRate}%
                                </td>
                              </tr>
                            ))}
                            <tr className='total_row'>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase  whitespace-nowrap"
                              >
                                {roundedAHVPbudgetTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {roundedAHVPactualTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {roundedAHVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {AHVPbudgetTotal - AHVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {roundedAHVPinworkflowTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {roundedAHVPpurchaseREQTotal}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-black f13 flex items-center">
                                <span
                                  className={`w-3 h-3 block rounded-circle ${
                                    AHVPutilizationRateTotal <= 50
                                      ? "bg-benLightGreen"
                                      : "bg-benPink"
                                  } mr-1`}
                                />
                                {roundedAHVPutilizationRateTotal}%
                              </td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td> */}
                            </tr>
                            <tr>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                <b>II. PEVP</b>
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td> */}
                            </tr>
                            {AHVPData.map((data, ind) => (
                              <tr>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.type}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.actual}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.committed}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget - data?.committed}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.inworkflow}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.purchaseREQ}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                                  <span
                                    className={`w-3 h-3 block rounded-circle ${
                                      data?.utilizationRate <= 50
                                        ? "bg-benLightGreen"
                                        : "bg-benPink"
                                    } mr-1`}
                                  />
                                  {data?.utilizationRate}%
                                </td>
                              </tr>
                            ))}
                            <tr>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase  whitespace-nowrap"
                              >
                                {AHVPbudgetTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {AHVPactualTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {AHVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {AHVPbudgetTotal - AHVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {AHVPinworkflowTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {AHVPpurchaseREQTotal}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                                <span
                                  className={`w-3 h-3 block rounded-circle ${
                                    AHVPutilizationRateTotal <= 50
                                      ? "bg-benLightGreen"
                                      : "bg-benPink"
                                  } mr-1`}
                                />
                                {AHVPutilizationRateTotal}%
                              </td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td> */}
                            </tr>
                            <tr>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                <b>III. PIVP</b>
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td> */}
                            </tr>
                            {AHVPData.map((data, ind) => (
                              <tr>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.type}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.actual}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.committed}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget - data?.committed}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.inworkflow}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.purchaseREQ}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                                  <span
                                    className={`w-3 h-3 block rounded-circle ${
                                      data?.utilizationRate <= 50
                                        ? "bg-benLightGreen"
                                        : "bg-benPink"
                                    } mr-1`}
                                  />
                                  {data?.utilizationRate}%
                                </td>
                              </tr>
                            ))}
                            <tr>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase  whitespace-nowrap"
                              >
                                {AHVPbudgetTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {AHVPactualTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {AHVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {AHVPbudgetTotal - AHVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {AHVPinworkflowTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {AHVPpurchaseREQTotal}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                                <span
                                  className={`w-3 h-3 block rounded-circle ${
                                    AHVPutilizationRateTotal <= 50
                                      ? "bg-benLightGreen"
                                      : "bg-benPink"
                                  } mr-1`}
                                />
                                {AHVPutilizationRateTotal}%
                              </td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td> */}
                            </tr>
                            <tr>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              >
                                <b>IV. RDVP(RDNG)</b>
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                              ></td> */}
                            </tr>
                            {RDVPData.map((data, ind) => (
                              <tr>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.type}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.actual}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.committed}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.budget - data?.committed}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.inworkflow}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13">
                                  {data?.purchaseREQ}
                                </td>
                                <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                                  <span
                                    className={`w-3 h-3 block rounded-circle ${
                                      data?.utilizationRate <= 50
                                        ? "bg-benLightGreen"
                                        : "bg-benPink"
                                    } mr-1`}
                                  />
                                  {data?.utilizationRate}%
                                </td>
                              </tr>
                            ))}
                            <tr>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              ></td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase  whitespace-nowrap"
                              >
                                {RDVPbudgetTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {RDVPactualTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {RDVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              >
                                {RDVPbudgetTotal - RDVPcommittedTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {RDVPinworkflowTotal}
                              </td>
                              <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase whitespace-nowrap"
                              >
                                {RDVPpurchaseREQTotal}
                              </td>
                              <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                                <span
                                  className={`w-3 h-3 block rounded-circle ${
                                    RDVPutilizationRateTotal <= 50
                                      ? "bg-benLightGreen"
                                      : "bg-benPink"
                                  } mr-1`}
                                />
                                {RDVPutilizationRateTotal}%
                              </td>
                              {/* <td
                                scope="col"
                                className="px-2 py-2 text-left semibold text-normal text-black f12 text-uppercase"
                              ></td> */}
                            </tr>
                          </tbody>
                        </table>
                      </PerfectScrollbar>
                  </div>
                  {/* <div className="flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2">
                    <p className="mb-3 md:mb-0 f13">
                      {" "}
                      Showing data{" "}
                      {currentPage * PageSize +
                        Math.ceil(currentTableData.length - PageSize)}{" "}
                      of {tableData.length} of Next Metrics
                    </p>
                    <Pagination
                      className="pagination-bar"
                      currentPage={currentPage}
                      totalCount={tableData.length}
                      pageSize={PageSize}
                      onPageChange={(page) => setCurrentPage(page)}
                    />
                  </div> */}
                </div>
                </FullScreen>
          </div>
      </div>

      <div className="flex CardDivgap summaryBox_layout">
        <div className="card BgLightActive rounded-md card-shadow grid-margin summaryBox">
           <div className="cardBody">           
            {/* <div className="content flex items-center">
              <p className="text-black">
                Status budgets loaded in Sectors for projects
              </p>
            </div> */}
            {/* <div > */}
                <StatusBudget />
            {/* </div> */}
          </div>
        </div>
        <div className="card bg-white rounded-md card-shadow grid-margin summaryTable flex1 CardDivgap">
            <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                  <div class="mb-4">
                    <p class="f14 semibold text-uppercase text-normal">Summary(In UA MILLIONS)</p>                  
                  </div>
                  <div class="flex flex-wrap items-center gap-x-2">


                  <form className="border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center mb-4 f14">
                  <BsSearch className="pointer-events-none absolute inset-y-0 left-5 h-full w-4 text-benGray" />
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 f14 pl-8 text-benGray placeholder:text-benGray bg-transparent f14"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </form>
                      <select name="budgetMetric" id="budgetMetric" class="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box mb-4">
                        <option value>Complex</option>
                        <option value="1">Complex 1</option>
                        <option value="2"> Complex 2</option>
                        <option value="3">Complex 3</option>
                      </select>

                      <select name="budgetMetric" id="budgetMetric" class="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box mb-4">
                      <option value>Region</option>
                      <option value="1">Region 1</option>
                      <option value="2"> Region 2</option>
                      <option value="3">Region 3</option>
                      </select>

                   
                </div>
              </div>

              <div className="mt-4">
                <Summarytable />
              </div>
            </div>
          </div>
      </div>

      <div className="flex CardDivgap summaryBox_layout">
      <div className="card BgLightYellow rounded-md card-shadow grid-margin summaryBox">
          <div className="cardBody">             
            {/* <div className="content flex items-center">
              <p className="text-black">
                Status of CDNs – CSPs and ESWs budgets
              </p>
            </div> */}
            <Statusofcdn />
          </div>
        </div>
        <div className="card bg-white rounded-md card-shadow grid-margin summaryTable flex1 CardDivgap">
          <div className="cardBody">
              <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">Summary(In UA MILLIONS)</p>                  
                </div>
                <div class="flex flex-wrap items-center gap-x-2">
                <form className="border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center mb-4  f14">
                  <BsSearch className="pointer-events-none absolute inset-y-0 left-5 h-full w-4 text-benGray" />
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 f14 pl-8 text-benGray placeholder:text-benGray bg-transparent f14"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </form>
                  
                    <select  name="budgetMetric" id="budgetMetric" class="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box mb-4">
                        <option value>Complex</option>
                        <option value="1">Complex 1</option>
                        <option value="2"> Complex 2</option>
                        <option value="3">Complex 3</option>
                    </select>
                    <select name="budgetMetric" id="budgetMetric" class="bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box mb-4">
                            <option value>Region</option>
                            <option value="1">Region 1</option>
                            <option value="2"> Region 2</option>
                            <option value="3">Region 3</option>
                    </select>
                  
                  </div>
            </div>
            <div className="mt-4">
              <Summarystatus />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
        <div className="card bg-white rounded-md card-shadow">
          <div className="cardBody">
              <BudgetUtilization />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Utilization;
