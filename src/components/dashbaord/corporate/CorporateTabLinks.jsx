import { NavLink } from 'react-router-dom';


const CorporateTabLinks = () => {
  return (
   <div className='TabsLayout mb-6 flex flex-wrap justify-content-between border-b'>    
        <ul className='ben__DashboardLinks flex items-center flex-wrap flex1 border0'>
          <li>
            <NavLink
              to={`/dashboard/corporate/utilization`}
              className='flex items-center pt-2 pb-2 px-6 hover:text-benDarkBlue hover:border-benDarkBlue f14'
            >
              Utilization
            </NavLink>
          </li>
          <li>
            <NavLink
              to={`/dashboard/corporate/WPA360`}
              className='flex items-center pt-2 pb-2 px-6 hover:text-benDarkBlue hover:border-benDarkBlue f14'
            >
              WPA 360
            </NavLink>
          </li>
        </ul>
    </div>
  );
};

export default CorporateTabLinks;
