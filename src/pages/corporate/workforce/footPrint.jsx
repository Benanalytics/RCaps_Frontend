import CapacityUtilization from "components/corporate/WorkForce/footprint/CapacityUtilization";
import CenterChart from "components/corporate/WorkForce/footprint/CenterChart";
import CenterLineChart from "components/corporate/WorkForce/footprint/CenterLineChart";
import EastChart from "components/corporate/WorkForce/footprint/EastChart";
import EastLineChart from "components/corporate/WorkForce/footprint/EastLineChart";
import EfficiencyAnalysis from "components/corporate/WorkForce/footprint/EfficiencyAnalysis";
import FootprintIncomeAnalysis from "components/corporate/WorkForce/footprint/FootprintIncomeAnalysis";
import LPStaffAverage from "components/corporate/WorkForce/footprint/StaffAverage";
import NigeriaChart from "components/corporate/WorkForce/footprint/NigeriaChart";
import NigeriaLineChart from "components/corporate/WorkForce/footprint/NigeriaLineChart";
import NorthChart from "components/corporate/WorkForce/footprint/NorthChart";
import NorthLineChart from "components/corporate/WorkForce/footprint/NorthLineChart";
import SouthChart from "components/corporate/WorkForce/footprint/SouthChart";
import SouthLineChart from "components/corporate/WorkForce/footprint/SouthLineChart";
import StaffingFootprints from "components/corporate/WorkForce/footprint/StaffingFootprints";
import StaffingNeedTable from "components/corporate/WorkForce/footprint/StaffingNeedTable";
import StaffingWorkstation from "components/corporate/WorkForce/footprint/StaffingWorkstation";
import WestChart from "components/corporate/WorkForce/footprint/WestChart";
import WestLineChart from "components/corporate/WorkForce/footprint/WestLineChart";
import IncomeAnalysis from "components/corporate/WorkForce/optimization/IncomeAnalysis";
import StaffWeekAnalysis from "components/corporate/WorkForce/workload/StaffWeekAnalysis";
import { useState } from "react";
import DatePicker from "react-datepicker";
import { HiOutlineCloudDownload } from "react-icons/hi";
import StaffAverage from "components/corporate/WorkForce/footprint/StaffAverage";
import AnnualGrowthRate from "components/corporate/WorkForce/footprint/AnnualGrowthRate";
import TotalPrecentageIncrease from "components/corporate/WorkForce/footprint/TotalPrecentageIncrease";
import StaffGrowthTrends from "components/corporate/WorkForce/footprint/StaffGrowthTrends";

