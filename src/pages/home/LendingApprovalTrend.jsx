import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const LendingApprovalTrend = ({data}) => {

  const monthOrder = {
    "January": 1,
    "February": 2,
    "March": 3,
    "April": 4,
    "May": 5,
    "June": 6,
    "July": 7,
    "August": 8,
    "September": 9,
    "October": 10,
    "November": 11,
    "December": 12
  };
  
  const weekOrder = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7
  };
  
  data.sort((a, b) => {
    // Check if a.category and b.category are in monthOrder or weekOrder
    if (monthOrder[a.category] && monthOrder[b.category]) {
      return monthOrder[a.category] - monthOrder[b.category];
    } else if (weekOrder[a.category] && weekOrder[b.category]) {
      return weekOrder[a.category] - weekOrder[b.category];
    } else {
      // If not in monthOrder or weekOrder, compare the category values directly
      if (a.category < b.category) return -1;
      if (a.category > b.category) return 1;
      return 0;
    }
  });
  
  
  const options = {
  
    chart: {
      height:330,
      
      backgroundColor: '#f5f7fe',
  },
    title: {
      text: '',
    },
    yAxis: [
      {
        title: {
          text: "",
        },
        // labels: {
        //   formatter: function () {
        //     return (this.value) + '%';
        //   },
        // },
       
      },
    ],
    xAxis: {
      type: 'datetime',
      gridLineWidth: 0, 
      lineWidth: 0,
      tickWidth: 0, 
      categories: data.map(item => item.category),
      labels: {
      
        rotation: 0, // Set rotation angle (in degrees)
        staggerLines: 1, // Stagger lines to avoid overlapping
      },
    },
  
    legend: {
      enabled: false,
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
          theme:{
            fill:'#f5f7fe',
           },
         x:16,
         y:-16,
        },
        
      },
    },
    series: [
      {
        name:"ADB Public",
        data: data.map(item => [item.uaInMillionsAdbPublic]),
        type: 'area',
        threshold: null,
        color:['#6359e8'],
        tooltip: {
          valueDecimals: 1,
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [
              0,
              '#c4c2f8',
            ],
            [
              1,
              Highcharts.color('#c4c2f8')
                .setOpacity(0)
                .get('rgba'),
            ],
          ],
        },
        lineColor: '#6359e8',
        lineWidth: 1,
      },

      {
        name:"ADB Private",
        data: data.map(item => [item.uaInMillionsAdbPrivate]),
        type: 'area',
        threshold: null,
        color:['#6359e8'],
        tooltip: {
          valueDecimals: 1,
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [
              0,
              '#c4c2f8',
            ],
            [
              1,
              Highcharts.color('#c4c2f8')
                .setOpacity(0)
                .get('rgba'),
            ],
          ],
        },
        lineColor: '#6359e8',
        lineWidth: 1,
      },

      {
        name:"ADF Including TSF",
        data: data.map(item => [item.uaInMillionsAdfIncludingTsf]),
        type: 'area',
        threshold: null,
        color:['#6359e8'],
        tooltip: {
          valueDecimals: 1,
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [
              0,
              '#c4c2f8',
            ],
            [
              1,
              Highcharts.color('#c4c2f8')
                .setOpacity(0)
                .get('rgba'),
            ],
          ],
        },
        lineColor: '#6359e8',
        lineWidth: 1,
      },

      {
        name:"Other",
        data: data.map(item => [item.uaInMillionsOthers]),
        type: 'area',
        threshold: null,
        color:['#6359e8'],
        tooltip: {
          valueDecimals: 1,
        },
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },
          stops: [
            [
              0,
              '#c4c2f8',
            ],
            [
              1,
              Highcharts.color('#c4c2f8')
                .setOpacity(0)
                .get('rgba'),
            ],
          ],
        },
        lineColor: '#6359e8',
        lineWidth: 1,
      },
    
    ],
  };

  return (
    <div className="mt-5">
         
      { <HighchartsReact highcharts={Highcharts} options={options} />}
    </div>
  );
};

export default LendingApprovalTrend;
