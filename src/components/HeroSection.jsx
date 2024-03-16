import { Button, Divider, Typography } from '@mui/material'
import React, { useEffect, useLayoutEffect, useState } from 'react'
import '../styles/herosection.css'
import Search from './Search'
import beach1 from "../assets/beach1.jpg"
import hotel from '../assets/hotel.jpg'
import beach2 from '../assets/Panambur-Beach.jpg'
import temple from '../assets/j4.jpeg'
import { imageFader } from '../helpers/imageFader'


const HeroSection = () => {
  const [screenwidth,setScreenwidth] = useState(false);
  const [imageCounter, setImageCounter] = useState(0);
  useLayoutEffect(() => {
    setScreenwidth(window.screen.availWidth < 500);
  },[]);
  let imageList = [beach1,hotel,beach2,temple];
  useEffect(() => {
    let intervalId = setInterval(() => setImageCounter(imageFader(imageList.length,imageCounter)),5000);
    console.log(imageCounter);
    return () => clearInterval(intervalId);
  },[imageCounter]);
  return (
    <>
    <div className='hero_frame' style={{backgroundImage:`url(${imageList[imageCounter]})`}}>
      <div className='hero_content_holder'>
      <div className='hero_image'>
        <img src={imageList[imageCounter]} alt="" loading='lazy' />
      </div>
      <div className='hero_content'>
      <div className='hero_intro_content'>
      <h2>Namma <span>kudla</span></h2>
      <h4>Explore. Experience. Enrich.</h4>
      <a className='explore_btn' href='#explore'>Explore</a>
      </div>
      {!screenwidth?<Banner />:null}
      </div>
      </div>
      {screenwidth?<Banner />:null}
      </div>
    </> 
  )
}

const Banner = () => {
  const [counter, setCounter] = useState({
    places: 0,
    festivals: 0,
    foods: 0
  });
  const counterData = {
    places: 30,
    festivals: 20,
    foods: 35
  }
  const rate = 1;
  const incrementCounter = (num, type) => {
    let interval = 0;
    if (counter[type] < num) {
      interval = setInterval(() => {
        setCounter(prev => ({ ...prev, [type]: prev[type] + rate }));
      }, 50);
      return interval;
    }
  }
  useEffect(() => {
    let interval = incrementCounter(counterData.places, 'places');
    return () => {
      clearInterval(interval);
    }
  });
  useEffect(() => {
    let interval = incrementCounter(counterData.festivals, 'festivals');
    return () => {
      clearInterval(interval);
    }
  });
  useEffect(() => {
    let interval = incrementCounter(counterData.foods, 'foods');
    return () => {
      clearInterval(interval);
    }
  });
  return (
    <div className='banner'>
        <div className='count_divisons' id='right_border'>
          <h4><span>{counter.places}</span>+</h4>
          <h5>places</h5>
        </div>
        <div className='count_divisons' id='right_border'>
          <h4><span>{counter.festivals}</span>+</h4>
          <h5>Festivals</h5>
        </div>
        <div className='count_divisons'>
          <h4><span>{counter.foods}</span>+</h4>
          <h5>Foods</h5>
        </div>
      </div>
  )
}

export default HeroSection