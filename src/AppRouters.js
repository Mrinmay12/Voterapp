import React, { Component, useMemo, useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
  Navigate,
  useNavigate,
} from "react-router-dom";
import Bottombar from "./component/Navbar/Bottombar";
import Main from "./component/Pages/Main";
import Login from "./component/Pages/Login";
import Upload from "./component/Pages/Upload";
import Profile from "./component/Pages/Profile";
import Topnavbar from "./component/Navbar/Topnavbar";
import Searchbar from "./component/Pages/Searchbar";
import Comment from "./component/Pages/CommentPage/Comment";
import { useSelector, useDispatch } from 'react-redux';
import { setData } from "./redux/action/LoginAction";

import apiUrl from "./ApiAxios";
export default function AppRouters() {
  const dispatch = useDispatch();
  const location = useLocation();
    //destructuring pathname from location
    const { pathname } = location;
const navigate=useNavigate()
    //Javascript split method to get the name of the path in array
    const splitLocation = pathname.split("/");
    // const newData = { name: "mm", id: 23 };
    // useEffect(()=>{

    //   dispatch(setData(newData))
    // },[])
    let token= localStorage.getItem('token');
  const[login_true,setLogin_true]=useState(false)
  const [user,setUser]=useState(null)
  useEffect(()=>{
    if(token){
      setLogin_true(true)
    }
  },[token])

   useEffect(()=>{
if(user){

  dispatch(setData(user))
}
    },[user])
  useEffect(() => {
const data=async()=>{
  if (token) {
     try{
      let response=await   apiUrl.get('/api/user/verify', {
        headers: {
          Authorization: token,
        },
      })
      if(response){
        setUser(response.data.user_id);
      }
     }catch(err){
      if(err.response.data.logout){
        localStorage.removeItem('token');
        setLogin_true(false)
      }
      console.log(err.response.data.logout);
     }
   
   }
}
     data()
        // .then((response) => response.json())
        // .then((data) => {
        //   setUser(data.user_id);
        // })
        // .catch((error) => {
        //   console.error('An error occurred:', error);
        // });
    
  }, [token]);
  useEffect(()=>{
if(!login_true){
  navigate("/login")
}else{
  navigate("/")
}
  },[login_true])
  return (
    <div>
    {!login_true?(

      <Routes>
        <Route path="/login" element={<Login setLogin_true={setLogin_true}/>} />
       
      </Routes>
    ):(
      <>
      <Routes>
        <Route path="/search" element={<Searchbar/>} />
        <Route path="/comment" element={<Comment/>} />
      </Routes>


  <>
  {splitLocation[1]==="search" || splitLocation[1]==="login"?(null):(

      <Topnavbar setLogin_true={setLogin_true}/>
  )}
      <div style={{paddingTop:"51px",backgroundColor:"#80808000",paddingBottom:"70px"}}>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/home" element={<Main />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
</div>
 {splitLocation[1]==="login"|| splitLocation[1]==="comment"? (null):(

      <Bottombar />
 )}
 </>
      </>
    )}
    
 


    </div>
  )
}

