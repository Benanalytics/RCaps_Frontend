import React, { useState,useEffect,useRef } from "react";
import Pagination from "shared/Pagination";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
export default function PortfolioTable({data,currentPage,setCurrentPage,selectedStatusOption,setSelectedStatusOption,selectedComplexOption,setSelectedComplexOption,setSearchValue,filtersComplexData,filtersStatusData}) {

const [value,setValue]=useState('');
const [isDownloadVisible, setDownloadVisible] = useState(false);
const downloadDropdownRef = useRef(null);
const handle = useFullScreenHandle();
const pageSize=20;
const individualPageSize=2;

  const powerFromDbCount=data?.sectorAnalysisCounts?.PowerCount?data.sectorAnalysisCounts.PowerCount:0;
  const agricultureFromDbCount=data?.sectorAnalysisCounts?.AgricultureCount?data.sectorAnalysisCounts.AgricultureCount:0;
  const environmentFromDbCount=data?.sectorAnalysisCounts?.EnvironmentCount?data.sectorAnalysisCounts.EnvironmentCount:0;
  const financeFromDbCount=data?.sectorAnalysisCounts?.FinanceCount?data.sectorAnalysisCounts.FinanceCount:0;
  const ICTFromDbCount=data?.sectorAnalysisCounts?.ICTCount?data.sectorAnalysisCounts.ICTCount:0;
  const industryFromDbCount=data?.sectorAnalysisCounts?.IndustryCount?data.sectorAnalysisCounts.IndustryCount:0;
  const multiSectorFromDbCount=data?.sectorAnalysisCounts?.MultiSectorCount?data.sectorAnalysisCounts.MultiSectorCount:0;
  const socialDevelopmentFromDbCount=data?.sectorAnalysisCounts?.SocialCount?data.sectorAnalysisCounts.SocialCount:0;
  const transportFromDbCount=data?.sectorAnalysisCounts?.TransportCount?data.sectorAnalysisCounts.TransportCount:0;
  const urbanDevelopmentFromDbCount=data?.sectorAnalysisCounts?.UrbanDevelopmCount?data.sectorAnalysisCounts.UrbanDevelopmCount:0;
  //const waterSupplyFromDbCount=data?.sectorAnalysisCounts?.WASHSectorCount?data.sectorAnalysisCounts.WASHSectorCount:0;
 // const communicationsFromDbCount=data?.sectorAnalysisCounts?.CommunicationsCount?data.sectorAnalysisCounts.CommunicationsCount:0;
  //const emptyFromDbCount=data?.sectorAnalysisCounts?.Count?data.sectorAnalysisCounts.Count:0;



  let powerDataArray=[];
  let agricultureArray=[];
  let environmentArray=[];
  let financeArray=[];
  let ICTArray=[];
  let industryArray=[];
  let multiSectorArray=[];
  let socialDevelopmentArray=[];
  let transportArray=[];
  let urbanDevelopmentArray=[];
 // let waterSupplyArray=[];
 // let CommunicationsArray=[];
 // let  EmptyArray=[];

  let totalCount=0;
  if(data){
    totalCount=data.totalCount;
   
    powerDataArray=data.portfolios.filter((item)=>item.sectorUsed==="Power").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    agricultureArray=data.portfolios.filter((item)=>item.sectorUsed==="Agriculture").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() < new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    environmentArray=data.portfolios.filter((item)=>item.sectorUsed==="Environment").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    financeArray=data.portfolios.filter((item)=>item.sectorUsed==="Finance").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    ICTArray=data.portfolios.filter((item)=>item.sectorUsed==="ICT").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    industryArray=data.portfolios.filter((item)=>item.sectorUsed==="Industry").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    multiSectorArray=data.portfolios.filter((item)=>item.sectorUsed==="Multi-Sector").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    socialDevelopmentArray=data.portfolios.filter((item)=>item.sectorUsed==="Social").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    transportArray=data.portfolios.filter((item)=>item.sectorUsed==="Transport").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});

    urbanDevelopmentArray=data.portfolios.filter((item)=>item.sectorUsed==="Urban Developm.").map((item)=>{
      var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item.approvalDate).getDate())) 
      {
          age_now--;
      }
      return{...item,age:age_now}});
    // waterSupplyArray=data.portfolios.filter((item)=>item.sectorUsed==="Water Sup/Sanit").map((item)=>{
    //   var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
    //   var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
    //   if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item?.approvalDate).getDate())) 
    //   {
    //       age_now--;
    //   }
    //   return{...item,age:age_now}});


      // CommunicationsArray=data.portfolios.filter((item)=>item.sectorUsed==="Communications").map((item)=>{
      //   var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
      //   var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
      //   if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item?.approvalDate).getDate())) 
      //   {
      //       age_now--;
      //   }
      //   return{...item,age:age_now}});

        // EmptyArray=data.portfolios.filter((item)=>item.sectorName==="--").map((item)=>{
        //   var age_now = new Date().getFullYear() - new Date(item.approvalDate).getFullYear();
        //   var m = new Date().getMonth() - new Date(item.approvalDate).getMonth();
        //   if (m < 0 || (m === 0 && new Date().getDate() <  new Date(item?.approvalDate).getDate())) 
        //   {
        //       age_now--;
        //   }
        //   return{...item,age:age_now}});
  }


  

  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };

  const approvedTotal = (tableData)=>{
    if(tableData.length>0){
const total=tableData?.map((item) => Number(item?.amountInUAMillion.replace(/,/g, '')))
.reduce((a, b) => a + b, 0);

return new Intl.NumberFormat('en-IN').format(total  % 1 === 0 ? total?.toFixed(0) : total?.toFixed(1));
    }
    return 0;
  };
    

  const disbursedTotal =(tableData)=>{
    if(tableData.length>0){
   const total= tableData
    ?.map((item) =>Number(item?.disbursedBalanceInUAMillion.replace(/,/g, '')) ) 
    .reduce((a, b) => a + b, 0);

    return new Intl.NumberFormat('en-IN').format(total  % 1 === 0 ? total?.toFixed(0) : total?.toFixed(1));
    }
    return 0;
  }; 

  const disbursedRateAvg=(tableData)=>{
    if(tableData.length>0){
      const avg =tableData?.map((item) =>Number(item?.disbursedBalanceInUAMillion.replace(/,/g, '')) ).reduce((a, b) => a + b, 0) /tableData.length;
      return new Intl.NumberFormat('en-IN').format(avg  % 1 === 0 ? avg?.toFixed(0) : avg?.toFixed(1));
    }
return 0;
  }; 
  


