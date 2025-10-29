
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Loader from 'helper/Loader';
import useApiHook from 'hooks/useApiHook';
import { toast } from 'react-toastify';
import { toggleLogin } from 'redux/auth/authSlice';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const LoginSchema = Yup.object().shape({
  email: Yup.string().required('Field is required').trim(),
  password: Yup.string()
    .min(8, 'Minimum 8 character are required!')
    .max(20, 'Maximum 20 character are required!')
    .required('Password is required')
    .trim(),
});

const Login = () => {
  const { auth } = useSelector((state) => state);
  const { handleApiCall, isApiLoading } = useApiHook();
  const [isPassword, setIsPassword] = useState(true);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogin = async (values) => {
    debugger;
    const data = {
      password: values?.password,
      userName: '',
      email: '',
    };
    if (values?.email?.includes('@')) data.email = values?.email;
    if (!values?.email?.includes('@')) data.userName = values?.email;
    const result = await handleApiCall({
      method: 'post',
      url: 'Account/login',
      data,
      headers: { Authorization: 'none' },
    });
    
    if (result.status === 200) {
      dispatch(
        toggleLogin({
          isLogin: true,
          userInfo: {
            user: result?.data,
            accessToken: result?.data?.token,
          },
        })
      );
      toast.success('You have login successfully!');
      navigate('/dashboard/portfolio');
    }
  };

  // useEffect(() => {
  //   if (auth?.isLogin) navigate('/dashboard/geospatial');
  // }, [auth?.isLogin]);

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
      <div className='grid grid-cols-1 lg:grid-cols-5  w-full rounded-2xl overflow-hidden'>
        <div className='hidden lg:block lg:col-span-2 w-full'>
          <img
            src='/assets/images/loginImage.jpg'
            alt='Login'
            className='w-full h-full object-cover'
          />
        </div>
        <div className='bg-white ez__AuthForm lg:col-span-3'>
          <div className='title w-full flex items-center justify-center flex-col px-5 py-10 md:p-20'>
            <div className='w-full flex items-center justify-between'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <img
                src='/assets/svgs/logo.svg'
                alt='Logo'
                className='h-20 w-auto block'
              />
                </Link>
              <span className='link_btn'>
                <Link
                to='/register'
                className='text-benLightBlue hover:text-benLightBlue text-lg f16'
              >
                Register
              </Link>
              </span>
            </div>
            <h3 className='text-left w-full text-xl my-8  text-benBlue'>
              Log in
            </h3>
            <Formik
              initialValues={{ email: '', password: '' }}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}
            >
              {() => (
                <Form className='ez__Form w-full login_form'>
                  <div className='formGroup w-full block mb-4'>
                    <label
                      htmlFor='email'
                      className='mb-2 f14 block text-benLightGray semibold text-bold'
                    >
                      Email or Username
                    </label>
                    <Field
                      type='text'
                      name='email'
                      id='email'
                      placeholder='Enter Email or Username'
                      className='w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md f14'
                    />
                    <ErrorMessage
                      name='email'
                      render={(msg) => (
                        <p className='text-sm text-ezRed block mb-4 -mt-3'>
                          {msg}
                        </p>
                      )}
                    />
                  </div>
                  <div className='formGroup w-full block mb-8'>
                    <div className='flex items-center justify-between w-full'>
                      <label
                        htmlFor='email'
                        className='mb-2 f14 block text-benLightGray semibold text-bold'
                      >
                        Password*
                      </label>
                     <span class="link_btn">
                       <Link
                        to='/forgot-password'
                        className='block sm:block semibold text-bold f14 mb-2'
                      >
                        Forgot Password?
                      </Link>
                      </span>
                    </div>
                    <div className='relative block'>
                      <Field
                        type={isPassword ? 'password' : 'text'}
                        name='password'
                        placeholder='Enter your password'
                        className='w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md f14'
                      />
                      <button
                        type='button'
                        onClick={() => setIsPassword(!isPassword)}
                        className='absolute top-4 right-5'
                      >
                        {isPassword ? <BsEyeSlash /> : <BsEye />}
                      </button>
                    </div>
                    <ErrorMessage
                      name='password'
                      render={(msg) => (
                        <p className='text-sm text-ezRed block mb-4 -mt-3'>
                          {msg}
                        </p>
                      )}
                    />
                  </div>
                  <button
                    type='submit'
                    className='text-white bg-benPrimary w-full py-3 rounded-2xl gradient_btn btn semibold text-bold text-uppercase'
                  >
                    Login
                  </button>
                </Form>
              )}
            </Formik>
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

export default Login;
