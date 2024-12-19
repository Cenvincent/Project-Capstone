import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeArticle } from '../redux/SavedSlice';
import '../styles/Saved.css';

const Saved = () => {
  const savedNews = useSelector((state) => state.savedNews || []);
  const dispatch = useDispatch();

  const handleRemove = (article) => {
    dispatch(removeArticle(article));
  };

  return (
    <div className="saved-container">
      <h1>Saved News</h1>
      {savedNews.length === 0 ? (
        <p className="no-news-message">No saved news found. Start saving articles from other pages!</p>
      ) : (
        <div className="saved-card-list">
          {savedNews.map((article) => (
            <div key={article._id} className="saved-card">
              <h2>{article.headline.main}</h2>
              <p>{article.abstract}</p>
              <a
                href={article.web_url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-link"
              >
                Read more
              </a>
              <button onClick={() => handleRemove(article)} className="remove-btn">
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Saved;
