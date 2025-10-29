import DGsSummarySignSheet from 'components/corporate/Budget/WPA360/DGsSummarySignSheet';
import VpsSummarySignSheet from 'components/corporate/Budget/WPA360/VpsSummarySignSheet';
import WPA360Matrix from 'components/corporate/Budget/WPA360/WPA360Matrix';
import Sector from 'components/corporate/Budget/WPA360/Sector';
import KeyDeliverables from 'components/corporate/Budget/WPA360/KeyDeliverables';
import Composition from 'components/corporate/Budget/WPA360/Composition';
import Share from 'components/corporate/Budget/WPA360/Share';
import HighFives from 'components/corporate/Budget/WPA360/HighFives';
import BudgetComposition from 'components/corporate/Budget/WPA360/BudgetComposition';
import ProjectApprovalShare from 'components/corporate/Budget/WPA360/ProjectApprovalShare';
import ProjectApproval from 'components/corporate/Budget/WPA360/ProjectApproval';
import OverallBudgetCircle from 'components/corporate/Budget/WPA360/OverallBudgetCircle';
import OverallBudgetBar from 'components/corporate/Budget/WPA360/OverallBudgetBar';
import CorporateTabLinks from 'components/dashbaord/corporate/CorporateTabLinks';
import DatePicker from 'react-datepicker';
import { useState } from 'react';
import { FaUserLock } from "react-icons/fa";
import { FaEye } from "react-icons/fa";
import { IoPrintOutline } from "react-icons/io5";
import { HiOutlineCloudDownload } from "react-icons/hi";

