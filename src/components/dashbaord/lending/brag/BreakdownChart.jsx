import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar',
    height: 350,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'Central',
      'East',
      'Multi',
      'Nigeria',
      'North',
      'South',
      'West',
    ],
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      pointWidth: 25,
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
    verticalAlign: 'top',
    borderWidth: 0,
    reversed: true
  },
  colors: ['#4be7cf', '#7c86ff', '#FFA412'],
  series: [
    {
      data: [60, 65, 55, 40, 50, 90, 100],
      name: 'No Details on ESIA Disclosure',
    },
    {
      data: [50, 55, 45, 30, 40, 80, 90],
      name: 'Details on ESIA Disclosure Provided',
    },
    {
      name: 'Not Required ESIA Disclosure',
      data: [10, 5, 15, 10, 4, 8, 10],
    },
  ],
};

const BreakdownChart = () => {
  return (
    <div className='md:col-span-2 card bg-white rounded-md card-shadow grid-margin'>
      <div className='cardBody'>
        <div class="cardTitle flex items-center">
            <p class="f14 semibold text-uppercase text-normal mb-4"> Regional Breakdown of E&S Readiness for the 100 Operations Scheduled May-Sept BRAG</p>
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

export default BreakdownChart;
