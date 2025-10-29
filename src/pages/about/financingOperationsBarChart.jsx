import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const FinancingOperationsBarChart = () => {
  const options = {
    chart: {
      type: "column",
      height:'380',
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["2016","2017", "2018","2019","2020","2021","2022"],
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
      tickPositions: [0, 1000, 2000, 4000, 6000, 8000],
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
        formatter: function () {
          return Highcharts.numberFormat(this.total, 0);
        },
      },
      labels: {
        enabled: true, // Set this to false to hide y-axis labels
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
        pointWidth:50,
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
         x:16,
         y:-16,
        },
      },
    },
    series: [
     
      {
        name: "NTF",
        data: [18,0,13,4,3,3.6,0],
        color: "#f4c852",
        
      },
    
      {
        name: "ADF (Including TSF)",
        data: [1410, 1257, 1288,1524,1390,1729,2131],
        color: "#E2EAFF",
      },
      {
        name: "ABD Private",
        data: [1918,1707,1656,1539,393,520,1397],
        color: "#C1FFDD",
      },
      {
        name: "ADB Public",
        data: [4395, 2783, 3460,3542,2090,1938,2317],
        color: "#7C86FF",
      },

     
    ],
  };

  return (
    <div className="mt-4">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default FinancingOperationsBarChart;
