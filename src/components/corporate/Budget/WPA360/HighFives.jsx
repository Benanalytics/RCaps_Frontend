import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HighFives = () => {

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
        useHTML: false,
        text:'',
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
            innerSize: '70%',
            cursor: 'pointer',
            dataLabels: {
                enabled: false,
              //  format: '<b>{point.name}</b><br>{point.percentage}%',
               // distance: -40
            }
        },
      },
      colors: ['#b03122', '#53a4c1','#d08301','#bdb124','#839725'],
      series: [
        {
          type: 'pie',
          name: 'Progress',
          data: [{
            name: 'Feed Africa',
            y: 13
        }, {
            name: 'Light Up & Power Africa',
            y: 14
        }, {
            name: 'Industrialize Africa',
            y: 14
        },
        {
            name: 'Integrate Africa',
            y: 22
        },
        {
            name: 'Improve the quality of Life for the people of Africa',
            y: 37
        },
    ],
        },
      ],
    };
   
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4"> High Fives</p>
          </div>
          <div className='mt-4'>
          <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
             <HighchartsReact highcharts={Highcharts} options={options} />
             <div className='flex justify-center flex-col'>
             <p class="flex gap-x-2 mb-2">          
                  <span className='dot w-4 h-4 bg-red09 block rounded-circle mt-1' /> 
                  <span class="f14 semibold">Feed Africa (13%)</span>
                </p>
                <p class="flex gap-x-2 mb-2">      
                  <span className='dot w-4 h-4 bg-benSecondary block rounded-circle mt-1' /> 
                  <span class="f14 semibold">Light Up & Power Africa (14%)</span>
                </p>
                <p class="flex gap-x-2 mb-2">  
                  <span className='dot w-4 h-4 bg-yellow09 block rounded-circle text-benLightBlue mt-1' /> 
                    <span class="f14 semibold"> Industrialize Africa (14%)</span>
                </p> 
                <p class="flex gap-x-2 mb-2">       
                  <span className='dot w-4 h-4 bg-yellow09 block rounded-circle text-benLightBlue mt-1' /> 
                    <span class="f14 semibold"> Integrate Africa (22%)</span>
                </p> 
                <p class="flex gap-x-2 mb-2">  
                  <span className='dot w-4 h-4 bg-yellow09 block rounded-circle text-benLightBlue mt-1' /> 
                    <span class="f14 semibold"> Improve the quality of Life for the people of Africa (37%)</span>
                </p>       
            </div>
         </div>
          </div>
      </div>
    </div>
  );
};

export default HighFives;
