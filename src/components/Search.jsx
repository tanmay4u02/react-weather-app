import React from "react";
import PrimaryButton from "./button/PrimaryButton";

const Search = ({ setCity, onSearch, placeholder }) => {
  return (
    <div className="w-2/4 m-auto mb-2">
      <input
        placeholder={placeholder}
        autoComplete="off"
        onChange={(e) => setCity(e.target.value)}
        className="p-1.5 px-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm focus:ring-blue-500 focus:border-blue-500  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
      <PrimaryButton
        text="search"
        sx="p-1.5 px-2 inline"
        // disabled={loading}
        onClickHandler={onSearch}
      />
    </div>
  );
};

export default Search;
