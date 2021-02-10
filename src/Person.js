

import './rutuja.css';

function Person(props)
{
    return(
<div>
     <h5 className='sprouts'>Your Name is: {props.name} </h5>
    
     <button className='button' onClick={props.clickable}>Click Here To Change Name </button>
</div>
    );
}
export default Person;