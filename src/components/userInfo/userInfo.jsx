import React, { useEffect, useState } from "react";
import "./userInfo.css";
import GitHubLogo from "../../images/github-logo.jpg";
import api from "../../services/api";

export default function UserInfo(){
    const [user,setUser] = useState();

    useEffect(()=>{
        api
            .get("users/RenanTCastro")
            .then((res)=>{
                setUser(res.data)
                console.log(res.data)
            })
    },[])

    return(
        <div className="userInfo">
            <img src={user?.avatar_url} alt="Foto perfil" className="avatarUserInfo"/>
            <div className="userInfoSections">
                <div className="userInfoSectionNameDate">
                    <h3>{user?.name}</h3>
                    <p>{user?.created_at}</p>
                </div>
                <div>
                    <p className="userInfoUsername">{"@"+user?.login}</p>
                    <p>{user?.bio ? user?.bio : "This profile has no bio"}</p>
                </div>
                <div className="userInfoGitHub">
                    <div className="userInfoGitHubSection">
                        Repos
                        <p>{user?.public_repos}</p>
                    </div>
                    <div className="userInfoGitHubSection">
                        Followers
                        <p>{user?.followers}</p>
                    </div>
                    <div className="userInfoGitHubSection">
                        Following
                        <p>{user?.following}</p>
                    </div>
                </div>
            </div>

        </div> 
    )
}
