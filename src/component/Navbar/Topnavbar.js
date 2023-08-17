import React,{useState} from 'react'
import {
    useLocation,
    useNavigate  
  } from "react-router-dom";
  import '@fortawesome/fontawesome-free/css/all.css';
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
  import { faSearch,faSignOutAlt,faArrowLeft} from '@fortawesome/free-solid-svg-icons';
  import "./Topnav.css";
  import logo from "../../Image/logo.png"
import LogoutModal from '../LogoutModel/LogoutModal';
export default function Topnavbar({setLogin_true}) {
  const navigation=useNavigate()
  const location = useLocation();
  //destructuring pathname from location
  const { pathname } = location;
  const splitLocation = pathname.split("/");
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogin_true(false);
  };
  const[Logoutshow,setLogoutshow]=useState(false)
  

  return (
    <div>
        {splitLocation[1]==="comment" ?(
          <nav class="arowtop-navbar">
          <ul class="nav-links">
    <li><FontAwesomeIcon icon={faArrowLeft} style={{cursor:"pointer"}} onClick={()=>navigation("/")}/></li>
    <li></li>
    <li></li>
    <li></li>
    </ul>
          </nav>
        ):(

        <nav class="top-navbar">
    <ul class="nav-links">
    <li><img src={logo} style={{height:"35px"}}/></li>
    <li><a ><i ></i> </a></li>
    <li><a ><i ></i> </a></li>
      <li onClick={()=>navigation("/search")}><FontAwesomeIcon icon={faSearch} style={{color:"black",height:"20px",width:"30px",cursor:"pointer",paddingTop:"7px"}}/></li>
      
      <li><a ><i></i></a></li>
      <li style={{cursor:"pointer"}} onClick={()=>setLogoutshow(true)}><FontAwesomeIcon icon={faSignOutAlt} style={{color:"red",height:"20px",width:"30px",cursor:"pointer",paddingTop:"7px"}}/></li>
    </ul>
  </nav>
        )}
        <LogoutModal Logoutshow={Logoutshow} setLogoutshow={setLogoutshow} setLogin_true={setLogin_true}/>
    </div>
  )
}
