import React from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts';
import solidGauge from 'highcharts/modules/solid-gauge'; // Import the solidgauge module

solidGauge(Highcharts);

const OverallEfficency = () => {
  const chartOptions = {
    chart: {
      type: 'solidgauge',
      height: '230px', // Adjust the height as needed
      backgroundColor: '#ffffff',
    },
    title: {
      text: '',
    },
    tooltip: {
      enabled: false,
    },
    pane: {
      center: ['50%', '85%'],
      size: '140%',
      startAngle: -90,
      endAngle: 90,
      background: {
        backgroundColor: Highcharts.defaultOptions.legend.backgroundColor || '#EEE',
        innerRadius: '75%',
        outerRadius: '100%',
        shape: 'arc',
      },
    },
    yAxis: {
      min: 0,
      max: 100,
      stops: [
      
        [0.9, '#009946'], // Green
      ],
      lineWidth: 0,
      tickPixelInterval: 0,
      tickWidth: 0,
      labels: {
        y: 16, 
        enabled: true, 
        format: '{value}%', 
      },
      plotLines: [
        {
          color: 'black', // Line color
          value: 82, 
          width: 2, 
          zIndex: 5, 
          label: {
            text: '82%', 
            align: 'right',  
            textAlign: 'left',
            x: 10,
            style: {
              color: 'black', 
              fontSize: '12px', // Label font size
            },
          },
        },
      ],
    },
    plotOptions: {
      solidgauge: {
        innerRadius: '75%',
        dataLabels: {
          y: 5,
          borderWidth: 0,
          useHTML: true,
        },
      },
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: 'Efficiency',
        data: [82],
        dataLabels: {
          format: '<div style="text-align:center"><span style="font-size:25px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') +
            '">{y}</span><span style="font-size:15px;color:' +
            ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black') +
            '">%</span></div>',
        },
      },
    ],
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
  };

  return (
    <div className='mt-5'>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
  </div>
  );
};

export default OverallEfficency;
