import React, { useEffect } from "react";
import Highcharts from "highcharts";

function WorkLoadPESDAHAI() {
  useEffect(() => {
    Highcharts.chart("container", {
      chart: {
        type: "scatter",
        // margin: [70, 50, 60, 80],
        backgroundColor:'#ffffff',
        height: 400,
      },
      title: {
        text: "",
        align: "left",
        style: {
          fontWeight: "bold",
          fontSize: "18px",
        },
      },
      subtitle: {
        text: "Standard WorkLoad Ratio : 3 Operations Per Task Managers",
        align: "center",
        style: {
          fontSize: "11px",
          color: "#83aedc",
        },
      },
      accessibility: {
        announceNewData: {
          enabled: true,
        },
      },
      xAxis: {
        gridLineWidth: 1,
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60,
        tickInterval: 0.5,
        min: 1.5,
        max: 6,
        plotLines: [
          {
            value: 3,
            width: 2,
            color: "skyblue",
            zIndex: 4,
          },
        ],
        title: {
          text: "Number of operation per task manager",
          rotation: 0,
          align: "right",
          x: -40,
        },
      },
      yAxis: {
        title: {
          text: "Median (Size of the operation in UA m)",
        },
        minPadding: 0.2,
        maxPadding: 0.2,
        maxZoom: 60,
        plotLines: [
          {
            value: 50,
            width: 2,
            zIndex: 10,
          },
        ],
        tickInterval: 5,
        min: 0,
        max: 50,
      },
      legend: {
        enabled: false,
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
      plotOptions: {
        series: {
          stickyTracking: true,
          lineWidth: 3,
          point: {},
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            verticalAlign: "bottom",
            y: 7,
          },
        },
        scatter: {
          cursor: "move",
          marker: {
            enabled: true,
            symbol: "circle",
            radius: 15,
            lineColor: "#526dc0",
            lineWidth: 2,
          },
        },
      },

      series: [
        {
          data: [{ x: 2, y: 5, name: "PITD" }],

          color: "#526dc0",
          marker: {
            symbol: "circle",
            radius: 1,

            dataLabels: {
              enabled: true,
              format: "{point.name}",
              verticalAlign: "bottom",
              y: 7,
            },
          },
        },

        {
          data: [
            {
              x: 2,
              y: 5,
              name: "PITD",
            },
            {
              x: 2.6,
              y: 10,
              name: "AHFR",
            },
            {
              x: 2.9,
              y: 7,
              name: "AHHD",
            },
            {
              x: 3.4,
              y: 4,
              name: "PERN",
            },
          ],
          color: "#b2e35e",
          type: "",
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 2,
            },
          },
          marker: {
            enabled: true,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            verticalAlign: "bottom",
            y: 7,
            style: {
              color: "white",
            },
          },
        },

        {
          data: [
            {
              x: 2.4,
              y: 22,
              name: "PESR",
            },
            {
              x: 2.8,
              y: 23,
              name: "PIFD",
            },
            {
              x: 3.7,
              y: 16,
              name: "AHWS",
            },
          ],
          color: "#fbe080",
          type: "",
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 2,
            },
          },
          marker: {
            enabled: true,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            verticalAlign: "bottom",
            y: 7,
            style: {
              color: "white",
            },
          },
        },

        {
          data: [{ x: 4.1, y: 44, name: "PICU" }],

          color: "#C0C0C0",
          type: "",
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 2,
            },
          },
          marker: {
            enabled: true,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            verticalAlign: "bottom",
            y: 7,
            style: {
              color: "white",
            },
          },
        },
        {
          data: [
            {
              x: 5,
              y: 25,
              name: "PESD",
            },
            {
              x: 5.5,
              y: 13,
              name: "AHAI",
            },
          ],
          color: "red",
          type: "",
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 2,
            },
          },
          marker: {
            enabled: true,
          },
          dataLabels: {
            enabled: true,
            format: "{point.name}",
            verticalAlign: "bottom",
            y: 7,
            style: {
              color: "white",
            },
          },
        },

        {
          type: "scatter",
          data: [
            { x: 0, y: 0 },
            { x: 0, y: 0 },
          ],
          marker: {
            enabled: true,
            radius: 90,
            fillColor: "transparent",
            lineColor: "black",
            lineWidth: 0,
          },
          enableMouseTracking: true,
          clip: true,
        },
      ],
    });
  }, []);

  return <div id="container" />;


}

export default WorkLoadPESDAHAI;
