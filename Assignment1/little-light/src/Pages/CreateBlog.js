import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import './CreateBlog.css';
import axios from 'axios'; // Make sure to install axios if you use this: `npm install axios`

function CreateBlog({ history }) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!title || !content) {
            alert("Please fill in all fields");
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) {
            formData.append('image', image);
        }

        setLoading(true);
        try {
            await axios.post('/api/blogs', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Blog posted successfully!');
            setTitle('');
            setContent('');
            setImage(null);
            setLoading(false);
            history.push('/blogs'); // Redirect to the blog list or home page
        } catch (error) {
            console.error('Error publishing blog:', error);
            alert('Failed to publish the blog');
            setLoading(false);
        }
    };

    const handleImageChange = (e) => {
        setImage(e.target.files[0]);
    };

    const handleCancel = () => {
        // Optionally reset state or navigate away
        setTitle('');
        setContent('');
        setImage(null);
    };

    return (
        <div>
            <Navbar />
            <div className="container create-blog-container">
                <h1>Create a New Blog Post</h1>
                <form onSubmit={handleSubmit} className="create-blog-form">
                    <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} />
                    <textarea placeholder="Tell your story..." value={content} onChange={(e) => setContent(e.target.value)}></textarea>
                    <label className="file-input">
                        <input type="file" onChange={handleImageChange} />
                        {image ? image.name : "Choose an image"}
                    </label>
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button type="button" className="cancel" onClick={handleCancel}>Cancel</button>
                        <button type="submit" disabled={loading}>{loading ? 'Publishing...' : 'Publish'}</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default CreateBlog;
