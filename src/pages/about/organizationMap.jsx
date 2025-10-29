import React from "react";
import * as Highcharts from "highcharts";
import HighchartsSankey from "highcharts/modules/sankey";
import HighchartsOrganization from "highcharts/modules/organization"; // Import the correct module
import HighchartsExporting from "highcharts/modules/exporting";
import HighchartsReact from "highcharts-react-official"; 
// Import HighchartsReact
// Initialize the required Highcharts modules
HighchartsSankey(Highcharts);
HighchartsOrganization(Highcharts);
HighchartsExporting(Highcharts);

const OrganizationMap = () => {
  const options = {
    chart: {
      height: 1600,
      inverted: true,
      backgroundColor: "#f1f6fc",
    },
    // chart: {
    //   backgroundColor: "#FFFFFF", // Set default background color to white
    //   events: {
    //     beforeFullscreen: function () {
    //       this.update({
    //         chart: {
    //           backgroundColor: "#FFFFFF" // Set background color to white before entering full screen
    //         }
    //       });
    //     },
    //     afterFullscreen: function () {
    //       this.update({
    //         chart: {
    //           backgroundColor: "#FFFFFF" // Set background color to white after exiting full screen
    //         }
    //       });
    //     }
    //   }
    // },
    title: {
      text: "",
    },
    accessibility: {
      point: {
        descriptionFormat:
          "{add index 1}. {toNode.name}" +
          "{#if (ne toNode.name toNode.id)}, {toNode.id}{/if}, " +
          "reports to {fromNode.id}",
      },
    },
    series: [
      {
        type: "organization",
        name: "",
        keys: ["from", "to"],

        data: [
          ["M-Lakin-Olugbage", "Y.H.J. Baldeh"],
          ["M-Lakin-Olugbage", "Y.Glele-Ahanhanzo"],
          ["M-Lakin-Olugbage", "J.G.K Afrika, ag."],

          ["M-Lakin-Olugbage", "S-M Z. N’Guessan"],
          ["M-Lakin-Olugbage", "N. L. Nwabufo"],
          ["M-Lakin-Olugbage", "M. EL Azlzl"],
          ["M-Lakin-Olugbage", "L. Mokaddem"],
          ["M-Lakin-Olugbage", "J.M Ribeiro, Oic"],
          ["M-Lakin-Olugbage", "L.G. Barrow"],

          ["S-M Z. N’Guessan", "S.Kone"],
          ["S-M Z. N’Guessan", "M. Tangara"],
          ["S-M Z. N’Guessan", "S.Kones"],
          ["S-M Z. N’Guessan", "M.Souare"],
          ["S-M Z. N’Guessan", "M.Souare, oic."],

          ["N. L. Nwabufo", "A.B. Kamara"],
          ["N. L. Nwabufo", "E.J.R.Ruganzu"],
          ["N. L. Nwabufo", "N.L Nwabufo"],
          ["N. L. Nwabufo", "M. Blomberg"],
          ["N. L. Nwabufo", "A. Toure Sarr"],
          ["N. L. Nwabufo", "T. Bhebhe"],
          ["N. L. Nwabufo", "M.M. Monyau"],
          ["N. L. Nwabufo", "p. Laverly"],
          ["N. L. Nwabufo", "A.K. Ngafuan"],
          ["N. L. Nwabufo", "A. Toure Sarr"],

          ["M. EL Azlzl", "M. Blombergs"],
          ["M. EL Azlzl", "Y. Ahmad, oic"],
          ["M. EL Azlzl", "M. EL Azizi"],
          ["M. EL Azlzl", "L. Lachaal"],
          ["M. EL Azlzl", "A. Diaw"],
          ["M. EL Azlzl", "A.H. Tarsim"],

          ["L. Mokaddem", "K.K Mbekeani"],
          ["L. Mokaddem", "D.O.O. Ohonde"],
          ["L. Mokaddem", "Country Manager "],
          ["L. Mokaddem", "P. Toigo"],
          ["L. Mokaddem", "A. Amoumoun"],
          ["L. Mokaddem", "M.I Anyanwu"],
          ["L. Mokaddem", "R.O Durowoju"],
          ["L. Mokaddem", "C.M. Mupotola"],
          ["L. Mokaddem", "C.A MBA Abogo"],

          ["J.M Ribeiro, Oic", "J.M Ribeiro"],
          ["J.M Ribeiro, Oic", "B.M.J. Boedts"],
          ["J.M Ribeiro, Oic", "R. Masumbuko"],
          ["J.M Ribeiro, Oic", "D. Ndoye"],
          ["J.M Ribeiro, Oic", "E. Fasika"],
          ["J.M Ribeiro, Oic", "L.Bassole"],
          ["J.M Ribeiro, Oic", "B.S. kanu"],
          ["J.M Ribeiro, Oic", "J.M. Ribeiro"],

          ["S.Kones", "S.M.Z N’ Gussan"],

          ["L.G. Barrow", "O.M. Amu"],

          ["M.Souare", "N.K. Dia"],

          ["A.K. Ngafuan", "A.B. kamaras"],

          ["R. Masumbuko", "A. Nshimyumuremyi"],
          ["R. Masumbuko", "J.E.K. Andrianarisata"],
          ["R. Masumbuko", "M.A. Cherif"],
          ["R. Masumbuko", "H.Y. Hashi"],
          ["R. Masumbuko", "P.Abiola"],
        ],
        levels: [
          {
            level: 0,
            color: "#ffffff",
            dataLabels: {
              color: "black",
            },
          },
          {
            level: 1,
            color: "#ffffff",
            dataLabels: {
              color: "black",
            },
          },
          {
            level: 2,
            color: "#ffffff",
            dataLabels: {
              color: "black",
            },
          },
        ],
        nodes: [
          {
            id: "M-Lakin-Olugbage",
            title: "Vice Presidency, regional Development, Integration and Business delivery (RDVP)",
            // title: '<p style="font-size: 13px; position: absolute; top: 0;">Node Title</p>'
            name: "M-Lakin-Olugbage",
            image:`/assets/images/Img01.png`,
             // "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg",
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "Y.H.J. Baldeh",
            title: "Transition States Coordination Office (RDTS)",
            name: "Y.H.J. Baldeh",

            image:`/assets/images/Img02.png`,
             // "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg",

            dataLabels: {
              color: "black",
            },
            level: 1,
          },
          {
            id: "Y.Glele-Ahanhanzo",
            title: "Portfolio Monitoring and Delivery (RDSA)",
            name: "Y.Glele-Ahanhanzo",
            image:`/assets/images/Img03.png`,
             // "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg",
            level: 1,
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "J.G.K Afrika, ag.",
            title: "Regional Integration Coordination Office (RDRI)",
            name: "J.G.K Afrika, ag.",
            image:`/assets/images/Img04.png`,
             // "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            level: 1,
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "S-M Z. N’Guessan",
            layout: "hanging",
            title: "director General-Central (RDGC)",
            name: "S-M Z. N’Guessan",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg",
            level: 2,
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "N. L. Nwabufo",
            layout: "hanging",
            title: "Director General-East (RDGE)",
            name: "N. L. Nwabufo",

            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131210/Highsoft_04045_.jpg",
            level: 2,
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "M. EL Azlzl",
            layout: "hanging",
            title: "Director General-North (RDGN)",
            name: "M. EL Azlzl",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2022/06/30081411/portrett-sorthvitt.jpg",
            level: 2,
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "L. Mokaddem",
            layout: "hanging",
            title: "Director General-South (RDGS)",
            name: "L. Mokaddem",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            level: 2,
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "J.M Ribeiro, Oic",
            layout: "hanging",
            title: "Director General-West (RDGW)",
            name: "J.M Ribeiro, Oic",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            level: 2,
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "L.G. Barrow",
            layout: "hanging",
            title: "Director General Nigeria Country Dept (RDNG)",
            name: "L.G. Barrow",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            level: 2,
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "S.Kone",
            title: "Deputy Director General  (RDCC)",
            name: "S.Kone",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "M. Tangara",
            title: "RM portfolio & implementation Support (RDGC.4)",
            name: "L.G. Barrow",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "S.Kones",
            layout: "hanging",
            title: "Country Manager DRC (COCD)",
            name: "S.Kones",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },
          {
            id: "M.Souare",
            layout: "hanging",
            title: "Country Manager Cen. Afr, Republic (COCF)",
            name: "M.Souare",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "M.Souare, oic.",
            title: "Country Manager Chad (COTD)",
            name: "M.Souare, oic.",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A.B. Kamara",
            title: "Deputy Director General (RDCE)",
            name: "A.B. Kamara",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "E.J.R.Ruganzu",
            title: "RM portfolio & implementation Support (RDGE.4)",
            name: "E.J.R.Ruganzu",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "N.L Nwabufo",
            title: "Country Manager Kenya",
            name: "N.L Nwabufo",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "M. Blomberg",
            title: "Country Manager Burundi (COBI)",
            name: "M. Blomberg",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A. Toure Sarr",
            title: "Country Manager Rwanda (CORW)",
            name: "A. Toure Sarr",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "T. Bhebhe",
            title: "Country Manager South Sudan COSS)",
            name: "T. Bhebhe",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "M.M. Monyau",
            title: "Country Manager Sudan (COSD)",
            name: "M.M. Monyau",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "p. Laverly",
            title: "Country Manager Tanzania (COTZ)",
            name: "p. Laverly",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A.K. Ngafuan",
            title: "Country Manager Uganda (COUG)",
            name: "A.K. Ngafuan",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "M. Blombergs",
            title: "Deputy Director General (RDCN)",
            name: "M. Blombergs",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "Y. Ahmad, oic",
            title: "RM portfolio & implementation Support (RDGN.4)",
            name: "Y. Ahmad, oic",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "M. EL Azizi",
            title: "Country Manager Kenya Tunusia",
            name: "M. EL Azizi",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "L. Lachaal",
            title: "Country Manager Algeria (CODZ)",
            name: "L. Lachaal",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A. Diaw",
            title: "Country Manager Egypt (COEG)",
            name: "A. Diaw",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A.H. Tarsim",
            title: "Country Manager Morocco (COMA)",
            name: "A.H. Tarsim",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "K.K Mbekeani",
            title: "Deputy Director General (RDCS)",
            name: "K.K Mbekeani",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "D.O.O. Ohonde",
            title: "RM portfolio & implementation Support (RDGS.4)",
            name: "D.O.O. Ohonde",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "Country Manager ",
            title: "South Africa",
            name: "Country Manager ",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "P. Toigo",
            title: "Country Manager Angola (COAD)",
            name: "P. Toigo",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A. Amoumoun",
            title: "Country Manager Madagascar (COMG)",
            name: "A. Amoumoun",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "M.I Anyanwu",
            title: "Country Manager Malawi (COMW)",
            name: "M.I Anyanwu",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "R.O Durowoju",
            title: "Country Manager Zambia (COZM)",
            name: "R.O Durowoju",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "C.M. Mupotola",
            title: "Country Manager Zimbabwe (COZM)",
            name: "C.M. Mupotola",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "C.A MBA Abogo",
            title: "Country Manager Mozambique (COMZ)",
            name: "C.A MBA Abogo",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "J.M Ribeiro",
            title: "Deputy Director General  (RDCW)",
            name: "J.M Ribeiro",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "B.M.J. Boedts",
            title: "RM portfolio & implementation Support (RDGW.4)",
            name: "B.M.J. Boedts",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "R. Masumbuko",
            layout: "hanging",
            title: "Country Manager Benim (COBJ)",
            name: "R. Masumbuko",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "D. Ndoye",
            title: "Country Manager Burkina faso (COBF)",
            name: "D. Ndoye",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "E. Fasika",
            title: "Country Manager Ghana (COGH)",
            name: "E. Fasika",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "L.Bassole",
            title: "Country Manager Guinea (COGN)",
            name: "L.Bassole",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "B.S. kanu",
            title: "Country Manager Liberia (COLR)",
            name: "B.S. kanu",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "J.M. Ribeiro",
            title: "Country Manager Cote d’Ivoire",
            name: "J.M. Ribeiro",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "O.M. Amu",
            title: "Operations Support Manager (RDNG)",
            name: "O.M. Amu",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "S.M.Z N’ Gussan",
            title: "Country Manager Cameroon (COCM)",
            name: "S.M.Z N’ Gussan",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "N.K. Dia",
            title: "Country Manager Gabon (COGA)",
            name: "N.K. Dia",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A.B. kamaras",
            title: "Country Manager Etiopia (COET)",
            name: "A.B. kamara",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "A. Nshimyumuremyi",
            title: "Country Manager niger (COML)",
            name: "A. Nshimyumuremyi",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "J.E.K. Andrianarisata",
            title: "Country Manager niger (CONE)",
            name: "J.E.K. Andrianarisata",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "M.A. Cherif",
            title: "Country Manager Senegal (COSN)",
            name: "M.A. Cherif",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "H.Y. Hashi",
            title: "Country Manager Sierra Leone (COSL)",
            name: "H.Y. Hashi",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },

          {
            id: "P.Abiola",
            title: "Country Manager Togo (COTG)",
            name: "P.Abiola",
            image:
              "https://wp-assets.highcharts.com/www-highcharts-com/blog/wp-content/uploads/2020/03/17131213/Highsoft_03998_.jpg",
            dataLabels: {
              color: "black",
            },
          },
        ],

        colorByPoint: false,
        color: "#007ad0",
        dataLabels: {
          enabled: true,
          color: "white",
        },

        borderColor: "white",
      },
    ],
    tooltip: {
      outside: true,
      style: {
        visibility: "visible", // Make sure the tooltip is visible
        opacity: 1, // Make sure the tooltip is fully opaque
        transition: "none", // Remove any transition effects
        pointerEvents: "auto", // Enable pointer events for the tooltip
        zIndex: 9999, // Set a high z-index to ensure visibility
        // Add your custom class to the tooltip
        className: "custom-tooltip-class",
      },
    },
    exporting: {
      enabled: true,
      buttons: {
        contextButton: {
          symbol: "menuball",
          symbolSize: 10,
          symbolFill: "#666666",
          text: "",
          symbolStrokeWidth: 1,
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
          x: -10,
          y: 0,
          width: 20,
          theme: {
            fill: "#F4F7FF",
          },
        },
      },
    },
    
    
    plotOptions: {
      organization: {
        useHTML: true,
        nodeWidth: 65,
        // nodeHeight: 45,
        nodeFormatter: function () {
          const { name, title, image } = this.point.options;
          return `
              <div style="text-align: center;">
                <img src="${image}" style="max-width: 50px; max-height: 50px; border-radius: 50%; border: 2px solid #00008B;" />
                <div style="font-weight: bold; color: #00008B;">${name}</div>
                <div style="font-size: 12px;">${title}</div>
              </div>
            `;
        },
      },
    },
  };

  return (
    <div className="organization_layout ">
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default OrganizationMap;
