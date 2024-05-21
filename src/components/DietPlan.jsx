import React, { useState } from "react";



const DietPlan = ({mealPlan}) => {
  

 

  return (
    <>
      <div className="container mx-auto p-8">
      <h1 className="text-4xl font-semibold mb-8 text-center">Meal Plan</h1>
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead className="bg-blue-500 text-white">
            <tr>
              <th className="px-6 py-3 text-left font-semibold">Meal</th>
              <th className="px-6 py-3 text-left font-semibold">Foods</th>
            </tr>
          </thead>
          <tbody>
            {mealPlan?.map((meal, index) => (
              <tr key={index} className={index % 2 === 0 ? 'bg-blue-100' : 'bg-white'}>
                <td className="border px-6 py-4">{meal.heading}</td>
                <td className="border px-6 py-4">
                  <ul className="list-disc pl-6">
                    {meal?.subheadings?.map((subheading, subIndex) => (
                      <li key={subIndex} className="mb-2">
                        <strong>{subheading.item}</strong> - {subheading.description}
                      </li>
                    ))}
                  </ul>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    </>
  );
};



export default DietPlan;
