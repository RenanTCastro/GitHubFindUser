import React, { useEffect, useState } from "react";
import "./userInfo.css";
import api from "../../services/api";

export default function UserInfo(props){
    const [user,setUser] = useState();
    console.log(props.username)
    function definirMes(mes){
        switch (mes){
            case "01": return "Jan ";
            case "02": return "Feb ";
            case "03": return "Mar ";
            case "04": return "Apr ";
            case "05": return "May ";
            case "06": return "Jun ";
            case "07": return "Jul ";
            case "08": return "Aug ";
            case "09": return "Sep ";
            case "10": return "Oct ";
            case "11": return "Nov ";
            case "12": return "Dec ";
            default: return "Null";
        }
    }           

    useEffect(()=>{
        api
            .get(`users/${props.username}`)
            .then((res)=>{
                const date = res.data.created_at.split("T",1)[0].split("-");
                const mes = definirMes(date[1]);
                res.data.created_at = "Joined " + date[2] +" "+ mes + date[0];
                setUser(res.data)
            })
            .catch(()=>{
                alert("Usuário não encontrado")
            })
    },[props.username])

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
