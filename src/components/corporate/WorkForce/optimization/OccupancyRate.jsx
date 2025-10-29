import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "column",
    height: 380,
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
      enabled: true,
    },
    tickPositions: [0, 100, 200, 300, 400, 500, 600, 700],
  },
  plotOptions: {
    column: {
      pointWidth: 40,
      stacking: "normal",
      dataLabels: {
        enabled: false,
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
    enabled: false,
  },

  series: [
    {
      name: "NON",
      data: [217, 321, 523, 679, 251, 112],
      color: "#3ce9d0",
      
    },
   
  ],
};

const OccupancyRate = () => {
  return (
    <div className="mt-4">
       <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
  );
};

export default OccupancyRate;
