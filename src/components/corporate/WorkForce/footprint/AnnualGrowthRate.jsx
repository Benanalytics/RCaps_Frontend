import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const AnnualGrowthRate = () => {
 
  const options = {
    chart: {
      type: "line",

      backgroundColor: "#ffffff",
      toolbar: {
        show: true,
      },
      zoom: {
        enabled: true,
      },
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: [2019, 2020, 2021, 2022],
      title: {
        // text: 'Year',
        //  align: 'right',
      },
    },
    yAxis: {
      title: {
        text: "Total Growth Rate(%)",
      },
      tickPositions: [-50, 0, 50, 200, 100, 150, 200],
    },
    tooltip: {
      crosshairs: true,
      shared: true,
    },
    navigation: {
      enabled: true,
      buttonOptions: {
        enabled: true,
      },
    },
    plotOptions: {
      series: {
        dataLabels: {
          enabled: true,
          style: {
            textOutline: "none",
            color: "black",
          },
        },
        enableMouseTracking: true,
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
          theme:{
            fill:'white',
           },
          x: 26,
          y: -16,
        },
      },
    },
    colors: ["#7c86ff", "#01C38D", "#ACB1C6"],
    series: [
      {
        name: "PL Staff",
        data: [0, 10, 20, 30],
      },
      {
        name: "LP Staff",
        data: [0, 50, -20, 40],
      },
      {
        name: "GS",
        data: [0, 30, 80, 200],
      },
    ],
  };

  return (
    <div class="card card-shadow bg-white rounded-md grid-margin">
      <div class="cardBody">
        <div class="cardTitle flex items-center flex-wrap items-center justify-between">
          <div class="mb-4">
            <p class="f14 semibold text-uppercase text-normal">
              Staff Total Growth Rate Trends By Category
            </p>
            <p class="f13 semibold text-light text-benGray">
              Annual Growth Rate In Decentralized Office Personal Across Staff
              Levels
            </p>
          </div>
        </div>

        <div className="mt-4">
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default AnnualGrowthRate;
