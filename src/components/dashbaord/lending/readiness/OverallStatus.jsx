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
 text:'',
//     useHTML: true,
//     text: `<div class='flex items-center justify-center flex-col'>
//     <p class='text-sm mf:text-lg'>% SHARE READINESS CRITERIA</p>
//   </div>`,
//   floating: true,
//     verticalAlign: 'bottom',
  },
  subtitle: {
    useHTML: true,
    text: `<div class='flex items-center justify-center flex-col'>
            <h4 class='text-bold text-black f25 semibold'>54%</h4>
             <p class='f14 text-benGray semibold'>Readiness met</p>
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
  colors: [ '#7c86ff ', '#e9ecef'],
  series: [
    {
      type: 'pie',
      name: 'Readiness',
      data: [
        [ 'Completed',54],  // Adjust the value to set your progress
       [ 'Pending',46],
    ],
    },
  ],
};



const OverallStatus = () => {
  return (
    <div className='card '>
         <div className='grid grid-cols-1 md:grid-cols-1 gap-x-5 items-center justify-between'>
            <div className='col-span-12 2xl:col-span-12 approveChart'>
                <HighchartsReact highcharts={Highcharts} options={options} />
              </div>
              <div className='col-span-12 2xl:col-span-12 flex gap-x-4 mb-1 justify-center'>       
                <p class="flex gap-x-2 mb-1">      
                  <span className='dot w-4 h-4 bg-benLightBlue block rounded-circle text-benLightBlue mt-2' /> 
                  <span>
                    <span class="f14 semibold"><strong class=" mx-1 text-bold semibold mr-1">54%</strong>Yes</span>
                    <span className='block semibold f13'><strong class=" mx-1 text-bold semibold mr-1">100</strong> Project</span> 
                  </span>  
                </p>         
                  <p class="flex gap-x-2 mb-1 justify-center border-l px-4">      
                    <span className='dot w-4 h-4 bg-ltblue block rounded-circle mt-2' /> 
                    <span>
                          <span class="f14 semibold"><strong class=" mx-1 text-bold semibold mr-1">46%</strong> Yes</span>  
                          <span className='block semibold f13'><strong class=" mx-1 text-bold semibold mr-1">100</strong> Project</span>
                      </span>               
                  </p>
            </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 gap-x-5 items-center justify-between mt-5'>
              <div class='flex items-center justify-center flex-col'>
                <button type="button" class='text-sm mf:text-lg btn themebtn w100'>% SHARE READINESS CRITERIA</button>
              </div>
          </div>
        <div className='block approveChart nonText '>
        
        </div>
      {/* <ul className='contentDiv'>
        <li className='flex mb-2 items-center f14'>
          <span className='dot w-4 h-4 bg-ezOrange block  rounded-circle' />
          <b className='mx-3 semibold f14'>54%</b> Yes
        </li>
        <li className='flex mb-2 items-center f14'>
          <b className='mx-3 semibold f14'>100</b> Project
        </li>
        <li className='flex mb-2 items-center f14'>
          <span className='dot w-4 h-4 bg-benGrayMid block  rounded-circle opacity4' />
          <b className='mx-3 semibold f14'>46%</b> Yes
        </li>
        <li className='flex mb-2 items-center f14'>
          <b className='mx-3 semibold f14'>100</b> Project
        </li>
      </ul> */}
   
    </div>
  );
};

export default OverallStatus;
