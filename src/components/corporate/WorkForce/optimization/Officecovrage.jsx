import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    height: 380,
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['RDGC', 'RDGE', 'RDGN','RDGS','RDGW'],
    lineWidth: 0
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: false,
    },
    tickPositions: [0, 3, 6, 9, 12, 15],
   
  },
  plotOptions: {
    column: {
      pointWidth: 50,
      stacking: 'normal',
      dataLabels: {
        enabled: true,
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
       x:16,
       y:-16,
      },
    },
  },
  legend: {
    align: 'center',
    verticalAlign: 'bottom',
    borderWidth: 0,
  },
 
  series: [
    {
        name: 'NON',
        data: [3, 6, 2,2,7],
        color:'#aeb0c5'
      },
      {
        name: 'LO',
        data: [2, 4, 5,5,1],
        color:'#fda632'
      },

      {
        data: [6, 2, 1,3,2],
      name: 'CO',
      color:'#8b7dfa'
    },

    {
      data: [1, 2, 3,4,2],
      name: 'HUB',
      color:'#3ce9d0'
    },
  
   
  
     
  ],
};



const Officecovrage = () => {
  return (

    <div className='mt-4'>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
 
  );
};

export default Officecovrage;
