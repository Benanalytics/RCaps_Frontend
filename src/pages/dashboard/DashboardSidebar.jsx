import { Dialog, Transition } from "@headlessui/react";
import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BiSolidShoppingBags } from "react-icons/bi";
import { AiOutlineBarChart, AiOutlinePieChart } from "react-icons/ai";
import { FaUserFriends } from "react-icons/fa";
import { BsMap } from "react-icons/bs";
import { BiBarChartSquare } from "react-icons/bi";
import { GiFullFolder } from "react-icons/gi";
import { TbRadar } from "react-icons/tb";
import { TiLocationOutline } from "react-icons/ti";
import { TbPrinter } from "react-icons/tb";
import { FiChevronDown } from "react-icons/fi";
import PerfectScrollbar from 'react-perfect-scrollbar';
const navigation = [
  {
    name: "Geospatial",
    href: "/geospatial",
    icon: BsMap,
    current: true,
  },
  // {
  //   name: 'KPI Scoreboard',
  //   href: '/kpi-scoreboard',
  //   icon: AiOutlinePieChart,
  //   current: false,
  // },
  {
    name: "Lending",
    href: "/lending/kpi",
    icon: AiOutlineBarChart,
    current: false,
  },
  {
    name: "Portfolio",
    href: "/portfolio",
    icon: BiSolidShoppingBags,
    current: false,
  },
];

const perfornmanceScoreboard = [
  { name: "Lending", href: "/", icon: BsMap, current: true },

  {
    name: "Portfolio",
    href: "/",
    icon: BiSolidShoppingBags,
    current: false,
  },

  {
    name: "Corporate",
    href: "/",
    icon: BiSolidShoppingBags,
    current: false,
  },
];

