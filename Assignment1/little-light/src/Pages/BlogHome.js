import React from 'react';
import BlogCard from '../components/BlogCard';
import CategoryButton from '../components/CategoryButton';
import Navbar from '../components/Navbar';

function BlogHome() {
  const categories = ["View all", "Category 1", "Category 2", "Category 3"];
  const blogPosts = [
    {  id: 1,title: "Tips for Helping Children Cope with Change", author: "Lynne Harley", description: "Navigating change and life transitions can bring fear, doubt, and anxiety.", imgSrc: '/images/image-1.jpg', date: "Nov 09, 2023" },
    {  id: 2,title: "How to protect your mental health at work", author: "Nicole Chevrier", description: "Work is such a big part of our lives. And stress is a part of life.", imgSrc: '/images/image-2.jpg', date: "Oct 26, 2023" },
    {  id: 3,title: "When it’s time to hand in your notice to go in search of yourself", author: "Suzanne Westover", description: "I was resigning, in the truest sense of the word.", imgSrc: '/images/image-3.jpg', date: "Oct 12, 2023" }
  ];

  return (
    <div>
      <Navbar />
      <div className="container mt-3">
        <div className="d-flex flex-wrap justify-content-center mb-4">
          {categories.map(category => <CategoryButton key={category} name={category} />)}
        </div>
        <div className="row g-4">
          {blogPosts.map((post, index) => (
            <div key={index} className="col-sm-12 col-md-6">
              <BlogCard {...post} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BlogHome;
