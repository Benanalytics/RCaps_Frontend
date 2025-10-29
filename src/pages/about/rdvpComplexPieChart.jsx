import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const colors = ["#a4cee8", "#5f4bf4", "#f9b24b", "#f25930"];

const options = {
  chart: {
    type: "bubble",

    polar: true,
    height: 300,
  },
  title: {
    text: "", 
    style: {
      color: "#333333",
      fontSize: "18px",
    },
  },

  colorAxis: {
    min: 0,
    max: 12,
    stops: [
      [0, colors[0]],
      [1 / 3, colors[1]],
      [2 / 3, colors[2]],
      [1, colors[3]],
    ],
  },
  xAxis: {
    tickInterval: 1,
    min: 0,
    max: 30,
    gridLineWidth: 0,
    labels: {
      enabled: false,
    },
    lineWidth: 0,
  },

  legend: {
    enabled: false,
  },
  pane: {
    innerSize: "32%",
    size: "95%",
    background: [
      {
        backgroundColor: "#b6b8ba",
        borderWidth: 0,
      },
      {
        backgroundColor: "#fff",
        borderWidth: 16,
        borderColor: "#f0672f",
        outerRadius: "96%",
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
        theme: {
          fill: "#ffffff",
        },
        x: 16,
        y: -16,
      },
    },
  },

  series: [
    {

      maxSize: 14,
      minSize: 3,
    },
    {
      type: "pie",
      name: "",
      dataLabels: [
        {
          enabled: true,
          style: {
            fontSize: "1.2em",
            textOutline: "none",
            opacity: 0.9,
            color: "Black",
            textOutline: 'none',
          },
          distance: 30,
       
        },
        {
          enabled: true,
          distance: -25,
          format: "{point.percentage:.1f}%",
          style: {
            fontSize: "1em",
            textOutline: "none",
            opacity: 0.9,
            color: "Black",
            textOutline: 'none',
          },
          filter: {
            operator: ">",
            property: "percentage",
            value: 10,
          },
        },
      ],
      size: "85%",
      innerSize: "48%",
      zIndex: -1,

      data: [
        {
          y: 32,
          name: "Country Offices",
          color: " #5f4bf4",
          custom: {
            minDate: 1990,
            maxDate: 2000,
          },
        },
        {
          y: 37,
          name: "Non Presence",
          color: "#f9b24b",
          custom: {
            minDate: 2000,
            maxDate: 2010,
          },
        },
        {
          y: 120,
          name: "liasion Offices",
          color: " #f25930",
          custom: {
            minDate: 2010,
            maxDate: 2020,
          },
        },
        {
          y: 54,
          name: "Regional Hub",
          color: " #a4cee8",
          custom: {
            minDate: 2020,
            maxDate: 2030,
          },
        },
      ],
    },
  ],

  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 500,
        },
        chartOptions: {
          pane: {
            innerSize: "77%",
          },
          series: [
            {
              maxSize: 12,
            },
            {
              size: "45%",
            },
          ],
        },
      },
    ],
  },
};

const RdvpComplexPieChart = () => {
  return (
    <div className=" ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default RdvpComplexPieChart;
