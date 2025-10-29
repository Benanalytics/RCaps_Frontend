import React, { useState, useMemo, useRef, useEffect } from "react";
import { CSVLink } from "react-csv";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

import PerfectScrollbar from "react-perfect-scrollbar";
let PageSize = 8;
const tableData = [
  {
    Year: "Planned Lending Targets UA mn",
    Year2019: 6944,
    Year2020: 6944,
    Year2021: 5774,
    Year2022: 6041,
  },

  {
    Year: "Total Lending Approval UA mn",
    Year2019: 6610,
    Year2020: 3873,
    Year2021: 4191,
    Year2022: 5845,
  },

  {
    Year: "ADB Public",
    Year2019: 3542,
    Year2020: 2090,
    Year2021: 1938,
    Year2022: 2317,
  },

  {
    Year: "ADB Private",
    Year2019: 1539,
    2020: 393,
    Year2021: 520,
    Year2022: 1397,
  },

  {
    Year: "ADF (Including TSF)",
    Year2019: 1524,
    Year2020: 1390,
    Year2021: 1729,
    Year2022: 2131,
  },

  {
    Year: "NTF",
    Year2019: 4,
    Year2020: "-",
    Year2021: 3.6,
    Year2022: 0,
  },
];

const csvData = [
  ["Year", "2019", "2020", "2021", "2022"],
  ...tableData.map(
    ({ Year, Year2019, Year2020, Year2021, Year2022 }) => [
      Year, Year2019, Year2020, Year2021, Year2022
    ]
  ),
];

export default function FinancingOperationsTable() {
  const [currentPage, setCurrentPage] = useState(1);
  const downloadDropdownRef = useRef(null);
  const handle = useFullScreenHandle();

  const currentTableData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return tableData.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);
  const [isDownloadVisible, setDownloadVisible] = useState(false);

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
    <div className="cardBody">
      <FullScreen handle={handle}>

      <div class="flex gap-x-3 mb-4 flex-wrap items-center mb-4 justify-end">
       
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

        <div className="">
          <div className="overflow-x-auto theme-table">
          <PerfectScrollbar>
                <table className="min-w-full divide-y divide-gray-300">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-4 py-4 semibold text-normal text-benGray f13 text-uppercase text-left"
                      >
                        <b>Year</b>
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-4 py-4 semibold text-normal text-benGray f13 text-uppercase text-left"
                      >
                        <b>2019</b>
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-4 py-4 semibold text-normal text-benGray f13 text-uppercase text-left"
                      >
                        <b>2020</b>
                      </th>
                      <th
                        scope="col"
                        className=" px-4 py-4 semibold text-normal text-benGray f13 text-uppercase text-left"
                      >
                        <b>2021</b>
                      </th>
                      <th
                        scope="col"
                        className="whitespace-nowrap px-4 py-4 semibold text-normal text-benGray f13 text-uppercase text-left"
                      >
                        <b>2022</b>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 bg-white">
                    {currentTableData.map((data, ind) => (
                      <tr
                        key={`TabkeKey${ind}`}
                        className={
                          ind === 2
                            ? "ltBlue_bg"
                            : ind === 3
                            ? "ltgreen_bg"
                            : ind === 4
                            ? "ltbg_purple"
                            : ind === 5
                            ? "ltyellow_bg"
                            : ""
                        }
                      >
                        <td className="whitespace-nowrap py-4 px-4 text-light f13">
                          {data?.Year}
                        </td>
                        <td className="whitespace-nowrap py-4 px-4 text-light f13">
                          {data?.Year2019}
                        </td>
                        <td className="whitespace-nowrap py-4 px-4 text-light f13">
                          {data?.Year2020}
                        </td>
                        <td className="whitespace-nowrap py-4 px-4 text-light f13">
                          {data?.Year2021}
                        </td>
                        <td className="whitespace-nowrap py-4 px-4 text-light f13">
                          {data?.Year2022}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </PerfectScrollbar>
          </div>
        </div>
      </FullScreen>
    </div>
  );
}
