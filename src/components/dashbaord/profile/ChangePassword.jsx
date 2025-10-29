import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import useApiHook from 'hooks/useApiHook';

const SetPassowrdSchema = Yup.object().shape({
  currentPassword: Yup.string()
    .max(16, 'Maximum 16 character are required!')
    .required('Current Password is required'),
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

const ChangePassword = () => {
  const { handleApiCall } = useApiHook();

  const updatePassword = async (values) => {
    let data = {
      currentPassword: values.currentPassword,
      newPassword: values.password,
    };
    const result = await handleApiCall({
      method: 'POST',
      url: 'Account/change-password',
      data,
    });
    if (result?.status === 200) toast.success('Password changed successfully');
  };

  return (
    <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
      <div>
        <h2 className='text-base semibold leading-7 text-ezGray'>
          Change password
        </h2>
        <p className='mt-1 text-sm leading-6 text-gray-400'>
          Update your password associated with your account.
        </p>
      </div>

      <div className='md:col-span-2'>
        <Formik
          initialValues={{
            currentPassword: '',
            password: '',
            confirmPassword: '',
          }}
          validationSchema={SetPassowrdSchema}
          onSubmit={updatePassword}
        >
          {() => (
            <Form className='ez__Form w-full'>
              <div className='grid grid-cols-1 gap-4 sm:max-w-xl sm:grid-cols-6'>
                <div className='col-span-full'>
                  <label
                    htmlFor='currentPassword'
                    className='block text-sm font-medium leading-6 text-ezGray'
                  >
                    Current password
                  </label>
                  <div className='mt-2'>
                    <Field
                      type='password'
                      name='currentPassword'
                      id='currentPassword'
                      placeholder='Enter Current Password'
                      className='block w-full rounded-md  p-2 text-ezGray shadow-sm border border-ezGray  sm:text-sm sm:leading-6'
                    />
                    <ErrorMessage
                      name='currentPassword'
                      render={(msg) => (
                        <p className='text-sm text-ezRed block  '>{msg}</p>
                      )}
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='password'
                    className='block text-sm font-medium leading-6 text-ezGray'
                  >
                    New password
                  </label>
                  <div className='mt-2'>
                    <Field
                      type='password'
                      name='password'
                      id='password'
                      placeholder='Enter New Password'
                      className='block w-full rounded-md  p-2 text-ezGray shadow-sm border border-ezGray  sm:text-sm sm:leading-6'
                    />
                    <ErrorMessage
                      name='password'
                      render={(msg) => (
                        <p className='text-sm text-ezRed block  '>{msg}</p>
                      )}
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='confirmPassword'
                    className='block text-sm font-medium leading-6 text-ezGray'
                  >
                    Confirm password
                  </label>
                  <div className='mt-2'>
                    <Field
                      type='password'
                      name='confirmPassword'
                      id='confirmPassword'
                      placeholder='Enter Confirm Password'
                      className='block w-full rounded-md  p-2 text-ezGray shadow-sm border border-ezGray  sm:text-sm sm:leading-6'
                    />
                    <ErrorMessage
                      name='confirmPassword'
                      render={(msg) => (
                        <p className='text-sm text-ezRed block  '>{msg}</p>
                      )}
                    />
                  </div>
                </div>
              </div>
              <div className='mt-8 flex'>
                <button
                  type='submit'
                  className='rounded-md bg-ezGreen px-3 py-2 text-sm semibold text-white shadow-sm en'
                >
                  Save
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ChangePassword;
