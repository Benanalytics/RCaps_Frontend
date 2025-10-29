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
  },
  xAxis: {
    categories: [
      'Transport',
      'Finance',
      'Multi',
      'WASH',
      'Power',
      'Agric',
      'Social',
      'Industry',
      'Enviro',
      'ICT',
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
    labels: {
      formatter: function (val) {
        return val?.value + '%';
      },
    },
  },
  legend: {
    align: 'left',
    verticalAlign: 'top',
    borderWidth: 0,
  },
  plotOptions: {
    series: {
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
  // colors: ['#04F5D1', '#307DF0'],
  colors: ['#4be7cf', '#7c86ff'],
  series: [
    {
      name: 'UA 8,202.5 mn Projected May-Dec',
      data: [7, 10, 15, 18, 25, 35, 45, 25, 20, 13],
    },
    {
      name: 'UA 572.1 mn YTD Approvals',
      data: [100, 90, 50, 60, 90, 75, 80, 85, 55, 60],
    },
  ],
};

const SectorChart = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
       <div className="cardBody">
          <div class="cardTitle flex flex-wrap items-center mb-4">
                <p class="f14 semibold text-uppercase text-normal"> 2023 Lending Program by Sector</p>
            </div>
            <div className='mt-4'>
               <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>   
      
    </div>
  );
};

export default SectorChart;
