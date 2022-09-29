import React from 'react';
import './ShowActivatis.css'


const ShowActivatis = (props) => {
      
     const {breaks,time,picture,name,about} = props.activatis
               
    

     return (
          <div className='card-section'>
               
               <div className='all-card-container'>
                    <div className='card-img-section'>
                         <img src={picture} alt="" />
                    </div>
                    <div className='card-text'>
                         <h4>{name}</h4>
                    </div>
               </div>
          </div>
     );
};

export default ShowActivatis;