import React from "react";
import "./searchBar.css";
import SearchIcon from "../../images/SearchIcon.svg"

export default function searchBar(){
    return(
        <div className="searchBar">
            <div className="divSearchBar">
                <img src={SearchIcon} alt="icone do sol" className="iconSearch"/>
                <input className="inputSearch" placeholder="Search GitHub username..."></input>
            </div>
            
            <button className='buttonSearch' >
                <p>Search</p>
            </button>
        </div>
    )
}
