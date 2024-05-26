import React from 'react'
import homeimg from '../Assest/homeimg.png'
import './Info.css'
const Info = () => {
  return (
    <div className='info'>
        <div className='left'>
        <img src={homeimg} alt="" />
        </div>
        <div className="right">
            <h1 id='head3'>A Way For Neighbors to Connect</h1>
            <hr  id='hr3'/>
            <p>Neighborhood norms have evolved away from <b> spontaneous connections.</b> <br />

               Today we prefer to screen our contacts online before meeting in person. <br/> We screen work colleagues using <b> LinkedIn;</b> we screen activity participants on <b> Facebook;</b> we screen <b> romance candidates</b> using <b> online dating services.</b>

              <br/>What's needed now is an app that lets us share specific info that we select, with nearby neighbors that we also select-just as we can do now on Linkedin, but for our social lives with <b>  nearby neighbors.</b>

              <br />Al can suggest matches and activities, making connection even <b> easier. LLMs </b>enable semantic understanding of wants and needs, allowing the neighborhood connector - formerly the local extrovert - to instead be an <b> Al agent.</b> </p>
        </div>
      
    </div>
  )
}

export default Info
