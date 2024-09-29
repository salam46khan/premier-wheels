import React from 'react';
import Hero from './Pages/Hero/Hero';
import About from './Pages/About/About';
import LocomotiveScroll from 'locomotive-scroll';

const locomotiveScroll = new LocomotiveScroll();


const App = () => {
  return (
    <div className='bg-GreenColor font-myText font-bold overflow-y-hidden'>
      <Hero></Hero>
      <About></About>
    </div>
  );
};

export default App;