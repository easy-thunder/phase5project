import { useRef, useState } from "react"


function MainImageDemo({event, setEvents, events}){
    const [hidden, setHidden]= useState(true)
    const mainImageRef = useRef()

function deleteMainImage(){
    fetch(`/events/${event.id}`,{method: "DELETE"})
    .then(r=>{if(r.ok){

        const id = event.id
        setEvents(()=>
        events.filter((event)=>{if(event.id !==id){
          return event
        }})
      )
      
    }})
    
}
function unHide(){
    setHidden(()=>!hidden)
}

return( 
    event.page_type ? null:
<>
    { hidden? <img onClick={unHide} className="imageMain pointer" src={event.poster_url} alt={event.title}/> :
<div ref={mainImageRef} className=" object-center items-center  justify-evenly" >
    <h3>{event.title}</h3>
<img onClick={unHide}  src={event.poster_url} alt={event.image_use} className="center card pointer"/>
    <p>{event.price}</p>
    <h3>{event.image_use}</h3>
    <p>{event.not_included_in_form}</p>
<button onClick={deleteMainImage}>delete</button>
</div>}
    
    </>
)
}


export default MainImageDemo