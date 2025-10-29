import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import { GrGroup } from "react-icons/gr";

const options = {
  chart: {
    type: 'bar',
   height: 100,
   backgroundColor: '',
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    categories: [
      '',
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
     // format: '{value}%'
  },
  gridLineWidth: 0,
  lineWidth: 0
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
      name: 'Coordination | Knowledge | Policy',
      data: [5],
    },
    {
      name: 'Cross Cutting Area (Climate Expert)',
      data: [18],
    },
    {
        name: 'Task Managers and Project Staff',
        data: [56],
      },
  ],
};


const StaffingCompositionBar = () => {
 
  return (
    <div className='card bg-white rounded-md card-shadow'>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4"></p>
          </div>
          <div className='mt-4 grid grid-cols-1 md:grid-cols-1 grid-margin CardDivgap'>
             <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
         <div> PL and Project Staff <GrGroup /></div>
      </div>
    </div>
  );
};

export default StaffingCompositionBar;
