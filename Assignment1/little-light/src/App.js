// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogHome from './Pages/BlogHome';
import BlogView from './Pages/BlogView'; 
import CreateBlog from './Pages/CreateBlog'; 
import UpdateBlog from './Pages/UpdateBlog';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blogs" element={<BlogHome />} />
        <Route path="/blogs/:id" element={<BlogView />} /> 
        <Route path="/create-blog" element={<CreateBlog />} />
        <Route path="/blogs/:id/update" element={<UpdateBlog />} />
      </Routes>
    </Router>
  );
}

export default App;
