import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const OverallBudgetCircle = () => {

    const options = {
      chart: {
        type: 'bar', 
        height:200,    
        backgroundColor:'#ffffff',
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      title: {
        text: '',
      },
      subtitle: {
        useHTML: true,
        text: `<div class='flex items-center justify-center flex-col'>
                      <h4 class='text-black f16 text-black semibold -mt-4'><strong class='f22 text-bold text-black semibold'>UA2,500</strong></h4>
                
          </div>`,
        floating: true,
        verticalAlign: 'middle',
        y: 12,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        valueSuffix: ' %',
      },
      exporting: {
        enabled: false,
    },
    plotOptions: {
        series: {
          borderWidth: 0,
          colorByPoint: true,
          type: 'pie',
          size: '120%',
          innerSize: '75%',
          dataLabels: {
          enabled: false,
          crop: false,
          distance: '-10%',
            style: {
              fontWeight: 'bold',
              fontSize: '16px',         
            },     
            connectorWidth: 0,
          },
        },
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
      colors: [ '#7c86ff ', '#4be7cf'],
      series: [
        {
          type: 'pie',
          name: 'Progress',
          data: [{
            name: 'High Priority',
            y: 63
        }, {
            name: 'Low Priority',
            y: 47
        }, 
    ],
        },
      ],
    };
   
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 grid-margin CardDivgap grid_onesixth'>
      <HighchartsReact highcharts={Highcharts} options={options} />
      <div className='flex flex-col justify-center'>
        <p class="flex items-center gap-x-2 mb-1">            
          <span class="f14 semibold" style={{color:'#7c86ff'}}>High Priority, UA 1870.M (63%)</span>
        </p>
        <p class="flex items-center gap-x-2 mb-1">   
          <span class="f14 semibold" style={{color:'#4be7cf'}}>Low Priority, UA 1870.M (47%)</span>
        </p>       
    </div>
</div>
  );
};

export default OverallBudgetCircle;
