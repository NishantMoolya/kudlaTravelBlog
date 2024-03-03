import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import '../styles/herosection.css'
import Search from './Search'

const HeroSection = () => {
  const [counter, setCounter] = useState({
    places:0,
    festivals:0,
    foods:0
  });
  const counterData = {
    places:30,
    festivals:20,
    foods:35
  }
  const rate = 1;
  const incrementCounter = (num,type) => {
    let interval = 0;
    if(counter[type] < num){
      interval = setInterval(() => {
        setCounter(prev => ({...prev,[type]:prev[type]+rate}));
      },50);
      return interval;
  }
  }
  useEffect(() => {
    let interval = incrementCounter(counterData.places,'places');
      return () => {
        clearInterval(interval);
      }
  });
  useEffect(() => {
    let interval = incrementCounter(counterData.festivals,'festivals');
    return () => {
        clearInterval(interval);
      }
  });
  useEffect(() => {
    let interval = incrementCounter(counterData.foods,'foods');
    return () => {
        clearInterval(interval);
      }
  });
  return (
    <div className='hero_frame'>
        <h2>Namma kudla</h2>
        <h4>Explore. Experience. Enrich.</h4>
        <button className='explore_btn'>Explore</button>
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
    </div>
  )
}

export default HeroSection