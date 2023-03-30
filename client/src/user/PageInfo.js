import { useState } from "react"

function PageInfo({user, setEvents, events}){
const [title, setTitle] = useState('')
const [imageUse, setImageUse] = useState('')
const [pageType, setPageType] = useState('')

    function makeNewPage(e){
        e.preventDefault()
        const formData = new FormData()
        formData.append("image_use", imageUse)
        formData.append("title", title)
        formData.append("user_id", user.id)
        formData.append("page_type", pageType)
        fetch(`/events`, {
            method: "POST",
            body: formData
        })
        .then(res => res.json())
                .then(data => {
                
                const newPage = {
                    image_use: data.image_use,
                    title: data.title,
                    id: data.id,
                    page_type: data.page_type
                } 
                setEvents(()=>([...events, newPage
                ]))
                
            });
    }
    return(
        <form className=""  onSubmit={makeNewPage}>
        <label>page name</label>
        <br />
    <input type='text' onChange={(e)=>setTitle(e.target.value)} placeholder={`page name`} />
    <br />
    <label >page type</label>
    <br />
    <select id="pageType" onChange={(e)=>setPageType(e.target.value)}>
        <option value=''>--Please choose an option--</option>
        <option value={`pageInformational`}   >Informational</option>
        <option value={`pageService`} >Service/product</option>
        <option value={`pagePayment`} >Payment</option>
        <option value={`pageForm`} >Form</option>
        <option value={`pageOther`} >Other</option>
    </select>
    <br />
    <label>page details</label>
    <br />
    <textarea onChange={(e)=>setImageUse(e.target.value)}></textarea>

    <br />
        <input type='submit' className="pointer" />
        </ form>    
    )
}

export default PageInfo