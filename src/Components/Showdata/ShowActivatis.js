import React from 'react';
import './ShowActivatis.css'


const ShowActivatis = (props) => {
      
     const {activatis,handletime} = props
     const {breaks,time,picture,name,about} = activatis
               
    

     return (
          <div className='card-section'>     
                    <div className='card-img-section'>
                         <img src={picture} alt="" />
                    </div>
                    <div className='card-text'>
                         <h4>{name}</h4>
                         <p>{about.slice(0,80)}</p>
                         <div className='tyming'>
                         <h6>break time: {breaks}m</h6>
                         <h6>Time required: {time}h</h6>
                         </div>
                         <button onClick={()=>handletime(time)} className='selected-btn'>Selected</button>
                    </div>
          </div>
     );
};

export default ShowActivatis;