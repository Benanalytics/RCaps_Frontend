import React, {useState, useEffect } from "react";
import Highcharts from "highcharts/highmaps";
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";

HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);

const Map = ({data}) => {
  
  const [northRegionProjects,SetNorthRegionProjects]=useState('');
const [southRegionProjects,setSouthRegionProjects]=useState('');
const [eastRegionProjects,setEastRegionProjects]=useState('');
const [nigeriaRegionProjects,setNigeriaRegionProjects]=useState('');
//const [multiRegionProjects,setMultiRegionProjects]=useState('');
const [westRegionProjects,setWestRegionProjects]=useState('');
const [centralRegionProjects,setCentralRegionProjects]=useState('');


  useEffect(() => {
    if (data) {
      const northRegionTotalProjects = data.filter((item) => item.africanRegion === "North").map((item) => item.totalNumberOfProjects).reduce((a,b)=>a+b,0);
      const northRegionTotalSovereignProject = data.filter((item) => item.africanRegion === "North").map((item) => item.sovereignProject).reduce((a,b)=>a+b,0);
      const northRegionTotalNonSovereignProject = data.filter((item) => item.africanRegion === "North").map((item) => item.nonSovereignProject).reduce((a,b)=>a+b,0);
      const northRegionCountry = data.filter((item) => item.africanRegion === "North").map((item) =>{return{ name:item.country,sovereign:item.sovereignProject,nonSovereign:item.nonSovereignProject}});
      const northRegionData={
        TotalProjects:northRegionTotalProjects,
        TotalSovereignProject:northRegionTotalSovereignProject,
        TotalNonSovereignProject:northRegionTotalNonSovereignProject,
        Country:northRegionCountry
    };
      SetNorthRegionProjects(northRegionData || 0); // Set to 0 if undefined

      const southRegionTotalProjects = data.filter((item) => item.africanRegion === "South").map((item) => item.totalNumberOfProjects).reduce((a,b)=>a+b,0);
      const southRegionTotalSovereignProject = data.filter((item) => item.africanRegion === "South").map((item) => item.sovereignProject).reduce((a,b)=>a+b,0);
      const southRegionTotalNonSovereignProject = data.filter((item) => item.africanRegion === "South").map((item) => item.nonSovereignProject).reduce((a,b)=>a+b,0);
      const southRegionCountry = data.filter((item) => item.africanRegion === "South").map((item) =>{return{ name:item.country,sovereign:item.sovereignProject,nonSovereign:item.nonSovereignProject}});
      const southRegionData={
        TotalProjects:southRegionTotalProjects,
        TotalSovereignProject:southRegionTotalSovereignProject,
        TotalNonSovereignProject:southRegionTotalNonSovereignProject,
        Country:southRegionCountry
    };
     // const southRegionData = data.filter((item) => item.africanRegion === "South").map((item) => item.totalNumberOfProjects)[0];
      setSouthRegionProjects(southRegionData || 0); // Set to 0 if undefined

      const eastRegionTotalProjects = data.filter((item) => item.africanRegion === "East").map((item) => item.totalNumberOfProjects).reduce((a,b)=>a+b,0);
      const eastRegionTotalSovereignProject = data.filter((item) => item.africanRegion === "East").map((item) => item.sovereignProject).reduce((a,b)=>a+b,0);
      const eastRegionTotalNonSovereignProject = data.filter((item) => item.africanRegion === "East").map((item) => item.nonSovereignProject).reduce((a,b)=>a+b,0);
      const eastRegionCountry = data.filter((item) => item.africanRegion === "East").map((item) =>{return{ name:item.country,sovereign:item.sovereignProject,nonSovereign:item.nonSovereignProject}});
      const eastRegionData={
        TotalProjects:eastRegionTotalProjects,
        TotalSovereignProject:eastRegionTotalSovereignProject,
        TotalNonSovereignProject:eastRegionTotalNonSovereignProject,
        Country:eastRegionCountry
    };
      //const eastRegionData = data.filter((item) => item.africanRegion === "East").map((item) => item.totalNumberOfProjects)[0];
      setEastRegionProjects(eastRegionData || 0); // Set to 0 if` undefined

      const nigeriaRegionTotalProjects = data.filter((item) => item.africanRegion === "Nigeria").map((item) => item.totalNumberOfProjects).reduce((a,b)=>a+b,0);
      const nigeriaRegionTotalSovereignProject = data.filter((item) => item.africanRegion === "Nigeria").map((item) => item.sovereignProject).reduce((a,b)=>a+b,0);
      const nigeriaRegionTotalNonSovereignProject = data.filter((item) => item.africanRegion === "Nigeria").map((item) => item.nonSovereignProject).reduce((a,b)=>a+b,0);
      const nigeriaRegionCountry = data.filter((item) => item.africanRegion === "Nigeria").map((item) =>{return{ name:item.country,sovereign:item.sovereignProject,nonSovereign:item.nonSovereignProject}});
      const nigeriaRegionData={
        TotalProjects:nigeriaRegionTotalProjects,
        TotalSovereignProject:nigeriaRegionTotalSovereignProject,
        TotalNonSovereignProject:nigeriaRegionTotalNonSovereignProject,
        Country:nigeriaRegionCountry
    };
     // const nigeriaRegionData = data.filter((item) => item.africanRegion === "Nigeria").map((item) => item.totalNumberOfProjects)[0];
      setNigeriaRegionProjects(nigeriaRegionData || 0); // Set to 0 if undefined
     // const multiRegionData = data.filter((item) => item.africanRegion === "Multi").map((item) => item.totalNumberOfProjects)[0];
     // setMultiRegionProjects(multiRegionData || 0); // Set to 0 if undefined

     const westRegionTotalProjects = data.filter((item) => item.africanRegion === "West").map((item) => item.totalNumberOfProjects).reduce((a,b)=>a+b,0);
     const westRegionTotalSovereignProject = data.filter((item) => item.africanRegion === "West").map((item) => item.sovereignProject).reduce((a,b)=>a+b,0);
     const westRegionTotalNonSovereignProject = data.filter((item) => item.africanRegion === "West").map((item) => item.nonSovereignProject).reduce((a,b)=>a+b,0);
     const westRegionCountry = data.filter((item) => item.africanRegion === "West").map((item) =>{return{ name:item.country,sovereign:item.sovereignProject,nonSovereign:item.nonSovereignProject}});
     const westRegionData={
       TotalProjects:westRegionTotalProjects,
       TotalSovereignProject:westRegionTotalSovereignProject,
       TotalNonSovereignProject:westRegionTotalNonSovereignProject,
       Country:westRegionCountry
   };

      //const westRegionData = data.filter((item) => item.africanRegion === "West").map((item) => item.totalNumberOfProjects)[0];
      setWestRegionProjects(westRegionData || 0); // Set to 0 if undefined

      const centralRegionTotalProjects = data.filter((item) => item.africanRegion === "Central").map((item) => item.totalNumberOfProjects).reduce((a,b)=>a+b,0);
      const centralRegionTotalSovereignProject = data.filter((item) => item.africanRegion === "Central").map((item) => item.sovereignProject).reduce((a,b)=>a+b,0);
      const centralRegionTotalNonSovereignProject = data.filter((item) => item.africanRegion === "Central").map((item) => item.nonSovereignProject).reduce((a,b)=>a+b,0);
      const centralRegionCountry = data.filter((item) => item.africanRegion === "Central").map((item) =>{return{ name:item.country,sovereign:item.sovereignProject,nonSovereign:item.nonSovereignProject}});
      const centralRegionData={
        TotalProjects:centralRegionTotalProjects,
        TotalSovereignProject:centralRegionTotalSovereignProject,
        TotalNonSovereignProject:centralRegionTotalNonSovereignProject,
        Country:centralRegionCountry
    };
     // const centralRegionData = data.filter((item) => item.africanRegion === "Central").map((item) => item.totalNumberOfProjects)[0];
      setCentralRegionProjects(centralRegionData || 0); // Set to 0 if undefined
    }
  }, [data]);

  useEffect(() => {
    (async () => {
      const topologyResponse = await fetch(
        "https://code.highcharts.com/mapdata/custom/africa.topo.json"
      );
      const topology = await topologyResponse.json();
      const mapData = [
        ["ng", 1],
        ["tn", 2],
        ["dz", 3],
        ["ly", 4],
        ["eh", 5],
        ["mr", 6],
        ["ma", 7],
        ["eg", 8],
        ["ne", 9],
        ["ml", 10],
        ["sn", 11],
        ["gn", 12],
        ["gw", 13],
        ["bf", 14],
        ["gh", 15],
        ["sl", 16],
        ["tg", 17],
        ["bj", 18],
        ["ci", 19],
        ["lr", 20],
        ["za", 21],
        ["na", 22],
        ["bw", 23],
        ["ls", 24],
        ["sz", 25],
        ["mz", 26],
        ["zw", 27],
        ["zm", 28],
        ["ao", 29],
        ["mw", 30],
        ["mg", 31],
        ["td", 32],
        ["cm", 33],
        ["cf", 34],
        ["gq", 35],
        ["ga", 36],
        ["cg", 37],
        ["cd", 38],
        ["sd", 39],
        ["er", 40],
        ["dj", 41],
        ["et", 42],
        ["ss", 43],
        ["ug", 44],
        ["bi", 45],
        ["tz", 46],
        ["ke", 47],
        ["so", 48],
        ["sx", 49],
      ];
      
      
     

      Highcharts.mapChart("map-container", {
        chart: {
           map: topology,
          height:600,
        },
        title: {
          text: "",
        },
        tooltip: {
          useHTML: true,
          enabled: true,
          formatter: function () {
           // return '<b>' +  this.point.info.sover;
          //  return (
          //   '<div style="text-align:center;">' +
          //   "Sovereign :" + this.point.info.TotalSovereignProject +
          //   "<br>" +
          //   "Non-sovereign :"+this.point.info.TotalNonSovereignProject +
          //   "<br>" +
          //   "Total Projects :"+ this.point.info.TotalProjects +
          //   "<br>" +
          //   this.point.info.Country.map((item)=>(item.name
             
          //   ))
          //   +
          //   "</div>"
          // );

          let tooltipContent = '<div style="text-align:left; max-height: 200px; overflow-y: auto; padding: 5px;pointer-events: auto">' +
          "Total Sovereign: " + this.point.info.TotalSovereignProject + "<br>" +
          "Total Non-sovereign: " + this.point.info.TotalNonSovereignProject + "<br>" +
          "Total Projects: " + this.point.info.TotalProjects + "<br>" +
          "Countries: <br>";

// Iterate over the countries array
this.point.info.Country.forEach((country) => {
tooltipContent += "<b>" + country.name + "</b><br>";
tooltipContent += "Sovereign: " + country.sovereign + "<br>";
tooltipContent += "Non-sovereign: " + country.nonSovereign + "<br>";
});

tooltipContent += '</div>';

return tooltipContent;
          },
        },
        mapNavigation: {
          enabled: false,
          buttonOptions: {
            verticalAlign: "bottom",
          },
        },
        plotOptions: {
          mapbubble: {
            keys: ["id","url", "lat", "lon", "name","z",'info'],
            events:{
              click:function(e){
                  var url = e.point.url;
                  
                  window.open(url);
              }
          },
      
            dataLabels: {
              enabled: true,
              formatter: function () {
                return '<b>' +  this.point.name ;
              },
              color:'black',
              style: {
                textOutline: 'none',
              },
             
            },
          },
        },
        series: [
          {
            name: "",
            borderColor: "#A0A0A0",
            showInLegend: false,
            accessibility: {
              enabled: false,
            },
            enableMouseTracking: false
          },
          {
            name: "",
            type: "mapbubble",
            data: [
            {
                id: "cd",
                url: 'http://www.google.com',
                z: centralRegionProjects.TotalProjects,
                name: `${(Math.round(centralRegionProjects.TotalProjects)).toLocaleString()} Center`,
                lat: 2.56,
                lon: 20.2,
                info:centralRegionProjects
            },
            {
                id: "ng",
                url: 'https://en.wikipedia.org',
                z: nigeriaRegionProjects.TotalProjects,
                name: `${(Math.round(nigeriaRegionProjects.TotalProjects)).toLocaleString()} Nigeria`,
                lat: 9,
                lon: 8.01,
                info:nigeriaRegionProjects
            },
            {
              id: "bf",
              url: 'https://www.highcharts.com',
              z: westRegionProjects.TotalProjects,
              name: `${(Math.round(westRegionProjects.TotalProjects)).toLocaleString()} West`,
              lat: 13.31,
              lon: -4.59,
              info:westRegionProjects
          },
          { 
              id: "dz",
              url: 'https://www.w3schools.com',
              z: northRegionProjects.TotalProjects,
              name: `${(Math.round(northRegionProjects.TotalProjects)).toLocaleString()} North`,
              lat: 28.05,
              lon: 10.24,
              info:northRegionProjects
          },
          {
              id: "et",
              url: 'https://mui.com',
              z: eastRegionProjects.TotalProjects,
              name: `${(Math.round(eastRegionProjects.TotalProjects)).toLocaleString()} East`,
              lat: 9.15,
              lon: 36.74,
              info:eastRegionProjects
          },
          {
            id: "za",
            url: 'https://www.npmjs.com',
            z: southRegionProjects.TotalProjects,
            name: `${(Math.round(southRegionProjects.TotalProjects)).toLocaleString()} South`,
            lat: -20.74,
            lon: 25.19,
            info:southRegionProjects
        },
       ],
            
            nullColor: "#707070",
            showInLegend: false,
            enableMouseTracking: true, 
            accessibility: {
              enabled: false,
            },
          },
        ],
        exporting: {
          enabled: true,
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
              x: 16,
              y: -16,
            },
          },
        },
        legend: {
          enabled: false,
        },
      });
      
    })();
  }, [northRegionProjects,southRegionProjects,eastRegionProjects,centralRegionProjects,nigeriaRegionProjects,westRegionProjects]);

  return (
    <div>
      <div id="map-container"></div>
    </div>
  );
};

export default Map;
