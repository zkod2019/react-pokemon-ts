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
    <div>
        <label className="text-xs font-semibold inline-block py-3 px-4 text-transform=uppercase rounded text-pink-600 bg-pink-200 uppercase last:mr-0 mr-1">
            Choose Your Pokemon: 
            <div className="py-3 px-4 ">
            <input type="text" name="searchInput" value={searchInput}  onChange={handleChange} className="text-center"/>
            </div>
        </label>
    </div>
  );
};

export default SearchBar;
