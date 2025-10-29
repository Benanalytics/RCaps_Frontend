import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const InfastructureLineChart2 = () => {
  const staticData = [
    ['April-March',20],['April-March',95],['April-june',35],['April-july',100],['April-August',60],['April-September',20],['April-October',70],['April-Nov.',40],['April-Dec.',40]
    
    
  ];
 
  const options = {
    chart: {
      type: 'spline', // You can use 'line' or 'spline' based on your preference
      animation: Highcharts.svg,
      marginRight: 0,
      height: 55, 
      width:90,
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
          name: 'Others',
          data: staticData,
          color: '#04bca6',
          lineWidth: 1,
          marker: {
            enabled: false,
          },
          shadow: {
            color: 'rgba(0, 0, 0, 0.5)', // Shadow color
            offsetX: 1, // Horizontal shadow offset
            offsetY: 1, // Vertical shadow offset
            opacity: 0.2, // Shadow opacity
            width: 2, // Shadow width
          },
        },
      ],
    
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default InfastructureLineChart2;
