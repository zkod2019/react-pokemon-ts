import React from "react";

export interface ISearchBarProps {
  searchInput:string
  setSearchInput:(val:string)=>void
}

const SearchBar = ({searchInput,setSearchInput}:ISearchBarProps) => {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchInput(event.target.value);
    console.log(event.target.value);
  };
  
  return (
    <div className="flex items-center justify-center">
        <label className="text-center padding: 2em text-2xl font-semibold inline-block py-7 px-8 text-transform=uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1 ">
            Choose Your Pokemon: 
            <div className="py-6 px-9 ">
            <input type="text" name="searchInput" value={searchInput}  onChange={handleChange} className="text-center text-blue-600 border-2 border-gray-300 focus:outline-none"/>
            </div>
        </label>
    </div>
  );
};

export default SearchBar;
