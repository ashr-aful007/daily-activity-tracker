import React, { useEffect, useState } from 'react';
import ShowActivatis from '../Showdata/ShowActivatis';

import './LoadData.css'


const LoadData = () => {
    const [activatis, setactivatis] = useState([])
    

    useEffect(()=>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setactivatis(data))

    },[])




     return (
          <div className='content-section'>
               <div>
               <h1>passionate activities</h1>
               <p className='sub-hadding'>Select today's Activities</p>
               <div></div>
                    {
                         activatis.map(activatis => <ShowActivatis activatis={activatis} key={activatis.id}></ShowActivatis>)
                    }
                   
               </div>
               <div>
                    <p>side bar</p>
               </div>
          </div>
     );
};

export default LoadData;