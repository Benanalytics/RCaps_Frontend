import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const BySovergionAndNonSovergion = () => {
  const options = {

    chart: {
      type: 'column',
      inverted: true,
      polar: true,
      height: '290',
  },
  title: {
      text: '',
  },
 
  pane: {
      size: '85%',
      innerSize: '20%',
      endAngle: 270
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
              fontSize: '9px'
          }
      },
      lineWidth: 0,
    //  gridLineWidth: 0,
      categories: ["Sovereign", "Non-Sovereign"],
  },
  yAxis: {
      lineWidth: 0,
      tickInterval: 25,
      reversedStacks: false,
      endOnTick: true,
      showLastLabel: true,
    //  gridLineWidth: 0
  },
  plotOptions: {
      column: {
          stacking: 'normal',
          borderWidth: 0,
          pointPadding: 0.2,
          groupPadding: 0.35,
          borderRadius: 0,
          dataLabels:{
                         enabled:true,
                        inside:true,
                      },
      }
  },

  series: [{
          name: 'Centralized',
          data: [148, 113],
          color: "#e8baba",
      }, {
          name: 'Decentralized',
          data: [113, 122],
          color: "#bcffdf",
      },],
    tooltip: {
      headerFormat: '<span class="f9">{point.key}</span><table>',
      pointFormat:
        '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
        '<td style="padding:0"><b>{point.y:.1f}</b></td></tr>',
      footerFormat: "</table>",
      shared: true,
      useHTML: true,
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

  };

  return (
    <div className="">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default BySovergionAndNonSovergion;
