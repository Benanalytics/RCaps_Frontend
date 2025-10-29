import React, { useState,useMemo, useRef, useEffect } from 'react';
import PEPVTableCircularbar from 'components/corporate/WorkForce/workload/PEPVTableCircularbar';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { Fullscreen } from 'highcharts';
const task  = [
  {
    name: '52 Task Managers',
    origination:21,
    originationSupervision: 44,
    supervision: 35,
  },
];

const cotask  = [
    {
        name: '4 Co-Task Managers',
        origination:1,
        originationSupervision: '-',
        supervision: '-',
      },
  ];


  const csvData = [
    ["ASSIGNMENT", "ORIGINATION", "ORIGINATION & SUPERVISION", "SUPERVISION"],
    ...cotask.map(
      ({ name, origination, originationSupervision, supervision }) => [
        name, origination, originationSupervision, supervision
      ]
    ),
  ];

export default function PEVPResponsibilitiesTable() {

  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
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
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">PEVP TMs| 44% combine origination and supervision responsibilities</p></div>

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
              <PerfectScrollbar>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead>
                      <tr>
                      <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        Assignment
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center'
                        >
                      Origination
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center'
                        >
                         Origination & 
                         Supervision
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase text-center'
                        >
                        Supervision
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                    {task.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.name}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13 text-center'>
                              <PEPVTableCircularbar progress={data?.origination}/>
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13 text-center'>
                              <PEPVTableCircularbar progress={data?.originationSupervision} />
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13 text-center'>
                              <PEPVTableCircularbar progress={data?.supervision}/>
                          </td>
                        </tr>
                      ))}
                      {cotask.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.name}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13 text-center'>
                            {data?.origination}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13 text-center'>
                            {data?.originationSupervision}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13 text-center'>
                            {data?.supervision}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </PerfectScrollbar>
              </div>
              {/* <div className='flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2'>
                <p className='px-2 f13 mb0'>
                Showing data {currentPage * PageSize + Math.ceil(currentTableData.length - PageSize)} of {tableData.length} of Next Metrics
                </p>
                <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={tableData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)} />
              </div> */}
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
