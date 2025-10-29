import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar', 
    height:230, 
    backgroundColor: '#e9e7fb',
    polar: true, 
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  title: {
    useHTML: true,
    text: `<div>
            
      </div>`,
      floating: true,
      verticalAlign: 'left',
      // x:-15,
      // y: 10,
  },
  subtitle: {
    useHTML: true,
    text: `<div class='flex items-center justify-center flex-col'>
            <h4 class='text-bold text-black f25 semibold'>34%</h4>
            <p class='f14 text-black semibold'>Exec. Rate</p>
      </div>`,
    floating: true,
    verticalAlign: 'middle',
    y: 40,
  },
  legend: {
    enabled: false,
  },
  tooltip: {
    valueSuffix: ' %',
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
        x:-10,
        y:0,
        width:20,
        theme:{
         fill:'#e6e9fc',
        },
      },
     
    },
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      colorByPoint: true,
      type: 'pie',
      size: '90%',
      center: ['50%', '65%'],
      innerSize: '80%',
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
  colors: ['#8b7dfa','#ffffff', ],
  series: [
    {
      type: 'pie',
      name: 'Progress',
      data: [['Before PCN',25],[ 'PCN Approved',55]],
    },
  ],
};

const StatusBudget = () => {
  return ( 
    <div class="">
      <div class="cardTitle flex items-center flex-wrap items-center justify-between">
        <div class="mb-4">
          <p class="f14 semibold text-uppercase text-normal">Status Budgets Loaded In Sectors For Projects</p>
          </div>
      </div>
      <div className=''>
          <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default StatusBudget;
