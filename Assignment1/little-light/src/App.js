import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BlogHome from './Pages/BlogHome';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/blogs" element={<BlogHome />} />
        {/* Add other routes */}
      </Routes>
    </Router>
  );
}

export default App;
