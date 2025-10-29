import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ProjectApprovalShare = () => {

    const options = {
      chart: {
        type: 'bar', 
        height:240, 
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
                      <h4 class='text-black f16 text-black semibold -mt-4'><strong class='f25 text-bold text-black semibold'>UA667.2</strong></h4>
                
          </div>`,
        floating: true,
        verticalAlign: 'middle',
        y: 12,
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
           x:16,
           y:-16,
          },
        },
      },
      plotOptions: {
        pie: {
            allowPointSelect: true,
            innerSize: '75%',
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
              //  format: '<b>{point.name}</b><br>{point.percentage}%',
                distance: 20
            }
        },
      },
      colors: ['#7c86ff', '#4be7cf','#ffa412'],
      series: [
        {
          type: 'pie',
          name: 'Progress',
          data: [{
            name: 'ADB private',
            y: 24
        }, {
            name: 'ADF Including TSF',
            y: 34
        }, {
            name: 'ADB Public',
            y: 42
        },
    ],
        },
      ],
    };
   
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4"> % Share</p>
          </div>
          <div className='mt-4'>
              <div className='grid grid-cols-1 md:grid-cols-2'>
                <HighchartsReact highcharts={Highcharts} options={options} />
                <div className='flex flex-col mb-1 justify-center'>
                  <p class="flex items-center gap-x-2 mb-1">            
                      <span className='dot w-4 h-4 bg-red09 block rounded-circle' /> 
                      <span class="f14 semibold">ADB private, 3, 24%</span>
                    </p>
                    <p class="flex items-center gap-x-2 mb-1">      
                      <span className='dot w-4 h-4 bg-benSecondary block rounded-circle' /> 
                      <span class="f14 semibold">ADF Including TSF, 4, 34%</span>
                    </p>
                    <p class="flex items-center gap-x-2 mb-1">      
                      <span className='dot w-4 h-4 bg-yellow09 block rounded-circle text-benLightBlue' /> 
                        <span class="f14 semibold"> ADB Public, 4, 42%</span>
                    </p>       
                </div>
            </div>
          </div>
        
     
      </div>
    </div>
  );
};

export default ProjectApprovalShare;
