
import { useRef, useState } from "react"

function ServiceInput({user, setEvents, events}){

    const [imageUse, setImageUse] = useState('')
    const [poster, setPoster] = useState(null)
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState("")
    const [not_included_in_form, setNot_included_in_form] = useState("")

        const serviceRef=useRef()
        
        function addService(e){
            e.preventDefault()
            const formData = new FormData()
            formData.append("poster", poster)
            formData.append("user_id", user.id)
            formData.append("image_use", imageUse)
            formData.append("title", title)
            formData.append("price", price)
            formData.append("not_included_in_form", not_included_in_form)
            fetch(`/events`, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(data => {
                const newService = {
                    image_use: data.image_use,
                    poster_url: data.poster_url,
                    title: data.title,
                    id: data.id,
                    price: price,
                    not_included_in_form: not_included_in_form
                }
                setEvents(()=>([...events, newService
                ]))
                 // do something with the returned data
                }).then(e.target.reset())



        }
    
    
        return(
        <form className="whiteText" ref={serviceRef} id={`service`} onSubmit={addService}>
            <label>Service Name</label>
            <br />
            <input type='text' onChange={(e)=>setTitle(e.target.value)} />
            <br></br>
            <label>Service Image</label>
            <br />
            <input type="file" accept="image/png, image/jpeg" onChange={(e)=>setPoster(e.target.files[0])}  />  
            <br />
            <label>Service Price</label>
            <br></br>
            <input type='number' onChange={(e)=>setPrice(e.target.value) } />
            <br></br>
            <label>service Description</label>
            <br></br>
            <textarea onChange={(e)=>setImageUse(e.target.value)}  ></textarea>
            <br></br>
            <label>Have any details for this service that can't be included in a form?</label>
            <br></br>
            <textarea id={`serviceOther`} onChange={(e)=>setNot_included_in_form(e.target.value)}></textarea>
            <br></br>
            {/* <button onClick={deleteMainImage}>delete</button> */}
            <input type="submit" className="pointer whiteText"/>
            </ form>
        )
    
}


export default ServiceInput


