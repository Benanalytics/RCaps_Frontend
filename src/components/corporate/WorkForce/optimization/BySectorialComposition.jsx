import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState } from "react";

const options = {
  chart: {
    type: "bar",
    height: 380,
  },
  title: {
    text: "",
    align: "left",
  },
  xAxis: {
    categories: [
      "Communications",
      "Urban Development",
      "Finance & Industry",
      "Multi-sector & Govt",
      "Power",
      "Agriculture",
      "Enviornment",
      "Social",
      "Transport",
    ],
    gridLineWidth: 0,
    lineWidth: 0,
  },
  yAxis: {
    min: 0,
    max: 1000,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: false,
    },
    tickPositions: [0, 300, 600, 900, 1200, 1500],
    labels: {
      enabled: true,
      format: '{value}',
    },
  },

  legend: {
    enabled: true,
    reversed: true,
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0,
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
  plotOptions: {
    series: {
      stacking: "normal",
      pointWidth: 22,
      dataLabels: {
        enabled: true,
        style: {
          textOutline: "none",
        },
      },
      groupPadding: 0.33,
      pointPadding: 1,
    },
  },
  colors: [ "#bcffdf","#e8baba",],
  series: [

    {
      name: "Decentralized",
      data: [460, 445, 100, 546, 200, 510,161,230,120],
    },
    {
      name: "Centralized",
      data: [143, 81, 200, 198, 378, 300,742,191,150],
    },
   
  ],
};

const BySectorialComposition = () => {
 

  return (
   
    <div className="mt-4">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    
  );
};

export default BySectorialComposition ;
