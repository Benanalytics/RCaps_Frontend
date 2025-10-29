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
    categories: [
      'ADF Including TSF',
      'ADB Public',
      'ADB Private',
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
  legend: {
    align: 'center',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  colors: ['#4be7cf', '#7c86ff'],
  series: [
    {
      name: 'UA 8,202.5 mn Projected May-Dec',
      data: [20, 23, 10],
    },
    {
      data: [50, 70, 65],
      name: 'UA 572.1 mn YTD Approvals',
    },
  ],
};

const ProjectApprovalsChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
    <div className="cardBody">
       <div class="cardTitle flex flex-wrap items-center mb-4">
             <p class="f14 semibold text-uppercase text-normal"> Lending Projected Approvals by 2023</p>
         </div>
         <div className='mt-5'>
               <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
      </div>
    </div>
  );
};

export default ProjectApprovalsChart;
