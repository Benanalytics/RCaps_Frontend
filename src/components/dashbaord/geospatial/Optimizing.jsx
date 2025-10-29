import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 
const Optimizing = ({data}) => {

 let dataArray=[];
  
    if(data){
      dataArray= data.map((item)=>{
        return{
          name: item.selectivity_UA30M,
           y: item.numberOfProjects,
        }
      });
    }
     
    const options = {
      chart: {
        backgroundColor:'#ffffff',
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
    },
    title: {
        text: '',
        align: 'left'
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
           // format: '{point.percentage:.1f}%',
            distance: -30, // Adjust this distance to move the labels towards the center
            style: {
              fontWeight: 'bold',
              color: 'black',
              textOutline: 'none',
            },
           
            formatter: function () {
              const roundedPercentage = this.percentage  % 1 === 0 ?this.percentage.toFixed(0):this.percentage.toFixed(1);
              // Convert rounded percentage to string and remove trailing zero if exists
              const formattedPercentage = roundedPercentage.toString().replace(/\.0$/, '');
              return  `${formattedPercentage}%`;
            }
          },
          center: ['50%', '50%'], // Set the center of the pie chart
          borderRadius: 0,
          showInLegend: true
        }
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
 
 
    series: [{
        name: 'Optimizing Selectivity',
        colorByPoint: true,
        data: dataArray
    }]
 
    };
   
  return (
 
         
          <div className='mt-5'>
             <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
 
  );
};
 
export default Optimizing;