import { useState } from "react"



function ServiceCardUserHome({service, handleCart, setPrep, setKill, kill}){
    const [hidden, setHidden] = useState(true)
    const [pagesForm, setPagesForm]= useState(false)

 





function purchase(){
    if(service.name==="dynamic site" || service.name==="Static Site"){
        setPagesForm(()=>!pagesForm)
    }
    else{handleCart(service)}
}
function killModal(){
    setKill(()=>true)
}

function purchaseWithForm(e){
    e.preventDefault()
    handleCart(service, e.target.pages.value)
    setKill(()=>true)
}


    function showDetails(){
            if(service.name==="Full Stack Site" || service.name==="Frond End Site"){
                setHidden(()=>false)
            }
            else{
            setPrep(()=>true)
            setHidden(()=>false)
            }
         }
        if(kill===true&&hidden===false){
            setHidden(()=>true)
            setKill(()=>false)
            setPrep(()=>false)
        }


    return(
    
    <article onClick={showDetails} className={`card ${hidden? null:"enlarge"}`} style={{
        backgroundImage: `url(${service.poster_url})`,
    backgroundSize: `cover`
}
    }>

<h3 className="largeText  slightBG">{service.name} 
 </h3>
{hidden? null:<p onClick={killModal} className="absolute higher right-0 largeText pointer">x</p>}
<div className="prices">
<h4>Initial Page Price:{service.initial_price}$</h4>
<h4>Additional Page Price:{service.subsequent_price}$</h4>
<p>Monthly server fee{service.recurring_price}$</p>
</div>
{hidden? null:
<div className="slightBG">
<h4 className=" details marginLeftAndRight">{service.description}</h4>
    <h4 className=" marginLeftAndRight">{service.details}</h4> 
<button className="darkerBackground fixed" onClick={purchase}>purchase</button>
{pagesForm? 
<form onSubmit={purchaseWithForm} className="fixed" >
    <label>How many page?</label>
    <input className="blackText" type='number' id="pages" />
    <input type='submit' className="pointer darkerBackground"/>
</form>: null
}

</div>}
    
 






    </article>)
}


export default ServiceCardUserHome