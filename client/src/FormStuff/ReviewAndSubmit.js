import { NavLink } from "react-router-dom"
import MainImageDemo from "./MainImageDemo"
import PageDemo from "./PageDemo"
import {useStripe} from "@stripe/react-stripe-js";

function ReviewAndSubmit({user, setEvents, events, formCurrent, monthlyCost, startingCost}){
const initialCost= startingCost/2
const formatStartingCost = startingCost*100
const stripe = useStripe();


function pay (){
    fetch('/create_payment_intent',{
      method: "POST",
      headers:{"Content-Type": "application/json"},
      body: JSON.stringify({amount_to_charge: formatStartingCost})
    })
    .then(r=>r.json())
    // .then(loadStripe('pk_test_51MTKZtAdCijzaWdM7uAcQjk0D0O0cm7N3urEryvD5DO2kYniJ5uKNPDoqGdUtuU4bQWkAGtWRNgmDJ4Zw84udlJw00Ko0TenWC').then(
    //   stripe => this.stripe = stripe
    // ).then(
    //   () => this.createStripeSession()
    // ))
    .then(session=>{
      stripe.redirectToCheckout({sessionId: `${session.id}`})
    })
  }

    return(<div className="marginTopSome">

<h2 className="largeText">confirm and pay</h2>
                <p>{formCurrent.site_name}</p>
                <p>{formCurrent.url1}</p>
                <p>{formCurrent.url2}</p>
                <p>{formCurrent.url3}</p>
                <p>{formCurrent.api}</p>
                <p>{formCurrent.phone}</p>
                <p>{formCurrent.additional_form_details}</p>
                <p>monthly server fees: ${monthlyCost}</p>
                <p>finished cost: ${startingCost}</p>
                <h2>Your Main images and services</h2>
                {events.map(event => <MainImageDemo  event={event} key={event.id} setEvents={setEvents} events={events} />)}
                <h2>Your page's information</h2>
                {events.map(event => <PageDemo  event={event} key={event.id} setEvents={setEvents} events={events} />)}

<NavLink to={`/pageDetails/${user.id}`}>
            <button>back</button>
            </NavLink>
            <button onClick={pay}>Pay</button>
    </div>)
}


export default ReviewAndSubmit