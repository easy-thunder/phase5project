import { useState } from "react"
import PurchaseForm from "../user/PurchaseForm"
import MainImagesForm from "../FormStuff/MainImagesForm"
import PageDetailsForm from "../FormStuff/PageDetailsForm"
function SiteOptions({startingCost, setUser, events, setEvents, monthlyCost, user, setCart, setDark}){

const [generalDetails, setGeneralDetails]= useState(false)
const [services, setServices]= useState(false)
// const [mainImages, setMainImages]= useState(false)
const [pageDetails, setPageDetails]= useState(false)

function generalDetailsDisplay(){
    setGeneralDetails(x=>!x)
    setServices(()=>false)
    // setMainImages(()=>false)
    setPageDetails(()=>false)
    
}
function serviceDisplay(){
    setServices(x=>!x)
    setGeneralDetails(()=>false)
    setPageDetails(()=>false)
    // setMainImages(()=>false)
}
// function mainImagesDisplay(){
//     setMainImages(x=>!x)
// }
function pageDetailsDisplay(){
    setPageDetails(x=>!x)
    setGeneralDetails(()=>false)
    setServices(()=>false)
}


    return(<div className="center form  ">
        <p className="largeText ">What information would you like to add?</p>
        {generalDetails ? <PurchaseForm startingCost={startingCost} monthlyCost={monthlyCost} setCart={setCart} setUser={setUser} user={user} setDark={setDark}  /> :null}
        {services ? <MainImagesForm setCart={setCart} user={user} setDark={setDark} events={events} setEvents={setEvents}/>: null}
        {pageDetails ? <PageDetailsForm user={user} setEvents={setEvents} events={events} setUser={setUser} /> : null}
        <button onClick={generalDetailsDisplay}>General Site Details</button>
        <br/>
        <button  onClick={serviceDisplay}>Services</button>
        <br/>
        {/* <button onClick={mainImagesDisplay}>Main Images</button> */}
        <br/>
        <button onClick={pageDetailsDisplay}>Page and Site Details</button>

    </div>)
}


export default SiteOptions