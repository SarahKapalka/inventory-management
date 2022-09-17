import React from "react";

const Search = () =>{
    return(
        <>
        <input type="text" name="search" required className="input-text" placeholder="search for item"/>
        <button className="input-search">Search</button>
        </>
    )
}

export default Search