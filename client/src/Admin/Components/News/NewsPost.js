import React, { useRef, useState } from 'react';
import "./NewsPost.css";
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { newsCollectionRef, storage } from '../../../Firebase';
import { addDoc } from 'firebase/firestore';

const NewsPost = () => {
  const fileInputRef = useRef(null);
  const [image, setImage] = useState(null);
  const [topic, setTopic] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleImageClicks = () => {
    fileInputRef.current.click();
  };


const handleFileChanges = (e) => {
  const file = e.target.files[0];
  if (file) {
    setImage(file); // Update state with selected file
    const reader = new FileReader();
    reader.onload = (e) => {
      setImagePreview(e.target.result); // Update imagePreview state
    };
    reader.readAsDataURL(file);
  }
};


  const handleSubmitPost = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    let imageUrl = '';
    if (image) {
      try {
        const imageRef = ref(storage, `news/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
        console.log('Image URL:', imageUrl); // Log URL for debugging
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  
    try {
      await addDoc(newsCollectionRef, {
        topic,
        message,
        imageUrl,
        timestamp: new Date()
      });
    } catch (error) {
      console.error('Error adding document:', error);
    }
  
    setLoading(false);
  
    // Clear form
    setImage(null);
    setTopic('');
    setMessage('');
    setImagePreview('');
  };
  

  return (
    <div className='NewsPostContainer'>
      <h2>Post article</h2>
      <form onSubmit={handleSubmitPost}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChanges}
          style={{ display: 'none' }}
        />
        <p onClick={handleImageClicks}>Add Image</p>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: '60%', borderRadius: '5px' }}
            />
          )}
        <input
          type="text"
          placeholder="News Topic"
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
        />
        <textarea
          cols="30"
          rows="10"
          placeholder="News message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default NewsPost;
