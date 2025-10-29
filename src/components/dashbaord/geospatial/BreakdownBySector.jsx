import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
 

const BreakdownBySector = ({data}) => {

let dataArray=[];
  
    if(data){
      dataArray= data.map((item)=>{
        return{
          name: item.sectorName,
           y: item.uaMillionPercentage,
        }
      });
    }
     
    const options = {
      chart: {
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
 
 colors:["#32de84","#544fc5","#FF00FF","#fe6a35","#6b8abc","#C0C0C0","#FFC0CB","#FFFF00","#9F2B68","#808000","#ff661a"],
    series: [{
        name: 'Breakdown By Sector',
        colorByPoint: true,
        data: dataArray
    }]
 
    };
   
  return (
 
         
    <div className='card bg-white rounded-md card-shadow grid-margin'>
    <div className="cardBody">
      <div class="cardTitle flex items-center flex-wrap">
      <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">Sector Allocation Breakdown</p>
                  <p class="f13 semibold text-light text-benGray">Detailed Financial Distribution By Development Sector</p>
            </div>   
      </div>
      <div className='mt-4'>
         <HighchartsReact highcharts={Highcharts} options={options} />
     </div>
 
  </div>
</div>
 
  );
};
 
export default BreakdownBySector;