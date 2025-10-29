import React, { useState,useMemo, useRef, useEffect } from 'react';
import Pagination from 'shared/Pagination';
import StaffingWorkstationBars from './StaffingWorkstationBars';
import WorkstationUtilizationBar from './HeadQuaterBar';
import HeadQuaterBar from './HeadQuaterBar';
import NonPresence from './NonPresence';
import RegionHub from './RegionHub';
import CountryOffice from './CountryOffice';
import LP from './LP';
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
let PageSize = 5;
const tableData  = [
  {
    Blank: 'Head Quater',
    InNUMBER: 1,
    INPRECENTAGE: 1,
   INNUMBER1: 1,
   INPRECENTAGE2: 1,
    Chart1:<HeadQuaterBar/>
  },
  {
    Blank: 'Non-Presence',
    InNUMBER: 19,
    INPRECENTAGE: 19,
   INNUMBER1: 19,
   INPRECENTAGE2: 19,
   Chart1:<NonPresence/>

  },
  {
    Blank: 'Region Hub',
    InNUMBER: 140,
    INPRECENTAGE: 140,
   INNUMBER1: 140,
   INPRECENTAGE2: 140,
   Chart1:<RegionHub/>
 
  },
  {
    Blank: 'Country Office',
    InNUMBER: 114,
    INPRECENTAGE: 114,
   INNUMBER1: 110,
   INPRECENTAGE2: 110,
   Chart1:<CountryOffice/>
  },

  {
    Blank: 'Local Professional(LP)',
    InNUMBER: 84,
    INPRECENTAGE: 84,
   INNUMBER1: 84,
   INPRECENTAGE2: 84,
   Chart1:<LP/>
  },
];


const csvData = [
  ["", "InNUMBER", "INPRECENTAGE", "INNUMBER1", "INPRECENTAGE2", "Chart1"],
  ...tableData.map(
    ({ Blank, InNUMBER, INPRECENTAGE, INNUMBER1, INPRECENTAGE2, Chart1}) => [
      Blank, InNUMBER, INPRECENTAGE, INNUMBER1, INPRECENTAGE2, Chart1
    ]
  ),
]

