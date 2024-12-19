import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addArticle, removeArticle } from '../redux/SavedSlice';

const NewsCard = ({ article }) => {
  const savedNews = useSelector((state) => state.savedNews || []);
  const dispatch = useDispatch();

  const handleSave = () => {
    const isSaved = savedNews.find((savedArticle) => savedArticle._id === article._id);
    if (isSaved) {
      dispatch(removeArticle(article));
    } else {
      dispatch(addArticle(article));
    }
  };

  return (
    <div key={article._id} className="news-card">
      <h2>{article.headline.main}</h2>
      <p>{article.abstract}</p>
      <a href={article.web_url} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
      <button
        onClick={handleSave}
        className={`save-button ${savedNews.find((savedArticle) => savedArticle._id === article._id) ? 'unsave' : ''}`}
      >
        {savedNews.find((savedArticle) => savedArticle._id === article._id) ? 'Unsave' : 'Save'}
      </button>
    </div>
  );
};

export default NewsCard;