//   const ageTotal = (tableData) => {
//     if (tableData.length > 0) {
//         const total = tableData?.map((item) => item?.age).reduce((a, b) => a + b, 0);
//         return parseFloat(total).toFixed(1); 
//     }
//     return 0;
// };


const ageTotal =(tableData)=>{
  if(tableData.length>0){
 const total= tableData
  ?.map((item) =>Number(item?.ageOfProjectCalendarYear.replace(/,/g, '')) ) 
  .reduce((a, b) => a + b, 0);

  return new Intl.NumberFormat('en-IN').format(total  % 1 === 0 ? total?.toFixed(0) : total?.toFixed(1));
  }
  return 0;
}; 

  const getBackgroundColor = (status) => {
    switch (status) {
      case 'OnGo':
        return "bg-benGreen";
      case 'COMP':
        return "bg-benRed";
      case 'APVD':
        return 'bg-ezOrange';
        case 'CLSD':
          return 'bg-benGray';
          case 'ABAN':
          return 'bg-benLightBlue';
          case 'TERM':
          return 'bg-benPink';
      default:
        return "bg-benLightBlue";
    }
  };

 useEffect(()=>{
  const delayDebounceFn = setTimeout(() => {
    setSearchValue(value);
  }, 1000)

  return () => clearTimeout(delayDebounceFn)
 },[value]);


 const alltableData =[...powerDataArray,...agricultureArray,...environmentArray,...financeArray,...ICTArray,...industryArray,...multiSectorArray,
  ...socialDevelopmentArray,...transportArray,...urbanDevelopmentArray]
    

  const csvData = [
    [ "Sap Code", "ProjectTitle", "Sap No", "OperationsType", "Total Alert", "Approved","Approval date","Complation Date"],
    ...alltableData.map(
      ({ sapCode, projectTitle, sapNo, operationsType, totalAlert, approvedAmount_USDEquivalent, amountDisbursed,ofBankOf,disbursedRate,approvalDateYear,completionDate,age ,financingSource,taskManager }) => [
        sapCode, projectTitle, sapNo, operationsType, totalAlert, approvedAmount_USDEquivalent, amountDisbursed,ofBankOf,disbursedRate,approvalDateYear,completionDate,age ,financingSource,taskManager
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
 
 const handleRecordCount=()=>{
const powerCount=((currentPage -1)* individualPageSize + Math.ceil(powerDataArray.length))<=powerFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(powerDataArray.length)):powerFromDbCount;
const agricultureCount=((currentPage -1)* individualPageSize + Math.ceil(agricultureArray.length))<=agricultureFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(agricultureArray.length)):agricultureFromDbCount;
const environmentCount=((currentPage -1)* individualPageSize + Math.ceil(environmentArray.length))<=environmentFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(environmentArray.length)):environmentFromDbCount;
const financeCount=((currentPage -1)* individualPageSize + Math.ceil(financeArray.length))<=financeFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(financeArray.length)):financeFromDbCount;
const ICTCount=((currentPage -1)* individualPageSize + Math.ceil(ICTArray.length))<=ICTFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(ICTArray.length)):ICTFromDbCount;
const industryCount=((currentPage -1)* individualPageSize + Math.ceil(industryArray.length))<=industryFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(industryArray.length)):industryFromDbCount;
const multiSectorCount=((currentPage -1)* individualPageSize + Math.ceil(multiSectorArray.length))<=multiSectorFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(multiSectorArray.length)):multiSectorFromDbCount;
const socialDevelopmentCount=((currentPage -1)* individualPageSize + Math.ceil(socialDevelopmentArray.length))<=socialDevelopmentFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(socialDevelopmentArray.length)):socialDevelopmentFromDbCount;
const transportCount=((currentPage -1)* individualPageSize + Math.ceil(transportArray.length))<=transportFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(transportArray.length)):transportFromDbCount;
const urbanDevelopmentCount=((currentPage -1)* individualPageSize + Math.ceil(urbanDevelopmentArray.length))<=urbanDevelopmentFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(urbanDevelopmentArray.length)):urbanDevelopmentFromDbCount;
//const waterSupplyCount=((currentPage -1)* individualPageSize + Math.ceil(waterSupplyArray.length))<=waterSupplyFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(waterSupplyArray.length)):waterSupplyFromDbCount;
//const CommunicationsCount=((currentPage -1)* individualPageSize + Math.ceil(CommunicationsArray.length))<=communicationsFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(CommunicationsArray.length)):communicationsFromDbCount;
//const EmptyCount=((currentPage -1)* individualPageSize + Math.ceil(EmptyArray.length))<=emptyFromDbCount?((currentPage -1)* individualPageSize + Math.ceil(EmptyArray.length)):emptyFromDbCount;

