import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const ComplexScaling = ({data}) => {
  let lessThan50Array=[];
  let fiftyto100Array=[];
  let hundredto200Array=[];
  let hundredto300Array=[];
  let greaterThan300Array=[];
if(data){
  const AHVPData= data.filter((item) => item.complex==="AHVP");
  const PEVPData= data.filter((item) => item.complex==="PEVP");
  const PIVPData= data.filter((item) => item.complex==="PIVP");
  const ECVPData= data.filter((item) => item.complex==="ECVP");

  if(AHVPData){
    const lessThan50= AHVPData.filter((item)=>item.selectUA30M==="<1-50 Mn");
    lessThan50Array.push(lessThan50.length>0?lessThan50[0].numberOfProjects:0);
    const fiftyto100=AHVPData.filter((item)=>item.selectUA30M==="50-100 Mn");
    fiftyto100Array.push(fiftyto100.length>0?fiftyto100[0].numberOfProjects:0);
    const hundredto200=AHVPData.filter((item)=>item.selectUA30M==="100-200 Mn");
    hundredto200Array.push(hundredto200.length>0?hundredto200[0].numberOfProjects:0);
    const hundredto300=AHVPData.filter((item)=>item.selectUA30M==="100-300 Mn");
    hundredto300Array.push(hundredto300.length>0?hundredto300[0].numberOfProjects:0);
    const  greaterThan300=AHVPData.filter((item)=>item.selectUA30M===">300 Mn");
    greaterThan300Array.push( greaterThan300.length>0?greaterThan300[0].numberOfProjects:0);
  }
  if(PEVPData){
    const lessThan50= PEVPData.filter((item)=>item.selectUA30M==="<1-50 Mn");
    lessThan50Array.push(lessThan50.length>0?lessThan50[0].numberOfProjects:0);
    const fiftyto100=PEVPData.filter((item)=>item.selectUA30M==="50-100 Mn");
    fiftyto100Array.push(fiftyto100.length>0?fiftyto100[0].numberOfProjects:0);
    const hundredto200=PEVPData.filter((item)=>item.selectUA30M==="100-200 Mn");
    hundredto200Array.push(hundredto200.length>0?hundredto200[0].numberOfProjects:0);
    const hundredto300=PEVPData.filter((item)=>item.selectUA30M==="100-300 Mn");
    hundredto300Array.push(hundredto300.length>0?hundredto300[0].numberOfProjects:0);
    const  greaterThan300=PEVPData.filter((item)=>item.selectUA30M===">300 Mn");
    greaterThan300Array.push( greaterThan300.length>0?greaterThan300[0].numberOfProjects:0);
  }
  if(PIVPData){
    const lessThan50= PIVPData.filter((item)=>item.selectUA30M==="<1-50 Mn");
    lessThan50Array.push(lessThan50.length>0?lessThan50[0].numberOfProjects:0);
    const fiftyto100=PIVPData.filter((item)=>item.selectUA30M==="50-100 Mn");
    fiftyto100Array.push(fiftyto100.length>0?fiftyto100[0].numberOfProjects:0);
    const hundredto200=PIVPData.filter((item)=>item.selectUA30M==="100-200 Mn");
    hundredto200Array.push(hundredto200.length>0?hundredto200[0].numberOfProjects:0);
    const hundredto300=PIVPData.filter((item)=>item.selectUA30M==="100-300 Mn");
    hundredto300Array.push(hundredto300.length>0?hundredto300[0].numberOfProjects:0);
    const  greaterThan300=PIVPData.filter((item)=>item.selectUA30M===">300 Mn");
    greaterThan300Array.push( greaterThan300.length>0?greaterThan300[0].numberOfProjects:0);
  }
  if(ECVPData){
    const lessThan50= ECVPData.filter((item)=>item.selectUA30M==="<1-50 Mn");
    lessThan50Array.push(lessThan50.length>0?lessThan50[0].numberOfProjects:0);
    const fiftyto100=ECVPData.filter((item)=>item.selectUA30M==="50-100 Mn");
    fiftyto100Array.push(fiftyto100.length>0?fiftyto100[0].numberOfProjects:0);
    const hundredto200=ECVPData.filter((item)=>item.selectUA30M==="100-200 Mn");
    hundredto200Array.push(hundredto200.length>0?hundredto200[0].numberOfProjects:0);
    const hundredto300=ECVPData.filter((item)=>item.selectUA30M==="100-300 Mn");
    hundredto300Array.push(hundredto300.length>0?hundredto300[0].numberOfProjects:0);
    const  greaterThan300=ECVPData.filter((item)=>item.selectUA30M===">300 Mn");
    greaterThan300Array.push( greaterThan300.length>0?greaterThan300[0].numberOfProjects:0);
  }
}
  const options = {
    chart: {
      type: "column",
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["AHVP", "PEVP", "PIVP","ECVP"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
      
     // tickPositions: [0, 20, 40, 60, 80, 100,120],
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
        y:-10,
        formatter: function () {
          let formattedValue=this.total.toLocaleString();
          return `<b>${formattedValue}</b>`;
        },
      },
      labels: {
        enabled: true, // Set this to false to hide y-axis labels
      },
    },
    legend: {
      align: "center",
      reversed: true,
      verticalAlign: "bottom",
      borderWidth: 0,
    },
    tooltip: {
      headerFormat: "<b>{point.x}</b><br/>",
      pointFormat: "{series.name}: {point.y}<br/>Total: {point.stackTotal}",
    },
    plotOptions: {
      column: {
        pointWidth:70,
        stacking: "normal",
        dataLabels: {
          style: {
            textOutline: 'none',
            color:'black'
          },
          enabled: true,
          align: "center",
          inside: true,
          verticalAlign: "bottom", 
          formatter: function () {
            let formattedValue = this.y.toLocaleString();
            var percentage = (this.y / this.point.stackTotal) * 100;
            const roundedPercentage = percentage  % 1 === 0 ?percentage.toFixed(0):percentage.toFixed(1);
              // Convert rounded percentage to string and remove trailing zero if exists
              const formattedPercentage = roundedPercentage.toString().replace(/\.0$/, '');
            return (
              '<div style="text-align:center;">' +
              formattedValue +
              "<br>(" +
              formattedPercentage +
              "%)</div>"
            );
          },
          useHTML: true, 
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
         x:16,
         y:-16,
        },
      },
    },
    series: [
      {
        name: ">300Mn",
        data: greaterThan300Array,
        color: "#ADD8E6",
      },
     
      {
        name: "100-300Mn",
        data: hundredto300Array,
        color: "#FFD580",
      },
      {
        name: "100-200Mn",
        data: hundredto200Array,
        color: "#CBC3E3",
      },
      {
        name: "50-100Mn",
        data: fiftyto100Array,
        color: "#FFDAB9",
      },
      {
        name: "<1-50Mn",
        data: lessThan50Array,
        color: "#355E3B",
      },
    ],
  };

  return (
    <div className="mt-5">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default ComplexScaling;
