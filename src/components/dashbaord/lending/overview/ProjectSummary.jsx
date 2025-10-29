import React, { useState, useRef, useEffect } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";
const data = [
  {
    recess: 'KIPI Target (PBD)',
    adf: '1,800',
    adbPublic: '2,524',
    adbPrivate: '1,524',
    adbTotal: '2,524',
    bankGroup: '6,805',
  },
  {
    recess: 'KIPI Target (MTFO)',
    adf: '1,800',
    adbPublic: '2,524',
    adbPrivate: '1,524',
    adbTotal: '2,524',
    bankGroup: '6,805',
  },
  {
    recess: '2023 SNDR Lending Tracker April 23',
    adf: '1,800',
    adbPublic: '2,524',
    adbPrivate: '1,524',
    adbTotal: '2,524',
    bankGroup: '6,805',
  },
  {
    recess: 'Published BRAG May-Jul',
    adf: '1,800',
    adbPublic: '2,524',
    adbPrivate: '1,524',
    adbTotal: '2,524',
    bankGroup: '6,805',
    bg: 'bg-benSecondary',
  },
  {
    recess: 'YTD Approvals (As of Mar 31, 2025)',
    adf: '1,800',
    adbPublic: '2,524',
    adbPrivate: '1,524',
    adbTotal: '2,524',
    bankGroup: '6,805',
    bg: 'bg-benYellow',
  },
  {
    recess: '% YTD Approvals as per KPI Target PBD)',
    adf: '34%',
    adbPublic: '70%',
    adbPrivate: '49%',
    adbTotal: '62%',
    bankGroup: '54%',
  },
  {
    recess: 'Extended Approvals Before Board Recess',
    adf: '1,800',
    adbPublic: '2,524',
    adbPrivate: '1,524',
    adbTotal: '2,524',
    bankGroup: '6,805',
    bg: 'bg-benPrimary',
  },
  {
    recess: '% Project Delivery as per KPI Target PBD)',
    adf: '34%',
    adbPublic: '70%',
    adbPrivate: '49%',
    adbTotal: '62%',
    bankGroup: '54%',
  },
  {
    recess: '% Project Delivery as per KPI target PBD)',
    adf: '34%',
    adbPublic: '70%',
    adbPrivate: '49%',
    adbTotal: '62%',
    bankGroup: '54%',
  },
];

const csvData = [
  ["PRE-RECESS", "ADF Including TSF", "ADB Public", "ADB Private", "ADB Total", "Bank Group"],
  ...data.map(
    ({ recess, adf, adbPublic, adbPrivate, adbTotal, bankGroup}) => [
      recess,
      adf,
      adbPublic,
      adbPrivate,
      adbTotal,
      bankGroup,
    
    ]
  ),
];

