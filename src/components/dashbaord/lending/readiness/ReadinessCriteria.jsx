import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import HighchartsMore from 'highcharts/highcharts-more';

// Initialize highcharts-more
HighchartsMore(Highcharts);

const ReadinessCriteria = () => {
  const chartOptions =  {

    chart: {
        polar: true,
        backgroundColor:'#ffffff',
        type: 'area'
    },
    title: {
        useHTML: true,
        text: '',
      floating: true,
        align:'left',
      },
    pane: {
        size: '60%'
    },

    xAxis: {
        categories: ['Project brief prepared and filed in SAP', 'Official financing request received', 'Task Manager assigned in SAP', 'E&S officer assigned',
            'Technical studies,including E&S studies,completed or scheduled to be finalized within 6 months',
             'Board date proposed in BPPS','E&S categorization posted in SAP','Delivery date for the PCN by CT or Opscom'],
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
        data: [29,53,90,49,47,53,13,64],
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
            style: {
              textOutline: 'none',
              color:'black'
            },
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
    <div  className=''>
      <HighchartsReact highcharts={Highcharts} options={chartOptions} />
    </div>
  );
};

export default ReadinessCriteria;