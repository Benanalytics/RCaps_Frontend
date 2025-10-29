import React, { useState,useMemo, useRef, useEffect } from 'react';
import ProjectedLineChart from "./ProjectedLineChart";
import Projected2LineChart from "./Projected2LineChart";
import Projected3LineChart from "./Projected3lineChart";
import Projected4LineChart from "./Projected4LineChart";
import Projected5LineChart from "./Projected5LineChart";
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
let PageSize = 8;
const tableData = [
  {
    POSITION: "Country Manager",
    CURRENT1: "8",
    PROJECTED1: "0",
    CURRENT2: "11",
    PROJECTED2: "0",
    CURRENT3: "6",
    PROJECTED3: "0",
    CURRENT4: "8",
    PROJECTED4: "0",
    CURRENT5: "8",
    PROJECTED5: "0",
    CURRENT6: "11",
    PROJECTED6: "0",
  },
  {
    POSITION: "Deputy Director General(DDG)",
    CURRENT1: "1",
    PROJECTED1: "0",
    CURRENT2: "1",
    PROJECTED2: "0",
    CURRENT3: "1",
 
    PROJECTED3: "0",
    CURRENT4: "1",
    PROJECTED4: "0",
    CURRENT5: "1",
    PROJECTED5: "0",
    CURRENT6: "1",
    PROJECTED6: "0",
  },
  {
    POSITION: "Director General(DG)",
    CURRENT1: "1",
    PROJECTED1: "0",
    CURRENT2: "1",
    PROJECTED2: "0",
    CURRENT3: "1",
 
    PROJECTED3: "0",
    CURRENT4: "1",
    PROJECTED4: "0",
    CURRENT5: "1",
    PROJECTED5: "0",
    CURRENT6: "1",
    PROJECTED6: "0",
  },
  {
    POSITION: "Director General(DG)",
    CURRENT1: "1",
    PROJECTED1: "0",
    CURRENT2: "1",
    PROJECTED2: "0",
    CURRENT3: "1",
 
    PROJECTED3: "0",
    CURRENT4: "1",
    PROJECTED4: "0",
    CURRENT5: "1",
    PROJECTED5: "0",
    CURRENT6: "1",
    PROJECTED6: "0",
  },
  {
    POSITION: "Deputy Director General(DDG)",
    CURRENT1: "1",
    PROJECTED1: "0",
    CURRENT2: "1",
    PROJECTED2: "0",
    CURRENT3: "1",
 
    PROJECTED3: "0",
    CURRENT4: "1",
    PROJECTED4: "0",
    CURRENT5: "1",
    PROJECTED5: "0",
    CURRENT6: "1",
    PROJECTED6: "0",
  },
  {
    POSITION: "Deputy Director General(DDG)",
    CURRENT1: "1",
    PROJECTED1: "0",
    CURRENT2: "1",
    PROJECTED2: "0",
    CURRENT3: "1",
 
    PROJECTED3: "0",
    CURRENT4: "1",
    PROJECTED4: "0",
    CURRENT5: "1",
    PROJECTED5: "0",
    CURRENT6: "1",
    PROJECTED6: "0",
  },
];
 
