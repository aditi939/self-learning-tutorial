// Article.js
import React from 'react';
import articleData from './ArticleData';
import './Article.css'; // Import your CSS file for styling

const Article = ({ selectedSubject }) => {
  const getArticleData = (subject) => {
    return articleData[subject] || [];
  };

  const articles = getArticleData(selectedSubject);

  return (
    <div>
      <h2>Learn from Articles</h2>
      {selectedSubject ? (
        articles.length > 0 ? (
          <div className="article-card-container">
            {articles.map((article) => (
              <div key={article.id} className="article-card">
                <h3>{article.heading}</h3>
                <img src={article.imgsrc} alt={article.heading} />
                <p>{article.description}</p>
                <p>
                  <a href={article.links} target="_blank" rel="noopener noreferrer">
                    Read PDF
                  </a>
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>No articles available for {selectedSubject}.</p>
        )
      ) : (
        <p>Select a subject to view articles.</p>
      )}
    </div>
  );
};

export default Article;
