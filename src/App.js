
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

// *******This is useState function ##useState:button click change h1 value (using function) *******


// import React, {Component,useState} from 'react';
// function App()
// {
//   const [my_name,changeMyName]=useState("react js");
//   const [my_age,changeMyAge]=useState(24);

// const buttonClicked=()=>
// {
//   changeMyName("Wisdom");
// }

//   return(
//     <div>
//       <h1> Hello, Welcome to {my_name}</h1>
//       <h2> And My Age Is: {my_age}</h2>
//       <button onClick={buttonClicked}>Change Name </button>
//       </div>
//       );
// }



// *******This is state function ##state:button click change h1 value (using class) *******
// import React, {Component} from 'react';

// class App extends Component{
//   state={
//     my_name:"Rutuja"
//   }
//   changeMyName=()=>{

  // ***this.setState is syntax***
//     this.setState(
//       {
//         my_name:"Wisdom"
//       }

//     )
//   }

// render()
// {
//   return(
// <div>
//   <h1> Hello {this.state.my_name}</h1>
//   <button onClick={this.changeMyName}>Click Here </button>
//   </div>
//   );
// };

// }
export default App;