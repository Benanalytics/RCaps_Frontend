import React, { useState,useMemo, useRef, useEffect } from 'react';
import Pagination from 'shared/Pagination';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
let PageSize = 3;
const tableData  = [
  {
    department: 'PESD',
    project: 134,
    instrument: 218,
    workload: 8.4,
  },
  {
    department: 'PERN',
    project: 20,
    instrument: 24,
    workload: 1.7,
  },
  {
    department: 'PESR',
    project: 17,
    instrument: 26,
    workload: 1.6,
  },
  {
    department: 'PESD',
    project: 134,
    instrument: 218,
    workload: 8.4,
  },
  {
    department: 'PERN',
    project: 20,
    instrument: 24,
    workload: 1.7,
  },
  {
    department: 'PESR',
    project: 17,
    instrument: 26,
    workload: 1.6,
  },
  {
    department: 'PESD',
    project: 134,
    instrument: 218,
    workload: 8.4,
  },
  {
    department: 'PERN',
    project: 20,
    instrument: 24,
    workload: 1.7,
  },
  {
    department: 'PESR',
    project: 17,
    instrument: 26,
    workload: 1.6,
  },
  {
    department: 'PESR',
    project: 17,
    instrument: 26,
    workload: 1.6,
  },
  
];
const csvData = [
  ["DEPARTMENT","NBR OF PROJECT", "NBR OF INSTRUMENT", "TM WORKLOAD BY INSTRUMENT"],
  ...tableData.map(
    ({department, project, instrument, workload,}) => [
      department, project, instrument, workload,    ]
  ),
];

export default function PEVPportfolioTable() {

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
    <div className='card bg-white rounded-md grid-margin card-shadow'>
      <div className='cardBody'>
          <div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">PEVP PORTFOLIO PROFILE| Ageing operations are concentrated in PESD portfolio</p></div>

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
          <FullScreen handle={handle}>
          <div className=''>
            <div className='mt-4 flow-root'>
              <div className='overflow-x-auto theme-table'>
              <table className='min-w-full divide-y divide-gray-300'>
                    <thead>
                      <tr>
                      <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        Department
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                      Nbr of Project
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                         Nbr of Instrument
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        TM workload by instrument
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                    {currentTableData.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.department}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.project}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.instrument}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.workload}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
              <div className='flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2 gap-x-2'>
                <p className='f13 mb0'>
                Showing data {currentPage * PageSize + Math.ceil(currentTableData.length - PageSize)} of {tableData.length} of Next Metrics
                </p>
                <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={tableData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)} />
              </div>
            </div>
          </div>
          </FullScreen>
      </div>
      {/* <div className='cardTitle flex items-center p-3 border-b border-benThinBlue'>
        <p className='text-benBlue text-base lg:text-lg semibold'>

        </p>
      </div> */}
    
    </div>
  );
}
