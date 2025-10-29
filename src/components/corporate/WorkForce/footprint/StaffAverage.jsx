import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StaffAverage = () => {
  const staticData = [
    ['April-March',100],['April-March',200],['April-june',250],['April-july',200],['April-August',150]
   
   
    
   
    
    

  ];
 
  const options = {
    chart: {
      type: 'spline', // You can use 'line' or 'spline' based on your preference
      animation: Highcharts.svg,
      marginRight: 0,
      height: 80, 
      width:150,
      backgroundColor: '',
    },
    title: {
      text: '',
    },
    xAxis: {
      visible: false,
      dataLabels:{
        enabled:true

      }
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
          name: 'Staff Average',
          data: staticData,
          color: '#04bca6',
          lineWidth: 2,
          marker: {
            enabled: false,
          },
          shadow: {
            color: 'rgba(0, 0, 0, 0.5)', // Shadow color
            offsetX: 1, // Horizontal shadow offset
            offsetY: 2, // Vertical shadow offset
            opacity: 0.1, // Shadow opacity
            width: 9, // Shadow width
          },
          dataLabels:{
            enabled:true,
            style: {
              textOutline: 'none',
              color:'black'
            },
          }
        },
        {
            name: 'Average',
            data: [50,50,50,50,50],
            color: 'black',
            // dashStyle: 'dot',
            lineWidth: 1,
            marker: {
              enabled: false,
            },
          },
      ],
    
  };

  return (
    <div className='pull_right'>
       <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default StaffAverage;
