import React from 'react'
import '../styles/places.css'
import temple from '../assets/kudroli.jpg'
const Places = ({ img }) => {
  return (
    <div className='frame'>
      <div>
        <h3>Top attractive places</h3>
      </div>
    <div className='places_frame'>
    <div className='place_card_1'>
        <div className='place_content'>
            <h2>Mangalore</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae! Soluta quas veritatis libero expedita illum, aperiam consequatur natus tempora?</p>
        </div>
    </div>
     <div className='place_card_2'>
     <div className='place_content'>
         <h2>Mangalore</h2>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae! Soluta quas veritatis libero expedita illum, aperiam consequatur natus tempora?</p>
     </div>
 </div>
  <div className='place_card_3'>
  <div className='place_content'>
      <h2>Mangalore</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, repudiandae! Soluta quas veritatis libero expedita illum, aperiam consequatur natus tempora?</p>
  </div>
</div>
    </div>
    </div>
  )
}

export default Places