import React, { useState,useEffect,useRef } from "react";
import Pagination from "shared/Pagination";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";
export default function PipelineStatusTable({data,currentPage,setCurrentPage,selectedStatusOption,setSelectedStatusOption,selectedComplexOption,setSelectedComplexOption,setSearchValue,filtersComplexData,filtersStatusData,pageSize,setPageSize}) {

const [value,setValue]=useState('');
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const [sortConfig, setSortConfig] = useState(null);
let totalCount=0;
let dataArray=[];
if(data.iopPipeline){
totalCount=data.totalCount;
dataArray=data.iopPipeline;

}

const downloadDropdownRef = useRef(null);
const handle = useFullScreenHandle();
const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
};

  const handleRecordCount=()=>{
    const Count=((currentPage -1)* pageSize + Math.ceil(dataArray.length))<=totalCount?((currentPage -1)* pageSize + Math.ceil(dataArray.length)):totalCount;

    return Count ;
     };
    

  const getBackgroundColor = (status) => {
    switch (status) {
      case 'Existing Portfolio':
        return "bg-benGreen";
      case 'Pipeline':
        return "bg-benLightBlue";
      case 'IOP':
        return 'bg-ezOrange';
      default:
        return "bg-ezRed";
    }
  };

 useEffect(()=>{
  const delayDebounceFn = setTimeout(() => {
    setSearchValue(value);
  }, 1000)

  return () => clearTimeout(delayDebounceFn)
 },[value]);
    
 const csvData = [
  [ "Board Date", "Country", "Project Name", "UA Million", "EsiaCat", "EsiaCatActual","CspStatus"],
  ...dataArray.map(
    ({ boardDate, country, projectName, uaMillion, esia_Cat, esia_Cat_Actual, status }) => [
      boardDate, country, projectName, uaMillion, esia_Cat, esia_Cat_Actual, status
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

  
  return () => {
    document.body.removeEventListener("click", handleClickOutside);
  };
}, []);

const requestSort = (key) => {
  let direction = 'ascending';
  if (
    sortConfig &&
    sortConfig.key === key &&
    sortConfig.direction === 'ascending'
  ) {
    direction = 'descending';
  }
  setSortConfig({ key, direction });
};

dataArray = React.useMemo(() => {
  let sortableItems = [...dataArray];
  if (sortConfig !== null) {
    sortableItems.sort((a, b) => {
      if(sortConfig.key==="boardDate"){
        if (new Date(a[sortConfig.key]).getTime() < new Date(b[sortConfig.key]).getTime()) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (new Date(a[sortConfig.key]).getTime() > new Date(b[sortConfig.key]).getTime()) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
      }
      else{
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'ascending' ? 1 : -1;
        }
      }
     
      return 0;
    });
  }
  return sortableItems;
}, [dataArray, sortConfig]);

