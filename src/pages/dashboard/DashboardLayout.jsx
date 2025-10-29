import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useProtectedRoutes from 'routes/useProtectedRoutes';
import DashboardSidebar from './DashboardSidebar';
import DashboardHeader from './DashboardHeader';

const DashboardLayout = () => {
  const routes = useProtectedRoutes();
  const navigate = useNavigate();
  const { auth, dashboard } = useSelector((state) => state);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    if (!auth?.isLogin) navigate('/login');
  }, [auth?.isLogin]);

  useEffect(() => {}, [dashboard?.isSidebar]);
  
   // Function to toggle the sidebar
 const toggleSidebar = () => {
  setSidebarOpen(!sidebarOpen);
 };
  return (
    <>
      <div className={`ez__DashboardLayout relative w-full z-10 ${sidebarOpen ? 'sidebar-folded':''}`}>
        <DashboardSidebar
            setToggleSidebar={toggleSidebar}
            setSidebarOpen={setSidebarOpen}
          />



        <div className='page-wrapper'>
          <DashboardHeader  setToggleSidebar={toggleSidebar}  />

          <main className='page-content min-h-sceen'>          
            <div className=''>{auth?.isLogin && routes}</div>
          </main>

          <footer
              className='w-full px-4 py-3 flex items-center justify-between z-50 relative border-top footer-content flex-wrap'
              // style={{
              //   background:
              //     'url(/assets/images/footerBg.jpg), lightgray -70.919px -53px / 107.387% 107.919% no-repeat',
              // }}
            >
              <p className='text-xs text-benGray'>African Development Bank Group</p>
              <p className='text-xs text-benGray'>Work Program Analytics</p>
              <p className='text-xs text-benGray'>
                (C) 2023 RDSA - RDVP. All Rights Reserved.
              </p>
            </footer>

        </div>

      </div>

      {/* <footer
        className='w-full p-8 flex items-center justify-between z-50 relative'
        style={{
          background:
            'url(/assets/images/footerBg.jpg), lightgray -70.919px -53px / 107.387% 107.919% no-repeat',
        }}
      >
        <p className='text-white text-sm'>African Development Bank Group</p>
        <p className='text-white text-sm'>Work Program Analytics</p>
        <p className='text-white text-sm'>
          (C) 2023 RDSA - RDVP. All Rights Reserved.
        </p>
      </footer> */}
    </>
  );
};

export default DashboardLayout;
