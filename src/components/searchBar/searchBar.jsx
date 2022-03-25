import React, { useState } from "react";
import "./searchBar.css";
import SearchIcon from "../../images/SearchIcon.svg"
import UserInfo from "../userInfo/userInfo";

export default function SearchBar(){
    const [username, setUsername] = useState("RenanTCastro");
    const [inputName, setInputName] = useState();

    const handleClick=()=>{
        setUsername(inputName)
    }

    return(
        <div>
            <div className="searchBar">
                <div className="divSearchBar">
                    <img src={SearchIcon} alt="icone do sol" className="iconSearch"/>
                    <input 
                        className="inputSearch" 
                        placeholder="Search GitHub username..."
                        onChange={(e)=>setInputName(e.target.value)}>
                    </input>
                </div>
                
                <button className='buttonSearch' onClick={handleClick}>
                    <p>Search</p>
                </button>
            </div>
            <UserInfo username={username}/>
        </div>
    )
}
