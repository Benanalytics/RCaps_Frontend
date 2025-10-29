import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'column',
    height: 300,
    backgroundColor: '#ffffff',
  },
  title: {
    text: '',
  },
  xAxis: {
    categories: [
      'AHVP',
      'RDVP',
      'ECVP',
      'PEVP',
      'PIVP',
      'URPR',
      'SNVP',
      'FIVP'
    ],
    labels: {
      
      rotation: 0, // Set rotation angle (in degrees)
      staggerLines: 1, // Stagger lines to avoid overlapping
    },
  },
  legend: {
    align: 'center',
    verticalAlign: 'bottom',
    borderWidth: 0,
  },
  yAxis: [
    {
      labels: {
        enabled: true,
      },
      title: {
        text: '',
      },
      stackLabels: {
        enabled: true,
      },
     
      tickPositions: [0, 20, 40, 60, 80, 100],
      reversed: false,
    },
    {
        title: {
          text: "",
        },
        opposite: true,
        tickPositions: [0, 2, 4, 6, 8, 10,], // Original values on the right side
        labels: {
          formatter: function () {
            // Convert the original values to percentages
            return (this.value) + "%";
          },
        
        },
      }
      
    
   
  ],
  plotOptions: {
    column: {
      pointWidth: 25,
      stacking: 'normal',
      dataLabels: {
        enabled: false,
       
        style: {
          textOutline: 'none',
      }
      },
    },
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
  colors: ["#b7e1ce"],
  series: [
    {
      data: [87, 82, 79, 75,69,100,40,100],
      name: 'Snapshot Achievement (%)',
    },

    {
      data: [9,9,9,9,9,9,9,9 ],
      name: 'Annual Target (82%)',
      type:'spline',
      dashStyle:'shortdot',
      color: '#2ea9e0',
      marker: {
        enabled: false,
      },
      yAxis:1,
      dataLabels: {
        enabled: false,
        formatter: function() {
            // Display the original value followed by a percentage symbol
            return this.y + '%';
          },
      },
    },

    {
        data: [2,4,6,9,3,5,9,10],
        name: 'Year-to-Date Performance Trend (%)',
        type:'line',
        color: '#2ea9e0',
        marker: {
          enabled: true,
          symbol: 'diamond',
          radius: 5,
        },
        yAxis:1,
        dataLabels: {
          enabled: true,
          style: {
            textOutline: 'none',
            color:'black'
          },
          formatter: function() {
              // Display the original value followed by a percentage symbol
              return this.y + '%';
            },
        },
      },

  ],


};

const Decentralizedevolution = () => {
  return (
    
    <HighchartsReact highcharts={Highcharts} options={options} />
  );
};

export default Decentralizedevolution;
