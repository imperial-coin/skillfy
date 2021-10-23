import React from "react";
import logo from '../assets/logo.png';
import { IoSearch } from "react-icons/io5";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoChatbubbleEllipse } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";


function Navbar(){
    return (
         
        <div className="navbar fixed">
          <div className="greet">                                       
            <h1>Good Morning, John Doe</h1>
          </div> 
          <div className="search">
            <input type="text" placeholder="Search here" />
            <button type="submit">
              <IoSearch/>
            </button>
          </div>
          <div className="icons">
            <IoNotificationsOutline className="bell"/>
            <IoChatbubbleElipse className="chat"/>
            <IoIosArrowDown className="arrow"/>
          </div>
        </div>
    )
}

export default Navbar;