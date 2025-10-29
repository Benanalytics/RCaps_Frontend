import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const NorthLineChart = () => {
    const staticData = [
      ['April-March',-60],['April-March',60],['April-june',-60],['April-july',60],['April-August',-60],['April-Sep',60],['April-Sep',60],
      ];
 
  const options = {
    chart: {
      type: 'spline', // You can use 'line' or 'spline' based on your preference
      animation: Highcharts.svg,
      marginRight: 0,
      marginRight: 0,
      height: 42, 
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
          name: 'North',
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
            width: 20, // Shadow width
          },
        },
      ],
    
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default NorthLineChart;
