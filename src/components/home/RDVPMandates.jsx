import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
 

const RDVPMandates = () => {
  
const redirectToRegisterPage = () => {
  // Use navigate to navigate to the login page
  navigate('/register'); // Replace '/login' with the actual URL of your login page
};


const navigate = useNavigate();
  return (
    <div className='CallTo_actionLayout pt_80 pb_80'>
      <div className='max-w-benContainer'>
        <div className='CallTo_actionContent flex'>
              <div className='CallTo_actionLeft'>
                <div class="heading_topImg">
                  <img src="/assets/images/heading_topIcon.png" alt="Icon" class="" />
                </div>
                <h2 class="secondary_title">Call To Action</h2>
                <p className="f16 text-benGray">Join us in <span className='text-bold'>Driving Africa's growth.</span> <br></br>Discover more about RCAPS or get in touch for collaboration and insights</p>
              </div>
              <div class="CallTo_action_right mt-15">
                <button class="gradient_btn themebtn btn text-white rounded-md f14 flex gap-x-2 items-center"  onClick={redirectToRegisterPage} >Join Now <i class="ri-arrow-right-line f16"></i></button>
              </div>
        </div>
      </div>
  </div>
  
  );
};

export default RDVPMandates;
