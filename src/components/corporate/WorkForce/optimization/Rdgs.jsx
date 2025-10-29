import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Rdgs = () => {
  const options = {
    chart: {
      type: 'column',
      height: 150,
      
    },
    title: {
      text: null,
    },
    xAxis: {
    
     
      labels: {
        enabled: false,
      },
      lineWidth: 0, 
      gridlineWidth:0
    },
    yAxis: {
      visible: true,
      text:'',
      title:'',
      stackLabels: {
        enabled: true,
        formatter: function () {
          return this.total + '%';
        },
      },
      
      tickPositions: [0, 10, 20, 30,],
      labels: {
        formatter: function () {
          return this.value + '%';
        },
      }
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
        column: {
          pointWidth: 35,
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
          name: "Cetralized",
          data: [24],
        },
        {
          name: "Decetralized",
          data: [22],
        },
      ],
  };

  return (
    <div className=''>
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
  );
};

export default Rdgs;
