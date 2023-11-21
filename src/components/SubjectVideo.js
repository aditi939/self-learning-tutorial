// SubjectVideo.js
import React from 'react';
import YouTube from 'react-youtube';
import './SubjectVideo.css';
import videoIDs from './videoData'; // Import video data

const SubjectVideo = ({ selectedSubject }) => {
  return (
    <div className="subject-video">
      <h2>Learn from Videos</h2>
      {selectedSubject && videoIDs[selectedSubject] ? (
        <div>
          <h3>{selectedSubject}</h3>
          <div className="video-container">
            {videoIDs[selectedSubject].map((video) => (
              <YouTube key={video.id} videoId={video.video} opts={{ width: '400', height: '315' }} />
            ))}
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
