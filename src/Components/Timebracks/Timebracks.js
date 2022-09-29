import React from 'react'; 
import './Timebracks.css'

const Timebracks = (props) => {
     const {time,timeHandle} = props
     return (
          <div className='breack-time'>
               <button onClick={()=>timeHandle(time)}>{time}m</button>
          </div>
     );
};

export default Timebracks;