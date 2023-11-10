import React from 'react'
import "./Result.css"
import payment from "../../assets/payment.svg"

function Result(props) {
    return (
        <div> 
            <div className="main-Result-container">
            <div className="Resultcontainer">
            <div className="Divpayment">
            <img className='Paymentimg' src={payment} alt="" />

            </div>
            <h1 className='Selectedscore'>you selected {props.number} of 5</h1>
            <h1 className='ThankYou'>Thank you!</h1>
            <p className='resulptag'>
            We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
            </p>


            </div>
        </div>
                
            </div>
            
            
    )
}

export default Result
