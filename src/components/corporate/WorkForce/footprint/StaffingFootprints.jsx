import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const StaffingFootprints = () => {
  const options = {
    chart: {
      type: "column",
      height:'300',
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["Nigeria", "North", "West", "South","Center","East"],
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
      tickPositions: [0, 50, 100, 150, 200,250,300],
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
        formatter: function () {
          return Highcharts.numberFormat(this.total, 0);
        },
      },
    },
    legend: {
      align: "center",
      reversed: true,
      verticalAlign: "bottom",
      borderWidth: 0,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    },
    plotOptions: {
      column: {
        pointWidth:35,
        stacking: "normal",
        dataLabels: {
          enabled: true,
          // format: '<b>{point.name}</b> {point.percentage:.1f}%',
          align: "center",
          inside: true,
          verticalAlign: "bottom", 
          formatter: function () {
            var percentage = (this.y / this.point.stackTotal) * 100;
            return (
              '<div style="text-align:center;">' +
              this.y +
              "<br>(" +
              Highcharts.numberFormat(percentage, 0) +
              "%)</div>"
            );
          },
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
         x:16,
         y:-16,
        },
      },
    },
    series: [

    
     
      
      {
        name: "Current Staff",
        data: [60, 63, 55, 77,50,70],
        color: "#8b7dfa",
      },
      {
        name: "Projected Additional Staff",
        data: [124, 205, 129, 206,209,84],
        color: "#3ce9d0",
      },


   
    ],
  };

  return (
    <div class="card card-shadow bg-white rounded-md grid-margin">
    <div class="cardBody">
    <div class="cardTitle flex items-center flex-wrap items-center justify-between">
      <div class="mb-4">
        <p class="f14 semibold text-uppercase text-normal">Staffing FootPrint & Needs</p>
        <p class="f13 semibold text-light text-benGray">Current  And Staffing Needs  Per Sector</p></div>
    </div>
       
      <div className='mt-4'>
            <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
   </div>
 </div>
  );
};

export default StaffingFootprints;
