import React, { useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const FinancingOperationMap = () => {
  useEffect(() => {
    (async () => {
      const topologyResponse = await fetch(
        "https://code.highcharts.com/mapdata/custom/africa.topo.json"
      );
      const topology = await topologyResponse.json();

      const generalData = [
        ["ng", 0],
        ["tn", 1],
        ["dz", 2],
        ["ly", 3],
        ["eh", 4],
        ["mr", 5],
        ["ma", 6],
        ["eg", 7],
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

      const headquartersData = [
        { code: "za", value: 1, lat: -30.559482, lon: 22.937506 }, // Example: 1 headquarters in South Africa
        { code: "eg", value: 1, lat: 26.8206, lon: 30.8025 }, // Example: 1 headquarters in Egypt
        // Add more data as needed
      ];

      Highcharts.mapChart("map-containerFinacingOperations", {
        chart: {
          map: topology,
          backgroundColor:'',
        },
        title: {
          text: "",
        },
        mapNavigation: {
          enabled: false,
          enableMouseWheelZoom: false,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },
        colorAxis: {
            dataClasses: [
              {
                name:'',
                to: 0,
                color: "white",
              },
              {
                name:'',
                from: 1,
                to: 7,
                color: "white",
              },
              {
                name:'',
                from: 9,
                to: 20,
                color: "white",
              },
              {
                name:'',
                from: 21,
                to: 31,
                color: "white",
              },
              {
                name:'',
                from: 32,
                to: 38,
                color: "white",
              },
              {
                name:'',
                from: 39,
                to: 49,
                color: "white",
              },
            ],
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
        legend: {
          align: "left",
          verticalAlign: "bottom",
          layout: "vertical",
          itemStyle: {
            fontWeight: "bold",
          },
          x: 10,
        },
        tooltip: {
            formatter: function () {
              return this.point.name; // Display the name of the point
            }
          },
        series: [
          {
            name: "General",
            borderColor: "#A0A0A0",
            backgroundColor: "white",
           data:generalData,
            showInLegend: true,
          },
        //   {
        //     name: "Separators",
        //     type: "mapline",
        //     nullColor: "white",
        //     enableMouseTracking: false,
        //     accessibility: {
        //       enabled: false,
        //     },
        //   },

          {
            // Specify points using lat/lon
            type: "mappoint",
            name: "ADB",
            showInLegend: true,
            marker: {
              symbol: "circle",
              radius: 5
            },
            accessibility: {
              point: {
                valueDescriptionFormat: "{xDescription}.",
              },
            },
            dataLabels: {
              enabled: true,
            },
            color: "#9E3755",
            data: [
              {
                name: "Algeria",
                lat: -1.286389,
                lon: 16.817223,
              },
              {
                name: "Libya",
                lat: 27.286389,
                lon: -7.817223,
              },

              {
                name: "Egypt",
                lat: 26.286389,
                lon: 3.817223,
              },
              {
                name: "Cabo Verde",
                lat: 33.286389,
                lon: 11.817223,
              },

              {
                name: "Nigeria",
                lat: 30.286389,
                lon: 26.817223,
              },
             
            ],
          },

          {
            // Specify points using lat/lon
            type: "mappoint",
            name: "ADF",
            showInLegend: true,
            marker: {
              symbol: "triangle",
              radius: 5
            },
            accessibility: {
              point: {
                valueDescriptionFormat: "{xDescription}.",
              },
            },
            dataLabels: {
              enabled: true,
            },
            color: "#335D65",
            data: [
              {
                name: "Mauritania",
                lat: 11.286389,
                lon: 26.817223,
              },
              {
                name: "Mali",
                lat: -7.286389,
                lon: 37.817223,
              },

              {
                name: "Niger",
                lat: 2.286389,
                lon: 23.817223,
              },
              {
                name: "Chad",
                lat: 13.286389,
                lon: 11.817223,
              },

              {
                name: "Sudan",
                lat: 23.286389,
                lon: 26.817223,
              },
              {
                name: "Eritrea",
                lat: 46.286389,
                lon: 27.817223,
              },

              {
                name: "Ethiopia",
                lat: 52.286389,
                lon: 36.817223,
              },
             
            ],
          },

          {
            // Specify points using lat/lon
            type: "mappoint",
            name: "BLEND",
            showInLegend: true,
            color: "#FF7A41",
            marker: {
              symbol: "square",
              radius: 5
            },
            dataLabels: {
              enabled: true,
            },
            accessibility: {
              point: {
                valueDescriptionFormat: "{xDescription}.",
              },
            },
            // color: Highcharts.getOptions().colors[1],
            data: [
              {
                name: "Zambia",
                lat: 6.286389,
                lon: 36.817223,
              },
              {
                name: "Kenya",
                lat: 3.286389,
                lon: 39.817223,
              },

              {
                name: "Cameroon",
                lat: 2.286389,
                lon: 30.817223,
              },
              {
                name: "Senegal",
                lat: -23.286389,
                lon: 28.817223,
              },

             
            ],
          },
        ],
      });
    })();
  }, []);

  return (
    <div style={{ backgroundColor: "white" }}>
      <div id="map-containerFinacingOperations" style={{ height: "440px", width: "100%" }}></div>
    </div>
  );
};

export default FinancingOperationMap;
