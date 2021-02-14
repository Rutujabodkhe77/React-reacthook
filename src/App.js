
import React, {Component,useState} from 'react';
import Person from './Person.js';
import './rutuja.css';

function App()
{
const[my_name,my_name_function]=useState("Python");

const ChangeName= () =>
  {
   my_name_function("java");
  }

  return(
  <div>
<h1>....This is ReactHooks....</h1>

    <h1 className="wisdom"> Welcome to react</h1>
<Person name={my_name} clickable={ChangeName}> </Person>

{/* <button onClick={ChangeName}>Change Name</button> */}
  </div>
  );
  }

export default App;