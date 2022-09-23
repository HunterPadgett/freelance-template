import React from 'react'
import profpic from '../../assets/Profile.jpg'

const Attorneys = () => {
  return (
    <div className='container'>
<h1>Attorneys</h1>

<div className='container columns col-3'>
  <div>
  <img 
 className='profpic ' src={profpic}/>
  <h2>Ben Dover</h2>
  
  <p>Senior Partner</p>
  </div>
  <div>
  <img 
 className='profpic ' src={profpic}/>
  <h2>Ben Dover</h2>
  <hr/>
  <p>Senior Partner</p>
  </div>
</div>
      </div>
  )
}

export default Attorneys