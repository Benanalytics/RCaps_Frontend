import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['RDGE', 'RDGC', 'RDGC', 'RDGN', 'RDNG'],
    labels: {
       
      rotation: 0, // Set rotation angle (in degrees)
      staggerLines: 1, // Stagger lines to avoid overlapping
    },
  },
  yAxis: {
    min: 0,
    max: 2500,
    title: {
      text: '', // Set y-axis title
    },
    stackLabels: {
      enabled: true,
    },
    labels: {
      formatter: function () {
        const customLabels = ['0', '500', '1000', '1500', '2000', '2500'];
        return customLabels[this.value / 500]; // Divide by 500 to get the correct index
      },
    },
  },
  plotOptions: {
    column: {
      pointWidth: 55,
      stacking: 'normal',
      dataLabels: {
        enabled: false,
        style: {
          textOutline: 'none',
        },
      },
    },
  },
  legend: {
    align: 'center',
    verticalAlign: 'bottom',
    borderWidth: 0,
  },
  colors: ['#FFA412', '#7c86ff', '#4be7cf', '#ff0000', '#00ff00'],
  series: [
    {
      data: [700, 1500, 250, 300, 350],
      name: 'Approved ',
    },
    {
      data: [400, 150, 421, 600, 255],
      name: 'Committed',
    },
    {
      name: 'Baseline',
      data: [109, 150, 900, 202, 600],
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
       x:16,
       y:-16,
      },
    },
  },
};

const BudgetMatrix = () => {
  return (

    <div className=''>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
    
  );
};

export default BudgetMatrix;
