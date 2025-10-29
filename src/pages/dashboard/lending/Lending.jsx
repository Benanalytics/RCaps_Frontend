import { AiOutlineRise } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import KPITable from 'components/dashbaord/lending/KPITable';
import RegionalCards from 'components/dashbaord/lending/RegionalCards';
import ComplexCards from 'components/dashbaord/lending/ComplexCards';
import LendingTabLinks from 'components/dashbaord/lending/LendingTabLinks';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
// import { Sparklines, SparklinesLine } from 'react-sparklines';
import LandingApproval from 'components/dashbaord/lending/LandingApproval';
import YOYGraph from 'components/dashbaord/lending/YOYGraph'

const Lending = () => {
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
        <div className='border_blue relative block bg-white rounded-md px-4 py-3  text-base input-box flex items-center f14 lg:w-58 datePicker-border'>
          <DatePicker
            selected={startDate}
            onChange={onChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            isClearable={true}
            placeholderText='Select Date Range'
            className=''
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
      </div>
      <div className='block w-full landingblock TotalLanding-block'>
        <div className='cardDiv grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 grid-margin CardDivgap cardHoverBoxShadow'>
          {[
             {title:'Total Landing Approvals',target:129},
             {title:'ADB Financing',target:100},
             {title:'ADB Public',target:80},
             {title:'ADB Private',target:60},
             {title:'Other Financing',target:40},
             {title:'Co-Financing & Syndication',target:20},
          ]?.map((chart) => (
            <div key={chart} className='card card-shadow bg-white rounded-md'>             
              <div className='cardBody'>
              <div className='cardTitle flex items-center'>
                <p className='f14 semibold text-uppercase text-normal mb-4'>
                  {chart.title}
                </p>
              </div>
                <div className='flex items-center justify-between gap-x-3 mb-4'>
                  <div className='flex flex-col items-start'>
                    <span className='flex items-center text-success graph-ratingBadge badge-sm mt-1 badge-ltblue rounded-circle'>
                      {' '}
                      <AiOutlineRise className='w-3 2xl:w-4 h-3 2xl:h-4 mr-1' />
                        09%
                    </span>
                      <p className='f20 text-benLightBlue text-bold block whitespace-nowrap'>
                        UA 3,11,417 M
                      </p> <p className='f11'>Achieved</p>{' '}
                     
                 </div>
                 <div className='total_landingGraph'>
                    <LandingApproval />
                    {/* <img  src='/assets/images/chart1.png' alt='landing Approval'/> */}
                  </div>                  
                </div>
                <div className='flex items-center gap-x-1 justify-between'>
                  <div className='flex items-center gap-x-3 flex1 justify-between'>
                      <div className=''>
                          <p className='f11'>Target</p>
                          <p className='f13 text-benGray'>
                            UA 2,85,141 M
                          </p>
                      </div>
                      <div className="border-r px-4">
                            <p className='f11'>YOY</p>
                              <div className='flex items-center justify-between'>
                                <p className='text-sm text-benBlue flex items-center'>
                                  <span className='f13 text-benGray' > {' '}</span>
                                  {/* <div className=' w-10 3xl:w-40 ml-1'>
                                    <Sparklines
                                      data={[
                                        2, 4, 3, 10, 5, 8, 20, 10, 9, 12, 11, 14, 30, 16, 18,
                                        20,
                                      ]}
                                      preserveAspectRatio='xMidYMid meet'
                                    >
                                      <SparklinesLine color='#01C38D' />
                                    </Sparklines>
                                  </div> */}
                                </p>
                                
                                <span className='flex items-center badge bg-transparent  text-xs rounded-full' style={{color:chart.target>0 && chart.target<=50 ?'#f87171':chart.target>50 && chart.target<=100?'#ffa412':chart.target>100?'#01c38d':'#01c38d'}}>
                                  {' '}
                                  <span className='w-1 2xl:w-2 h-1 2xl:h-2 rounded-full mr-1' style={{backgroundColor:chart.target>0 && chart.target<=50 ?'#f87171':chart.target>50 && chart.target<=100?'#ffa412':chart.target>100?'#01c38d':'#01c38d'}}></span>{' '}
                                  {chart.target}%
                                </span>
                              </div>
                      </div>
                   </div>
                   <div style={{width:'30%'}}><YOYGraph  target={chart.target}/></div>  
                              

                  </div>
              
               
              </div>
            </div>
          ))}
        </div>
        <KPITable />
        <RegionalCards />
        <ComplexCards />
      </div>
    </div>
  );
};

export default Lending;
