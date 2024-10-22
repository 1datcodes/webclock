import React from 'react';

const MediaDisplay = ({ media }) => {
    if (!media) {
        return null;
    }

    return (
        <div className="fullscreen">
            {media.type.startsWith('image') ? (
                <img src={media.src} alt = "Wallpaper" />
            ) : (
                <video src={media.src} controls autoPlay loop muted />
            )}
        </div>
    );
};

export default MediaDisplay;