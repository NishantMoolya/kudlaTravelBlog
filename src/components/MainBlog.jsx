import React from 'react'
import Blog from './Blog'

const MainBlog = () => {
  return (
    <div>
        {
            Array(0).fill(0).map((ele,ind) => (<Blog key={ind} />))
        }
    </div>
  )
}

export default MainBlog