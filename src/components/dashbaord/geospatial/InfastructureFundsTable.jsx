import React, { useState, useRef, useEffect } from 'react';
import AdfIncludingLineChart from './AdfIncludingLineChart';
import { BsSearch } from 'react-icons/bs';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import PerfectScrollbar from "react-perfect-scrollbar";
export default function InfastructureFundsTable({ data }) {

    const [searchValue, setSearchValue] = useState('');
   
    let tableData = [];
    let InfrastructureData = [];
    let otherData = [];
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

      

    if (data) {
        InfrastructureData = data?.filter((x)=>x.infrastructureName!==null).map((item) => {
            let infraObj = {};
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
         
            if (item.infrastructureName === 'Infrastructure') {
                infraObj = {
                    sectorName: item.infrastructureName,
                    bankGroup: new Intl.NumberFormat('en-IN').format(
                        getADFIncludingTSF +
                        getADBPrivate +
                        getADBPublic
                    ),
                    ADFIncludingTSF: new Intl.NumberFormat('en-IN').format(
                        getADFIncludingTSF
                    ),
                    ADBPrivate: new Intl.NumberFormat('en-IN').format(
                        getADBPrivate
                    ),
                    ADBPublic: new Intl.NumberFormat('en-IN').format(
                        getADBPublic
                    ),
                    totalADB: new Intl.NumberFormat('en-IN').format(
                        getADBPrivate + getADBPublic
                    ),
                    adfGraphData:adfGraphData,
                    adbGraphData:adbGraphData,
                    adbPercentage:resultinfraPercentageADBGraphArray
                };
            }
            return infraObj;
        });
    }
  
    if (data) {
        otherData = data?.filter((x)=>x.infrastructureName!==null).map((item) => {
            let otherObj = {};
            const getADFIncludingTSF = item.financialAmount.map(
                (item) => item.adfIncludingTSFAmountUAMillion).reduce((a,b)=>a +b,0);
            const getADBPrivate = item.financialAmount.map(
                (item) => item.adbPrivateAmountUAMillion).reduce((a,b)=>a +b,0);
            const getADBPublic = item.financialAmount.map(
                (item) => item.adbPublicAmountUAMillion).reduce((a,b)=>a +b,0);
                const adfGraphData=item.financialAmount.map(
                    (item) => {
                        return item.adfIncludingTSFAmountUAMillion});
                        const adbTotalData=item.financialAmount.map(
                            (item) => {
                                return item.adbPrivateAmountUAMillion + item.adbPublicAmountUAMillion});
                                const adbGraphCategoryData=item.financialAmount.map(
                                    (item) => {
                                        return item.category});  
                                        
                                        
            if (item.infrastructureName !== 'Infrastructure') {
                otherObj = {
                    bankGroup:
                    getADFIncludingTSF +
                    getADBPrivate +
                    getADBPublic,
                    ADFIncludingTSF: getADFIncludingTSF,
                    ADBPrivate: getADBPrivate,
                    ADBPublic: getADBPublic,
                    totalADB: getADBPrivate + getADBPublic,
                    adfGraphData:adfGraphData,
                    adbTotalData:adbTotalData,
                    adbGraphCategoryData:adbGraphCategoryData,
                   
                };
            }
            return otherObj;
        });
    }
    let otherFilteredData = otherData.filter(
        (obj) => Object.keys(obj).length !== 0
    );

    const otherBankGroup = otherFilteredData
        .map((item) => item.bankGroup)
        .reduce((a, b) => a + b, 0);
    const otherADFIncludingTSF = otherFilteredData
        .map((item) => item.ADFIncludingTSF)
        .reduce((a, b) => a + b, 0);
    const otherADBPrivate = otherFilteredData
        .map((item) => item.ADBPrivate)
        .reduce((a, b) => a + b, 0);
    const otherADBPublic = otherFilteredData
        .map((item) => item.ADBPublic)
        .reduce((a, b) => a + b, 0);
    const otherTotalADB = otherFilteredData
        .map((item) => item.totalADB)
        .reduce((a, b) => a + b, 0);

      
        const summedOtherAdfGraphData = otherFilteredData.reduce((acc, obj) => {
            // Iterate over the adfGraphData array of each object
            obj.adfGraphData.forEach((value, index) => {
              // If the index doesn't exist in acc, initialize it
              if (!acc[index]) {
                acc[index] = 0;
              }
              // Add the value to the corresponding index in acc
              acc[index] += value;
            });
            return acc;
          }, []);
        
          // Create a single array of objects
          const resultOtherADFGraphArray = summedOtherAdfGraphData.map((value, index) => ([
           otherFilteredData[0].adbGraphCategoryData[index], // Assuming adbGraphCategoryData is the same for all objects
            value
          ]));
        
          
        const summedOtherAdbGraphData = otherFilteredData.reduce((acc, obj) => {
            // Iterate over the adfGraphData array of each object
            obj.adbTotalData.forEach((value, index) => {
              // If the index doesn't exist in acc, initialize it
              if (!acc[index]) {
                acc[index] = 0;
              }
              // Add the value to the corresponding index in acc
              acc[index] += value;
            });
            return acc;
          }, []);
        
          // Create a single array of objects
          const resultOtherADBTotalGraphArray = summedOtherAdbGraphData.map((value, index) => ([
           otherFilteredData[0].adbGraphCategoryData[index], // Assuming adbGraphCategoryData is the same for all objects
            value
          ]));



      const resultOtherPercentageADBGraphArray = summedTotalAdbGraphData.map((value, index) => ([
        otherFilteredData[0].adbGraphCategoryData[index], // Assuming adbGraphCategoryData is the same for all objects
        ( (summedOtherAdbGraphData[index])*100)/ value
       ]));

    const othersCombinedArray = [
        {
            sectorName: 'Others',
            bankGroup: new Intl.NumberFormat('en-IN').format(otherBankGroup),
            ADFIncludingTSF: new Intl.NumberFormat('en-IN').format(
                otherADFIncludingTSF
            ),
            ADBPrivate: new Intl.NumberFormat('en-IN').format(otherADBPrivate),
            ADBPublic: new Intl.NumberFormat('en-IN').format(otherADBPublic),
            totalADB: new Intl.NumberFormat('en-IN').format(otherTotalADB),
            adfGraphData:resultOtherADFGraphArray,
            adbGraphData:resultOtherADBTotalGraphArray,
            adbPercentage:resultOtherPercentageADBGraphArray
        },
    ];
    let infraFilteredData = InfrastructureData.filter(
        (obj) => Object.keys(obj).length !== 0
    );

    tableData = [...infraFilteredData, ...othersCombinedArray];

       

    const [isDownloadVisible, setDownloadVisible] = useState(false);
    const downloadDropdownRef = useRef(null);
    const handle = useFullScreenHandle();
    const toggleDownload = () => {
        setDownloadVisible(!isDownloadVisible);
    };

    const calBankGroupTotal = new Intl.NumberFormat('en-IN').format(
        tableData
            .map((item) => Number(item.bankGroup.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)
    );

    const calTotalADBTotal = new Intl.NumberFormat('en-IN').format(
        tableData
            .map((item) => Number(item.totalADB.replace(/,/g, '')))
            .reduce((a, b) => a + b, 0)
    );
    tableData=tableData.map((item)=>{

  const calculatedADBPercentage=(Number(item.totalADB.replace(/,/g, '')) * 100) /Number(calTotalADBTotal.replace(/,/g, ''));
  const formattedADBPercentage = calculatedADBPercentage % 1 === 0 ? calculatedADBPercentage.toFixed(0) : calculatedADBPercentage.toFixed(1);
  const OfADB = new Intl.NumberFormat('en-IN').format(formattedADBPercentage);

  const calculatedBankOfPercentage=(Number(item.bankGroup.replace(/,/g, '')) * 100) /Number(calBankGroupTotal.replace(/,/g, ''));
  const formattedBankOfPercentage = calculatedBankOfPercentage % 1 === 0 ? calculatedBankOfPercentage.toFixed(0) : calculatedBankOfPercentage.toFixed(1);
  const ofBankOf = new Intl.NumberFormat('en-IN').format(formattedBankOfPercentage);

  return{
    ...item,
    ofADB: OfADB,
    ofBankOf: ofBankOf,
  }
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


const bankGroupTotal = new Intl.NumberFormat('en-IN').format(
  tableData
      .map((item) => Number(item.bankGroup?.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)
);

const ADFIncludingTSFTotal = new Intl.NumberFormat('en-IN').format(
  tableData
      .map((item) => Number(item.ADFIncludingTSF?.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)
);

const ADBPrivateTotal = new Intl.NumberFormat('en-IN').format(
  tableData
      .map((item) => Number(item.ADBPrivate?.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)
);

const ADBPublicTotal = new Intl.NumberFormat('en-IN').format(
  tableData
      .map((item) => Number(item.ADBPublic?.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)
);

const totalADBTotal = new Intl.NumberFormat('en-IN').format(
  tableData
      .map((item) => Number(item.totalADB?.replace(/,/g, '')))
      .reduce((a, b) => a + b, 0)
);
    const oFADBTotal = new Intl.NumberFormat('en-IN').format(
        tableData.map((item) => Number(item.ofADB?.replace(/,/g, ''))).reduce((a, b) => a + b, 0)
    );

    const oFBankOfTotal = 
        new Intl.NumberFormat('en-IN').format(
            tableData.map((item) => Number(item.ofBankOf?.replace(/,/g, ''))).reduce((a, b) => a + b, 0)
         );
   
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
        <div className='cardBody'>
             <FullScreen handle={handle}>
            <div class='cardTitle flex items-center flex-wrap items-center justify-between'>
                <div class='mb-4'>
                    <p class='f14 semibold text-uppercase text-normal'>
                        INFASTRUCTURE FUNDING FOCUS
                    </p>
                    <p class='f13 semibold text-light text-benGray'>
                        Proportional Investments In INFASTRUCTURE VS. Other
                        Sectors
                    </p>
                </div>
                <div class='flex gap-x-3 mb-4 flex-wrap items-center mb-4'>
                    <form className='border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center f14'>
                        <BsSearch className='pointer-events-none absolute inset-y-0 left-5 h-full w-4 text-benGray' />
                        <label
                            htmlFor='search-field'
                            className='sr-only'
                        >
                            Search
                        </label>
                        <input
                            id='search-field'
                            className='block h-full w-full border-0 f14 pl-8 text-benGray placeholder:text-benGray bg-transparent f14'
                            placeholder='Search...'
                            type='search'
                            name='search'
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

            <div className=''>
                <div className='mt-4 flow-root'>
                    <div className='overflow-x-auto theme-table'>
                        <div className='pb-2 align-middle'>
                        <PerfectScrollbar>
                            <table className='min-w-full divide-y divide-gray-300 table-bordered'>
                                <thead>
                                    <tr>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            SECTOR NAME
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            BANK GROUP
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            ADF INCLUDING TSF
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            ADB PRIVATE
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            ADB PUBLIC
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            TOTAL ADB
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            %OF ADB
                                        </th>
                                        <th
                                            scope='col'
                                            className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
                                        >
                                            %OF BANK GROUP
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className='divide-y divide-gray-200 bg-white'>
                                    {tableData.map((data, ind) => (
                                            <tr key={`TabkeKey${ind}`}>
                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    {data?.sectorName}
                                                </td>
                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    {data?.bankGroup}
                                                </td>

                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    <div className='flex items-center justify-between gap-x-1'>
                                                        {data?.ADFIncludingTSF}
                                                        <AdfIncludingLineChart data={data.adfGraphData} />
                                                    </div>
                                                </td>
                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    {data?.ADBPrivate}
                                                </td>
                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    {data?.ADBPublic}
                                                </td>
                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    <div className='flex items-center justify-between gap-x-1'>
                                                        {data?.totalADB}
                                                        <AdfIncludingLineChart data={data.adbGraphData} />
                                                    </div>
                                                </td>

                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    <div className='flex items-center justify-between gap-x-1'>
                                                        {data?.ofADB}%
                                                        <AdfIncludingLineChart  data={data.adbPercentage}/>
                                                    </div>
                                                </td>
                                                <td className='whitespace-nowrap py-2 px-2 text-light f13'>
                                                    {data?.ofBankOf}%
                                                </td>
                                            </tr>
                                        ))}
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold text-light f13'>
                                            BANK
                                        </td>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold text-light f13'>
                                                {bankGroupTotal}
                                        </td>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold  text-light f13'>
                                                {ADFIncludingTSFTotal}
                                        </td>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold  text-light f13'>
                                                {ADBPrivateTotal}
                                        </td>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold  text-light f13'>
                                                {ADBPublicTotal}
                                        </td>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold f13'>
                                                {totalADBTotal}
                                        </td>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold  text-light f13'>
                                                {oFADBTotal} %
                                        </td>
                                        <td className='whitespace-nowrap py-2 px-2 text-bold  text-light f13'>
                                                {oFBankOfTotal} %
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
            </div>
            </FullScreen>
        </div>
    );
}