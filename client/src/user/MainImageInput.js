import { useState } from "react";


function MainImageInput({user, setEvents, events}){
   const [imageUse, setImageUse] = useState('')
   const [poster, setPoster] = useState(null)
   const [title, setTitle] = useState('')

    function addMainPhoto(e){
    e.preventDefault()

    const formData = new FormData()
    formData.append("poster", poster)
    formData.append("user_id", user.id)
    formData.append("image_use", imageUse)
    formData.append("title", title)
    
    // configure your fetch url appropriately
    fetch(`/events`, {
      method: "POST",
      body: formData
    })
      .then(res => res.json())
      .then(data => {
        const newMainImage = {
            image_use: data.image_use,
            poster_url: data.poster_url,
            title: data.title,
            id: data.id
        }
        setEvents(()=>([...events, newMainImage
        ]))
      });
    }


    return(
        <form className="" onSubmit={addMainPhoto} 
        >
        <label>MainImage jpg/png</label>
        <br />
        <label>Title</label>
        <br />
        <input type='text' placeholder="title" id="title" onChange={(e)=>setTitle(e.target.value)} />
        <br />
        <input type="file" accept="image/png, image/jpeg" onChange={(e)=>setPoster(e.target.files[0])}  />  
        <br />

    <p>briefly explain in under 200 characters how this main image is to be used in your site</p>
    <br />


    <textarea onChange={(e)=>setImageUse(e.target.value)} placeholder="ie. website 3 has image X at the top of its homepage. I want this photo to be displayed like that. ">

    </textarea>
    <br />
    <input type='submit' className="pointer" />
        </ form>
    )
}

export default MainImageInput