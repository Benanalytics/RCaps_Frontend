import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const ScalingTransformation = ({data}) => {
  let lessThan50Array=[];
  let fiftyto100Array=[];
  let hundredto200Array=[];
  let hundredto300Array=[];
if(data){
  const ADBPrivateData= data.filter((item) => item.scalingTransformData?.financialSource==="ADB Private");
  const ADBPublicData= data.filter((item) => item.scalingTransformData?.financialSource==="ADB Public");
  const ADFIncludingTSFData= data.filter((item) => item.scalingTransformData?.financialSource==="ADF Including TSF");

  if(ADFIncludingTSFData){
    const lessThan50= ADFIncludingTSFData.filter((item)=>item.scalingTransformData?.selectUA30M==="<1-50 Mn");
    lessThan50Array.push(lessThan50.length>0?lessThan50[0].scalingTransformData?.numberOfProjects:0);
    const fiftyto100=ADFIncludingTSFData.filter((item)=>item.scalingTransformData?.selectUA30M==="50-100 Mn");
    fiftyto100Array.push(fiftyto100.length>0?fiftyto100[0].scalingTransformData?.numberOfProjects:0);
    const hundredto200=ADFIncludingTSFData.filter((item)=>item.scalingTransformData?.selectUA30M==="100-200 Mn");
    hundredto200Array.push(hundredto200.length>0?hundredto200[0].scalingTransformData?.numberOfProjects:0);
    const hundredto300=ADFIncludingTSFData.filter((item)=>item.scalingTransformData?.selectUA30M==="100-300 Mn");
    hundredto300Array.push(hundredto300.length>0?hundredto300[0].scalingTransformData?.numberOfProjects:0);
    
  }
  if(ADBPublicData){
    const lessThan50= ADBPublicData.filter((item)=>item.scalingTransformData?.selectUA30M==="<1-50 Mn");
    lessThan50Array.push(lessThan50.length>0?lessThan50[0].scalingTransformData?.numberOfProjects:0);
    const fiftyto100=ADBPublicData.filter((item)=>item.scalingTransformData?.selectUA30M==="50-100 Mn");
    fiftyto100Array.push(fiftyto100.length>0?fiftyto100[0].scalingTransformData?.numberOfProjects:0);
    const hundredto200=ADBPublicData.filter((item)=>item.scalingTransformData?.selectUA30M==="100-200 Mn");
    hundredto200Array.push(hundredto200.length>0?hundredto200[0].scalingTransformData?.numberOfProjects:0);
    const hundredto300=ADBPublicData.filter((item)=>item.scalingTransformData?.selectUA30M==="100-300 Mn");
    hundredto300Array.push(hundredto300.length>0?hundredto300[0].scalingTransformData?.numberOfProjects:0);
    
  }
  if(ADBPrivateData){
    const lessThan50= ADBPrivateData.filter((item)=>item.scalingTransformData?.selectUA30M==="<1-50 Mn");
    lessThan50Array.push(lessThan50.length>0?lessThan50[0].scalingTransformData?.numberOfProjects:0);
    const fiftyto100=ADBPrivateData.filter((item)=>item.scalingTransformData?.selectUA30M==="50-100 Mn");
    fiftyto100Array.push(fiftyto100.length>0?fiftyto100[0].scalingTransformData?.numberOfProjects:0);
    const hundredto200=ADBPrivateData.filter((item)=>item.scalingTransformData?.selectUA30M==="100-200 Mn");
    hundredto200Array.push(hundredto200.length>0?hundredto200[0].scalingTransformData?.numberOfProjects:0);
    const hundredto300=ADBPrivateData.filter((item)=>item.scalingTransformData?.selectUA30M==="100-300 Mn");
    hundredto300Array.push(hundredto300.length>0?hundredto300[0].scalingTransformData?.numberOfProjects:0);
   
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
      categories: ["ADF Including TSF", "ADB Public", "ADB Private"],
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
      },
     // tickPositions: [0, 20, 40, 60, 80, 100],
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
        formatter: function () {
          let formattedValue=this.total.toLocaleString();
          return `<b>${formattedValue}</b>`;
        },
      },
      labels: {
        enabled: false, // Set this to false to hide y-axis labels
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
          enabled: true,
          style: {
            textOutline: 'none',
            color:'black'
          },
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

export default ScalingTransformation;
