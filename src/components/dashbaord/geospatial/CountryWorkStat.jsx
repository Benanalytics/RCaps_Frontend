import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import React from 'react';
import { BsSearch } from "react-icons/bs";
import drilldown from 'highcharts/modules/drilldown';

// Initialize the drilldown module
drilldown(Highcharts);

const CountryWorkStat = ({data}) => {

  let mainData=[];
  let drilldownSeries=[];
  if(data){
    

     const regionToCountries = {
        North:data?.filter((x)=>x.region==="North").map((item) =>item.country),
        South:data?.filter((x)=>x.region==="South").map(item => item.country),
        East:data?.filter((x)=>x.region==="East").map(item => item.country),
        West:data?.filter((x)=>x.region==="West").map(item => item.country),
        Central:data?.filter((x)=>x.region==="Central").map(item => item.country),
        Nigeria: data?.filter((x)=>x.region==="Nigeria").map(item => item.country),
        Multinational:data?.filter((x)=>x.region==="Multi").map(item => item.country),
      };

      const sovereignData = {
        North: Number(data?.filter((x)=>x.region==="North").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="North").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="North").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
         South:  Number(data?.filter((x)=>x.region==="South").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="South").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="South").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
         East: Number(data?.filter((x)=>x.region==="East").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="East").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="East").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
         West: Number(data?.filter((x)=>x.region==="West").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="West").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="West").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
         Central: Number(data?.filter((x)=>x.region==="Central").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="Central").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="Central").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
          Nigeria:  Number(data?.filter((x)=>x.region==="Nigeria").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="Nigeria").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="Nigeria").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
           Multinational: Number(data?.filter((x)=>x.region==="Multi" || x.region==="Multinational").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="Multi" ||x.region==="Multinational").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="Multi" ||x.region==="Multinational").map(item => item.sovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
        
      };
      
      const nonSovereignData = {
        North: Number(data?.filter((x)=>x.region==="North").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="North").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="North").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
         South:Number(data?.filter((x)=>x.region==="South").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="South").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="South").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')),  
         East:Number(data?.filter((x)=>x.region==="East").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="East").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="East").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')),  
         West:Number(data?.filter((x)=>x.region==="West").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="West").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="West").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
         Central:Number(data?.filter((x)=>x.region==="Central").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="Central").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="Central").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
          Nigeria: Number(data?.filter((x)=>x.region==="Nigeria").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="Nigeria").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="Nigeria").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
           Multinational:Number(data?.filter((x)=>x.region==="Multi" ||x.region==="Multinational").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0) % 1===0?data?.filter((x)=>x.region==="Multi" ||x.region==="Multinational").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(0):data?.filter((x)=>x.region==="Multi" ||x.region==="Multinational").map(item => item.nonSovereignUaMillion).reduce((a,b)=>a+b,0).toFixed(1).replace(/,/g, '')), 
      };
    
      mainData = [
        {
          name: 'Sovereign',
          color: "#7c86ff",
          data: Object.keys(regionToCountries).map(region => ({
            name: region,
            y: sovereignData[region],
            drilldown: `${region}-Sovereign`
          }))
        },
        {
          name: 'Non-Sovereign',
          color: "#4be7cf",
          data: Object.keys(regionToCountries).map(region => ({
            name: region,
            y: nonSovereignData[region],
            drilldown: `${region}-Non-Sovereign`
          }))
        }
      ];


       drilldownSeries = Object.entries(regionToCountries).flatMap(([region, countries]) => {
        const sovereignData = countries.map(country => [country, ...data.filter((item)=>item.country===country).map((item)=>item.sovereignUaMillion)]); // Replace '1' with actual data
        const nonSovereignData = countries.map(country => [country,  ...data.filter((item)=>item.country===country).map((item)=>item.nonSovereignUaMillion)]); // Replace '0.5' with actual data
    
        return [
          {
            name: `${region}-Sovereign`,
            id: `${region}-Sovereign`,
            data: sovereignData
          },
          {
            name: `${region}-Non-Sovereign`,
            id: `${region}-Non-Sovereign`,
            data: nonSovereignData
          }
        ];
      });
  }
 
  const options = {
    chart: {
        type: 'column',
        height: 550,
      },
      title: {
        text: ''
      },
      xAxis: {
        type: 'category'
      },
      yAxis: {
        title: {
          text: ''
        },
        stackLabels: {
            enabled: true,
            style: {
              fontWeight: "bold",
            },
            formatter: function () {
             // return Highcharts.numberFormat(this.total, 0);
            // return `<b>${this.total>0?this.total  % 1 === 0 ?this.total.toFixed(0):this.total.toFixed(1):0}</b>`;
            let formattedValue=this.total>0?this.total.toLocaleString():0;
            return `<b>${formattedValue}</b>`;
            },
          }, 
      },
      legend: {
        enabled: true
      },
      plotOptions: {
        column: {
          stacking: 'normal',
          dataLabels: {
            enabled: true,
            color: 'black',
           backgroundColor: 'transparent',
            formatter: function () {
              let formattedValue = this.y.toLocaleString();
              let percentage = Number(((this.y / this.point.stackTotal) * 100).toFixed(1));
              percentage= percentage>0?percentage  % 1 === 0 ?percentage.toFixed(0):percentage.toFixed(1):0;
              return (
                '<div style="text-align:center;">' +
                formattedValue +
                "<br>(" +
                percentage +
                "%)</div>"
              );
            },
            useHTML: true,
            style: {
              textOutline: false,
            },
            verticalAlign: 'middle', // This will center the label in the middle of the bar
            inside: true
          }
        }
      },
      tooltip: {
        headerFormat: '<b>{series.name}</b><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y}</b> of {point.stackTotal}<br/>'
      },
      series: mainData,
     drilldown: {
        breadcrumbs: {
                       position: {
                          align: 'right'
                      }
                  },
       series: drilldownSeries
     },
      credits: {
        enabled: false // This will hide the Highcharts watermark
      }
    ,
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
  

  };

  return (
    <div className='card bg-white rounded-md card-shadow  grid-margin '>
        <div className="cardBody">
        <div class="cardTitle flex items-center flex-wrap items-center justify-between">
            <div class="mb-4">
           
                  <p class="f14 semibold text-uppercase text-normal">COUNTRY INVESTMENT SPECTRUM</p>
                  <p class="f13 semibold text-light text-benGray">Sovereign vs. Non-Sovereign Financial Commitments By Country</p>
            
            </div>  
        
          </div>
          <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4 justify-end">
              <form className="border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center f14">
                  <BsSearch className="pointer-events-none absolute inset-y-0 left-5 h-full w-4 text-benGray" />
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 f14 pl-8 text-benGray placeholder:text-benGray bg-transparent f14"
                    placeholder="Search..."
                    type="search"
                    name="search"
                   
                  />
                </form>
            </div>
          <div className='mt-4'>
             <HighchartsReact highcharts={Highcharts} options={options} />
         </div>
      </div>
    </div>
  );
};

export default CountryWorkStat;
