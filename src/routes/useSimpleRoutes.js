import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import Layout from 'pages/Layout';
import DashboardLayout from 'pages/dashboard/DashboardLayout';

const useSimpleRoutes = () => {
  const routes = useRoutes([
    {
      path: '/dashboard/*',
      element: <DashboardLayout />,
    },
    {
      path: '/*',
      element: <Layout />,
    },
  ]);
  return routes;
};

export default useSimpleRoutes;
