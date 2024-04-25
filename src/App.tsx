import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from '@/layouts/Header';
import Footer from '@/layouts/Footer';
import HomePage from '@/pages/HomePage';
import UsersPage from '@/pages/UsersPage';
import UserDetailsPage from '@/pages/UserDetailsPage';
import PostsPage from '@/pages/PostsPage';
import PostsDetailsPage from '@/pages/PostDetailsPage';
import CreatePostPage from '@/pages/CreatePostPage';
 

import './App.css';


function App() {
  return (
    <Router>
      <Header />
      <main className="container">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/users" element={<UsersPage />} />
          <Route path="/users/:userId" element={<UserDetailsPage />} />
          <Route path="/posts" element={<PostsPage />} />
          <Route path="/posts/:postId" element={<PostsDetailsPage />} />
          <Route path="/posts/new" element={<CreatePostPage />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
