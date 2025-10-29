import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const HeadQuaterBar = () => {
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
        style: {
          textOutline: 'none',
          color:'black'
        },
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
    tooltip: {
      enabled: false, // Hide the tooltip when hovering
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
          style: {
            textOutline: 'none',
            color:'black'
          },
          verticalAlign: 'top',
          y: 20, // Display data labels at the top of the bars
         
          formatter: function () {
            return this.y + '%';
          },
        },
      },
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
        name: 'STAFF TO WORKSTATION UTILIZATION',
        data: [17],
      },
      {
        name: 'WORKSTATION UTILIZATION',
        data: [37],
      },
    ],
  };

  return (
    <div className='mt-4555'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default HeadQuaterBar;
