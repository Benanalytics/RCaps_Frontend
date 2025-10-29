import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
 
const HoursByMonthBar = () => {
  const options = {
    chart: {
      type: 'column',
      height: 290,
      backgroundColor:'#ffffff',
    },
    title: {
      text: '',
    },
    xAxis: {
      categories: [
        '2021- 01',
        '2021-02',
        '2021- 03',
        '2021-04',
        '2021-05',
        '2021-06',
        '2021- 07',
        '2021-08',
        '2021-09',
        '2021-10',
        '2021- 11',
        '2021- 12',
      ],
      labels: {
       
        rotation: 0, // Set rotation angle (in degrees)
        staggerLines: 1, // Stagger lines to avoid overlapping
      },
    },
    legend: {
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0,
    },
    yAxis: [
      {
        labels: {
          enabled: true,
        },
        title: {
          text: '',
        },
        stackLabels: {
          enabled: true,
        },
       
        tickPositions: [0, 200, 400, 600, 800, 1000],
        reversed: false,
      },
      {
          title: {
            text: "",
          },
          opposite: true,
          tickPositions: [0, 0.2,0.4, 0.6, 0.8, 1], // Original values on the right side
          // labels: {
          //   formatter: function () {
          //     // Convert the original values to percentages
          //     return (this.value) + "%";
          //   },
          
          // },
        }
        
      
     
    ],
    plotOptions: {
      column: {
        pointWidth: 30,
        stacking: 'normal',
        dataLabels: {
          enabled: false,
         
          style: {
            textOutline: 'none',
        }
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
         x:26,
         y:-16,
        },
      },
    },
   
    series: [
      {
        data: [900, 200, 800, 850,250,100,700,400,210,700,600,700],
        name: '#Work Programme',
        color: '#3ce9d0',
      },
      {
        name: "Avg Hours Per Project",
        type: "line",
        marker:{
            enabled:false
        },
        data: [0.3,0.2,0.4,0.2,0.8,0.3,0.3,0.2,0.4,0.2,0.8,0.3,],
        color: "black",
        yAxis:1
      },
  
    
    ],
  
  
  };
 
  return (
    <div className="card bg-white rounded-md card-shadow grid-margin">
      <div className="cardBody">
        <div class="cardTitle flex items-center flex-wrap">
            <p class="f14 semibold text-uppercase text-normal mb-4">Project & AVG HOURS PER PROJECT BY MONTH</p>
        </div>
        <div className="mt-5">
            <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
      </div>
    </div>
  );
};
 
export default HoursByMonthBar;