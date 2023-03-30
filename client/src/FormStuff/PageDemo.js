import { useRef } from "react";

function PageDemo({ event, setEvents, events }) {
  const pageRef = useRef();
  function deletePage() {
    fetch(`/events/${event.id}`, { method: "DELETE" }).then((r) => {
      if (r.ok) {
        
        // r.json().then((pageRef.current.style.display = "none"));
        const id = event.id
        setEvents(()=>
          events.filter((event)=>{if(event.id !==id){
            return event
          }})
        )

      }
    });
  }

  return(
     event.page_type ?  
    <div
      ref={pageRef}
      className="card object-center items-center  justify-evenly"
    >
      <h3>{event.title}</h3>


      <h3>{event.image_use}</h3>
      <p>{event.page_type}</p>
      <button onClick={deletePage}>delete</button>
    </div>
   : null
   )
}

export default PageDemo;
