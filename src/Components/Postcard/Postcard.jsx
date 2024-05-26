import React from 'react'
import './Postcard.css'
import postimg from '../Assest/vector.png'


const Postcard = () => {
 
  return (
    <div className='postcard'>
        <img src={postimg} alt="" className='postcard-img'/>

        <div className='title'>
            <h1 id='heading'>Our Postcards</h1>
            <hr id='hr4'/>
            <p>Explore our unique collection of postcards and share a slice of your world with your neighbors. Let's bridge distances one postcard at a time. <br />Send a <b>smile,</b> share a story, and <b>strengthen</b> our community bonds. <br/> Pick your favorite, add a personal touch, and let the joy spread to every doorstep. Explore,<b>connect,</b>  cherish!</p>
        </div>
        
         <button className='button' >View Postcards</button> 
      

    </div>
  )
}

export default Postcard
