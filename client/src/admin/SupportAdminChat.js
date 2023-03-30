





import { useState, useEffect } from "react"
import Message from "../user/Message"

function SupportAdminChat({messages, admin, user}){
    const [show, setShow]= useState(false)
    const [form, setForm]= useState('')
    function openChat(){
        setShow(show=>(!show))
        if(show===true){
            console.log("test")
            messages.map(message=>fetch(`supports/${message.id}`,{method:"DELETE"}))
        }
    }
    useEffect(()=>{
        if(show===true)
        {const messageFetch=setInterval(
            function log(){
            }
        ,1000)
        if(show===false){return()=>clearInterval(messageFetch)}
        return()=>clearInterval(messageFetch)}
    

    },[show])


    function submitMessage(e){
        e.preventDefault()
        fetch(`/supports`,{method:"POST", 
        headers:{"Content-Type": "application/json"},
    body: JSON.stringify({
        user_id: user.id,
        message: form,
        admin: admin
    })})
    .then(setForm(()=>("")))
    }

    return(
    <>
    <div onClick={openChat} className="sticky downRight">
        <p className="whiteText">chat</p>
    </div>
        {show? <div className=" marginLeft sticky  marginTopSome  chat whiteText">
            
            <p className="marginTopSome">
                Hi, I don't have resources for someone to monitor this. However, I would love to demonstrate to you if you contact me at 970-582-0018</p>
        <div>
            {messages.map(message=><Message  key={message.id} message={message.message} admin={message.admin} id={message.id}/>)}
        </div>
        
        <br/>
        <form onSubmit={submitMessage}>

            <input type='text' className="blackText" onChange={(e)=>setForm(()=>e.target.value)} value={form} />
            <input className="pointer" type='submit' />
        </form>
            </div>: null}
    </>
    )
}


export default SupportAdminChat