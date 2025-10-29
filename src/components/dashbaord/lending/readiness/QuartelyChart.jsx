import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    height: 400,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['Q1 2023', 'Q2 2023', 'Q3 2023'],
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
    labels: {
      formatter: function (val) {
        return val?.value + '%';
      },
    },
  },
  plotOptions: {
    column: {
      pointWidth: 72,
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
    align: 'left',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  // colors: ['#FFA412', '#307DF0', '#04F5D1'],
  colors: ['#FFA412', '#7c86ff' , '#4be7cf'],
  series: [
    {
      data: [20, 15, 25],
      name: 'Q1 2023',
    },
    {
      data: [50, 50, 42],
      name: 'Q2 2023',
    },
    {
      name: 'Q3 2023',
      data: [10, 15, 25],
    },
  ],
};



const QuartelyChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
      <div className='cardBody'>
        <div class="cardTitle flex items-center flex-wrap">
            <p class="f14 semibold text-uppercase text-normal  mb-4"> Quarterly Lending Readiness (%/UA mn)</p>
          </div>
          <div className='mt-4'>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
       </div>
    </div>
  );
};

export default QuartelyChart;
