import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const StaffingWorkstationBars = () => {
  const options = {
    chart: {
      type: 'column',
      height: 70,
      width:70,
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
      lineWidth: 0,
      gridLineWidth: 0,
      tickPositions: '',
      labels: {
        enabled: false,
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
        column: {
          pointWidth: 15,
          groupPadding: 0.9, 
          pointPadding: 5, 
          dataLabels: {
            enabled: false,
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
          name: "WORKSTATION UTILIZATION",
          data: [7],
        },
        {
          name: "STAFF TO WORKSTATION RATIO",
          data: [5],
        },
      ],
  };

  return (
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default StaffingWorkstationBars;
