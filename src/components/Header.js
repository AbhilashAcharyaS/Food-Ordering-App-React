import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

  const [btnName, setBtnName] = useState("Login");

  //subscribing to the store 
  const cartItems = useSelector((store)=>store.cart.items)

    return (
      <div className="header flex justify-between bg-slate-100">
        <div className="logo-container w-24">
          <img
            className="logo"
            src={LOGO_URL}
            alt="LOGO"
          />
        </div>
          <ul className="flex items-center">
            <li className="px-4 m-4 font-semibold text-xl"><Link to="/">Home</Link></li>
            <li className="px-4 m-4 font-semibold text-xl"><Link to="/about">About</Link>  </li>
            <li className="px-4 m-4 font-semibold text-xl"> <Link to="/contact">Contact</Link></li>
            <li className="px-4 m-4 font-semibold text-xl"> <Link to="/cart"> Cart ({cartItems.length})</Link></li>
            <li className="p-4 m-4 font-semibold text-xl bg-green-200 rounded-xl hover:shadow-xl"> 
              <button className="login " onClick={()=>{
                if(btnName=="Login") setBtnName("Logout");
                else setBtnName("Login")              
            }}>{btnName}</button></li>

           
          </ul>
      </div>
    );
  };

  export default Header;