const corporateList = [
  {
    name: "Workforce",
    href: "/corporate/budget",
    icon: FaUserFriends,
    current: false,
    dropdownIcon: FiChevronDown,
    subNav: [
      {
        name: "Optimization",
        href: "/corporate/optimization",
        icon: TbRadar,
        current: false,
      },
      {
        name: "Foot Print",
        href: "/corporate/footprint",
        icon: TbPrinter,
        current: false,
      },
      {
        name: "WorkLoad",
        href: "/corporate/workload",
        icon: TiLocationOutline,
        current: false,
      },
    ],
  },
  {
    name: "Budget",
    // href: '/corporate/budget',
    icon: AiOutlinePieChart,
    current: false,
    dropdownIcon: FiChevronDown,
    subNav: [
      {
        name: "Utilization",
        href: "/corporate/utilization",
        icon: BiBarChartSquare,
        current: false,
      },
      {
        name: "WPA 360",
        href: "/corporate/WPA360",
        icon: GiFullFolder,
        current: false,
      },
    ],
  },
];
const DashboardSidebar = ({ setToggleSidebar, setSidebarOpen }) => {
  const navigate = useNavigate();
  const [corpNavItem, setCorpNavItem] = useState("");

  const handleCorpNavItem = (value) => {
    if (corpNavItem === value) {
      setCorpNavItem("");
    } else {
      setCorpNavItem(value);
    }
  };

  return (
    <>
    
      
      <div className="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col sidebar">
        {/* Sidebar component, swap this element with another sidebar if you like */}
       
        <div className="flex grow flex-col bg-white h100">
          <div className="flex shrink-0 items-center sidebar-header">
            <Link to="/" className="sidebar-brand block">
              <img
                className=""
                src="/assets/svgs/logo.svg"
                alt="Company Logo"
              />
            </Link>
            <div
              class="sidebar-toggler not-active"
              onClick={() => setToggleSidebar()}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="sidebar-body overflow-y-auto">
         
            <nav className="nav flex flex-col h100 overflow-y">
              <ul className="flex flex-1 flex-col ben__DashboardSidebarUl">
                <li className="nav-item border-b mb-3">
                  <button className="nav-link w-full flex gap-x-3">
                    <span className="link-title f14"> BUSINESS</span>
                  </button>
                </li>
                {navigation.map((item) => (
                  <li className="nav-item " key={item.name}>
                    {item.subNav ? (
                      // Render a button for items with subNav
                      <button
                        className="nav-link w-full flex gap-x-3"
                        onClick={() => handleCorpNavItem(item.name)}
                      >
                        <item.icon
                          className="h-5 w-5 link-icon"
                          aria-hidden="true"
                        />
                        <span className="link-title f14">{item.name}</span>
                      </button>
                    ) : (
                      // Render a NavLink for items without subNav
                      <NavLink
                        to={`/dashboard${item.href}`}
                        className="nav-link w-full flex gap-x-3"
                      >
                        <item.icon
                          className="h-5 w-5 link-icon"
                          aria-hidden="true"
                        />
                        <span className="link-title f14">{item.name}</span>
                      </NavLink>
                    )}
                    {/* Render subNav if available */}
                    {corpNavItem === item.name && item.subNav && (
                      <ul className="ml-4">
                        {item.subNav.map((subNavItem) => (
                          <li className="nav-item" key={subNavItem.name}>
                            <NavLink
                              to={`/dashboard${subNavItem.href}`}
                              className="nav-link w-full flex gap-x-3"
                            >
                              <subNavItem.icon
                                className="h-5 w-5 link-icon"
                                aria-hidden="true"
                              />
                              <span className="link-title f14">
                                {subNavItem.name}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}


<li className="nav-item border-b mb-3">
                  <button className="nav-link w-full flex gap-x-3">
                    <span className="link-title f14"> SCORECARD</span>
                  </button>
                </li>
                {perfornmanceScoreboard.map((item) => (
                  <li className="nav-item " key={item.name}>
                    {item.subNav ? (
                      // Render a button for items with subNav
                      <button
                        className="nav-link w-full flex gap-x-3"
                        onClick={() => handleCorpNavItem(item.name)}
                      >
                        <item.icon
                          className="h-5 w-5 link-icon"
                          aria-hidden="true"
                        />
                        <span className="link-title f14">{item.name}</span>
                      </button>
                    ) : (
                      // Render a NavLink for items without subNav
                      <NavLink
                        to={`/dashboard${item.href}`}
                        className="nav-link w-full flex gap-x-3"
                      >
                        <item.icon
                          className="h-5 w-5 link-icon"
                          aria-hidden="true"
                        />
                        <span className="link-title f14">{item.name}</span>
                      </NavLink>
                    )}
                    {/* Render subNav if available */}
                    {corpNavItem === item.name && item.subNav && (
                      <ul className="ml-4">
                        {item.subNav.map((subNavItem) => (
                          <li className="nav-item" key={subNavItem.name}>
                            <NavLink
                              to={`/dashboard${subNavItem.href}`}
                              className="nav-link w-full flex gap-x-3"
                            >
                              <subNavItem.icon
                                className="h-5 w-5 link-icon"
                                aria-hidden="true"
                              />
                              <span className="link-title f14">
                                {subNavItem.name}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}

                <li className="nav-item border-b mb-3">
                  <button className="nav-link w-full flex gap-x-3">
                    <span className="link-title f14"> CORPORATE</span>
                  </button>
                </li>
                {corporateList.map((item) => (
                  <li className="nav-item " key={item.name}>
                    {item.subNav ? (
                      // Render a button for items with subNav
                      <button
                        className="nav-link w-full flex gap-x-3"
                        onClick={() => handleCorpNavItem(item.name)}
                      >
                        <item.icon
                          className="h-5 w-5 link-icon"
                          aria-hidden="true"
                        />
                        <span className="link-title f14">{item.name}</span>
                        {item.dropdownIcon && (
                          <item.dropdownIcon className="h-5 w-5 link-icon ml-auto" />
                        )}
                      </button>
                    ) : (
                      // Render a NavLink for items without subNav
                      <NavLink
                        to={`/dashboard${item.href}`}
                        className="nav-link w-full flex gap-x-3"
                      >
                        <item.icon
                          className="h-5 w-5 link-icon"
                          aria-hidden="true"
                        />
                        <span className="link-title f14">{item.name}</span>
                        {item.dropdownIcon && (
                          <item.dropdownIcon className="h-5 w-5 link-icon ml-auto" />
                        )}
                      </NavLink>
                    )}
                    {/* Render subNav if available */}
                    {corpNavItem === item.name && item.subNav && (
                      <ul className="ml-4">
                        {item.subNav.map((subNavItem) => (
                          <li className="nav-item" key={subNavItem.name}>
                            <NavLink
                              to={`/dashboard${subNavItem.href}`}
                              className="nav-link w-full flex gap-x-3"
                            >
                              <subNavItem.icon
                                className="h-5 w-5 link-icon"
                                aria-hidden="true"
                              />
                              <span className="link-title f14">
                                {subNavItem.name}
                              </span>
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
         
          </div>
        </div>
      
      </div>
    </>
  );
};

export default DashboardSidebar;
