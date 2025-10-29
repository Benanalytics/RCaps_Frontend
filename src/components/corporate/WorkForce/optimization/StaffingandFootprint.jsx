import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
    height: 400,
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: ["RDGC", "RDGE", "RDGN", "RDGS", "RDGW", "RDNG"],
    lineWidth: 0,
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: "",
    },
    stackLabels: {
      enabled: false,
    },
    tickPositions: [0, 50, 100, 150, 200, 250],
  },
  plotOptions: {
    column: {
      pointWidth: 40,
      stacking: "normal",
      dataLabels: {
        enabled: true,
        style: {
          textOutline: "none",
        },
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
  legend: {
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0,
    enabled: true,
  },

  series: [
    {
      name: "Projected Additional Staff",
      data: [30, 23, 10, 27, 20, 20],
      color: "#8b7dfa",
    },
    {
      name: "Current Staff",
      data: [124, 205, 129, 206, 209, 44],
      color: "#3ce9d0",
    },
  ],



};

const StaffingandFootprint = () => {
  return (
    <div className="mt-4">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
  );
};

export default StaffingandFootprint;
