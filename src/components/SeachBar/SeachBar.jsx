import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import fetchProducts from '../api/fetchProducts'
import AppContext from '../Context/AppContext'
import "./SearchBar.css";

function SearchBar() {
  
  const {setProducts} = useContext(AppContext)
  const [searchValue, setSearchValue] = useState("");
 

  const handleSearch = async (event) => {
    event.preventDefault();
    const product = await fetchProducts(searchValue)
    setProducts(product)
    setSearchValue('')    
  }

  return (
    <>
      <form className="form_contanier" onSubmit={handleSearch}>
        <input
          type="seach"
          placeholder="Buscar produtos"
          className="input_search"
          onChange={({ target }) => setSearchValue(target.value)}
          value={searchValue}
        />
        <button type="submit" className="button_search">
          <CiSearch />
        </button>
      </form>

      
    </>
  );
}

export default SearchBar;
