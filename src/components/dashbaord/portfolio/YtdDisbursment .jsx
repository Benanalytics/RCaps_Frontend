import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const YtdDisbursment  = ({data}) => {

  let approvalYearsArray = [];
  let adbPublicArray = [];
  let adbPrivateArray = [];
  let adfIncludingTsfArray = [];
  let othersArray = [];

  if(data){
     approvalYearsArray = data?.operationGrowth?.map(item => Math.round(item.approvalYear));
     adbPublicArray = data?.operationGrowth?.map(item => Math.round(item.adbPublic));
     adbPrivateArray = data?.operationGrowth?.map(item => Math.round(item.adbPrivate));
     adfIncludingTsfArray = data?.operationGrowth?.map(item => Math.round(item.adfIncludingTsf));
     othersArray = data?.operationGrowth?.map(item => Math.round(item.others));

  }

  const options = {
    chart: {
      type: "bar",
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
     categories: approvalYearsArray,
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
        y: -15,
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
      series: {
        pointWidth:40,
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
        name: "Other",
       data:othersArray,
        color: "#cec1e1",
      },

      {
        name: "ABD Public",
       data:adbPublicArray,
        color: "#FFD580",
      },
      {
        name: "ABD Private",
       data:adbPrivateArray,
        color: "#4be7cf",
      },
      {
        name: "ADF(including TSF)",
        data:adfIncludingTsfArray,
        color: "#7c86ff",
      },

     
    ],
  };

  return (
    <div className="mt-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default YtdDisbursment ;
