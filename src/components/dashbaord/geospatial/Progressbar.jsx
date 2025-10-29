import React, { useEffect } from 'react';
import Highcharts from 'highcharts';

const Progressbar = ({data}) => {
  
  useEffect(() => {
    const chartOptions = {
      chart: {
        type: 'bar',
        height: 50,
        renderTo: 'container1', // Render the chart to the container with the ID "container1"
      },
      title: {
        text: '',
        align: 'center',
        margin: 0,
      },
      subtitle: {
        text: '',
        verticalAlign: 'bottom',
      },
      credits: {
        enabled: false,
      },
      legend: {
        enabled: false,
      },
      tooltip: {
        enabled: false,
      },
      plotOptions: {
        bar: {
          borderWidth: 0,
          borderRadius:0,
        },
      },
      xAxis: {
        visible: false,
      },
      yAxis: {
        visible: false,
        min: 0,
        max: 100,
        title: {
          text: null,
        },
        gridLineWidth: 0,
        labels: {
          y: -2,
        },
      },
      series: [
        {
          name: 'Fill',
          data: [100],
          // color: '#F5F8FE',
          color:'#e9ecef',
          grouping: false,
        },
        {
          name: 'Percentage',
          data: [data],
          // color: '#81808F',          
          color:'#7c86ff',
          dataLabels: {
            enabled: true,
            inside: true,
            align: 'right',
            format: '{point.y}%',
            style: {
              color: 'white',
              textOutline: 'none',
            },
          },
        },
      ],
      exporting: {
        enabled: false,
        buttons: {
          contextButton: {
            symbol: "menuball",
            symbolSize: "10",
            symbolFill: "#666666",
            text: "",
            symbolStrokeWidth: "1",
            menuItems: [
              "viewFullscreen",
              "printChart",
              "downloadPNG",
              "downloadJPEG",
              "downloadPDF",
              "downloadSVG",
              "downloadCSV",
              "downloadXLS",
              "viewData",
            ],
            x: 20,
            y: -20,
          },
        },
      },
    };

    // Create the bar chart
    Highcharts.chart(chartOptions);

  }, [data]);

  return <div id="container1" className='progress-width' style={{ width: '100%', height: 'auto' }} />;
};

export default Progressbar;