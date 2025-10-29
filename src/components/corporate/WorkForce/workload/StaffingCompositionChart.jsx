import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { TbRadar } from "react-icons/tb";
const StaffingCompositionChart = () => {

 
  const options = {
    chart: {
      type: "column",
      height: '280',
      backgroundColor: '#ffffff',
      spacing: [10, 10, 10, 10], // Add spacing around the chart
    },
    title: {
      text: "",
    },
    legend: {
      align: "right",
      verticalAlign: "middle",
      layout: 'vertical',
      itemStyle: {
        fontWeight: "bold",
       
      },
      x: 15,
    },
   
    xAxis: {
      categories: ["TM", "CCA", "Coordination"],
      labels: {
       
        rotation: 0, // Set rotation angle (in degrees)
        staggerLines: 1, // Stagger lines to avoid overlapping
      },
    },
    yAxis: {
      title: {
        text: "",
      },
      stackLabels: {
        enabled: true,
      },
     
    },
    plotOptions: {
      column: {
        pointWidth: 35,
        grouping: false,
        stacking: 'normal',
        dataLabels: {
          enabled: false,
          style: {
            textOutline: 'none',
          }
        },
      },
      series: {
        pointPadding: 0.2,
        borderWidth: 0,
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
    series: [
      {
        name: "  Coordination | Knowledge | Policy  ",
        data: [0, 0, 5],
        color: "#fda632",
        legendIndex: 3,
     
      },
      {
        name: " Task Managers and project Staff",
        data: [56, 0, 0],
        color: "#3ce9d0",
      },
      {
        name: "Cross Cutting Area (Climate Expert)",
        data: [0, 18, 0],
        color: "#8b7dfa",
        legendIndex: 2,
      },
    
    ],
   
  };
 
  return (
   <div >
 
    <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
   
  );
};
 
export default StaffingCompositionChart;