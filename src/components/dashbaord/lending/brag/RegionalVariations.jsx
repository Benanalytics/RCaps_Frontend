import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    height: 500,
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
  legend: {
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
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
    column: {
      pointWidth: 48,
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
  colors: ['#737791', '#FFA412', '#7c86ff', '#4be7cf'],
  series: [
    {
      data: [15000, 5000, 10000, 20000, 15000, 10000, 20000],
      name: 'Lending Target',
    },
    {
      data: [10000, 500, 3000, 10000, 5000, 10000, 2000],
      name: 'YTD Approvals',
    },
    {
      name: 'Apr-Jul BRAG',
      data: [20000, 15000, 20000, 1000, 15000, 1000, 2000],
    },
    {
      name: 'Lending Plan',
      data: [1000, 25000, 30000, 10000, 25000, 20000, 20000],
    },
  ],
};

const RegionalVariations = () => {
  return (
    <div className='md:col-span-2 card bg-white rounded-md card-shadow grid-margin'>
      <div className='cardBody'>
        <div class="cardTitle flex items-center">
            <p class="f14 semibold text-uppercase text-normal mb-4"> Regional Variations in Q1 BRAG to Lending Plans</p>
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

export default RegionalVariations;
