
import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const Finacingwindow = () => {
  const options = {
    chart: {
      type: "column",
      inverted:true,
      polar:true,
    },

pane:{
  size:'80%',
  innersize:'20%',
  endAngle:270,


},

    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      tickInterval: 1,
      labels: {
          align: 'right',
          useHTML: true,
          allowOverlap: true,
          step: 1,
          y: 3,
          style: {
              fontSize: '13px'
          }
      },
      tickPositions: [0, 25, 50, 75, 100, 125, 150],
      lineWidth: 0,
      gridLineWidth: 0,
     
      labels:{
        enabled:false,
      }
  },
  yAxis: {
    lineWidth: 0,
    tickInterval: 25,
    reversedStacks: false,
    endOnTick: true,
    showLastLabel: true,
    gridLineWidth: 0
},
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
          stacking: 'normal',
          borderWidth: 0,
          pointPadding: 0,
          groupPadding: 0.15,
          borderRadius: '50%'
      }
  },
  series: [{
      name: 'Centralized',
      data: [148, 113, 104, 71, 77],
      color: "#e8baba",
  }, {
      name: 'Decentralized',
      data: [113, 122, 98, 88, 72],
      color: "#bcffdf",
  },]
  };

  return (
    <div className="">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default Finacingwindow;
