import React, { useState } from 'react';

const DarkSoulCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const carouselItems = [
    { id: 1, bgColor: '#e1ecc8' },
    { id: 2, bgColor: '#FDCEDF' },
    { id: 3, bgColor: '#9BABB8' },
    { id: 4, bgColor: '#B2A4FF' },
    { id: 5, bgColor: '#93bfcf' },
    { id: 5, bgColor: '#93bfcf' },
    { id: 5, bgColor: '#93bfcf' },
    { id: 5, bgColor: '#93bfcf' },
    { id: 5, bgColor: '#93bfcf' },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="dark-soul-carousel">
      <div className="top-profile-section">
        {/* Add your top profile section content here */}
        <h1>John Doe</h1>
        <p>Frontend Developer</p>
      </div>

      <div className="darksoul-container" style={styles.container}>
        <div className="darksoul-cards-carousel" style={styles.carousel}>
          {carouselItems.map((item, index) => (
            <div
              key={item.id}
              id={`jscarousel-darksoul-cards-carousel-item-${item.id}`}
              style={{ ...styles.carouselItem, backgroundColor: item.bgColor }}
              className={index === currentIndex ? 'active' : ''}
            ></div>
          ))}
        </div>
        <div className="darksoul-cards-carousel-buttons" style={styles.buttons}>
          <button onClick={handlePrev} type="button" className="darksoul-btn-prev">
            {/* SVG code for the previous button */}
          </button>
          <button onClick={handleNext} type="button" className="darksoul-btn-next">
            {/* SVG code for the next button */}
          </button>
        </div>
      </div>

      <div className="responsive-cards-section" style={styles.responsiveCardsSection}>
        {/* Add your responsive card section content here */}
        <div className="responsive-card">
          <h2>Card 1</h2>
          <p>Card content goes here...</p>
        </div>
        <div className="responsive-card">
          <h2>Card 2</h2>
          <p>Card content goes here...</p>
        </div>
        {/* Add more cards as needed */}
      </div>
    </div>
  );
};

const styles = {
  container: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '1200px', // Set maximum width to keep it responsive
  },
  carousel: {
    width: '100%',
    height: '350px',
    backgroundColor: 'rgb(255, 255, 255)',
    margin: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  carouselItem: {
    margin: 'auto',
    marginLeft: '20px',
    minWidth: '150px',
    height: '250px',
    boxShadow: '1px 1px 10px rgb(189, 189, 189)',
    borderRadius: '20px',
    marginRight: '10px',
    position: 'relative',
  },
  buttons: {
    margin: 'auto',
  },
  responsiveCardsSection: {
    width: '100%',
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 350px)', // Adjust this value as needed to fit the card section within the available space
  },
};

export default DarkSoulCarousel;
