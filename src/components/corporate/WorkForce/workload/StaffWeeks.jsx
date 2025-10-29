import React, { useState,useMemo} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';



let PageSize = 5;
const tableData  = [
  {
    name: 'Lending',
    lending: 14,
   
  },
  
];

const StaffWeeks = () => {
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


    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            backgroundColor: '#f3f2fe',
            type: 'pie',
            height:250,
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            useHTML: true,
            text: `<div class='flex items-center justify-center flex-col'>
                        <p class='f12 text-benGray semibold'>Overall Deliverable</p>
                        <h4 class='text-bold text-black f18 semibold'>11,514</h4>
                    
              </div>`,
            floating: true,
            verticalAlign: 'middle',
            y: 0,
          },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
                
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f}%',
                    distance: -10, 
                    style: {
                      textOutline: 'none',
                      color:'black'
                    },
                    formatter: function () {
                      return '<b>' + this.point.name + ':</b> ' + this.percentage.toFixed(1) + '%';
                    }
                  },
                borderRadius: 0,
                showInLegend: true,
                innerSize: '75%', // Adjust this value for the size of the blank space in the center
            },
        },
        exporting: {
            enabled: true,
            buttons: {
                contextButton: {
                    symbol: 'menuball',
                    symbolSize: '10',
                    symbolFill: '#666666',
                    text: '',
                    symbolStrokeWidth: '1',
                    menuItems: [
                        'viewFullscreen',
                        'printChart',
                        'downloadPNG',
                        'downloadJPEG',
                        'downloadPDF',
                        'downloadSVG',
                        'downloadCSV',
                        'downloadXLS',
                        'viewData',
                    ],
                    theme:{
                      fill:'#f3f2ff',
                     },
                    x: 16,
                    y: -16,
                },
            },
        },
        series: [{
            name: 'DELIVERABLE',
            colorByPoint: true,
            data: [{
                name: 'Supervision',
                y: 80.90,
                sliced: false,
                selected: true,
                color: "#474e87"
            }, {
                name: 'Lending',
                y: 6.76,
                color: "#f4ba58"

            }, {
                name: 'PCR',
                y: 12.15,
                color: "#49bb98"
            } ]
        }]
    };

    return (
      <div className='card card-shadow bg-white rounded-md grid-margin'>
         <div className="cardBody">
           <div class="cardTitle items-center flex-wrap">
              <p class="f14 semibold text-uppercase text-normal mb-4">Staff Weeks</p>
            </div>
            <div class="BgPurple border_purple border-t border-b border-l border-r px-5 py-5 mb-4 rounded-md">
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div> 
              <div className=''>
                <div class="cardTitle items-center flex-wrap">
                   <div class="f14 semibold text-uppercase text-normal mb-2"><u>DELIVERABLE:</u></div>
                </div>
                <ul class="deliverable_list">
                  <li>
                    <div class="flex justify-between flex-wrap w100">
                    <div class="f13 text-black">Lending</div>
                    <div class="f13 text-black">14</div>
                    </div>
                  </li>
                  <li>
                    <div class="flex justify-between flex-wrap w100">
                      <div class="f13 text-black">Supervision</div>
                      <div class="f13 text-black">10</div>
                    </div>
                  </li>
                    <li>
                    <div class="flex justify-between flex-wrap w100">
                      <div class="f13 text-black">PCR</div>
                      <div class="f13 text-black">0.3</div>
                    </div>
                  </li>
                </ul>
              </div>
          </div>
      </div>
//             <div className=''>
//               <p>DELIVERABLE:</p>
//             <div className='mt-4 flow-root'>
//               <div className='overflow-x-auto theme-table'>
//                 <div className='pb-2 align-middle'>
//                   <table className='min-w-full divide-y divide-gray-300'>
//                     <thead>
//                       <tr>
//                       <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
//                         >
                        
//                         </th>
//                         <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
//                         >
                    
//                         </th>
//                         <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
//                         >
                   
//                         </th>
//                         <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
//                         >
                        
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className='divide-y divide-gray-200 bg-white'>
//                     {currentTableData.map((data, ind) => (
//                         <tr key={`TabkeKey${ind}`}>
//                          <td className='whitespace-nowrap py-2 px-2 text-light f13'>
//                             {data?.name}
//                           </td>
//                           <td className='whitespace-nowrap py-2 px-2 text-light f13'>
//                             {data?.lending}
//                           </td>
//                           <td className='whitespace-nowrap py-2 px-2 text-light f13'>
//                             {data?.supervision}
//                           </td>
//                           <td className='whitespace-nowrap py-2 px-2 text-light f13'>
//                             {data?.PCR}
//                           </td>
//                         </tr>
//                       ))}
//                       <tr>
//                       <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-light text-black f12 text-uppercase'
//                         >
//                    Supervision
//                         </th>
//                         <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-light text-black f12 text-uppercase'
//                         >
//                       10
//                         </th>
                       
//                       </tr>
//                       <tr>
//                       <th
//                           scope='col'
//                           className='px-2 py-2 text-left  text-normal text-black f12 text-uppercase'
//                         >
// PCR                        </th>
//                         <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
//                         >
                      
//                         </th>
//                         <th
//                           scope='col'
//                           className='px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase'
//                         >
                       
//                         </th>
//                         <th
//                           scope='col'
//                           className='px-2 py-2 text-left  text-normal text-black f12 text-uppercase'
//                         >
//                         0.3
//                         </th>
//                       </tr>
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
             
//             </div>
//           </div> 
       
        
    );
};

export default StaffWeeks;
