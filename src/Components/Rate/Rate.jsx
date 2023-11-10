import { useState } from "react";
import './Rate.css';
import Star from '../../assets/star.svg'

function Rate (props) {
    const stars =[1,2,3,4,5]

    return (
    <div className="main-container">
      <div className="rate-container">
        <div className="imgdiv">
        <img  className="starimg" src={Star} alt="photo" />

        </div>
      <div className="h1div">
        <h1>How did we do?</h1>
        </div>
        
        <div>
          <p>Please let us know how we did with your support request. All feedback is appreciated 
      to help us improve our offering!.</p>
      </div>
      <div>
      {stars.map((item, index)=>{

        
       return  <button className="stars" onClick={()=>props.setNumber(item)} style={props.number==item ?{backgroundColor: "#E68226", color:"white"}:{backgroundColor:"#252D37", color :"white"} } key={index}>{item}  </button>
        })}
      </div>
       
  
           <button 
           className="submit" onClick={()=>{
            if(props.number) props.setSubmit(true)
           }}>Submit</button>
        </div>
    </div> 
    
     );
}
 
export default Rate;