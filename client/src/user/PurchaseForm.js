import { NavLink, useHistory } from "react-router-dom"



function PurchaseForm({startingCost, monthlyCost, setUser, user, formCurrent, setFormCurrent}){
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
user =>
{setUser(
{
    ...user, 
    url1: url1,
    url2: url2,
    url3: url3,
    phone: phone,
    api: api,
    site_name: site_name})}
)
.then(e.target.reset())
}})
}


    return(<div className="marginTopSome" >

        
        
        <h1>Website Purchase Price: {startingCost}$ </h1>
    <h1>Monthly server fee: {monthlyCost}$</h1>
    
        <form className="" onSubmit={updateSiteBasics}>
        <label className="whiteText">site name</label>
        <br />
        <input name="siteName" type="text" id="siteName" placeholder={`${user.site_name ? user.site_name: "site name"}`}/>
            <h1 className="whiteText">Please insert three websites that you like the design of so I may get a feel for how you want your website too look.</h1>
            <input type='text' placeholder={`${user.url1 ? user.url1 : "url1"}`} id="url1" />
            <br />
            <input type='text' placeholder={`${user.url2 ? user.url2 : "url2"}`} id="url2" />
            <br />
            <input type='text'  placeholder={`${user.url3 ? user.url3 : "url3"}`} id="url3" />
            <br />
            <label className="whiteText">contact phone number</label>
            <br />
            <input type='text' id="phone" placeholder={`${user.phone ? user.phone: "phone"}`} />
            <br />
            <label className="whiteText">Any API's?</label>
            <br />
            <input type='text' placeholder={`${user.api ? user.api : "facebook/instagram login"}`} id="api" />
            <br />
            <input type='submit' className="whiteText pointer"/>
        </form>
       
    </div>)
}

export default PurchaseForm