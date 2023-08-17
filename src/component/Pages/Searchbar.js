import React,{useState} from 'react'
import "./Search.css"
export default function Searchbar() {
const [search,setSearch]=useState("");
console.log('====================================');
console.log(search,"ssssss");
console.log('====================================');
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }
  return (
    <div>
        
    <nav className="top-navbar">
<ul className="nav-links">
{/* <li></li> */}

<li>
  {/* <div className="searchcontainer"> */}
  <form className="nosubmit">
  <input className="nosubmit" type="search" placeholder="Search..." value={search} onChange={handleSearch}/>
</form>
  {/* </div> */}
</li>
</ul>
</nav>
<h1 style={{paddingTop:"46px"}}></h1>

   
<div class="user-card-container">
    <div class="user-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
      <h2>Mrinmay manna</h2>
    </div>
    <div class="user-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
      <h2>Mrinmay manna</h2>
    </div>
    <div class="user-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 1"/>
      <h2>Mrinmay manna</h2>
    </div>

    <div class="user-card">
      <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User 2"/>
      <h2>User 2</h2>
    </div>

  </div>
  </div>


  )
}
