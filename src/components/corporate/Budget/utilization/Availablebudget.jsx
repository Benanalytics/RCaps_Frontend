// import React from "react";
// import Highcharts from "highcharts";
// import HighchartsReact from "highcharts-react-official";

// const LollipopChart = () => {
//   const options = {
//     chart: {
//       type: "column",
//       height: 200,
//       backgroundColor: '',
//     },
//     title: {
//       text: "",
//     },
//     plotOptions: {
//       column: {
//         pointWidth: 1,
//         borderWidth: 0.33,
//         color: "#7C86FF",
//       },
//     },
//     xAxis: {
//         categories: ['PIVP', 'PEVP', 'AHVP', 'RDVP','EVVP', 'SNVP'],
//         labels: {
       
//           rotation: 0, // Set rotation angle (in degrees)
//           staggerLines: 1, // Stagger lines to avoid overlapping
//         },
//        // reversed: false,
//         title: {
//             enabled: false,
//             text: ''
//         },
//        // labels: {
//             // format: '{value} km'
//       //  },
//        // maxPadding: 0.05,
//        // showLastLabel: true
//     },
//     yAxis: [{
//         title: {
//             text: ''
//         },
//         labels: {
//             enabled: true,
//             formatter: function () {
//                 // Divide the value by 1 million and display without 'M'
//                 return this.value / 1000000;
//             }
//         }
//     }],

//     series: [
//       {
//         name: "Population",
//         type: "column",
//         data: [
//           { name: "PIVP", y: 1444216107 },
//           { name: "PEVP", y: 1393409038 },
//           { name: "AHVP", y: 332915073 },
//           { name: "RDVP", y: 276361783 },
//           { name: "EVVP", y: 225199937 },
//           { name: "SNVP", y: 213993437 },
//           // { name: 'Nigeria', y: 211400708 },
//           // { name: 'Bangladesh', y: 166303498 },
//           // { name: 'Russia', y: 145912025 },
//           // { name: 'Mexico', y: 130262216 },
//         ],
//       },

//       {
//         name: "Markers",
//         type: "scatter",
//         data: [
//           { name: "PIVP", y: 1444216107 },
//           { name: "PEVP", y: 1393409038 },
//           { name: "AHVP", y: 332915073 },
//           { name: "RDVP", y: 276361783 },
//           { name: "EVVP", y: 225199937 },
//           { name: "SNVP", y: 213993437 },
//           // { name: 'Nigeria', y: 211400708 },
//           // { name: 'Bangladesh', y: 166303498 },
//           // { name: 'Russia', y: 145912025 },
//           // { name: 'Mexico', y: 130262216 },
//         ],
//         marker: {
//           symbol: "circle",
//           radius: 6,
//           fillColor: "blue",
//           lineWidth: 1,
//           // lineColor: 'Highcharts.getOptions().colors[0]', // Match the column color
//         },
//       },
//     ],
//     exporting: {
//       enabled: true,
//       buttons: {
//         contextButton: {
//           symbol:'menuball',
//           symbolSize:'10',
//           symbolFill:'#666666',
//           text:'',
//           symbolStrokeWidth:'1',
//           menuItems: [
//             'viewFullscreen',
//             'printChart',
//             'downloadPNG',
//             'downloadJPEG',
//             'downloadPDF',
//             'downloadSVG',
//             'downloadCSV',
//             'downloadXLS',
//             'viewData',
//           ],
//          x:16,
//          y:-16,
//         },
//       },
//     },
//     legend: {
//       align: "center",
//       verticalAlign: "bottom",
//       borderWidth: 0,
//       enabled: false,
//     },
//   };

//   return (
//     <div className="mt-4">
//         <HighchartsReact highcharts={Highcharts} options={options} />
//       </div>
//   );
// };

// export default LollipopChart;


import React from "react";
import * as Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsLollipop from "highcharts/modules/lollipop"; // Import the correct module
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official"; // Import HighchartsReact

// Initialize the required Highcharts modules
HighchartsSankey(Highcharts);
HighchartsLollipop(Highcharts);
HighchartsExporting(Highcharts);

const Availablebudget = () => {
  const options = {
    chart: {
      type: 'column',
      height:300,
  },

 

  legend: {
      enabled: false
  },

  subtitle: {
      text: ''
  },

  title: {
      text: ''
  },

  tooltip: {
      shared: true
  },

  xAxis: {
            categories: ['PIVP', 'PEVP', 'AHVP', 'RDVP','EVVP', 'SNVP'],
            labels: {
           
              rotation: 0, // Set rotation angle (in degrees)
              staggerLines: 1, // Stagger lines to avoid overlapping
            },
           // reversed: false,
            title: {
                enabled: false,
                text: ''
            },
           // labels: {
                // format: '{value} km'
          //  },
           // maxPadding: 0.05,
           // showLastLabel: true
        },

        yAxis: [{
                  title: {
                      text: ''
                  },
                  labels: {
                      enabled: true,
                     
                  }
              }],


    

  exporting: {
    enabled: false,
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
        x:-10,
        y:0,
        width:20,
        theme:{
         fill:'#F4F7FF',
        },
      },
     
    },
  },
  plotOptions: {
    series: {
      colorByPoint: true,
     
      dataLabels: {
        enabled: false,
        verticalAlign: 'center',
     
        style: {
          textOutline: 'none',
        },
        // formatter: function () {
        //   return this.y + '%';
        // },
      },
    },
  },
  colors: ['#7C86FF'], 
  series: [
    {
      name: '',
      data: [
        1100, 900,1200,600,1400,700], 
    },
  ],

  };

  return (
    <div className="cardBody backgroundColor:'',">
      <div className="mt-4">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default Availablebudget;
