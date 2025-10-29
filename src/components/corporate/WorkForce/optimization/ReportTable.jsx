import React, { useState,useMemo, useRef, useEffect } from 'react';
import Pagination from "shared/Pagination";
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
let PageSize = 4;
const tableData = [
  {
    SAPID: "P-BF-AA0-032",
    ProjectTitle: "Project DE Development Des Chaines Des Valeurs MAis Soja Vo",
    Complex: "AHVP",
    TaskManager: "Kabore Youssurt",
    Centralized: "",
    Decentralized: "",
    Status: "Active",
    ApprovedData: "Wed, Dec 22 2023",
    ClosingData: "Wed, Dec 22 2024",
  },
  {
    SAPID: "P-BF-AAD-006",
    ProjectTitle:
      "Project DE’Appui AU Dvpt D AnaCardes Dans Le Basin De La Combo",
    Complex: "AHVP",
    TaskManager: "MUsaByimana Innocent",
    Centralized: "",
    Decetralized: "",
    Status: "Close",
    ApprovedData: "Mon, Dec 20 2023",
    ClosingData: "Wed, Dec 22 2024",
  },
  {
    SAPID: "P-BF-FA0-007",
    ProjectTitle:
      "Project DE’Electrification Zones Peri-Urbaines De QuagaDougou",
    Complex: "PEVP",
    TaskManager: "Ball Fatimata",
    Centralized: "",
    Decentralized: "",
    Status: "On Progress",
    ApprovedData: "Mon, Dec 20 2023",
    ClosingData: "Wed, Dec 22 2024",
  },

  {
    SAPID: "P-BF-FA0-010",
    ProjectTitle:
      "Programme ‘Desert’ To Power - Project Yeleen D’Electrification",
    Complex: "PEVP",
    TaskManager: "Nesiama Miller Regina",
    Centralized: "",
    Decentralized: "",
    Status: "On Progress",
    ApprovedData: "Fri, Dec 17 2023",
    ClosingData: "Wed, Dec 22 2024",
  },
];

const csvData = [
  ["SAPID","ProjectTitle", "Complex", "TaskManager", "Centralized", "Decentralized", "Status", "ApprovedDate","ClosingDate"],
  ...tableData.map(
    ({SAPID, ProjectTitle, Complex, TaskManager, Centralized, Decentralized, Status,ApprovedData ,ClosingData}) => [
      SAPID, ProjectTitle, Complex, TaskManager, Centralized, Decentralized, Status,ApprovedData ,ClosingData
    ]
  ),
];

export default function ReportTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const downloadDropdownRef = useRef(null);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const handle = useFullScreenHandle();
  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
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
    <div className="card bg-white rounded-md card-shadow grid-margin">
      <div className="cardBody">

        <div class="cardTitle flex items-center flex-wrap items-center justify-between">
          <div class="mb-4">
            <p class="f14 semibold text-uppercase text-normal">{" "} REPORT</p>
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
                        <option value>Complex</option>
                        <option value>Complex1</option>
                        <option value>Complex2</option>
                    </select>
                        <select
                    name="budgetMetric"
                    id="budgetMetric"
                    className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 lg:w-54"
                  >
                    <option value>Status</option>
                    <option value="1">Active</option>
                    <option value="2"> Pending</option>
                    <option value="3">Approved</option>
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
            <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        SAP ID
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Project Title
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Complex
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Task Manager
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Centralized
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Decentralized
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Status
                      </th>

                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Approve Date
                      </th>
                     

                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        Closing Date
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentTableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.SAPID}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.ProjectTitle}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.Complex}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.TaskManager}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.Centralized}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.Decentralized}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.Status}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.ApprovedData}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.ClosingData}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
            </div>
            <div className="flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2  gap-x-2">
              <p className="f13 mb0">
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
            </div>
          </div>
        </div>
        </FullScreen>
      </div>
    </div>
  );
}
