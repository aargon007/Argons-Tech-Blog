import React from 'react';
import BlogContainer from './components/BlogContainer';
import Header from './components/Header';

const App = () => {
  return (
    <div className='mt-5 px-28'>
      <Header></Header>
      <BlogContainer></BlogContainer>
    </div>
  );
};

export default App;