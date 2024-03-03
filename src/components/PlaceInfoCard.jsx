import React from 'react'
import '../styles/placeinfocard.css'
import { Fab, Tooltip } from '@mui/material'
import { LocationOn } from '@mui/icons-material'

const PlaceInfoCard = ({ place }) => {
  return (
    <div className='place_info_card_frame'>
        <div className='place_info_card_div_1'>
            <h2>{place.placeName}</h2>
            <div className='place_info_card_img_frame'>
            <div className='place_info_card_map_btn'>
                <Tooltip title='view in maps'>
                    <Fab size='small'>
                        <LocationOn />
                    </Fab>
                </Tooltip>
            </div>
            <img src={place.img} alt={`${place.placeName}'s image`} />
            </div>
            <div className='place_info_card_content'>
                <p>{place.placeContent}</p>
            </div>
        </div>
        <div className='place_info_card_div_2'>
            <ul>
                <li>Type : {place.metadata.type}</li>
                <li>Food : {place.metadata.food}</li>
                <li>Climate : {place.metadata.climate}</li>
                <li>Address : {place.metadata.add}</li>
            </ul>
        </div>
    </div>
  )
}

export default PlaceInfoCard