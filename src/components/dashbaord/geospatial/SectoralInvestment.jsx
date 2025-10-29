import React from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsDumbbell from "highcharts/modules/dumbbell";
import HC_more from "highcharts/highcharts-more";

HC_more(Highcharts);
highchartsDumbbell(Highcharts);

const SectoralInvestment = ({data}) => {
  let inputData=[];
  let increasingData = [];
 let decreasingData = [];
 // Define custom SVG symbols for left and right triangles
Highcharts.SVGRenderer.prototype.symbols.triangleLeft = (x, y, w, h) =>
['M', x, y + h / 2, 'L', x + w, y, 'L', x + w, y + h, 'Z'];

Highcharts.SVGRenderer.prototype.symbols.triangleRight = (x, y, w, h) =>
['M', x + w, y + h / 2, 'L', x, y, 'L', x, y + h, 'Z'];


  if(data){
    inputData= data.map((item)=>{
      return {
    name:item.sectorAnalysis,
    previous:item.previousUaMillion,
    current:item.currentUaMillion
      }
    })

    inputData= inputData.map(dataPoint => {
      const isIncrease = dataPoint.previous < dataPoint.current;
      return {
          ...dataPoint,
          low: isIncrease ? dataPoint.previous : dataPoint.current,
          high: isIncrease ? dataPoint.current : dataPoint.previous
      };
  });

  // Separate the data into increasing and decreasing series

  inputData.forEach((dataPoint, index) => {
const isIncrease = dataPoint.previous < dataPoint.current,
    transformedDataPoint = {
        ...dataPoint,
        x: index
    };

if (isIncrease) {
    increasingData.push(transformedDataPoint);
} else {
    decreasingData.push(transformedDataPoint);
}
});

  }
const chartOptions={
  chart: {
    type: 'dumbbell',
    inverted: true,
},
title: {
    text: ''
},

subtitle: {
    text: ''
},

tooltip: {
    shared: true
},

xAxis: {
    type: 'category',
    opposite: true
},

yAxis: {
    title: ''
},

legend: {
    enabled: false
},

plotOptions: {
    series: {
        connectorWidth: 3,
        marker: {
            radius: 5,
            states: {
                hover: {
                    lineWidth: 0
                }
            }
        },
        dataLabels: {
            enabled: true,
            color: 'contrast',
            crop: false,
            overflow: 'allow',
            formatter: function () {
              let formattedValue = this.y.toLocaleString();
              return (
                '<div style="text-align:center;">' +
                formattedValue +
                "</div>"
              );
            },
        }
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
    name: 'Increase',
    data: increasingData,
    color: Highcharts.getOptions().colors[2],
    marker: {
        enabled: true,
        symbol: 'triangleRight'
    },
    lowMarker: {
        enabled: false
    }
},
{
    name: 'Decrease',
    data: decreasingData,
    color: Highcharts.getOptions().colors[5],
    marker: {
        enabled: false
    },
    lowColor: undefined,
    lowMarker: {
        enabled: true,
        symbol: 'triangleLeft'
    }
}]
}

  return (
    <div className="card bg-white rounded-md card-shadow grid-margin flex1">
    <div className="cardBody">
       <div class="cardTitle flex items-center flex-wrap items-center justify-between">
         <div class="mb-4">
               <p class="f14 semibold text-uppercase text-normal">SECTORAL INVESTMENT RANGES</p>
               <p class="f13 semibold text-light text-benGray">Span Of Minimum And Maximum Financial Contributions By Sector</p>
         </div>   
       </div>
       <div class="mt-5">
       <HighchartsReact highcharts={Highcharts} options={chartOptions} />
   </div>
 </div>
 </div>
  );
};

export default SectoralInvestment;