import React from 'react';
import './NewsContainer.css';
import NewsArticle from '../NewsArticle/NewsArticle.js';

const NewsContainer = props => {
  return (
    <section className="news-section">
      {props.currentPage.map(article => (
        <NewsArticle
          url={article.url}
          headline={article.headline}
          img={article.img}
          description={article.description}
        />
      ))}
    </section>
  );
};

export default NewsContainer;
