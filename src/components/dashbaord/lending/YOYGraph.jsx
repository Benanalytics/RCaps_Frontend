import React,{useState} from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';


const YOYGraph = ({target}) => {
  
  const [targetColor,setTargetColor]=useState(target>0 && target<=50 ?'#f87171':target>50 && target<=100?'#ffa412':target>100?'#01c38d':'#01c38d');

    const options = {
        chart: {
             zoomType: 'x',
          height: '40',
          backgroundColor:'',
         // width: 80,
        },
        title: {
          text: '',
          align: 'left',
        },
        xAxis: {
          categories: [
        ],
        lineWidth: 0,
        gridLineWidth: 0,
        labels: {
            enabled: false,
          },
        },
        yAxis: {
          title: {
            text:null,
          },
          labels: {
            enabled: false,
          },
          stackLabels: {
            enabled: false,
          },
          lineWidth: 0,
          gridLineWidth: 0,
        },
        
        legend: {
            enabled: false
        },
        plotOptions: {
            area: {
                fillColor: {
                    linearGradient: {
                        x1: 0,
                        y1: 0,
                        x2: 0,
                        y2: 1
                    },
                     stops: [
                        [0,`${targetColor}`],
                         [1, Highcharts.color(`${targetColor}`).setOpacity(0.3).get('rgba')]
                     ]
                },
                marker: {
                    radius: 2
                },
                lineWidth: 1,
                states: {
                    hover: {
                        lineWidth: 1
                    }
                },
                threshold: null
            }
        },
        exporting: {
          enabled: false, // This enables the exporting options
          buttons: {
            contextButton: {
              menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"],
            },
          },
        },
        colors: [targetColor],
        series: [
          {type: 'area',
            name: '',
            data: [70, 90, 50, 60, 60, 90, 85],
          },
          {type: 'spline',
            name: 'Average',
            data: [70, 70, 70, 70, 70, 70, 70],
            color:'blue',
            marker:{
              enabled:false
            },
            dashStyle: 'shortdot',
          },
        ],
      };



  return (
    <div className=''>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default YOYGraph;
