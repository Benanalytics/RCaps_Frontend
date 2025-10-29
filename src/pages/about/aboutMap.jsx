import React, { useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const AboutMap = () => {
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

      Highcharts.mapChart("map-containers", {
        chart: {
          map: topology,
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
            backgroundColor: "#fffbfb", // Light pink background color
            itemMarginBottom: 15,
            // x: 11,
          },
        tooltip: {
          formatter: function () {
            return this.point.name; // Display the name of the point
          }
        },
        series: [
          {
            name: "",
            borderColor: "#A0A0A0",
            // nullColor: "rgba(200, 200, 200, 0.3)",
            showInLegend: false,
          },
          {
            name: "Separators",
            type: "mapline",
            nullColor: "#707070",
            showInLegend: false,
            enableMouseTracking: false,
            accessibility: {
              enabled: false,
            },
          },

          {
            // Specify points using lat/lon
            type: "mappoint",
            name: "Liaison Offices",
            marker: {
              symbol: "circle",
            },
            accessibility: {
              point: {
                valueDescriptionFormat: "{xDescription}.",
              },
            },
            dataLabels: {
              enabled: false,
            },
            color: "#00B0F0",
            data: [
              {
                name: "Liaison Offices1",
                lat: 31.286389,
                lon: 16.817223,
              },
              {
                name: "Liaison Offices2",
                lat: 23.286389,
                lon: 7.817223,
              },

              {
                name: "Liaison Offices3",
                lat: 12.286389,
                lon: 3.817223,
              },
              {
                name: "Liaison Offices4",
                lat: 27.286389,
                lon: 11.817223,
              },

              {
                name: "Liaison Offices5",
                lat: 21.286389,
                lon: 26.817223,
              },
              {
                name: "Liaison Offices6",
                lat: 16.286389,
                lon: 27.817223,
              },

              {
                name: "Liaison Offices7",
                lat: 8.286389,
                lon: 36.817223,
              },
              {
                name: "Liaison Offices8",
                lat: 27.286389,
                lon: 26.817223,
              },
            ],
          },

          {
            // Specify points using lat/lon
            type: "mappoint",
            name: "Country Offices",
            color: "#00B0F0",
            marker: {
              symbol: "circle",
            },
            dataLabels: {
              enabled: false,
            },
            accessibility: {
              point: {
                valueDescriptionFormat: "{xDescription}.",
              },
            },
            color: Highcharts.getOptions().colors[1],
            data: [
              {
                name: "Country Offices1",
                lat: -16.286389,
                lon: 26.817223,
              },
              {
                name: "Country Offices2",
                lat: -3.286389,
                lon: 27.817223,
              },

              {
                name: "Country Offices3",
                lat: -8.286389,
                lon: 36.817223,
              },
              {
                name: "Country Offices4",
                lat: -13.286389,
                lon: 17.817223,
              },

              {
                name: "Country Offices5",
                lat: -29.286389,
                lon: 18.817223,
              },
              {
                name: "Country Offices6",
                lat: -30.286389,
                lon: 20.817223,
              },

              {
                name: "Country Offices7",
                lat: 12.286389,
                lon: 36.817223,
              },
              {
                name: "Country Offices8",
                lat: 13.286389,
                lon: 37.817223,
              },
            ],
          },

          {
            // Specify points using lat/lon
            type: "mappoint",
            name: "Regional Hub",
            color: "#FFC000",
            marker: {
              symbol: "circle",
            },
            dataLabels: {
              enabled: false,
            },
            accessibility: {
              point: {
                valueDescriptionFormat: "{xDescription}.",
              },
            },
          
            data: [
              {
                name: "Regional Hub1",
                lat: 6.286389,
                lon: 19.817223,
              },
              {
                name: "Regional Hub2",
                lat: 9.286389,
                lon: 17.817223,
              },

              {
                name: "Regional Hub3",
                lat: 11.286389,
                lon: 12.817223,
              },

              {
                name: "Regional Hub3",
                lat: 16.286389,
                lon: 12.817223,
              },

              {
                name: "Regional Hub4",
                lat: 21.286389,
                lon: 12.817223,
              },

              {
                name: "Regional Hub5",
                lat: 3.286389,
                lon: 19.817223,
              },

              {
                name: "Regional Hub6",
                lat: 15.286389,
                lon: 19.817223,
              },
            ],
          },


          {
            // Specify points using lat/lon
            type: "mappoint",
            name: "Headquaters",
            color: "#FF0000",
            marker: {
              symbol: "circle",
            },
            dataLabels: {
              enabled: false,
            },
            accessibility: {
              point: {
                valueDescriptionFormat: "{xDescription}.",
              },
            },
          
            data: [
             

              {
                name: "Headquater8",
                lat: 32.286389,
                lon: -2.817223,
              },

              {
                name: "Headquater9",
                lat: 29.286389,
                lon: -2.817223,
              },

              {
                name: "Headquater10",
                lat: 9.286389,
                lon: -2.817223,
              },

              
              {
                name: "Headquater11",
                lat: 29.286389,
                lon: 12.817223,
              },

              {
                name: "Headquater12",
                lat: 29.286389,
                lon: 10.817223,
              },
            ],
          },

         
        ],
      });
    })();
  }, []);

  return (
    <div>
      <div id="map-containers" style={{ height: "440px", width: "100%" }}></div>
    </div>
  );
};

export default AboutMap;
