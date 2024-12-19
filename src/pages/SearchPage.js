import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import NewsCard from '../components/NewsCard.js'; // Mengimpor NewsCard
import '../styles/SearchPage.css'; // Gunakan app.css

const SearchPage = () => {
  const { query } = useParams();
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Mendapatkan daftar artikel yang disimpan dari Redux
  const savedNews = useSelector((state) => state.savedNews || []);
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(
        `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=${process.env.REACT_APP_NYT_API_KEY}`
      )
      .then((response) => {
        setNews(response.data.response.docs);
        setLoading(false);
      })
      .catch((error) => {
        setError('Error fetching news!');
        setLoading(false);
      });
  }, [query]);

  if (loading) {
    return <div className="loading">Loading...</div>;
  }

  if (error) {
    return <div className="error">{error}</div>;
  }

  return (
    <div className="news-container">
      <h1>Search Results for "{query}"</h1>
      <div className="news-cards">
        {news.map((article) => (
          <NewsCard
            key={article._id}
            article={article}
            savedNews={savedNews}
            dispatch={dispatch} // Mengirimkan dispatch agar bisa mengelola saved articles
          />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
