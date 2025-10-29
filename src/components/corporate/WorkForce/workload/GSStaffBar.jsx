import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GSStaffBar = (props) => {

    const options = {
      chart: {
        type: 'bar', 
        height:240,    
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      title: {
        useHTML: true,
        text: `<div class='flex items-center justify-center flex-col'>
                    <h4 class='text-black f14 '>Management and VP Front Office</h4>                
            </div>`,
      },
      subtitle: {
        useHTML: true,
        text: `<div class='flex items-center justify-center flex-col'>
                    <h4 class='text-black f30 semibold text-bold'>${props.progress}</h4>                
            </div>`,
        floating: true,
        verticalAlign: 'middle',
        y: 22,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        valueSuffix: ' %',
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          colorByPoint: true,
          type: 'pie',
          size: '80%',
          innerSize: '60%',
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
      colors: ['#61c5e7', '#e9ecef'],
      series: [
        {
          type: 'pie',
          name: 'Progress',
          data: [
                        [ 'Completed',props.progress],  // Adjust the value to set your progress
                       [ 'Pending',100-props.progress],
                    ],
        },
      ],
    };
   
  return (
    <div  className=''>
      <HighchartsReact  highcharts={Highcharts} options={options} />   
    </div>
  );
};

export default GSStaffBar;