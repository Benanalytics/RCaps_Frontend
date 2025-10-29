import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const PEPVTableCircularbar = (props) => {

    const options = {
      chart: {
        type: 'bar', 
        height:65, 
        width:60,  
        backgroundColor:'', 
        toolbar: {
          show: true,
        },
        zoom: {
          enabled: true,
        },
      },
      title: {
       text:''
      },
      subtitle: {
        useHTML: true,
        text: `<div class='flex items-center justify-center flex-col'>
                    <h4 class='text-black f12 semibold text-bold'>${props.progress}%</h4>                
            </div>`,
        floating: true,
        verticalAlign: 'middle',
        y: 7,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false, // Hide the tooltip when hovering
      },
      plotOptions: {
        series: {
          borderWidth: 0,
          colorByPoint: true,
          type: 'pie',
          size: '85%',
          innerSize: '65%',
          size:'60',
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
        enabled: false,
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
      colors: ['#7c86ff', '#e9ecef'],
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
    <div  className='flex justify-center'>
      <HighchartsReact  highcharts={Highcharts} options={options} />   
    </div>
  );
};

export default PEPVTableCircularbar;
