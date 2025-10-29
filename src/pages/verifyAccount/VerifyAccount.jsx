import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import Spiner from 'helper/Spiner';
import { useSelector } from 'react-redux';
import useApiHook from 'hooks/useApiHook';
import Loader from 'helper/Loader';

const VerifyAccount = () => {
  const { auth } = useSelector((state) => state);
  let [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { isApiLoading, handleApiCall } = useApiHook();
  const [isVerification, setIsVerification] = useState(false);
  const [isError, setIsError] = useState({ error: false, message: '' });

  const handleVerification = async ({ token, jwt }) => {
    setIsError({ error: false, message: '' });
    try {
      const result = await handleApiCall({
        method: 'post',
        url: `/Account/verifyUser`,
        data: { token, jwt },
      });
      if (result?.status === 200) setIsVerification(true);
    } catch (error) {
      setIsError({ error: true, message: error?.response?.data?.error });
    }
  };

  useEffect(() => {
    const token = searchParams?.get('token')?.trim()?.split(' ')?.join('+');
    const jwt = searchParams?.get('email');
    console.log({ token, jwt });
    token && jwt && handleVerification({ token, jwt });
  }, []);

  useEffect(() => {
    if (auth?.isLogin) navigate('/');
  }, [auth?.isLogin]);

  return (
    <div
      className='ez__AuthPage w-full ez__Login relative'
      style={{
        background:
          'linear-gradient(0deg, rgba(0,0,0,0.1), rgba(0,0,0,0.3)), url(/assets/images/loginBg.jpg) no-repeat center/cover',
      }}
    >
      {isApiLoading && <Loader background='transparency' />}
      <div className='max-w-benMediumContainer mx-auto px-3'>
        <div className='grid lg:grid-cols-5  w-full rounded-2xl overflow-hidden'>
          <div className='hidden lg:block  lg:col-span-2 w-full'>
            <img
              src='/assets/images/loginImage.jpg'
              alt='Login'
              className='w-full h-full object-cover'
            />
          </div>
          <div className='bg-white ez__AuthForm lg:col-span-3'>
            <div className='title w-full flex items-center justify-center flex-col px-5 py-10 md:p-20'>
              <div className='w-full flex items-center justify-between'>
                <img
                  src='/assets/svgs/logo.svg'
                  alt='Logo'
                  className='h-20 w-auto block'
                />
              </div>
              <h3 className='text-left w-full text-xl mt-8 mb-20  text-benBlue'>
                Verify Account
              </h3>
              {isVerification ? (
                <div className=' w-full text-center rounded-md my-10 h-full relative'>
                  <h3 className='text-ezBlack metBold text-lg md:text-xl mb-6'>
                    Your email has been verified!
                  </h3>
                  <p className='mb-3 text-ezBlack text-base text-center'>
                    Please login and enjoy Ben.
                  </p>
                 <span class="link_btn"><Link
                    to='/login'
                    className='block text-white bg-ezGreen border-ezGreen border hover:bg-transparent hover:text-ezGreen semibold w-max px-5 py-2 rounded-md mx-auto f16'
                  >
                    Log In
                  </Link>
                  </span> 
                </div>
              ) : isError?.error ? (
                <>
                  <p className='text-ezBlack text-base text-center mb-10'>
                    {isError?.message}
                  </p>
                </>
              ) : (
                <>
                  <h3 className='text-ezBlack metBold text-lg md:text-xl mb-6'>
                    Email is verifing
                  </h3>
                  <p className='text-ezBlack text-base text-center mb-10'>
                    We are verifing your email please wait.
                  </p>
                  <Spiner color='ezGreen' />
                </>
              )}
            </div>
          </div>
        </div>
       <ul className='w-full flex items-center space-x-7 justify-center my-8 login_bottom_content'>
                                    <li>
                                <img
                                src='/assets/svgs/logo.svg'
                                alt='HI Logo'
                                className='w-auto h-16 filter-white'
                                />
                            </li>
                            <li>
                                <img
                                src='/assets/images/logo_icon.png'
                                alt='HI Logo'
                                className='w-auto h-16'
                                />
                            </li>
                            <li>
                                <img
                                src='/assets/images/logo_icon1.png'
                                alt='HI Logo'
                                className='w-auto h-14  filter-white'
                                />
                            </li>
                </ul>
      </div>
    </div>
  );
};
export default VerifyAccount;
