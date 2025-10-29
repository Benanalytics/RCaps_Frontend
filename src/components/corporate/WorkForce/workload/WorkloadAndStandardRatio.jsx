import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const WorkloadAndStandardRatio = () => {
  const options = {
    chart: {
      type: "column",
      height:290,
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["PIVP", "PICU", "PIFD", "PITD"],
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
      tickPositions: [0, 30, 60, 90, 120, 150,180],
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
         x:26,
         y:-16,
        },
      },
    },
    series: [

      {
        data: [70,70,70,70],
        name: 'Average',
        type:'line',
        color: '#000000',
        marker: {
          enabled: false,
        },
        zIndex: 2,
      },
      {
        name: "Portfolio",
        data: [45, 35, 40, 35],
        color: "#aeb0c5",
      },

      {
        name: "Lending",
        data: [35, 50, 50, 50],
        color: "#fda632",
      },
      
      {
        name: "IOP",
        data: [35, 25, 20, 55],
        color: "#8b7dfa",
      },
      {
        name: "Pipeline",
        data: [45, 30, 35, 55],
        color: "#3ce9d0",
      },


   
    ],
  };

  return (
    <div class="card card-shadow bg-white rounded-md  grid-margin">
    <div class="cardBody">
        <div class="cardTitle flex items-center flex-wrap">
            <p class="f14 semibold text-uppercase text-normal mb-4">Task Manager Workload And Standard Ratio Analysis</p>
        </div>
        <div className='mt-4'>
            <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
   </div>
 </div>
  );
};

export default WorkloadAndStandardRatio;