const Footprint = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option in the state
  };

  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className="ben__GeospatialPage ben_LandingPage w-full block print">
      {/* <CorporateTabLinks /> */}
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
            className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex gap-x-2 mb-4 items-center btn text-white"
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


      <div className="grid grid-cols-1 md:grid-cols-1">
        <div className="flex flex-wrap CardDivgap justify-between grid-margin grid_boxes">
          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col justify-center">
            <div className="cardBody">
              <p class="f14 text-black mb-2">Investment Projection</p>
              <div class="flex w-full gap-x-3 justify-between">
                <div class="flex1">
                  <p class="text-benLightBlue f18 text-bold mb-2"> UA 5m</p>
                  <p>
                    <span class="text_green flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-green"><i class="ri-arrow-up-line"></i> <span class="f12">5.27%</span></span>
                  </p>
                </div>
                <div class="BgLtYellow icon_bg border_LtYellow border-l border-r border-t border-b">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="CurrentColor" stroke="none"><path d="M338 1128 l-3 -73 -167 -3 -168 -2 0 -410 0 -410 433 -2 432 -3 3 -45 c2 -32 11 -53 30 -73 25 -26 30 -27 121 -27 89 0 97 2 123 27 27 25 28 31 28 115 0 93 9 121 56 184 30 39 54 107 54 153 0 85 -50 181 -115 221 l-35 22 0 124 0 124 -170 0 -170 0 0 75 0 75 -225 0 -224 0 -3 -72z m372 -38 l0 -41 -147 3 -148 3 -3 38 -3 37 150 0 151 0 0 -40z m340 -185 l0 -75 -28 0 c-16 0 -53 -7 -83 -16 -42 -12 -66 -28 -112 -75 l-58 -59 -234 0 -235 0 0 25 c0 22 -4 25 -35 25 -31 0 -35 -3 -35 -25 0 -22 -4 -25 -38 -25 -37 0 -75 19 -99 50 -8 10 -12 56 -13 133 l0 117 485 0 485 0 0 -75z m43 -169 c107 -44 141 -190 67 -293 -18 -25 -41 -66 -50 -92 -13 -32 -24 -47 -39 -49 -20 -3 -21 1 -21 97 0 109 9 131 56 131 21 0 24 5 24 36 l0 36 -47 -6 c-60 -8 -76 -8 -135 0 l-48 6 0 -36 c0 -30 4 -36 21 -36 11 0 29 -5 40 -10 17 -10 19 -22 19 -115 0 -97 -2 -105 -19 -105 -14 0 -24 13 -35 46 -9 26 -27 62 -41 80 -57 75 -69 148 -36 219 20 43 40 64 86 88 37 20 115 21 158 3z m-968 -121 c22 -8 55 -14 73 -15 27 0 32 -4 32 -25 0 -22 4 -25 35 -25 31 0 35 3 35 25 l0 25 229 0 c223 0 229 -1 224 -20 -9 -36 18 -118 63 -186 24 -37 44 -73 44 -80 0 -12 -69 -14 -390 -14 l-390 0 0 165 c0 91 1 165 3 165 1 0 20 -7 42 -15z m963 -422 l-3 -38 -70 0 -70 0 -3 38 -3 37 76 0 76 0 -3 -37z"></path></g></svg>
                </div>
              </div>
              {/* <div className="flex w-full gap-x-3 justify-between">
                <div className="BgLtYellow icon_bg border_LtYellow border-l border-r border-t border-b">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="CurrentColor" stroke="none">
                      <path d="M338 1128 l-3 -73 -167 -3 -168 -2 0 -410 0 -410 433 -2 432 -3 3 -45 c2 -32 11 -53 30 -73 25 -26 30 -27 121 -27 89 0 97 2 123 27 27 25 28 31 28 115 0 93 9 121 56 184 30 39 54 107 54 153 0 85 -50 181 -115 221 l-35 22 0 124 0 124 -170 0 -170 0 0 75 0 75 -225 0 -224 0 -3 -72z m372 -38 l0 -41 -147 3 -148 3 -3 38 -3 37 150 0 151 0 0 -40z m340 -185 l0 -75 -28 0 c-16 0 -53 -7 -83 -16 -42 -12 -66 -28 -112 -75 l-58 -59 -234 0 -235 0 0 25 c0 22 -4 25 -35 25 -31 0 -35 -3 -35 -25 0 -22 -4 -25 -38 -25 -37 0 -75 19 -99 50 -8 10 -12 56 -13 133 l0 117 485 0 485 0 0 -75z m43 -169 c107 -44 141 -190 67 -293 -18 -25 -41 -66 -50 -92 -13 -32 -24 -47 -39 -49 -20 -3 -21 1 -21 97 0 109 9 131 56 131 21 0 24 5 24 36 l0 36 -47 -6 c-60 -8 -76 -8 -135 0 l-48 6 0 -36 c0 -30 4 -36 21 -36 11 0 29 -5 40 -10 17 -10 19 -22 19 -115 0 -97 -2 -105 -19 -105 -14 0 -24 13 -35 46 -9 26 -27 62 -41 80 -57 75 -69 148 -36 219 20 43 40 64 86 88 37 20 115 21 158 3z m-968 -121 c22 -8 55 -14 73 -15 27 0 32 -4 32 -25 0 -22 4 -25 35 -25 31 0 35 3 35 25 l0 25 229 0 c223 0 229 -1 224 -20 -9 -36 18 -118 63 -186 24 -37 44 -73 44 -80 0 -12 -69 -14 -390 -14 l-390 0 0 165 c0 91 1 165 3 165 1 0 20 -7 42 -15z m963 -422 l-3 -38 -70 0 -70 0 -3 38 -3 37 76 0 76 0 -3 -37z" />
                    </g>
                  </svg>
                </div>
                <div class="flex1">
                  <div class=""><p class="f14 text-black mb-3">INVESTMENT PROJECTION</p></div>
                  <div class="mb-3 flex items-center justify-between flex-wrap">
                    <p className="text-benLightBlue f18 text-bold"> UA 5.0m</p>
                    <p className="text-black"><span class="badge badge-ltgreen"><i class="ri-arrow-up-line"></i> 5.27%</span> </p>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col justify-center">
            <div className="cardBody">
             <p class="f14 text-black mb-2">Utilization Rate</p>
              <div class="flex w-full gap-x-3 justify-between">
                <div class="flex1">
                  <p class="text-benLightBlue f18 text-bold mb-2"> UA 5m</p>
                  <p>
                   <div class="text_red flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-red"><span><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f5907e" stroke="none"><path d="M63 4663 c35 -60 609 -1052 1276 -2206 668 -1153 1217 -2097 1221 -2097 4 0 553 944 1221 2097 667 1154 1241 2146 1276 2206 l62 107 -2559 0 -2559 0 62 -107z"></path></g></svg></span><span class="f12">5.27%</span></div>
                  </p>
                </div>
                <div className="BgRed icon_bg border_Red border-l border-r border-t border-b">
                  <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#FA6767" stroke="none">
                    <path d="M743 1218 c-55 -58 -69 -88 -40 -88 6 0 26 15 45 33 l35 32 -7 -49 c-9 -70 -47 -147 -102 -207 -77 -82 -158 -121 -294 -143 -57 -9 -76 -16 -78 -29 -7 -38 146 -13 266 43 78 36 170 123 205 192 27 54 57 156 57 192 0 17 8 12 45 -24 33 -32 48 -41 56 -33 16 16 -2 44 -64 97 -30 25 -56 46 -58 46 -3 0 -32 -28 -66 -62z" />
                    <path d="M1077 1233 c-4 -3 -7 -66 -7 -140 l0 -133 85 0 85 0 0 128 c0 86 -4 132 -12 140 -13 13 -140 17 -151 5z" />
                    <path d="M1070 725 l0 -196 83 3 82 3 3 193 2 192 -85 0 -85 0 0 -195z" />
                    <path d="M861 886 c-8 -9 -11 -43 -9 -98 l3 -83 83 -3 83 -3 -3 98 -3 98 -71 3 c-52 2 -74 -1 -83 -12z" />
                    <path d="M852 523 l3 -138 83 -3 82 -3 0 141 0 140 -85 0 -86 0 3 -137z" />
                    <path d="M248 586 c-142 -39 -228 -178 -198 -320 20 -98 104 -190 193 -213 23 -6 -6 -9 -103 -13 -111 -4 -135 -8 -135 -20 0 -13 77 -15 634 -15 516 0 635 2 639 13 2 7 -5 16 -17 19 -21 5 -21 10 -21 229 l0 224 -85 0 -85 0 -2 -222 c-3 -215 -4 -223 -23 -223 -19 0 -20 8 -23 148 l-3 147 -84 0 -85 0 0 -150 c0 -143 -1 -150 -20 -150 -18 0 -20 7 -20 55 l0 55 -85 0 -85 0 0 -55 0 -55 -137 1 -138 0 52 20 c186 72 238 313 98 454 -69 68 -175 97 -267 71z m135 -98 c62 -83 107 -173 107 -215 0 -46 -32 -106 -72 -135 -26 -18 -46 -23 -98 -23 -77 0 -119 24 -150 85 -28 54 -25 97 10 166 41 80 120 184 140 184 9 0 38 -28 63 -62z" />
                    <path d="M277 443 c-45 -62 -87 -141 -87 -165 0 -65 64 -128 130 -128 75 0 139 74 126 145 -7 34 -103 186 -122 192 -7 2 -27 -18 -47 -44z m1 -171 c2 -12 13 -28 24 -36 12 -9 18 -21 15 -30 -9 -22 -24 -20 -52 9 -31 30 -36 88 -7 83 9 -2 18 -13 20 -26z" />
                    <path d="M647 523 c-4 -3 -7 -80 -7 -170 l0 -163 85 0 85 0 0 170 0 170 -78 0 c-43 0 -82 -3 -85 -7z" />
                  </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col justify-center">
            <div className="cardBody">
              <p class="f14 text-black mb-2">Income Range</p>
              <div class="flex w-full gap-x-3 justify-between">
                <div class="flex1">
                  <p class="text-benLightBlue f18 text-bold mb-2"> UA 5m</p>
                  <p>
                    <span class="text_green flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-green"><i class="ri-arrow-up-line"></i> <span class="f12">5.27%</span></span>
                  </p>
                </div>
                <div className="BgGreen icon_bg border_Green border-l border-t border-b border-r">
                   <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">

                  <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#42D29D" stroke="none">
                    <path d="M675 1267 c-86 -29 -153 -84 -193 -161 -23 -44 -27 -63 -27 -141 0 -105 20 -158 86 -224 66 -66 119 -86 224 -86 78 0 97 4 141 27 60 32 118 93 147 157 30 65 30 187 0 252 -50 110 -151 179 -271 185 -39 2 -84 -2 -107 -9z m125 -101 c0 -7 12 -19 26 -26 56 -31 71 -120 19 -120 -17 0 -29 9 -40 30 -10 20 -23 30 -38 30 -22 0 -47 -16 -47 -31 0 -4 31 -30 69 -58 40 -30 74 -64 81 -81 18 -43 2 -90 -37 -115 -17 -11 -34 -28 -36 -37 -3 -10 -12 -21 -21 -24 -24 -9 -126 96 -126 129 0 51 62 61 74 12 5 -20 13 -25 37 -25 48 0 50 28 3 64 -85 67 -114 102 -114 138 0 39 29 83 60 93 11 4 20 13 20 20 0 21 31 35 52 24 10 -5 18 -16 18 -23z" />
                    <path d="M486 584 c-48 -17 -98 -54 -125 -93 l-21 -29 71 -124 c39 -67 76 -129 82 -137 9 -11 45 -12 182 -9 216 6 231 12 438 164 125 92 157 120 157 139 0 28 -24 55 -50 55 -10 0 -74 -40 -142 -88 -68 -49 -133 -94 -145 -100 -13 -7 -68 -12 -137 -12 -108 0 -116 1 -127 22 -10 18 -8 24 11 40 18 15 41 18 129 18 112 0 131 6 131 45 0 37 -20 45 -105 45 -73 0 -85 3 -121 29 -72 52 -150 64 -228 35z" />
                    <path d="M108 424 c-64 -36 -98 -61 -98 -72 0 -23 181 -333 201 -345 25 -16 219 97 219 127 0 36 -182 341 -205 344 -11 1 -64 -23 -117 -54z" />
                  </g>
                  </svg>   
                </div>
              </div>
              {/* <div className="flex w-full gap-x-3 justify-between">
                <div className="BgGreen icon_bg border_Green border-l border-t border-b border-r">
                  
                 
                </div>
                <div class="flex1">
                  <div class=""><p class="f14 text-black mb-3">INCOME RANGE</p></div>
                  <div class="mb-3 flex items-center justify-between flex-wrap"><p className="text-benLightBlue f18 text-bold"> UA 400m</p><p className="text-black"><span class="badge badge-ltgreen"><i class="ri-arrow-up-line"></i> 5.27%</span> </p></div>
                </div>
              </div> */}
            </div>
          </div>
          {/* <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col justify-center">
            <div className="cardBody">
              <p class="f14 text-black mb-2">Ratio Range</p>
              <div class="flex w-full gap-x-3 justify-between">
                <div class="flex1">
                  <p class="text-benLightBlue f18 text-bold mb-2"> UA 5.0m</p>
                  <p>
                    <span class="text_green flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-green"><i class="ri-arrow-up-line"></i> <span class="f12">5.27%</span></span>
                  </p>
                </div>
                <div className="BgLtblue border_Ltblue icon_bg border-b border-t border-l border-r">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="128.000000pt" height="128.000000pt" viewBox="0 0 128.000000 128.000000" preserveAspectRatio="xMidYMid meet">

                    <g transform="translate(0.000000,128.000000) scale(0.100000,-0.100000)" fill="#44BADC" stroke="none">
                      <path d="M12 1088 c-17 -17 -17 -879 0 -896 17 -17 1239 -17 1256 0 17 17 17 879 0 896 -17 17 -1239 17 -1256 0z m588 -448 l0 -390 -260 0 -260 0 0 390 0 390 260 0 260 0 0 -390z m600 215 l0 -175 -260 0 -260 0 0 175 0 175 260 0 260 0 0 -175z m-300 -430 l0 -175 -110 0 -110 0 0 175 0 175 110 0 110 0 0 -175z m300 110 l0 -65 -110 0 -110 0 0 65 0 65 110 0 110 0 0 -65z m0 -215 l0 -70 -110 0 -110 0 0 70 0 70 110 0 110 0 0 -70z" />
                    </g>
                    </svg>
                </div>
              </div>
            </div>
          </div> */}
          <div className="col-box card bg-white rounded-md card-shadow grid-20 flex flex1 flex-col justify-center">
            <div className="cardBody">
              <p class="f14 text-black mb-2">Income Per Workstation Range</p>
                <div class="flex w-full gap-x-3 justify-between">
                  <div class="flex1">
                    <p class="text-benLightBlue f18 text-bold mb-2"> UA 5m</p>
                    <p>
                      <span class="text_green flex items-center gap-x-1 badge-sm mt-1 badge-ltblue rounded-circle badge-sm-green"><i class="ri-arrow-up-line"></i> <span class="f12">5.27%</span></span>
                    </p>
                  </div>
                  <div className="BgPurple border_purple icon_bg  border-t border-l border-r border-b">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="100%" height="100%" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">
                      <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#7C86FF" stroke="none"><path d="M1758 4628 c-3 -486 -3 -494 -26 -549 -30 -76 -83 -141 -149 -185 -104 -69 -95 -68 -636 -72 l-487 -3 2 -1507 3 -1507 24 -52 c13 -29 44 -72 70 -96 89 -84 -52 -78 1721 -75 l1575 3 49 25 c27 14 66 44 87 68 75 86 69 -97 69 2172 0 2260 5 2085 -67 2169 -19 23 -58 54 -87 69 l-51 27 -1047 3 -1047 2 -3 -492z m1644 -1458 c32 -34 38 -48 38 -83 0 -24 -8 -56 -20 -74 -40 -67 27 -63 -1102 -63 -985 0 -1024 1 -1052 19 -83 55 -88 161 -9 220 28 20 32 20 1067 21 l1039 0 39 -40z m-25 -701 c90 -56 83 -183 -12 -229 -40 -20 -65 -20 -1046 -20 -936 0 -1006 1 -1039 18 -73 36 -100 122 -60 187 42 68 -24 65 1104 65 1017 0 1019 0 1053 -21z m-1000 -676 c97 -46 97 -190 0 -236 -31 -15 -90 -17 -552 -17 -573 0 -564 -1 -605 65 -39 63 -17 145 48 183 37 21 43 22 555 22 464 0 523 -2 554 -17z"></path>
                        <path d="M962 4648 c-255 -255 -470 -476 -479 -492 -38 -72 12 -158 99 -171 24 -3 221 -5 438 -3 355 3 399 5 435 21 51 23 91 61 118 112 21 39 22 51 25 469 2 312 0 438 -9 458 -18 44 -59 68 -115 68 l-48 0 -464 -462z"></path><path d="M4220 2667 c0 -2045 4 -1914 -56 -2022 -36 -63 -114 -140 -174 -170 -113 -57 -45 -55 -1547 -55 l-1383 0 0 -93 c0 -59 6 -111 16 -140 20 -60 79 -126 140 -157 l49 -25 1570 -3 c1374 -2 1575 0 1621 13 68 20 144 87 175 157 l24 53 0 2040 c0 1987 -1 2041 -19 2090 -11 27 -39 71 -64 97 -62 67 -124 88 -252 88 l-100 0 0 -1873z"></path>
                      </g>
                    </svg>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <EfficiencyAnalysis />
        <CapacityUtilization />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
        <StaffingWorkstation />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <StaffingFootprints />
        <StaffGrowthTrends />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 CardDivgap">
        <StaffingNeedTable />
      </div>


      <div className="cardDiv grid grid-cols-1 sm:grid-cols- md:grid-cols-3 lg:grid-cols-3 grid-margin CardDivgap workProgramme_Layout">
          <div class="col-box card bg-white rounded-md card-shadow flex flex-col justify-center">
            <div class="">
              <div class="flex items-center w-full gap-x-3 justify-between cardBody cardBody15">
                <div class="">
                  <p class="f18 text-black mb-1"><span className="block text-uppercase"><b > LRS LP Staff </b></span></p>
                </div>
                <div class="w-50 chart_sm40">
                  <LPStaffAverage/>
                </div>
              </div>
              <div class="flex items-center w-full gap-x-3 justify-between px-4 py-2 BgLtblue border-t">
                <p class="f14 text-bold text-uppercase">Average of annual growth rates</p>
                 <p class="f14 text-bold">7.4%</p>
              </div>
            </div>
          </div>

          <div class="col-box card bg-white rounded-md card-shadow flex flex-col justify-center">
            <div class="">
              <div class="flex items-center w-full gap-x-3 justify-between cardBody cardBody15">
                <div class="">
                  <p class="f18 text-black mb-1"><span className="block"><b> IRS Staff </b></span> </p>
                </div>
                <div class="w-50 chart_sm40">
                 <StaffAverage/>
                </div>
              </div>
              <div class="flex items-center w-full gap-x-3 justify-between px-4 py-2 BgLtblue border-t">
                <p class="f14 text-bold text-uppercase">Average of annual growth rates</p>
                 <p class="f14 text-bold">7.4%</p>
              </div>
            </div>
          </div>
          <div class="col-box card bg-white rounded-md card-shadow flex flex-col justify-center">
            <div class="">
              <div class="flex items-center w-full gap-x-3 justify-between cardBody cardBody15">
                <div class="">
                  <p class="f18 text-black mb-1"><span className="block"><b>PL Staff</b></span>   </p>
                </div>
                <div class="w-50 chart_sm40">
                 <StaffAverage/>
                </div>
              </div>
              <div class="flex items-center w-full gap-x-3 justify-between px-4 py-2 BgLtblue border-t">
                <p class="f14 text-bold text-uppercase">Average of annual growth rates</p>
                 <p class="f14 text-bold">7.4%</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1  md:grid-cols-2 CardDivgap ">   
     <AnnualGrowthRate/>
