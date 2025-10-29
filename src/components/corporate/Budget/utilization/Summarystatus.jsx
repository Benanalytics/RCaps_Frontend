import React, { useState, useRef, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";

const data = [
  {
    WPcategoryRegion: 'Active Portfolio',
    OriginalBudget: 0.32,
    AdjustedBudget: 0.29,
    Allotted: 0.20,
    Available: 0.09,
    
  },
  {
    WPcategoryRegion: 'Lending program(IOP 2023)',
    OriginalBudget: 0.47,
    AdjustedBudget: 0.58,
    Allotted: 0.34,
    Available: 0.24,
    
  },
  {
    WPcategoryRegion: 'Pipeline ( IOP 2024 – 2025)',
    OriginalBudget: 1.07,
    AdjustedBudget: 0.89,
    Allotted: 0.46,
    Available: 0.43,
   
  },
 
 

];

const csvData = [
  ["WPcategoryRegion", "OriginalBudget", "AdjustedBudget", "Allotted", "Available"],
  ...data.map(
    ({ WPcategoryRegion, OriginalBudget, AdjustedBudget, Allotted, Available }) => [
      WPcategoryRegion, OriginalBudget, AdjustedBudget, Allotted, Available
    
    ]
  ),
];
const Summarystatus = () => {

  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();

  const toggleDownload = () => {
   
    setDownloadVisible(!isDownloadVisible);
  };
  const OriginalBudgettotal = data.map((item) => item.OriginalBudget).reduce((a, b) => a + b, 0);
  const roundedOriginalBudgettotal = Number(OriginalBudgettotal.toFixed(1));
  const AdjustedBudgettotal = data.map((item) => item.AdjustedBudget).reduce((a, b) => a + b, 0);
  const roundedAdjustedBudgettotal = Number(AdjustedBudgettotal.toFixed(1));
  const Allottedtotal = data.map((item) => item.Allotted).reduce((a, b) => a + b, 0);
  const roundedAllottedtotal = Number(Allottedtotal.toFixed(1));
  const Availabletotal = data.map((item) => item.Available).reduce((a, b) => a + b, 0);
  const roundedAvailabletotal = Number(Availabletotal.toFixed(1));
  
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
   
    <div className=''>
<div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">REPORT</p></div>
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
          <FullScreen handle={handle}>
            <div className='overflow-x-auto theme-table'>
              <PerfectScrollbar>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead>
                    <tr>
                    <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left '
                      >
            WP category/ Region
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left '
                      >
                      Original Budget
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left '
                      >
                    Adjusted Budget
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left '
                      >
                      Allotted
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left '
                      >
                    Available
                      </th>
                    
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {data.map((item) => (
                      <tr
                      
                      >
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.WPcategoryRegion}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.OriginalBudget?.toFixed(1)}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.AdjustedBudget?.toFixed(1)}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.Allotted?.toFixed(1)}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.Available?.toFixed(1)}
                        </td>
                      
                      </tr>
                    ))}
          <tr>
                    <td
                        scope='col'
                        className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left bg-white'
                      >
                      Grand Total
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left  bg-white'
                      >
                      {roundedOriginalBudgettotal}
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left  bg-white'
                      >
                {roundedAdjustedBudgettotal}
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left  bg-white'
                      >
                      {roundedAllottedtotal}
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left  bg-white'
                      >
                {roundedAvailabletotal}
                      </td>
                    
                    </tr>

                  </tbody>
              </table>
              </PerfectScrollbar>
            </div>
          </FullScreen>
</div>
  );
};

export default Summarystatus;
