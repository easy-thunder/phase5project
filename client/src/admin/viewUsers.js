import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import User from "./User"
import ViewChats from "./ViewChats"
function ViewUsers(){
    const [users, setUsers]= useState([])

    function fetchMessages(){
        fetch('/users').then(r=>{if(r.ok){r.json().then(data=>
            setUsers(()=>data)
            )}})
    }

    useEffect(()=>{
        const messageFetch = setInterval(
            fetchMessages
        ,10000)
        return()=>clearInterval(messageFetch)
    },[])

   

return(
    <div className="marginTopSome">
        <NavLink to={`/admin/pasjdpofjaslkdjfp9wijef9foilkdfw`} exact>
<button>viewServices</button>
</NavLink>
        {users.map(user=><User key={user.id} user={user} />)}
    </div>
)
}




export default ViewUsers