<TotalPrecentageIncrease/>
   
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
        <FootprintIncomeAnalysis />
        <div className="card card-shadow bg-white rounded-md grid-margin">
          <div className="cardBody">
            <div class="cardTitle flex items-center flex-wrap items-center justify-between">
              <div class="mb-4">
                <p class="f14 semibold text-uppercase text-normal">Income Analysis</p>
                <p class="f13 semibold text-light text-benGray">Share% of Total Income Per Sector</p>
              </div>
            </div>

            <div className="shareTotalIncome flex flex-wrap CardDivgap justify-between grid-margin grid_boxes">

              <div class="col-box card bg-white rounded-md card-shadow w-33 flex flex-col justify-center">
                <div class="cardBody cardBody12 card-header">
                  <div class="flex items-center w-full gap-x-2 justify-between w100">
                    <div class="flex1">
                      <p class="f14 text-black mb-2 text-bold text-uppercase">NIGERIA</p>
                      <p class="f13 text-bold mb-2 text-benGray">11,228.3</p>
                    </div>
                    <div class="w40">
                      <NigeriaLineChart />
                      <p class="f14 text-green text-right">5.2%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cardBody cardBody12">
                    <NigeriaChart />
                  </div>
                </div>
              </div>

              <div class="col-box card bg-white rounded-md card-shadow w-33 flex flex-col justify-center">
                <div class="cardBody cardBody12 card-header">
                  <div class="flex items-center w-full gap-x-2 justify-between w100">
                    <div class="flex1">
                      <p class="f14 text-black mb-2 text-bold text-uppercase">North</p>
                      <p class="f13 text-bold mb-2 text-benGray">11,228.3</p>
                    </div>
                    <div class="w40">
                      <NorthLineChart />
                      <p class="f14 text-green text-right">+1.5%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cardBody cardBody12">
                    <NorthChart />
                  </div>
                </div>
              </div>

              <div class="col-box card bg-white rounded-md card-shadow w-33 flex flex-col justify-center">
                <div class="cardBody cardBody12 card-header">
                  <div class="flex items-center w-full gap-x-2 justify-between w100">
                    <div class="flex1">
                      <p class="f14 text-black mb-2 text-bold text-uppercase">West</p>
                      <p class="f13 text-bold mb-2 text-benGray">11,228.3</p>
                    </div>
                    <div class="w40">
                      <WestLineChart />
                      <p class="f14 text-green text-right">+1.5%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cardBody cardBody12">
                    <WestChart />
                  </div>
                </div>
              </div>

              <div class="col-box card bg-white rounded-md card-shadow w-33 flex flex-col justify-center">
                <div class="cardBody cardBody12 card-header">
                  <div class="flex items-center w-full gap-x-2 justify-between w100">
                    <div class="flex1">
                      <p class="f14 text-black mb-2 text-bold text-uppercase">South</p>
                      <p class="f13 text-bold mb-2 text-benGray">11,228.3</p>
                    </div>
                    <div class="w40">
                      <SouthLineChart />
                      <p class="f14 text-green text-right">+1.5%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cardBody cardBody12">
                    <SouthChart />
                  </div>
                </div>
              </div>

              <div class="col-box card bg-white rounded-md card-shadow w-33 flex flex-col justify-center">
                <div class="cardBody cardBody12 card-header">
                  <div class="flex items-center w-full gap-x-2 justify-between w100">
                    <div class="flex1">
                      <p class="f14 text-black mb-2 text-bold text-uppercase">Center</p>
                      <p class="f13 text-bold mb-2 text-benGray">11,228.3</p>
                    </div>
                    <div class="w40">
                      <CenterLineChart />
                      <p class="f14 text-green text-right">+1.5%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cardBody cardBody12">
                    <CenterChart />
                  </div>
                </div>
              </div>

              <div class="col-box card bg-white rounded-md card-shadow w-33 flex flex-col justify-center">
                <div class="cardBody cardBody12 card-header">
                  <div class="flex items-center w-full gap-x-2 justify-between w100">
                    <div class="flex1">
                      <p class="f14 text-black mb-2 text-bold text-uppercase">East</p>
                      <p class="f13 text-bold mb-2 text-benGray">11,228.3</p>
                    </div>
                    <div class="w40">
                      <EastLineChart />
                      <p class="f14 text-green text-right">+1.5%</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="cardBody cardBody12">
                    <EastChart />
                  </div>
                </div>
              </div>



            </div>


          </div>
        </div>

      </div>


    </div>
  );
};

export default Footprint;
