import React,{useEffect, useState,useRef} from 'react'
import InputArea from '../UploadPost/InputArea'
import "./Profile.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit,faUser,faSave} from '@fortawesome/free-solid-svg-icons';
import HorizontalScrollCard from '../UserAllPost/HorizontalScrollCard';
import ImageModelPopup from '../ImageModelPopup/ImageModelPopup';
import Loder from '../LoderComponent/Loder';
import apiUrl from '../../ApiAxios';
import { useSelector, useDispatch } from 'react-redux'
export default function Profile() {
  const login_id = useSelector(state => state.myReducer.data);
  console.log('====================================');
  console.log(login_id);
  console.log('====================================');
  const [showPopup, setShowPopup] = useState(false);
  const [popupImageUrl, setPopupImageUrl] = useState('');
const  ProfileImageRef= useRef()

  const handleClosePopup = () => {
    setPopupImageUrl('');
    setShowPopup(false);
  };
  const handleOpenPopup = (imageUrl) => {
    setPopupImageUrl(imageUrl);
    setShowPopup(true);
  };
const[ProfileImage,setProfileImage]=useState(null)
const[ProfileImage2,setProfileImage2]=useState(null)
console.log('====================================');
console.log(ProfileImage);
console.log('====================================');
const[pofileuploadstatus,setpofileuploadstatus]=useState(false)
useEffect(()=>{
  if(ProfileImage2){
    setpofileuploadstatus(true)
  }
},[ProfileImage2])
// const ProfileImageupload = async () => {
//   const formData = new FormData();
//   formData.append('image', ProfileImage);
//   formData.append('user_id', "Mrinmayljv0j9f7q7940");
//   try {
//  let response= await  apiUrl.put(`/api/uploaduserProfilePic`, formData, {
//     headers: {   
//       'Content-Type': 'multipart/form-data',
//     },
//   });
//   if(response.status===200){
//     console.log('====================================');
//     console.log(response.status,"response.status");
//     console.log('====================================');
//     setpofileuploadstatus(false)
//   }
// }catch (error) {
//   console.error(error);
//   alert('Error uploading images. Please try again later.');
// }
// }
const[refress,setrefress]=useState("")
const ProfileImageupload=async()=>{
  try {
    const response = await apiUrl.put('api/user/UserProfile/upload_user_profile', {
      profileImage:ProfileImage2,
      user_id:"Mrindgddb2"
    });

    if (response.data.status === true) {
      setpofileuploadstatus(false)
      setrefress(new Date().getMilliseconds())
    }
  } catch (error) {
    console.error(error);
  }
}
useEffect(()=>{
  if(ProfileImage2 !==null){
    // setpofileuploadstatus(true)
      ProfileImageupload()
  }
},[ProfileImage2])
  const[profileimgstatus,setprofileimgstatus]=useState(false)

console.log('====================================');
console.log(profileimgstatus);
console.log('====================================');

const convertToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = () => {
      resolve(fileReader.result);
    };
    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
const handleFileUpload = async (e) => {
  const file = e.target.files[0];
  const base64 = await convertToBase64(file);
  setProfileImage2(base64);
};
const getImage=async()=>{
  try {
    const response = await apiUrl.get('api/user/UserProfile/userImage/Mrindgddb2')
    if(response.status===200){
      setpofileuploadstatus(false)
      setProfileImage(response.data.image)
    }
}catch(err){
  console.log(err)
}
}
useEffect(()=>{
  getImage()
},[refress])
const[disable,setDisable]=useState(true)
const handleEdit=()=>{
  setDisable(!disable)
}

const [name,setName]=useState("")
const [email,setEmail]=useState("")
const [age,setAge]=useState("")
const [userid,setUserid]=useState("")

const handleSave=()=>{
  setDisable(true)
}
  return (
    <div>
  
      <div className="container">
        <h1>Profile
        </h1>
       
        <div className="avatar-upload">
          <div className="avatar-edit">
            <input type='file' id="imageUpload" accept=".png, .jpg, .jpeg"  onChange={(e) => handleFileUpload(e)} name={ProfileImage} ref={ProfileImageRef}/>
            <label for="imageUpload"></label>
          </div>
          <div className="avatar-preview" onClick={()=>handleOpenPopup(ProfileImage)}>
            <div id="imagePreview" style={{ backgroundImage: `url(${ProfileImage})` }}>
            {pofileuploadstatus &&(

            <div style={{padding:"57px"}}>
            <Loder/>
            </div>
            )}
            </div>
          </div>
        </div>
        
          <p style={{marginBottom:"20px"}}>
        {!disable ?<>
        
        <FontAwesomeIcon icon={faSave} style={{height:"24px",width:"40px",color:"#0087ff"}} onClick={handleSave}/>
         
     
        </>:(
          
          <FontAwesomeIcon icon={faEdit} style={{height:"24px",width:"40px"}} onClick={handleEdit}/>
        )}
        </p>
       
       
        <div>Name: <input className='profileinput' placeholder='Change name' value={name} onChange={(e)=>setName(e.target.value)} disabled={disable}/></div>
        {/* <div id="wrapper">
          <div id="outer">
            <div className="itemwrapper">
              <div className='text'>Age: <input className="text" /></div>
            </div>
            <div className="itemwrapper item2">
              <div className='text'>Dob: <input className="text" /> </div>
            </div>
          </div>
        </div> */}
        <div>Email:  <input className='profileinput' value={email} onChange={(e)=>setEmail(e.target.value)} disabled={true}/></div>
        <div><span style={{paddingLeft:"10px"}}>Age:</span> <input className='profileinput' value={age} onChange={(e)=>setAge(e.target.value)} disabled={true}/></div>
        <div>User id:  <input className='profileinput' value={userid} onChange={(e)=>setUserid(e.target.value)} disabled={true}/></div>
      
      </div>
      <HorizontalScrollCard/>

      {/* pupup */}
      {showPopup && (
        <ImageModelPopup imageUrl={popupImageUrl} onClose={handleClosePopup} setrefress={setrefress}/>
      )}
    </div>
  )
}
