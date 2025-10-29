import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar',
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['AHVP', 'ECVP0', 'PEVP', 'PIVP'],
  },
  yAxis: {
    min: 0,
    max: 100,
    title: {
      text: '',
    },
    labels: {
      formatter: function (val) {
        return val?.value + '%';
      },
    },
    stackLabels: {
      enabled: true,
    },
  },
  plotOptions: {
    series: {
      stacking: 'normal',
      pointWidth: 64,
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
    verticalAlign: 'top',
    borderWidth: 0,
    reversed: true
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
  // colors: ['#ACB1C6', '#04F5D1', '#307DF0', '#FFA412'],
  // colors: ['#ACB1C6','#04F5D1', '#307DF0' , '#FFA412' ],
  // colors: ['#ffb800', '#f87171', '#01c38d'],
  colors: ['#04F5D1', '#FFD5AF', '#E39290'],
  series: [
    {
      data: [5, 10, 10],
      name: 'Before PCN',
    },
    {
      data: [20, 20, 25],
      name: 'PAR approved',
    },
    {
      data: [25, 35, 25],
      name: 'PCN Approved',
    },
    {
      data: [10, 5, 15],
      name: 'YTD Approvals',
    },
  ],
};



const ComplexWideChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow'>
    <div className="cardBody">
        <div class="cardTitle flex items-center">
            <p class="f13 semibold text-uppercase text-normal mb-4">Complex-wide Lending Readiness</p>
        </div>
          <div className='mt-4'>
          <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default ComplexWideChart;
