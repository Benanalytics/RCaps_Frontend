import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
const AdbPublic = ({data}) => {

let dottedLineData=[];
 if(data){
  
 const AdbPublicTotal= data.map(item => item.uaInMillionsAdbPublic).reduce((a,b)=> a+b,0);
 let avg=AdbPublicTotal/data.length;

 avg =avg % 1 === 0 ?avg.toFixed(0):avg.toFixed(1);
for(let i=0;i<=data.length;i++)
{
  dottedLineData.push( Number(avg.replace(/,/g, '')));
}

 };



  const options = {
    chart: {
      type: 'spline', // You can use 'line' or 'spline' based on your preference
      animation: Highcharts.svg,
      marginRight: 10,
      height: 50, 
      backgroundColor: '',
    },
    title: {
      text: '',
    },
    xAxis: {
      visible: false,
    },
    yAxis: {
      title: {
        visible: false,
      },
      visible: false,
    },
    tooltip: {
      enabled: true,
    },
    legend: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    series: [
      {
        name: 'ADB Public', // Static name for the data series
        data: data.map(item => ({
          y: item.uaInMillionsAdbPublic,
          name: item.category, // Display category name for each data point
        })),
        color: '#7cbe89',
        lineWidth: 0.8,
        marker: {
          enabled: false,
        },
        shadow: {
          offsetX: 1,
          offsetY: 2,
          opacity: 0.1,
          width: 3,
        },
      },
      {
        name: 'Average',
        data: dottedLineData,
        color: 'black',
        dashStyle: 'dot',
        lineWidth: 1,
        marker: {
          enabled: false,
        },
      },
    ],
    
    
  };

  return (
    
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default AdbPublic;
