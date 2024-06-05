import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import { useParams, useNavigate } from 'react-router-dom';
import './UpdateBlog.css';  // Assuming CSS is placed in styles directory

function UpdateBlog() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [blog, setBlog] = useState({ title: '', content: '', imgSrc: '' });

    // Static blogs data
    const blogsData = {
        '1': { title: "Tips for Helping Children Cope with Change", content: "Full content of blog 1 here...", imgSrc: '/images/image-1.jpg' },
        '2': { title: "How to protect your mental health at work", content: "Full content of blog 2 here...", imgSrc: '/images/image-2.jpg' },
        '3': { title: "When it’s time to hand in your notice to go in search of yourself", content: "Full content of blog 3 here...", imgSrc: '/images/image-3.jpg' }
    };

    useEffect(() => {
        // Simulate fetching data for the given blog ID
        setBlog(blogsData[id] || { title: '', content: '', imgSrc: '' });
    }, [id]);

    const handleUpdate = () => {
        console.log('Updated blog data:', blog);
        alert('Blog updated successfully!');
        navigate(`/blogs/${id}`);  // Redirect to view the updated blog
    };

    const handleCancel = () => {
        navigate(`/blogs/${id}`);  // Navigate back to the blog view
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setBlog({ ...blog, [name]: value });
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onloadend = () => {
            setBlog({ ...blog, imgSrc: reader.result });
        };
        reader.readAsDataURL(file);
    };

    return (
        <div>
            <Navbar />
            <div className="update-blog-container">
                <h1>Edit Blog</h1>
                <form onSubmit={(e) => e.preventDefault()}>
                    <label>Title:</label>
                    <input type="text" name="title" value={blog.title || ''} onChange={handleChange} />

                    <label>Content:</label>
                    <textarea name="content" value={blog.content || ''} onChange={handleChange} />

                    <label>Image:</label>
                    <input type="file" onChange={handleImageChange} />

                    <div className="form-buttons">
                        <button type="button" onClick={handleUpdate}>Save</button>
                        <button type="button" onClick={handleCancel}>Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UpdateBlog;
