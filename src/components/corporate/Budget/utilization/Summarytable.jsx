import React, { useState, useRef, useEffect } from 'react';
import PerfectScrollbar from "react-perfect-scrollbar";

import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";

const data = [
  {
    ProjectsWPcategory: "Active Portfolio",
    OriginalBudget: 8.28,
    AdjustedBudget: 7.78,
    Allotted: 4.72,
    Available: 3.06,
    ExecRate: "61%",
  },
  {
    ProjectsWPcategory: "Lending program(IOP 2023)",
    OriginalBudget: 4.36,
    AdjustedBudget: 3.82,
    Allotted: 2.23,
    Available: 1.59,
    ExecRate: "58%",
  },
  {
    ProjectsWPcategory: "Pipeline ( IOP 2024 – 2025)",
    OriginalBudget: 3.06,
    AdjustedBudget: 2.39,
    Allotted: 1.15,
    Available: 1.24,
    ExecRate: "48%",
  },
  {
    ProjectsWPcategory: "Project completion reports (PCR) / XSR",
    OriginalBudget: 0.43,
    AdjustedBudget: 0.54,
    Allotted: 0.36,
    Available: 0.18,
    ExecRate: "67%",
  },
];

const csvData = [
  [
    "ProjectsWPcategory",
    "OriginalBudget",
    "AdjustedBudget",
    "Allotted",
    "Available",
    "ExecRate",
  ],
  ...data.map(
    ({
      ProjectsWPcategory,
      OriginalBudget,
      AdjustedBudget,
      Allotted,
      Available,
      ExecRate,
    }) => [
      ProjectsWPcategory,
      OriginalBudget,
      AdjustedBudget,
      Allotted,
      Available,
      ExecRate,
    ]
  ),
];

const Summarytable = () => {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };

  const handle = useFullScreenHandle();

  const OriginalBudgettotal = data
    .map((item) => item.OriginalBudget)
    .reduce((a, b) => a + b, 0);

    const roundedOriginalBudgettotal = Number(OriginalBudgettotal.toFixed(1));


  const AdjustedBudgettotal = data
    .map((item) => item.AdjustedBudget)
    .reduce((a, b) => a + b, 0);

    const roundedAdjustedBudgettotal = Number(AdjustedBudgettotal.toFixed(1));


  const Allottedtotal = data
    .map((item) => item.Allotted)
    .reduce((a, b) => a + b, 0);

    const roundedAllottedtotal= Number(Allottedtotal.toFixed(1));

  const Availabletotal = data
    .map((item) => item.Available)
    .reduce((a, b) => a + b, 0);

    const roundedAvailabletotal= Number(Availabletotal.toFixed(1));

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
<div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">REPORT</p></div>
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
          <div className="overflow-x-auto theme-table">
          <FullScreen handle={handle}>
          
            <PerfectScrollbar>
            
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Projects WP category
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Original Budget
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Adjusted Budget
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Allotted
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Available
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Exec. Rate
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.ProjectsWPcategory}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.OriginalBudget?.toFixed(1)}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.AdjustedBudget?.toFixed(1)}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Allotted?.toFixed(1)}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Available?.toFixed(1)}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.ExecRate}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <td
                      scope="col"
                      className="px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left bg-white "
                    >
                      Grand Total
                    </td>
                    <td
                      scope="col"
                      className="px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left bg-white "
                    >
                      {roundedOriginalBudgettotal}
                    </td>
                    <td
                      scope="col"
                      className="px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left bg-white "
                    >
                      {roundedAdjustedBudgettotal}
                    </td>
                    <td
                      scope="col"
                      className="px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left bg-white "
                    >
                      {roundedAllottedtotal}
                    </td>
                    <td
                      scope="col"
                      className="px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left bg-white "
                    >
                      {roundedAvailabletotal}
                    </td>
                    <td
                      scope="col"
                      className="px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left bg-white "
                    >
                      58%
                    </td>
                  </tr>
                </tbody>
              </table>
          
          </PerfectScrollbar>
           
      </FullScreen>
      </div>
    </div>
  );
};

export default Summarytable;
 