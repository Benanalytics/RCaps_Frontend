import React, {useState, useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const HoursByMonthMap = ({}) => {
  
  useEffect(() => {
    (async () => {
      const topologyResponse = await fetch(
        "https://code.highcharts.com/mapdata/custom/africa.topo.json"
      );
      const topology = await topologyResponse.json();
      const mapData = [
        ["ng", 1],
        ["tn", 2],
        ["dz", 3],
        ["ly", 4],
        ["eh", 5],
        ["mr", 6],
        ["ma", 7],
        ["eg", 8],
        ["ne", 9],
        ["ml", 10],
        ["sn", 11],
        ["gn", 12],
        ["gw", 13],
        ["bf", 14],
        ["gh", 15],
        ["sl", 16],
        ["tg", 17],
        ["bj", 18],
        ["ci", 19],
        ["lr", 20],
        ["za", 21],
        ["na", 22],
        ["bw", 23],
        ["ls", 24],
        ["sz", 25],
        ["mz", 26],
        ["zw", 27],
        ["zm", 28],
        ["ao", 29],
        ["mw", 30],
        ["mg", 31],
        ["td", 32],
        ["cm", 33],
        ["cf", 34],
        ["gq", 35],
        ["ga", 36],
        ["cg", 37],
        ["cd", 38],
        ["sd", 39],
        ["er", 40],
        ["dj", 41],
        ["et", 42],
        ["ss", 43],
        ["ug", 44],
        ["bi", 45],
        ["tz", 46],
        ["ke", 47],
        ["so", 48],
        ["sx", 49],
      ];
      
      
     

      Highcharts.mapChart("map-container", {
        chart: {
           map: topology,
          height:600,
        },
        title: {
          text: "",
        },
        tooltip: {
          enabled: true,
          formatter: function () {
            return '<b>' +  this.point.name;
          },
        },
        mapNavigation: {
          enabled: true,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },
        plotOptions: {
          mapbubble: {
            keys: ["id","url", "lat", "lon", "name","z"],
            events:{
              click:function(e){
                  var url = e.point.url;
                  
                  window.open(url);
              }
          },
      
            dataLabels: {
              enabled: true,
              formatter: function () {
                return '<b>' +  this.point.name ;
              },
              color:'black',
              style: {
                textOutline: 'none',
              },
             
            },
          },
        },
        series: [
          {
            name: "",
            borderColor: "#A0A0A0",
            showInLegend: false,
            accessibility: {
              enabled: false,
            },
            enableMouseTracking: false
          },
          {
            name: "",
            type: "mapbubble",
            data: [
            {
                id: "cd",
                url: 'http://www.google.com',
                z: 16,
                name: `${16} Staff`,
                lat: 2.56,
                lon: 20.2,
            },
            {
                id: "ng",
                url: 'https://en.wikipedia.org',
                z: 48,
                name: `${48} Staff`,
                lat: 9,
                lon: 8.01,
            },
            {
              id: "bf",
              url: 'https://www.highcharts.com',
              z: 33,
              name: `${33} Staff`,
              lat: 13.31,
              lon: -4.59,
          },
          { 
              id: "dz",
              url: 'https://www.w3schools.com',
              z: 10,
              name: `${10} Staff`,
              lat: 28.05,
              lon: 10.24,
          },
          {
              id: "et",
              url: 'https://mui.com',
              z: 6,
              name: `${6} Staff`,
              lat: 9.15,
              lon: 36.74,
          },
          {
            id: "za",
            url: 'https://www.npmjs.com',
            z: 19,
            name: `${19} Staff`,
            lat: -20.74,
            lon: 25.19,
        },
       ],
            
            nullColor: "#707070",
            showInLegend: false,
            enableMouseTracking: true, 
            accessibility: {
              enabled: false,
            },
          },
        ],
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
        legend: {
          enabled: false,
        },
      });
      
    })();
  }, );

  return (
    <div>
      <div id="map-container"></div>
    </div>
  );
};

export default HoursByMonthMap;
