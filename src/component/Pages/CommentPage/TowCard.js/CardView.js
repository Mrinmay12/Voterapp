import React from 'react'
import "./Card.css"
export default function CardView() {
  return (
    <div>
      <div className='cardwrapper'>
      <div className="user-row">
  <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User Image"/>
  <div className='inform'>
  <span className="user-name tittle">ughtur</span>
  </div>
</div>
      {/* <h1 className='tittle'></h1> */}
      <div className=''>
      <span >hrgh . fjhjre</span>
      </div>
    <div class="card-row">
 
    <div class="card-container">
      <div class="maincard">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="Nature" class="responsive"/>
        <div class="icon-container">
          <i class="icon fas fa-heart">gg</i>
          <div class="comment-section">
            <i class="icon fas fa-comment mri">hb</i>
            <span class="comment-count">22</span>
          </div>
        </div>
      </div>
      <div class="maincard">
        <img src="https://images.unsplash.com/photo-1566438480900-0609be27a4be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZG9ufGVufDB8fDB8fHww&w=1000&q=80" alt="Nature" class="responsive"/>
        <div class="icon-container">
          <i class="icon fas fa-heart">gg</i>
          <div class="comment-section">
            <i class="icon fas fa-comment mri">hb</i>
            <span class="comment-count">22</span>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    </div>
  )
}
