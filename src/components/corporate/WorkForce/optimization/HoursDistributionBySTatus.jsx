import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    height: 500,
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'On Go',
      'Tues.',
      'ADVP',
      'IDEN',
      'COMP',
      'LEND',
      'PIPE',
      'CLSD',
      'ABAN',
      'TERM',
    ],
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
      min: 0,
      max: 800,
      tickPositions: [0, 100, 200, 300, 400, 500, 600, 700, 800],
      reversed: false,
    },
    {
      labels: {
        enabled: true,
      },
      title: {
        text: '',
      },
      opposite: true, // To position the axis on the right side
      min: 0,
      max: 240000,
      tickPositions: [0, 30000, 60000, 90000, 120000, 150000, 180000, 210000, 240000],
      reversed: false,
    },
  ],
  plotOptions: {
    column: {
      pointWidth: 40,
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
       x:16,
       y:-16,
      },
    },
  },
  colors: ['#8b7dfa'],
  series: [
    {
      data: [713, 536, 201, 330, 180, 76, 98,61,65,40],
      name: 'Hours',
    },

    {
      data: [650, 526, 250, 150, 140, 65, 50,41,41,10],
      name: 'Work Programme',
      type:'line',
      color: "#000000",
      marker: {
        enabled: false,
      },
      
    },


    
  
  ],


};

const HoursDistributionBySTatus = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>   
      <div className='cardBody'>
        <div class="cardTitle flex items-center">
            <p class="f14 semibold text-uppercase text-normal mb-4"> Project & Hours Distribution  By STatus</p>
        </div>
        <div className='mt-4'>
          <div className='block'>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
      </div>      
    </div>
  );
};

export default HoursDistributionBySTatus;
