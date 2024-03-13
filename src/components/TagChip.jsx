import React from 'react'
import '../styles/tagchip.css'

const TagChip = ({ name }) => {
  return (
    <span className='chip_frame'><p>{name}</p></span>
  )
}

export default TagChip