const WPA360 = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const [selectedOption, setSelectedOption] = useState('Complex');
    const [selectedOption1, setSelectedOption1] = useState('Department');
    const [selectedOption2, setSelectedOption2] = useState('Region');
    const [selectedOption3, setSelectedOption3] = useState('Country');
    const [selectedOption4, setSelectedOption4] = useState('FundCenter');
    const [selectedOption5, setSelectedOption5] = useState('BudgetUnit');
    const [selectedOption6, setSelectedOption6] = useState('WorkProgramCategory ');
    const [selectedOption7, setSelectedOption7] = useState('Status');
    const handleSelectChange = (event) => {
      setSelectedOption(event.target.value); // Update the selected option in the state
    };
    const handleSelectChange1 = (event) => {
      setSelectedOption1(event.target.value); // Update the selected option in the state
    };
    const handleSelectChange2 = (event) => {
      setSelectedOption2(event.target.value); // Update the selected option in the state
    };
    const handleSelectChange3 = (event) => {
      setSelectedOption3(event.target.value); // Update the selected option in the state
    };
    const handleSelectChange4 = (event) => {
      setSelectedOption4(event.target.value); // Update the selected option in the state
    };
    const handleSelectChange5 = (event) => {
      setSelectedOption5(event.target.value); // Update the selected option in the state
    };
    const handleSelectChange6 = (event) => {
      setSelectedOption6(event.target.value); // Update the selected option in the state
    };
    const handleSelectChange7 = (event) => {
      setSelectedOption7(event.target.value); // Update the selected option in the state
    };

    const onChange = (dates) => {
      const [start, end] = dates;
      setStartDate(start);
      setEndDate(end);
    };
  
    return (
      <div className='ben__GeospatialPage ben_LandingPage w-full block'>
        {/* <CorporateTabLinks /> */}
       
        <div className="ben_FiltersAction flex items-center gap-2 lendingFilter_Action justify-end">
            
            <div className="flex items-center gap-x-2 flex-wrap">
                  <div className="border_blue relative block bg-white rounded-md px-4 py-3  text-base input-box flex items-center f14 lg:w-58 datePicker-border mb-4">
                     <DatePicker
                     selected={startDate}
                      onChange={onChange}
                      startDate={startDate}
                      endDate={endDate}
                      selectsRange
                      isClearable={true}
                      placeholderText='DD/MM/YYYY'
                      className=''
                      showIcon
                    />
                  </div>
                  <button className='border_blue bg-white text-benLightGray px-4 py-3 mb-4 rounded-md input-box f14 flex gap-x-2 items-center btn text-white'  style={{backgroundColor:'#7c86ff'}} >
                        <HiOutlineCloudDownload className='h-5 w-5 link-icon' aria-hidden='true' />
                          <span className='link-title f14 text-white'>Download Report</span>
                  </button>
            </div>
          </div>
            <div className='block w-full landingblock'>
              <div className='flex CardDivgap grid_onesixth wpa_overallBudget flex-wrap'>
                <div class="card card-shadow bg-white rounded-md w-70 grid-margin">
                  <div class="cardBody">
                    <div class="cardTitle flex items-center flex-wrap">
                        <p class="f14 semibold text-uppercase text-normal mb-4">Overall Budget</p>
                    </div>
                    <div className='mt-4'>
                      <div className='flex gap-x-3'>
                            <div className='w-60'><OverallBudgetBar /></div> 
                            <div className='w285 flex items-center'><OverallBudgetCircle  /></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="card card-shadow bg-white rounded-md grid-margin flex1">
                  <div class="cardBody">
                      <div class="cardTitle flex items-center flex-wrap">
                          <p class="f14 semibold text-uppercase text-normal mb-4"></p>
                      </div>
                      <div className='mt-4'>
                          <div className='flex flex1 gap-x-3 justify-center mb-4'>
                                <div className='mt-1 mb-1'>
                                    <button className='border_black bg-white text-benLightGray rounded-md themebtn f14 flex items-center gap-x-2'  style={{backgroundColor:'#e3e3e3'}} >
                                      <FaUserLock className='h-4 w-4 link-icon' aria-hidden='true' />
                                      <span className='link-title f14 text-black'>Sign Off</span>
                                    </button>
                                </div>
                                <div className='mt-1 mb-1'>
                                  <button className='border_blue bg-white text-benLightGray rounded-md themebtn themePurpleBg f14 flex items-center gap-x-2 text-white' style={{backgroundColor:'#7c86ff'}}>
                                    <FaEye className='h-4 w-4 link-icon' aria-hidden='true' />
                                    <span className='link-title f14'>Request Review</span>
                                  </button>
                                </div>
                          </div>
                           <div className='flex flex1 gap-x-2'>
                                  <div className='flex1 mb-1-5 mt-1-5'>
                                          <select value={selectedOption} onChange={handleSelectChange}
                                      name='program'
                                      id='program'
                                      className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100  text-white'
                                      style={{backgroundColor:'#4be7cf',  borderColor:'#4be7cf'}}
                                      >
                                          {/* <option value="">Select Leading Program</option> */}
                                          <option value='Complex' className=' text-white'>Complex</option>
                                          {/* <option value='WestAfrica'>West Africa</option>
                                          <option value='EastAfrica'>East Africa</option>
                                          <option value='CenterAfrica'>Center Africa</option>
                                          <option value='CenterWestAfrica'>Center West Africa</option>
                                          <option value='SouthAfrica'>South Africa</option> */}
                                      </select>
                                  </div>
                                  <div className='flex1 mb-1-5 mt-1-5'>
                                    <select value={selectedOption1} onChange={handleSelectChange1}
                                name='program'
                                id='program'
                                className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100  text-white'
                                style={{backgroundColor:'#4be7cf', borderColor:'#4be7cf'}}
                                >
                                    {/* <option value="">Select Leading Program</option> */}
                                    <option value='Department'  className='text-white'>Department</option>
                                    {/* <option value='WestAfrica'>West Africa</option>
                                    <option value='EastAfrica'>East Africa</option>
                                    <option value='CenterAfrica'>Center Africa</option>
                                    <option value='CenterWestAfrica'>Center West Africa</option>
                                    <option value='SouthAfrica'>South Africa</option> */}
                                </select>
                              </div>
                            </div>

                            <div className='flex flex1 gap-x-2'>
                            <div className='flex1 mb-1-5 mt-1-5'>
                                  <select value={selectedOption2} onChange={handleSelectChange2}
                              name='program'
                              id='program'
                              className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100  text-white'
                              style={{backgroundColor:'#7c86ff', borderColor:'#7c86ff'}}
                              >
                                  {/* <option value="">Select Leading Program</option> */}
                                  <option value='Region'  className='text-white'>Region</option>
                                  {/* <option value='WestAfrica'>West Africa</option>
                                  <option value='EastAfrica'>East Africa</option>
                                  <option value='CenterAfrica'>Center Africa</option>
                                  <option value='CenterWestAfrica'>Center West Africa</option>
                                  <option value='SouthAfrica'>South Africa</option> */}
                              </select>
                                  </div>
                                  <div className='flex1 mb-1-5 mt-1-5'>
                                  <select value={selectedOption3} onChange={handleSelectChange3}
                              name='program'
                              id='program'
                              className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100  text-white'
                              style={{backgroundColor:'#7c86ff',  borderColor:'#7c86ff'}}
                              >
                                  {/* <option value="">Select Leading Program</option> */}
                                  <option value='Country'  className='text-white'>Country</option>
                                  {/* <option value='WestAfrica'>West Africa</option>
                                  <option value='EastAfrica'>East Africa</option>
                                  <option value='CenterAfrica'>Center Africa</option>
                                  <option value='CenterWestAfrica'>Center West Africa</option>
                                  <option value='SouthAfrica'>South Africa</option> */}
                              </select>
                                  </div>
                            </div>

                            <div className='flex flex1 gap-x-2'>
                            <div className='flex1 mb-1-5 mt-1-5'>
                                  <select value={selectedOption4} onChange={handleSelectChange4}
                              name='program'
                              id='program'
                              className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100 text-white'
                              style={{backgroundColor:'#ffa412',  borderColor:'#ffa412'}}
                              >
                                  {/* <option value="">Select Leading Program</option> */}
                                  <option value='FundCenter'  className='text-white'>Fund Center</option>
                                  {/* <option value='WestAfrica'>West Africa</option>
                                  <option value='EastAfrica'>East Africa</option>
                                  <option value='CenterAfrica'>Center Africa</option>
                                  <option value='CenterWestAfrica'>Center West Africa</option>
                                  <option value='SouthAfrica'>South Africa</option> */}
                              </select>
                                  </div>
                                  <div className='flex1 mb-1-5 mt-1-5'>
                                  <select value={selectedOption5} onChange={handleSelectChange5}
                              name='program'
                              id='program'
                              className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100 text-white'
                              style={{backgroundColor:'#ffa412',  borderColor:'#ffa412'}}
                              >
                                  {/* <option value="">Select Leading Program</option> */}
                                  <option value='BudgetUnit' className='text-white'>Budget Unit</option>
                                  {/* <option value='WestAfrica'>West Africa</option>
                                  <option value='EastAfrica'>East Africa</option>
                                  <option value='CenterAfrica'>Center Africa</option>
                                  <option value='CenterWestAfrica'>Center West Africa</option>
                                  <option value='SouthAfrica'>South Africa</option> */}
                              </select>
                                  </div>
                            </div>
                          
                            <div className='flex flex1 gap-x-2'>
                            <div className='flex1 mb-1-5 mt-1-5'>
                                  <select value={selectedOption6} onChange={handleSelectChange6}
                              name='program'
                              id='program'
                              className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100'
                              style={{backgroundColor:'#c5c9d8',  borderColor:'#c5c9d8'}}
                              >
                                  {/* <option value="">Select Leading Program</option> */}
                                  <option value='WorkProgramCategory'>Work Program Category</option>
                                  {/* <option value='WestAfrica'>West Africa</option>
                                  <option value='EastAfrica'>East Africa</option>
                                  <option value='CenterAfrica'>Center Africa</option>
                                  <option value='CenterWestAfrica'>Center West Africa</option>
                                  <option value='SouthAfrica'>South Africa</option> */}
                              </select>
                                  </div>
                                  <div className='flex1 mb-1-5 mt-1-5'>
                                  <select value={selectedOption7} onChange={handleSelectChange7}
                              name='program'
                              id='program'
                              className='bg-benThinGray text-benLightGray  py-3 px-6 rounded-md f14 input-box w100'
                              style={{backgroundColor:'#c5c9d8',  borderColor:'#c5c9d8'}}
                              >
                                  {/* <option value="">Select Leading Program</option> */}
                                  <option value='Status'>Status</option>
                                  {/* <option value='WestAfrica'>West Africa</option>
                                  <option value='EastAfrica'>East Africa</option>
                                  <option value='CenterAfrica'>Center Africa</option>
                                  <option value='CenterWestAfrica'>Center West Africa</option>
                                  <option value='SouthAfrica'>South Africa</option> */}
                              </select>
                                  </div>
                              </div>

                          
                    </div>
                </div>
              </div>
            </div>  
              <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
              <ProjectApproval /><ProjectApprovalShare  />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
              <HighFives /><BudgetComposition  />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
              <Composition /><Share />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 CardDivgap">
              <KeyDeliverables /><Sector />
              </div>
              <WPA360Matrix />
              <VpsSummarySignSheet />
              <DGsSummarySignSheet />
            </div>
      </div>
    );
  };

export default WPA360;
