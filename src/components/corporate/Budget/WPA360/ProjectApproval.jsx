import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
   type: 'column',
    height: 270,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: ['2023', '2024', '2025','2026','2027','2028'],
    labels: {
       
      rotation: 0, // Set rotation angle (in degrees)
      staggerLines: 1, // Stagger lines to avoid overlapping
    },
  },
  yAxis: {
    min: 0,
   // max: 100,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
    // labels: {
    //   formatter: function (val) {
    //     return val?.value + '%';
    //   },
    // },
  },
  exporting: {
    enabled: false,
},
  plotOptions: {
    column: {
      pointWidth: 30,
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
    reversed: true,
    verticalAlign: 'bottom',
    borderWidth: 0,
  },
  // colors: ['#FFA412', '#307DF0', '#04F5D1'],
  colors: ['#FFA412', '#7c86ff' , '#4be7cf','#acb1c6'],
  series: [
    {
      data: [1800, 2800,1500,2000,3300,1200],
      name: 'ADF Including TSF',
    },
    {
      data: [2000,3200,1300,1700,3300,1500],
      name: 'ADB SOV',
    },
    {
      name: 'ADB NSO',
      data: [2000,1800,1200,700,1300,500],
    },
    {
        name: 'UA(4,441 m) Annual Average',
        type: 'spline',
       // dashStyle: 'longdot',
        marker: {
            enabled: false
        },
        data: [3000,3000,3000,3000,3000,3000],
    }
  ],
};



const ProjectApproval = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
      <div className='cardBody'>
        <div class="cardTitle flex items-center flex-wrap">
            <p class="f14 semibold text-uppercase text-normal  mb-4"> Project Approvals</p>
          </div>
          <div className='mt-4'>
            <HighchartsReact highcharts={Highcharts} options={options} />
          </div>
       </div>
    </div>
  );
};

export default ProjectApproval;