import React, { useState, useMemo, useRef, useEffect } from 'react';
import { BiTrendingDown } from 'react-icons/bi';
import Pagination from 'shared/Pagination';
import YOYGraph from 'components/dashbaord/lending/YOYGraph'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";
let PageSize = 5;
const tableData  = [
  {
    title: '2023 Operations with PCN Approved',
    unit: 'Number',
    baseline: '79.2',
    target: '70.4',
    q1: '100.5',
    q2: '100.3',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
  {
    title: '2023 Operations with PCN Approved',
    unit: 'UA  M',
    target: '70.4',
    q1: '100.5',
    q2: '100.3',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
  {
    title: '2023 Operations with PCN Approved',
    unit: 'UA  M',
    baseline: '79.2',
    target: '70.4',
    q1: '100.5',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
  {
    title: '2023 Operations with PCN Approved',
    unit: 'UA  M',
    baseline: '79.2',
    target: '70.4',
    q1: '100.5',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
  {
    title: '2023 Operations with PCN Approved',
    unit: 'UA  M',
    baseline: '79.2',
    target: '70.4',
    q1: '100.5',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
  {
    title: '2023 Operations with PCN Approved',
    unit: 'UA  M',
    baseline: '79.2',
    target: '70.4',
    q1: '100.5',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
  {
    title: '2023 Operations with PCN Approved',
    unit: 'UA  M',
    baseline: '79.2',
    target: '70.4',
    q1: '100.5',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
  {
    title: '2023 Operations with PCN Approved',
    unit: 'UA  M',
    baseline: '79.2',
    target: '70.4',
    q1: '100.5',
    q3: '132.3',
    q4: '098.2',
    trend: 'Chart',
    ytd: '65%',
    value: '12',
    percentage: '12%',
  },
];

const csvData = [
  [" LENDING AND COMMITMENTS","Unit", "Baseline", "Target", "Q1", "Q3", "Q4", "Trend","ytd","Value","%"],
  ...tableData.map(
    ({title, unit, baseline, target, q1, q3, q4,trend ,ytd,value,percentage}) => [
      title,
      unit,
      baseline,
      target,
      q1,
      q3,
      q4,
      trend,
      ytd,
      value,
      percentage
    ]
  ),
];

export default function KPITable() {

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
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal"> KPI Performance Grid</p></div>
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
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        ></th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        ></th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        ></th>
                        <th
                          scope='col'
                          className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        ></th>
                        <th
                          scope='col'
                          colSpan={5}
                          className='border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Quarterly Delivery Trend
                        </th>
                        <th
                          scope='col'
                          className='border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        ></th>
                        <th
                          scope='col'
                          colSpan={2}
                          className='border-b border-benBlue px-2 py-2 semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Actual Delivery
                        </th>
                      </tr>
                      <tr>
                      <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          <div className='bg-benThinGray px-4 py-2 rounded-md w-max text-normal text-benGray f12 text-uppercase '>
                            <select
                              name='name'
                              id='name'
                              className='bg-transparent text-uppercase'
                            >
                              <option value='all'>All</option>
                              <option value='all'>Option 1</option>
                              <option value='all'>Option 2</option>
                              <option value='all'>Option 3</option>
                            </select>
                            <span className='mx-2'>|</span> Lending and Commitments
                          </div>
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Unit
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Baseline
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Target
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Q1
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Q2
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Q3
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Q4
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase YoY-width'
                        >
                          Trend
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          YTD
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          Value
                        </th>
                        <th
                          scope='col'
                          className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                        >
                          %
                        </th>
                      </tr>
                    </thead>
                    <tbody className='divide-y divide-gray-200 bg-white'>
                    {currentTableData.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                         <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.title}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.unit}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.baseline}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.target}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.q1}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.q2}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.q3}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.q4}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13  YoY-width'>
                            <div style={{width:'80px'}}>
                           <YOYGraph target={''} />
                            </div>
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            <span className='badge bg-danger flex text-red-700 bg-red-50 px-1 py-1 min-content rounded-md items-center'>
                              <BiTrendingDown className='w-3 2xl:w-4 h-3 2xl:h-4 mr-1' />
                              {data?.ytd}
                            </span>
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.value}
                          </td>
                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                            {data?.percentage}
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
                <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={tableData.length}
        pageSize={PageSize}
        onPageChange={page => setCurrentPage(page)} />
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
