import React, { useState,useMemo, useRef, useEffect } from 'react';
import Pagination from 'shared/Pagination';
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
let PageSize = 5;


const tableData  = [
  {
    complex: 'AHVP TMS mapped',
    projects: 66,
    managers: 49,
   tenprojects: 37,
   sixtonineprojects: 45,
   threetofiveprojects: 18,
   onetotwoprojects:18,
   zeroprojects:18,
  },
  {
    complex: 'PEVP TMS  mapped',
    projects: 20,
    managers: 15,
   tenprojects: 47,
   sixtonineprojects: 27,
   threetofiveprojects: 27,
   onetotwoprojects:27,
   zeroprojects:27,
  },
  {
    complex: 'ECVP TMS mapped',
    projects: 18,
    managers: 16,
   tenprojects: 25,
   sixtonineprojects: 38,
   threetofiveprojects: 38,
   onetotwoprojects:38,
   zeroprojects:38,
  },
  {
    complex: 'PIVP TMS mapped',
    projects: 31,
    managers: 28,
   tenprojects: 36,
   sixtonineprojects: 21,
   threetofiveprojects: 43,
   onetotwoprojects:43,
   zeroprojects:43,
  },
];

const csvData = [
  ["COMPLEX","NR. OF PROJECTS", "NR. OF TASK MANAGERS", "10 PROJECTS", "6-9 PROJECTS", "3-5 PROJECTS", "1-2 PROJECTS", "0 PROJECTS"],
  ...tableData.map(
    ({complex, projects, managers, tenprojects, sixtonineprojects, threetofiveprojects, onetotwoprojects,zeroprojects}) => [
      complex, projects, managers, tenprojects, sixtonineprojects, threetofiveprojects, onetotwoprojects,zeroprojects
    ]
  ),
];

export default function TimelyandQualityDelivery() {

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

  const totalProjects=tableData.map((item)=>item.projects).reduce((a,b)=>a+b,0);
const totalManagers=tableData.map((item)=>item.managers).reduce((a,b)=>a+b,0);

const tenprojectsAVG=(tableData.map((item)=>item.tenprojects).reduce((a,b)=>a+b,0))/tableData.length;
const roundedtenprojectsAVG = Number(tenprojectsAVG.toFixed(1));


const sixtonineprojectsAVG=(tableData.map((item)=>item.sixtonineprojects).reduce((a,b)=>a+b,0))/tableData.length;
const roundedsixtonineprojectsAVG = Number(sixtonineprojectsAVG.toFixed(1));


const threetofiveprojectsAVG=(tableData.map((item)=>item.threetofiveprojects).reduce((a,b)=>a+b,0))/tableData.length;
const roundedthreetofiveprojectsAVG= Number(threetofiveprojectsAVG.toFixed(1));



const onetotwoprojectsAVG=(tableData.map((item)=>item.onetotwoprojects).reduce((a,b)=>a+b,0))/tableData.length;
const roundedonetotwoprojectsAVG= Number(onetotwoprojectsAVG.toFixed(1));


const zeroprojectsAVG=(tableData.map((item)=>item.zeroprojects).reduce((a,b)=>a+b,0))/tableData.length;
const roundedzeroprojectsAVG= Number(zeroprojectsAVG.toFixed(1));

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
        <div class="mb-4">
          <p class="f14 semibold text-uppercase text-normal">Are we optimally resourced for timely and quality delivery of sovereign project?</p>
            <p class="f13 semibold text-light text-benGray">Portfolio Management Of Resonsibilities Of TMs Mapped To LP</p>
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
                        complex
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Nr. of Projects 
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Nr. of Task Managers
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        10 Projects
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        6-9 Projects
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        3-5 Projects
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        1-2 Projects
                        </th>

                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        0 Projects
                        </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200 bg-white'>
                  {currentTableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.complex}
                        </td>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.projects}
                        </td>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.managers}
                        </td>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.tenprojects?.toFixed(1)}%
                        </td>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.sixtonineprojects?.toFixed(1)}%
                        </td>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.threetofiveprojects?.toFixed(1)}%
                        </td>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.onetotwoprojects?.toFixed(1)}%
                        </td>
                        <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                          {data?.zeroprojects?.toFixed(1)}%
                        </td>
                      </tr>
                    ))}
                    <tr className='total_row'>
                    <td scope='col' className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase '>
                              {/* const tenprojectsAVG=(tableData.map((item)=>item.tenprojects).reduce((a,b)=>a+b,0))/tableData.length;
                              const sixtonineprojectsAVG=(tableData.map((item)=>item.sixtonineprojects).reduce((a,b)=>a+b,0))/tableData.length;
                              const threetofiveprojectsAVG=(tableData.map((item)=>item.threetofiveprojects).reduce((a,b)=>a+b,0))/tableData.length;
                              const onetotwoprojectsAVG=(tableData.map((item)=>item.onetotwoprojects).reduce((a,b)=>a+b,0))/tableData.length;
                              const zeroprojectsAVG=(tableData.map((item)=>item.zeroprojects).reduce((a,b)=>a+b,0))/tableData.length; */}
                    
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase'
                      >
                      {totalProjects}
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase'
                      >
                      {totalManagers}
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase'
                      >
                      {roundedtenprojectsAVG}%
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase'
                      >
                      {roundedsixtonineprojectsAVG}%
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase'
                      >
                      {roundedthreetofiveprojectsAVG}%
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase'
                      >
                      {roundedonetotwoprojectsAVG}%
                      </td>
                      <td
                        scope='col'
                        className='px-2 py-2 text-left semibold text-bold text-black f12 text-uppercase total_td'
                      >
                      {roundedzeroprojectsAVG}%
                      </td>
                    </tr>
                  </tbody>
                </table>
            </div>
            
          </div>
        </div>
        </FullScreen>
    </div>

  );
}
