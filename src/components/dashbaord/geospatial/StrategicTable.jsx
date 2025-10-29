import React, { useState, useMemo } from "react";
import AdfIncludingLineChart from "./AdfIncludingLineChart";
import TotalAdbLineChart from "./TotalAdbLineChart";
import OfAdbLineChart from "./OfAdbLineChart";
 
let PageSize = 8;
const tableData = [
  {
    SECTORNAME: "Infrastructure",
    BANKGROUP: 3935,
    ADFINCLUDINGTSF: 322,
    ADBPRIVATE: 1094,
    ADBPUBLIC: 2518,
    TOTALADB: 3612,
    OFADB: 91,
    OFBANKOF:54

 
   
  },
  {
    SECTORNAME: "Others",
    BANKGROUP: 3338,
    ADFINCLUDINGTSF:1210,
    ADBPRIVATE: 101,
    ADBPUBLIC: 2077,
    TOTALADB: 2178,
    OFADB: 9,
    OFBANKOF:46

 
   
  },
 
 
];
 
export default function StrategicTable() {

  const [currentPage, setCurrentPage] = useState(1);
  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [isDownloadVisible, setDownloadVisible] = useState(false);
 
  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };
 
 
  const BANKGROUPTOTAL = tableData
  .map((item) => item.BANKGROUP)
  .reduce((a, b) => a + b, 0);
  
  const ADFINCLUDINGTSFTOTAL = tableData
  .map((item) => item.ADFINCLUDINGTSF)
  .reduce((a, b) => a + b, 0);

  const ADBPRIVATETOTAL = tableData
  .map((item) => item.ADBPRIVATE)
  .reduce((a, b) => a + b, 0);
  
  const ADBPUBLICTOTAL = tableData
  .map((item) => item.ADBPUBLIC)
  .reduce((a, b) => a + b, 0);

  const TOTALADBTOTAL = tableData
  .map((item) => item.TOTALADB)
  .reduce((a, b) => a + b, 0);

  const OFADBTOTAL = tableData
  .map((item) => item.OFADB)
  .reduce((a, b) => a + b, 0);

 
  const OFBANKOFTOTAL = tableData
  .map((item) => item.OFBANKOF)
  .reduce((a, b) => a + b, 0);
  return (
    <div className="card bg-white rounded-md grid-margin card-shadow KPI-peformanceGrid">
      <div className="cardBody">
      <div class="cardTitle flex items-center flex-wrap items-center justify-between">
          <div class="mb-4">
              <p class="f14 semibold text-uppercase text-normal">INFASTRUCTURE FUNDING FOCUS</p>
              <p class="f11 semibold text-uppercase text-normal text-benGray">Proportional Investments In INFASTRUCTURE VS. Other Sectors</p>
          </div>
          <div className="ellipsis-button">
            <i
              className="ri-more-2-fill f18 ellipsis-icon"
              onClick={toggleDownload}
            ></i>
            {isDownloadVisible && (
              <div className="download-dropdown">
                <a href="#" className="dropdown-item flex items-center gap-x-2">
                  <i class="ri-eye-line f16"></i> View
                </a>
                <a href="#" className="dropdown-item flex items-center gap-x-2">
                  <i class="ri-download-2-line f16"></i> Download
                </a>
              </div>
            )}
          </div>
      </div>
       
        <div className="">
          <div className="mt-4 flow-root">
            <div className="overflow-x-auto theme-table">
            <table className="min-w-full divide-y divide-gray-300 table-bordered">
                  <thead>
                   
                    <tr>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        SECTOR NAME
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        BANK GROUP
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        ADF INCLUDING TSF
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        ADB PRIVATE
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        ADB PUBLIC
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        TOTAL ADB
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        %OF ADB
                      </th>
                      <th
                        scope="col"
                        className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                      >
                        %OF BANK GROUP
                      </th>
                      
                    </tr>
                  </thead>
              
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentTableData.map((data, ind) => (
                      <tr key={`TabkeKey${ind}`}>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.SECTORNAME}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           {data?.BANKGROUP}
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           <div className="flex items-center justify-between gap-x-1">
                              {data?.ADFINCLUDINGTSF}<AdfIncludingLineChart/>
                            </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.ADBPRIVATE}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.ADBPUBLIC}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          <div className="flex items-center justify-between gap-x-1"> 
                            {data?.TOTALADB}<TotalAdbLineChart/>
                          </div>
                        </td>
 
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                           <div className="flex items-center justify-between gap-x-1">
                             {data?.OFADB}%<OfAdbLineChart/>
                           </div>
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-light f13">
                          {data?.OFBANKOF}%
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
                      {BANKGROUPTOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                   {ADFINCLUDINGTSFTOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                   {ADBPRIVATETOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
                      {ADBPUBLICTOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                    {TOTALADBTOTAL}
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
              {OFADBTOTAL}%
                      </td>
                      <td className="whitespace-nowrap py-2 px-2 text-bold  text-light f13">
           {OFBANKOFTOTAL}%
                      </td>
                    </tr>
                  </tfoot>
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}