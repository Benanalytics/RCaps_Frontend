import { NavLink } from 'react-router-dom';

const LendingTabLinks = () => {
  return (
   <div className='TabsLayout mb-6 flex flex-wrap justify-content-between border-b'>    
        <ul className='ben__DashboardLinks flex items-center flex-wrap flex1 border0'>
          <li>
            <NavLink
              to={`/dashboard/lending/kpi`}
              className='flex items-center pt-2 pb-2 px-6 hover:text-benDarkBlue hover:border-benDarkBlue f14'
            >
              KPI
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/lending/overview`}
              className='flex items-center pt-2 pb-2 px-6 hover:text-benDarkBlue hover:border-benDarkBlue f14'
            >
              OVERVIEW
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/lending/readiness`}
              className='flex items-center pt-2 pb-2 px-6 hover:text-benDarkBlue hover:border-benDarkBlue f14'
            >
              READINESS
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/lending/brag`}
              className='flex items-center pt-2 pb-2 px-6 hover:text-benDarkBlue hover:border-benDarkBlue f14'
            >
              BRAG
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default LendingTabLinks;
