import React, { useEffect, useState } from 'react';
import ShowActivatis from '../Showdata/ShowActivatis';
import Timebracks from '../Timebracks/Timebracks';
import './LoadData.css'


const LoadData = () => {
    const [activatis, setactivatis] = useState([])
    const [showtime,setShowtime] = useState([])
    const [bracktime, setBreacktime] = useState([])
    
    let totalTime = 0;
    const activetisTimeHandle = (times) =>{  
      totalTime = totalTime + times;           
      setShowtime(totalTime)   
    }

    const barackTimehandle = (breckTime) =>{
         setBreacktime(breckTime)
    }



    useEffect(()=>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setactivatis(data))

    },[])

  const breackTime = [10, 20, 30, 40, 50];


     return (
          <div className='content'>
               <div>
                    <h1>passionate activities</h1>
                    <p className='sub-hadding'>Select today's Activities</p>
               </div>
               <div className='content-section'>              
               <div className='show-card-sction'>
                    {
                         activatis.map(activatis => <ShowActivatis handletime={activetisTimeHandle} activatis={activatis} key={activatis.id}></ShowActivatis>)
                    }   
                    </div>                           
               <div className='side-bar-section'>
                    <h4>Add A Break</h4>
                    <div className='time-brack'>
                         {
                              breackTime.map(time => <Timebracks timeHandle={barackTimehandle} time={time}></Timebracks>)
                         }
                    </div>
                    <div>
                         <h4>Exercise Details</h4>
                         <div className='Ex-time'>
                              <h6>Exercise time: {showtime}</h6>
                         </div>
                         <div className='Br-time'>
                              <h6>Break time: {bracktime}</h6>
                         </div>
                         <button className='compleate-button'>Activity Completed</button>
                    </div>
               </div>
          </div>
          </div>
     );
};

export default LoadData;