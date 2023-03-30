import { useState } from "react"



function ServiceCardHome({service, setPrep, setKill, kill}){
    const [hidden, setHidden] = useState(true)


    function showDetails(){
      
            if(hidden===true&&kill===false){
                setPrep(()=>true)
                setHidden(()=>false)
            }
        
}
if(kill===true&&hidden===false){
    setHidden(()=>true)
    setKill(()=>false)
    setPrep(()=>false)
}



    return(<div onClick={showDetails} className={`card ${hidden? null:"enlarge"}`} style={{
        backgroundImage: `url(${service.poster_url})`,
    backgroundSize: `cover`
}
    }>

<h3 className="largeText  slightBG">{service.name}</h3>
<div className="prices">
<h4>Initial Page Price:{service.initial_price}$</h4>
<h4>Additional Page Price:{service.subsequent_price}$</h4>
<p>Monthly server fee{service.recurring_price}$</p>
</div>
{hidden? null:
<div className="slightBG">
<h4 className=" details marginLeftAndRight">{service.description}</h4>
    <h4 className=" marginLeftAndRight">{service.details}</h4> 
    <p className=" ">SignUp to Purchase</p>
    

</div>}






    </div>)
}


export default ServiceCardHome