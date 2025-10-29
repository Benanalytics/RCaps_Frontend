import LendingTabLinks from 'components/dashbaord/lending/LendingTabLinks';
import React from 'react';
import { BsSearch } from 'react-icons/bs';
import Highcharts from 'highcharts';

import HighchartsReact from 'highcharts-react-official';
import 'react-circular-progressbar/dist/styles.css';
import OverviewLineChart from 'components/dashbaord/lending/overview/OverviewLineChart';
import SectorChart from 'components/dashbaord/lending/overview/SectorChart';
import TransitionChart from 'components/dashbaord/lending/overview/TransitionChart';
import ProjectSummary from 'components/dashbaord/lending/overview/ProjectSummary';
import CountryChart from 'components/dashbaord/lending/overview/CountryChart';
import HighFivesChart from 'components/dashbaord/lending/overview/HighFivesChart';
import InstrumentChart from 'components/dashbaord/lending/overview/InstrumentChart';
import DeFactoChart from 'components/dashbaord/lending/overview/DeFactoChart';
import ProjectApprovalsChart from 'components/dashbaord/lending/overview/ProjectApprovalsChart';
import YearlySummary from 'components/dashbaord/lending/overview/YearlySummary';
import CircularProgressBar from 'components/dashbaord/lending/overview/CircularProgressBar';

