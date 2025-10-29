import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AdfIncludingLineChart = ({data}) => {
 
  let staticData=[];
  if(data){
    staticData=data;
  }
   
 
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
      // style: {
      //   width: '250px',  // Set the width of the tooltip
      //   // height: '580px'   // Set the height of the tooltip
      // }
    },
    
    legend: {
      enabled: false,
    },
    exporting: {
      enabled: false,
    },
    series: [
        {
          name: 'ADF',
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

export default AdfIncludingLineChart;
