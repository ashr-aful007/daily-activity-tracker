import React, { useEffect, useState } from 'react';
import ShowActivatis from '../Showdata/ShowActivatis';
import Timebracks from '../Timebracks/Timebracks';
import './LoadData.css';
import img1 from '../../profileImg/img1.jpg';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';




const LoadData = () => { 
    const [activatis, setactivatis] = useState([])
    const [showtime,setShowtime] = useState(0)
    const [bracktime, setBreacktime] = useState([]) 

    
    const activetisTimeHandle = (times) =>{   
   const   total = showtime + times;   
//      const newTime = [...showtime,times] 
//      const sum =  newTime.reduce((accumulator, currentValue) =>{
//         return accumulator + currentValue;
//    },0)   
     setShowtime(total)
   
  }

 

     //  console.log(showtime)


      //breack time
    const barackTimehandle = (breckTime) =>{

     setBreacktime(breckTime)
         localStorage.setItem('brackdata', breckTime)        
        
    }


    useEffect(()=>{
          let bracktimedata = localStorage.getItem('brackdata')
          if(bracktimedata){
          setBreacktime(bracktimedata)
          }
    },[])


    useEffect(()=>{
       fetch('data.json')
       .then(res => res.json())
       .then(data => setactivatis(data))

    },[])

  const breackTime = [10, 20, 30, 40, 50];


     return (
          <div className='content'>
               <div className='heading-section'>
               <div className='heading'>
                    <h1>passionate activities</h1>
                    <p className='sub-hadding'>Select today's Activities</p>
               </div>
               <div>
                    <div className='profile'>
                         <div>
                              <img src={img1} alt="loading" />                             
                         </div>
                         <div>
                              <p>Yamini</p>
                              <p><FontAwesomeIcon icon={faLocationDot}></FontAwesomeIcon>Noakhali</p>
                              <div>                                                                                   
                         </div>
                       </div>
                   </div>
                   <div className='detail-imformation'>
                              <div>
                                  <h5>66<small>Kg</small></h5> 
                              </div>
                              <div>
                                   <h5>26<small>Years</small></h5>                       
                              </div>
                              <div>
                                   <h5>5.5<span>ft</span></h5>
                              </div>
                              </div>
                  </div>              
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
                    <div className='count-display-section'>
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