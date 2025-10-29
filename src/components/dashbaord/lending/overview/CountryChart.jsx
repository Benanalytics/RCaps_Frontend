import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar',
    height: 400,
    innerWidth: 400,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'Botswana',
      'Burkina Faso',
      'Cameroon28',
      'Cape Verde',
      'Dem Rep Congo',
      'Côte DIvoir',
      'CongoCG',
      'Central African Republic',
      'Chad',
      'Comoros',
    ],
  },
  yAxis: {
    title: {
      text: undefined,
    },
    min: 0,
    max: 105,
    labels: {
      formatter: function (val) {
        return val?.value + '%';
      },
    },
    stackLabels: {
      enabled: true,
    },
  },
  legend: {
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  plotOptions: {
    series: {
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
  colors: ['#7c86ff', '#4be7cf'],
  series: [
    {
      name: 'UA 572.1 mn YTD Approvals',
      data: [100, 90, 50, 60, 90, 75, 70, 85, 55, 60],
    },
    {
      name: 'UA 8,202.5 mn Projected May-Dec',
      data: [7, 10, 15, 18, 25, 35, 45, 25, 20, 13],
    },
  ],
};

const CountryChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
       <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4">Lending Outlook by Country</p>
            </div>
            <div className='mt-4'>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
        </div>
    </div>
  );
};

export default CountryChart;
