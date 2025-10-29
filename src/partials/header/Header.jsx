import { useState} from 'react';
import { Dialog } from '@headlessui/react';
import { FaBars } from 'react-icons/fa';
import { MdCancel } from 'react-icons/md';
import { Link, NavLink } from 'react-router-dom';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About RDVP', href: '/aboutRDVP' },
  { name: 'Features' },
  { name: 'Data Analytics'},
  { name: 'Project & Operation'},
];
 
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
 
  return (
     <header className="bg-white Mainheader fixedHeader" >
      <nav className='max-w-benContainer mx-auto flex items-center justify-between py-2'>
        <div className='flex lg:flex-1'>
          <Link to='/' className='-m-1.5 p-1.5'>
            <img className='h-14 xl:h-20 w-auto' src='/assets/svgs/logo.svg' alt='' />
          </Link>
        </div>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <FaBars className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden lg:flex lg:gap-x-3 xl:gap-x-5 items-center header_content'>
        {navigation.map((item) => (
  item.href ? (
    <NavLink
      key={item.name}
      to={item.href}
      className='text-black f14 semi-bold hover:text-benBlue headerLink'
    >
      <span className="header_link_text">{item.name}</span>
    </NavLink>
  ) : (
    <NavLink
      key={item.name}
      className='text-black f14 semi-bold hover:text-benBlue '
    >
      <span className="header_link_text">{item.name}</span>
    </NavLink>
  )
))}

          <Link to='/login' className='text-black f14 semi-bold whitespace-nowrap'>
            <span className='flex items-center gap-x-1'>
              <svg xmlns="http://www.w3.org/2000/svg" width="21" height="22" viewBox="0 0 24 25" fill="none">
                <path d="M12 2.75C6.62402 2.75 2.25 7.12402 2.25 12.5C2.25 17.876 6.62402 22.25 12 22.25C17.376 22.25 21.75 17.876 21.75 12.5C21.75 7.12402 17.376 2.75 12 2.75ZM12 4.25C16.5645 4.25 20.25 7.93555 20.25 12.5C20.25 17.0645 16.5645 20.75 12 20.75C7.43555 20.75 3.75 17.0645 3.75 12.5C3.75 7.93555 7.43555 4.25 12 4.25ZM12 6.5C9.9375 6.5 8.25 8.1875 8.25 10.25C8.25 11.3867 8.78027 12.3975 9.58594 13.0859C7.89844 13.9619 6.75 15.7256 6.75 17.75H8.25C8.25 15.6699 9.91992 14 12 14C14.0801 14 15.75 15.6699 15.75 17.75H17.25C17.25 15.7256 16.1016 13.9619 14.4141 13.0859C15.2197 12.3975 15.75 11.3867 15.75 10.25C15.75 8.1875 14.0625 6.5 12 6.5ZM12 8C13.251 8 14.25 8.99902 14.25 10.25C14.25 11.501 13.251 12.5 12 12.5C10.749 12.5 9.75 11.501 9.75 10.25C9.75 8.99902 10.749 8 12 8Z" fill="black" />
              </svg>  Log in
            </span>
          </Link>
          <Link
            to='/register'
            className='text-benPrimary f14 semi-bold  border border-benPrimary rounded-md p-2 xl:py-3 xl:px-8 hover:bg-benPrimary hover:text-white navy_btn'
          >
            Registration
          </Link>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <Link to='/' className='-m-1.5 p-1.5'>
              <img className='h-10 w-auto' src='/assets/svgs/logo.svg' alt='' />
            </Link>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <MdCancel className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-3 py-6'>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className='block f14 hover:text-benGreen headerLink'
                  >
                    <span className="header_link_text">{item.name}</span>
                  </NavLink>
                ))}
              </div>
              <div className='py-6'>
                <Link to='/login' className='block f14 mb-3'>
                  Log in
                </Link>
                <Link
                  to='/register'
                  className='block f14 w-max text-benPrimary border border-benPrimary rounded-md py-3 px-8 hover:bg-benPrimary hover:text-white navy_btn'
                >
                  Registration
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
   
}
