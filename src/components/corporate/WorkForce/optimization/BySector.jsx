import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const BYSECTOR = () => {
  const options = {
    chart: {
      type: "column",
      height: '290',
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["ICT", "Industry", "Environment", "Social","Wash Sector","Finance","Multi-Sector","Transport","Power","Agriculture"],
      labels: {
       
        rotation: 0, // Set rotation angle (in degrees)
        staggerLines: 1, // Stagger lines to avoid overlapping
      },
  
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      tickPositions: [0, 20, 40, 60, 80, 100],
      labels: {
        formatter: function () {
          return (this.value) + "%";
        },
      
      },
    },
    legend: {
      align: "center",
      reversed: true,
      verticalAlign: "bottom",
      borderWidth: 0,
    },
    // tooltip: {
    //   headerFormat: "<b>{point.x}</b><br/>",
    //   pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    // },
    plotOptions: {
      column: {
        pointWidth:35,
        stacking: "normal",
        dataLabels: {
          enabled: true,
          format: '<b>{point.name}</b> {point.percentage:.1f}%',
          align: "center",
          inside: true,
          verticalAlign: "bottom", 
         
          useHTML: true, 
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
        data: [90,90,90,90,90,90,90,90,90,90 ],
        name: 'Target',
        type:'line',
        color: '#000000',
        marker: {
          enabled: false,
        },
        dataLabels: {
          enabled: false,
         
        },
        zIndex: 2,
      },
      {
        name: "Decentralized",
        data: [66, 86, 83, 89,88,80,70,50,80,10],
        color: "#bcffdf",
      },
      {
        name: "Centralized",
        data: [34, 14, 17, 11,12,20,30,50,20,90],
        color: "#e8baba",
      },


   
    ],
  };

  return (
    <div className="mt-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BYSECTOR;
