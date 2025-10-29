import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import React from "react";
import Highcharts from "highcharts";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; 
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsExportData from "highcharts/modules/export-data";
import HighchartsData from "highcharts/modules/data";
import HighchartsReact from "highcharts-react-official";
import { Menu} from "@headlessui/react";
HighchartsExporting(Highcharts);
HighchartsExportData(Highcharts);
HighchartsData(Highcharts);


const RangeOfTaskManager = () => {
  const options = {
    chart: {
      type: "column",
      height:'480' ,
      backgroundColor:'#ffffff',
    },
    title: {
      text: "",
      align: "left",
    },
    xAxis: {
      categories: ["0","1-2", "3-4","5-6","7-8","9-10", "11-12","13-14","15-16", "16-17"],
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
      tickPositions: [0, 500, 1000, 1500, 2000, 2500,3000],
      stackLabels: {
        enabled: true,
        style: {
          fontWeight: "bold",
        },
        formatter: function () {
          return Highcharts.numberFormat(this.total, 0);
        },
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
        pointWidth:40,
        stacking: "normal",
        dataLabels: {
          enabled: true,
          align: "center",
          inside: true,
          verticalAlign: "bottom", 
       
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
        name: "Lending",
        data: [549, 214, 240,979,682,601,614,987,231,863],
        color: "#fda632",
      },
      {
        name: "Potfolio",
        data: [549, 214, 240,979,682,601,614,987,231,863],
        color: "#8b7dfa",
      },
      {
        name: "Pipeline",
        data: [549, 214, 240,979,682,601,614,987,231,863],
        color: "#3ce9d0",
      },

     
    ],
  };
  const profileData = [
    { image: "/assets/images/face1.jpg", text: "Lee Caps  " },
    { image: "/assets/images/face1.jpg", text: "John " },
    { image: "/assets/images/face1.jpg", text: "Shown " },,
    { image: "/assets/images/face1.jpg", text: "Mike  " },
    { image: "/assets/images/face1.jpg", text: "Andrew " },
    { image: "/assets/images/face1.jpg", text: "Ben " },
    { image: "/assets/images/face1.jpg", text: "Sdhiman" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [startIndex, setStartIndex] = useState(0);

  const nextProfile = () => {
    setStartIndex((prevIndex) => (prevIndex + 1) % profileData.length);
  };
  
  const prevProfile = () => {
    setStartIndex((prevIndex) => (prevIndex - 1 + profileData.length) % profileData.length);
  };

  const profilesPerPage = 6;

  return (
    <div className="cardBody">
    <div class="cardTitle flex items-center flex-wrap">
          <p class="f14 semibold text-uppercase text-normal mb-4">Range Of Task Managers - Workload by Project</p>
    </div>
    <div className='mt-4'>
      <HighchartsReact highcharts={Highcharts} options={options} />
  </div>

  <div>
        <div className="cardTitle flex justify-between items-center">
            <div className="mb-4">
              <p class="f13 semibold text-light text-black">Top Ten Task Managers</p>
            </div>
            <div className="carousel_indicators mb-4 flex gap-x-2">
              <button onClick={prevProfile}>
                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="15" viewBox="0 0 8 15" fill="none">
                  <path d="M2.59986 8.21C2.50613 8.11704 2.43174 8.00644 2.38097 7.88458C2.3302 7.76272 2.30406 7.63201 2.30406 7.5C2.30406 7.36799 2.3302 7.23728 2.38097 7.11542C2.43174 6.99356 2.50613 6.88296 2.59986 6.79L7.18986 2.21C7.28359 2.11704 7.35798 2.00644 7.40875 1.88458C7.45952 1.76272 7.48566 1.63201 7.48566 1.5C7.48566 1.36799 7.45952 1.23728 7.40875 1.11542C7.35798 0.993563 7.28359 0.882962 7.18986 0.789999C7.0025 0.603748 6.74905 0.499207 6.48486 0.499207C6.22067 0.499207 5.96722 0.603748 5.77986 0.789999L1.18986 5.38C0.628058 5.9425 0.3125 6.705 0.3125 7.5C0.3125 8.295 0.628058 9.0575 1.18986 9.62L5.77986 14.21C5.96612 14.3947 6.21752 14.4989 6.47986 14.5C6.61147 14.5008 6.74193 14.4755 6.86377 14.4258C6.9856 14.376 7.09642 14.3027 7.18986 14.21C7.28359 14.117 7.35798 14.0064 7.40875 13.8846C7.45952 13.7627 7.48566 13.632 7.48566 13.5C7.48566 13.368 7.45952 13.2373 7.40875 13.1154C7.35798 12.9936 7.28359 12.883 7.18986 12.79L2.59986 8.21Z" fill="#374957"/>
                  </svg>
                  {/* <FaChevronLeft size={15} className="previous" /> */}
              </button>
              <button onClick={nextProfile}>
                 <svg xmlns="http://www.w3.org/2000/svg" width="8" height="14" viewBox="0 0 8 14" fill="none">
                    <path d="M1.81114 13.707L0.400146 12.293L5.68914 6.99997L0.400146 1.70697L1.81514 0.292969L7.10013 5.58597C7.47508 5.96102 7.68571 6.46964 7.68571 6.99997C7.68571 7.5303 7.47508 8.03891 7.10013 8.41397L1.81114 13.707Z" fill="#374957"/>
                 </svg>
                {/* <FaChevronRight size={15} className="next" /> */}
              </button>
            </div>
        </div>
        <div className="">
        <Menu as="div" className="flex items-center border-t carousel_slide three_carousel">
              {profileData.slice(startIndex, startIndex + profilesPerPage).map((profile, index) => (
                <div key={index} className="flex items-center carousel_item gap-x-2">
                  <div className="carousel_img"> 
                    <img
                        className="rounded-circle object-cover object-topCenter"
                        src={profile.image}
                        alt={`Profile ${index + startIndex + 1}`}
                      />
                    </div>
                    <div className="carousel_text">
                       <h6 class="f14 text-bold mb-2">{profile.text}</h6>
                       <div class="carousel_para">
                          <p class="f13 text-benGray"><span class="text-benLightBlue text-bold">1</span> Projects</p>
                          <p class="f13 text-benGray"><span class="text-benLightBlue text-bold">57%</span> Lending</p>
                          <p class="f13 text-benGray">AHVP</p>
                      </div>
                      {/* <p className="text-center">{profile.text}</p> */}
                    </div>
                </div>
              ))}
          </Menu>
        </div>
      </div>
</div>
  );
};

export default RangeOfTaskManager;
