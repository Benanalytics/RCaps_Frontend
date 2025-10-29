import React, { useState, useRef, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";

const EsiaTable = () => {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };
  const handle = useFullScreenHandle();
  // Define the data for each row in the table
  const tableData = [
    {
      category: 'Details provided on ESIA disclosure',
      cat1: 11,
      cat2: 4,
      cat3: 1,
      fiA: 3,
      fiB: 0,
      noDetails: 0,
      totalProjects: 19,
    },
    {
      category: 'No details on ESIA disclosure',
      cat1: 12,
      cat2: 19,
      cat3: 9,
      fiA: 8,
      fiB: 6,
      noDetails: 23,
      totalProjects: 76,
    },
    {
      category: 'Not Required',
      cat1: 0,
      cat2: 0,
      cat3: 5,
      fiA: 0,
      fiB: 0,
      noDetails: 0,
      totalProjects: 5,
    },
    {
      category: 'Not Required',
      cat1: 23,
      cat2: 25,
      cat3: 15,
      fiA: 11,
      fiB: 6,
      noDetails: 23,
      totalProjects: 100,
    },
  ];


  const csvData = [
    ["ESIA CATEGORIZATION DONE", "CAT-1", "CAT-2", "CAT-3", "FI-A","	FI-B","NO DETAILS ON ESIA DISCLOSURE","NUMBER OF PROJECTS"],
    ...tableData.map(
      ({ category, cat1, cat2, cat3, fiA,fiB,noDetails ,totalProjects}) => [
        category, cat1, cat2, cat3, fiA,fiB,noDetails ,totalProjects
      
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
    <div className='card bg-white rounded-md grid-margin card-shadow'>
      <div className='cardBody'>
        <div className='cardTitle flex justify-between items-center'>
          <div className='mb-4 items-self-center'>
            <p className='f14 semibold text-uppercase text-normal'>
              Overview of ESIA Categorization Status and{' '}
            </p>
            <p className='f11 semibold text-normal text-benGray'>
              Its Impact on Q2-Q4 Lending Delivery (Number of Projects Planned for May-Dec).
            </p>
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
        <FullScreen handle={handle}>
        <div className='mt-5'>
        <ul className='grid grid-cols-1 md:grid-cols-4 gap-4 list-inside list-disc text-sm text-benBlue'>
            <li className="f12">36% of CAT-1 operations lack ESIA details</li>
            <li className="f12">20% of CAT-2 projects have no ESIA details</li>
            <li className="f12">17% of projects have no assigned E&S rating.</li>
            <li className="f12">76% of projects lack ESIA disclosure information.</li>
          </ul>
          <table className='min-w-full divide-y divide-gray-300'>
            <thead>
              <tr>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  ESIA Categorization Done
                </th>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  CAT-1
                </th>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  CAT-2
                </th>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  CAT-3
                </th>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  FI-A
                </th>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  FI-B
                </th>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  No details on ESIA disclosure
                </th>
                <th
                  scope='col'
                  className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                >
                  Number of Projects
                </th>
              </tr>
            </thead>
            <tbody className='divide-y divide-gray-200'>
              {tableData.map((rowData, index) => (
                <tr key={index} className={index % 2 === 0 ? 'bg-benLightGreen bg-opacity-20' : ''}>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.category}</td>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.cat1}</td>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.cat2}</td>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.cat3}</td>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.fiA}</td>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.fiB}</td>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.noDetails}</td>
                  <td className='whitespace-nowrap px-2 py-2 text-light f13'>{rowData.totalProjects}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </FullScreen>
      </div>
    </div>
  );
};

export default EsiaTable;
