import React from 'react';
import BlogContainer from './components/BlogContainer';
import Header from './components/Header';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import HWBlog from './components/HWBlog';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const App = () => {
  return (
    <div className='mt-5 md:px-16 lg:px-28 px-5 mb-10 font-inter'>
      <Header></Header>
      <BlogContainer></BlogContainer>
      <HWBlog></HWBlog>
      <a href="#home" className="hidden md:block fixed z-90 bottom-8 right-8 border-0 px-5 py-3 rounded-full drop-shadow-md bg-indigo-500 text-white text-3xl font-bold"><FontAwesomeIcon icon={faArrowUp}></FontAwesomeIcon></a>
      <ToastContainer></ToastContainer>
    </div>
  );
};

export default App;