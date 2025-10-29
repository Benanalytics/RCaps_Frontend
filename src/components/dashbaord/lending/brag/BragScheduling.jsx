import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'bar', 
    height:'300',
    backgroundColor:'#ffffff',
  },
  title: {
    text: '',
  },
  subtitle: {
    useHTML: true,
    text: `<div class='flex items-center justify-center flex-col'>
                  <h4 class='text-black f16 text-benLightBlue semibold -mt-4'>UA <strong class='f25 text-bold text-benLightBlue semibold'>34,067</strong>million</h4>
            
      </div>`,
    floating: true,
    verticalAlign: 'middle',
    y: 20,
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
  colors: ['#e9ecef', '#7c86ff'],
  series: [
    {
      type: 'pie',
      name: 'Project',
      data: [['After Recess', 51],[ 'Before Recess',49]],
    },
  ],
};

const BragScheduling = () => {
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div className="cardBody">
            <div class="cardTitle flex flex-wrap items-center mb-4">
                 <p class="f14 semibold text-uppercase text-normal">Before vs Post-Recess Projected BRAG Scheduling</p> 
            </div>
            <div className='mt-5'>
              <div className='grid grid-cols-1 md:grid-cols-1 gap-10 items-center justify-between'>
                <div className='col-span-12 2xl:col-span-12  approveChart '>
                  <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
             
              </div>
              <div className='flex justify-between items-center gap-x-4'>
                    <ul className='flex justify-center w-full  GeopatitalMap border-t analytics_data chart_bottom_progress'>

                        <li className=''>
                            <div class="mb-1 px-3 py-3  text-center">
                                     <p className='f24 semibold text-bold mb-1'>51%</p>
                                    <p className='flex items-center f14 semibold flex-wrap justify-center text-benGray'>
                                      <span className='semibold mr-1 whitespace-nowrap '>48 Project</span> After Recess
                                      </p>
                                    <p className='f13 text-benLightBlue semibold'>
                                      UA
                                      <strong className='f15 mx-1 text-bold semibold'>34,067</strong> million
                                    </p>
                                </div>
                        </li>

                           <li className='border-l'>
                               <div class="mb-1 px-3 py-3  text-center">
                                  <p className='f24 semibold text-bold mb-1'>49%</p>
                                  <p className='flex items-center f14 semibold flex-wrap justify-center text-benGray'>
                                    <span className='semibold mr-1 whitespace-nowrap '>48 Project</span> Before
                                    Recess
                                  </p>
                                  <p className='f13 text-benLightBlue semibold'>
                                    UA
                                    <strong className='f15 mx-1 text-bold semibold'>34,067</strong> million
                                  </p>
                                </div>
                          </li>
                        
                    </ul>
                     
                </div>
            </div>
        </div>
    </div>
  );
};

export default BragScheduling;