const getClassNamesFor = (name) => {
  if (!sortConfig) {
    return;
  }
  return sortConfig.key === name ? sortConfig.direction : undefined;
};
  return (
    <div className="card bg-white rounded-md grid-margin card-shadow ">
      <div className="cardBody">
        <div class="cardTitle flex justify-between items-center">
        <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">Task Manager</p>
            
            </div>   

            <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
            <label className="px-2 py-2 text-left semibold text-normal text-benGray f14 " >
                    Show entries
                  </label><select
                         value={pageSize}
                         onChange={(event)=>setPageSize(event.target.value)}
                    name="budgetMetric"
                    id="budgetMetric"
                    className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 lg:w-54"
                  >
                    {/* <option value=''>Show entries</option> */}
                    <option value={10}>{10}</option>
                    <option value={25}>{25}</option>
                    <option value={50}>{50}</option>
                    <option value={100}>{100}</option>
                    <option value={150}>{150}</option>
                  </select>
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
                    value={value}
                    onChange={(event)=>
                      setValue(event.target.value)
                   }
                  />
                </form>
              
                  
                        <select
                         value={selectedStatusOption}
                         onChange={(event)=>setSelectedStatusOption(event.target.value)}
                    name="budgetMetric"
                    id="budgetMetric"
                    className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 lg:w-54"
                  >
                    <option value=''>Status</option>
                    {filtersStatusData && filtersStatusData.map((item)=>(
                       <option value={item}>{item}</option>
                    ))}
                  </select>
                  <select
                   value={selectedComplexOption}
                   onChange={(event)=>setSelectedComplexOption(event.target.value)}
                  className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14  lg:w-54">
                        <option value=''>Complex</option>
                        {filtersComplexData && filtersComplexData.map((item)=>(
                          <option value={item}>{item}</option>
                        ))}
                    </select>

                
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
        <div className="">
        <FullScreen handle={handle}>
          <div className="mt-4 flow-root">
            <div className="overflow-x-auto theme-table">
                <div className="align-middle">
                  <PerfectScrollbar>
                    <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                          <tr>
                            <th
                              scope="col"
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                            >
                              #
                            </th>
                            <th
                              scope="col"
                              onClick={() => requestSort('boardDate')} 
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase  whitespace-nowrap"
                            >
                             <div className="flex gap-x-1">Board Date {getClassNamesFor('boardDate')==="ascending"?<BsArrowDown />:getClassNamesFor('boardDate')==="descending"?<BsArrowUp />:''}
                            </div>
                            </th>
                            <th
                              scope="col"
                              onClick={() => requestSort('country')}
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                            >
                             <div className="flex gap-x-1">Country {getClassNamesFor('country')==="ascending"?<BsArrowDown />:getClassNamesFor('country')==="descending"?<BsArrowUp />:''}
                           </div>
                            </th>
                            <th
                              scope="col"
                              onClick={() => requestSort('projectName')}
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                            >
                               <div className="flex gap-x-1">Project Title {getClassNamesFor('projectName')==="ascending"?<BsArrowDown />:getClassNamesFor('projectName')==="descending"?<BsArrowUp />:''}
                           </div>
                              
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                            >
                              Total
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                            >
                              E&S Cat.
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase whitespace-nowrap"
                            >
                              E&S Readinss
                            </th>
                            <th
                              scope="col"
                              className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                            >
                              Status
                            </th>
                            
                          </tr>
                        </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                      
                        {dataArray.map((data, ind) => (
                         <tr
                         className={`${data?.isBold && "bold"} ${
                           data?.bgColor
                         } ${data?.bgOpacity}`}
                         key={ind}
                       >
                         <td className="whitespace-nowrap px-2 py-2 text-light f13">
                           {(currentPage-1)*pageSize +ind + 1}
                         </td>
                         <td className="whitespace-nowrap px-2 py-2 text-light f13">
                           {new Date(data?.boardDate).toLocaleDateString('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).replace(/ /g, '-')}
                         </td>
                         <td className="whitespace-nowrap px-2 py-2 text-light f13">
                           {data?.country}
                         </td>
                         <td className="whitespace-nowrap px-2 py-2 text-light f13">
                           {data?.projectName}
                         </td>
                         <td className="whitespace-nowrap px-2 py-2 text-light f13">
                           {data?.uaMillion}
                         </td>
                         <td className="whitespace-nowrap px-2 py-2 text-light f13">
                           {data?.esia_Cat}
                         </td>
                         <td className="whitespace-nowrap px-2 py-2 text-light f13">
                           {data?.esia_Cat_Actual}
                         </td>
                         <td className="whitespace-nowrap px-2 py-2 text-light f13 flex items-center">
                           <span
                             className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.status)} mr-1`}
                           />
                           {/* {data?.status} */}
                         </td>
                         
                       </tr>
                        ))}

                        
                      </tbody>
                    </table>
                  </PerfectScrollbar>
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2">
  <p className="mb-3 md:mb-0 f13">
    {" "}
    Showing data{" "}
    {handleRecordCount()}{" "}
    of {totalCount} of Next Metrics
  </p>
  <Pagination
    className="pagination-bar"
    currentPage={currentPage}
    totalCount={totalCount}  
    pageSize={pageSize}
    onPageChange={(page) => setCurrentPage(page)}
  />
</div>
          </div>
          </FullScreen>
        </div>
      </div>
     

    </div>
  );
}
