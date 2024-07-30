import React, { useEffect, useState } from 'react';
import { newsCollectionRef } from "../../Firebase";
import { getDocs } from "firebase/firestore";
import { useModal } from '../../context/ModalContext';
import "./Text.css"

const testimonies = [
  {
    name: "John Doe",
    description: "This is an amazing service!",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "John Doe",
    description: "This is an amazing service!",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "John Doe",
    description: "This is an amazing service!",
    image: "https://via.placeholder.com/150"
  },
  // Add other testimonies...
];

const truncateMessage = (message, maxWords, maxLength) => {
  const words = message.split(' ');
  if (words.length > maxWords) {
    return words.slice(0, maxWords).join(' ') + '...';
  }
  if (message.length > maxLength) {
    return message.slice(0, maxLength) + '...';
  }
  return message;
};

const Test = () => {
  const [news, setNews] = useState([]);
  const [showMore, setShowMore] = useState(false); // State for show more news
  const [currentTestimony, setCurrentTestimony] = useState(0);
  const { openModal } = useModal();

  useEffect(() => {
    const fetchNews = async () => {
      const querySnapshot = await getDocs(newsCollectionRef);
      const newsList = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setNews(newsList);
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 5000); // Changed interval for smoother rotation

    return () => clearInterval(interval);
  }, []);

  const handleNewsClick = (newsItem) => {
    console.log('Opening modal with:', newsItem); // Debug log
    openModal(newsItem); // Pass the news item to the modal context
  };

  const toggleShowMore = () => {
    setShowMore(!showMore);
  };

  return (
    <div className='TextWrapper'>
      <div className='ArticleContainer'>
        {news.slice(0, showMore ? news.length : 4).map((item) => ( // Display only 4 items initially or all if showMore is true
          <div key={item.id} onClick={() => handleNewsClick(item)} style={{ cursor: 'pointer' }} className='box'>
            {item.imageUrl && <img src={item.imageUrl} alt="News"  />}
            <div>
              <h3>{item.topic}</h3>
              <p>{truncateMessage(item.message, 15, 100)}</p>
            </div>
          </div>
        ))}
        {!showMore && news.length > 4 && ( // Show "Show more" button if there are more than 4 items
          <button style={{
            width: "200px",
            height: "40px",
            
          }}  onClick={toggleShowMore}>Show more</button>
        )}
        {showMore && ( // Show "Show less" button if showMore is true
          <button style={{
            width: "200px",
            height: "40px",

          }} onClick={toggleShowMore}>Show less</button>
        )}
      </div>
      <div className='testWrapper'>
        <div >
          {testimonies.map((testimony, index) => (
            <div key={index} style={{ transform: `translateX(-${currentTestimony * 100}%)` }}>
              <img src={testimony.image} alt="Testimony" />
              <div className="testimonial-content">
                <h2>Testimonials</h2>
                <h3>{testimony.name}</h3>
                <p>{testimony.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
