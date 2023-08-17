import React, { useState,useEffect } from 'react';
import './LogoutModal.css'; // Make sure to create this CSS file

function LogoutModal({Logoutshow,setLogoutshow,setLogin_true}) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };
console.log(Logoutshow,"log",isModalOpen);
  const handleCloseModal = () => {
    setIsModalOpen(false);
  
  };
 
  useEffect(()=>{
    setIsModalOpen(Logoutshow)
  },[Logoutshow])

  useEffect(()=>{
    setLogoutshow(isModalOpen)
  },[isModalOpen])
  const handleLogout = () => {
    localStorage.removeItem('token');
    setLogin_true(false);
    handleCloseModal();
  };

  return (
    <div>
      {/* <button onClick={handleOpenModal}>Open Logout Modal</button> */}
      {isModalOpen && (
        <div className="modallogout" id="logout-modal">
          <div className="modal-contentlogout">
            <h2>Logout Confirmation</h2>
            <p>Are you sure you want to logout?</p>
            <button id="logout-button" onClick={handleLogout}>Logout</button>
            <button id="close-modal" onClick={handleCloseModal}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default LogoutModal;