import React from "react";
import PrimaryButton from "./button/PrimaryButton";

const Search = ({ city, setCity, onSearch, placeholder, loading }) => {
  return (
    <form className="flex justify-center mb-4" onSubmit={onSearch}>
      <input
        placeholder={placeholder}
        autoComplete="off"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        className="p-1.5 px-2 bg-gray-50 border-2  border-slate-950 text-gray-900 text-sm   "
      />
      <PrimaryButton sx="p-1.5 px-2 inline" disabled={loading} type="submit" />
    </form>
  );
};

export default Search;
