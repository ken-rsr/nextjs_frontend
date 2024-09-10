import React from "react";
import { TfiMapAlt } from "react-icons/tfi";

const TableComponent: React.FC = () => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
      <table className="w-full">
        <thead className="hidden sm:table-header-group">
          <tr className="font-montserrat font-semibold text-base">
            <th className="py-4 px-2 sm:px-8">Property Type</th>
            <th className="py-4 px-2 sm:px-8">Model</th>
            <th className="py-4 px-2 sm:px-8">Location</th>
            <th className="py-4 px-2 sm:px-8">Area</th>
            <th className="py-4 px-2 sm:px-8">Price</th>
            <th className="py-4 px-2 sm:px-8">Availability</th>
          </tr>
        </thead>
        <tbody className="block sm:table-row-group">
          <tr className="block sm:table-row font-montserrat font-normal text-sm text-customBlue">
            <td className="block sm:table-cell py-4 px-2 sm:px-8">
              <div className="sm:hidden grid grid-cols-2 gap-x-2">
                <span className="font-semibold">Property Type:</span>
                <span>Amaia Laguna</span>
              </div>
              <span className="hidden sm:inline">Amaia Laguna</span>
            </td>
            <td className="block sm:table-cell py-4 px-2 sm:px-8">
              <div className="sm:hidden grid grid-cols-2 gap-x-2">
                <span className="font-semibold">Model:</span>
                <span>Amaia Lands</span>
              </div>
              <span className="hidden sm:inline">Amaia Lands</span>
            </td>
            <td className="block sm:table-cell py-4 px-2 sm:px-8">
              <div className="sm:hidden grid grid-cols-2 gap-x-2">
                <span className="font-semibold">Location:</span>
                <span>Laguna</span>
              </div>
              <span className="hidden sm:inline">Laguna</span>
            </td>
            <td className="block sm:table-cell py-4 px-2 sm:px-8">
              <div className="sm:hidden grid grid-cols-2 gap-x-2">
                <span className="font-semibold">Area:</span>
                <span>50 sqm</span>
              </div>
              <span className="hidden sm:inline">50 sqm</span>
            </td>
            <td className="block sm:table-cell py-4 px-2 sm:px-8">
              <div className="sm:hidden grid grid-cols-2 gap-x-2">
                <span className="font-semibold">Price:</span>
                <span>2.2 M</span>
              </div>
              <span className="hidden sm:inline">2.2 M</span>
            </td>
            <td className="block sm:table-cell py-4 px-2 sm:px-8">
              <div className="sm:hidden grid grid-cols-2 gap-x-2">
                <span className="font-semibold">Availability:</span>
                <span className="text-customTeal">Ready for Occupancy</span>
              </div>
              <span className="hidden sm:inline text-customTeal">
                Ready for Occupancy
              </span>
            </td>
          </tr>
        </tbody>
        <tfoot className="block sm:table-footer-group">
          <tr className="block sm:table-row bg-teal-600 text-white">
            <td
              className="block sm:table-cell py-4 px-2 sm:px-8 font-montserrat text-white font-semibold text-xs"
              colSpan={6}
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <span className="pl-5 flex items-center">
                    <TfiMapAlt className="text-xl -ml-4 sm:text-base" />
                    <span className="pl-5 font-montserrat text-white font-semibold text-xs md:text-sm">
                      View Property Map
                    </span>
                  </span>
                </div>
                <button className="bg-yellow-500 hover:bg-yellow-600 py-1 px-4 rounded-full">
                  <span className="font-montserrat text-black font-bold text-xs md:text-sm">
                    View Property Full Details
                  </span>
                </button>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default TableComponent;
