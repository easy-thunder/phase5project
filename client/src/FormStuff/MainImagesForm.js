import { useState } from "react"
import MainImageInput from "../user/MainImageInput"
import ServiceInput from "../user/ServiceInput"
import { NavLink } from "react-router-dom"
import MainImageDemo from "./MainImageDemo"

function MainImagesForm({ user, setDark, formCurrent,  setEvents, events}){
    const [mainImage, setMainImage]= useState(false)
    const [mainImageInfo, setMainImageInfo] = useState(false)
    const [service, setService] = useState(false)
    
    function addService(e){
        e.preventDefault()
        setService(service=>!service)
    }
    
    
    
    
    function MainImageMore(e){
    e.preventDefault()
    setMainImageInfo(mainImageInfo=>!mainImageInfo)
    setDark(dark=>!dark)
    }
    

        function turnOffAllModals(){
            if(mainImageInfo===true){
            setMainImageInfo(false)
            }
        }
        function addMainImage(e){
            e.preventDefault()
            setMainImage(mainImage=>!mainImage)
        }





    return(
        <div className="marginTopSome" onClick={turnOffAllModals}>
<label className="largeText">Add Main Photos and services/products that you want in your website.
            </label>
            {mainImageInfo? <div className="popOut">
        <p>Main images are meant to be artistic and add value to the main pages of your website. The difference between a main image and a service image is that the service image gets associated with each service card that you have. </p>
        </div>:null}
            <br />
            <button onClick={MainImageMore} className="clearButton">Main image vs. service image?</button>
            <br></br>
            <button onClick={addMainImage}>add Main Image</button>
            {mainImage? <MainImageInput user={user} setEvents={setEvents} events={events}/>:null}
            <br />
            <label>Add services</label>
            <br />
            <button onClick={addService}>add service</button>
            {service? <ServiceInput user={user} setEvents={setEvents} events={events} />: null}
            <br></br>
            {/* {renderService} */}
            <br></br>
            <div className="">
                <h2>your site form</h2>
                <p>{formCurrent.site_name}</p>
                <p>{formCurrent.url1}</p>
                <p>{formCurrent.url2}</p>
                <p>{formCurrent.url3}</p>
                <p>{formCurrent.api}</p>
                <p>{formCurrent.phone}</p>
               {events.map(event => <MainImageDemo  event={event} key={event.id} setEvents={setEvents} events={events} />)}


            </div>
            <NavLink to="/purchaseForm">
            <button>back</button>
            </NavLink>
            <NavLink to={`/pageDetails/${user.id}`}>
            <button>next</button>
            </NavLink>
</div>
    )
}




export default MainImagesForm