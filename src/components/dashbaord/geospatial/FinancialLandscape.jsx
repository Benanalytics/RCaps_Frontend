import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

import drilldown from 'highcharts/modules/drilldown';
// Initialize the drilldown module
drilldown(Highcharts);

// Initialize highcharts-more
HighchartsMore(Highcharts);

const FinancialLandscape = ({data}) => {
  let countryArray=[];
  let percentageArray=[];
  if(data){
     countryArray = data?.map(item => item.countryName);
     percentageArray =data?.map(item => item.uaAmountPercentage);
  }

  const chartOptions = {
    chart: {
      type: 'pie',
      height: 550,
  },
  title: {
      text: '',
      align: 'left'
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
    series: {
        borderRadius: 5,
        dataLabels: [{
            enabled: true,
            distance: 0,//15,
            format:''// '{point.name}'
        }, {
            enabled: true,
            distance: '-30%',
            filter: {
                property: 'percentage',
                operator: '>',
                value: 5
            },
            format: '{point.y:.1f}',
            style: {
               // fontSize: '0.9em',
                textOutline: 'none'
            }
        }],
          showInLegend: true

    }
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
    colors:["#32de84","#544fc5","#FF00FF","#fe6a35","#6b8abc","#C0C0C0"],

  series: [
    {
        name: 'Region',
        colorByPoint: true,
        data: [
            {
                name: 'North',
                y: 61.04,
                drilldown: 'North'
            },
            {
                name: 'East',
                y: 9.47,
                drilldown: 'East'
            },
            {
                name: 'Nigeria',
                y: 9.32,
                drilldown: 'Nigeria'
            },
            {
                name: 'South',
                y: 8.15,
                drilldown: 'South'
            },
            {
                name: 'West',
                y: 11.02,
                drilldown: 'West'
            },
            {
              name: 'Central',
              y: 11.02,
              drilldown: 'Central'
          }
        ]
    }
],
drilldown: {
  breadcrumbs: {
    position: {
        align: 'right'
    }
},
    series: [
        {
            name: 'North',
            id: 'North',
            data: [
                [
                    'v97.0',
                    36.89
                ],
                [
                    'v96.0',
                    18.16
                ],
                [
                    'v95.0',
                    0.54
                ],
                [
                    'v94.0',
                    0.7
                ],
                [
                    'v93.0',
                    0.8
                ],
                [
                    'v92.0',
                    0.41
                ],
                [
                    'v91.0',
                    0.31
                ],
                [
                    'v90.0',
                    0.13
                ],
                [
                    'v89.0',
                    0.14
                ],
                [
                    'v88.0',
                    0.1
                ],
                [
                    'v87.0',
                    0.35
                ],
                [
                    'v86.0',
                    0.17
                ],
                [
                    'v85.0',
                    0.18
                ],
                [
                    'v84.0',
                    0.17
                ],
                [
                    'v83.0',
                    0.21
                ],
                [
                    'v81.0',
                    0.1
                ],
                [
                    'v80.0',
                    0.16
                ],
                [
                    'v79.0',
                    0.43
                ],
                [
                    'v78.0',
                    0.11
                ],
                [
                    'v76.0',
                    0.16
                ],
                [
                    'v75.0',
                    0.15
                ],
                [
                    'v72.0',
                    0.14
                ],
                [
                    'v70.0',
                    0.11
                ],
                [
                    'v69.0',
                    0.13
                ],
                [
                    'v56.0',
                    0.12
                ],
                [
                    'v49.0',
                    0.17
                ]
            ]
        },
        {
            name: 'East',
            id: 'East',
            data: [
                [
                    'v15.3',
                    0.1
                ],
                [
                    'v15.2',
                    2.01
                ],
                [
                    'v15.1',
                    2.29
                ],
                [
                    'v15.0',
                    0.49
                ],
                [
                    'v14.1',
                    2.48
                ],
                [
                    'v14.0',
                    0.64
                ],
                [
                    'v13.1',
                    1.17
                ],
                [
                    'v13.0',
                    0.13
                ],
                [
                    'v12.1',
                    0.16
                ]
            ]
        },
        {
            name: 'Nigeria',
            id: 'Nigeria',
            data: [
                [
                    'v97',
                    6.62
                ],
                [
                    'v96',
                    2.55
                ],
                [
                    'v95',
                    0.15
                ]
            ]
        },
        {
            name: 'South',
            id: 'South',
            data: [
                [
                    'v96.0',
                    4.17
                ],
                [
                    'v95.0',
                    3.33
                ],
                [
                    'v94.0',
                    0.11
                ],
                [
                    'v91.0',
                    0.23
                ],
                [
                    'v78.0',
                    0.16
                ],
                [
                    'v52.0',
                    0.15
                ]
            ]
        },
        {
          name: 'West',
          id: 'West',
          data: [
              [
                  'v97',
                  6.62
              ],
              [
                  'v96',
                  2.55
              ],
              [
                  'v95',
                  0.15
              ]
          ]
      },
      {
          name: 'Central',
          id: 'Central',
          data: [
              [
                  'v96.0',
                  4.17
              ],
              [
                  'v95.0',
                  3.33
              ],
              [
                  'v94.0',
                  0.11
              ],
              [
                  'v91.0',
                  0.23
              ],
              [
                  'v78.0',
                  0.16
              ],
              [
                  'v52.0',
                  0.15
              ]
          ]
      }
    ]
},

  };
 
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

export default FinancialLandscape;