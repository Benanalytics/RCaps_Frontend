import React, { useState,useMemo, useRef, useEffect } from 'react';
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import { CSVLink } from "react-csv";
import { BsSearch } from "react-icons/bs";

const tableData = [
  {
    type: "ADB Non-Sovereign",
    ADBCountries: 426,
    BlendCountries: 350,
    ADFCountries: 446,
    RegionalOperators: 228,
  },
  {
    type: "ADB Sovereign",
    ADBCountries: 5722,
    BlendCountries: 1826,
    ADFCountries: 201,
    RegionalOperators: 377,
  },
];

const csvData = [
  [
    "",
    "ADBCountries",
    "BlendCountries",
    "ADFCountries",
    "RegionalOperators",
    "Total"
  ],
  ...tableData.map(
    ({
      type,
      ADBCountries,
      BlendCountries,
      ADFCountries,
      RegionalOperators,
    }) => [type, ADBCountries, BlendCountries, ADFCountries, RegionalOperators]
  ),
];

export default function BudgetComposition() {
  const [isDownloadVisible, setDownloadVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Region");
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value); // Update the selected option in the state
  };
  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };
  const ADBCountriesTotal = tableData
    .map((item) => item.ADBCountries)
    .reduce((a, b) => a + b, 0);
  const BlendCountriesTotal = tableData
    .map((item) => item.BlendCountries)
    .reduce((a, b) => a + b, 0);
  const ADFCountriesTotal = tableData
    .map((item) => item.ADFCountries)
    .reduce((a, b) => a + b, 0);
  const RegionalOperatorsTotal = tableData
    .map((item) => item.RegionalOperators)
    .reduce((a, b) => a + b, 0);

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
    <div className="card bg-white rounded-md card-shadow KPI-peformanceGrid grid-margin">
      <div className="cardBody">
        <div className="cardTitle flex justify-between items-center">
          <div className="mb-4 items-self-center">
            {" "}
            <p class="f14 semibold text-uppercase text-normal">
              {" "}
              Budget Composition
            </p>
            <p class="f13 semibold text-light text-benGray">
              Projected IOP for 2025- 2026 8in UA mn
            </p>
          </div>
          <div class="flex gap-x-3 mb-4 btns_ellipse items-center mb-4">
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

            <select
              value={selectedOption}
              onChange={handleSelectChange}
              name="program"
              id="program"
              className="border_blue bg-white text-benLightGray px-4 py-3 rounded-md input-box f14 flex items-center "
            >
              {/* <option value="">Select</option> */}
              <option value="Region">Region</option>
              <option value="Sector">Sector</option>
            </select>

            <div className="ellipsis-button" ref={downloadDropdownRef}>
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
                    <i class="ri-download-2-line f16"></i> Download PDF document
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
          <div className="">
            <div className="mt-4 flow-root">
              <div className="overflow-x-auto theme-table">
              <table className="min-w-full divide-y divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                        ></th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                        >
                          ADB Countries
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                        >
                          Blend Countries
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                        >
                          ADF Countries
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                        >
                          Regional Operators
                        </th>
                        <th
                          scope="col"
                          className="px-2 py-2 text-left semibold text-normal text-benGray f12 text-uppercase"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 bg-white">
                      {tableData.map((data, ind) => (
                        <tr key={`TabkeKey${ind}`}>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.type}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ADBCountries}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.BlendCountries}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ADFCountries}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.RegionalOperators}
                          </td>
                          <td className="whitespace-nowrap py-2 px-2 text-light f13">
                            {data?.ADBCountries +
                              data?.BlendCountries +
                              data?.ADFCountries +
                              data?.RegionalOperators}
                          </td>
                        </tr>
                      ))}
                      <tr className='total_row'>
                        <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                          {"Total"}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                          {ADBCountriesTotal}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                          {BlendCountriesTotal}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                          {ADFCountriesTotal}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                          {RegionalOperatorsTotal}
                        </td>
                        <td className="whitespace-nowrap py-2 px-2 text-bold f13">
                          {ADBCountriesTotal +
                            BlendCountriesTotal +
                            ADFCountriesTotal +
                            RegionalOperatorsTotal}
                        </td>
                      </tr>
                    </tbody>
                  </table>
              </div>
            </div>
          </div>
        </FullScreen>
      </div>
    </div>
  );
}