return (powerCount + agricultureCount +environmentCount +financeCount+ICTCount+industryCount+multiSectorCount+socialDevelopmentCount+transportCount+urbanDevelopmentCount);
 };

  
  return (
    <div className="card bg-white rounded-md grid-margin card-shadow ">
      <div className="cardBody">
        <div class="cardTitle flex justify-between items-center">
        <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">PROJECT FINANCING AND PERFORMANCE DASHBOARD</p>
                  <p class="f13 semibold text-light text-benGray">Comprehensive Analytics of Disbursement and Approval Status Across Portfolios</p>
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
        <div className=''>
        <FullScreen handle={handle}  >
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
                            SAP Code
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Project Title
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Loan Number
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Type*
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Flagged Status
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Approved
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Disbursed
                          </th>

                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Disbursed Rate
                          </th>

                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Approval Date
                          </th>

                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Completion Date
                          </th>
                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Age{" "}
                          </th>

                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Finacing Window
                          </th>

                          <th
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            Task Manager
                          </th>
                        </tr>
                      
                      </thead>
                      <tbody className="divide-y divide-gray-200 bg-white">
                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            AGRICULTURE AND AGROBU
                          </td>
                        </tr>
                        {agricultureArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.sapCode}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.longName}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.loanNumber}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.operationType}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.amountInUAMillion}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.disbursedBalanceInUAMillion}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {/* {data?.amountDisbursedInUAMillion}% */}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.approvalDate}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.plannedProjectCompletionDate}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.ageOfProjectCalendarYear}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.financialWindow}
                            </td>
                            <td className="whitespace-nowrap py-2 px-2 text-light f13">
                              {data?.tskManagerName}
                            </td>
                          </tr>
                        ))}

