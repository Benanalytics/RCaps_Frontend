import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
    chart: {
        type: 'line',
        height: 300,
        backgroundColor: '#ffffff',
      
    },
    title: {
        text: '',
    },
    xAxis: {
        categories: [
            'APR 22',
            'OCT 22.',
            'NOV 22',
            'JAN 22',
          ],
          labels: {
      
            rotation: 0, // Set rotation angle (in degrees)
            staggerLines: 1, // Stagger lines to avoid overlapping
          },
        title: {
            enabled: false,
            text: ''
        },
       
    },
    yAxis: [{
        title: {
            text: ''
        },
        labels: {
            enabled: true,
            format: '{value}', // Show values as percentages
          },
        tickPositions: [0,20,40,60,80], 
        labels: {
          formatter: function () {
            return (this.value) + "%";
          },
        
        },
    }, 
    ],
    legend: {
      enabled: true, // Enable legend
      align: 'center',
      verticalAlign: 'bottom',
      borderWidth: 0,
  },
    plotOptions: {
        spline: {
            marker: {
                enable: true
            }
        },
        dataLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
            },
            format: '{point.y}%',
          },
          labels:{
            enabled:true,
          }
    },
    series: [{
        name: 'Operational Efficiency Trend',
        data: [74,71,73,78],
        color: '#8b7dfa',
        marker: {
            enabled: true },
            dataLabels: {
              enabled: true,
              style: {
                textOutline: 'none',
                color:'black'
              },
              formatter: function() {
                return this.y + '%';
              },
            },
    }, 
    {
        name: 'Annual Target Level',
        data: [78,78,78,80],
        color: '#79cbb2',
        type:'spline',
        dashStyle:'shortdot',
        lineWidth: 2, 
        marker: {
            enabled: false,
            symbol: 'circle', 
            lineColor: '#000000',
          },
            
    }, 


],
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
   
};


const OverallEffciencyPrecentage = () => {
  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default OverallEffciencyPrecentage;
