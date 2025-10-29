import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar',
    height: 400,
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
    labels: {
      formatter: function (val) {
        return val?.value + '%';
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
  plotOptions: {
    series: {
      stacking: 'normal',
      pointWidth: 32,
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
      }
      },
    },
  },
  legend: {
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  tooltip: {
    pointFormat:
      '<span style="color:{series.color}">{series.name}</span>: <b>{point.y}</b> ({point.percentage:.0f}%)<br/>',
    shared: true,
  },
  colors: ['#04F5D1', '#FFD5AF', '#E39290'],
  series: [
    {
      data: [10, 5, 15, 10, 4, 8, 10],
      name: 'PAR Approved',
    },
    {
      data: [60, 65, 55, 40, 50, 90, 100],
      name: 'PCN Approved',
    },
    {
      name: 'Before PCN',
      data: [40, 45, 35, 20, 30, 40, 20],
    },
  ],
};

const DeliveryChartTwo = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div class="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4">Lending Program Delivery</p>
            </div>
          <div className='mt-4'>
          <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
      </div>
    </div>
  );
};

export default DeliveryChartTwo;
