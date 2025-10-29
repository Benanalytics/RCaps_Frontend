import * as React from 'react';
import { useRoutes } from 'react-router-dom';
import ForgotPassword from 'pages/forgotPassword/ForgotPassword';
import Layout from 'pages/Layout';
import Home from 'pages/Home';
import Login from 'pages/login/Login';
import Register from 'pages/register/Register';
import VerifyAccount from 'pages/verifyAccount/VerifyAccount';
import SetNewPassword from 'pages/setNewPassword/SetNewPassword';
import AboutRDVP from 'pages/AboutRDVP';
import View from 'pages/about/aboutUsViewMore';

const useUnProtectedRoutes = () => {
  const routes = useRoutes([
    { path: '/', exact: true, element: <Home /> },
    { path: '/login', exact: true, element: <Login /> },
    { path: '/register', exact: true, element: <Register /> },
    { path: '/forgot-password', exact: true, element: <ForgotPassword /> },
    { path: '/verify-account', exact: true, element: <VerifyAccount /> },
    { path: '/set-password', exact: true, element: <SetNewPassword /> },
    { path: '/aboutRDVP', exact: true, element: <AboutRDVP /> },
    { path: '/view', exact: true, element: <View /> },
    {
      path: '*',
      element: <Layout />,
    },
  ]);
  return routes;
};

export default useUnProtectedRoutes;
