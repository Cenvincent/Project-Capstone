import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import NewsCard from '../components/NewsCard';
import SearchInput from '../components/SearchInput';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=news&api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      .then((response) => {
        console.log(response.data); // Untuk melihat respons API
        setNews(response.data.response.docs);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err); // Menampilkan error jika ada
        setError('Error fetching news!');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="news-container">
      <h1>News</h1>
      <SearchInput />
      <div className="news-cards">
        {news.length === 0 ? (
          <div>No news available</div>
        ) : (
          news.map((article) => (
            <NewsCard key={article._id} article={article} />
          ))
        )}
      </div>
    </div>
  );
};

export default News;
