
import ServiceCardUserHome from "./ServiceCardUserHome"
import JakesSiteFirstImage from '../assets/JakesSiteFirstImage.png'
import CartItem from "./CartItem"
import { useState } from "react"
import MainImageDemo from "../FormStuff/MainImageDemo"
import PageDemo from "../FormStuff/PageDemo"
import SupportChat from "./SupportChat"
import SiteOptions from "../FormRefactor/siteOptions"
import GeneralDetails from "./GeneralDetails"
import {useStripe} from "@stripe/react-stripe-js";


function UserHome({ setEvents, services, setCart, handleCart, events, cart, user, startingCost, monthlyCost, setUser, setDark}){
    const [prep, setPrep]=useState(false)
    const [kill, setKill]=useState(false)
    const [hideDetails, setHideDetails]= useState(true)
    const [general, setGeneral]= useState(false)

    const stripe = useStripe();
    const formatStartingCost = startingCost*100
    function handleChange(){
        setCart(()=>[])
        fetch(`/user_services/${user.id}`).then(r=>{
            if(r.ok){r.json().then(cart => {setCart(cart)})
        }
    })
}

function displayOptions(){
    setHideDetails(hideDetails=>!hideDetails)
}


function displayGeneral(){
    setGeneral(general => !general)
}

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












    function killEnlarge(){
        if(kill===false&&prep===true){
            
            setKill(()=>true)
        }
    
    
    }

    document.onkeydown = function(e) {
        e = e || window.event;
        if (e.key === "Escape") {
            setKill(()=>true)
        }
    };

    return(<div 
        onClick={killEnlarge}
        >


        
        <img className="center image" src={JakesSiteFirstImage }alt="Beautiful canyon "/>

    <div className={`blackSpace`}> 
    <p style={{color:"white"}}>Welcome To Your Site!
        </p> 
        <p className="whiteText">To add information about your site please complete the form in the cart. Then you will be able to see your site!</p>
        <p className="whiteText largeText " >Services</p>
        <section className='cardContainerBlackUser whiteText' >
{services.map(service =><ServiceCardUserHome setKill={setKill} kill={kill} setPrep={setPrep} handleCart={handleCart} service={service} key={service.id}/>)}
</section>

    <p className="whiteText largeText relative marginTopMore center"  >Your in cart services</p>
    <div className="cardContainerBlackService">
    {cart.map(itemObject=><CartItem item={itemObject.service} key={itemObject.id} itemObject={itemObject} user={user} handleChange={handleChange}/>)}
    </div>
<button onClick={displayOptions}>add details</button>
{hideDetails ? null: <SiteOptions events={events} setEvents={setEvents} setUser={setUser} startingCost={startingCost} monthlyCost={monthlyCost} setCart={setCart} user={user} setDark={setDark} />}

<p onClick={displayGeneral} className="rainbowText pointer largeText  relative">{user.site_name}</p>
{general ? <GeneralDetails user={user} />: null}

<section className="whiteText cardContainerBlackService">
    {events.map(event=><MainImageDemo key={event.id} event={event} events={events} setEvents={setEvents} />)}
</section>
<p className="rainbowText largeText relative center" >Your Page Notes</p>
    <br />
<section className="cardContainerBlackService whiteText" >
{events.map(event => <PageDemo setEvents={setEvents} events={events}  event={event} key={event.id} />)}
</section>
<section>
    <p className="largeText"> Payment </p>
    <p>starting cost: ${startingCost}</p>
    <p>monthly cost: ${monthlyCost}</p>
    <button onClick={pay}>pay</button>
</section>









    </div>
    
        <SupportChat user={user} admin={false}/>
    </div>)
}


export default UserHome