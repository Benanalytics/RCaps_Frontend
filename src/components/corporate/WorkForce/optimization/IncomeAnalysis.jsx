import React from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const IncomeAnalysis = () => {
  const options = {
    chart: {
      type: "column",
      height:'480',
    },
    title: {
      text: "",
    },
    subtitle: {
      text: "",
    },
    xAxis: {
      categories: ["RDGE", "RDGC", "RDGN", "RDGS" ,"RDGW","RDNG"],
      lineWidth:0
    },
    yAxis: [
      {
        title: {
          text: "",
        },
       
        tickPositions: [0, 30, 60, 90, 120,150,180,210],
      },
     
    ],
   
    plotOptions: {
      column: {
        pointWidth: 35,
        pointPadding: 1,
        borderWidth: 0,
        dataLabels: {
          enabled: true,
        },
      },
    },
    series: [
      {
        name: "Historical",
        data: [39, 81, 135, 198,62,72], 
        color: "#4be7cf",
      },
      {
        name: "Projected",
        data: [18, 79, 75, 124,56,32], 
        color: "#7c86ff",
      },
    
    ],
  };

  return (
    <div className="mt-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default IncomeAnalysis;
