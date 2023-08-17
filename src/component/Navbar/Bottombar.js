import React, { Component, useMemo, useState, useEffect } from "react";
import {
  useLocation,
  useNavigate
} from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome,faCloud,faUser } from '@fortawesome/free-solid-svg-icons';

import "./Bottomnav.css"
export default function Bottombar() {
  const location = useLocation();
  const navigate=useNavigate();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  return (
    <div>
       <div>
         <nav className="bottom-navbar">
    <ul className="nav-links">
      {/* <li onClick={()=>navigate("/home")}>{splitLocation[1]==="home" ||splitLocation[1]===""?<FontAwesomeIcon icon={faHome} style={{color:"white",height:"30px",width:"40px"}}/>:<FontAwesomeIcon icon={faHome} style={{color:"black"}} />}</li> */}


      <li  onClick={()=>navigate("/home")}>{splitLocation[1]==="home" ||splitLocation[1]===""?<FontAwesomeIcon icon={faHome} style={{color:"black",height:"30px",width:"40px",cursor:"pointer"}}/>:<FontAwesomeIcon icon={faHome} style={{color:"white",height:"30px",width:"40px",cursor:"pointer"}} />}</li>

      <li  onClick={()=>navigate("/upload")}>{splitLocation[1]==="upload" ?<FontAwesomeIcon icon={faCloud} style={{color:"black",height:"30px",width:"40px",cursor:"pointer"}}/>:<FontAwesomeIcon icon={faCloud} style={{color:"white",height:"30px",width:"40px",cursor:"pointer"}} />}</li>

      <li  onClick={()=>navigate("/profile")}>{splitLocation[1]==="profile" ?<FontAwesomeIcon icon={faUser} style={{color:"black",height:"30px",width:"40px",cursor:"pointer"}}/>:<FontAwesomeIcon icon={faUser} style={{color:"white",height:"30px",width:"40px",cursor:"pointer"}} />}</li>
      
      


      {/* <li><a href="#"><i className="fas fa-bell"></i> Notifications</a></li> */}
    </ul>
  </nav>
      </div>
    </div>
  )
}
