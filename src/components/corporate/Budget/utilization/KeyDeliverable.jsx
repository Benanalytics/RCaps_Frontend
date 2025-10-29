import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState} from 'react';
 
const options = {
  chart: {
    type: 'bar',
    height: 280,
    backgroundColor:'',
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
    enabled: false,
},
plotOptions: {
    bar: {
      pointWidth: 10,
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
        },
      },
    },
    series: {
      groupPadding: 0.33, 
      pointPadding: 0.2, 
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
    backgroundColor:'',
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
    enabled: false,
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
    backgroundColor:'',
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
    enabled: false,
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
const KeyDeliverable = () => {
  const [selectedOption, setSelectedOption] = useState('USBudget');
 
  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option in the state
  };
 
  return (
   
        <div className="">
        
          <div className='flex gap-x-2'>
            <div className='flex1'>
               <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className='flex1'>
               <HighchartsReact highcharts={Highcharts} options={options1} />
           </div>
           <div className='flex1'>
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
           {/* <ul className=' flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom'>
              <li className=''>
                  <button className='flex justify-center w-full hover:text-benPrimary group gap-x-3 items-center f22 semibold px-5 py-5'>
                    <span className='f16' style={{color:'#7c86ff'}}>UA <span className='text-bold f22 '>435K</span> Budget </span>
                    </button>
                </li>
                <li className='border-l border-benThinBlue'>
                  <button className='flex justify-center w-full hover:text-benPrimary group gap-x-3 items-center f22 semibold px-5 py-5'>
                  <span className='f16' style={{color:'#4be7cf'}}> <span className='text-bold f22' >30%</span> Execution</span> 
                  </button>
                </li>
                <li className='border-l border-benThinBlue'>
                    <button className='flex justify-center w-full hover:text-benPrimary group gap-x-3 items-center f22 semibold px-5 py-5'>
                      <span className='f16' style={{color:'#ffa412'}}> <span className='text-bold f22'>70%</span> Available</span>
                    </button>
                </li>
            </ul> */}
          </div>
      </div>

  );
};
 
export default KeyDeliverable;