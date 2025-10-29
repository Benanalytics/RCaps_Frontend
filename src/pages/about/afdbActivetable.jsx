import React, { useState, useMemo, useRef, useEffect } from "react";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import PerfectScrollbar from "react-perfect-scrollbar";
let PageSize = 8;
const tableData = [
  {
    Projects: "Number of Ongoing Projects",
    Value: 1186,
   
  },

  {
    Projects: "Portfolio Size (Approved amount)",
    Value: "UA 41.4 billion",
   
  },

  {
    Projects: "Disbursement Rate",
    Value: "44%",
   
  },

 
];

const csvData = [
  ["Projects", "Value"],
  ...tableData.map(
    ({ Projects, Value}) => [
      Projects, Value
    ]
  ),
];


export default function AfdbActivetable() {
  const [currentPage, setCurrentPage] = useState(1);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [isDownloadVisible, setDownloadVisible] = useState(false);

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
    <div className="cardBody">
      <FullScreen handle={handle}>
      <div class="flex gap-x-3 mb-4 flex-wrap items-center  mb-4 justify-end">
       
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

        <div className="mt-4">
          <div className="overflow-x-auto theme-table">
            <div className="align-middle">
              <PerfectScrollbar>
                <table className="min-w-full divide-y divide-gray-300 table-bordered half_halftd">
                  <thead>
                    <tr>
                      <th style={{width:'50%'}}
                        scope="col"
                        className="whitespace-nowrap px-2 py-2 semibold text-normal text-left text-benGray f12 text-uppercase"
                      >
                        <b>Projects</b>
                      </th>
                      <th style={{width:'50%'}}
                        scope="col"
                        className="whitespace-nowrap px-2 py-2 semibold text-normal text-left text-benGray f12 text-uppercase"
                      >
                        <b>Value</b>
                      </th>
                      
                    
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentTableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-left text-light f13">
                          {data?.Projects}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-left text-light f13">
                          {data?.Value}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </FullScreen>
    </div>
  );
}
