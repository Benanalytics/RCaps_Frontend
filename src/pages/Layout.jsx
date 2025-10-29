
import Footer from 'partials/footer/Footer';
import Header from 'partials/header/Header';
import { useLocation } from 'react-router-dom';
import useUnProtectedRoutes from 'routes/useUnProtectedRoutes';

const Layout = () => {
  const routes = useUnProtectedRoutes();
  const location = useLocation();
 
  return (
    <div className='ez__PageLayout relative w-full z-10' >
      {!location?.pathname?.includes('login') &&
        !location?.pathname?.includes('register') &&
        !location?.pathname?.includes('verify-account') &&
        !location?.pathname?.includes('password') && <Header />}
      <div className='ez__LayoutPages w-full bg-white'>{routes}</div>
      <Footer />
    </div>
  );
};

export default Layout;
