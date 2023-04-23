import React from "react";
import "./Header.scss";
import appIcon from "../../../images/appIcon.svg";

class Header extends React.Component {
    render(){
        return(
    <div className="header">

        <div className="container">
        <div className="header-left">
            <img src={appIcon} alt="" className="header-icon"/>

        </div>
        <div className="header-right">fdadsdadd</div>
        </div>
        
    </div>
        )       
    }
}

export default Header;