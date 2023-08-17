import React,{useState} from 'react'
import "./Comment.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import AutoGrowTextarea from './AutoGrowTextarea';
export default function Comment() {
   
  return (
    <div>
    <div>
      
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment! rfgfg  fdgfd fghg ertetyrrtceertertfrygbytunytuyt </div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment! eurewygryewgruygewuyrguyewgruywergwerewuyruyweruyweruywegyruewrfuewyu</div>
        </div>
      </div>
    </div>
      <div class="comment-main-box">
      <div class="comments-box">
        <div class="profile-pic">
          <img
            src="https://s.gravatar.com/avatar/c75a0943b348f2aedb1cdee6a09e17d8?d=mm&s=70"
            alt=""
          />
        </div>
        <div class="comment-text-box">
          <div class="arrow"></div>
          <div class="comment-text">This is my comment!</div>
        </div>
      </div>
    </div>
{/* <div class="commentcontainer">
  <h1>Comments</h1>
  <div class="comments-container">
    <div class="comments">
     
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
        <div class="comment-content">
          <h4>User 1</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
      </div>
      <div class="comment">
        <img src="user2.jpg" alt="User 2"/>
        <div class="comment-content">
          <h4>User 2</h4>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
        </div>
      </div>
 
    </div>
    {/* <div class="comment-form">
      <h3>Add a Comment</h3>
      <form>
        <div class="form-group">
          <input type="text" placeholder="Name"/>
        </div>
        <div class="form-group">
          <textarea rows="4" placeholder="Your comment"></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div> */}
  </div>
  {/* <div style={{position:"relative"}}>
  <textarea style={{paddingRight: "58px", maxHeight: "100px", width: "338px", borderColor: "red", borderWidth: "2px", outline: "none", overflow: "hidden", resize: "none",borderRadius: "9px",paddingLeft:"2px",height:"38px"}} value={commentext} onChange={CommentArea} placeholder="Write a comment"></textarea>
  <button  style={{position: "absolute", top: "10px", right: "10px", border: "none"}}>
  
  <FontAwesomeIcon icon={faPaperPlane} style={{color:"black",height:"19px",width:"24px",cursor:"pointer"}}/>
   
  </button>
</div> */}
{/* // </div> */}
{/* <text className='send-icon'>Post</text> */}
<div className='autogrowstart'>
<AutoGrowTextarea/>

</div>


    </div>
  )
}
