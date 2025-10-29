import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const adfActiveBarChart = () => {
  const options = {
    chart: {
      type: 'bar',
      height: 118,
    },
    title: {
      text: null,
    },
    xAxis: {
      categories: ['Public', 'Private'], // Define your categories here
      lineWidth: 0,
      gridLineWidth: 0,
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
    tooltip: {
      enabled: true, // Hide the tooltip when hovering
    },
    legend: {
      enabled: false,
    },
    plotOptions: {
      series: {
        colorByPoint: true,
        pointWidth:35, // Apply colors individually to each point
        dataLabels: {
          enabled: true,
          verticalAlign: 'center',
       
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
      enabled: true,
      buttons: {
        contextButton: {
          symbol: 'menuball',
          symbolSize: '10',
          symbolFill: '#666666',
          text: '',
          symbolStrokeWidth: '1',
          menuItems: [
            'viewFullscreen',
            'printChart',
            'downloadPNG',
            'downloadJPEG',
            'downloadPDF',
            'downloadSVG',
            'downloadCSV',
            'downloadXLS',
            'viewData',
          ],
          x: 16,
          y: -16,
        },
      },
    },
    colors: ['#8b7dfa', '#3ce9d0'], 
    series: [
      {
        name: 'AfDB Group Ongoing Portfolio',
        data: [78.9, 21.1], 
      },
    ],
  };

  return (
    <div className='mt-4 mb-4'>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default adfActiveBarChart;
