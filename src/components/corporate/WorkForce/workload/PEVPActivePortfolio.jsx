import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DistributionComplex = () => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height:'290',
            backgroundColor:'#ffffff',
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            useHTML: true,
            // text: `<div class='flex items-center justify-center flex-col'>
            //         <h4 class='text-bold text-black f25 semibold'>1,126</h4>
                  
            //   </div>`,
            floating: true,
            verticalAlign: 'middle',
            y: -10,
          },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        accessibility: {
            point: {
                valueSuffix: '%'
            }
        },
        plotOptions: {
            pie: {
                allowPointSelect: false,
                cursor: 'pointer',
               
                
                dataLabels: {
                    enabled: true,
                    format: '{point.percentage:.1f}%',
                    distance: -15, 
                    style: {
                        textOutline: 'none',
                        color:'black'
                      },
                    formatter: function () {
                      return '<b>' + this.point.name + ':</b> ' + this.percentage.toFixed(1) + '%';
                    }
                  },
                borderRadius: 0,
                showInLegend: true,
                innerSize: '70%', // Adjust this value for the size of the blank space in the center
            },
        },
        exporting: {
            enabled: true,
            buttons: {
                contextButton: {
                    symbol: 'menuball',
                    symbolSize: '10',
                    symbolFill: '#666666',
                    text: '',
                    symbolStrokeWidth: '1',
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
                    x: 16,
                    y: -16,
                },
            },
        },
        series: [{
            name: 'Optimizing Selectivity',
            colorByPoint: true,
            data: [{
                name: 'PERN',
                y: 25,
                sliced: false,
                selected: true,
                color: "#ce8522"
            }, {
                name: 'PESR',
                y: 29,
                color: "#b12f27"

            },  
            {
              name: 'PESD',
              y: 46,
              color: "#7d9a34"

          },
          
          ]
        }]
    };

    return (
      <div className='card bg-white rounded-md card-shadow grid-margin '>
      <div className="cardBody">
        <div class="cardTitle flex items-center flex-wrap">
              <p class="f14 semibold text-uppercase text-normal mb-4">Share of PEVP Task Managers/ios</p>
        </div>
        <div className='mt-4'>
           <HighchartsReact highcharts={Highcharts} options={options} />
       </div>
    </div>
  </div>
    );
};

export default DistributionComplex;
