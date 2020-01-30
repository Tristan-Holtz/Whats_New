import React from 'react';
import './NewsArticle.css';

const NewsArticle = props => {
  return (
    <article className="news-card">
      <img className="news-img" src={props.img} alt={props.headline}></img>
      <h4>{props.headline}</h4>
      <p>{props.description}</p>
      <button className="article-link" value={props.url}>
        Link to article ->
      </button>
    </article>
  );
};

export default NewsArticle;
