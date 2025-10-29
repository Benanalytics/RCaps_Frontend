import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const EastLineChart = () => {
    const staticData = [
      ['April-March',-60],['April-March',60],['April-june',-60],['April-july',60],['April-August',-60],['April-Sep',60],['April-Sep',60],
      ];
 
  const options = {
    chart: {
      type: 'spline', // You can use 'line' or 'spline' based on your preference
      animation: Highcharts.svg,
      marginRight: 10,
      height: 45, 
      width:80,
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
          name: 'East',
          data: staticData,
          color: '#3a924f',
          lineWidth: 0.9,
          marker: {
            enabled: false,
          },
          shadow: {
            color: ['#3a924f'], // Shadow color
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

export default EastLineChart;
