import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'line',
    height: 280,
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
    align: 'left',
  },
  legend: {
    align: 'left',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  xAxis: {
    categories: [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ],
  },
  yAxis: {
    title: {
      text: '',
    },
    labels: {
      format: '{value}%'
  }
  },
  plotOptions: {
    line: {
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
  tooltip: {
    crosshairs: true,
    shared: true,
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
  navigation: {
    enabled: true,
    buttonOptions: {
      enabled: true,
    },
  },
  // colors: ['#504DE5', '#01C38D'],
  colors: ['#7c86ff', '#01C38D'],
  series: [
    {
      name: 'Approval to KPI (as Mar-22nd Projections)',
      data: [10, 20, 30, 40, 45, 50, 60, 70, 90, 100, 120, 140],
    },
    {
      name: '% Approval to KPI (AWP Projections)',
      data: [10, 41, 35, 51, 49, 62, 80, 95, 100, 129, 130, 140],
    },
  ],
};

const OverviewLineChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
       <div className="cardBody">
            <div class="cardTitle flex items-center">
                  <div className='mb-4'>
                      <p class="f14 semibold text-uppercase text-normal">Lending Projection</p>
                      <p className='f11 text-benGray'> Projected Lending Plan of UA 8,774 million exceeds the KPI target by 29%... </p>
                  </div> 
            </div>
            <div className='mt-4'>
               <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
      </div>
    </div>
  );
};

export default OverviewLineChart;
