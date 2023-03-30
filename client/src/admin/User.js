import MainImageDemo from "../FormStuff/MainImageDemo"
import PageDemo from "../FormStuff/PageDemo"
import { useState } from "react"
import AdminChatLog from "./AdminChatLog"
import SupportAdminChat from "./SupportAdminChat"
function User({user}){
const [hidden, setHidden]=useState(true)

function hide (){
    setHidden(hidden=>!hidden)
}




return(
    <div className=" darkBG whiteText" >
        <p>{user.email}</p>
        <p>{user.url1}</p>
        <p>{user.url2}</p>
        <p>{user.url3}</p>
        <p>{user.phone}</p>
        <p>{user.api}</p>
        <p>{user.additional_form_details}</p>
        <p>{user.site_name}</p>
        <section className="whiteText cardContainerBlackService">
    {user.events.map(event=><MainImageDemo key={event.id} event={event} events={user.events}  />)}
</section>
<section className="cardContainerBlackService whiteText" >
{user.events.map(event => <PageDemo events={user.events}  event={event} key={event.id} />)}
</section>
<div> </div>

        {hidden? null: <SupportAdminChat user={user} messages={user.supports} admin={true}/>}
    {/* <button onClick={deleteUser}>deleteUser</button> */}

    <button onClick={hide} className="needsTop right-0 small absolute">chatLog</button>
    
   {user.supports.map(message=><AdminChatLog  message={message.message} />)}


    </div>
)
}

export default User