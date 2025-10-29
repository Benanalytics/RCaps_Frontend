import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar', 
    height:'210',
    backgroundColor:'#ffffff',
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  title: {
    text: '',
  },
  subtitle: {
    useHTML: true,
    text: `<div class='flex items-center justify-center flex-col'>
          <h4 class='text-bold text-black f32 semibold'>2.4%</h4>
          <p class='f12 text-benGray semibold'>Budget Utilization</p>
          <p class='f12 text-benGray semibold'> Rate</p>
      </div>`,
    floating: true,
    verticalAlign: 'middle',
    y: 10,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    valueSuffix: ' %',
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      colorByPoint: true,
      type: 'pie',
      size: '100%',
      innerSize: '82%',
      dataLabels: {
        enabled: false,
        crop: false,
        distance: '-10%',
        style: {
          fontWeight: 'bold',
          fontSize: '16px',
        },
        connectorWidth: 0,
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
  // colors: ['#FFA412', '#F87171', '#01C38D'],
  // colors: ['#ffb800', '#f87171', '#01c38d'],
  colors: ['#8b7dfa','#e9ecef' ],
  series: [
    {
      type: 'pie',
      name: 'Progress',
      data: [['Utilization Rate',25],[ 'Utilization Rate',55]],
    },
  ],
};

const Overallutilization = () => {
  return (
    
     
    <HighchartsReact highcharts={Highcharts} options={options} />
    
  );
};

export default Overallutilization;
