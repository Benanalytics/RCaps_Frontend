import React from "react";
import Highcharts from "highcharts";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const StaffingComposition = () => {
  const options = {
    chart: {
      type: "column",
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["AHVP", "PIVP", "PEVP", "ECVP"],
      labels: {
       
        rotation: 0, // Set rotation angle (in degrees)
        staggerLines: 1, // Stagger lines to avoid overlapping
      },
    },
    yAxis: {
      min: 0,
      title: {
        text: "",
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
      tickPositions: [0, 50,100,150,200,250,300,350],
      // labels: {
      //   formatter: function () {
      //     return (this.value) + "%";
      //   },
      
      // },
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
        pointWidth:35,
        stacking: "normal",
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
        data: [70,70,70,70],
        name: 'Average',
        type:'line',
        color: '#000000',
        marker: {
          enabled: false,
        },
        zIndex: 2,
      },
      {
        name: "VP | Directors | Managers",
        data: [139, 55, 62, 46],
        color: "#aeb0c5",
      },

      {
        name: "Coordination | Knowledge | Policy | Analyst | Corporation Portfolio | Adviser | Economist",
        data: [103, 42, 55, 47],
        color: "#fda632",
      },
      
      {
        name: "Gender Specialist | Climate Expert | Portfolio Officer",
        data: [56, 66, 87, 58],
        color: "#8b7dfa",
      },
      {
        name: "Task Managers",
        data: [67, 0, 119, 89],
        color: "#3ce9d0",
      },


   
    ],
  };

  return (
    <div class="card card-shadow bg-white rounded-md grid-margin">
      <div class="cardBody">
        <div class="cardTitle flex justify-between items-center">
          <div class="mb-4">
            <p class="f14 semibold text-uppercase text-normal">STAFFING COMPOSITION </p>
            <p class="f13 semibold text-light text-benGray">62% Of Operations PL Staff  Are Task Managers</p>
          </div>
          <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
            <select class="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14  lg:w-54">
              <option value="true">Division</option>
              <option value="true">Sector</option>
            </select>
            <select class="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 lg:w-54">
                <option value="true">Department</option>
                <option value="true">Sector</option>
            </select>
          </div>
        </div>
        <div className='mt-4'>
              <HighchartsReact highcharts={Highcharts} options={options} />
        </div>
    </div>
 </div>
  );
};

export default StaffingComposition;
