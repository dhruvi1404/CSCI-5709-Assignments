import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate, Link } from 'react-router-dom';
import './BlogView.css';

function BlogView() {
    let { id } = useParams();
    let navigate = useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);

    useEffect(() => {
        const closeDropdown = (event) => {
            if (!event.target.closest('.kebab-menu')) {
                setShowDropdown(false);
            }
        };

        document.addEventListener('click', closeDropdown);
        return () => document.removeEventListener('click', closeDropdown);
    }, []);

    const blogs = [
        { id: 1, title: "Tips for Helping Children Cope with Change", author: "Lynne Harley", imgSrc: '/images/image-1.jpg', content: "Full content of blog 1 here..." },
        { id: 2, title: "How to protect your mental health at work", author: "Nicole Chevrier", imgSrc: '/images/image-2.jpg', content: "Full content of blog 2 here..." },
        { id: 3, title: "When it’s time to hand in your notice to go in search of yourself", author: "Suzanne Westover", imgSrc: '/images/image-3.jpg', content: "Full content of blog 3 here..." }
    ];

    const blog = blogs.find(b => b.id === parseInt(id));

    const handleDelete = () => {
        console.log("Delete Blog", id);
        navigate('/blogs');
    };

    return (
        <div>
            <Navbar />
            <div className="blog-container">
                {blog ? (
                    <>
                        <div className="blog-header">
                            <h1>{blog.title}</h1>
                            <div className="kebab-menu" onClick={() => setShowDropdown(prev => !prev)}>
                                <div>⋮</div>
                                {showDropdown && (
                                    <div className="dropdown-menu">
                                        <Link to={`/blogs/${id}/update`} className="dropdown-item">Edit</Link>
                                        <div onClick={handleDelete} className="dropdown-item">Delete</div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <p>By {blog.author}</p>
                        <img src={blog.imgSrc} alt="Blog Cover" className="blog-image" />
                        <p className="blog-content">{blog.content}</p>
                    </>
                ) : (
                    <div className="alert alert-danger">Blog not found</div>
                )}
            </div>
        </div>
    );
}

export default BlogView;
