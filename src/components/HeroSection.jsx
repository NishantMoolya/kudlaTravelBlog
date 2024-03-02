import { Button, Typography } from '@mui/material'
import React from 'react'
import '../styles/herosection.css'
import Search from './Search'

const HeroSection = () => {
  return (
    <div className='hero_frame'>
        <h2>Namma kudla</h2>
        <h4>Explore. Experience. Enrich.</h4>
        <Button variant='contained'>Explore</Button>
        <Search width={50} />
    </div>
  )
}

export default HeroSection