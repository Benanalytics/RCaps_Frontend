import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Executionrate = () => {
  const staticData = [
    ['April-March',60],['April-March',520],['April-june',60],['April-july',720],['April-August',30],['April-Sep',900],['April-Sep',700],
    
  ];
  const dottedLineData = [
    [60],
    [60],
    [60],
    [60],
    [60],
    [60],
    [60],
  
   
  ];

  const options = {
    chart: {
      type: 'spline', 
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
        name: 'Execution Rate',
        data: staticData,
        color: '#39933C', // Set a color for the line
        lineWidth: 2, // Set the line width
        marker: {
          enabled: false,
        },
      },
      {
        name: '',
        data: dottedLineData,
        color: 'black',
        dashStyle: 'dot',
        lineWidth: 2,
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

export default Executionrate;
