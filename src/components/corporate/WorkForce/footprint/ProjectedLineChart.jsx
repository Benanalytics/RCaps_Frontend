import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const ProjectedLineChart = () => {
    const staticData = [
      ['April-March',60],['April-March',60],['April-june',60],['April-july',60],['April-August',60],['April-Sep',60],['April-Sep',60],
       
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
          name: 'Nigeria',
          data: staticData,
          color: '#3a924f',
          lineWidth: 1.5,
          marker: {
            enabled: false,
          },
          shadow: {
            color: ['#3a924f'], // Shadow color
            offsetX: 1, // Horizontal shadow offset
            offsetY: 1, // Vertical shadow offset
            opacity: 0.1, // Shadow opacity
            width: 10, // Shadow width
          },
        },
      ],
    
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default ProjectedLineChart;
