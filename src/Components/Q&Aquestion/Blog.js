import React from 'react';
import './Blog.css'



const Blog = () => {
     return (
          <div className='Blog-Card-section'>
              <div>
               <h4>Blog section!</h4>
              <div className='main-blog'>
              <div>              
                    <h4>1. How does react Work?</h4>
                    <p>React components work similarly to JavaScript functions as they accept arbitrary inputs called properties or props. It's possible to have as many components as necessary without cluttering your code.</p>
               </div>
               <div>
                    <h4>2. difference between props and state?</h4>
                    <p>Props are used to pass data from one component to another.
                    The state is a local data storage 
                    that is local to the component only 
                    and cannot be passed to other components.</p>
               </div>
               <div>
                    <h4>3. UseEeffect cases?</h4>
                    <p> Running once on mount: fetch API data.
                     validating input field.
                    live filtering.
                    trigger animation on new array value.
                    update paragraph list on fetched API data update.
                    updating fetched API data to get BTC updated price.</p>
               </div>
              </div>
              </div>
              <div className='side-menu'>
                   {/* blanck */}
              </div>
          </div>
     );
};

export default Blog;