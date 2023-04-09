import { NavLink } from "react-router-dom"
import CartItem from "./CartItem"



function Cart({cart, setCart, user, startingCost, monthlyCost}){

    function handleChange(){
        setCart(()=>[])
        fetch(`/user_services/${user.id}`).then(r=>{
            if(r.ok){r.json().then(cart => {setCart(cart)})
        }
    })
}







    return(<div className="marginTopSome darkBG fullScreen">
<p>operating hours Monday through Friday 7:00a.m-5:00p.m</p>
<p>phone: 970 582 0018</p>
<p>email: jddiehl17@gmail.com</p>

    </div>)
}


export default Cart