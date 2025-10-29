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
      'Feed Africa',
      'Light Up & Power Africa',
      'Industrialize Africa',
      'Integrate Africa',
      'Improve Quality Of Life',
    ]
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
      format: '{value}%'
  },
  // tickPositioner: function () {
  //   const positions = [];
  //   for (let i = 0; i <= 10; i++) {
  //     positions.push(i * 10);
  //   }
  //   return positions;
  // }
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
     // pointWidth: 24,
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
      data: [7, 10, 15, 18, 25],
    },
    {
      name: 'UA 572.1 mn YTD Approvals',
      data: [95, 90, 50, 60, 60],
    },
  ],
};

const HighFivesChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4"> Projected Lending Program by High-Fives</p>
          </div>
          <div className='mt-4'>
             <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
     
      </div>
    </div>
  );
};

export default HighFivesChart;
