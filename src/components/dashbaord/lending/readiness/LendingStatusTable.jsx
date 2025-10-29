
import Pagination from 'shared/Pagination';
import React, { useState,useMemo, useRef, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";

let PageSize = 8;
const tableData = [
  {
    date: '24-Jan-23',
    country: "Côte d'Ivoire",
    title: 'PROGRAMME DE RÉFORMES ECONOMIQUES ET SOCIALES PH. 3',
    total: '26.0',
    cast: 'CAT-1',
    readinss: 'N/A',
    status: 'Approved',
  },
  {
    date: '24-Jan-23',
    country: 'Multinational',
    title:
      'Ecowas Bank for Investment and Development (EBID) - West Africa Fertilizers and Agricultural Products, Trade finance support facility',
    total: '77.5',
    cast: 'FI-B',
    readinss: 'N/A',
    status: 'Approved',
  },
  {
    date: '24-Jan-23',
    country: 'Multinational',
    title:
      'Institutional support program: Regional Financial Hub in West Africa Region',
    total: '5.0',
    cast: 'FI-C',
    readinss: 'N/A',
    status: 'Reserve',
  },
  {
    date: '24-Jan-23',
    country: 'Togo',
    title: 'Projet de Renforcement de la cohésion sociale',
    total: '1.0',
    cast: 'CAT-1',
    readinss: 'N/A',
    status: 'Pipeline',
  },
  {
    date: '24-Jan-23',
    country: 'Togo',
    title: 'Projet de Renforcement de la cohésion sociale',
    total: '1.0',
    cast: 'CAT-1',
    readinss: 'N/A',
    status: 'Pipeline',
  },
  {
    date: '24-Jan-23',
    country: 'Togo',
    title: 'Projet de Renforcement de la cohésion sociale',
    total: '1.0',
    cast: 'CAT-1',
    readinss: 'N/A',
    status: 'Pipeline',
  },
  {
    date: '24-Jan-23',
    country: 'Togo',
    title: 'Projet de Renforcement de la cohésion sociale',
    total: '1.0',
    cast: 'CAT-1',
    readinss: 'N/A',
    status: 'Pipeline',
  },
  {
    date: '24-Jan-23',
    country: 'Multinational',
    title:
      'West African Monetary Zone (WAMZ) Unique Bank Identification (UBI) and Digital Interoperability Project',
    total: '6.1',
    cast: 'CAT-1',
    readinss: 'N/A',
    status: 'Approved',
  },
  {
    date: '24-Jan-23',
    country: 'Togo',
    title:
      "Projet d'accompagnement des jeunes hommes et femmes  entrepreneurs sur les chaines de valeur créatrices d'emplois",
    total: '15.2',
    cast: 'CAT-3',
    readinss: 'N/A',
    status: 'Before PCN',
  },
  {
    date: '24-Jan-23',
    country: 'Liberia',
    title: 'Liberia Payments Infrastructure and Systems Upgrade Project',
    total: '2.9',
    cast: 'CAT-3',
    readinss: 'N/A',
    status: 'Before PAR',
  },
  {
    date: '24-Jan-23',
    country: 'Ghana',
    title: 'PRIME MERIDIAN DOCKS -TAKORADI FLOATING',
    total: '17.1',
    cast: 'CAT-2',
    readinss: 'N/A',
    status: 'PAR approved',
  },
  {
    date: '24-Jan-23',
    country: "Côte d'Ivoire",
    title: 'Agricultural Production Project in Cabo Verde / 2PAU CV - (AEFPF)',
    total: '7.7',
    cast: 'CAT-2',
    readinss: 'N/A',
    status: 'PAR approved',
  },
  {
    date: '24-Jan-23',
    country: 'Gambia',
    title:
      'GAMBIA ELECTRICITY SYSTEM REHABILITATION AND EXPANSION PROJECT (GESREP)',
    total: '15.0',
    cast: 'CAT-3',
    readinss: 'N/A',
    status: 'PAR approved',
  },
];

const csvData = [
  ["#	BOARD DATE", "Country", "PROJECT TITLE", "Total", "E&S CAT.	", "E&S READINSS", "Status"],
  ...tableData.map(
    ({ date, country, title, total, cast, readinss, status }) => [
      date,
      country,
      title,
      total,
      cast,
      readinss,
      status,
    ]
  ),
];



const LendingStatusTable = () => {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();
  const toggleDownload = () => {
   
    setDownloadVisible(!isDownloadVisible);
  };
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

    <div className='cardBody'>
    
          <div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> 
              <p class="f14 semibold text-uppercase text-normal">LENDING STATUS</p>  
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
              <PerfectScrollbar>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          #
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap'
                        >
                          Board Date
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Country
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Project Title
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Total
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap'
                        >
                          E&S Cat.
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap'
                        >
                          E&S Readinss
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Status
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        ></th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                    {currentTableData.map((data, ind) => (
                        <tr
                          className={`${data?.isBold && 'bold'} ${data?.bgColor} ${
                            data?.bgOpacity
                          }`}
                          key={data.email}
                        >
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {ind + 1}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.date}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.country}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.title}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.total}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.cast}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.readinss}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13 flex items-center'>
                            <span
                              className={`w-3 h-3 block rounded-circle ${
                                ind <= 4 ? 'bg-benLightGreen' : 'bg-benPink'
                              } mr-1`}
                            />
                            {data?.status}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            <span
                              className={`w-3 h-3 block rounded-circle ${
                                ind === 3 || ind === 4 || ind === 6
                                  ? 'bg-benGray'
                                  : ind === 5 || ind === 9
                                  ? 'bg-benPink'
                                  : ind === 7 || ind === 8
                                  ? 'bg-benYellow'
                                  : 'bg-benLightGreen'
                              } mr-1`}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  </PerfectScrollbar>
              </div>
                <div className='flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2'>
                <p className='mb-3 md:mb-0 f13'> Showing data {currentPage * PageSize + Math.ceil(currentTableData.length - PageSize)} of {tableData.length} of Next Metrics</p>
                    <Pagination
              className="pagination-bar"
              currentPage={currentPage}
              totalCount={tableData.length}
              pageSize={PageSize}
              onPageChange={page => setCurrentPage(page)}
            />
                </div>
          </div>
      </div>
      </FullScreen>
      </div>      
 
  );
};

export default LendingStatusTable;
