import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ThirdFinanceChart = ({data}) => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 80,
            
             backgroundColor: '',
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            useHTML: true,
            text: `<div class='flex items-center justify-center flex-col'>
                    <h4 class='text-bold text-black f2 semibold'>${data}%</h4>
                   
              </div>`,
            floating: true,
            verticalAlign: 'middle',
            y: 10,
          },
          tooltip: {
            enabled: false, // Hide the tooltip when hovering
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
                    enabled: false
                },
                borderRadius: 0,
                showInLegend: true,
                innerSize: '62%', 
                size:'300%',
                showInLegend: false,// Adjust this value for the size of the blank space in the center
            },
        },
        exporting: {
            enabled: false,
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
                name: 'C',
                y: 74.9,
                sliced: false,
                selected: true,
                color: "#ebebeb"
            }, {
                name: 'D',
                y: 15.6,
                color: "#fda632"

            },  ]
        }]
    };

    return (
        <div className="">
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default ThirdFinanceChart;
