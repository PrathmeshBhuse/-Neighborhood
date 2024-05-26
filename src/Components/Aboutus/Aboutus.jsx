import React from 'react'
import './Aboutus.css'
import aboutimg from '../Assest/aboutus.jpg'

const Aboutus = () => {
  return (
    <div className='aboutus'>
      <div className="image">
        <img src={aboutimg} alt="" className='about-img' />
      </div>
      <div className="text">
        <h2 id='head5'>  About Us </h2>
        <hr id='hr5'/>

        <p id='para5'><b>NeighborGood</b> is on a mission to provide the simplest platform for neighborhoods to form connections & community. We are going after this by creating an Al agent that acts as the highly-social extrovert neighbor who finds symbiotic activities for people to do <b>together.</b>

       <br />We offer users the ability to screen potential nearby connections and arrange shared <b>face-to-face activities.</b> Our team previously founded Foresight Institute, Persist Ventures, & Systemic Altruism. </p>

      </div>
      
    </div>
  )
}

export default Aboutus
