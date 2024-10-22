import React, { useState, useEffect } from 'react';
import Upload from './components/Upload';
import MediaDisplay from './components/MediaDisplay';
import './App.css';

function App() {
  const [media, setMedia] = useState(null);
  const [recentUploads, setRecentUploads] = useState([]);

  useEffect(() => {
    const storedMedia = JSON.parse(localStorage.getItem('media'));
    const storedRecentUploads = JSON.parse(localStorage.getItem('recentUploads')) || [];
    if (storedMedia) {
      setMedia(storedMedia);
    }
    setRecentUploads(storedRecentUploads);
  }, []);

  const handleUpload = (src, type) => {
    const newMedia = { src, type };
    setMedia(newMedia);
    localStorage.setItem('media', JSON.stringify(newMedia));

    const newRecentUploads = [newMedia, ...recentUploads].slice(0, 5);
    setRecentUploads(newRecentUploads);
    localStorage.setItem('recentUploads', JSON.stringify(newRecentUploads));
  };

  return (
    <div className="App">
      <Upload onUpload={handleUpload} />
      <MediaDisplay media={media} />
      <div className="recent-uploads">
        <h2>Recent Uploads</h2>
        {recentUploads.map((item, index) => (
          <div key={index} onClick={() => setMedia(item)}>
            {item.type.startswith('image') ? (
              <img src={item.src} alt={`Recent ${index}`} />
            ) : (
              <video src={item.src} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
