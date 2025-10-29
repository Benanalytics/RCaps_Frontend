import React, { useState, useMemo ,useRef,useEffect} from "react";
import Pagination from "shared/Pagination";
import AdfIncludingLineChart from "./AdfIncludingLineChart";
import { BsSearch } from "react-icons/bs";
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import PerfectScrollbar from "react-perfect-scrollbar";
import { BsArrowUp } from "react-icons/bs";
import { BsArrowDown } from "react-icons/bs";

let PageSize = 7;

 
export default function StrategicInvestmentTable({data}) {

  const [currentPage, setCurrentPage] = useState(1);
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();
  const [searchValue, setSearchValue] = useState('');
  const [sortConfig, setSortConfig] = useState(null);

  
  let tableData=[];
  let totalADBGraphData = [];

  if (data) {
    totalADBGraphData = data?.filter((x)=>x.infrastructureName!==null).map((item) => {
        let Obj = {};
    
    const adbGraphData=item.financialAmount.map(
        (item) => {
            return(item.adbPrivateAmountUAMillion + item.adbPublicAmountUAMillion)});
            Obj = {
               
                adbGraphData:adbGraphData,

            };
        
        return Obj;
    });

   
}
const summedTotalAdbGraphData = totalADBGraphData?.reduce((acc, obj) => {
    // Iterate over the adfGraphData array of each object
    obj?.adbGraphData?.forEach((value, index) => {
      // If the index doesn't exist in acc, initialize it
      if (!acc[index]) {
        acc[index] = 0;
      }
      // Add the value to the corresponding index in acc
      acc[index] += value;
    });
    return acc;
  }, []);

  

  if(data){
    tableData= data?.map((item)=>{
      const getADFIncludingTSF = item.financialAmount.map(
        (item) => item.adfIncludingTSFAmountUAMillion).reduce((a,b)=>a +b,0);
    const getADBPrivate = item.financialAmount.map(
        (item) => item.adbPrivateAmountUAMillion).reduce((a,b)=>a +b,0);
    const getADBPublic = item.financialAmount.map(
        (item) => item.adbPublicAmountUAMillion).reduce((a,b)=>a +b,0);
        const adfGraphData=item.financialAmount.map(
          (item) => {
              return[item.category,item.adfIncludingTSFAmountUAMillion]});
        const adbGraphData=item.financialAmount.map(
          (item) => {
              return[item.category,item.adbPrivateAmountUAMillion + item.adbPublicAmountUAMillion]});
              const adbGraphCategoryData=item.financialAmount.map(
                (item) => {
                    return item.category});  
              const adbTotalData=item.financialAmount.map(
                (item) => {
                    return item.adbPrivateAmountUAMillion + item.adbPublicAmountUAMillion});
              const resultinfraPercentageADBGraphArray = summedTotalAdbGraphData.map((value, index) => ([
                adbGraphCategoryData[index], // Assuming adbGraphCategoryData is the same for all objects
                ( (adbTotalData[index])*100)/ value
               ]));

      return {
        sectorName:item.sectorName,
        bankGroup: new Intl.NumberFormat('en-IN').format(getADFIncludingTSF + getADBPrivate +getADBPublic ),
        ADFIncludingTSF:new Intl.NumberFormat('en-IN').format(getADFIncludingTSF) ,
        ADBPrivate:new Intl.NumberFormat('en-IN').format(getADBPrivate) ,
        ADBPublic:new Intl.NumberFormat('en-IN').format(getADBPublic),
        totalADB: new Intl.NumberFormat('en-IN').format(getADBPrivate +getADBPublic ),
        adfGraphData:adfGraphData,
        adbGraphData:adbGraphData,
                    adbPercentage:resultinfraPercentageADBGraphArray
      };
    });
  }

  


  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };
 
  const calBankGroupTotal =new Intl.NumberFormat('en-IN').format(tableData
    .map((item) => Number(item.bankGroup.replace(/,/g, '')))
    .reduce((a, b) => a + b, 0)) ; 

    const calTotalADBTotal =new Intl.NumberFormat('en-IN').format(tableData
      .map((item) => Number(item.totalADB.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)) ; 

    tableData = tableData.map((item) => {
      const calculatedOfADBPercentage=((Number(item.totalADB.replace(/,/g, '')))*100)/(Number(calTotalADBTotal.replace(/,/g, '')));
      const formattedOfADBPercentage = calculatedOfADBPercentage % 1 === 0 ? calculatedOfADBPercentage.toFixed(0) : calculatedOfADBPercentage.toFixed(1);
      const calofADB=new Intl.NumberFormat('en-IN').format(formattedOfADBPercentage);

      const calculatedOfBankOfPercentage=((Number(item.bankGroup.replace(/,/g, '')))*100)/(Number(calBankGroupTotal.replace(/,/g, '')));
      const formattedOfBankOfPercentage = calculatedOfBankOfPercentage % 1 === 0 ? calculatedOfBankOfPercentage.toFixed(0) : calculatedOfBankOfPercentage.toFixed(1);
      const calofBankOf=new Intl.NumberFormat('en-IN').format(formattedOfBankOfPercentage);

      return { ...item, ofADB: calofADB,ofBankOf:calofBankOf };
    });

    tableData=tableData.filter((item) =>
item.sectorName?.toLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
Number(item.bankGroup?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.ADFIncludingTSF?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase())||
Number(item.ADBPrivate?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.ADBPublic?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.totalADB?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.ofADB?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.ofBankOf?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()));

    const bankGroupTotal =new Intl.NumberFormat('en-IN').format(tableData
      .map((item) => Number(item.bankGroup.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)) ; 
    
    const ADFIncludingTSFTotal =new Intl.NumberFormat('en-IN').format(tableData
      .map((item) => Number(item.ADFIncludingTSF.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)) ; 
  
    const ADBPrivateTotal =new Intl.NumberFormat('en-IN').format(tableData
      .map((item) => Number(item.ADBPrivate.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)) ;  
    
    const ADBPublicTotal =new Intl.NumberFormat('en-IN').format(tableData
      .map((item) => Number(item.ADBPublic.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)) ; 
  
    const totalADBTotal =new Intl.NumberFormat('en-IN').format(tableData
      .map((item) => Number(item.totalADB.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)) ; 

  const ofADBTotal = new Intl.NumberFormat('en-IN',{ minimumFractionDigits: 0,maximumFractionDigits: 0}).format(tableData
    .map((item) => Number(item.ofADB.replace(/,/g, '')))
    .reduce((a, b) => a + b, 0)) ; 
  
  const ofBankOfTotal = new Intl.NumberFormat('en-IN',{ minimumFractionDigits: 0,maximumFractionDigits: 0}).format(tableData
    .map((item) => Number(item.ofBankOf.replace(/,/g, '')))
    .reduce((a, b) => a + b, 0)) ; 

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
    
    tableData = React.useMemo(() => {
      let sortableItems = [...tableData];
      if (sortConfig !== null) {
        sortableItems.sort((a, b) => {
          if(sortConfig.key!=="sectorName"){
            if ( Number(a[sortConfig.key].replace(/,/g, '')) < Number(b[sortConfig.key].replace(/,/g, ''))) {
              return sortConfig.direction === 'ascending' ? -1 : 1;
            }
            if ( Number(a[sortConfig.key].replace(/,/g, '')) > Number(b[sortConfig.key].replace(/,/g, ''))) {
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
    }, [tableData, sortConfig]);
    
    const getClassNamesFor = (name) => {
      if (!sortConfig) {
        return;
      }
      return sortConfig.key === name ? sortConfig.direction : undefined;
    };

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage,tableData]);
 
  const handleSearchChange = (event) => {
    if (event) {
        const searchValue = event.target.value;
        setSearchValue(searchValue);
    }
};

const csvData = [
  [ "Sector Name", "Bank Group", "ADF Including TSF", "ADB Private ", "ADB Public", "Total ADB","ofADB","OfBankOf"],
  ...tableData.map(
    ({ sectorName, bankGroup, ADFIncludingTSF, ADBPrivate, ADBPublic, totalADB, ofADB,ofBankOf }) => [
      sectorName, bankGroup, ADFIncludingTSF, ADBPrivate, ADBPublic, totalADB, ofADB,ofBankOf
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



 
  return (
    <div className="cardBody">
       
    <div class="cardTitle flex items-center flex-wrap items-center justify-between">
        <div class="mb-4">
            <p class="f14 semibold text-uppercase text-normal">STRATEGIC INVESTMENT DISTRIBUTION BY SECTOR</p>
            <p class="f13 semibold text-light text-benGray">Comparitive Analysis Of Sectoral Funding Within AFDB Operations</p>
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
                    value={searchValue}
                    onChange={handleSearchChange}
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
                      onClick={() => requestSort('sectorName')} 
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                       <div className="flex gap-x-1">SECTOR NAME {getClassNamesFor('sectorName')==="ascending"?<BsArrowDown />:getClassNamesFor('sectorName')==="descending"?<BsArrowUp />:''}
                            </div>
                      
                    </th>
                    <th
                      scope="col"
                      onClick={() => requestSort('bankGroup')}
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                     <div className="flex gap-x-1"> BANK GROUP {getClassNamesFor('bankGroup')==="ascending"?<BsArrowDown />:getClassNamesFor('bankGroup')==="descending"?<BsArrowUp />:''}
                            </div>
                    </th>
                    <th
                      scope="col"
                      onClick={() => requestSort('ADFIncludingTSF')}
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                      <div className="flex gap-x-1">  ADF INCLUDING TSF {getClassNamesFor('ADFIncludingTSF')==="ascending"?<BsArrowDown />:getClassNamesFor('ADFIncludingTSF')==="descending"?<BsArrowUp />:''}
                            </div>
                     
                    </th>
                    <th
                      scope="col"
                      onClick={() => requestSort('ADBPrivate')}
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                      <div className="flex gap-x-1">  ADB PRIVATE {getClassNamesFor('ADBPrivate')==="ascending"?<BsArrowDown />:getClassNamesFor('ADBPrivate')==="descending"?<BsArrowUp />:''}
                            </div>
                     
                    </th>
                    <th
                      scope="col"
                      onClick={() => requestSort('ADBPublic')}
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                      <div className="flex gap-x-1">  ADB PUBLIC {getClassNamesFor('ADBPublic')==="ascending"?<BsArrowDown />:getClassNamesFor('ADBPublic')==="descending"?<BsArrowUp />:''}
                            </div>
                     
                    </th>
                    <th
                      scope="col"
                      onClick={() => requestSort('totalADB')}
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                      <div className="flex gap-x-1"> TOTAL ADB {getClassNamesFor('totalADB')==="ascending"?<BsArrowDown />:getClassNamesFor('totalADB')==="descending"?<BsArrowUp />:''}
                            </div>
                      
                    </th>
                    <th
                      scope="col"
                      onClick={() => requestSort('ofADB')}
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                      <div className="flex gap-x-1">  %OF ADB {getClassNamesFor('ofADB')==="ascending"?<BsArrowDown />:getClassNamesFor('ofADB')==="descending"?<BsArrowUp />:''}
                            </div>
                     
                    </th>
                    <th
                      scope="col"
                      onClick={() => requestSort('ofBankOf')}
                      className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                    >
                      <div className="flex gap-x-1">  %OF BANK GROUP {getClassNamesFor('ofBankOf')==="ascending"?<BsArrowDown />:getClassNamesFor('ofBankOf')==="descending"?<BsArrowUp />:''}
                            </div>
                     
                    </th>
                    
                  </tr>
                </thead>
            
                <tbody className="divide-y divide-gray-200 bg-white">
                  {currentTableData.map((data, ind) => (
                    <tr key={`TabkeKey${ind}`}>
                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                        {data?.sectorName}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                        {data?.bankGroup}
                      </td>

                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                         <div class="flex items-center justify-between gap-x-1">
                            {data?.ADFIncludingTSF}<AdfIncludingLineChart data={data.adfGraphData}/>
                         </div>
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                        {data?.ADBPrivate}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                        {data?.ADBPublic}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                         <div class="flex items-center justify-between gap-x-1"> 
                            {data?.totalADB}<AdfIncludingLineChart  data={data.adbGraphData}/>
                          </div>
                      </td>

                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div class="flex items-center justify-between gap-x-1">
                              {data?.ofADB}%<AdfIncludingLineChart  data={data.adbPercentage}/>
                          </div>
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-light f13">
                        {data?.ofBankOf}%
                      </td>
                     
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr>
                    <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                     BANK
                    </td>
                    <td className="whitespace-nowrap py-2 px-2 text-bold text-light f13">
                    {bankGroupTotal}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                 {ADFIncludingTSFTotal}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                 {ADBPrivateTotal}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                    {ADBPublicTotal}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                  {totalADBTotal}
                    </td>
                    <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
            {ofADBTotal}%
                    </td>
                    <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
           {ofBankOfTotal}%
                    </td>
                  </tr>
                </tfoot>
              </table>
           </PerfectScrollbar>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between pagination-Layout pb-0 py-2">
                  <p className="mb-3 md:mb-0 f13">
                    {" "}
                    Showing data{" "}
                    {currentPage * PageSize +
                      Math.ceil(currentTableData.length - PageSize)}{" "}
                    of {tableData.length} of Next Metrics
                  </p>
                  <Pagination
                    className="pagination-bar"
                    currentPage={currentPage}
                    totalCount={tableData.length}
                    pageSize={PageSize}
                    onPageChange={(page) => setCurrentPage(page)}
                  />
                </div>
        </div>
       </FullScreen>
        
      </div>
    
    </div>
   
  );
}