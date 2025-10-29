// import { useState } from 'react';

import ChangePassword from 'components/dashbaord/profile/ChangePassword';
import useApiHook from 'hooks/useApiHook';
import { useState } from 'react';
import Avatar from 'react-avatar';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { updateUserProfileInfo } from 'redux/auth/authSlice';

export default function Profile() {
  const { handleApiCall } = useApiHook();
  const { auth } = useSelector((state) => state);
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState({
    email: auth?.userInfo?.user?.email || '',
    userName: auth?.userInfo?.user?.userName || '',
    displayName: auth?.userInfo?.user?.profileInfo?.displayName || '',
    ProfilePicture: auth?.userInfo?.user?.profileInfo?.ProfilePicture || null,
  });

  const updateProfile = async () => {
    const formData = new FormData();
    if (typeof formValues?.ProfilePicture === 'object')
      formData.append('ProfilePicture', formValues?.ProfilePicture);
    formData.append('DisplayName', formValues?.displayName);
    const result = await handleApiCall({
      method: 'POST',
      url: 'Account/update-profile',
      data: formData,
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    if (result?.status === 200) {
      toast.success('Your profile has been updated successfully.');
      dispatch(
        updateUserProfileInfo({
          ...auth?.userInfo?.user,
          profileInfo: result.data,
        })
      );
      setFormValues({
        email: auth?.userInfo?.user?.email,
        userName: auth?.userInfo?.user?.userName,
        displayName: result?.data?.displayName,
        ProfilePicture: result?.data?.profilePicturUrl,
      });
    }
  };

  return (
    <>
      <main>
        <div className='divide-y divide-ezGray'>
          <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8'>
            <div>
              <h2 className='text-base semibold leading-7 text-ezGray'>
                Personal Information
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-400'>
                Use a permanent address where you can receive mail.
              </p>
            </div>

            <form className='md:col-span-2'>
              <div className='grid grid-cols-1 gap-x-6 gap-y-8 sm:max-w-xl sm:grid-cols-6'>
                <div className='col-span-full flex items-center gap-x-8'>
                  {!auth?.userInfo?.user?.profileInfo?.profilePicturUrl ? (
                    <Avatar
                      name={auth?.userInfo?.user?.displayName}
                      size={95}
                      className='rounded-lg'
                    />
                  ) : (
                    <img
                      src={auth?.userInfo?.user?.profileInfo?.profilePicturUrl}
                      alt='Profile'
                      className='h-24 w-24 flex-none rounded-lg bg-gray-800 object-cover'
                    />
                  )}
                  <div>
                    <div className='relative w-max z-10'>
                      <button
                        type='button'
                        className='rounded-md text-white px-3 py-2 text-sm semibold bg-ezGray shadow-sm '
                      >
                        Change avatar
                      </button>
                      <input
                        type='file'
                        name='image'
                        id='image'
                        onChange={(e) => {
                          if (e.target.files[0].size >= 5242880)
                            return toast.error(
                              'File size must be less than 5MB'
                            );
                          setFormValues({
                            ...formValues,
                            ProfilePicture: e.target.files[0],
                          });
                        }}
                        accept='image/gif, image/jpeg, image/jpg, image/png'
                        className='absolute top-0 left-0 w-full h-full z-20 opacity-0 cursor-pointer'
                      />
                    </div>
                    <p className='mt-2 text-xs leading-5 text-gray-400'>
                      JPG, GIF or PNG. 1MB max.
                    </p>
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='displayName'
                    className='block text-sm font-medium leading-6 text-ezGray'
                  >
                    Display Name
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='displayName'
                      id='displayName'
                      value={formValues?.displayName}
                      onChange={(e) =>
                        setFormValues({
                          ...formValues,
                          displayName: e.target.value,
                        })
                      }
                      className='block w-full rounded-md  p-2 text-ezGray shadow-sm border border-ezGray  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='email'
                    className='block text-sm font-medium leading-6 text-ezGray'
                  >
                    Email address
                  </label>
                  <div className='mt-2'>
                    <input
                      id='email'
                      name='email'
                      type='email'
                      autoComplete='email'
                      readOnly
                      value={formValues?.email}
                      className='cursor-not-allowed block w-full rounded-md  p-2 text-ezGray shadow-sm border border-ezGray  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>

                <div className='col-span-full'>
                  <label
                    htmlFor='userName'
                    className='block text-sm font-medium leading-6 text-ezGray'
                  >
                    Username
                  </label>
                  <div className='mt-2'>
                    <input
                      type='text'
                      name='userName'
                      id='userName'
                      readOnly
                      value={formValues?.userName}
                      className='cursor-not-allowed block w-full rounded-md  p-2 text-ezGray shadow-sm border border-ezGray  sm:text-sm sm:leading-6'
                    />
                  </div>
                </div>
              </div>

              <div className='mt-8 flex'>
                <button
                  type='button'
                  onClick={updateProfile}
                  className='rounded-md bg-ezGreen px-3 py-2 text-sm semibold text-white shadow-sm'
                >
                  Save
                </button>
              </div>
            </form>
          </div>

          <ChangePassword />

          <div className='grid max-w-7xl grid-cols-1 gap-x-8 gap-y-10 px-4 py-16 sm:px-6 md:grid-cols-3 lg:px-8 items-end'>
            <div>
              <h2 className='text-base semibold leading-7 text-ezGray'>
                Delete account
              </h2>
              <p className='mt-1 text-sm leading-6 text-gray-400'>
                No longer want to use our service? You can delete your account
                here. This action is not reversible. All information related to
                this account will be deleted permanently.
              </p>
            </div>

            <form className='flex items-start md:col-span-2'>
              <button
                type='button'
                className='rounded-md bg-red-500 px-3 py-2 text-sm semibold text-white shadow-sm hover:bg-red-400'
              >
                Yes, delete my account
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}
