import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const CoreBudget = () => {
  const options = {
    chart: {
      type: "column",
      height:'390',
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["Overhead", "Administration Activities", "Lending & Pipeline", "Portfolio Management","Non-lending","Management Activities"],
      labels: {
       
        rotation: 0, // Set rotation angle (in degrees)
        staggerLines: 1, // Stagger lines to avoid overlapping
      },
    },
    
    yAxis: [
      {
        title: {
          text: "",
        },
        tickPositions: [0, 200, 400,600, 800, 1000],
        // labels: {
        //   formatter: function () {
        //     return (this.value ) + '%';
        //   },
        // },
       
      },
      {
        title: {
          text: "",
        },
        opposite: true,
        tickPositions: [0, 0.2, 0.4, 0.6, 0.8, 1], // Right side values
         labels: {
          formatter: function () {
            return (this.value ) + '%';
          },
        },
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
    plotOptions: {
      column: {
        pointWidth: 37,
        pointPadding: 1,
        borderWidth: 0,
        dataLabels: {
          style: {
            textOutline: 'none',
            color:'black'
          },
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Budget",
        data: [200, 300, 500, 700,200,300], // Use normalized values between 0 and 1
        color: "#4be7cf",
      },
      {
        name: "Available",
        data: [400, 700, 500, 300,800,600], // Use normalized values between 0 and 1
        color: "#7c86ff",
      },
      {
        name: "Utilization",
        data: [0.1, 0.48, 0.9, 0.35,0.8,0.7], // Use normalized values between 0 and 1
        color: "#4b5a8e",
        type: "line",
        marker: {
          enabled: false,
        },
        yAxis: 1, // Use the second y-axis
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
         x:26,
         y:-16,
        },
      },
    },
  };

  return (
    <div className="mt-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default CoreBudget;
