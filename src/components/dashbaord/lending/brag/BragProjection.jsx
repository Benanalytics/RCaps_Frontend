import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'spline',
    height: 400,
    backgroundColor:'#ffffff',
  },

  title: {
    text: '',
    align: 'left',
  },

  yAxis: {
    title: {
      text: '',
    },
  },
  plotOptions: {
    spline: {
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
          color:'black',
        },
    },
        enableMouseTracking: true
    }
},
  xAxis: {
    categories: [2018, 2019, 2020, 2021, 2022],
  },
  legend: {
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
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

  series: [
    {
      name: 'YTD Approvals',
      data: [50, 100, 270, 130, 400],
    },
    {
      name: 'May-Sept: BRAG Projections',
      dashStyle: 'ShortDashDot',
      data: [100, 0, 400, 500, 200],
    },
    {
      name: 'Lending Plan',
      dashStyle: 'Dash',
      data: [100, 300, 500, 200, 600],
    },
    {
      name: 'Delivery Gap',
      data: [100, 200, 300, 100, 600],
    },
  ],
};

const BragProjection = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
      <div className='cardBody'>
        <div class="cardTitle flex items-center flex-wrap">
            <p class="f14 semibold text-uppercase text-normal  mb-4">Comparison of BRAG Projections and Lending Plan</p>
          </div>
          <div className='mt-4'>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
      </div>
    </div>
  );
};

export default BragProjection;
