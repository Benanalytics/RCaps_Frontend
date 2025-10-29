import { complexData } from 'helper/helper';
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


export default function ComplexCards() {
  const options = {
    series: [
      {
        name: 'High - 2013',
        data: [5, 21, 8, 36],
      },
      {
        name: 'New Line - 2013',
        type:'spline',
        data: [23, 1, 24,3],
        dashStyle:'shortdot',
      },
    ],
    plotOptions: {
      spline: {
        dataLabels: {
          enabled: true,
          style: {
            textOutline: 'none',
            color:'black',
          },
      },
          enableMouseTracking: true
      }
  },
      chart: {
        type: 'spline',
        height:'100',
        backgroundColor:'#ffffff',
        toolbar: {
          show: true,
        },
      },
      title: {
        text: '',
      },
      colors: ['#ec4899', '#a855f7'],
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: 'smooth',
        width: 1,
      },
      legend: {
        enabled: false
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
   
      xAxis: {
        categories: ['Q1', 'Q2', 'Q3', 'Q4'],
        title: '',
        lineWidth: 0,
          gridLineWidth: 0,
          labels: {
            enabled: true,
          },
      },
      yAxis: {
        title: '',
        labels: {
          enabled: false,
        },
      },
   
  };
  return (
    <div className='card bg-white rounded-md card-shadow complexLayout'>
        <div className='cardBody'>
            <div class="cardTitle flex items-center flex-wrap items-center justify-between">
                <div className='mb-4'>
                    <p class="f14 semibold text-uppercase text-normal">COMPLEX YTD</p>
                    <p class="f11 semibold text-uppercase text-normal text-benGray">Lending  KPI Trajectory</p>
                </div>
                <div className='flex gap-x-3 mb-4 flex-wrap items-center mb-4'>
                       <p className='flex items-center'>
                        <span className='w-2.5 h-2.5 bg-red-500 rounded-circle mr-2'></span>
                        <span className='f12'> Below 50% of Target </span>
                      </p>
                      <p className='flex items-center'>
                        <span className='w-2.5 h-2.5 bg-orange-500 rounded-circle mr-2'></span>
                        <span className='f12'>50% - 80% of Target</span>
                      </p>
                      <p className='flex items-center'>
                        <span className='w-2.5 h-2.5 bg-green-500 rounded-circle mr-2'></span>
                        <span className='f12'>Above 80% of Target</span>
                      </p>
                      <p className='flex items-center'>
                        <span className='w-2.5 h-2.5 bg-pink-500 rounded-circle mr-2'></span>
                        <span className='f12'>Qtly Actual</span>
                      </p>
                      <p className='flex items-center'>
                        <span className='w-2.5 h-2.5 bg-purple-500 rounded-circle mr-2'></span>
                        <span className='f12'>Qtly Target</span>
                      </p>
                </div>
              </div>
              <div className='mt-4 flow-root pb0 mb0'>
                <div className='grid grid-cols-1 md:grid-cols-4 CardDivgap align-middle'>
                  {complexData?.map((card) => (
                    <div
                      key={`CardKey${card?.id}`}
                      className='card bg-white shadow-none rounded-md border-b border-t border-r border-l border-benBlue'
                    >
                      <div className='cardTitle  cardTitile-Spacer f13 border-b border-benBlue'>
                        {card?.title}
                      </div>
                      <div className='cardBody block w-full'>
                        <div className='flex items-center justify-between'>
                        <p className={`${card?.color} f14`}>
                            {card.percentage} UA 2,851.2 M
                          </p>
                          <p className='text-benPurple f14'>{card?.avg}%</p>
                        </div>
                        <div className='flex items-center justify-between mt-1 mb-3'>
                          <p className='text-benGray f12'>
                            {card.below}% below target
                          </p>
                          <p className='ttext-benGray f12'>YTD</p>
                        </div>
                        <div className=''>
                        <HighchartsReact highcharts={Highcharts} options={options} />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
        </div>
    </div>
  );
}
