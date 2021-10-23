import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { GrAppsRounded } from "react-icons/gr";
import { IoVideocamOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";

function Sidebar() {

  const [nav, setNav] = useState([
          {label: "Home", slug: "/", icon: {FiHome}},
          {label: "Dashboard", slug: "dashboard", icon: {GrAppsRounded}},
          {label: "Courses", slug: "courses", icon: {IoVideocamOutline}},
          {label: "Community", slug: "community", icon: {HiOutlineUserGroup}}
  ])
  const [currentPage, setCurrentPage] = useState("/");

  var navigation =  [];
  for(let i = 0; i < nav.length; i++){
    navigation.push(
      <li key={"nav-" + i + "-" + nav[i].slug}>
       <a href={nav[i].slug} className={"link noul flex c333" + (currentPage == nav[i].slug ? " on" : "")}>
         <div className={"ico s20 " + nav[i].icon}/>
         <h2 className="lbl s20">{nav[i].label}</h2>
       </a>
      </li>
    )
  }

  return (
    <div className="sidebar fixed">
      <a href="/" className="logo bl">
        <img src={logo} alt="" className="bl" />
      </a>

      <ul className="nav">
        {navigation}
      </ul>

      <div className="explore fixed">
        <h3 className="w1 s15">Learn with your Friends</h3>
        <a href="/">
          <button className="btn s15">Explore</button>
        </a>
      </div>
    </div>
  )
}

export default Sidebar;
