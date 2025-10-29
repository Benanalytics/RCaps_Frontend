import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useApiHook from 'hooks/useApiHook';
import { toast } from 'react-toastify';
import Loader from 'helper/Loader';

const ForgotPassword = () => {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const { handleApiCall, isApiLoading } = useApiHook();
  const [isVerification, setIsVerification] = useState(false);
  const [userEmail, setUserEmail] = useState(false);

  const handleResetPassword = async (values) => {
    const result = await handleApiCall({
      method: 'post',
      url: '/ForgotPassword',
      data: {
        ...values,
        clientURI: process.env.REACT_APP_CLIENT_PASSWORD_URL,
      },
    });
    if (result.status === 200) {
      toast.success('Reset password email sent successfully.');
      setIsVerification(true);
      setUserEmail(values.email);
    }
  };

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
                <span class="link_btn"><Link
                  to='/login'
                  className='text-benLightBlue hover:text-benLightBlue text-lg f16'
                >
                  Login
                </Link>
                </span>
              </div>
              {isVerification ? (
                <div className='text-center rounded-md my-10 w-full h-full relative'>
                  <h3 className='text-ezBlack metBold text-lg md:text-xl mb-6'>
                    Forgot Password Email!
                  </h3>
                  <p className='mb-3 text-ezBlack text-base text-center'>
                    Ben sent you the forgot password email. Please check your
                    inbox and follow the instructions in the email to reset your
                    password.
                  </p>
                  <p className='text-ezBlack text-base text-center'>
                    If email is not received, Click here to{' '}
                    <button
                      onClick={() => handleResetPassword({ email: userEmail })}
                      disabled={isApiLoading}
                      className='text-ezGreen semibold hover:text-ezGreen'
                    >
                      Resend Email
                    </button>
                  </p>
                </div>
              ) : (
                <>
                  <h3 className='text-left w-full text-xl my-8  text-benBlue'>
                    Recover your account
                  </h3>
                  <Formik
                    initialValues={{ email: '' }}
                    validationSchema={Yup.object().shape({
                      email: Yup.string()
                        .email('Please enter valid email')
                        .required('Email is required'),
                    })}
                    onSubmit={handleResetPassword}
                  >
                    {() => (
                      <Form className='ez__Form w-full login_form'>
                        <div className='formGroup w-full block mb-4'>
                          <label
                            htmlFor='email'
                            className='mb-2 block text-benLightGray semibold text-bold f14 '
                          >
                            Email address*
                          </label>
                          <Field
                            type='email'
                            name='email'
                            id='email'
                            placeholder='Email'
                            className='w-full block border border-benGray rounded-2xl text-base text-benGray p-3 mb-4 rounded-md f14'
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
                        <button
                          type='submit'
                          className='text-white bg-benPrimary w-full py-3 rounded-2xl gradient_btn btn'
                        >
                          Reset Password
                        </button>
                      </Form>
                    )}
                  </Formik>
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

export default ForgotPassword;
