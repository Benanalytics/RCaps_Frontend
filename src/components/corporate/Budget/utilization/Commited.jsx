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

const Commited = () => {
  const options = {
    chart: {
      type: 'lollipop',
      height:120,
      backgroundColor:'',
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
    categories: ['C', 'M'],
      gridLineWidth: 0,
      lineWidth: 0
  },

  yAxis: {
      title: {
          text: ''
      },
      gridLineWidth: 0,
      lineWidth: 0,
      visible:false,
  },

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
  colors: ['#3ce9d0' , '#7C86FF', ], 
  series: [
    {
      name: '',
      data: [
        175.2, 101.9], 
    },
  ],

  };

  return (
    <div className=" ">
      <div className="mt-4">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default Commited;