const options = {
  chart: {
    type: 'spline',
    height: 290,
    backgroundColor:'#ffffff',
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  title: {
    text: '',
    align: 'left',
  },
  xAxis: {
    categories: [2018, 2019, 2020, 2021, 2022],
  },
  yAxis: {
    title: {
      text: '',
    },
  },
  tooltip: {
    crosshairs: true,
    shared: true,
  },
  navigation: {
    enabled: true,
    buttonOptions: {
      enabled: true,
    },
  },
  plotOptions: {
    spline: {
      dataLabels: {
        enabled: true,
        style: {
          textOutline: 'none',
          color:'black',
        },
    },
        enableMouseTracking: true
    }
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
  colors: ['#7c86ff', '#01C38D', '#ACB1C6'],
  series: [
    {
      name: 'SOV',
      data: [50, 100, 270, 130, 400],
    },
    {
      name: 'Average',
      data: [200, 80, 400, 500, 200],
    },
    {
      name: 'Non-Sovereign',
      data: [100, 300, 500, 200, 600],
    },
  ],
};

const LendingOverview = () => {
  return (
    <div className='ben__OverviewPage ben_LandingPage  w-full block'>
      <LendingTabLinks />
      <div className='ben_FiltersAction flex items-center mb-5 gap-2 lendingFilter_Action flex-wrap justify-end'>
        <form className='border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center f14'>
          <BsSearch className='pointer-events-none absolute inset-y-0 left-5 h-full w-4 text-benGray' />
          <label htmlFor='search-field' className='sr-only'>
            Search
          </label>
          <input
            id='search-field'
            className='block h-full w-full border-0 f14 pl-8 text-benGray placeholder:text-benGray bg-transparent f14'
            placeholder='Search...'
            type='search'
            name='search'
          />
        </form>
        <select
          name='program'
          id='program'
          className='border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex items-center lg:w-56 f14'
        >
          <option value>Select Lending Program</option>
          <option value='PAK'>Select Lending Program 1</option>
          <option value='US'>Select Lending Program 2</option>
          <option value='CA'>Select Lending Program 3</option>
        </select>
        <select
          name='program'
          id='program'
          className='border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex items-center lg:w-56 f14'
        >
          <option value>Select Classification</option>
          <option value='PAK'>Select Classification 1</option>
          <option value='US'>Select Classification 2</option>
          <option value='CA'>Select Classification 3</option>
        </select>
      </div>
      <div className='block w-full'>
        <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
          <div className='card bg-white rounded-md card-shadow grid-margin'>
              <div className="cardBody">
                <div class="cardTitle flex items-center flex-wrap justify-between">
                    <p class="f14 semibold text-uppercase text-normal mb-4"> Lending Progress</p>
                     <div className=''>
                    <select //value={selectedOption} onChange={handleSelectChange}
                    name='program'
                    id='program'
                    className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box'
                     >
                        <option value="">Select Lending Progress</option>
                        <option value='NorthAfrica'>Number</option>
                        <option value='WestAfrica'>Amount</option>
                        {/* <option value='EastAfrica'>East Africa</option>
                        <option value='CenterAfrica'>Center Africa</option>
                        <option value='CenterWestAfrica'>Center West Africa</option>
                        <option value='SouthAfrica'>South Africa</option> */}
                    </select>
                     
                  </div>
                </div>
                 
                <div className='mt-4'>
                  <HighchartsReact highcharts={Highcharts} options={options} />
                </div>
              </div>
          </div>
            
              {/* <div class="cardTitle flex items-center flex-wrap">
                  <p class="f14 semibold text-uppercase text-normal mb-4"> Lending Progress</p>
              </div> */}
              <div className='grid grid-cols-1 md:grid-cols-2 gap-x-5 justify-between'>
                <div className='card bg-white rounded-md card-shadow grid-margin'>
                          <div className="cardBody">
                              <div class="cardTitle flex items-center flex-wrap">
                                  <p class="f14 semibold text-uppercase text-normal mb-4"> SOV DELIVERY</p>
                              </div>
                              <div className='mt-4'>
                                  <div className='col-span-12 2xl:col-span-12'>
                                    <CircularProgressBar progress={77} projects={2038}/>
                                  </div>
                                  <div className='col-span-12 2xl:col-span-12 mt-2'>
                                      <div className="flex gap-x-4 flex-wrap Sovereign-OperationsContent">
                                        {/* <div class="Sovereign-OperationsImg">
                                          <i class="ri-government-line"></i>
                                        </div>                                      */}
                                          <div className='flex1 text-center'>
                                              <b className='f15 text-bold semibold'>Sovereign </b>
                                              <p className='f18 text-benLightBlue semibold'>
                                                UA
                                                <strong className='f25 mx-1 text-bold semibold'>34,067</strong> million
                                              </p>
                                              <span className='text-benGray f14 semibold'>
                                                2,038 Projects
                                              </span>
                                            </div>
                                      </div>                        
                                  </div>
                              </div>
                          </div>
                        </div>
                        <div className='card bg-white rounded-md card-shadow grid-margin'>
                          <div className="cardBody">
                              <div class="cardTitle flex items-center flex-wrap">
                                    <p class="f14 semibold text-uppercase text-normal mb-4"> NSO DELIVERY</p>
                              </div>  
                              <div className='mt-4'>
                                  <div className='col-span-12 2xl:col-span-12'>
                                        <CircularProgressBar progress={23} projects={1038}/>
                                  </div>        
                                 <div className='col-span-12 2xl:col-span-12 mt-2'>
                                  <div className="flex gap-x-4 flex-wrap Sovereign-OperationsContent">
                                     {/* <div class="Sovereign-OperationsImg">
                                        <i class="ri-bank-line"></i>
                                      </div> */}
                                      <div className='flex1 text-center'>
                                        <b className='f15 text-bold semibold'>Non-Sovereign </b>
                                        <p className='f18 text-benLightBlue semibold'>
                                          UA
                                          <strong className='f25 mx-1 text-bold semibold'>10,484</strong> million
                                        </p>
                                        <span className='text-benGray f14 semibold'>
                                           1,038 Projects
                                        </span>
                                        </div>
                                    </div>
                                  </div>
                             </div> 
                        </div>
                    </div>
              </div>
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <OverviewLineChart />
            <ProjectSummary />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <SectorChart />
            <HighFivesChart />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <CountryChart />
            <InstrumentChart />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <TransitionChart />
            <DeFactoChart />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <ProjectApprovalsChart />
            <YearlySummary />
        </div>
      </div>
    </div>
  );
};

export default LendingOverview;
