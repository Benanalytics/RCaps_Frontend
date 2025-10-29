import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const EandSRiskCategarization = () => {
  const options = {
    chart: {
      type: "column",
      height: '400',
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["Share Of CAT-1, CAT-2, CAT-3", "Others"],
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
        tickPositions: [0,5,10,15,20,25,30,35,40,45],
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
        tickPositions: [0,10,20,30,40,50,60,70,80,90], // Right side values
         labels: {
        //   formatter: function () {
        //     return (this.value ) + '%';
        //   },
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
        pointWidth: 65,
        pointPadding: -10,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            textOutline: 'none',
            color:'black',
          },
      },
      },
    },
    series: [
     
      {
        name: "Centralized",
        data: [25, 42], // Use normalized values between 0 and 1
        color: "#e8baba",
      },
      {
        name: "Decentralized",
        data: [20, 25], // Use normalized values between 0 and 1
        color: "#bcffdf",
      },
      {
        name: "Target",
        data: [45,45], // Use normalized values between 0 and 1
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
    <div className="">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default EandSRiskCategarization;