export default function StaffingWorkstation() {

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

  const InNUMBERTotal=tableData.map((item)=>item.InNUMBER).reduce((a,b)=>a+b,0);
const INPRECENTAGEAVG=(tableData.map((item)=>item.INPRECENTAGE).reduce((a,b)=>a+b,0))/tableData.length;
const INNUMBER1Total=tableData.map((item)=>item.INNUMBER1).reduce((a,b)=>a+b,0);
const INPRECENTAGE2AVG=(tableData.map((item)=>item.INPRECENTAGE2).reduce((a,b)=>a+b,0))/tableData.length;

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
    <div className='card bg-white rounded-md grid-margin card-shadow KPI-peformanceGrid'>
      <div className='cardBody'>
          <div class="cardTitle flex items-center flex-wrap items-center justify-between">
            <div class="mb-4">
              <p class="f14 semibold text-uppercase text-normal">STAFFING TO WORKSTATION & WORKSTATION  UTILIZATION</p>
              <p class="f13 semibold text-light text-benGray">Staffing  TO Workstation & Workstation  Utilization</p>
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
          </div>

          <div className="staffing_workstationTop">
              <ul className='flex gap-x-3 flex-wrap'>
                    <li className='flex justify-center flex-col flex-wrap rounded-md'>
                       <StaffingWorkstationBars/>
                    </li>
                    <li className='flex justify-center flex-col flex-wrap rounded-md px-4 py-2'>
                     
                     <div className='flex gap-x-2'>
                       <div>
                         <p class="f18 text-bold semibold ">358%</p>
                         <p class="f14 semibold text-benGray">Staff To Workstation Ratio</p>
                       </div>
                     </div> 
                    
                   </li>

                    <li className='flex justify-center flex-col flex-wrap rounded-md px-4 py-2'>
                     
                      <div className='flex gap-x-2'>
                        <span className='rounded-circle green_circle  '></span>
                        <div>
                          <p class="f18 text-bold semibold ">354%</p>
                          <p class="f14 semibold text-benGray">Workstation Utilization</p>
                        </div>
                      </div> 
                     
                    </li>

                    <li className='flex justify-center flex-col flex-wrap rounded-md px-4 py-2'>                   
                      <div>
                        <p class="f18 text-bold semibold ">0.00</p>
                        <p class="f14 semibold text-benGray">Incurred Hours</p>
                      </div>
                    </li>

                    <li className='flex justify-center flex-col flex-wrap rounded-md px-4 py-2'>
                      <div>
                        <p class="f18 text-bold semibold ">358</p>
                        <p class="f14 semibold text-benGray">Staff To Workstation In Numbers</p>
                      </div>
                    </li>
                    <li className='flex justify-center flex-col flex-wrap rounded-md px-4 py-2'>
                     <div className='flex gap-x-2'>
                        <span className='rounded-circle purple_circle'></span>
                        <div>
                          <p class="f18 text-bold semibold ">354</p>
                          <p class="f14 semibold text-benGray">Workstation Utilization In Numbers</p>
                        </div>
                      </div> 
                      
                    </li>
                  </ul>
                </div>
                <FullScreen handle={handle}>
                <div className='mt-5 flow-root staffing_table'>
                  <div className='overflow-x-auto theme-table'>
                  <table className='min-w-full divide-y divide-gray-300 table-bordered'>
                        <thead>
                          <tr>
                             <th
                              scope='col'
                              className='border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase border-width1'
                            ></th>                           
                            <th
                              scope='col'
                              colSpan={2}
                              className='border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase border-width1'
                            >
                              <div className='flex items-center gap-x-1'>
                                <div className='rounded-circle green_circle'></div>
                                <div>STAFF TO WORKSTATION RATIO</div> 
                              </div> 
                             </th>
                            <th
                              scope='col'
                              colSpan={2}
                              className='border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase border-width1'
                            >
                              <div className='flex items-center gap-x-1'>
                                <div className='rounded-circle purple_circle'></div>
                                <div> WORKSTATION UTILIZATION</div> 
                              </div> 
                            </th>
                            <th
                              scope='col'
                              className='border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase border-width1 w230'
                            ></th>
                          
                          </tr>
                          <tr>
                          <th
                              scope='col'
                              className='px-2 py-2  text-left semibold text-normal text-benGray f12 text-uppercase '
                            >
                            
                            </th>
                            <th
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                            >
                               IN NUMBER
                            </th>
                            <th
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                            >
                               IN PERCENTAGE
                            </th>
                            <th
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                            >
                               IN NUMBER
                            </th>
                            <th
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                            >
                                 INPRECENTAGE
                            </th>
                            <th
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase w230'
                            >
                        
                            </th>
                          
                          </tr>
                        </thead>
                        <tbody className='divide-y divide-gray-200 bg-white'>
                               {currentTableData.map((data, ind) => (
                                <tr key={`TabkeKey${ind}`}>
                                   <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                    {data?.Blank}
                                  </td>
                                  <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                    {data?.InNUMBER}
                                  </td>
                                
                                  <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                    {data?.INPRECENTAGE}%
                                  </td>
                                  <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                    {data?.INNUMBER1}
                                  </td>
                                  <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                    {data?.INPRECENTAGE2}%
                                  </td>
                                  <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                  {data?.Chart1}
                                  </td>
                                </tr>
                          ))}
                          <tr className='total_row'>
                          <td
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-bold f12 text-uppercase'
                            >
                              TOTAL
                            </td>
                            <td
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-bold f12 text-uppercase'
                            >
                          {InNUMBERTotal}
                            </td>
                            <td
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-bold f12 text-uppercase'
                            >
                            {INPRECENTAGEAVG}%
                            </td>
                            <td
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-bold f12 text-uppercase'
                            >
                            {INNUMBER1Total}
                            </td>
                            <td
                              scope='col'
                              className='px-2 py-2 text-left semibold text-normal text-bold f12 text-uppercase'
                            >
                            {INPRECENTAGE2AVG}%
                            </td>
                            <td scope='col'
                                className='px-2 py-2 text-left semibold text-normal text-bold f12 text-uppercase'>
                            </td>
                            
                          </tr>
                        </tbody>
                      </table>
                  </div>
                  
                </div>
                </FullScreen>
      </div>
     
    </div>
  );
}
