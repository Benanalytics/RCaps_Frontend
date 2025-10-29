import { ErrorMessage, Field, Form, Formik } from 'formik';
import Spiner from 'helper/Spiner';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as Yup from 'yup';
import useApiHook from 'hooks/useApiHook';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const SetPassowrdSchema = Yup.object().shape({
  password: Yup.string()
    .min(8, 'Minimum 8 character are required!')
    .max(16, 'Maximum 16 character are required!')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,16}$/,
      'Password must contain at least one number, one uppercase letter, one lowercase letter and one special character!'
    )
    .required('Password is required'),
  confirmPassword: Yup.string()
    .required('Confirm password is required!')
    .oneOf(
      [Yup.ref('password')],
      'Confirm password need to be the same as password'
    ),
});

const SetNewPassword = () => {
  const { auth } = useSelector((state) => state);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { handleApiCall, isApiLoading } = useApiHook();
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [formValues, setFormValues] = useState({ code: null, email: null });

  const handleSetPassword = async (values) => {
    if (!formValues?.token && !formValues?.code)
      return toast.error('Verification token or email is not valid');
    const result = await handleApiCall({
      method: 'post',
      url: `/ForgotPassword/NewPassword`,
      data: { newPassword: values?.password, ...formValues },
    });
    if (result?.status === 200) {
      toast.success(result?.data?.message);
      setTimeout(() => {
        navigate('/login');
      }, 2000);
    }
  };

  useEffect(() => {
    const token = searchParams?.get('token')?.trim();
    const email = searchParams?.get('email')?.trim();
    if (token && email) setFormValues({ code: token, email });
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
              <h3 className='text-left w-full text-xl my-8  text-benBlue'>
                Recover your account
              </h3>
              <Formik
                initialValues={{ password: '', confirmPassword: '' }}
                validationSchema={SetPassowrdSchema}
                onSubmit={handleSetPassword}
              >
                {() => (
                  <Form className='ez__Form w-full login_form'>
                    <div className='relative block'>
                      <Field
                        type={isPassword ? 'password' : 'text'}
                        name='password'
                        placeholder='Password'
                        className='w-full block border border-benGray rounded-2xl text-base text-benGray p-3 mb-4'
                      />
                      <ErrorMessage
                        name='password'
                        render={(msg) => (
                          <p className='text-sm text-ezRed block mb-4 -mt-3'>
                            {msg}
                          </p>
                        )}
                      />
                      <button
                        type='button'
                        onClick={() => setIsPassword(!isPassword)}
                        className='absolute top-4 right-5'
                      >
                        {isPassword ? <BsEyeSlash /> : <BsEye />}
                      </button>
                    </div>
                    <div className='relative block'>
                      <Field
                        type={isConfirmPassword ? 'password' : 'text'}
                        name='confirmPassword'
                        placeholder='Confirm Password'
                        className='w-full block border border-benGray rounded-2xl text-base text-benGray p-3 mb-4'
                      />
                      <ErrorMessage
                        name='confirmPassword'
                        render={(msg) => (
                          <p className='text-sm text-ezRed block mb-4 -mt-3'>
                            {msg}
                          </p>
                        )}
                      />
                      <button
                        type='button'
                        onClick={() => setIsConfirmPassword(!isConfirmPassword)}
                        className='absolute top-4 right-5'
                      >
                        {isConfirmPassword ? <BsEyeSlash /> : <BsEye />}
                      </button>
                    </div>
                    <button
                      type='submit'
                      disabled={isApiLoading}
                      className={`py-5 text-base mb-5 text-white border border-ezGreen bg-ezGreen rounded-md block w-full text-center ${
                        isApiLoading ? 'cursor-wait' : 'hover:bg-transparent'
                      } hover:text-ezGreen`}
                    >
                      {isApiLoading ? (
                        <Spiner color='white' />
                      ) : (
                        'Set New Password'
                      )}
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

export default SetNewPassword;
