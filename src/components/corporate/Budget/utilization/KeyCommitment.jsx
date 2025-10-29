import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
 
const KeyCommitment = () => {
  const options = {
    chart: {
      type: "column",
      height:'390',
      backgroundColor: '#ffffff',
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: [
        "Consultancy",
        "Mission",
        "Meetings Bank Business",
        "Internal Capacity Building",
        "Tranings",
      ],
      labels: {
       
        rotation: 0,
        staggerLines: 1, 
      },
    },
    yAxis: [
      {
        title: {
          text: "",
        },
        tickPositions: [0, 200, 400, 600,800, 1000],
       
      },
      {
        title: {
          text: "",
        },
        opposite: true,
        tickPositions: [0, 0.2, 0.4, 0.6, 0.8, 1],
        labels: {
          formatter: function () {
            return (this.value) + '%';
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
        pointWidth:22,
        // pointPadding: 0.1,
         borderWidth: 0,
        dataLabels: {
          enabled: true,
          style: {
            textOutline: 'none',
            color:'black'
          },
        },
      },
    },
    series: [
      {
        name: "Budget",
        data: [670, 780, 750,800],
        // color:'#04F5D1'
        color: "#3ce9d0",
      },
      {
        name: "Available",
        data: [480, 610, 540,650,590],
        // color:'#504DE5'
        color: "#8b7dfa",
      },

      {
        name: "Commited",
        data: [670, 780, 750,800,300],
        // color:'#04F5D1'
        color: "#fda632",
      },
      {
        name: "Available",
        data: [480, 610, 540,650,500],
        // color:'#504DE5'
        color: "#aeb0c5",
      },
      {
        name: "Utillization Rate",
        data: [250,10,480 ,900,350],
        color: "#4b5a8e",
        type:"line",
        marker:{
            enabled:false,
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
 
export default KeyCommitment;