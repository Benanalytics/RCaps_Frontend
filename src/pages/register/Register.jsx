import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Loader from 'helper/Loader';
import useApiHook from 'hooks/useApiHook';
import { toast } from 'react-toastify';
import { userRoles } from 'helper/helper';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

const RegisterSchema = Yup.object().shape({
    displayName: Yup.string().required('Name is required').min(3).trim(),
    role: Yup.string().required('Role is required'),
    email: Yup.string()
        .email('Please enter valid email')
        .required('Email is required'),
    username: Yup.string().required('Username is required').trim(),
    gender: Yup.string().required('Gender is required').trim(),
    password: Yup.string()
        .min(8, 'Minimum 8 character are required!')
        .max(16, 'Maximum 16 character are required!')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*\W)[A-Za-z\d\W]{8,16}$/,
            'Password must contain at least one number, one uppercase letter, one lowercase letter and one special character!'
        )
        .required('Password is required')
        .trim(),
    confirmPassword: Yup.string()
        .required('Confirm password is required!')
        .oneOf(
            [Yup.ref('password')],
            'Confirm password need to be the same as password'
        ),
});

const Register = () => {
    const { auth } = useSelector((state) => state);
    const { handleApiCall, isApiLoading } = useApiHook();
    const [userEmail, setUserEmail] = useState('');
    const [isVerification, setIsVerification] = useState(false);
    const [isPassword, setIsPassword] = useState(true);
    const [isConfirmPassword, setIsConfirmPassword] = useState(true);
    const navigate = useNavigate();

    const handleRegister = async (data) => {
        // setUserEmail(data?.email);
        setUserEmail('info@rcaps.app');

        const result = await handleApiCall({
            method: 'post',
            url: 'Account/register',
            data: {
                ...data,
                link: process.env.REACT_APP_CLIENT_URL,
            },
            headers: { Authorization: 'none' },
        });
        if (result.status === 200) {
            toast.success(
                'Verification email is sent to your email address. Please verify your email.'
            );
            setIsVerification(true);
        }
    };

    const handleResendEmail = async () => {
        const result = await handleApiCall({
            method: 'post',
            url: `Account/resend?email=${userEmail}&link=${process.env.REACT_APP_CLIENT_URL}`,
            headers: { Authorization: 'none' },
        });
        if (result.status === 200)
            toast.success(
                'Verification email is sent to your email address. Please verify your email.'
            );
    };

    useEffect(() => {
        if (auth?.isLogin) navigate('/dashboard');
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
                            <Link
                                to='/'
                                className='-m-1.5 p-1.5'
                            >
                                <img
                                    src='/assets/svgs/logo.svg'
                                    alt='Logo'
                                    className='h-20 w-auto block'
                                />
                            </Link>
                           <span className='link_btn'> <Link
                                to='/login'
                                className='text-benLightBlue hover:text-benLightBlue text-lg f16'
                            >
                                Login
                            </Link>
                            </span>
                        </div>
                        <h3 className='text-left w-full text-xl my-8  text-benBlue'>
                            Register
                        </h3>
                        {isVerification ? (
                            <div className='py-10 rounded-md flex flex-col items-center justify-center w-full h-full relative'>
                                <h3 className='text-ezBlack metBold text-lg md:text-xl mb-6'>
                                    Please verify your Email!
                                </h3>
                                <p className='text-ezBlack text-base text-center mb-3'>
                                    A verification email has been sent to{' '}
                                    <b className='text-benLightBlue semibold'>
                                        {userEmail}
                                    </b>
                                    . Please check your inbox and verify
                                    your email.
                                </p>
                                <p className='text-ezBlack text-base text-center'>
                                    If email is not received, Click here to{' '}
                                    <button
                                        onClick={handleResendEmail}
                                        disabled={isApiLoading}
                                        className='text-benLightBlue semibold hover:text-benLightBlue'
                                    >
                                        Resend Email
                                    </button>
                                </p>
                            </div>
                        ) : (
                            <Formik
                                initialValues={{
                                    email: '',
                                    username: '',
                                    gender: '',
                                    displayName: '',
                                    role: '',
                                    password: '',
                                    confirmPassword: '',
                                }}
                                validationSchema={RegisterSchema}
                                onSubmit={handleRegister}
                            >
                                {() => (
                                    <Form className='ez__Form w-full register_form'>
                                          <div className='formGroup w-full block mb-4'>
                                            <label
                                                htmlFor='displayName'
                                                className='mb-2 f14 block text-benLightGray semibold text-bold'
                                            >
                                                Display Name*
                                            </label>
                                            <Field
                                                type='text'
                                                name='displayName'
                                                id='displayName'
                                                placeholder='Name'
                                                className='w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md f14'
                                            />
                                            <ErrorMessage
                                                name='displayName'
                                                render={(msg) => (
                                                    <p className='text-sm text-ezRed block mb-4 -mt-3'>
                                                        {msg}
                                                    </p>
                                                )}
                                            />
                                        </div>
                                        <div className='formGroup w-full block mb-4'>
                                            <label
                                                htmlFor='email'
                                                className='mb-2 f14 block text-benLightGray semibold text-bold'
                                            >
                                                Email address*
                                            </label>
                                            <Field
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='Email'
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
                                        <div className='formGroup w-full block mb-4'>
                                            <label
                                                htmlFor='username'
                                                className='mb-2 f14 block text-benLightGray semibold text-bold'
                                            >
                                                Username*
                                            </label>
                                            <Field
                                                type='text'
                                                name='username'
                                                id='username'
                                                placeholder='Username'
                                                className='w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md f14'
                                            />
                                            <ErrorMessage
                                                name='username'
                                                render={(msg) => (
                                                    <p className='text-sm text-ezRed block mb-4 -mt-3'>
                                                        {msg}
                                                    </p>
                                                )}
                                            />
                                        </div>
                                        <div className='formGroup w-full block mb-4'>
                                            <label
                                                htmlFor='gender'
                                                className='mb-2 f14 block text-benLightGray semibold text-bold'
                                            >
                                                Gender*
                                            </label>
                                            <div className='flex w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md radio_outer_box'>
                                                <label className=' mr-6 flex f14'>
                                                    <Field className=' mr-1 '
                                                        type='radio'
                                                        name='gender'
                                                        id='gender'
                                                        placeholder='Gender'
                                                        value='Male'
                                                    />{' '}
                                                   Male
                                                </label>
                                                <label className='flex f14'>
                                                    <Field className=' mr-1'
                                                        type='radio'
                                                        name='gender'
                                                        id='gender'
                                                        placeholder='Gender'
                                                        value='Female'
                                                    />{' '}
                                                    Female
                                                </label>
                                            </div>

                                            <ErrorMessage
                                                name='gender'
                                                render={(msg) => (
                                                    <p className='text-sm text-ezRed block mb-4 -mt-3'>
                                                        {msg}
                                                    </p>
                                                )}
                                            />
                                        </div>
                                        <div className='formGroup w-full block mb-4'>
                                            <div className='flex items-center justify-between w-full'>
                                                <label
                                                    htmlFor='email'
                                                    className='mb-2 f14 block text-benLightGray semibold text-bold'
                                                >
                                                    Password*
                                                </label>
                                            </div>
                                            <div className='relative block'>
                                                <Field
                                                    type={
                                                        isPassword
                                                            ? 'password'
                                                            : 'text'
                                                    }
                                                    name='password'
                                                    placeholder='Enter your password'
                                                    className='w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md f14'
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
                                                    onClick={() =>
                                                        setIsPassword(
                                                            !isPassword
                                                        )
                                                    }
                                                    className='absolute top-4 right-5'
                                                >
                                                    {isPassword ? (
                                                        <BsEyeSlash />
                                                    ) : (
                                                        <BsEye />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className='formGroup w-full block mb-4'>
                                            <div className='flex items-center justify-between w-full'>
                                                <label
                                                    htmlFor='confirmPassword'
                                                    className='mb-2 f14 block text-benLightGray semibold text-bold'
                                                >
                                                    Confirm Password*
                                                </label>
                                            </div>
                                            <div className='relative block'>
                                                <Field
                                                    type={
                                                        isConfirmPassword
                                                            ? 'password'
                                                            : 'text'
                                                    }
                                                    name='confirmPassword'
                                                    placeholder='Confirm Password'
                                                    className='w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md f14'
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
                                                    onClick={() =>
                                                        setIsConfirmPassword(
                                                            !isConfirmPassword
                                                        )
                                                    }
                                                    className='absolute top-4 right-5'
                                                >
                                                    {isConfirmPassword ? (
                                                        <BsEyeSlash />
                                                    ) : (
                                                        <BsEye />
                                                    )}
                                                </button>
                                            </div>
                                        </div>
                                        <div className='formGroup w-full block mb-4'>
                                            <div className='flex items-center justify-between w-full'>
                                                <label
                                                    htmlFor='role'
                                                    className='mb-2 f14 block text-benLightGray semibold text-bold'
                                                >
                                                    Select Role*
                                                </label>
                                            </div>
                                            <Field
                                                name='role'
                                                as='select'
                                                className='w-full block border border-benGray text-base text-benGray p-3 mb-4 rounded-md f14'
                                            >
                                                <option value=''>
                                                    Select Role
                                                </option>
                                                {userRoles?.map((role) => (
                                                    <option
                                                        value={role}
                                                        key={role}
                                                    >
                                                        {role}
                                                    </option>
                                                ))}
                                            </Field>
                                            <ErrorMessage
                                                name='role'
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
                                            Register
                                        </button>
                                    </Form>
                                )}
                            </Formik>
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

export default Register;