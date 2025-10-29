import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

// Initialize highcharts-more
HighchartsMore(Highcharts);

const StaffingCompositionChart2 = () => {
  const chartOptions =  {

    chart: {
        polar: true,
        type: 'area',
        height: 550,
        backgroundColor: '',
    },
    title: {
        useHTML: true,
        text: '',
      floating: true,
        align:'left',
      },
    pane: {
        size: '100%'
    },

    xAxis: {
        categories: ['Algeria', 'Egypt', 'Tunisia', 'Burundi',
            'Comoros',
             'Dijbouti','Eritrea','Mozambique','Rwanda','Sudan','Uganda','Zambia'],
        tickmarkPlacement: 'on',
        lineWidth: 0
    },

    yAxis: {
        text:'',
        gridLineInterpolation: 'hexagon',
        lineWidth: 0,
        min: 0,
        title: {
            text: '',
          },
          labels: {
            enabled: false,
            format: '{value}%'
        },
        tickPositioner: function () {
          const positions = [];
          for (let i = 0; i <= 10; i++) {
            positions.push(i * 10);
          }
          return positions;
        }
    },
    legend: {
        enabled: false
    },
    colors: [ '#7c86ff '],
    series: [{
        name: '',
        data: [29,53,90,49,47,53,13,64,90,69,47,53],
        pointPlacement: 'on'
    }],
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
        series: {
          style: {
            fontSize: '.8125rem', 
          },    
          dataLabels: {
            enabled: true,
            format: '{y}%',
          },
        },
      },
    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                pane: {
                    size: '60%'
                }
            }
        }]
    }

}
  return (
    <div className="card bg-white rounded-md card-shadow grid-margin">
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap items-center justify-between">
          <div class="mb-4">
                  <p class="f14 semibold text-uppercase text-normal">Financial Landscape</p>
                  <p class="f13 semibold text-light text-benGray">Country-Level Analysis Of Financial Metrics</p>
            </div>   
          
          </div>
          <div className="mt-5">
            <HighchartsReact highcharts={Highcharts} options={chartOptions} />
          </div>
        </div>
  </div>
   
  );
};

export default StaffingCompositionChart2;