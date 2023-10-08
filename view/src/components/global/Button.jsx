import React from "react";

export const Button = ({ title }) => {
  return (
    <button
      type="button"
      className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center mr-3 md:mr-0 dark:bg-geen-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
    >
      {title}
    </button>
  );
};
