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







    return(<div className="marginTopSome darkBG">
{cart.map(itemObject=><CartItem item={itemObject.service} key={itemObject.id}itemObject={itemObject} user={user} handleChange={handleChange}/>)}
<div>
    <h3>Website Purchase Price: {startingCost}$ </h3>
    <h3>Monthly server fee: {monthlyCost}$</h3>
    <NavLink to={`/purchaseForm`}>
    <button>Purchase form</button>
    </NavLink>

</div>

    </div>)
}


export default Cart