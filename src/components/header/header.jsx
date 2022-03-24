import React from "react";
import "./header.css";
import SunIcon from "../../images/SunIcon.svg"

export default function Header(){
    return(
        <div className="header">
            <h2 className="titleHeader">GitHubfinder</h2>
            <button className="buttonHeader">
                <h4>LIGHT</h4>
                <img src={SunIcon} alt="icone do sol"/>
            </button>
        </div>
    )
}
