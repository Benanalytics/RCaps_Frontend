import React, { useState, useRef, useEffect } from 'react';
import { FaUserLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";


const lendingData  = [
  {
    type: 'ADB Pvt',
    project: 17,
    financing: 17000,
    budget: 768,
  },
  {
    type: 'ABD Plc',
    project:'' ,
    financing: '',
    budget:'' ,
  },
  {
    type: 'ADF',
    project: '',
    financing: '',
    budget: '',
  },
];

const pipelineData  = [
    {
      type: 'ADB Pvt',
      project: '',
      financing: '',
      budget: '',
    },
    {
      type: 'ABD Plc',
      project:'' ,
      financing: '',
      budget:'' ,
    },
    {
      type: 'ADF',
      project: '',
      financing: '',
      budget: '',
    },
  ];

  const portfolioData  = [
    {
      type: 'Supervision',
      project: '',
      financing: '',
      budget: '',
    
    },
    {
      type: 'Project Completion Reports (PCR)',
      project:'' ,
      financing: '',
      budget:'' ,
    },
  ];

 

export default function VpsSummarySignSheet() {

  const data=[...lendingData,...pipelineData,...portfolioData];

  const csvData = [
    ["COMPLEX", "AHVP"],
    ...data.map(
      ({ type, project, financing, budget}) => [
        type, project, financing, budget
      
      ]
    ),
  ];


  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();

  const toggleDownload = () => {
   
    setDownloadVisible(!isDownloadVisible);
  };

  const LendingProjectTotal = lendingData.map((item) => item.project).reduce((a, b) => a + b, '');
  const LendingFinancingTotal = lendingData.map((item) => item.financing).reduce((a, b) => a + b, '');
  const LendingBudgetTotal = lendingData.map((item) => item.budget).reduce((a, b) => a + b, '');
  
  const PipelineProjectTotal = pipelineData.map((item) => item.project).reduce((a, b) => a + b, '');
  const PipelineFinancingTotal = pipelineData.map((item) => item.financing).reduce((a, b) => a + b, '');
  const PipelineBudgetTotal = pipelineData.map((item) => item.budget).reduce((a, b) => a + b, '');

  const PortfolioProjectTotal = pipelineData.map((item) => item.project).reduce((a, b) => a + b, '');
  const PortfolioBudgetTotal = pipelineData.map((item) => item.budget).reduce((a, b) => a + b, '');


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
              <div className='mb-4 items-self-center'> 
                  <p class="f14 semibold text-uppercase text-normal"> vps Summary sign sheet</p>
                  <p class="f13 semibold text-light text-normal text-benGray">Work Program Agreement</p>
              </div>
              <div className='flex gap-x-3 flex-wrap items-center mb-3'>
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

                        <div className='mt-1 mb-1'>


                          
                         <button className='border_black bg-white text-benLightGray text-black rounded-md themebtn f14 flex items-center gap-x-2'  style={{backgroundColor:'#e3e3e3'}} >
                          <FaUserLock className='h-4 w-4 link-icon' aria-hidden='true' />
                          <span className='link-title f14 text-black'>Sign Off</span>
                          </button>
                          </div> 
                          <div className='mt-1 mb-1'>
                              <button className='border_blue bg-white text-benLightGray rounded-md themebtn themePurpleBg f14 flex items-center gap-x-2 text-white' style={{backgroundColor:'#7c86ff'}}>
                                <FaEye className='h-4 w-4 link-icon' aria-hidden='true' />
                                <span className='link-title f14'>Request Review</span>
                            </button>
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
                          
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                       
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Complex
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        AHVP
                        </th>
                        
                      </tr>
                      <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Work Program Category
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                       
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                         
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                      
                        </td>
                        
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                    <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase border-width1 border-b border-benBlue'
                        >
                          I. Lending
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase border-width1 border-b border-benBlue'
                        >
                       Number of project
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase border-width1 border-b border-benBlue'
                        >
                          Total Financing (UAM)
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase border-width1 border-b border-benBlue'
                        >
                        Allocated Budget (UAM)
                        </td>
                        
                      </tr>
                    {lendingData.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.type}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.project}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.financing}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.budget}
                          </td>
                          
                        </tr>
                      ))}
                       <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left semibold bold text-normal text-black f12 text-uppercase'
                        >
                         Total
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold bold text-normal text-black f12 text-uppercase'
                        >
                       {LendingProjectTotal}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold bold text-normal text-black f12 text-uppercase'
                        >
                          {LendingFinancingTotal}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold bold text-normal text-black f12 text-uppercase'
                        >
                        {LendingBudgetTotal}
                        </td>
                        
                      </tr>
                      <tr>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                         II. Pipeline
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                       Number of project
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Total Financing (UAM)
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        Allocated Budget (UAM)
                        </td>
                        
                      </tr>
                    {pipelineData.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.type}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.project}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.financing}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.budget}
                          </td>
                          
                        </tr>
                      ))}
                       <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                         Total
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                       {PipelineProjectTotal}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                          {PipelineFinancingTotal}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        {PipelineBudgetTotal}
                        </td>
                        
                      </tr>
                      <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                         III. Active Portfolio
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                       Number of project
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                         
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        Allocated Budget (UAM)
                        </td>
                        
                      </tr>
                    {portfolioData.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.type}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.project}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                           
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.budget}
                          </td>
                          
                        </tr>
                      ))}
                       <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                         Total
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                       {PortfolioProjectTotal}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                          
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        {PortfolioBudgetTotal}
                        </td>
                        
                      </tr>
                      <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        IV. Economic Sector Work (ESW)
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                       Number of project
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                         
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                        Allocated Budget (UAM)
                        </td>
                        
                      </tr>
                      <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                         Total
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                       {''}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        {''}
                        </td>
                        
                      </tr>
                      <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                         Total Budget
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                       {''}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        {''}
                        </td>
                        
                      </tr>
                      <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                         RDVP Complex
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                       {'VP'}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        {''}
                        </td>
                        
                      </tr>
                      <tr>
                      <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                         xxxx Complex
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                       {'VP'}
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        
                        </td>
                        <td
                          scope='col'
                          className='px-2 py-2 text-left bold text-normal text-black f12 text-uppercase'
                        >
                        {''}
                        </td>
                        
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
          </FullScreen>
      </div>
    </div>
  );
}
