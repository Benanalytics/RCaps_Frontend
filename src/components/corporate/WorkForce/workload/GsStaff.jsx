import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const GsStaff = () => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 60,
            width:60,
            backgroundColor: '',
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            useHTML: true,
            text: `<div class='flex items-center justify-center flex-col'>
                    <h4 class='text-bold text-black f2 semibold'>8</h4>
                   
              </div>`,
            floating: true,
            verticalAlign: 'middle',
            y: 10,
          },
          tooltip: {
            enabled:false,
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
                innerSize: '70%', 
                size:"50",
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
                y: 70,
                sliced: false,
                selected: true,
                color: "#e9ecef"
            }, {
                name: 'D',
                y: 12.82,
                color: "#65c4e5"

            },  ]
        }]
    };

    return (
        <div className=''>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default GsStaff;
