import { useState} from 'react';
import './Search.css';
import { Link } from 'react-router-dom';
import React from 'react';

function Search() {
  const [searchText, setSearchText] = useState('');
  const [searchResult, setSearchResult] = useState('');

  let sText;
  if (searchText === "") {
    sText = "Search"
  } else {sText = searchText}

  const handleSearch = () => {setSearchResult(sText)};

  return (
    <div className="Search elInHead">
      <input type="textarea" placeholder="Введите название фильма:" value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
      <Link key={searchText} to={`/search/${sText}`}><div onClick={handleSearch} tabIndex={0}></div></Link>
    </div>
  );
}

export default Search;