import React, { useState,useMemo, useRef, useEffect } from 'react';
import Pagination from 'shared/Pagination';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";

let PageSize = 5;
const tableData  = [
  {
    code: 'P-EG-000-023',
    name: 'Rail Support projects',
    country: 'Egypt',
    status: 'IOP',
    year: '2026',
    WP: 'NO',
    type: 'SOV',
    region: 'RDGN',
    sector: 'PICU',
    appTotal: '66',
    highBudge: '0',
    low: '0',
  },
  {
    code: 'P-ZA-000006',
    name: 'Nyanza Light metals',
    country: 'South Africa',
    status: 'IOP',
    year: '2024',
    WP: 'NO',
    type: 'NSO',
    region: 'RDGS',
    sector: 'PITD',
    appTotal: '200',
    highBudge: '427',
    low: '0',
  },
  {
    code: 'P-ZA-DBO-142',
    name: 'TZ BI DAC SGR Railway Product',
    country: 'Egypt',
    status: 'Pipeline',
    year: '2027',
    WP: 'NO',
    type: 'NSO',
    region: 'RDGE',
    sector: '',
    appTotal: '49',
    highBudge: '0',
    low: '240',
  },
  {
    code: 'P-EG-000-007',
    name: 'Bus Rapid Transit',
    country: 'Multi',
    status: 'IOP',
    year: '2025',
    WP: 'NO',
    type: 'NSO',
    region: 'RDGN',
    sector: 'PICU',
    appTotal: '100',
    highBudge: '0',
    low: '100',
  },
  {
    code: 'P-EG-000-012',
    name: 'Bus Rapid Transit',
    country: 'Multi',
    status: 'Existing Portfolio',
    year: '2023',
    WP: 'NO',
    type: 'NSO',
    region: 'RDGS',
    sector: 'PICU',
    appTotal: '77',
    highBudge: '0',
    low: '0',
  },
  {
    code: 'P-ZA-000-006',
    name: 'Ecommerce Recovery Support programme',
    country: 'Mauritius',
    status: 'IOP',
    year: '2024',
    WP: 'NO',
    type: 'NSO',
    region: 'RDGE',
    sector: 'ECGF',
    appTotal: '111',
    highBudge: '0',
    low: '0',
  },
  {
    code: 'P-NG-00-009',
    name: 'SAY NO TO FAMINE FOR NIGERIA',
    country: 'South Africa',
    status: 'IOP',
    year: '2025',
    WP: 'NO',
    type: 'SOV',
    region: 'RDGS',
    sector: 'ECGF',
    appTotal: '80',
    highBudge: '0',
    low: '0',
  },
  {
    code: 'P-AO-EOO-010',
    name: 'SAY NO TO FAMINE FOR NIGERIA',
    country: 'Nigeria',
    status: 'IOP',
    year: '2026',
    WP: 'NO',
    type: 'SOV',
    region: 'RDGN',
    sector: 'AHHD',
    appTotal: '25',
    highBudge: '0',
    low: '0',
  },
];

const csvData = [
  ["PROJECT CODE", "PROJECT NAME", "COUNTRY", "STATUS", "APPROVAL YEAR","WP","	OPERATION TYPE","REGION","SECTOR","	APP TOTAL","HIGH BUDGE","LOW"],
  ...tableData.map(
    ({ code, name, country, status, year,WP ,type,region,sector,appTotal,highBudge,low}) => [
      code, name, country, status, year,WP ,type,region,sector,appTotal,highBudge,low
    
    ]
  ),
];


export default function WPA360Matrix() {

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
    <div className='card bg-white rounded-md grid-margin card-shadow KPI-peformanceGrid'>
      <div className='cardBody'>
          <div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal"> WPA 360 MATRIX</p></div>
              <div className='flex gap-x-3 flex-wrap items-center mb-3'>
                  <div className='border_blue bg-white text-benLightGray px-4 py-3 justify-between rounded-md input-box f14 flex items-center search_input'>
                      {/* <select name='name' id='name' className='bg-transparent text-uppercase'>
                        <option value='all'>All</option>
                        <option value='all'>Option 1</option>
                        <option value='all'>Option 2</option>
                        <option value='all'>Option 3</option>
                      </select> <span className='mx-2'>|</span> */}
                      <span className='f14'>Search</span>
                      <span> <i class="ri-search-line f16"></i></span>
                  </div>

                  <div className="ellipsis-button" ref={downloadDropdownRef}>
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
                          PROJECT CODE
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        PROJECT NAME
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          COUNTRY
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                         STATUS
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          APPROVAL YEAR
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          WP
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          OPERATION TYPE
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          REGION
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase YoY-width'
                        >
                          SECTOR
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          APP TOTAL
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          HIGH BUDGE
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          LOW
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                    {currentTableData.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.code}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.name}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.country}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.status}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.year}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.WP}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.type}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.region}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                           {data?.sector}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                              {data?.appTotal}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.highBudge}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.low}
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
                <Pagination className="pagination-bar" currentPage={currentPage} totalCount={tableData.length} pageSize={PageSize} onPageChange={page => setCurrentPage(page)} />
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
