import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const NigeriaChart = () => {
  const options = {
    chart: {
      type: 'column',
      height: 120,
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
      text:'',
      title:'',
      stackLabels: {
        enabled: false,
        formatter: function () {
          return this.total + '%';
        },
      },
      
      tickPositions: [0, 10, 20, 600, 30],
      labels: {
        enabled: true,
        formatter: function () {
          return this.value + '%';
        },
      },
     
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
        column: {
          pointWidth: 25,
          groupPadding: 0.9, 
          pointPadding: 5, 
          dataLabels: {
            enabled: true,
            style: {
              textOutline: 'none',
            },
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
            menuItems: ["viewFullscreen", "printChart", "downloadPNG", "downloadJPEG", "downloadPDF", "downloadSVG"],
          },
        },
      },

      colors: [ "#8b7dfa", "#3ce9d0",],
      series: [
        {
          name: "Workstation Utilization",
          data: [5],
        },
        {
          name: "Staff To Workstation Ratio",
          data: [7],
        },
      ],
  };

  return (
    <div className=''>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
  );
};

export default NigeriaChart;
