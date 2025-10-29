import React, { useState, useRef, useEffect } from 'react';
import PerfectScrollbar from "react-perfect-scrollbar";
import DistributionComplex from "./DistributionComplex";
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
let PageSize = 3;
const data = [
  {
    BLANK: "AHVP",
    RDGW: 1,
    RDNG: 0,
    RDGE: 0,
    RDGC: 0,
    TOTAL:1,
  },
  {
    BLANK: "ECVP",
    RDGW: 1,
    RDNG: 0,
    RDGE: 0,
    RDGC: 0,
    TOTAL:1,
  },
  {
    BLANK: "PIVP",
    RDGW: 0,
    RDNG: 5,
    RDGE: 2,
    RDGC: 1,
    TOTAL:8,
  },
 
 
];

const csvData = [
  ["","RDGW", "RDNG", "RDGE","RDGC","TOTAL"],
  ...data.map(
    ({BLANK, RDGW, RDNG, RDGE,RDGC,TOTAL}) => [
      BLANK, RDGW, RDNG, RDGE,RDGC,TOTAL]
  ),
];

const DistributionComplexTable = () => {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };
  const handle = useFullScreenHandle();
  const RDGWTOTAL = data
    .map((item) => item.RDGW)
    .reduce((a, b) => a + b, 0);


  const RDNGTOTAL = data
    .map((item) => item.RDNG)
    .reduce((a, b) => a + b, 0);

  const RDGETOTAL = data
    .map((item) => item.RDGE)
    .reduce((a, b) => a + b, 0);

  const RDGCTOTAL = data
    .map((item) => item.RDGC)
    .reduce((a, b) => a + b, 0);

  const TOTALTOTAL = data
    .map((item) => item.TOTAL)
    .reduce((a, b) => a + b, 0);


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
    <div className="">
      <div class="cardTitle flex justify-end">
      <div class="flex gap-x-3 mb-4 flex-wrap items-center">
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
      <div className="mt-2 flow-root">
        <div className="overflow-x-auto theme-table">
        <PerfectScrollbar>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                    
                      
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      RDGW
                     
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      RDNG
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      RDGE
                    
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      RDGC
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      TOTAL
                    
                    </th>
                  
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.BLANK}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.RDGW}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.RDNG}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.RDGE}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.RDGC}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.TOTAL}
                      </td>
                     
                    </tr>
                  ))}
                  <tr className='total_row'>
                    <td
                      scope="col"
                      className="whitespace-nowrap py-2 px-2 text-bold text-light f13"
                    >
                      Total
                    </td>
                    <td
                      scope="col"
                      className="whitespace-nowrap py-2 px-2 text-bold text-light f13"
                    >
                      {RDGWTOTAL}
                    </td>
                    <td
                      scope="col"
                      className="whitespace-nowrap py-2 px-2 text-bold text-light f13"
                    >
                      {RDNGTOTAL}
                    </td>
                    <td
                      scope="col"
                      className="whitespace-nowrap py-2 px-2 text-bold text-light f13"
                    >
                      {RDGETOTAL}
                    </td>
                    <td
                      scope="col"
                      className="whitespace-nowrap py-2 px-2 text-bold text-light f13"
                    >
                      {RDGCTOTAL}
                    </td>
                    <td
                      scope="col"
                      className="whitespace-nowrap py-2 px-2 text-bold text-light f13"
                    >
                      {TOTALTOTAL}
                    </td>

                  </tr>
                </tbody>
              </table>
            </PerfectScrollbar>
        </div>
      </div>
      </FullScreen>
    </div>
  );
};

export default DistributionComplexTable;
