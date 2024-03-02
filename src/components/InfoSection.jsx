import React from 'react'
import '../styles/infosection.css'
import beach from '../assets/beach1.jpg'
import hotel from '../assets/hotel.jpg'
import sport from '../assets/kambala.jpeg'
import fest from '../assets/j4.jpeg'
import cult from '../assets/j1.jpeg'

const InfoSection = () => {
  return (
    <div className='info_frame'>
        <div className='sections'>
            <div className='firstdiv'>
                <h3>Festivals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae doloribus vel voluptates sapiente soluta excepturi doloremque, ducimus quam sit beatae modi distinctio voluptatem aliquam vero, facilis commodi omnis in necessitatibus corrupti esse. Accusantium repudiandae, ex commodi, quaerat, dicta incidunt corporis laborum soluta alias quas itaque nesciunt reprehenderit dolorem hic?</p>
            </div>
            <div>
                <img className='img' src={fest} alt='' />
            </div>
        </div>
        <div className='sections'>
            <div>
                <img className='img' src={beach} alt='' />
            </div>
            <div className='firstdiv'>
                <h3>Seasons</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae doloribus vel voluptates sapiente soluta excepturi doloremque, ducimus quam sit beatae modi distinctio voluptatem aliquam vero, facilis commodi omnis in necessitatibus corrupti esse. Accusantium repudiandae, ex commodi, quaerat, dicta incidunt corporis laborum soluta alias quas itaque nesciunt reprehenderit dolorem hic?</p>
            </div>
        </div>
        <div className='sections'>
            <div className='firstdiv'>
                <h3>Culture</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae doloribus vel voluptates sapiente soluta excepturi doloremque, ducimus quam sit beatae modi distinctio voluptatem aliquam vero, facilis commodi omnis in necessitatibus corrupti esse. Accusantium repudiandae, ex commodi, quaerat, dicta incidunt corporis laborum soluta alias quas itaque nesciunt reprehenderit dolorem hic?</p>
            </div>
            <div>
                <img className='img' src={cult} alt='' />
            </div>
        </div>
        <div className='sections'>
            <div>
                <img className='img' src={hotel} alt='' />
            </div>
            <div className='firstdiv'>
                <h3>Hotels</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae doloribus vel voluptates sapiente soluta excepturi doloremque, ducimus quam sit beatae modi distinctio voluptatem aliquam vero, facilis commodi omnis in necessitatibus corrupti esse. Accusantium repudiandae, ex commodi, quaerat, dicta incidunt corporis laborum soluta alias quas itaque nesciunt reprehenderit dolorem hic?</p>
            </div>
        </div>
        <div className='sections'>
            <div className='firstdiv'>
                <h3>Sports</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae doloribus vel voluptates sapiente soluta excepturi doloremque, ducimus quam sit beatae modi distinctio voluptatem aliquam vero, facilis commodi omnis in necessitatibus corrupti esse. Accusantium repudiandae, ex commodi, quaerat, dicta incidunt corporis laborum soluta alias quas itaque nesciunt reprehenderit dolorem hic?</p>
            </div>
            <div>
                <img className='img' src={sport} alt='' />
            </div>
        </div>
    </div>
  )
}

export default InfoSection