import React from 'react';
import BlogContainer from './components/BlogContainer';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HWBlog from './components/HWBlog';

const App = () => {
  return (
    <div className='mt-5 md:px-28 px-5 mb-10'>
      <Header></Header>
      <BlogContainer></BlogContainer>
      <HWBlog></HWBlog>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;