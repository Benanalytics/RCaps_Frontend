import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    type: "line",
    height: "320",
    backgroundColor:'#ffffff',
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: ["Q1", "Q2", "Q3", "Q4"],
    title: {
      enabled: false,
      text: "",
    },
  },
  yAxis: [
    {
      title: {
        text: "",
      },
      labels: {
        enabled: true,
      },
    },
  ],
  legend: {
    enabled: false,
  },
  plotOptions: {
    spline: {
      marker: {
        enable: false,
      },
    },
  },
  series: [
    {
      name: "Committed",
      data: [95, 100, 35, 50],
      color: "#7C86FF",
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
          color:'black'
        },
        verticalAlign: 'bottom', // Set the vertical alignment to 'bottom'
        align: 'center' // Set the horizontal alignment to 'center'
      }
    },
    {
      name: "Available",
      data: [92, 90, 170, 160],
      color: "#4BE7CF",
      marker: {
        enabled: false,
      },
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
          color:'black'
        },
        verticalAlign: 'bottom', // Set the vertical alignment to 'bottom'
        align: 'center' // Set the horizontal alignment to 'center'
      }
    },
  ],
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
       x:16,
       y:-16,
      },
    },
  },
  legend: {
    align: "center",
    verticalAlign: "bottom",
    borderWidth: 0,
    enabled: true,
  },
};

const Quartlybudget = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default Quartlybudget;
