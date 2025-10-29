import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const FirstFinanceLineChart = ({data}) => {
  let staticData = [];

  if(data){
    staticData=data;
  }
 
  const options = {
    chart: {
      type: 'spline', // You can use 'line' or 'spline' based on your preference
      animation: Highcharts.svg,
      marginRight: 10,
      height: 45, 
      width:70,
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
          name: '',
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
            opacity: 0.1, // Shadow opacity
            width: 1, // Shadow width
          },
        },
      ],
    
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default FirstFinanceLineChart;
