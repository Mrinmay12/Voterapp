import React from 'react'
import "./Input.css"
export default function InputArea({ value, handleChnage }) {
    const OnChnage = (e) => {
        handleChnage(e.target.value)
    }
  return (
    <div style={{marginLeft:"10px"}}>
<input  type="text" className="inputtittle"  placeholder="Enter Tittle" onChange={OnChnage}/>
    </div>
  )
}
