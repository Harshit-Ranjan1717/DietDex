import React from "react";

const Shimmer = () => {
  return (
    
    <div className="container mx-auto p-8 text-black">
      <h1 className="text-4xl font-semibold mb-8 text-center ">Meal Plan</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border   border-collapse">
          <thead className="bg-blue-500 text-black">
            <tr>
              <th className="px-6 py-3 text-left font-semibold shimmer">
                Meal
              </th>
              <th className="px-6 py-3 text-left font-semibold shimmer">
                Foods
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-blue-100 shimmer">
              <td className="border  px-6 py-4 shimmer"></td>
              <td className="border  px-6 py-4 shimmer">
                <ul className="h-24 pl-6">
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                </ul>
              </td>
            </tr>
            <tr className="bg-white shimmer">
              <td className="border  px-6 py-4 shimmer"></td>
              <td className="border  px-6 py-4 shimmer">
                <ul className="h-24 pl-6">
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                </ul>
              </td>
            </tr>
            <tr className="bg-blue-100 shimmer">
              <td className="border  px-6 py-4 shimmer"></td>
              <td className="border  px-6 py-4 shimmer">
                <ul className="h-24 pl-6">
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                </ul>
              </td>
            </tr>
            <tr className="bg-white shimmer">
              <td className="border  px-6 py-4 shimmer"></td>
              <td className="border  px-6 py-4 shimmer">
                <ul className="h-24 pl-6">
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                  <li className="mb-2 shimmer"></li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Shimmer;