<tr>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          >
                            TOTAL
                          </td>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          >
                            {approvedTotal(agricultureArray)>0?approvedTotal(agricultureArray):""}
                          </td>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          >
                            {disbursedTotal(agricultureArray)>0?disbursedTotal(agricultureArray):""}
                          </td>

                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          >
                            {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                          </td>

                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>

                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>
                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          >
                            {ageTotal(agricultureArray)>0?ageTotal(agricultureArray):""}
                          </td>

                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>

                          <td
                            scope="col"
                            className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                          ></td>
                        </tr>
                        <tr>
                        <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            ENVIORNMENT
                          </td>
                        </tr>

                        {environmentArray.map((data, ind) => (
                           <tr key={`TabkeKey${ind}`}>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.sapCode}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.longName}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.loanNumber}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.operationType}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.amountInUAMillion}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.disbursedBalanceInUAMillion}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {/* {data?.amountDisbursedInUAMillion}% */}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.approvalDate}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.plannedProjectCompletionDate}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.ageOfProjectCalendarYear}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.financialWindow}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.tskManagerName}
                           </td>
                         </tr>
                       ))}

<tr>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           TOTAL
                         </td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {approvedTotal(environmentArray)>0?approvedTotal(environmentArray):""}
                         </td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {disbursedTotal(environmentArray)>0?disbursedTotal(environmentArray):""}
                         </td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                         </td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {ageTotal(environmentArray)>0?ageTotal(environmentArray):""}
                         </td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                       </tr>

                        <tr>
                        <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            FINANCIAL SECTOR DEVELOPMENT
                          </td>
                        </tr>

                        {financeArray.map((data, ind) => (
                           <tr key={`TabkeKey${ind}`}>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.sapCode}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.longName}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.loanNumber}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.operationType}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.amountInUAMillion}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.disbursedBalanceInUAMillion}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {/* {data?.amountDisbursedInUAMillion}% */}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.approvalDate}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.plannedProjectCompletionDate}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.ageOfProjectCalendarYear}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.financialWindow}
                           </td>
                           <td className="whitespace-nowrap py-2 px-2 text-light f13">
                             {data?.tskManagerName}
                           </td>
                         </tr>
                       ))}

<tr>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           TOTAL
                         </td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {approvedTotal(financeArray)>0?approvedTotal(financeArray):""}
                         </td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {disbursedTotal(financeArray)>0?disbursedTotal(financeArray):""}
                         </td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                         </td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         >
                           {ageTotal(financeArray)>0?ageTotal(financeArray):""}
                         </td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>

                         <td
                           scope="col"
                           className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                         ></td>
                       </tr>

                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            GOVERNANCE AND MULTI SECTOR
                          </td>
                        </tr>
                        {multiSectorArray.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.sapCode}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.longName}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.loanNumber}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.operationType}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.amountInUAMillion}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.disbursedBalanceInUAMillion}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {/* {data?.amountDisbursedInUAMillion}% */}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.approvalDate}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.plannedProjectCompletionDate}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.ageOfProjectCalendarYear}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.financialWindow}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.tskManagerName}
                        </td>
                      </tr>
                    ))}

