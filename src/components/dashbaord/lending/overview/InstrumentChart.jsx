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
    align: 'left',
  },
  xAxis: {
    categories: [
      `Equity, Debt and Gurantee`,
      `Instit. Support`,
      `Policy-Based Operations`,
      `Trade, Finance/Lines of Credit`,
      `Investment`,
      `TA, Emergency & Study`,
      `Result-Based Financing`,
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
  plotOptions: {
    series: {
      //pointWidth: 24,
      stacking: 'normal',
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
      }
      },
    },
  },
  colors: ['#4be7cf', '#7c86ff'],
  series: [
    {
      name: 'UA 8,202.5 mn Projected May-Dec',
      data: [7, 10, 15, 18, 25, 20, 25],
    },
    {
      name: 'UA 572.1 mn YTD Approvals',
      data: [70, 90, 50, 60, 60, 90, 85],
    },
  ],
};

const InstrumentChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
      <div className="cardBody">
        <div class="cardTitle flex flex-wrap items-center mb-4">
              <p class="f14 semibold text-uppercase text-normal"> Lending Program By Instrument</p>
        </div>
        <div className='mt-4'>
        <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
      </div>
    </div>
  );
};

export default InstrumentChart;
