import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const TaskManagers = () => {
  const staticData = [
    ['April-March',60],['April-March',520],['April-june',60],['April-july',420],['April-August',30],['April-Sep',500]
   
   
    
   
    
    

  ];
 
  const options = {
    chart: {
      type: 'spline', // You can use 'line' or 'spline' based on your preference
      animation: Highcharts.svg,
      marginRight: 0,
      height: 50, 
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
          name: 'Task Manager',
          data: staticData,
          color: '#04bca6',
          lineWidth: 2,
          marker: {
            enabled: false,
          },
          shadow: {
            color: 'rgba(0, 0, 0, 0.5)', // Shadow color
            offsetX: 1, // Horizontal shadow offset
            offsetY: 3, // Vertical shadow offset
            opacity: 0.2, // Shadow opacity
            width: 6, // Shadow width
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

export default TaskManagers;
