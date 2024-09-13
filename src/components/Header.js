import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
            alt="LOGO"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
            <button className="login" onClick={()=>{
                if(btnName=="Login") setBtnName("Logout");
                else setBtnName("Login")
                console.log(btnName);                
            }}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
  };

  export default Header;