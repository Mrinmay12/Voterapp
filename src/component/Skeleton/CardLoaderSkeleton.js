import React from 'react';
import './CardLoaderSkeleton.css'; // Import the CSS file for styling

const CardLoaderSkeleton = () => {
  return (
    <>
    <div className="card-loader-skeleton">
        <div className="skeleton-description"></div>
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
      </div>
    </div>
    <div className="card-loader-skeleton">
        <div className="skeleton-description"></div>
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
      </div>
    </div>
    <div className="card-loader-skeleton">
        <div className="skeleton-description"></div>
      <div className="skeleton-image"></div>
      <div className="skeleton-content">
        <div className="skeleton-title"></div>
      </div>
    </div>
    </>
  );
};

export default CardLoaderSkeleton;