const ProjectSummary = () => {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();
  const toggleDownload = () => {
   
    setDownloadVisible(!isDownloadVisible);
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        downloadDropdownRef.current &&
        !downloadDropdownRef.current.contains(event.target)
      ) {
        setDownloadVisible(false);
      }
    };

    document.body.addEventListener("click", handleClickOutside);

    const toggleDownload = () => {
    

      setDownloadVisible(!isDownloadVisible);
    };

    return () => {
      document.body.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className='card bg-white rounded-md card-shadow grid-margin '>
       <div className="cardBody">
          <div class="cardTitle flex justify-between items-center">
              <div className='mb-4 items-self-center'> <p class="f14 semibold text-uppercase text-normal">Lending Progress and Projection Summary</p></div>
              {/* <div className='btn btn-sm outline-primaryBtn rounded-md flex gap-x-2 items-center mb-4'>
                <i class="ri-file-excel-2-line f18"></i> Export to Excel
              </div> */}


        
            <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4">
              <form className="border_blue relative flex bg-white rounded-md px-4 py-3 text-base input-box flex items-center f14">
                  <BsSearch className="pointer-events-none absolute inset-y-0 left-5 h-full w-4 text-benGray" />
                  <label htmlFor="search-field" className="sr-only">
                    Search
                  </label>
                  <input
                    id="search-field"
                    className="block h-full w-full border-0 f14 pl-8 text-benGray placeholder:text-benGray bg-transparent f14"
                    placeholder="Search..."
                    type="search"
                    name="search"
                  />
                </form>
                <div className="ellipsis-button mb-4"ref={downloadDropdownRef}>
                <i
                  className="ri-more-2-fill f18 ellipsis-icon"
                  onClick={toggleDownload}
                ></i>
                {isDownloadVisible && (
                  <div className="download-dropdown">
                    <a
                      onClick={handle.enter}
                      href="#"
                      className="dropdown-item flex items-center gap-x-2"
                    >
                      <i class="ri-eye-line f16"></i> View in full screen
                    </a>
                    <CSVLink
                      className="dropdown-item flex items-center gap-x-2"
                      filename="my-file.csv"
                      data={csvData}
                    >
                      <i class="ri-eye-line f16"></i>
                      Download CSV
                    </CSVLink>
                    
                    <a
                      href="#"
                      className="dropdown-item flex items-center gap-x-2"
                    >
                      <i class="ri-download-2-line f16"></i>Download XLS
                    </a>

                    <a
                      href="#"
                      className="dropdown-item flex items-center gap-x-2"
                    >
                      <i class="ri-download-2-line f16"></i> Download PDF
                      document
                    </a>
                    <a
                      href="#"
                      className="dropdown-item flex items-center gap-x-2"
                    >
                      <i class="ri-eye-line f16"></i> Print chart
                    </a>
                  </div>
                )}
              </div>
            </div>


          </div> 
          <FullScreen handle={handle}>
          <div className='mt-4 flow-root'>
            <div className='overflow-x-auto theme-table'>
            <PerfectScrollbar>
                <table className='min-w-full divide-y divide-gray-300'>
                  <thead>
                    <tr>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left whitespace-nowrap'
                      >
                        <select name='' id='' className="text-uppercase">
                          <option value='Pre-Recess'>Pre-Recess</option>
                          <option value='Pre-Recess'>Post-Recess</option>
                        </select>
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-left '
                      >
                        ADF Including TSF
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-left '
                      >
                        ADB Public
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-left '
                      >
                        ADB Private
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-left '
                      >
                        ADB Total
                      </th>
                      <th
                        scope='col'
                        className='px-2 py-2 semibold text-normal text-benGray f12 text-left '
                      >
                        Bank Group
                      </th>
                    </tr>
                  </thead>
                  <tbody className='divide-y divide-gray-200'>
                    {data.map((item) => (
                      <tr
                        key={item?.recess}
                        className={`${item?.bg} bg-opacity-30 ${
                          item?.bg ? 'text-black' : ''
                        }`}
                      >
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.recess}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.adf}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.adbPublic}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.adbPublic}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.adbTotal}
                        </td>
                        <td className='whitespace-nowrap px-2 py-2 text-light f13'>
                          {item?.bankGroup}
                        </td>
                      </tr>
                    ))}
                  </tbody>
              </table>
              </PerfectScrollbar>
            </div>
            <div class="mt-5">
              <div class="flex gap-x-2">
                <div class="f13 text-bold semi-bold flex gap-x-2">
                  <span className='mt-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.0" width="9" height="9" viewBox="0 0 512.000000 512.000000" preserveAspectRatio="xMidYMid meet">

                            <g transform="translate(0.000000,512.000000) scale(0.100000,-0.100000)" fill="#000000" stroke="none">
                            <path d="M2433 4735 c-60 -18 -133 -67 -185 -123 -67 -72 -130 -174 -245 -395 -122 -235 -184 -327 -361 -538 -147 -175 -285 -312 -357 -355 l-50 -29 -480 -5 -480 -5 -57 -27 c-79 -37 -142 -98 -181 -177 l-32 -66 -3 -970 c-3 -997 -2 -1036 36 -1110 39 -77 121 -150 204 -182 37 -15 110 -18 553 -23 597 -8 510 6 1006 -159 468 -155 684 -201 938 -201 298 0 498 74 672 250 71 71 94 103 133 181 55 112 73 178 87 319 10 98 14 110 54 175 87 139 133 319 121 472 -6 75 -5 86 18 132 32 61 76 212 76 256 l0 33 298 5 c259 4 307 7 375 26 401 107 640 542 511 931 -61 185 -215 356 -397 440 -138 65 -125 63 -773 68 l-591 3 24 87 c34 122 42 325 19 442 -69 342 -379 562 -790 559 -55 0 -120 -6 -143 -14z m316 -372 c121 -31 215 -109 247 -206 23 -69 23 -210 -1 -302 -23 -91 -69 -191 -146 -317 -69 -114 -89 -156 -99 -210 l-7 -38 866 -2 866 -3 55 -26 c74 -34 154 -114 188 -186 23 -50 27 -71 27 -153 0 -82 -4 -102 -25 -144 -39 -77 -103 -141 -178 -178 l-67 -33 -513 -3 c-282 -2 -512 -6 -510 -10 2 -4 15 -30 30 -58 94 -178 73 -381 -55 -529 l-34 -39 20 -44 c25 -58 34 -183 17 -253 -20 -87 -60 -160 -116 -215 l-53 -52 6 -93 c14 -233 -54 -387 -206 -467 -149 -80 -396 -90 -667 -27 -56 13 -260 76 -455 140 -436 144 -506 162 -691 177 l-148 12 0 913 0 913 83 0 c199 0 348 83 561 315 298 323 428 501 581 795 103 197 173 310 208 335 25 18 122 13 216 -12z m-2095 -2937 c158 -120 48 -359 -149 -322 -40 8 -99 55 -121 97 -18 36 -18 122 0 157 18 34 64 78 96 91 14 6 50 9 82 8 43 -2 64 -10 92 -31z"/>
                            </g>
                            </svg> 
                      </span>Note:</div>
                <div> <p class="f11 semibold text-normal text-benGray">A 19% YoY rise in approvals is expected for 2023, outpacing 2022. June and September stand out with 328% and 580% YoY growth, respectively.</p></div>
              </div>             
            </div>
         </div>
         </FullScreen>
       </div>
    </div>
  );
};

export default ProjectSummary;
