import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    height: 300,
    backgroundColor: '#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'APR 22',
      'OCT 22.',
      'NOV 22',
      'JAN 22',
    ],
    labels: {
      
      rotation: 0, // Set rotation angle (in degrees)
      staggerLines: 1, // Stagger lines to avoid overlapping
    },
  },
  legend: {
    align: 'center',
    verticalAlign: 'bottom',
    borderWidth: 0,
  },
  yAxis: [
    {
      labels: {
        enabled: true,
      },
      title: {
        text: '',
      },
      stackLabels: {
        enabled: true,
      },
     
      tickPositions: [0, 20, 40, 60, 80, 100, 120,140],
      reversed: false,
    },
    {
        title: {
          text: "",
        },
        opposite: true,
        tickPositions: [0, 2, 4, 6, 8, 10, 12,14], // Original values on the right side
        labels: {
          formatter: function () {
            // Convert the original values to percentages
            return (this.value) + "%";
          },
        
        },
      }
      
    
   
  ],
  plotOptions: {
    column: {
      pointWidth: 30,
      stacking: 'normal',
      dataLabels: {
        enabled: false,
       
        style: {
          textOutline: 'none',
      }
      },
    },
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
       x:22,
       y:-18,
      },
    },
  },
  colors: ["#e8baba"],
  series: [
    {
      data: [94, 121, 111, 53],
      name: 'Shortfall Projects Count',
    },

    {
      data: [10,11,9,8 ],
      name: 'Shortfall Percentage',
      type:'line',
      color: '#000000',
      marker: {
        enabled: false,
      },
      yAxis:1,
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
          color:'black'
        },
        formatter: function() {
            // Display the original value followed by a percentage symbol
            return this.y + '%';
          },
      },
    },

  ],


};

const Shortfallcount = () => {
  return (
    
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default Shortfallcount;