const csvData = [
  ["POSITION","CURRENT", "PROJECTED", "CURRENT","PROJECTED","CURRENT","PROJECTED","CURRENT","PROJECTED","CURRENT","PROJECTED","CURRENT","PROJECTED"],
  ...tableData.map(
    ({POSITION, CURRENT1, PROJECTED1, CURRENT2,PROJECTED2,CURRENT3,PROJECTED3,CURRENT4,PROJECTED4,CURRENT5,PROJECTED5,CURRENT6,PROJECTED6}) => [
      POSITION, CURRENT1, PROJECTED1, CURRENT2,PROJECTED2,CURRENT3,PROJECTED3,CURRENT4,PROJECTED4,CURRENT5,PROJECTED5,CURRENT6,PROJECTED6    ]
  ),
];
export default function StaffingNeedTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const downloadDropdownRef = useRef(null);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [isDownloadVisible, setDownloadVisible] = useState(false);
 
  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };
  const handle = useFullScreenHandle();
  const Current1Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.CURRENT1, 10) || 0),
    0
  );
 
  const Projected1Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.PROJECTED1, 10) || 0),
    0
  );
 
  const Current2Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.CURRENT2, 10) || 0),
    0
  );
 
  const Projected2Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.PROJECTED3, 10) || 0),
    0
  );

  const Current3Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.CURRENT3, 10) || 0),
    0
  );
 
  const Projected3Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.PROJECTED4, 10) || 0),
    0
  );


  const Current4Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.CURRENT4, 10) || 0),
    0
  );
 
  const Projected4Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.PROJECTED4, 10) || 0),
    0
  );

  const Current5Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.CURRENT5, 10) || 0),
    0
  );
 
  const Projected5Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.PROJECTED5, 10) || 0),
    0
  );

  const Current6Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.CURRENT6, 10) || 0),
    0
  );
 
  const Projected6Total = tableData.reduce(
    (sum, data) => sum + (parseInt(data.PROJECTED6, 10) || 0),
    0
  );

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
    <div className="card bg-white rounded-md grid-margin card-shadow KPI-peformanceGrid">
      <div className="cardBody">
      <div class="cardTitle flex items-center flex-wrap items-center justify-between">
          <div class="mb-4">
              <p class="f14 semibold text-uppercase text-normal">Staffing Footprint & Needs</p>
              <p class="f13 semibold text-light text-benGray">Staffing Distribution Per Position</p>
          </div>
          <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
              <form className="border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center f14">
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
                <div className="ellipsis-button mb-4"ref={downloadDropdownRef}>
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
                      <i class="ri-download-2-line f16"></i> Download PDF
                      document
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
            <table className="min-w-full divide-y divide-gray-300 table-bordered">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        colSpan={1}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-left border-width1 text-benGray f12 text-uppercase"
                      >
                        Region
                      </th>
 
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        Nigeria
                      </th>
 
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        North
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        West
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        South
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        Center
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        East
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Projected
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentTableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.POSITION}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.CURRENT1}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div className="flex items-center justify-between gap-x-4">
                              <div className=''>{data?.PROJECTED1}</div>
                              <div className='textgreen flex items-center justify-between gap-x-1'><span><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg></span> <span>+62.7%</span></div>
                              {/* <ProjectedLineChart/> */}
                          </div> 
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.CURRENT2}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div className="flex items-center justify-between gap-x-4">
                              <div className=''>{data?.PROJECTED2}</div>
                              <div className='textgreen flex items-center justify-between gap-x-1'><span><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg></span> <span>+12.7%</span></div>
                                {/* <Projected2LineChart/> */}
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT3}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.PROJECTED3}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT4}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div className="flex items-center justify-between gap-x-3">
                              <div className=''>{data?.PROJECTED4}</div>
                              <div className='text_red flex items-center justify-between gap-x-1'><span><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#f5907e" stroke="none"><path d="M63 4663 c35 -60 609 -1052 1276 -2206 668 -1153 1217 -2097 1221 -2097 4 0 553 944 1221 2097 667 1154 1241 2146 1276 2206 l62 107 -2559 0 -2559 0 62 -107z"></path></g></svg></span> <span>-5.7%</span></div>
                               {/* <Projected3LineChart/> */}
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT5}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <div className="flex items-center justify-between gap-x-3">
                               <div className=''>{data?.PROJECTED5}</div>
                               <div className='textgreen flex items-center justify-between gap-x-1'><span><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg></span><span>+12.7%</span></div>                              
                              {/* <Projected4LineChart/> */}
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT6}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             <div className="flex items-center justify-between  gap-x-3">
                               <div className=''>{data?.PROJECTED6}</div>
                               <div className='textgreen flex items-center justify-between gap-x-1'><span><svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="10" height="10" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet"><g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#3a924f" stroke="none"><path d="M1279 2558 l-1276 -2203 1279 -3 c703 -1 1853 -1 2556 0 l1279 3 -1276 2203 c-701 1211 -1278 2202 -1281 2202 -3 0 -580 -991 -1281 -2202z"></path></g></svg></span> +12.7%</div>     
                               {/* <Projected5LineChart/> */}
                            </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                        Total:
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                        {Current1Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                        {Projected1Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                        {Current2Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                        {Projected2Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  f13">
                        {Current3Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                        {Projected3Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Current4Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Projected4Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Current5Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Projected5Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Current6Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Projected6Total}
                      </td>
                    </tr>
                  </tfoot>
                </table>
            </div>
          </div>
        {/* <div className="">
          <div className="mt-4 flow-root">
            <div className="overflow-x-auto theme-table">
              <div className="pb-2 align-middle">
                <table className="min-w-full divide-y divide-gray-300 table-bordered">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        colSpan={1}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-left border-width1 text-benGray f12 text-uppercase"
                      >
                        Region
                      </th>
 
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        Nigeria
                      </th>
 
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        North
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        West
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        South
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        Center
                      </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray border-width1 f12 text-uppercase"
                      >
                        East
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Position
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw100"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw100"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw100"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase w145"
                      >
                        Projected
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw60"
                      >
                        Current
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase mw100"
                      >
                        Projected
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentTableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.POSITION}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.CURRENT1}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div className="flex items-center justify-between gap-x-1">
                          {data?.PROJECTED1}   <ProjectedLineChart/>
                            </div> 
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.CURRENT2}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div className="flex items-center justify-between gap-x-1">
                                {data?.PROJECTED2}<Projected2LineChart/>
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT3}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.PROJECTED3}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT4}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div className="flex items-center justify-between gap-x-1">
                            {data?.PROJECTED4}<Projected3LineChart/>
                          </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT5}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           <div className="flex items-center justify-between gap-x-1">
                              {data?.PROJECTED5}<Projected4LineChart/>
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.CURRENT6}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           <div className="flex items-center justify-between gap-x-1">
                               {data?.PROJECTED6}<Projected5LineChart/>
                            </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                        Total:
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                        {Current1Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                        {Projected1Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                        {Current2Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                        {Projected2Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  f13">
                        {Current3Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                        {Projected3Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Current4Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Projected4Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Current5Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Projected5Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Current6Total}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                      {Projected6Total}
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </div>
        </div> */}
        </FullScreen>
      </div>
    </div>
  );
}