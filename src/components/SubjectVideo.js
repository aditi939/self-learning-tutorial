// SubjectVideo.js
import React from 'react';
// import './SubjectVideo.css'; // Import your CSS file for styling

const SubjectVideo = ({ selectedSubject }) => {
  // Define video URLs for each subject
  const videoURLs = {
    React: 'https://www.youtube.com/watch?v=gY5sGvq-8h8&t=47s',
    Angular: 'https://www.youtube.com/watch?v=EHTWMpD6S_0&t=7200s',
    // Add video URLs for other subjects
  };

  return (
    <div className="subject-video">
      <h2>Learn from Videos</h2>
      {selectedSubject && videoURLs[selectedSubject] ? (
        <div>
          <h3>{selectedSubject}</h3>
          <div className="video-container">
            {/* Embed the video using an iframe */}
            <iframe
              title={selectedSubject}
              width="560"
              height="315"
              src={videoURLs[selectedSubject]}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      ) : (
        <p>No videos available for {selectedSubject}.</p>
      )}
      {!selectedSubject && <p>Select a subject to view videos.</p>}
    </div>
  );
};

export default SubjectVideo;
