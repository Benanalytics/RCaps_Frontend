import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const LandingApproval = () => {

    const options = {
        chart: {
         // type: 'column',
         zoomType: 'xy',
          height:'80',
          backgroundColor:'',
          // width:'200',
        },
        title: {
          text: '',
          align: 'left',
        },
        xAxis: {
            categories: [
            ],
            lineWidth: 0,
            gridLineWidth: 0,
            labels: {
                enabled: false,
              },
          },
        yAxis: {
          title: {
            text:null,
          },
          labels: {
            enabled: false,
          },
          stackLabels: {
            enabled: false,
          },
          lineWidth: 0,
          gridLineWidth: 0,
        },
        legend: {
            enabled: false
        },
        plotOptions: {
          column: {
            pointWidth: 10,
            stacking: 'normal',
            dataLabels: {
              enabled: false,
            },
          },
        },
        exporting: {
          enabled: false, // This enables the exporting options
          buttons: {
            contextButton: {
              menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"],
            },
          },
        },
        colors: ['#7c86ff'],
        series: [
          {
            name: 'UA 572.1 mn YTD Approvals',
            type: 'column',
            data: [['April',70], ['May',90],['June',50],['July',60],['August',60],['September',90],['October',85],['November',60],['December',20],['January',30],['February',45],['March',70]],
          },
          {
            name: 'Average',
            type: 'spline',
            data: [['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40],['April-March',40]],
            marker: {
                enabled: false
            },
            dashStyle: 'shortdot',
             color: 'blue',
        }
        ],
      };



  return (
      <HighchartsReact highcharts={Highcharts} options={options} />

  );
};

export default LandingApproval;
