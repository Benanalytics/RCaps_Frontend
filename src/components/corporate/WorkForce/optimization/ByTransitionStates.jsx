import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useState } from "react";

const options = {
  chart: {
    type: "bar",
    height: '290',
    backgroundColor:'#ffffff',
  },
  title: {
    text: "",
    align: "left",
  },
  xAxis: {
    categories: [
      "Non-Transition State",
      "Transition State",
    
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
   
    tickPositions: [0, 20, 40, 60, 80, 100],
    stackLabels: {
      enabled: true,
    },
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
        enabled: false,
     
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
      pointWidth: 25,
      dataLabels: {
        enabled: true,
        align: "right",  // You can try "left" or "right" based on your preference
        inside: true,
        verticalAlign: "center",  // You can try "top" or "middle" based on your preference
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
      groupPadding: 0.33,
      pointPadding: 1,
    },
  },
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  colors: [ "#bcffdf","#e8baba",],
  series: [

    {
      name: "Decentralized",
      data: [40, 60],
    },
    {
      name: "Centralized",
      data: [30, 30],
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
