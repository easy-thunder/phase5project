import { NavLink, useHistory } from "react-router-dom"
import PageInfo from "../user/PageInfo"
import { useState } from "react"


function PageDetailsForm({user, setEvents, events,  setUser}){
    const history = useHistory()
    const [page, setPage] = useState(false)
    function showPage(){
        setPage(page=>!page)
    }
    function additionalInformation(e){
        e.preventDefault()
        const formUpdate={
            ...user,
            additional_form_details: e.target.notIncludedOnForm.value
        }
        fetch(`/users/${user.id}`,{method:"PATCH",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(formUpdate)
    })
    .then(r=>{
        if(r.ok){r.json().then(
            // history.push(`/reviewAndSubmit/${user.id}`)
            setUser(()=>formUpdate)
            )}
    }).then(e.target.reset())
    }


    return(
        <div className="marginTopSome" >
             <label className="largeText">page details</label>
            <br></br>
            <button onClick={showPage}>add page</button>
            <br></br>
            {page ?  <PageInfo user={user} setEvents={setEvents} events={events} />
     :null }



            <br></br>
            <br />
            <label>additional details</label>
            <br />
            <form onSubmit={additionalInformation}>

            <textarea id='notIncludedOnForm' placeholder={user.additional_form_details ? user.additional_form_details :`ie. I want action cable to be able to connect users to other users. Or I want action cable to connect directly too my staff, or I want action emailer to automatically send emails too me and too my customer with xyz message."id="additionalDetails`}></textarea>
            <br></br>
            <input type="submit" className="whiteText pointer" />
            </form>




            
        </div>
    )
}


export default PageDetailsForm




