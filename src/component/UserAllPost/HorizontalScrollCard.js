import React,{useState,useEffect} from 'react';
import './HorizontalScrollCard.css'; // Import the CSS file for styling
import redflag from "../../Image/redflag.jpeg"
import whiteflag from "../../Image/whiteflage.jpeg"
import '@fortawesome/fontawesome-free/css/all.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faFlag} from '@fortawesome/free-solid-svg-icons';
const cardData = [
 
  // Add more card data as needed
];


const HorizontalScrollCard = () => {
  const [cardData,setcardData]=useState([
    {
      id: 1,
      title: 'Card 1',
      content: 'Card 1 content goes here...',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', 
      imageUrl2: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', 
      status:false
    },
    {
      id: 2,
      title: 'Card 2',
      content: 'Card 2 content goes here...',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', // Replace with your image URL
      status:true
    },
    {
      id: 3,
      title: 'Card 3',
      content: 'Card 3 content goes here...',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png', // Replace with your image URL
      status:false
    },
  ])
  // const[flagview,setFlagview]=useState(false)
const handleFlage=(id)=>{
  // setFlagview(!flagview)
  setcardData(cardData.map(item => {
    if (item.id === id) {
      return { ...item, status: !item.status}
    };
    return item;
  }))
}


  return (
    <div className="horizontal-scroll-container">
      {cardData.map((card) => (
        <div key={card.id} className="card">
          <img src={card.imageUrl} alt={card.title} />
          <img src={card.imageUrl2} alt={card.title} />
          {/* <h2>{card.title}</h2> */}
          <div>{!card.status ?<FontAwesomeIcon icon={faFlag} style={{height:"20px",width:"20px"}} className="mri" onClick={()=>handleFlage(card.id)}/>: <FontAwesomeIcon icon={faFlag} style={{height:"20px",width:"20px",color:"red"}} className="mri" onClick={()=>handleFlage(card.id)}/>}</div>
        {!card.status &&<p>Post for permanent click the flag</p>}  
          <h3 style={{wordWrap:"break-word"}}>ghfiudhgijfjhkgfnhkjgfhnkjgnjngkfhnkgfn</h3>
        </div>
      ))}
    </div>
  );
};

export default HorizontalScrollCard;
