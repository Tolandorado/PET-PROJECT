import React from "react"; 
import "./Header.scss";
import appIcon from "../../../images/appIcon.svg";
import clientIcon from "../../../images/clientIcon.svg";
import Button from "../../UI/Button/Button.jsx";


class Header extends React.Component {
    render(){
        return(
    <div className="header">

        <div className="container">
            <div className="header-left">
                <img src={appIcon} alt="" className="header-icon"/>
            </div>
            <div className="header-right">
                <Button/>
                <div className="clientName">
                    <img src={clientIcon} alt="" className="header-load"/>
                    <span className="loginLoaded">Welcome Guest</span>
                </div>
            </div>
        </div>       
    </div>
        )       
    }
}

export default Header;