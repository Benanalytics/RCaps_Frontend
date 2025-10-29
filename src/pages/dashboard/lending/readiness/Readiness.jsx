// import { AiOutlineRise } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
// import KPITable from 'components/dashbaord/lending/KPITable';
// import RegionalCards from 'components/dashbaord/lending/RegionalCards';
// import ComplexCards from 'components/dashbaord/lending/ComplexCards';
//import Calendar from 'react-calendar';
//import 'react-calendar/dist/Calendar.css';

import LendingTabLinks from 'components/dashbaord/lending/LendingTabLinks';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import ApproveChart from 'components/dashbaord/lending/readiness/ApproveChart';
import QuarterlyLending from 'components/dashbaord/lending/readiness/QuarterlyLending';
import EsiaTable from 'components/dashbaord/lending/readiness/EsiaTable';
import QuartelyChart from 'components/dashbaord/lending/readiness/QuartelyChart';
import ComplexWideChart from 'components/dashbaord/lending/readiness/ComplexWideChart';
import LendingStatusTable from 'components/dashbaord/lending/readiness/LendingStatusTable';
import OverallStatus from 'components/dashbaord/lending/readiness/OverallStatus';
import ReadinessCriteria from 'components/dashbaord/lending/readiness/ReadinessCriteria';
import Calender from'components/dashbaord/lending/readiness/Calender';
const Readiness = () => {
 // const [calendarDate, onCalendarDate] = useState(new Date());
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const onChange = (dates) => {
    const [start, end] = dates;
    setStartDate(start);
    setEndDate(end);
  };

  return (
    <div className='ben__GeospatialPage ben_LandingPage w-full block'>
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
        <div className='relative block bg-white rounded-md px-4 py-3  text-base input-box flex items-center f14  lg:w-58 datePicker-border'>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            isClearable={true}
            placeholderText='Select Date Range'
            showIcon
            className=''
          />
        </div>
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
      </div>
      <div className='block w-full'>
         <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <div class="card card-shadow bg-white rounded-md grid-margin ">
              <div class="cardBody">
                <div class="cardTitle flex items-center flex-wrap">
                    <p class="f14 semibold text-uppercase text-normal mb-4">Calendar</p>
                </div>
                <div className='mt-4'>
                    {/* <Calendar
                  className='w-full h-full border-0 p-0'
                  onChange={onCalendarDate}
                  value={calendarDate}
                /> */}
                <Calender />
                </div>
              </div>
            </div>
            <div class="card card-shadow bg-white rounded-md grid-margin ">
              <div class="cardBody">
                  <div class="cardTitle flex items-center flex-wrap">
                      <p class="f14 semibold text-uppercase text-normal mb-4">Calendar</p>
                  </div>
                  <div className='mt-4'>
                  <ApproveChart />
                </div>
             </div>
           </div>
         </div>   
         <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <div class="card card-shadow bg-white rounded-md grid-margin">
              <div class="cardBody">
                <div class="cardTitle flex items-center flex-wrap">
                    <div class="mb-4 items-self-center">
                      <p class="f14 semibold text-uppercase text-normal">Readiness Criteria</p>
                      <p class="f11 semibold text-uppercase text-normal text-benGray">READINESS CRITERIA | Only 29% have project briefs filed in SAP</p>
                    </div>
                </div>
                <div className='mt-4'>
                <ReadinessCriteria />
                </div>
              </div>
           </div>  
           <div class="card card-shadow bg-white rounded-md grid-margin">
              <div class="cardBody">
                <div class="cardTitle flex items-center flex-wrap">
                    <p class="f14 semibold text-uppercase text-normal mb-4 ">Overall Status</p>
                </div>
                <div className='mt-4'>
                <OverallStatus />
                </div>
              </div>
           </div>  
        </div>  
         <div className='card bg-white rounded-md card-shadow grid-margin '>
          <QuarterlyLending />
        </div>
       
           <EsiaTable />

          <div className='grid grid-cols-1 md:grid-cols-2 grid-margin CardDivgap'>
            <QuartelyChart />
            <ComplexWideChart />
        </div>
        <div className='card bg-white rounded-md card-shadow'>
          <LendingStatusTable />
        </div>
      </div>
    </div>
  );
};

export default Readiness;
