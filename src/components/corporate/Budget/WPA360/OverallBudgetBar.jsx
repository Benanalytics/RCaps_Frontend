import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
   type: 'column',
    height: 280,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['WP Cat XX', 'WP Cat XX', 'WP Cat XX','WP Cat XX'],
    labels: {
       
      rotation: 0, // Set rotation angle (in degrees)
      staggerLines: 1, // Stagger lines to avoid overlapping
    },
  },
  yAxis: {
    min: 0,
   // max: 100,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
    // labels: {
    //   formatter: function (val) {
    //     return val?.value + '%';
    //   },
    // },
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
  plotOptions: {
    column: {
      pointWidth: 30,
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
      }
      },
    },
  },
  legend: {
    align: 'left',
    reversed: true,
    verticalAlign: 'bottom',
    borderWidth: 0,
  },
  colors: ['#7c86ff','#4be7cf'],
  series: [
    {
      data: [220, 340,100,300],
      name: 'Budget in Low Priority',
    },
    {
      data: [420,240,350,450],
      name: 'Budget in High Priority',
    },
  ],
};



const OverallBudgetBar = () => {
  return (

    <HighchartsReact highcharts={Highcharts} options={options} />

  );
};

export default OverallBudgetBar;