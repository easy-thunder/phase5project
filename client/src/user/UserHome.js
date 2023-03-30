
import ServiceCardUserHome from "./ServiceCardUserHome"
import JakesSiteFirstImage from '../assets/JakesSiteFirstImage.png'
import CartItem from "./CartItem"
import { useState } from "react"
import MainImageDemo from "../FormStuff/MainImageDemo"
import PageDemo from "../FormStuff/PageDemo"
import SupportChat from "./SupportChat"


function UserHome({ setEvents, services, setCart, handleCart, events, cart, user}){
    const [prep, setPrep]=useState(false)
    const [kill, setKill]=useState(false)


    function handleChange(){
        setCart(()=>[])
        fetch(`/user_services/${user.id}`).then(r=>{
            if(r.ok){r.json().then(cart => {setCart(cart)})
        }
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
<p className="rainbowText largeText  relative">{user.site_name}</p>
<section className="whiteText cardContainerBlackService">
    {events.map(event=><MainImageDemo key={event.id} event={event} events={events} setEvents={setEvents} />)}
</section>
<p className="rainbowText largeText relative center" >Your Site Notes</p>
    <p className="whiteText">{user.additional_form_details}</p>
    <br />
<section className="cardContainerBlackService whiteText" >
{events.map(event => <PageDemo setEvents={setEvents} events={events}  event={event} key={event.id} />)}
</section>









    </div>
    
        <SupportChat user={user} admin={false}/>
    </div>)
}


export default UserHome