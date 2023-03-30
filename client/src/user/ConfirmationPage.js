import { useEffect } from "react"



function Confirmation({setCart, cart}){
    

   useEffect(()=>{
    cart.map(itemObject=>{
        fetch(`/user_services/${itemObject.id}`,{method:"DELETE"})
        .then(r=>{if(r.ok){r.json().then(setCart(()=>[]))}})
    })
    
   },[cart])


    return<div className="marginTopSome blue">
        <p>success! Your cart is being emptied. Don't worry your form details are still there!</p>
    </div>
}

export default Confirmation