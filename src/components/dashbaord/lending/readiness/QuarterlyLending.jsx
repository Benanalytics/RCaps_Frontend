import React, { useState, useRef, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";
const tableDate = [
  {
    title: 'YTD Approvals',
    circle: false,
    bgColor: 'bg-benLightGreen',
    bgOpacity: 'bg-opacity-20',
    central: '0',
    east: '82',
    multi: '142',
    nigeria: '142',
    north: '142',
    south: '142',
    west: '142',
    total: '570',
    readness: '',
  },
  {
    title: 'Q1 LENDING',
    circle: false,
    bgColor: 'bg-benGrayMid',
    bgOpacity: 'bg-opacity-40',
    central: '142',
    east: '204',
    multi: '635',
    nigeria: '491',
    north: '700',
    south: '90',
    west: '142',
    total: '2,506',
    readness: '',
    isBold: true,
  },

  {
    title: '% Regional Share',
    circle: false,
    bgColor: '',
    bgOpacity: '',
    central: '4%',
    east: '15%',
    multi: '10%',
    nigeria: '8%',
    north: '25%',
    south: '20%',
    west: '28%',
    total: '80%',
    readness: '100%',
  },
  {
    title: 'Of Which in BRAG',
    circle: false,
    bgColor: '',
    bgOpacity: '',
    central: '90',
    east: '172',
    multi: '350',
    nigeria: '423',
    north: '142',
    south: '142',
    west: '142',
    total: '5702',
    readness: '',
  },
  {
    title: 'PAR Approved',
    circle: true,
    bgColor: 'bg-benSecondary',
    bgOpacity: 'bg-opacity-20',
    central: '4%',
    east: '',
    multi: '',
    nigeria: '8%',
    north: '25%',
    south: '20%',
    west: '28%',
    total: '235',
    readness: '16%',
  },
  {
    title: 'PCN Approved',
    circle: true,
    bgColor: 'bg-benYellow',
    bgOpacity: 'bg-opacity-20',
    central: '65',
    east: '387',
    multi: '',
    nigeria: '144',
    north: '264',
    south: '210',
    west: '612',
    total: '235',
    readness: '77%',
  },
  {
    title: 'Before PCN',
    circle: true,
    bgColor: 'bg-benPink',
    bgOpacity: 'bg-opacity-20',
    central: '25',
    east: '',
    multi: '',
    nigeria: '',
    north: '25%',
    south: '',
    west: '39%',
    total: '235',
    readness: '77%',
  },
  {
    title: 'Q2 LENDING',
    circle: false,
    bgColor: 'bg-benGrayMid',
    bgOpacity: 'bg-opacity-40',
    central: '142',
    east: '204',
    multi: '635',
    nigeria: '491',
    north: '700',
    south: '90',
    west: '142',
    total: '2,506',
    readness: '',
    isBold: true,
  },

  {
    title: '% Regional Share',
    circle: false,
    bgColor: '',
    bgOpacity: '',
    central: '4%',
    east: '15%',
    multi: '10%',
    nigeria: '8%',
    north: '25%',
    south: '20%',
    west: '28%',
    total: '80%',
    readness: '100%',
  },
  {
    title: 'Of Which in BRAG',
    circle: false,
    bgColor: '',
    bgOpacity: '',
    central: '90',
    east: '172',
    multi: '350',
    nigeria: '423',
    north: '142',
    south: '142',
    west: '142',
    total: '5702',
    readness: '',
  },
  {
    title: 'PAR Approved',
    circle: true,
    bgColor: 'bg-benSecondary',
    bgOpacity: 'bg-opacity-20',
    central: '4%',
    east: '',
    multi: '',
    nigeria: '8%',
    north: '25%',
    south: '20%',
    west: '28%',
    total: '235',
    readness: '16%',
  },
  {
    title: 'PCN Approved',
    circle: true,
    bgColor: 'bg-benYellow',
    bgOpacity: 'bg-opacity-20',
    central: '65',
    east: '387',
    multi: '',
    nigeria: '144',
    north: '264',
    south: '210',
    west: '612',
    total: '235',
    readness: '77%',
  },
  {
    title: 'Before PCN',
    circle: true,
    bgColor: 'bg-benPink',
    bgOpacity: 'bg-opacity-20',
    central: '25',
    east: '',
    multi: '',
    nigeria: '',
    north: '25%',
    south: '',
    west: '39%',
    total: '235',
    readness: '77%',
  },
  {
    title: 'Q3 LENDING',
    circle: false,
    bgColor: 'bg-benGrayMid',
    bgOpacity: 'bg-opacity-40',
    central: '142',
    east: '204',
    multi: '635',
    nigeria: '491',
    north: '700',
    south: '90',
    west: '142',
    total: '2,506',
    readness: '',
    isBold: true,
  },

  {
    title: '% Regional Share',
    circle: false,
    bgColor: '',
    bgOpacity: '',
    central: '4%',
    east: '15%',
    multi: '10%',
    nigeria: '8%',
    north: '25%',
    south: '20%',
    west: '28%',
    total: '80%',
    readness: '100%',
  },
  {
    title: 'Of Which in BRAG',
    circle: false,
    bgColor: '',
    bgOpacity: '',
    central: '90',
    east: '172',
    multi: '350',
    nigeria: '423',
    north: '142',
    south: '142',
    west: '142',
    total: '5702',
    readness: '',
  },
  {
    title: 'PAR Approved',
    circle: true,
    bgColor: 'bg-benSecondary',
    bgOpacity: 'bg-opacity-20',
    central: '4%',
    east: '',
    multi: '',
    nigeria: '8%',
    north: '25%',
    south: '20%',
    west: '28%',
    total: '235',
    readness: '16%',
  },
  {
    title: 'PCN Approved',
    circle: true,
    bgColor: 'bg-benYellow',
    bgOpacity: 'bg-opacity-20',
    central: '65',
    east: '387',
    multi: '',
    nigeria: '144',
    north: '264',
    south: '210',
    west: '612',
    total: '235',
    readness: '77%',
  },
  {
    title: 'Before PCN',
    circle: true,
    bgColor: 'bg-benPink',
    bgOpacity: 'bg-opacity-20',
    central: '25',
    east: '',
    multi: '',
    nigeria: '',
    north: '25%',
    south: '',
    west: '39%',
    total: '235',
    readness: '77%',
  },
];

const csvData = [
  ["", "CENTRAL", "EAST", "MULTI", "NIGERIA","NOURTH","SOUTH","WEST","TOTAL","READINESS"],
  ...tableDate.map(
    ({ title, circle, bgColor, central, east,multi,nigeria ,north,south,west,total,readness}) => [
      title, circle, bgColor, central, east,multi,nigeria ,north,south,west,total,readness
    
    ]
  ),
];

const QuarterlyLending = () => {
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
    <div className='cardBody'>
     
          <div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'>  
              <p class="f14 semibold text-uppercase text-normal">Quarterly Lending Plan Overview and Approval Status</p> 
                <p class="f11 semibold text-uppercase text-normal text-benGray">Quarterly Lending Plan Overview and Approval Status</p>
                     
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
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        ></th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        ></th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          Central
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          East
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          Multi
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          Nigeria
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          Nourth
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          South
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          West
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          Total
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left'
                        >
                          %Readiness
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                      {tableDate.map((data) => (
                        <tr
                          className={`${data?.isBold && 'bold'} ${data?.bgColor} ${
                            data?.bgOpacity
                          }`}
                          key={data.email}
                        >
                          <td
                            className={`${
                              data?.isBold && 'bold'
                            } whitespace-nowrap px-2 py-2 text-light f13`}
                          >
                            {data?.title}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.circle ? (
                              <span
                                className={`w-3 h-3 rounded-full block ${data?.bgColor}`}
                              />
                            ) : (
                              ''
                            )}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.central}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.east}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.multi}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.nigeria}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.north}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.south}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.west}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.total}
                          </td>
                          <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                            {data?.readness}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
              </div>
          </div>
      </div>
      </FullScreen>
  </div>
  );
};

export default QuarterlyLending;
