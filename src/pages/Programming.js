import axios from 'axios';
import { useEffect, useState } from 'react';
import '../App.css';
import NewsCard from '../components/NewsCard';
import SearchInput from '../components/SearchInput';

const Programming = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=programming&api-key=${process.env.REACT_APP_NYT_API_KEY}`)
      .then((response) => {
        setNews(response.data.response.docs);
        setLoading(false);
      })
      .catch(() => {
        setError('Error fetching news!');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading...</div>;
  if (error) return <div className="error">{error}</div>;

  return (
    <div className="news-container">
      <h1>Berita Programming</h1>
      <SearchInput />
      <div className="news-cards">
        {news.map((article) => (
          <NewsCard key={article._id} article={article} />
        ))}
      </div>
    </div>
  );
};

export default Programming;
