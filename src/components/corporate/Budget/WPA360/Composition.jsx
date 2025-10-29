import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React, { useState} from 'react';

const options = {
  chart: {
    type: 'bar',
   height: 280,
   backgroundColor: '#ffffff',
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    categories: [
      'South',
      'West',
      'East',
      'North',
      'Nigeria',
      'Central',
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
        enabled: true,
     // format: '{value}%'
  },
 // gridLineWidth: 0,
 // lineWidth: 0
  },
 
  legend: {
    enabled: true,
    reversed: true,
    align: 'center',
    verticalAlign: 'bottom',
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
    series: {
        stacking: 'normal',
      pointWidth: 24,
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
  colors: ['#ffa412','#7c86ff','#4be7cf'],
  series: [
    {
      name: 'ADF Including TSF',
      data: [400,800,800,100,0,150],
    },
    {
      name: 'ADB Public',
      data: [600,500,300,800,700,600],
    },
    {
        name: 'ADB Private',
        data: [900, 400,600,450,400,500],
      },
  ],
};


const Composition = () => {
  const [selectedOption, setSelectedOption] = useState('Region');

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option in the state
  };

  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap justify-between">
                <p class="f14 semibold text-uppercase text-normal mb-4"> Composition</p>
                 <div className='mb-4'>
                  <select value={selectedOption} onChange={handleSelectChange}
                      name='program'
                      id='program'
                      className='border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex items-center '
                      >
                          {/* <option value="">Select</option> */}
                          <option value='Region'>Region</option>
                          <option value='Sector'>Sector</option>
                      </select>
                  </div>
          </div>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-1 CardDivgap'>
             <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
      </div>
    </div>
  );
};

export default Composition;
