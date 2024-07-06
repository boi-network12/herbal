import React, { useEffect, useState } from 'react';
import { Container, Grid, Card, CardContent, Typography, Box, Avatar } from '@mui/material';
import "./Text.css";

const testimonies = [
  {
    name: "John Doe",
    description: "This is an amazing service!",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Jane Smith",
    description: "I had a great experience!",
    image: "https://via.placeholder.com/150"
  },
  {
    name: "Alice Johnson",
    description: "Highly recommend to everyone!",
    image: "https://via.placeholder.com/150"
  },
];

const Test = () => {
  const [news, setNews] = useState([]);
  const [currentTestimony, setCurrentTestimony] = useState(0);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://newsapi.org/v2/everything?q=medical&from=2024-06-06&sortBy=publishedAt&apiKey=6442fdb0c04e4403b8f6709f7b734304'
        );
        const data = await response.json();
        const filteredNews = data.articles.slice(0, 4); // Only take the first 4 articles
        setNews(filteredNews);
      } catch (error) {
        console.error('Error fetching news:', error);
      }
    };

    fetchNews();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimony((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container className='testContainer'>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              News
            </Typography>
            {news.map((article, index) => (
              <Card key={index} className="newsCard">
                <CardContent>
                  <Typography variant="h6" className="newsTitle">{article.title}</Typography>
                  <Typography variant="body2" className="newsDescription">{article.description}</Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              Testimony
            </Typography>
            <Card className="testimonyCard">
              <CardContent>
                <Avatar alt={testimonies[currentTestimony].name} src={testimonies[currentTestimony].image} className="testimonyAvatar" />
                <Typography variant="h6" className="testimonyName">{testimonies[currentTestimony].name}</Typography>
                <Typography variant="body2" className="testimonyDescription">{testimonies[currentTestimony].description}</Typography>
              </CardContent>
            </Card>
            <Box display="flex" justifyContent="center" className="testimonyIndicators">
              {testimonies.map((_, index) => (
                <Box key={index} className={`indicator ${currentTestimony === index ? 'active' : ''}`} />
              ))}
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Test;
