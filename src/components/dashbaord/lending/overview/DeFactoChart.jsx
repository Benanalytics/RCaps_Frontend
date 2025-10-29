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
    categories: [
      'De Facto Countries',
      'Non-De Facto Countries',
    ],
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    // tickPositioner: function () {
    //   const positions = [];
    //   for (let i = 0; i <= 10; i++) {
    //     positions.push(i * 10);
    //   }
    //   return positions;
    // },
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
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  colors: ['#4be7cf', '#7c86ff'],
  series: [
    {
      name: 'UA 8,202.5 mn Projected May-Dec',
      data: [20, 23],
    },
    {
      data: [70, 80],
      name: 'UA 572.1 mn YTD Approvals',
    },
  ],
};

const DeFactoChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
      <div className="cardBody">
        <div class="cardTitle flex items-center">
              <p class="f14 semibold text-uppercase text-normal mb-4">De Facto vs. Non-De Facto Countries</p>
        </div>
        <div className='mt-4'>
        <HighchartsReact highcharts={Highcharts} options={options} />
      
        </div>
      </div>
    </div>
  );
};

export default DeFactoChart;
