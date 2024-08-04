import React from 'react';
import Home from './component/Home';
import parallaxImg from "./assets/parallax2.jpg";
import SimpleParallax from "simple-parallax-js";

import './App.css';

function App() {
  return (
    <>
      <div className="relative">
        <SimpleParallax>
          <img 
            src={parallaxImg} 
            alt="image" 
            className='parallax2 absolute top-0 left-0 w-full md:h-[80%] lg:h-full  h-[80%] object-cover' 
          />
        </SimpleParallax>

        <div className=" hero relative z-10"> 
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;