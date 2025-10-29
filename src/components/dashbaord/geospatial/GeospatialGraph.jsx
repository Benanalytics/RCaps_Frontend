import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const GeospatialGraph = ({
  pipelineData,
  iopData,
  portfolioData,
  lendingData,
}) => {
  const combinedDataArray = [pipelineData, iopData, portfolioData, lendingData];
  const seovereignArray = combinedDataArray.map((item) => item.sovereignUaMillion);
  const nonSeovereignArray = combinedDataArray.map(
    (item) => item.non_SovereignUaMillion
  );

  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["Pipeline", "IOP", "Portfolio", "Lending"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      // tickPositions: [0, 20, 40, 60, 80, 100],
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
        formatter: function () {
          //return Highcharts.numberFormat(this.total, 0);
          //let formattedValue =this.total>0?this.total  % 1 === 0 ?this.total.toFixed(0):this.total.toFixed(1):0;
          let formattedValue=this.total.toLocaleString();
          return `<b>${formattedValue}</b>`;
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
        pointWidth: 80,
        stacking: "normal",
        dataLabels: {
          enabled: true,
          align: "center",
          inside: true,
          verticalAlign: "bottom",
          formatter: function () {
            let formattedValue = this.y.toLocaleString();
            var percentage = (this.y / this.point.stackTotal) * 100;
            const roundedPercentage = percentage  % 1 === 0 ?percentage.toFixed(0):percentage.toFixed(1);
              // Convert rounded percentage to string and remove trailing zero if exists
              const formattedPercentage = roundedPercentage.toString().replace(/\.0$/, '');
            return (
              '<div style="text-align:center;">' +
              formattedValue +
              "<br>(" +
              formattedPercentage +
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
          symbol: "menuball",
          symbolSize: "10",
          symbolFill: "#666666",
          text: "",
          symbolStrokeWidth: "1",
          menuItems: [
            "viewFullscreen",
            "printChart",
            "downloadPNG",
            "downloadJPEG",
            "downloadPDF",
            "downloadSVG",
            "downloadCSV",
            "downloadXLS",
            "viewData",
          ],
          x: 16,
          y: -16,
        },
      },
    },
    series: [
      {
        name: "Seovereign",
        data: seovereignArray,
        color: "#7c86ff",
      },
      {
        name: "Non-Seovereign",
        data: nonSeovereignArray,
        color: "#4be7cf",
      },
    ],
  };

  return (
    <div className="mt-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default GeospatialGraph;