<tr>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      >
                        TOTAL
                      </td>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      >
                        {approvedTotal(multiSectorArray)>0?approvedTotal(multiSectorArray):""}
                      </td>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      >
                        {disbursedTotal(multiSectorArray)>0?disbursedTotal(multiSectorArray):""}
                      </td>

                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      >
                        {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                      </td>

                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>

                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>
                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      >
                        {ageTotal(multiSectorArray)>0?ageTotal(multiSectorArray):""}
                      </td>

                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>

                      <td
                        scope="col"
                        className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                      ></td>
                    </tr>

                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            INDUSTRY
                          </td>
                        </tr>

                        {industryArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.sapCode}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.longName}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.loanNumber}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.operationType}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.disbursedBalanceInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {/* {data?.amountDisbursedInUAMillion}% */}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.approvalDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.plannedProjectCompletionDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ageOfProjectCalendarYear}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.financialWindow}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.tskManagerName}
                          </td>
                        </tr>
                      ))}

<tr>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          TOTAL
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {approvedTotal(industryArray)>0?approvedTotal(industryArray):""}
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedTotal(industryArray)>0?disbursedTotal(industryArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {ageTotal(industryArray)>0?ageTotal(industryArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                      </tr>

                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            POWER AND ENERGY
                          </td>
                        </tr>
                        {powerDataArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.sapCode}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.longName}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.loanNumber}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.operationType}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.disbursedBalanceInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {/* {data?.amountDisbursedInUAMillion}% */}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.approvalDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.plannedProjectCompletionDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ageOfProjectCalendarYear}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.financialWindow}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.tskManagerName}
                          </td>
                        </tr>
                      ))}

<tr>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          TOTAL
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {approvedTotal(powerDataArray)>0?approvedTotal(powerDataArray):""}
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedTotal(powerDataArray)>0?disbursedTotal(powerDataArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {ageTotal(powerDataArray)>0?ageTotal(powerDataArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                      </tr>

                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            SOCIAL AND HUMAN CAPITAL DEVELOPMENT
                          </td>
                        </tr>
                        {socialDevelopmentArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.sapCode}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.longName}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.loanNumber}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.operationType}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.disbursedBalanceInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {/* {data?.amountDisbursedInUAMillion}% */}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.approvalDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.plannedProjectCompletionDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ageOfProjectCalendarYear}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.financialWindow}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.tskManagerName}
                          </td>
                        </tr>
                      ))}

<tr>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          TOTAL
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {approvedTotal(socialDevelopmentArray)>0?approvedTotal(socialDevelopmentArray):""}
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedTotal(socialDevelopmentArray)>0?disbursedTotal(socialDevelopmentArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {ageTotal(socialDevelopmentArray)>0?ageTotal(socialDevelopmentArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                      </tr>

                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            TRANSPORT AND URBAN DEVELOPMENT
                          </td>
                        </tr>
                        {transportArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.sapCode}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.longName}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.loanNumber}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.operationType}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.disbursedBalanceInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {/* {data?.amountDisbursedInUAMillion}% */}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.approvalDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.plannedProjectCompletionDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ageOfProjectCalendarYear}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.financialWindow}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.tskManagerName}
                          </td>
                        </tr>
                      ))}

<tr>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          TOTAL
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {approvedTotal(transportArray)>0?approvedTotal(transportArray):""}
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedTotal(transportArray)>0?disbursedTotal(transportArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {ageTotal(transportArray)>0?ageTotal(transportArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                      </tr>

                      

                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            URBAN DEVELOPMENT
                          </td>
                        </tr>
                        {urbanDevelopmentArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.sapCode}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.longName}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.loanNumber}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.operationType}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.disbursedBalanceInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {/* {data?.amountDisbursedInUAMillion}% */}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.approvalDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.plannedProjectCompletionDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ageOfProjectCalendarYear}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.financialWindow}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.tskManagerName}
                          </td>
                        </tr>
                      ))}

