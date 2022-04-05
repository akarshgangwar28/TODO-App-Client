import logo from './logo.png';
import './App.css';
import React from "react";

class App extends React.Component
{
  render()
  {
    return(
      <div>
        <img src={logo} width="80" height="80" className='logo'/>
        <h1 className='app-title' > Today's Tasks</h1>
        <div className="container">
        

        <input
          type="text"
          placeholder='Enter Task'
          className='input-text'
        />

         <button 
         className='add-btn'>Add Item
         </button>

         <div className='list'>
          <ul>
            <li>
              <input type="checkbox" name=""  />
              Buy some Milk
              
              <button className='btn'>Delete</button>
            </li>

            <li>
              <input type="checkbox" name=""  />
              Assignment
              
              <button className='btn'>Delete</button>
            </li>

            </ul> 
         
         </div>
         </div>
        
      </div>


    );
  }
}

export default App;
