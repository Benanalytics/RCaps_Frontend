import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';

const options = {
  chart: {
    type: 'bar',
   height: 290,
   backgroundColor:'#ffffff',
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    categories: [
      'PESD',
      'PERN',
      'PESR',
    ],
    labels: {
       
      rotation: 0, // Set rotation angle (in degrees)
      staggerLines: 1, // Stagger lines to avoid overlapping
    },
    gridLineWidth: 0,
    lineWidth: 0
  },
  yAxis: {
    min: 0,
    title: {
      text: '',
    },
    stackLabels: {
      enabled: true,
    },
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: "bold",
      },
      formatter: function () {
        return Highcharts.numberFormat(this.total, 0);
      },
    },

    labels: {
        enabled: false,
     
  },
  },
 
  legend: {
    enabled: true,
    reversed: true,
    align: 'center',
    verticalAlign: 'bottom',
    borderWidth: 0,
  },
  tooltip: {
    headerFormat: "<b>{point.x}</b><br/>",
    pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
  },
  exporting: {
    enabled: true,
    buttons: {
      contextButton: {
        symbol:'menuball',
        symbolSize:'10',
        symbolFill:'#666666',
        text:'',
        symbolStrokeWidth:'1',
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
       x:26,
       y:-16,
      },
    },
  },
  plotOptions: {
    series: {
        stacking: 'normal',
      pointWidth: 24,
      dataLabels: {
        enabled: true,
        align: "right",  // You can try "left" or "right" based on your preference
        inside: true,
        verticalAlign: "center",  // You can try "top" or "middle" based on your preference
        formatter: function () {
          var percentage = (this.y / this.point.stackTotal) * 100;
          return (
            '<div style="text-align:center;">' +
            this.y +
            "<br>(" +
            Highcharts.numberFormat(percentage, 0) +
            "%)</div>"
          );
        },
        useHTML: true,
      },
      formatter: function () {
        var percentage = (this.y / this.point.stackTotal) * 100;
        return (
          '<div style="text-align:center;">' +
          this.y +
          "<br>(" +
          Highcharts.numberFormat(percentage, 0) +
          "%)</div>"
        );
      },
      groupPadding: 0.33,
      pointPadding: 1,
    },
  },
 
  series: [
    {
        name: 'TM WorkLoad',
        data: [30,20,30],
        color:'#ffa412',
      },
    {
        name: 'NSO Portfolio 2022',
        data: [10,17,20],
        color:'#7c86ff',
      },
    {
      name: 'SO Portfolio 2022',
      data: [124,50,25],
      color:'#4be7cf',
    },
   
  ],
};


const PortfolioTMs = () => {
  
  return (
    <div className='card bg-white rounded-md card-shadow grid-margin'>
        <div className="cardBody">
          <div class="cardTitle flex items-center flex-wrap">
                <p class="f14 semibold text-uppercase text-normal mb-4">PEVP WORKLOAD| PESD manages nearly 80% of PEVP portfolio with 46% of TMs</p>
          </div>
          <div className='mt-4'>
             <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
      </div>
    </div>
  );
};

export default PortfolioTMs;
