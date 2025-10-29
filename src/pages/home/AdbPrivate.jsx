import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AdbPrivate = ({data}) => {
  let dottedLineData=[];
  if(data){
   
    const privatefTotal= data.map(item => item.uaInMillionsAdbPrivate).reduce((a,b)=> a+b,0);
    let avg=(privatefTotal/data.length);
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
        name: 'Adb Private',
        data: data.map(item => ({
          y: item.uaInMillionsAdbPrivate,
          name: item.category, // Display category name for each data point
        })),
        color: '#7cbe89', // Set a color for the line
        lineWidth: 0.8, // Set the line width
        marker: {
          enabled: false,
        },
        shadow: {
            offsetX: 1, // Horizontal shadow offset
            offsetY: 2, // Vertical shadow offset
            opacity: 0.1, // Shadow opacity
            width: 3, // Shadow width
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

export default AdbPrivate;
