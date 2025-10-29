import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { BiSolidChevronDown } from "react-icons/bi";
import { FaBars } from "react-icons/fa";
import { useSelector } from "react-redux";
import Avatar from "react-avatar";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { TbPencilDollar } from "react-icons/tb";
import { FaRupeeSign } from "react-icons/fa";
import { MdLogout, MdCancel } from 'react-icons/md';
import { useDispatch } from 'react-redux';
import { toggleLogin } from 'redux/auth/authSlice';
import {  useNavigate } from 'react-router-dom';
const DashboardHeader = ({ setToggleSidebar }) => {
  const { auth } = useSelector((state) => state);
  const [selected, setSelected] = useState("US");
  const [currentPage, setCurrentPage] = useState('geospatial');
  const location = useLocation();

  const dispatch = useDispatch();
  const navigate = useNavigate();
  console.log(auth?.userInfo?.user?.profileInfo?.profilePicturUrl);



  const handleLogout = () => {
    dispatch(toggleLogin({ isLogin: false, userInfo: null }));
    navigate('/');
  };

  useEffect(() => {
    
    const path = location.pathname;
    if (path.includes('lendingApproval')) {
      setCurrentPage('geospatial');
    }
  else  if (path.includes('geospatial')) {
      setCurrentPage('geospatial');
    }
    
    else if (path.includes('lending')) {
      setCurrentPage('lending');
    }
    
    else if (path.includes('pipeline')) {
      setCurrentPage('pipeline');
    } 
   
    
    else if (path.includes('portfolio')) {
      setCurrentPage('portfolio');
    } 
   
    else if (path.includes('corporate')) {
      setCurrentPage('corporate');
    }
    else {
     
      setCurrentPage('geospatial');
    }
  }, [location.pathname]);

  return (
    <div className="sticky top-0 z-40 flex h-auto shrink-0 items-center gap-x-4 bg-white navbar">
      <button
        type="button"
        className="px-5 text-gray-700 lg:hidden"
        onClick={() => setToggleSidebar()}
      >
        <span className="sr-only">Open sidebar</span>
        <FaBars className="h-6 w-6" aria-hidden="true" />
      </button>

      <div className="flex flex-1 gap-x-4 lg:gap-x-6  items-center navbar-content">
      <div className="mb-1">
          <h2 className="f22 text-bold">
            {currentPage === 'geospatial' && 'Geospatial'}
            {currentPage === 'lending' && 'Lending'}
            {currentPage === 'corporate' && 'Corporate'}
            {currentPage === 'pipeline' && 'Geospatial'}

            {currentPage === 'portfolio' && 'Geospatial'}
            {currentPage === 'lendingApproval' && 'lending Approval'}

           
          </h2>
        
        </div>
        {/* <h2 className='text-2xl text-bold'>Lending</h2> */}
        <div className="flex items-center gap-x-4 lg:gap-x-6 ml-auto">
        <select name="" id="" className="text-uppercase">
              <option value="USD($)">
              USD($)
              </option>
              <option value="EUR(€)">
              EUR(€)
              </option>
            </select>
          <ul class="navbar-nav flex gap-x-6 ">
           

            {/* <li className="flex gap-x-3 items-center">
              <a class="nav-link " href="#">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  class="h-5 w-5 link-icon"
                  aria-hidden="true"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M384 368h24a40.12 40.12 0 0040-40V168a40.12 40.12 0 00-40-40H104a40.12 40.12 0 00-40 40v160a40.12 40.12 0 0040 40h24"
                  ></path>
                  <rect
                    width="256"
                    height="208"
                    x="128"
                    y="240"
                    fill="none"
                    stroke-linejoin="round"
                    stroke-width="32"
                    rx="24.32"
                    ry="24.32"
                  ></rect>
                  <path
                    fill="none"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M384 128v-24a40.12 40.12 0 00-40-40H168a40.12 40.12 0 00-40 40v24"
                  ></path>
                  <circle cx="392" cy="184" r="24"></circle>
                </svg>
              </a>
            </li> */}
            <li className="flex gap-x-3 items-center">
              <a class="nav-link " href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="feather feather-bell"
                >
                  <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                  <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <div class="indicator">
                  <div class="circle"></div>
                </div>
              </a>
            </li>
            <li className="Language-content flex gap-x-3 items-center flag_content">
              <ReactFlagsSelect
                selected={selected}
                countries={["US", "FR", "DE", "PT", "ES"]}
                customLabels={{
                  US: "English",
                  FR: "French",
                  DE: "German",
                  PT: "Portuguese",
                  ES: "Spanish",
                }}
                placeholder="Select Language"
                showSelectedLabel={false}
                // selectedSize={14}
                onSelect={(code) => setSelected(code)}
                fullWidth={false}
              />
            </li>
          </ul>

          <Menu as="div" className="relative">
            <Menu.Button className="flex items-center">
              <span className="sr-only">Open user menu</span>
              {!auth?.userInfo?.user?.profileInfo?.profilePicturUrl ? (
                <img
                  className="rounded-circle h-10 w-10 object-cover object-topCenter"
                  src="/assets/images/face1.jpg"
                  alt="Profile"
                />
              ) : (
                // <Avatar
                //   name={auth?.userInfo?.user?.displayName}
                //   size={30}
                //   round
                // />
                <img
                  className="rounded-circle h-10 w-10 object-cover object-topCenter"
                  src="/assets/images/face1.jpg"
                  alt="Profile"
                />
              )}
             
            </Menu.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 z-10  origin-top-right rounded-md bg-white  shadow-lg ring-1 ring-gray-900/5 focus:outline-none navbar-toggleProfile">
                <div class="flex grow flex-col border-bottom px-5 py-3">
                  <div class="mb-3 navbar-UserProfile ">
                    <img
                      class="rounded-circle mx-auto object-cover object-topCenter"
                      src="/assets/images/face1.jpg"
                      alt="Profile"
                    />
                  </div>
                  <div class="text-center">
                    <p class="f14 text-bold">Bernard Okpe</p>
                    <p class="f12 text-light text-benGray mt-1">
                    bernardokpe@outlook.com
                    </p>
                  </div>
                </div>
                <ul className="p-1 user-profileList">
                  <li>
                    <Menu.Item>
                      <Link
                        to="/dashboard/profile"
                        className="w-full block py-1 px-2 "
                      >
                        <i class="ri-user-line"></i> Profile
                      </Link>
                    </Menu.Item>
                  </li>
                  <li></li>

                  <li  className='nav-item '>
                  <button
                    onClick={handleLogout}
                    className='nav-link w-full flex gap-x-1 py-1 px-2 '
                  >
                    <MdLogout
                      className='h-4 w-4 link-icon'
                      aria-hidden='true'
                    />
                    <span className='link-title f12'> Logout</span>
                  </button>
                </li>

                </ul>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default DashboardHeader;
