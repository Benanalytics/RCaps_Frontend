import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TotalAdbLineChart = () => {
    const staticData = [
      ['April-March',20],['April-March',95],['April-june',35],['April-july',100],['April-August',60],['April-September',20],['April-October',70],['April-Nov.',40],['April-Dec.',40]
         
       
      ];
 
  const options = {
    chart: {
      type: 'spline', 
      animation: Highcharts.svg,
      marginRight: 0,
      height: 40, 
      width:75,
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
          name: 'ADB',
          data: staticData,
          color: '#f48774',
          lineWidth: 0.9,
          marker: {
            enabled: false,
          },
          shadow: {
            color: ['#f48774'], // Shadow color
            offsetX: 8, // Horizontal shadow offset
            offsetY: 8, // Vertical shadow offset
            opacity: 0.8, // Shadow opacity
            width: 10, // Shadow width
          },
        },
      ],
    
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default TotalAdbLineChart;
