import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import Geospatial from 'pages/dashboard/geospatial/Geospatial';
import Lending from 'pages/dashboard/lending/Lending';
import LendingOverview from 'pages/dashboard/lending/overview/LendingOverview';
import Readiness from 'pages/dashboard/lending/readiness/Readiness';
import Brag from 'pages/dashboard/lending/brag/Brag';
import Profile from 'pages/dashboard/profile/Profile';
import Utilization from 'pages/corporate/budget/utilization';
import WPA360 from 'pages/corporate/budget/wpa360';
import Optimization from 'pages/corporate/workforce/optimization';
import WorkLoad from 'pages/corporate/workforce/workload';
import Footprint from 'pages/corporate/workforce/footPrint';
import Portfolio from 'pages/dashboard/portfolio/Portfolio';
import LendingApproval from 'pages/dashboard/lendingApproval/LendingApproval';
import Pipeline from 'pages/dashboard/pipeline/Pipeline';
import OptimizationPipeline from 'pages/corporate/optimizationHeader/optimizationPipeline';
import OptimizationLending from 'pages/corporate/optimizationHeader/optimizationLending';




const useProtectedRoutes = () => {
  const routes = useRoutes([
    { path: '/profile', exact: true, element: <Profile /> },
    { path: '/geospatial', exact: true, element: <Geospatial /> },
    { path: '/lending/kpi', exact: true, element: <Lending /> },
    { path: '/lending/overview', exact: true, element: <LendingOverview /> },
    { path: '/lending/readiness', exact: true, element: <Readiness /> },
    { path: '/lending/brag', exact: true, element: <Brag /> },
    { path: '*', exact: true, element: <Geospatial /> },
    { path: '/corporate/utilization', exact: true, element: <Utilization /> },
    { path: '/corporate/WPA360', exact: true, element: <WPA360 /> },
    { path: '/corporate/Optimization', exact: true, element: <Optimization /> },
    { path: '/corporate/WorkLoad', exact: true, element: <WorkLoad /> },
    { path: '/corporate/Footprint', exact: true, element: <Footprint /> },
  
    { path: '/corporate/OptimizationPipeline', exact: true, element: <OptimizationPipeline /> },
    { path: '/corporate/OptimizationLending', exact: true, element: <OptimizationLending /> },

    { path: '/portfolio', exact: true, element: <Portfolio /> },
    { path: '/lendingApproval', exact: true, element: <LendingApproval /> },
    { path: '/pipeline', exact: true, element: <Pipeline /> },
   


  ]);
  return routes;
};

export default useProtectedRoutes;
