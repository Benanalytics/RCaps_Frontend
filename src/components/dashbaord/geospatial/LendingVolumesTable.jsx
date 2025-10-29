import React, { useState, useRef, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";
import PerfectScrollbar from "react-perfect-scrollbar";

  
export default function LendingVolumesTable({data}) {
  
    const [isDownloadVisible, setDownloadVisible] = useState(false);
    const downloadDropdownRef = useRef(null);
    const handle = useFullScreenHandle();
    const [searchValue, setSearchValue] = useState('');

    let tableData=[];

  if(data){
    tableData = data?.map((item)=>item.lendingVolumneData);
    tableData = tableData.filter(item => item !== null);
    tableData= tableData.map((item)=>{
      return {
        category: item.financialSource==="ADB Private"?"ADB Non-Sovereign":item.financialSource==="ADF Including TSF"?"ADF Including TSF":"ADB Sovereign",
        adbCountries:new Intl.NumberFormat('en-IN').format( item.adbCountriesData),
        blendCountries: new Intl.NumberFormat('en-IN').format(item.blendCData),
        adfCountries: new Intl.NumberFormat('en-IN').format(item.adfCountriesData),
        multinationalOperations:new Intl.NumberFormat('en-IN').format( item.multiNCData),
        total2015_2023:new Intl.NumberFormat('en-IN').format(item.adbCountriesData +item.blendCData+item.adfCountriesData+item.multiNCData),
        annualAverage2015_2023: new Intl.NumberFormat('en-IN',{ minimumFractionDigits: 1,maximumFractionDigits: 1}).format((item.adbCountriesData +item.blendCData+item.adfCountriesData+item.multiNCData)/(item.dateDifference!==0?item.dateDifference:1)),
      };
    });
  }

  const csvData = [
    ["", "ADB COUNTRIES", "BLEND COUNTRIES", "ADF COUNTRIES WITH ACCESS TO ADB FINANCING", "MULTINATIONAL OPERATIONS", "TOTAL 2015-2023", "ANNUAL AVERAGE 2015-2023","% SHARE"],
    ...tableData.map(
      ({ category, adbCountries, blendCountries, adfCountries, multinationalOperations, total2015_2023, annualAverage2015_2023,percentageShare }) => [
        category,
        adbCountries,
        blendCountries,
        adfCountries,
        multinationalOperations,
        total2015_2023,
        annualAverage2015_2023,
        percentageShare,
      ]
    ),
  ];
   
    
     
      const toggleDownload = () => {
        setDownloadVisible(!isDownloadVisible);
      };

      const calTotal2015_2023TOTAL =new Intl.NumberFormat('en-IN').format(tableData
        .map((item) => Number(item.total2015_2023.replace(/,/g, '')))
        .reduce((a, b) => a + b, 0)) ;  
    
        tableData = tableData.map((item) => {
          const calculatedPercentage=((Number(item.total2015_2023.replace(/,/g, '')))*100)/(Number(calTotal2015_2023TOTAL.replace(/,/g, '')));
          const formattedPercentage = calculatedPercentage % 1 === 0 ? calculatedPercentage.toFixed(0) : calculatedPercentage.toFixed(1);
            const percentage=new Intl.NumberFormat('en-IN').format(formattedPercentage);
            
            return { ...item, percentageShare: percentage};
          });


tableData=tableData.filter((item) =>
item.category?.toLowerCase().includes(searchValue?.toLocaleLowerCase()) ||
Number(item.adbCountries?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.blendCountries?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase())||
Number(item.adfCountries?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.multinationalOperations?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.total2015_2023?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.annualAverage2015_2023?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()) ||
Number(item.percentageShare?.replace(/,/g,'')).toString()?.toLowerCase().includes(searchValue?.toLowerCase()));
     
          const adbCountriesTOTAL =new Intl.NumberFormat('en-IN').format(tableData
            .map((item) => Number(item.adbCountries.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)) ;
          
          const blendCountriesTOTAL =new Intl.NumberFormat('en-IN').format(tableData
            .map((item) => Number(item.blendCountries.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)) ; 
        
          const adfCountriesTOTAL = new Intl.NumberFormat('en-IN').format(tableData
            .map((item) => Number(item.adfCountries.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)) ;
          
          const multinationalOperationsTOTAL = new Intl.NumberFormat('en-IN').format(tableData
            .map((item) => Number(item.multinationalOperations.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)) ; 
        
          const total2015_2023TOTAL =new Intl.NumberFormat('en-IN').format(tableData
            .map((item) => Number(item.total2015_2023.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)) ;  
        
          const annualAverage2015_2023TOTAL =new Intl.NumberFormat('en-IN').format(tableData
            .map((item) => Number(item.annualAverage2015_2023.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)) ;

      const percentageShareTOTAL =new Intl.NumberFormat('en-IN').format(tableData
        .map((item) => Number(item.percentageShare.replace(/,/g, '')))
        .reduce((a, b) => a + b, 0)) ; 
   

   
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

      const handleSearchChange = (event) => {
        if (event) {
            const searchValue = event.target.value;
            setSearchValue(searchValue);
        }
    };
  


  return (
   
    <div className="cardBody">
         <FullScreen handle={handle}>
    <div class="cardTitle flex justify-between items-center mb-4 ">
      <div className="items-self-center">
        <p class="f14 semibold text-uppercase text-normal">
          LENDING VOLUMES
        </p>
        <p className="f13 text-benGray">
          Trend Analysis Showing Bank’s Country Financial Operations{" "}
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
    <div className="mt-5 flow-root">
      <div className="overflow-x-auto theme-table">
        <div className="align-middle">
          <PerfectScrollbar>
            <table className="min-w-full divide-y divide-gray-300">
              <thead>
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  ></th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  >
                    <b>ADB Countries</b>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  >
                    <b>Blend Countries</b>
                  </th>
                  <th
                    scope="col"
                    className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  >
                    <b>ADF Countries with access to ADB financing</b>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  >
                    <b>Multinational Operations</b>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  >
                    <b>Total</b>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  >
                    <b>Annual Average</b>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-2 py-2 semibold text-normal text-benGray f12 text-uppercase"
                  >
                    <b>% Share</b>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 bg-white">
                    { tableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-center text-light f13">
                          {data?.category}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-center text-light f13">
                          {data?.adbCountries}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-center text-light f13">
                         
                              {data?.blendCountries}
                              
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-center  text-light f13">
                          {data?.adfCountries}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-center text-light f13">
                          {data?.multinationalOperations}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-center text-light f13">
                              {data?.total2015_2023}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-center text-light f13">
                               {data?.annualAverage2015_2023}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-center text-light f13">
                          {data?.percentageShare}%
                        </td>
                      </tr>
                    ))}
                  </tbody>
                  <tfoot>
                    <tr>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-center text-light f13">
                       Total
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-center  text-light f13">
                      {adbCountriesTOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-center  text-light f13">
                   {blendCountriesTOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-center  text-light f13">
                   {adfCountriesTOTAL}
                      </td>
                    
                      <td className="whitespace-nowrap py-2 px-2 text-center text-bold f13">
                    {multinationalOperationsTOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-center text-light f13">
              {total2015_2023TOTAL}
                      </td>

                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-center text-light f13">
              {annualAverage2015_2023TOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold text-center text-center  text-light f13">
           {percentageShareTOTAL}%
                      </td>
                    </tr>
                  </tfoot>
            </table>
          </PerfectScrollbar>
        </div>
      </div>
    </div>
  </FullScreen>
  </div>
  
  );
}