<tr>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          TOTAL
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {approvedTotal(urbanDevelopmentArray)>0?approvedTotal(urbanDevelopmentArray):""}
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedTotal(urbanDevelopmentArray)>0?disbursedTotal(urbanDevelopmentArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {ageTotal(urbanDevelopmentArray)>0?ageTotal(urbanDevelopmentArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                      </tr>

                        <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            ICT
                          </td>
                        </tr>
                        {ICTArray.map((data, ind) => (
                         <tr key={`TabkeKey${ind}`}>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.sapCode}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.longName}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.loanNumber}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.operationType}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.amountInUAMillion}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.disbursedBalanceInUAMillion}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {/* {data?.amountDisbursedInUAMillion}% */}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.approvalDate}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.plannedProjectCompletionDate}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.ageOfProjectCalendarYear}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.financialWindow}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.tskManagerName}
                         </td>
                       </tr>
                     ))}

<tr>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         TOTAL
                       </td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {approvedTotal(ICTArray)>0?approvedTotal(ICTArray):""}
                       </td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {disbursedTotal(ICTArray)>0?disbursedTotal(ICTArray):""}
                       </td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {/* {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""} */}
                       </td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {ageTotal(ICTArray)>0?ageTotal(ICTArray):""}
                       </td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                     </tr>



                        {/* <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                            WATER SUPPLY AND SANITATION
                          </td>
                        </tr>
                        {waterSupplyArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.sapCode}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.longName}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.loanNumber}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.operationType}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.disbursedBalanceInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountDisbursedInUAMillion}%
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.approvalDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.plannedProjectCompletionDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ageOfProjectCalendarYear}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.financialWindow}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.tskManagerName}
                          </td>
                        </tr>
                      ))}

<tr>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          TOTAL
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {approvedTotal(waterSupplyArray)>0?approvedTotal(waterSupplyArray):""}
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedTotal(waterSupplyArray)>0?disbursedTotal(waterSupplyArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {ageTotal(waterSupplyArray)>0?ageTotal(waterSupplyArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                      </tr> */}


                        {/* <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                          Communications
                          </td>
                        </tr>
                        {CommunicationsArray.map((data, ind) => (
                          <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.sapCode}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.longName}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.loanNumber}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.operationType}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.disbursedBalanceInUAMillion}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.amountDisbursedInUAMillion}%
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.approvalDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.plannedProjectCompletionDate}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ageOfProjectCalendarYear}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.financialWindow}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.tskManagerName}
                          </td>
                        </tr>
                      ))}

<tr>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          TOTAL
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {approvedTotal(CommunicationsArray)>0?approvedTotal(CommunicationsArray):""}
                        </td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedTotal(CommunicationsArray)>0?disbursedTotal(CommunicationsArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        >
                          {ageTotal(CommunicationsArray)>0?ageTotal(CommunicationsArray):""}
                        </td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>

                        <td
                          scope="col"
                          className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                        ></td>
                      </tr> */}


                        {/* <tr>
                          <td colSpan={13}
                            scope="col"
                            className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                          >
                       --
                          </td>
                        </tr>
                        {EmptyArray.map((data, ind) => (
                         <tr key={`TabkeKey${ind}`}>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.sapCode}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.longName}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.loanNumber}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.operationType}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           <span className={`w-3 h-3 block rounded-circle ${getBackgroundColor(data?.statusOfProject)} mr-1`}/>
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.amountInUAMillion}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.disbursedBalanceInUAMillion}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.amountDisbursedInUAMillion}%
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.approvalDate}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.plannedProjectCompletionDate}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.ageOfProjectCalendarYear}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.financialWindow}
                         </td>
                         <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.tskManagerName}
                         </td>
                       </tr>
                     ))}

<tr>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         TOTAL
                       </td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {approvedTotal(EmptyArray)>0?approvedTotal(EmptyArray):""}
                       </td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {disbursedTotal(EmptyArray)>0?disbursedTotal(EmptyArray):""}
                       </td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {disbursedRateAvg(agricultureArray)>0?`${disbursedRateAvg(agricultureArray)}%`:""}
                       </td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       >
                         {ageTotal(EmptyArray)>0?ageTotal(EmptyArray):""}
                       </td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>

                       <td
                         scope="col"
                         className="px-2 py-2 text-left bold text-normal text-black f12 text-uppercase border-width1 border-b border-benBlue"
                       ></td>
                     </tr> */}

                        
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
