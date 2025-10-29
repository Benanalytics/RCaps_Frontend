import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Sector = () => {

    const options = {
      chart: {
        type: 'bar', 
        height:230,  
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
           // borderWidth: 2,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                style: {
                  textOutline: 'none',
                  color:'black'
                },
              //  format: '<b>{point.name}</b><br>{point.percentage}%',
                distance: 20
            }
        },
      },
      colors: ['#2caffe', '#544fc5','#53a4c1','#d08301','#b03122','#d568fb','#bdb124','#fa4b42','#839725','#91e8e1'],
      series: [
        {
          type: 'pie',
          name: 'Progress',
          data: [{
            name: 'Transport',
            y: 10
        }, {
            name: 'Finance',
            y: 10
        }, {
            name: 'Multi',
            y: 10
        }, {
            name: 'Wash',
            y: 10
        }, {
            name: 'Power',
            y: 10
        },
        {
            name: 'Agric',
            y: 10
        },
        {
            name: 'Social',
            y: 10
        },
        {
            name: 'Industry',
            y: 10
        },
        {
            name: 'Enviro',
            y: 10
        },
        {
            name: 'ICT',
            y: 10
        }
    ],
        },
      ],
    };
   
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4"> SECTOR</p>
          </div>
          <div className='mt-4'>
             <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
     
      </div>
    </div>
  );
};

export default Sector;
