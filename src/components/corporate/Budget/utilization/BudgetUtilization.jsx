
import Pagination from 'shared/Pagination';
import React, { useState,useMemo, useRef, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";

let PageSize = 7;

const tableData = [
   {
    WBS: "P-NG-A00-008-07",
    WBSElement: "TRANSPORT FACILITATION PROGRAMME FOR THE BAMENDA-MAMFEABAKALIKI-ENUGU" ,
    ActivityCostDivision: "Supervision",
    CommitementItems: "Consultancy",
    Budget: 0,
    UtilizationRate: "",
    Committed: -311,
    Actual:-311,
    Available:-311
    },
    {
      WBS: "",
      WBSElement: "ROAD CORRIDOR" ,
      ActivityCostDivision: "",
      Budget: "",
      UtilizationRate: "",
      Committed: "",
      Actual: "",
      Available:"",
    },

    {
      WBS: "P-NG-A00-008-07",
      WBSElement: "PLATEAU STATE POTATO VALUE CHAIN SUPPORT PROJECT (PS-PVCP)" ,
      ActivityCostDivision: "Supervision",
      CommitementItems: "Mission",
      Budget: 1660,
      UtilizationRate: "0%",
      Committed: 0,
      Actual:0,
      Available:161
      },
     
    {
      WBS: "P-NG-AAB-003-013",
      WBSElement: "PLATEAU STATE POTATO VALUE CHAIN SUPPORT PROJECT (PS-PVCP)" ,
      ActivityCostDivision: "Environmental and social safeguards",
      CommitementItems: "Consultancy",
      Budget: 1717,
      UtilizationRate: "0%",
      Committed: 0,
      Actual:0,
      Available:171
      },

      {
        WBS: "P-NG-AAB-003-07",
        WBSElement: "AGRICULTURAL TRANSFORMATION AGENDA SUPPORT PROGRAM - PHASE I" ,
        ActivityCostDivision: "Supervision",
        CommitementItems: "Mission",
        Budget: 1660,
        UtilizationRate: "0%",
        Committed: 0,
        Actual:0,
        Available:166
        },

        {
          WBS: "P-NG-AAB-003-08",
          WBSElement: "AGRICULTURAL TRANSFORMATION AGENDA SUPPORT PROGRAM - PHASE I" ,
          ActivityCostDivision: "Completion",
          CommitementItems: "Consultancy",
          Budget:100,
          UtilizationRate: "0%",
          Committed: 0,
          Actual:0,
          Available:10
          },
       
          {
            WBS: "P-NG-AAG-008-13",
            WBSElement: "FLOUR MILLS OF NIGERIA PLC" ,
            ActivityCostDivision: "Environmental and social safeguards",
            CommitementItems: "Consultancy",
            Budget:1736,
            UtilizationRate: "0%",
            Committed: 0,
            Actual:0,
            Available:173
            },

            {
              WBS: "P-NG-AZO-001-07",
              WBSElement: "SAY NO TO FAMINE FOR NIGERIA" ,
              ActivityCostDivision: "Supervision",
              CommitementItems: "Mission",
              Budget:11,
              UtilizationRate: "0%",
              Committed: 0,
              Actual:0,
              Available:1
              },

            
];

const csvData = [
  [
    "WBS",
    "WBSElement",
    "ActivityCostDivision",
    "AllCommitementItemsotted",
    "CommitementItems",
    "Budget",
    "UtilizationRate",
    "Committed",
    "Actual",
    "Available",
  ],
  ...tableData.map(
    ({
      WBS,
      WBSElement,
      ActivityCostDivision,
      AllCommitementItemsotted,
      CommitementItems,
      Budget,
      UtilizationRate,
      Committed,
      Actual,
      Available,
     
    }) => [
      WBS,
      WBSElement,
      ActivityCostDivision,
      AllCommitementItemsotted,
      CommitementItems,
      Budget,
      UtilizationRate,
      Committed,
      Actual,
      Available,
    ]
  ),
];

const BudgetUtilization = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [isDownloadVisible, setDownloadVisible] = useState(false);

    const Budgettotal = tableData.map((item) => item.Budget).reduce((a, b) => a + b, 0);
  // const UtilizationRatetotal = data.map((item) => item.UtilizationRate).reduce((a, b) => a + b, 0);
  const Committedtotal = tableData.map((item) => item.Committed).reduce((a, b) => a + b, 0);
  const Actualtotal = tableData.map((item) => item.Committed).reduce((a, b) => a + b, 0);
  const Availabletotal = tableData.map((item) => item.Actual).reduce((a, b) => a + b, 0);

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
    <div className="">
      <div class="cardTitle flex justify-between items-center">
              {/* <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">REPORT</p></div> */}
        <div class="mb-4">
          <p class="f14 semibold text-uppercase text-normal">BUDGET UTILIZATION REPORT</p>
          <p class="f13 semibold text-light text-benGray">Budget Matrix [Figure In UA]</p>
          </div>
          <div class="flex items-center mb-4 gap-x-2 justify-end">
              <form className="border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center f14 lg:w-56">
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
          <div className='mt-4 flow-root'>
          <div className='overflow-x-auto theme-table'>
            <div className=''>
            <PerfectScrollbar>
              <table className='min-w-full divide-y divide-gray-300'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                    >
                    WBS
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap'
                    >
                  WBS Element
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                    >
                    Activity Cost Division
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                    >
                  Commitement Items
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                    >
                    Budget
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap'
                    >
                    Utilization Rate
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap'
                    >
                    Committed
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                    >
                    Actual
                    </th>
                    <th
                      scope='col'
                      className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                    >
                  Available
                    </th>
                  </tr>
                </thead>
                <tbody className='divide-y divide-gray-200'>
                  {currentTableData.map((item) => (
                    <tr
                  
                    >
                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.WBS}
                      </td>
                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.WBSElement}
                      </td>
                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.ActivityCostDivision}
                      </td>
                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.CommitementItems}
                      </td>
                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.Budget}
                      </td>
                      <td className='whitespace-nowrap px-2 py-2 text-light f13 flex gap-x-2'>
                  {item?.UtilizationRate ? (
              <React.Fragment>
              {item.UtilizationRate} <input type="checkbox" />
          </React.Fragment>
                  ) : (
                <span></span>
                    )}
                    </td>

                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.Committed}
                      </td>
                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.Actual}
                      </td>
                      <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                        {item?.Available}
                      </td>
                    </tr>
                  ))}
      <tr className='total_row'>

                  <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
                    Total 
                    </td>
                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
                  
                    </td>
                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
          
                    </td>
                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
                    {/* {Allottedtotal} */}
                    </td>
                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
            2,04,560
                    </td>
                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
                  51%
                    </td>

                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
                  103,428
                    </td>

                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
                  8,008
                    </td>

                    <td
                      scope='col'
                      className='px-2 py-2 semibold text-bold text-black f12 text-uppercase text-left '
                    >
                    10,113
                    </td>
                  </tr>

                </tbody>
              </table>
              </PerfectScrollbar>
        </div>
      </div>
          <div className='flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2 gap-x-2'>
            <p className='f13 mb0'>
            Showing data {currentPage * PageSize + Math.ceil(currentTableData.length - PageSize)} of {tableData.length} of Next Metrics
            </p>
            <Pagination
                className="pagination-bar"
                currentPage={currentPage}
                totalCount={tableData.length}
                pageSize={PageSize}
                onPageChange={page => setCurrentPage(page)} />
                    </div>
                </div>     
                </FullScreen>
                </div>
  );
};

export default BudgetUtilization;
