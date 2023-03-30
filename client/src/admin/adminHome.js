import ServiceCardAdmin from "./ServiceCardAdmin"
import { useState } from "react"
import { NavLink } from "react-router-dom"

function AdminHome({services, setServices}){
    // console.log(services)
    const [poster, setPoster] = useState(null)
    const [name, setName] = useState('')
    const [initialPrice, setInitialPrice]=useState('')
    const [subsequentPrice, setSubsequentPrice]=useState('')
    const [recurringPrice, setRecurringPrice]=useState('')
    const [recurringFee, setRecurringFee]=useState(false)
    const [description, setDescription]=useState('')
    const [details, setDetails]=useState('')
    


    function handleChange(){
        setServices(()=>[])
        fetch('/services').then(r=>{
            if(r.ok){r.json().then(services => {setServices(services)})
            }
        })
    }

    function newService(e){




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


        fetch('/services', {
            method: "POST",
            body: formData
        }).then(r=>{
            if(r.ok){r.json().then(service => {setServices([...services, service]) 
            console.log(service)
            })}
        })

    }



    return(<div className={`marginTopSome`}>
        <NavLink to={`/admin/lakwsjsd9fpaoisjdfijjajsldkdjflasdfjkhaksiddf`} exact>

        <button>viewUsers</button>
        </NavLink>
        <h1>create a new service</h1>
        <form onSubmit={newService}>
            <input type="text" placeholder="name" onChange={(e)=>setName(e.target.value)}  />
            <br />

            <input type='number' placeholder="initial price" onChange={(e)=>setInitialPrice(e.target.value)}/>
            <br />

            <input type='number' placeholder="subsequent price" onChange={(e)=>setSubsequentPrice(e.target.value)}/> 
            <br />
               <label>does this price recur</label>
            <input type='checkbox' onChange={(e)=>setRecurringFee(e.target.checked)}/>
            <br />

            <input type='number' placeholder="recurring price" onChange={(e)=>setRecurringPrice(e.target.value)} />
            <br />
            <input type='file' accept="image/png, image/jpeg" onChange={(e)=>setPoster(e.target.files[0])} />
            <br />
            <textarea onChange={(e)=>setDescription(e.target.value)} placeholder="quick description"/>
            <br />
            <textarea onChange={(e)=>setDetails(e.target.value)} placeholder="details of description"/>
            <br />
            <input className="pointer" type='submit'/>
        </form>
        {services.map(service =><ServiceCardAdmin setServices={setServices} service={service} key={service.id} handleChange={handleChange}/>)}




    </div>)
}


export default AdminHome