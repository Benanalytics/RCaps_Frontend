import React, { useState } from "react";
import PerfectScrollbar from "react-perfect-scrollbar";

const data = [
  {
    RegionPosition: "Country Manager",
    Rdgccurrent: 8,
    Projected: 0,
    Rdgecurrent: 11,
    Projected2: 0,
    Rdgncurrent2:6,
    Proje:0,
  },
  {
    RegionPosition: "Deputy Director General (DDG)",
    Rdgccurrent: 1,
    Projected: 0,
    Rdgecurrent: 1,
    Projected2: 0,
    Rdgncurrent2:1,
    Proje:0,
  },
  {
    RegionPosition: "Director General (DG)",
    Rdgccurrent: 1,
    Projected: 0,
    Rdgecurrent: 1,
    Projected2: 0,
    Rdgncurrent2:1,
    Proje:0,
  },
  {
    RegionPosition: "General Support Staff (GS)",
    Rdgccurrent: 34,
    Projected: 6,
    Rdgecurrent: 44,
    Projected2: 18,
    Rdgncurrent2:38,
    Proje:2,
  },
  {
    RegionPosition: "Local Professional (LP)",
    Rdgccurrent: 23,
    Projected: 0,
    Rdgecurrent: 50,
    Projected2: 0,
    Rdgncurrent2:20,
    Proje:2,
  },

  {
    RegionPosition: "Professional Staff (PL)",
    Rdgccurrent: 57,
    Projected: 2,
    Rdgecurrent: 98,
    Projected2: 5,
    Rdgncurrent2:63,
    Proje:0,
  },
];

const StaffingandFootprintTable = () => {
  const [isDownloadVisible, setDownloadVisible] = useState(false);

  const toggleDownload = () => {
    setDownloadVisible(!isDownloadVisible);
  };
 
  const Rdgccurrenttotal = data
    .map((item) => item.Rdgccurrent)
    .reduce((a, b) => a + b, 0);
  const Projectedtotal = data
    .map((item) => item.Projected)
    .reduce((a, b) => a + b, 0);
  const Rdgecurrenttotal = data
    .map((item) => item.Rdgecurrent)
    .reduce((a, b) => a + b, 0);
  const Projected2total = data
    .map((item) => item.Projected2)
    .reduce((a, b) => a + b, 0);
  const Rdgncurrent2total = data
    .map((item) => item.Rdgncurrent2)
    .reduce((a, b) => a + b, 0);

    const Projetotal = data
    .map((item) => item.Proje)
    .reduce((a, b) => a + b, 0);

  return (
    <div className="">
      <div class="cardTitle flex justify-end">
        <div className="ellipsis-button mb-4">
          <i
            className="ri-more-2-fill f18 ellipsis-icon"
            onClick={toggleDownload}
          ></i>
          {isDownloadVisible && (
            <div className="download-dropdown">
              <a href="#" className="dropdown-item flex items-center gap-x-2">
                <i class="ri-eye-line f16"></i> View
              </a>
              <a href="#" className="dropdown-item flex items-center gap-x-2">
                <i class="ri-download-2-line f16"></i> Download
              </a>
              <a href="#" className="dropdown-item flex items-center gap-x-2">
                <i class="ri-eye-line f16"></i> Export
              </a>
              <a href="#" className="dropdown-item flex items-center gap-x-2">
                <i class="ri-download-2-line f16"></i> xlx
              </a>
              <a href="#" className="dropdown-item flex items-center gap-x-2">
                <i class="ri-eye-line f16"></i> csv
              </a>
              <a href="#" className="dropdown-item flex items-center gap-x-2">
                <i class="ri-download-2-line f16"></i> pdf
              </a>
              <a href="#" className="dropdown-item flex items-center gap-x-2">
                <i class="ri-eye-line f16"></i> Print
              </a>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 flow-root">
        <div className="overflow-x-auto theme-table">
        <PerfectScrollbar>
              <table className="min-w-full divide-y divide-gray-300">
                <thead>
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Region
                      <br></br>
                      POsition
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      RDGC
                      <br></br>
                      Current
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Projected
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      RDGE
                      <br></br>
                      Current
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Projected
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      RDGN
                      <br></br>
                      Current
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Proje
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {data.map((item) => (
                    <tr>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.RegionPosition}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Rdgccurrent}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Projected}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Rdgecurrent}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Projected2}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Rdgncurrent2}
                      </td>
                      <td className="whitespace-nowrap px-2 py-2 text-light f13">
                        {item?.Proje}
                      </td>
                    </tr>
                  ))}
                  <tr>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      Total
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      {Rdgccurrenttotal}
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      {Projectedtotal}
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      {Rdgecurrenttotal}
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      {Projected2total}
                    </th>
                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      {Rdgncurrent2total}
                    </th>

                    <th
                      scope="col"
                      className="px-2 py-2 semibold text-normal text-benGray f12 text-uppercase text-left "
                    >
                      {Projetotal}
                    </th>
                  </tr>
                </tbody>
              </table>
            </PerfectScrollbar>
        </div>
      </div>
    </div>
  );
};

export default StaffingandFootprintTable;
