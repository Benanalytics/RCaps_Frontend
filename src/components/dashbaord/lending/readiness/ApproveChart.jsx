import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar', 
    height:'300',
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
            <h4 class='text-bold text-black f25 semibold'>25%</h4>
            <p class='f14 text-benGray semibold'>Approved</p>
      </div>`,
    floating: true,
    verticalAlign: 'middle',
    y: 18,
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
      size: '80%',
      innerSize: '86%',
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
  colors: ['#04F5D1', '#FFD5AF', '#E39290'],
  series: [
    {
      type: 'pie',
      name: 'Progress',
      data: [['Before PCN',25],[ 'PCN Approved',55],[ 'PAR Approved',15]],
    },
  ],
};

const ApproveChart = () => {
  return (
    
     
     <div className='card '>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-x-5 items-center justify-between'>
           <div className='col-span-12 2xl:col-span-12  approveChart'>
              <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
            <div className='col-span-12 2xl:col-span-12 flex gap-x-4 mb-1 justify-center'>
              <ul className='ben__DashboardLinks flex justify-center w-full  GeopatitalMap flex-wrap border-t calendar_progress'>
                <li className=''>
                     <div class="flex items-center gap-x-2 mb-1 px-3 py-3 justify-center"> 
                        <span className='dot w-4 h-4 bg-red09 block rounded-circle' /> 
                        <span class="f14 semibold"><strong class=" mx-1 text-bold semibold mr-1">15%</strong> PAR Approved</span>
                      </div>
                  </li>

                <li className='border-l'>
                    <div class="flex items-center gap-x-2 mb-1 px-3 py-3 justify-center">      
                        <span className='dot w-4 h-4 bg-benSecondary block rounded-circle' /> 
                        <span class="f14 semibold"><strong class=" mx-1 text-bold semibold mr-1">25%</strong> Before PCN</span>
                      </div>
                  </li>

                  <li className='border-l'>
                      <div class="flex items-center gap-x-2 mb-1 px-3 py-3 justify-center"> 
                        <span className='dot w-4 h-4 bg-yellow09 block rounded-circle text-benLightBlue' /> 
                          <span class="f14 semibold"><strong class=" mx-1 text-bold semibold mr-1">55%</strong> PCN Approved</span>
                      </div>   
                  </li>


              </ul>
            </div>

         </div>
    </div>
    
  );
};

export default ApproveChart;
