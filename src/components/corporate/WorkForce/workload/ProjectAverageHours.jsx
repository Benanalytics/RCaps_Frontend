import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
 
const ProjectAverageHours = () => {
  const options = {
    chart: {
        zoomType: "xy",
    },
    title: {
      text: "",
      align:"left"
    },
    subtitle: {
      text: "",
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
         x:16,
         y:-16,
        },
      },
    },
    xAxis: {
      categories: [
        "2021-1",
        "2021-2",
        "2021-3",
        "2021-4",
        "2021-5",
        "2021-6",
        "2021-7",
        "2021-8",
        "2021-9",
        "2021-10",
        "2021-11",
        "2021-12",
      ],
    // crosshair: true,
    },
    yAxis:[
         {
      min: 0,
      title: {
        text: "",
      },
      labels: {
        enabled: true,
     // format: '{value}%'
  },
    },
    {
        title: {
          text: "",
        },
        opposite: true,
        tickPositions: [0, 0.2, 0.4, 0.6, 0.8, 1], // Right side values
        // gridLineWidth: 0,
        // lineWidth: 0
      },
],
    tooltip: {
      headerFormat: '<span class="f9">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
    },
    legend: {
        enabled: true
    },
    plotOptions: {
      column: {
        pointWidth: 17,
        pointPadding: 0.2,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
      line: {
        lineWidth: 1, // Set the width of the line here
      },
    },
    series: [
      {
        name: "#Work Programme",
        type: "column",
        data: [900,210,810,820,230,50, 750, 400,220, 710, 590, 500],
        color: "#4be7cf",
      },
      {
        name: "Avg Hours Per Project",
        type: "line",
        marker:{
            enabled:false
        },
        data: [300,200,400,200,900,300, 200, 900,650, 350, 900, 900],
        color: "black",
      },
    ],
  };
 
  return (
    <div className="card bg-white rounded-md card-shadow mt-5">
         <p class="f14 semibold text-uppercase text-normal mb-4"> Project &  AVg Hours Per Project By Month</p>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};
 
export default ProjectAverageHours;