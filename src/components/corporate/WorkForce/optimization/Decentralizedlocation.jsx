import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Decentralizedlocation = () => {
    const options = {
        chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie',
            height: 70,
            width: 70,
            backgroundColor: '',
            marginTop: -1,
            marginLeft:-2,
         
        },
        title: {
            text: '',
            align: 'left'
        },
       
        subtitle: {
            useHTML: true,
           
            floating: true,
            verticalAlign: 'middle',
            y: 15,
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
                innerSize: '70%', 
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
                color: "#e8baba"
            }, {
                name: 'D',
                y: 12.82,
                color: "#bcffdf"

            },  ]
        }]
    };

    return (
        <div className='BgYellow rounded-md Keystats_chart border_Yellow border-b border-l border-r border-t'>
            <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    );
};

export default Decentralizedlocation;
