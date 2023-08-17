import React, { useState, useRef, useEffect } from 'react'
import "./Post.css"
import apiUrl from "../../ApiAxios"
import clickSound from "../../Image/click.mp3"
import InputField from './InputField';
import InputArea from './InputArea';
import {
  useNavigate,
} from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Post() {
  const navigate=useNavigate();
  const data = useSelector(state => state.myReducer.data);
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  const [fimage, setFImage] = useState(null);
  const [simage, setSImage] = useState(null);
  const [fimageUrl, setFimageUrl] = useState("");
  const [imgnotexist, setImgnotExist] = useState(false)
  const [simageUrl, setSimageUrl] = useState("");
  const [imgnotexist2, setImgnotExist2] = useState(false)
  const[description,setdescription]=useState("")
  const fimageRef = useRef();
  const simageRef = useRef();
  const clickSoundRef = useRef(null);
  
  useEffect(() => {
    if (fimage !== null) {
      setFimageUrl("")
    }
  }, [fimage])
  useEffect(() => {
    if (simage !== null) {
      setSimageUrl("")
    }
  }, [simage])

  //Image URL valid or not check
  function checkImage(url) {
    var image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        setImgnotExist(false);
      }
    }
    image.onerror = function () {
      setImgnotExist(true);
    }
    image.src = url;
  }
  checkImage(fimageUrl);
  function checkImage2(url) {
    var image = new Image();
    image.onload = function () {
      if (this.width > 0) {
        setImgnotExist2(false);
      }
    }
    image.onerror = function () {
      setImgnotExist2(true);
    }
    image.src = url;
  }
  checkImage2(simageUrl);

  const handleChnageImageF = (e) => {
    setFimageUrl(e)
  }
  const handleChnageImageS = (e) => {
    setSimageUrl(e)
  }
const handleTitle=(e)=>{
  setdescription(e)
}
// useEffect(()=>{
//   if(imgnotexist===true){
//     fimageRef.current.focus()                      
//     setFImage(null)
//   }
// },[imgnotexist])

const handleSound=()=>{
  clickSoundRef.current.play();
}
const handleSubmit = async (e) => {
  
const formData = new FormData();
formData.append('image1', fimage);
formData.append('image2', simage);
formData.append('user_id', "Mrinmayljv0j9f7q7940");
formData.append('status', true);
formData.append('post_description', description);
if((fimage===null ||imgnotexist===true) && (simage===null || imgnotexist2===true) && description===""){
  navigate("/")
  
}else{

  try {
    await apiUrl.post('/api/userpost/newupload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
    
    navigate("/");
    // Reset the form
    setFImage(null);
    setSImage(null);
    setdescription('');
  } catch (error) {
    console.error(error);
    alert('Error uploading images. Please try again later.');
  }
}
}




  return (
    <div className='allinone'>
    <InputArea handleChnage={handleTitle}/>
     
      

      <div className='mmm'>
        <div className="file-upload-card">
          <InputField value={fimageUrl} handleChnage={handleChnageImageF} />
          <>
            {fimageUrl || fimage ? (
              <>
                {fimageUrl ? (
                  <>
                    {imgnotexist ? (<div style={{color:"red"}}>image doesn't exist !</div>) : (
                      <>
                        <label for="file-upload" className="imgstyle">
                          <img alt="img" src={fimageUrl} className="imgstyle" />
                        </label>
                        <input type="file" name={fimage} ref={fimageRef} className="file-upload-input"
                          id="file-upload"
                          onChange={(e) => setFImage(e.target.files[0])} />
                      </>

                    )}
                  </>
                ) : (
                  <>
                    {fimage && (
                      <>
                        <label for="file-upload" className="imgstyle">
                          <img alt='img' src={URL.createObjectURL(fimage)} className="imgstyle" />
                        </label>
                        <input type="file" name={fimage} ref={fimageRef} className="file-upload-input"
                          id="file-upload"
                          onChange={(e) => setFImage(e.target.files[0])} />
                      </>

                    )}
                  </>
                )}
              </>
            ) : (
              <>
                <label for="file-upload" className="file-upload-label">
                  <span className="file-upload-icon"></span>
                  <span className="file-upload-text">Choose a file</span>
                </label>
                <input type="file" name={fimage} ref={fimageRef} className="file-upload-input"
                  id="file-upload"
                  onChange={(e) => setFImage(e.target.files[0])} />
              </>
            )}
          </>


        </div>
        <div className="file-upload-card">
          <InputField value={simageUrl} handleChnage={handleChnageImageS} />
          <>
            {simageUrl || simage ? (
              <>
                {simageUrl ? (
                  <>
                    {imgnotexist2 ? (<div style={{color:"red"}}>image doesn't exist !</div>) : (
                      <>
                        <label for="sfile-upload" className="simgstyle">
                          <img alt="img" src={simageUrl} className="simgstyle" />
                        </label>
                        <input type="file" name={simage} ref={simageRef} className="sfile-upload-input"
                          id="sfile-upload"
                          onChange={(e) => setSImage(e.target.files[0])} />
                      </>

                    )}
                  </>
                ) : (
                  <>
                    {simage && (
                      <>
                        <label for="sfile-upload" className="simgstyle">
                          <img alt='img' src={URL.createObjectURL(simage)} className="simgstyle" />
                        </label>
                        <input type="file" name={simage} ref={simageRef} className="sfile-upload-input"
                          id="sfile-upload"
                          onChange={(e) => setSImage(e.target.files[0])} />
                      </>

                    )}
                  </>
                )}
              </>
            ) : (
              <>
                <label for="sfile-upload" className="sfile-upload-label">
                  <span className="file-upload-icon"></span>
                  <span className="file-upload-text">Choose a file</span>
                </label>
                <input type="file" name={simage} ref={simageRef} className="sfile-upload-input"
                  id="sfile-upload"
                  onChange={(e) => setSImage(e.target.files[0])} />
              </>
            )}
          </>


        </div>


      </div>
      <div className='btn'>
        <div className='btn_click'>
          <button className='clickpost' onClick={()=>{handleSound();handleSubmit();}}>Post</button>
          <audio ref={clickSoundRef}>
        <source src={clickSound} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
        </div>
      </div>
    </div>
  )
}
