import React, { useState, useEffect } from 'react'
import "./Card.css"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMessage, faHeart } from '@fortawesome/free-solid-svg-icons';
import apiUrl from "../../ApiAxios"
import axios from "axios"
import { useNavigate } from "react-router-dom";
import CardLoaderSkleton from "../Skeleton/CardLoaderSkeleton"
import Loder from "../LoderComponent/Loder"
import { throttle } from 'lodash'
import { useSelector } from 'react-redux';
export default function Card() {
  const navigate = useNavigate();
  const login_id = useSelector(state => state.myReducer.data);
  const [allcomment, setAllcomment] = useState([])
  const ShowComment = (e) => {
    setAllcomment(e);
    // setShowchart(true)
  }

  let NumofComment = allcomment.length
  const CommentLength = (e) => {
    if (e.length > 200) {
      return e.slice(0, 200) + "........."
    } else {
      return e
    }
  }


  const [arry, setArry] = useState([
    { id: 1, love: false, love2: false, des: "Lhhhhhhhhhhhhhhhhhhhhhhhhhhhhfggfdhjgfjhdgjhdgjdhgjhdgjdgjhfgdfjdhgdfjhgdfjhgdfgdfdhgdhgjgjdghjfdgjhfdhdfgghjfdfdrjfguiureyiutyreiuyhtiurhgiueriguyeriugyiuygiureytiuyreiutyiureyiutyireuytiuryeiutyiureyituyreiutyiuryeiutyreiutyiureyituyreiuytiuerytiuyeriutyuiriyngviyituyeriutvnyyiuery niurtyvniuerntuirenibtvureyvtnretyvrtyveiuttttttttttttt yrt   iureht giurehteiutoitret  ert eryutireytueoteeuyo" },
    { id: 2, love: false, love2: true, des: "vfjkvhgkjfdhgkkjfghkjflkghkljhgljkfklgrtgjoievfcxfgddrtdrtdrdgdgfd     mrinmay cvcfyg uytuyt" },
    { id: 3, love: false, love2: true, des: "" }
  ])

  const [postdata, setPostdata] = useState([])




  const [lodershow, setLodershow] = useState(false)
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);



  const fetchData = async () => {
    const response = await apiUrl.get(`/api/userpost/getallpost?page=${currentPage}&limit=${5}`)

    if (response) {
      setHasMore(response.data.hasMore);
      const data = await response.data.posts
      setPostdata([...postdata, ...data])
      // setLodershow(false)
    }

  };

  const handleInfiniteScroll = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
        setCurrentPage((prev) => prev + 1)
        setLodershow(true)
      }
    } catch (err) {
      console.log('====================================');
      console.log(err);
      console.log('====================================');
    }

  }
  useEffect(() => {

    fetchData();
  }, [currentPage]);
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  })


  const handleComment = (e) => {
    navigate("/comment")
  }

  const [isLoading, setIsLoading] = useState(true);
  const [cardData, setCardData] = useState(null);

  useEffect(() => {
    // Simulate an asynchronous fetch
    setTimeout(() => {
      setCardData(/* Your fetched card data */);
      setIsLoading(false);
    }, 2000); // Simulate 2 seconds loading time
  }, []);


  const [imageLoaded, setImageLoaded] = useState(false);

  const handleImageLoad = () => {
    setImageLoaded(true);
  };
  const [imageLoaded2, setImageLoaded2] = useState(false);

  const handleImageLoad2 = () => {
    setImageLoaded2(true);
  };




  const getImageUrl = (imageId) => {
    return `https://voterserver.onrender.com/api/userpost/images/${imageId}`;
  };

  const handleShareClick = () => {
    if (navigator.share) {
      navigator.share({
        title: "Check out this content!",
        text: "I found this interesting content and wanted to share it with you.",
        url: window.location.href
      })
        .then(() => console.log("Shared successfully"))
        .catch((error) => console.error("Error sharing:", error));
    } else {
      alert("Web Share API is not supported in this browser.");
    }
  }

  const LoveComponent = ({ item }) => {
    const [postlikedata, setpostlikedata] = useState({})
    const[refress,setRefress]=useState("")
    const fetchLikeData = async () => {
      // setpostlikedata(id)
      const response = await apiUrl.get(`/api/userlikes/userlike/?like_id=${item}&user_id=${login_id}`)

      if (response) {
        setpostlikedata(response.data)

        // setLodershow(false)
      }

    };

    useEffect(() => {
      fetchLikeData()
    }, [refress])
   
    const handleLove = (id) => {
      setArry(arry.map(item => {
        if (item.id === id) {
          return { ...item, love: !item.love, love2: false }
        };
        return item;
      }))

    }
    // const handleLove2 = (id) => {
    //   setArry(arry.map(item => {
    //     if (item.id === id) {
    //       return { ...item, love2: !item.love2, love: false }
    //     };
    //     return item;
    //   }))
    // }

    const handleLove2 = async (position) => {
      const json = JSON.stringify({
        user_id: login_id,
        like_id: item,
        image_position: position
      })
      try {
        let response = await apiUrl.post('/api/userlikes/like', json)
        if (response.status===200) { 
          setRefress(new Date().getMilliseconds())
        }
      } catch (err) {
        console.log(err)
      }
    }
    return (
      <div>
        <div class="rrrrr">
          {/* <div class="comment-icon mri">&#x2764;</div> */}
          {/* <div class="comment-icon mri">&#x2709;</div> */}

          <div class="image-container comment-icon" onClick={() => handleLove2(item.id,1)}>
            <FontAwesomeIcon icon={faHeart} className={`commentimg mri ${postlikedata.user_like ? "likecolor" : "likedisable"}`} />
            {/* <div class="number-overlay">42</div> */}
            <span>{postlikedata.user_like ? postlikedata.num_like : ""}</span>
          </div>

          <div class="image-container comment-icon" onClick={handleComment}>
            <FontAwesomeIcon icon={faMessage} className="commentimg mri" />
            {/* <div class="number-overlay">42</div> */}
            <span>455</span>
          </div>
          {/* <div class="comment-icon mri">&#x2764;</div> */}
          <div class="image-container comment-icon" onClick={() => handleLove2(item.id,2)}>
            <FontAwesomeIcon icon={faHeart} className={`commentimg mri ${postlikedata.user_like2 ? "likecolor" : "likedisable"}`} />
            {/* <div class="number-overlay">42</div> */}
            <span>{postlikedata.user_like2 ? postlikedata.num_like2 : ""}</span>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div>

      {isLoading ? (
        <CardLoaderSkleton />
      ) : (
        <>
          <div>
            {postdata.map((item) => (
              <>
                <div class="main-card">
                  <div className="user-row">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User Image" />
                    <div className='inform'>
                      <span className="user-name tittle">{item.post_des}</span>
                    </div>
                  </div>
                  <div className='inform'>
                    <span >{item.username} . {item.post_time}</span>
                  </div>
                  {/* <div class="user-info">
    <img src="https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png" alt="User Image"/>
    <span class="user-name">{item.username} . {item.post_time}</span>
  </div> */}
                  <div class="share-icon" onClick={handleShareClick}>&#x2197;</div>
                  <div class="image-cards-container">
                    <div class="image-card">
                      {!imageLoaded && <p>Loading image...</p>}
                      <img
                        src={getImageUrl(item.image1_id)}
                        id={item.image2}
                        alt="User Post"
                        style={{ display: imageLoaded ? "block" : "none" }}
                        onLoad={handleImageLoad} />
                      {/* <div class="love-icon">&#x2764;</div> */}
                    </div>
                    <div class="image-card">
                      {!imageLoaded2 && <p>Loading image...</p>}
                      <img
                        src={getImageUrl(item.image2_id)}
                        alt="User Post2"
                        style={{ display: imageLoaded2 ? "block" : "none" }}
                        onLoad={handleImageLoad2} />
                      {/* <div class="love-icon">&#x2764;</div> */}
                    </div>
                  </div>
                  <LoveComponent item={item.post_id} />
                </div>
                <br />
              </>
            ))}
          </div>
          {lodershow && <div><Loder /></div>}
          {!hasMore && <p>No more data to fetch.</p>}
        </>
      )}

    </div>
  )
}