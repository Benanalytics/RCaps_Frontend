import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState} from 'react';

const options = {
  chart: {
    type: 'bar',
    height: 280,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    categories: [
      'PCR',
      'MTR',
      'IPR',
    ],
    gridLineWidth: 0,
    lineWidth: 0
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
    labels: {
        enabled: false,
      format: '{value}%'
  },
  gridLineWidth: 0,
  lineWidth: 0
  },
 
  legend: {
    enabled: false,
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  exporting: {
    enabled: true,
    buttons: {
      contextButton: {
        symbol:'menuball',
        symbolSize:'10',
        symbolFill:'#666666',
        text:'',
        symbolStrokeWidth:'1',
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
       x:16,
       y:-16,
      },
    },
  },
  plotOptions: {
    bar: {
      pointWidth: 10,
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
      }  
      },
      groupPadding: 0.33,
      pointPadding:1,
    },
  },
  colors: ['#7c86ff', '#4be7cf','#ffa412'],
  series: [
    {
      name: 'Budget',
      data: [3, 2, 2],
    },
    {
      name: 'Execution',
      data: [1.8, 4.4, 2.4],
    },
    {
        name: 'Available',
        data: [3.5, 2.5, 4.3],
      },
  ],
};

const options1 = {
  chart: {
    type: 'bar',
    height: 280,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    categories: [
      'Pipeline',
      'IOP',
      'Lending',
    ],
    gridLineWidth: 0,
    lineWidth: 0
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
    labels: {
        enabled: false,
      format: '{value}%'
  },
  gridLineWidth: 0,
  lineWidth: 0
  },
 
  legend: {
    enabled: false,
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  exporting: {
    enabled: true,
    buttons: {
      contextButton: {
        symbol:'menuball',
        symbolSize:'10',
        symbolFill:'#666666',
        text:'',
        symbolStrokeWidth:'1',
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
       x:16,
       y:-16,
      },
    },
  },
  plotOptions: {
    bar: {
      pointWidth: 10,
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
      }  
      },
      groupPadding: 0.33,
      pointPadding:1,
    },
  },
  colors: ['#7c86ff', '#4be7cf','#ffa412'],
  series: [
    {
      name: 'Budget',
      data: [3, 2, 2],
    },
    {
      name: 'Execution',
      data: [1.8, 4.4, 2.4],
    },
    {
        name: 'Available',
        data: [3.5, 2.5, 4.3],
      },
  ],
};

const options2 = {
  chart: {
    type: 'bar',
    height: 280,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    categories: [
      'CDN',
      'ESW',
      'CSP/RISP',
    ],
    gridLineWidth: 0,
    lineWidth: 0
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
    labels: {
        enabled: false,
      format: '{value}%'
  },
  gridLineWidth: 0,
  lineWidth: 0
  },
 
  legend: {
    enabled: false,
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  exporting: {
    enabled: true,
    buttons: {
      contextButton: {
        symbol:'menuball',
        symbolSize:'10',
        symbolFill:'#666666',
        text:'',
        symbolStrokeWidth:'1',
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
       x:16,
       y:-16,
      },
    },
  },
  plotOptions: {
    bar: {
      pointWidth: 10,
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
      }  
      },
      groupPadding: 0.33,
      pointPadding:1,
    },
  },
  colors: ['#7c86ff', '#4be7cf','#ffa412'],
  series: [
    {
      name: 'Budget',
      data: [3, 2, 2],
    },
    {
      name: 'Execution',
      data: [1.8, 4.4, 2.4],
    },
    {
        name: 'Available',
        data: [3.5, 2.5, 4.3],
      },
  ],
};
const KeyDeliverables = () => {
  const [selectedOption, setSelectedOption] = useState('USBudget');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option in the state
  };

  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap  justify-between">
                <p class="f14 semibold text-uppercase text-normal mb-4"> Key Deliverables</p>
                <div className='mb-4'>
                    <select value={selectedOption} onChange={handleSelectChange}
                        name='program'
                        id='program'
                        className='border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex items-center '
                        >
                            {/* <option value="">Select</option> */}
                            <option value='USBudget'>US Budget</option>
                            <option value='Count'>Count</option>
                        </select>
                  </div>  
          </div>
          <div className='flex gap-x-2'>
             <div className='w-33'>
               <HighchartsReact highcharts={Highcharts} options={options} />
               </div>
               <div className='w-33'>
               <HighchartsReact highcharts={Highcharts} options={options1} />
             </div>
             <div className='w-33'>
               <HighchartsReact highcharts={Highcharts} options={options2} />
             </div>
         </div>
         <div className=''>
            <ul className=' flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom'>
                  <li className=''>
                      <button className='flex justify-center w-full hover:text-benPrimary group gap-x-3 items-center f22 semibold px-5 py-5 flex-col line_height1'>
                          <div><span className='f16' style={{color:'#7c86ff'}}>UA <span className='text-bold f25 '>435K</span></span></div>
                          <div><span className='f16 text-benGray text_light'>Budget</span></div>  
                        </button>
                    </li>
                    <li className='border-l border-benThinBlue'>
                      <button className='flex justify-center w-full hover:text-benPrimary group gap-x-3 items-center f22 semibold px-5 py-5 flex-col line_height1'>
                          <div><span className='text-bold f25' style={{color:'#4be7cf'}}>30%</span></div>
                          <div><span className='f16 text-benGray text_light'>Execution</span></div>  
                      </button>
                    </li>
                    <li className='border-l border-benThinBlue'>
                        <button className='flex justify-center w-full hover:text-benPrimary group gap-x-3 items-center f22 semibold px-5 py-5 flex-col line_height1'>
                          <div><span className='text-bold f25' style={{color:'#ffa412'}}>70%</span></div>
                          <div><span className='f16 text-benGray text_light'>Available</span></div> 
                        </button>
                    </li>
                </ul>
                  {/* <ul className='ben__DashboardLinks flex justify-center w-full flex-wrap chart_bottomdesc border-t'>
                      <li className='border-benThinBlue rounded-md'>
                        <button className='flex justify-center w-full hover:text-benPrimary group gap-x-2 items-center f22 semibold px-5 py-5'>
                        <span className='f16' style={{color:'#7c86ff'}}>UA</span>
                        <span className='text-bold f21 ' style={{color:'#7c86ff'}}>435K</span>
                        <span className='f16' style={{color:'#7c86ff'}}>Budget</span>
                          </button>
                      </li>
                      <li className='border-benThinBlue rounded-md'>
                        <button className='flex justify-center w-full hover:text-benPrimary group items-center f22 semibold px-5 py-5'>
                        <span className='text-bold f21'  style={{color:'#4be7cf'}} >30%</span>
                        <span className='f16  ml-1'  style={{color:'#4be7cf'}}> Execution</span>
                        </button>
                      </li>
                      <li className='border-benThinBlue rounded-md'>
                          <button className='flex justify-center w-full hover:text-benPrimary group items-center f22 semibold px-5 py-5'>
                          <span className='text-bold f21' style={{color:'#ffa412'}}>70%</span>
                          <span className='f16 ml-1' style={{color:'#ffa412'}}> Available</span>
                          </button>
                      </li>
                  </ul> */}
              </div>
      </div>
    </div>
  );
};

export default KeyDeliverables;
