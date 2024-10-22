import React, { useState } from 'react';

const Upload = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                onUpload(reader.result, file.type);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="file" accept="image/*, video/*" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default Upload;