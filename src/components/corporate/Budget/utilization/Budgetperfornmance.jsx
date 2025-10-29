import React from 'react';
import Highcharts from 'highcharts';
import HighchartsExporting from 'highcharts/modules/exporting';
import HighchartsExportData from 'highcharts/modules/export-data';
import HighchartsData from 'highcharts/modules/data';
import HighchartsReact from 'highcharts-react-official';

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const Budgetperfornmance = () => {
  const options = {
    chart: {
      type: 'column',
      height: 300 ,
      backgroundColor:'#ffffff',
      // 
      // width: 350,
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: ['Budget', 'Committed', 'Total'],
      labels: {
       
        rotation: 0, // Set rotation angle (in degrees)
        staggerLines: 1, // Stagger lines to avoid overlapping
      },
    },
    yAxis: {
      title: {
        text: null,
      },
      labels: {
        enabled: true,
      },
      stackLabels: {
        enabled: true,
      },
      dataLabels: {
        enabled: false,
      },
    },
    credits: {
      enabled: false,
    },
    plotOptions: {
      column: {
        pointWidth: 40,
        stacking:'normal',
        dataLabels: {
          enabled: false,
        
        },
       
      },
      series: {
        groupPadding: 0.22,
        pointPadding: 0.2,
      },
    },
    legend: {
      enabled: false,
    },
    series: [
      {
        name: 'BudgetPerfornmance',
        data: [
          { y: 450, color: '#3ce9d0' },
          { y: -125, color: '#8b7dfa' },
          { y: -125, color: '#fda632' },
        ],
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
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Budgetperfornmance;
