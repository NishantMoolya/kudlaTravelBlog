import React from 'react'
import '../styles/infosection.css'
import beach from '../assets/beach1.jpg'
import hotel from '../assets/hotel.jpg'
import sport from '../assets/kambala.jpeg'
import fest from '../assets/j4.jpeg'
import cult from '../assets/j1.jpeg'
import { motion } from 'framer-motion'
import { infoView, reveal } from '../animations/view'

const InfoSection = () => {
  return (
    <div className='info_frame'>
        <motion.div className='sections' initial={infoView.initial} whileInView={infoView.view} transition={infoView.trans}>
            <img className='img' src={fest} alt='' />
            <motion.div className='firstdiv' initial={reveal.initial} whileInView={reveal.view} transition={reveal.trans}>
                <h3>Festivals</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sapiente enim obcaecati ipsam totam perferendis!</p>    
            </motion.div>
        </motion.div>
        <motion.div className='sections reverse' initial={infoView.initial} whileInView={infoView.view} transition={infoView.trans}>
        <img className='img' src={beach} alt='' />
            <motion.div className='firstdiv' initial={reveal.initial} whileInView={reveal.view} transition={reveal.trans}>
                <h3>Seasons</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum nihil dicta reprehenderit quod saepe aperiam.</p>    
            </motion.div>
        </motion.div>
        <motion.div className='sections' initial={infoView.initial} whileInView={infoView.view} transition={infoView.trans} >
            <img className='img' src={cult} alt='' />
            <motion.div className='firstdiv' initial={reveal.initial} whileInView={reveal.view} transition={reveal.trans}>
                <h3>Culture</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit voluptates rem fugiat, debitis error quasi.</p> 
            </motion.div>
        </motion.div>
        <motion.div className='sections reverse' initial={infoView.initial} whileInView={infoView.view} transition={infoView.trans}>
            <img className='img' src={hotel} alt='' />
            <motion.div className='firstdiv' initial={reveal.initial} whileInView={reveal.view} transition={reveal.trans}>
                <h3>Food</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit, velit delectus debitis soluta ullam quos!</p>
            </motion.div>
        </motion.div>
        <motion.div className='sections' initial={infoView.initial} whileInView={infoView.view} transition={infoView.trans}>
            <img className='img' src={sport} alt='' />
            <motion.div className='firstdiv' initial={reveal.initial} whileInView={reveal.view} transition={reveal.trans}>
                <h3>Sports</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id iusto recusandae eligendi libero amet nemo.</p>    
            </motion.div>
        </motion.div>
    </div>
  )
}

export default InfoSection