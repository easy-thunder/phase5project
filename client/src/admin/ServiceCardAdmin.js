import { useState } from "react"



function ServiceCardAdmin({service, handleChange}){
    const [hidden, setHidden] = useState(true)
    const [poster, setPoster] = useState(service.poster_url)
    const [name, setName] = useState(service.name)
    const [initialPrice, setInitialPrice]=useState(service.initial_price)
    const [subsequentPrice, setSubsequentPrice]=useState(service.subsequent_price)
    const [recurringPrice, setRecurringPrice]=useState(service.recurring_price)
    const [recurringFee, setRecurringFee]=useState(service.recurring_fee)
    const [description, setDescription]=useState(service.description)
    const [details, setDetails]=useState(service.details)


    function deleteService(){
        fetch(`/services/${service.id}`, {
            method: "DELETE"
        }).then(r=>{
            if(r.ok){r.json().then(handleChange())}
        })
    }

    function showEditForm(){
        setHidden(hidden=>!hidden)
    }

    function editService(e){
        e.preventDefault()

        const formData = new FormData()
        formData.append("poster", poster)
        formData.append("name", name)
        formData.append("initial_price", initialPrice)
        formData.append("recurring_fee", recurringFee)
        formData.append("recurring_price", recurringPrice)
        formData.append("subsequent_price", subsequentPrice)
        formData.append("description", description)
        formData.append("details", details)
        




        fetch(`/services/${service.id}`,{
            method: "PATCH",
            // headers:{"Content-Type": "application/json"},
            body: formData 
        }).then(r=>{
            if(r.ok){r.json().then(handleChange())}
        })
    }


    return(<div className={`blackText`} >
<h1>pages {service.pages}</h1>
<h3>name: {service.name}</h3>
        <img  src={service.poster_url} alt={service.name}  className="center imageThumb"/>
<p>id {service.id}</p>
<h4>initial price: {service.initial_price}</h4>
<h4>subsequent price: {service.subsequent_price}</h4>
<p>monthly price: {service.recurring_price}</p>
<h4>description: {service.description}</h4>
<p>details:{service.details}</p>
<button onClick={showEditForm}>edit</button>
<button onClick={deleteService}>delete</button>
{hidden? null : 
 <form className="ensureDisplay" onSubmit={editService}>
 <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}  id="name"  />
 <br />

 <input type='number' onChange={(e)=>setInitialPrice(e.target.value)} placeholder="initial price" id="initial_price"/>
 <br />

 <input type='number' placeholder="subsequent price" id="subsequent_price" onChange={(e)=>setSubsequentPrice(e.target.value)}/> 
 <br />
    <label>does this price recur</label>
 <input type='checkbox' id="recurring_fee" onChange={(e)=>setRecurringFee(e.target.checked)} />
 <br />

 <input type='number' placeholder="recurring price" id="recurring_price" onChange={(e)=>setRecurringPrice(e.target.value)} />
 <br />
 <input type='file' accept="image/png, image/jpeg" onChange={(e)=>setPoster(e.target.files[0])} />
            <br />

 <textarea id="description" placeholder="quick description" onChange={(e)=>setDescription(e.target.value)}/>
 <br />
 <textarea id="details" placeholder="details of description" onChange={(e)=>setDetails(e.target.value)}/>
 <br />
 <input className="pointer" type='submit'/>
 
</form>
    }






    </div>)
}


export default ServiceCardAdmin