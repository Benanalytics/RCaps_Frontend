import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const LP = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 40,
      width:220,
      backgroundColor:'',
    },
    title: {
      text: null,
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
    yAxis: {
      visible: true,
      text: '',
      title: '',
      stackLabels: {
        enabled: true,
        formatter: function () {
          return this.total + '%';
        },
      },
      lineWidth: 0,
      gridLineWidth: 0,
      tickPositions: '',
      labels: {
        enabled: false,
      },
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      bar: {
        pointWidth: 9,
        groupPadding: 1.2,
        pointPadding: 3,
        dataLabels: {
          enabled: true,
          verticalAlign: 'bottom',
          y: 20, // Display data labels at the top of the bars
          style: {
            textOutline: 'none',
            color:'black'
          },
          formatter: function () {
            return this.y + '%';
          },
        },
      },
    },
    tooltip: {
      enabled: false, // Hide the tooltip when hovering
    },
    exporting: {
      enabled: false,
      buttons: {
        contextButton: {
          menuItems: ['viewFullscreen', 'printChart', 'downloadPNG', 'downloadJPEG', 'downloadPDF', 'downloadSVG'],
        },
      },
    },
    colors: [ '#3ce9d0','#8b7dfa',],
    series: [
    
      {
        name: 'STAFF TO WORKSTATION RATIO',
        data: [75],
      },
      {
        name: 'WORKSTATION UTILIZATION',
        data: [99],
      },
    ],
  };

  return (
    <div className=''>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default LP;
