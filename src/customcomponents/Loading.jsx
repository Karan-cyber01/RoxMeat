import React from 'react';

const Loading = ({ text = "Loading..." }) => {
  return (
    <div className="loading_container">
      <div className="loading_wrapper">
        <div className="loading_spinner_large"></div>
        <p className="loading_text">{text}</p>
      </div>
    </div>
  );
};

export const LoadingButton = ({ loading, children, onClick, className = "", ...props }) => {
  return (
    <button 
      className={`loading_btn ${className} ${loading ? 'loading' : ''}`}
      onClick={onClick}
      disabled={loading}
      {...props}
    >
      {loading ? (
        <>
          <div className="loading_spinner"></div>
          <span>Loading...</span>
        </>
      ) : (
        children
      )}
    </button>
  );
};

export const LoadingSkeleton = ({ count = 6 }) => {
  return (
    <div className="items_grid">
      {[...Array(count)].map((_, index) => (
        <div key={index} className="skeleton_card">
          <div className="skeleton_image"></div>
          <div className="skeleton_content">
            <div className="skeleton_line skeleton_title"></div>
            <div className="skeleton_line skeleton_price"></div>
            <div className="skeleton_line skeleton_button"></div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Loading;
