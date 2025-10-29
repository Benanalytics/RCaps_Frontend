import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const DistributionComplex = () => {
  const options = {
    chart: {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false,
      type: "pie",
      height: "270",
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
      align: "left",
    },
    subtitle: {
      useHTML: true,
      text: `<div class='flex items-center justify-center flex-col'>
                    <h4 class='text-bold text-black f25 semibold'>1,226</h4>
                  
              </div>`,
      floating: true,
      verticalAlign: "middle",
      y: -10,
    },
    tooltip: {
      pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
    },
    accessibility: {
      point: {
        valueSuffix: "%",
      },
    },
    plotOptions: {
      pie: {
        allowPointSelect: false,
        cursor: "pointer",

        dataLabels: {
            enabled: true,
            format: '{point.percentage:.1f}%',
            distance: -12, 
            style: {
              textOutline: 'none',
              color:'black'
            },
          formatter: function () {
            return (
              "<b>" +
              this.point.name +
              ":</b> " +
              this.percentage.toFixed(1) +
              "%"
            );
          },
        },
        borderRadius: 0,
        showInLegend: true,
        innerSize: "70%", // Adjust this value for the size of the blank space in the center
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
        name: "Optimizing Selectivity",
        colorByPoint: true,
        data: [
          {
            name: "Projected Managed By Non TMs",
            y: 70,
            sliced: false,
            selected: true,
            color: "#ebebeb",
          },
          {
            name: "Projected Managed By Non TMs",
            y: 12.82,
            color: "#8b7dfa",
          },
        ],
      },
    ],
  };

  return (
    <div className="mt-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default DistributionComplex;
