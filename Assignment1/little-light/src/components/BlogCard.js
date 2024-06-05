import React from 'react';
import "./BlogCard.css";

function BlogCard({ title, author, description, imgSrc, date }) {
  return (
    <div className="card mb-4 shadow-sm">
      <img src={imgSrc} className="card-img-top" alt={title} />
      <div className="card-body">
        <div className="card-date">{date}</div>
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <a href="index.html" className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default BlogCard;
