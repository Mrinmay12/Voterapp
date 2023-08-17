import React, { useEffect, useState } from 'react'
import "./Login.css"
import PasswordField from '../Password/PasswordField'
import apiUrl from "../../ApiAxios"
import { useSelector, useDispatch } from 'react-redux';
import { setData } from "../../redux/action/LoginAction";
export default function Login({setLogin_true}) {
  const dispatch=useDispatch()
 
  const[show,setShow]=useState(true)
  const[registershow,setRegisterShow]=useState(false)
  const[forgetshow,setForgetShow]=useState(false)
  const handleLogin=()=>{
    setShow(true)
    setRegisterShow(false)
  }
  const handlePassword=()=>{
    setShow(false)
    setForgetShow(true)
  }
  const handleRegisterView=()=>{
    setShow(false)
    setRegisterShow(true)
  }
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const[IsLoggedIn,setIsLoggedIn]=useState(false)

 

  const json=JSON.stringify({
    email:email,
   password:password
 })
 const handleSubmit=async()=>{
   try {
   let response = await apiUrl.post('/api/user/login', json)
     if(response){
      const token = response.data.token;
      // dispatch(setData(response.data.user_id))
      localStorage.setItem('token', token);
      setLogin_true(true)
      setIsLoggedIn(true)
     }
   }catch(err){
console.log('====================================');
console.log(err);
console.log('====================================');
   }
 }
  return (
  <body>
  {registershow &&(
        <div className="containerlogin">
    <h2>Registration Form</h2>

      <div className="form-group">
        <label for="name">Full name:</label>
        <input type="name" id="name" name="name" required autocomplete="off" placeholder="Enter name"/>
      </div>
      <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required autocomplete="off" placeholder="Email"/>
      </div>
      {/* <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" className='inputpassword' required/>
      </div> */}
      <div className="form-group">
        <label for="password">Password:</label>
        <PasswordField/>
      </div>
      <div className="form-group">
        <label for="password">Dob:</label>
        <input type="date" name="dto" max="2023-07-11"/>
      </div>
      <div className="form-group">
        <label for="gender">Gender:</label>
        <select id="gender" name="gender" required>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div className="form-group">
        <input type="submit" value="Register" onClick={handleSubmit}/>
      </div>
      <span>All ready register </span> <span className='signin' onClick={handleLogin}>sing in</span>
    </div>
  )}
    {show &&(
      <>
      <div className="containerlogin">
    <h2>Login</h2>
    <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required autocomplete="off" placeholder="Email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
      </div>
      {/* <div className="form-group">
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" className='inputpassword' required/>
      </div> */}
      <div className="form-group">
        <label for="password">Password:</label>
        <PasswordField setPassword={setPassword}/>
      </div>
      <div className="form-group">
        <input type="submit" value="Login" onClick={handleSubmit}/>
      </div>
      <span>back to <span className='signin' onClick={handleRegisterView}>register</span> or </span> <span className='forgetpass' onClick={handlePassword}>Forget password</span>
    </div>
      </>
    )}
    {forgetshow &&(
      <>
      <div className="containerlogin">
    <h2>Forget Password</h2>
    <div className="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" required autocomplete="off" placeholder="Email"/>
      </div>
      <div className="form-group">
        <input type="submit" value="Register" onClick={handleSubmit}/>
      </div>
      </div>
      </>
    )}
    </body>
  )
}
