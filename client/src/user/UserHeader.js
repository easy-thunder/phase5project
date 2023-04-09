import { useHistory } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

import finalLogoForSite from "../assets/finalLogoForSite.png"


function UserHeader({setUser, scrollTop, setCart, setFormCurrent, setEvents, user}){
const history = useHistory()
const [hamburger, setHamburger] = useState(true)
const [logoSide, setLogoSide]=useState(false)

useEffect(()=>{
    if(logoSide===false && scrollTop>10){
       return setLogoSide(logoSide=>!logoSide)
    }
    if(logoSide===true && scrollTop<10){
        return setLogoSide(logoSide=>!logoSide)
    }
},[scrollTop])

// useEffect(()=>{
// console.log(logoSide)
// },[logoSide]
// )

function signOut(){
    fetch("/logout", { method: "DELETE" })
    .then((r) => {
        if (r.ok) {
        history.push('/')
        setUser(()=>null)
        setCart(()=>[])
        setFormCurrent(()=>({}))
        setEvents(()=>[])
}
})
}

function handleHamburger(){
setHamburger(hamburger=>!hamburger)
}
    


    return(
       hamburger ? 
       <div className={`sticky  hamburger ${logoSide? "logoSide":null}`}>

        <img src={finalLogoForSite} className="pointer zHigh logo" onClick={handleHamburger}/>
        
       </div>

:
<div className={`sticky header  ${logoSide? "logoMenu":null} `}>
<div className= {`sticky margin ${logoSide? "logoMenu":null}`}  >

        <img src={finalLogoForSite} className={`logo pointer zHigh`} onClick={handleHamburger}/>
</div>
<div className={`${logoSide? "logoMenu ":null}`} >

        <div className={`${logoSide? "logoMenu":null}`}>




<NavLink to={`/`} >

<button onClick={signOut}>sign out </button>
</NavLink>
<NavLink to={`/`} exact >
    <button className="button">Home</button>
</NavLink>       

<NavLink to={`/about`} exact >
<button>about</button>
</NavLink>   

<NavLink to={`/cart/${user.id}`} exact >
<button>contact</button>
</NavLink>   

</div>

    </div>

</div>

    )
}


export default UserHeader