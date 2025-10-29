import React, { useState, useRef, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";

export default function OperationsTable() {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();
  const toggleDownload = () => {
   
    setDownloadVisible(!isDownloadVisible);
  };

  const tableData = [
    {
      category: 'Details provided on ESIA disclosure',
      cat1: 11,
      cat2: 4,
      cat3: 1,
      fiA: 3,
      fiB: 0,
      noDetails: 0,
      projects: 19,
    },
    {
      category: 'No details on ESIA disclosure',
      cat1: 12,
      cat2: 19,
      cat3: 9,
      fiA: 8,
      fiB: 6,
      noDetails: 23,
      projects: 76,
    },
    {
      category: 'Not Required',
      cat1: 0,
      cat2: 0,
      cat3: 5,
      fiA: 0,
      fiB: 0,
      noDetails: 0,
      projects: 5,
    },
    {
      category: 'Not Required',
      cat1: 23,
      cat2: 25,
      cat3: 15,
      fiA: 11,
      fiB: 6,
      noDetails: 23,
      projects: 100,
    },
  ];
  const csvData = [
    ["", "CAT-1", "CAT-2", "CAT-3", "F1-A", "F1-B", "NO Details ON ESIA DISCLOSURE","NUMBER OF PROJECTS"],
    ...tableData.map(
      ({ category, cat1, cat2, cat3, fiA, fiB, noDetails,projects }) => [
        category, cat1, cat2, cat3, fiA, fiB, noDetails,projects
      ]
    ),
  ];

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
     <div className='md:col-span-2 card bg-white rounded-md card-shadow grid-margin'>
        <FullScreen handle={handle}>
        <div className='cardBody'>
          {/* <div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">Overall E&S Readiness for the 100 Operations Scheduled May-Sept BRAG</p></div>
              <div className='btn btn-sm outline-primaryBtn rounded-md flex gap-x-2 items-center mb-4'>
                <i class="ri-file-excel-2-line f18"></i> Export to Excel
              </div>
          </div> */}


          <div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">Overall E&S Readiness for the 100 Operations Scheduled May-Sept BRAG</p>
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
                <div className="ellipsis-button"ref={downloadDropdownRef}>
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

            <div className='mt-5 flow-root'>
              <div className='overflow-x-auto theme-table'>
              <PerfectScrollbar>
                  <table className='min-w-full divide-y divide-gray-300'>
                    <thead>
                      <tr>
                        <th
                          scope='col'
                          className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        ></th>
                        <th
                          scope='col'
                          className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          CAT-1
                        </th>
                        <th
                          scope='col'
                          className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          CAT-2
                        </th>
                        <th
                          scope='col'
                          className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          CAT-3
                        </th>
                        <th
                          scope='col'
                          className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          FI-A
                        </th>
                        <th
                          scope='col'
                          className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          FI-B
                        </th>
                        <th
                          scope='col'
                          className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          No details on ESIA disclosure
                        </th>
                        <th scope='col' className='whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'>
                          Number of Projects
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
              {tableData.map((row, index) => (
                <tr
                  key={index}
                  className={index % 2 === 0 ? 'bg-benLightGreen bg-opacity-20' : ''}
                >
                  <td className="px-2 py-2 text-ce text-center f13">{row.category}</td>
                  <td className="px-2 py-2 text-center  f13">{row.cat1}</td>
                  <td className="px-2 py-2 text-center f13">{row.cat2}</td>
                  <td className="px-2 py-2 text-center f13">{row.cat3}</td>
                  <td className="px-2 py-2 text-center f13">{row.fiA}</td>
                  <td className="px-2 py-2 text-center f13">{row.fiB}</td>
                  <td className="px-2 py-2 text-center f13">{row.noDetails}</td>
                  <td className="px-2 py-2 text-center f13">{row.projects}</td>


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
