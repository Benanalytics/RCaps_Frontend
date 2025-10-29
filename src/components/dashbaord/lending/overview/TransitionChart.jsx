import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    height: 410,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'Non-Transition States',
      'Transition States',
      'Multinational',
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
      format: '{value}%'
  },
  },
  legend: {
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
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
 
  colors: ['#4be7cf', '#7c86ff'],
  series: [
    {
      name: 'UA 8,202.5 mn Projected May-Dec',
      data: [20, 23, 20],
    },
    {
      name: 'UA 572.1 mn YTD Approvals',
      data: [60, 50, 35],
    },
  ],
};

const TransitionChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
       <div className="cardBody">
          <div class="cardTitle flex items-center">
                <p class="f14 semibold text-uppercase text-normal mb-4">  Transition vs. Non-Transition States</p>
            </div>
            <div className='mt-4'>
             <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
      </div>
    
    </div>
  );
};

export default TransitionChart;
