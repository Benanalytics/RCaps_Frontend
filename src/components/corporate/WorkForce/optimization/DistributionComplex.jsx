import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const DistributionComplex = () => {
    const options = {
        chart: {
            height: '230',
            backgroundColor: '#ebfbf5',
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
            
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            useHTML: true,
            text: `<div class='flex items-center justify-center flex-col'>
                    <h4 class='text-bold text-black f25 semibold'>1,193</h4>
                    <p class='f14 text-benGray semibold'>projects</p>
              </div>`,
            floating: true,
            verticalAlign: 'middle',
            y: -14,
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
                    distance: -9, 
                    style: {
                        textOutline: 'none',
                        color:'black'
                      },
                    formatter: function () {
                        return (
                          "<b>" +
                          this.point.name +
                          ":</b> " +
                          this.percentage.toFixed(1) +
                          "%"
                        );
                      },
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
                    theme:{
                        fill:'#ecfbf5',
                       },
                    x: 16,
                    y: -16,
                },
            },
        },
        series: [{
            name: 'Optimizing Selectivity',
            colorByPoint: true,
            data: [{
                name: 'Regular Staff',
                y: 70,
                sliced: false,
                selected: true,
                color: "#53A4C1"
            }, {
                name: 'Technical Assistance',
                y: 12.82,
                color: "#BDB124"

            }, {
                name: 'Not in HR Database',
                y: 4.63,
                color: "#ecfbf5"
            } ]
        }]
    };

    return (
        <div className='mt-5'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default DistributionComplex;
