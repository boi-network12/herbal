import React, { useRef, useState } from 'react'
import "./ProductPost.css"
import { productsCollectionRef, storage } from '../../../Firebase';
import { getDownloadURL, uploadBytes, ref } from 'firebase/storage';
import { addDoc } from 'firebase/firestore';

const ProductPost = () => {
  const fileInputRef = useRef(null)
  const [image, setImage] = useState(null);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [imagePreview, setImagePreview] = useState('');

  const handleImageClick = () => {
    fileInputRef.current.click()
  }

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file); // Update state with selected file
      const reader = new FileReader();
      reader.onload = (e) => {
        setImagePreview(e.target.result); // Update imagePreview state
      };
      reader.readAsDataURL(file);
    }
  }

  const handleSubmitPreview = async (e) => {
    e.preventDefault();
    setLoading(true);
  
    let imageUrl = '';
    if (image) {
      try {
        const imageRef = ref(storage, `products/${image.name}`);
        await uploadBytes(imageRef, image);
        imageUrl = await getDownloadURL(imageRef);
        console.log('Image URL:', imageUrl); // Log URL for debugging
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }
  
    try {
      await addDoc(productsCollectionRef, {
        name,
        price,
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
    setName('');
    setPrice('')
    setMessage('');
    setImagePreview('');
  };


  return (
    <div className='ProductPostContainer'>
      <h2>Post product</h2>
      <form onSubmit={handleSubmitPreview}>
      <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          style={{ display: 'none' }}
        />
        <p onClick={handleImageClick}>Add Image</p>

        {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              style={{ width: '60%', borderRadius: '5px' }}
            />
          )}

        <input 
            type="text" 
            placeholder="Product name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        <input 
            type="number" 
            placeholder="Product price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
        />
        <button  type="submit">
          {loading ? 'Loading...' : 'Submit'}
        </button>
      </form>
    </div>
  )
}

export default ProductPost