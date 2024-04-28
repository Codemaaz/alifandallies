import React from 'react'
import Home1 from "./Home1"
import Home2 from "./Home2"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const Home = () => {
  return (
<>
<div className="">
<Carousel autoPlay={true} infiniteLoop interval={4000} >
        <div className='text-start' id="home ">
          <Home1/>
        </div>
        <div className='text-start'>
          <Home2/>
        </div>
        </Carousel>
</div>
</>  )
}

export default Home