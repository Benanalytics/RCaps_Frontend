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
    text:  `<div class='flex items-center justify-center flex-col'>
              <h4 class='text-bold text-black f32 semibold'>75%</h4>
              <p class='f14 text-benGray semibold'>Exec. Rate</p>
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
  // colors: ['#FFA412', '#F87171', '#01C38D'],
  // colors: ['#ffb800', '#f87171', '#01c38d'],
  colors: ['#3ce9d0', '#e9ecef'],
  series: [
    {
      type: 'pie',
      name: 'Progress',
      data: [['Before PCN',25],[ 'PCN Approved',55]],
    },
  ],
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
};

const Budgetexecution = () => {
  return (
    
     
     <div className=' '>
       <HighchartsReact highcharts={Highcharts} options={options} />
         <div>
                <ul class=" flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom">
                  <li class="px-5 py-5 text-center">
                    <p class="f16 semibold"><span className='text-bold'>UA 13.22 </span></p>
                    <p class="f14 semibold text_light text-benGray">Adjust Budget</p>
                  </li>
                  <li class="text-center px-5 py-5 border-l border-benThinBlue  text-center">
                    <p class="f16 semibold"><span className='text-bold'>UA 9.88 </span></p>
                    <p class="f14 semibold text_light text-benGray">Allotted</p>
                  </li>
                  <li class="text-center px-5 py-5 border-l border-benThinBlue  text-center">
                    <p class="f16 semibold"><span className='text-bold'>UA 3.34 </span></p>
                    <p class="f14 semibold text_light text-benGray">Available</p>
                  </li>
                </ul>
            </div>
            {/* <div>
                <ul class=" flex gap-x-3 justify-center w-full  GeopatitalMap flex-wrap border-t chart_bottom">
                  <li class="px-5 py-5 text-center">
                    <p class="f14 semibold"><span className='text-bold'>13.22 </span>Adjust Budget</p>
                  </li>
                  <li class="text-center px-5 py-5 border-l border-benThinBlue  text-center">
                    <p class="f14 semibold"><span className='text-bold'>9.88 </span>Allotted</p>
                  </li>
                  <li class="text-center px-5 py-5 border-l border-benThinBlue  text-center">
                    <p class="f14 semibold"><span className='text-bold'>3.34 </span>Available</p>
                  </li>
                </ul>
            </div> */}
      </div>
    
  );
};

export default Budgetexecution;
