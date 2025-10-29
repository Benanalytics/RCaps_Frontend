const Footer = () => {
  return (
    <div
      className='ben__Footer w-full'
      style={{
        background:
          'url(/assets/images/footerBg.jpg), lightgray -70.919px -53px / 107.387% 107.919% no-repeat',
      }}
    >
          <div className="footer-top">
              <div className='max-w-benContainer'>
                <div className='w-full flex footer_content gap-x-1 justify-between'>
                  <div className='mb-5 md:mb-0 footer_col'>
                    <img
                      src='/assets/images/GreenLogo.png'
                      alt='footerLogo'
                      className='footerLogo h-15 mb-5'
                    />
                     <p className="text-white f11">A part of the African Development Bank Group, committed to accelerating Africa’s transformation.</p>
                    {/* <div className='w-max flex flex-col md:flex-row items-center'>
                      <p className="text-white f11">A part of the African Development Bank Group, committed to accelerating Africa’s transformation.</p>
                    </div> */}
                  </div>
                  <div className='mb-5 md:mb-0 footer_col'>
                      <h4 class="text-white f18 mb-8">Our Links</h4>
                      <ul className=''>
                        <li className='text-white f13 mb-3'><a href="javascript:void();"><i class="ri-arrow-right-double-line"></i> Contact Us</a></li>
                        <li className='text-white f13 mb-3'><a href="javascript:void();"><i class="ri-arrow-right-double-line"></i> Operations Academy</a></li>
                        <li className='text-white f13 mb-3'><a href="javascript:void();"><i class="ri-arrow-right-double-line"></i> Knowledge management</a></li>
                        <li className='text-white f13 mb-3'><a href="javascript:void();"><i class="ri-arrow-right-double-line"></i> Documents</a></li>
                      </ul>
                  </div>
                  <div className='footer_col get_inTouch'>
                    <h6 className='text-white f18 mb-8'>Get in touch</h6>
                    <form className='flex items-center contactForm mb-4 w-full border border-white rounded-md email_box'>
                      <input
                        type='email'
                        className='p-3 outline-none f12 flex1 bg-transparent'
                        required
                        placeholder='Your email here'
                      />
                      <button
                        type='submit'
                        className='btn text-white'
                      >
                         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18" fill="none">
                              <path d="M18.557 0.0116409C18.305 0.0233597 18.0677 0.0966017 17.8568 0.178633H17.8538C17.64 0.263594 16.6234 0.691328 15.0794 1.33879C13.5355 1.98918 11.5316 2.83293 9.54231 3.67082C5.56965 5.34367 1.66438 6.99016 1.66438 6.99016L1.71125 6.97258C1.71125 6.97258 1.44172 7.06047 1.16047 7.25383C1.01692 7.34758 0.858716 7.47648 0.721021 7.67863C0.583325 7.88078 0.471997 8.19133 0.513013 8.51066C0.580396 9.05266 0.931958 9.37785 1.18391 9.55656C1.43879 9.7382 1.68196 9.82316 1.68196 9.82316H1.68782L5.34993 11.0566C5.51399 11.5839 6.46614 14.7128 6.69465 15.4335C6.82942 15.8642 6.96125 16.1337 7.12532 16.3388C7.20442 16.4443 7.29817 16.5321 7.4095 16.6025C7.45344 16.6288 7.50032 16.6493 7.54719 16.6669C7.56184 16.6757 7.57649 16.6786 7.59407 16.6816L7.55598 16.6728C7.5677 16.6757 7.57649 16.6845 7.58528 16.6874C7.61457 16.6962 7.63508 16.6991 7.67317 16.705C8.25325 16.8808 8.71907 16.5204 8.71907 16.5204L8.74543 16.4999L10.9075 14.5312L14.5316 17.3114L14.6136 17.3466C15.3695 17.6777 16.1341 17.4931 16.5384 17.1679C16.9456 16.8398 17.1038 16.4208 17.1038 16.4208L17.1302 16.3534L19.931 2.00676C20.0101 1.65227 20.0306 1.32121 19.9427 0.998945C19.8548 0.67668 19.6292 0.374922 19.3568 0.213789C19.0814 0.0497267 18.8089 -7.78459e-05 18.557 0.0116409ZM18.4808 1.54973C18.4779 1.5966 18.4866 1.59074 18.4661 1.68156V1.69035L15.6917 15.8876C15.68 15.9081 15.6595 15.9521 15.6038 15.996C15.5452 16.0429 15.4984 16.0722 15.2552 15.9755L10.8226 12.5771L8.14485 15.0175L8.70735 11.4257C8.70735 11.4257 15.6507 4.95402 15.9495 4.6757C16.2484 4.39738 16.1488 4.33879 16.1488 4.33879C16.1693 3.99895 15.6976 4.23918 15.6976 4.23918L6.56575 9.89641L6.56282 9.88176L2.18586 8.40812V8.4052C2.18293 8.4052 2.17708 8.40227 2.17415 8.40227C2.17708 8.40227 2.19758 8.39348 2.19758 8.39348L2.22102 8.38176L2.24446 8.37297C2.24446 8.37297 6.15266 6.72648 10.1253 5.05363C12.1146 4.21574 14.1185 3.37199 15.6595 2.7216C17.2005 2.07414 18.3402 1.59953 18.4046 1.57316C18.4661 1.54973 18.4368 1.54973 18.4808 1.54973Z" fill="white"/>
                          </svg>
                      </button>
                    </form>
                    <div className='checkLabel flex items-start'>
                      <input type='checkbox' className='w-4 h-4' id='term' />
                      <label
                        htmlFor='term'
                        className='text-white f11 cursor-pointer'
                      >
                        Hi this is an RDSA analytics dashboard developed to provide
                        support to RDSA-RDVP management. Click here to contact us.{' '}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              
          </div>
          <div className="footer-copyright">
            <div className='max-w-benContainer px-4 md:px-8 mx-auto'>
              <div className='w-full cprytDiv flex flex-col md:flex-row items-center justify-between'>                
                <div>
                    <p className='text-white f12'>
                      (C) 2023 RDSA - RDVP. All Rights Reserved.
                    </p>
                  </div>
                <div>
                  <ul className='flex items-center space-x-7 footer_links'>
                    <li className="text-white f12"><a href="javascript:void()">Privacy Policy </a></li>
                    <li className="text-white f12"><a href="javascript:void()">Terms of Use </a></li>              
                  </ul>
                </div>
              </div>
           </div>
          </div>
    </div>
  );
};

export default Footer;
