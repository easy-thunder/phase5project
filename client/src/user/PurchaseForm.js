import { NavLink, useHistory } from "react-router-dom"



function PurchaseForm({startingCost, monthlyCost, user, formCurrent, setFormCurrent}){
const history = useHistory()


function updateSiteBasics(e){
e.preventDefault()
const site_name = e.target.siteName.value ? e.target.siteName.value: user.site_name
const url1 = e.target.url1.value ? e.target.url1.value: user.url1
const url2 = e.target.url2.value ? e.target.url2.value: user.url2
const url3 = e.target.url3.value ? e.target.url3.value: user.url3
const phone = e.target.phone.value ? e.target.phone.value: user.phone
const api = e.target.api.value ? e.target.api.value: user.api

const formUpdate = {
    url1: url1,
    url2: url2,
    url3: url3,
    phone: phone,
    api: api,
    site_name: site_name
}

fetch(`users/${user.id}`,{
    method:"PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(formUpdate)
}).then(r=>{if(r.ok){r.json().then(
    history.push(`/mainImages/${user.id}`)
    )}})
    setFormCurrent(()=>formUpdate)
}


    return(<div className="marginTopSome" >

        
        
        <h1>Website Purchase Price: {startingCost}$ </h1>
    <h1>Monthly server fee: {monthlyCost}$</h1>
    
        <form className="" onSubmit={updateSiteBasics}>
        <label>site name</label>
        <br />
        <input name="siteName" type="text" id="siteName" placeholder={`${formCurrent.site_name ? formCurrent.site_name: "site name"}`}/>
            <h1>Please insert three websites that you like the design of so I may get a feel for how you want your website too look.</h1>
            <input type='text' placeholder={`${formCurrent.url1 ? formCurrent.url1 : "url1"}`} id="url1" />
            <br />
            <input type='text' placeholder={`${formCurrent.url2 ? formCurrent.url2 : "url2"}`} id="url2" />
            <br />
            <input type='text'  placeholder={`${formCurrent.url3 ? formCurrent.url3 : "url3"}`} id="url3" />
            <br />
            <label>contact phone number</label>
            <br />
            <input type='text' id="phone" placeholder={`${formCurrent.phone ? formCurrent.phone: "phone"}`} />
            <br />
            <label>Any API's?</label>
            <br />
            <input type='text' placeholder={`${formCurrent.api ? formCurrent.api : "facebook/instagram login"}`} id="api" />
            <br />
            <input type='submit' className="pointer"/>
        </form>
        <NavLink to={`/cart/${user.id}`}>
        <button>back</button>
        </NavLink>
        <NavLink to={`/mainImages/${user.id}`} >
        <button>next</button>
        </NavLink>
    </div>)
}

export default PurchaseForm