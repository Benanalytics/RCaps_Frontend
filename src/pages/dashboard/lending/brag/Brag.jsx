import LendingTabLinks from 'components/dashbaord/lending/LendingTabLinks';
import { BsSearch } from 'react-icons/bs';
import BragProjection from 'components/dashbaord/lending/brag/BragProjection';
import RegionalVariations from 'components/dashbaord/lending/brag/RegionalVariations';
import BragScheduling from 'components/dashbaord/lending/brag/BragScheduling';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import BreakdownChart from 'components/dashbaord/lending/brag/BreakdownChart';
import OperationsTable from 'components/dashbaord/lending/brag/OperationsTable';
import DeliveryChartOne from 'components/dashbaord/lending/brag/DeliveryChartOne';
import DeliveryChartTwo from 'components/dashbaord/lending/brag/DeliveryChartTwo';

const Brag = () => {
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <div className='ben__OverviewPage ben_LandingPage w-full block'>
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
        <div className='border_blue relative block bg-white rounded-md px-4 py-3  text-base input-box flex items-center f14  lg:w-58 datePicker-border'>
          <DatePicker
            selectsRange={true}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
              setDateRange(update);
            }}
            placeholderText='Select Date Range'
            isClearable={true}
            className='px-2 py-3 bg-white'
            showIcon
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
        <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap '>
          <BragProjection />
          <BragScheduling />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-1 CardDivgap '>
          <OperationsTable />
        </div>
         <div className='grid grid-cols-1 md:grid-cols-1 CardDivgap '>  
            <BreakdownChart />
          </div>
          <div className='grid grid-cols-1 md:grid-cols-1 CardDivgap '> 
             <RegionalVariations />
        </div>
        <div className=''>
          <div className='grid grid-cols-1 md:grid-cols-1 grid-margin CardDivgap'>
              <div className='card bg-white rounded-md card-shadow'>
                <div className='cardBody'>
                  <div className='flex justify-between flex-wrap brag_readiness'>
                     <div className="flex gap-x-4 BragContent">
                       <div className="Brag-Img"><i class="ri-file-list-3-line"></i></div>
                       <div className='text-benBlue'>
                          <h4 className='f14 semibold'>READINESS</h4>
                          <p className='f13 text-benGray'>80% of the 15 projects are at various stages of PCN.</p>
                        </div>
                      </div>
                      <div className="flex gap-x-4 BragContent  border-l border-benThinBlue pl-3">
                        <div className="Brag-Img"><i class="ri-file-text-line"></i></div>
                        <div className='text-benBlue'>
                          <h4 className='f14 semibold'>ESIA DOCUMENTS:</h4>
                            <p className='f13 text-benGray'>40% of projects still lack these vital documents.</p>
                          </div>
                      </div>

                      <div className="flex gap-x-4 BragContent border-l border-benThinBlue md:col-span-2 pl-3">
                        <div className="Brag-Img"><i class="ri-file-list-2-line"></i></div>
                        <div className='text-benBlue'>
                           <h4 className='f14 semibold'>PAR & ESIA IN TOP 10</h4>
                            <p className='f13 text-benGray'> Only 20% of the top 10 projects have both PAR approved and ESIA
                            documents confirmed
                           </p>
                          </div>
                      </div>
                  </div>
                </div>
              </div>          
          </div>
          <div className='grid grid-cols-1 md:grid-cols-2 CardDivgap'>
            <DeliveryChartOne />
            <DeliveryChartTwo />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brag;
