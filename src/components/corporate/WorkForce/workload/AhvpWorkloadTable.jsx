import React, { useState,useMemo, useRef, useEffect } from 'react';
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
let PageSize = 8;



const tableData = [
  {
    _2022DELIVERABLES: "AHHd",
    tMS: "46",
    oRGANISATIONS: "15",
    sUPERVISIONS: "109",
    sUPERVISION: "0.3",
    oRGANISATION: "2.4",
 
    total: "8.7",
  },
  {
    _2022DELIVERABLES: "AHWS",
    tMS: "33",
    oRGANISATIONS: "24",
    sUPERVISIONS: "99",
    sUPERVISION: "0.7",
    oRGANISATION: "3.0",
    total: "3.7",
  },
  {
    _2022DELIVERABLES: "AHAI",
    tMS: "43",
    oRGANISATIONS: "74",
    sUPERVISIONS: "163",
    sUPERVISION: "1.7",
    oRGANISATION: "3.8",
    total: "5.5",
  },
  {
    _2022DELIVERABLES: "AHFR",
    tMS: "19",
    oRGANISATIONS: "15",
    sUPERVISIONS: "163",
    sUPERVISION: "0.8",
    oRGANISATION: "1.8",
    total: "2.6",
  },
  {
    _2022DELIVERABLES: "AHVP",
    tMS: "141",
    oRGANISATIONS: "128",
    sUPERVISIONS: "534",
    sUPERVISION: "0.9",
    oRGANISATION: "2.9",
    total: "3.8",
  },
  {
    _2022DELIVERABLES: "STANDARD WORKLOAD RATIO",
    tMS: "",
    oRGANISATIONS: "",
    sUPERVISIONS: "",
    sUPERVISION: "",
    oRGANISATION: "",
    total: "3.0",
  },
  {
    _2022DELIVERABLES: "ADDITIONAL TM REQUIREMENTS",
    tMS: "30",
    oRGANISATIONS: "",
    sUPERVISIONS: "",
    sUPERVISION: "",
    oRGANISATION: "",
    total: "",
  },
  {
    _2022DELIVERABLES: "ADJUST RATIO",
    tMS: "171",
    oRGANISATIONS: "128",
    sUPERVISIONS: "406",
    sUPERVISION: "0.7",
    oRGANISATION: "2.4",
    total: "3.1",
  },
];

const csvData = [
  ["2022 DELIVERABLES","#TMS", "ORGANISATION", "SUPERVISION","ORGANISATION","SUPERVISION","TOTAL"],
  ...tableData.map(
    ({_2022DELIVERABLES, tMS, oRGANISATIONS, sUPERVISIONS,sUPERVISION,oRGANISATION,total}) => [
      _2022DELIVERABLES, tMS, oRGANISATIONS, sUPERVISIONS,sUPERVISION,oRGANISATION,total ]
  ),
];
 
export default function AhvpWorkloadTable() {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const toggleDownload = () => {
   
    setDownloadVisible(!isDownloadVisible);
  };
  const handle = useFullScreenHandle();
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

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
        <div class="cardTitle flex justify-between items-center">
          <div className="mb-4 items-self-center">
            {" "}
            <p class="f14 semibold text-uppercase text-bold">AHVP WORKLOAD </p>
            <p class="semibold text-light text-benGray f13 ">
              AHAI Requires Additional TM And Portfolio Clean-Up Efforts{" "}
            </p>
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
                <select className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14  lg:w-54">
                <option value>Region</option>
                <option value>Sector</option>
            </select>
            <select className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 lg:w-54">
              <option value>Complex</option>
              <option value>Sector</option>
            </select>

            <div className="ellipsis-button mb-4" ref={downloadDropdownRef}>
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
        <div className="">
          <div className="mt-4 flow-root">
            <div className="overflow-x-auto theme-table">
            <table className="min-w-full divide-y divide-gray-300 table-bordered">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase border-width1"
                      >
                        </th>
                      <th
                        scope="col"
                        colSpan={2}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase border-width1"
                      >
                        OPERATIONS
                      </th>
 
                      <th
                        scope="col"
                        colSpan={3}
                        className="border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase border-width1"
                      >
                        OPS/TASK MANAGER
                      </th>
                    </tr>
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        2022 DELIVERABLES
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center"
                      >
                        #TMS
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center"
                      >
                        ORGANISATION
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center"
                      >
                        SUPERVISION
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center"
                      >
                        ORGANISATION
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center"
                      >
                        SUPERVISION
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center"
                      >
                        TOTAL
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentTableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?._2022DELIVERABLES}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13  text-center">
                          {data?.tMS}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13  text-center">
                          {data?.oRGANISATIONS}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13  text-center">
                          {data?.sUPERVISIONS}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13  text-center">
                          {data?.sUPERVISION}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13  text-center">
                          {data?.oRGANISATION}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13 text-center">
                          {data?.total}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
          </div>
        </div>
        </FullScreen>
      </div>
    </div>
  );
}