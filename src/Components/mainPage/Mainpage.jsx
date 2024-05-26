import React from 'react'
import './Mainpage.css'
// import mainimg from '../Assest/Mainimg.png'
import topimg from '../Assest/topimg.jpg'

const Mainpage = () => {
  return (
    <div className='mainpage'>
      <img src={topimg} alt="" className='mainimg'/>

      <div className="text">
        <h1 id="heading">Neighborgood</h1>
        <hr id='hr1' />
        <p id='para1'>NeighborGood is on a mission to provide the simplest platform for neighborhoods to form connections & community.<br/> We are going after this by creating an AI agent that acts as the highly-social extrovert neighbor <br /> who finds symbiotic activities for people to do together.</p>
      </div>
      <button className='button1'>Get Started</button>
    </div>
  )
}

export default Mainpage
