
import ServiceCardHome from './ServiceCardHome'
import JakesSiteFirstImage from '../assets/JakesSiteFirstImage.png'
import { useState, useEffect } from "react"



function Home({scrollTop, services, xMouse, yMouse}){
    const [circles, setCircles] = useState(false)
    const [innerCircle2X, setInnerCircle2X]= useState(0)
    const [innerCircle2Y, setInnerCircle2Y]= useState(0)
    const [innerCircle1X, setInnerCircle1X]= useState(0)
    const [innerCircle1Y, setInnerCircle1Y]= useState(0)
    const [circleArt, setCircleArt]=useState(true)
    const [breakApart, setBreakApart]=useState(false)
    const [theProcess, setTheProcess]=useState('')
    const [hideServiceCards, setHideServiceCards]= useState(false)
    const [prep, setPrep]=useState(false)
    const [kill, setKill]=useState(false)
    const [site, setSite]=useState('')

    useEffect(()=>{
        if( (xMouse<10)&& (xMouse>2.5) &&(yMouse<15)&&(yMouse>6) ){
            setSite(()=><div>
            <p className='slowEnlarge whiteText topDown sitesHeader'>personalSite</p>
            <p  className='topDown slowEnlarge whiteText sites'>This was my first site ever before I started my journey at flatIron. Click to explore!</p>
            </div>
            )
        
        }
        else{setSite(()=>'')}
    },[xMouse, yMouse])


    useEffect(()=>{
        if(circles===true && scrollTop<500){
            return (setCircles(circles=>!circles),
            setBreakApart(()=>false))
        }
        if(circles===false && scrollTop>500 && scrollTop<1400){
           return (setCircles(circles=>!circles),
           setBreakApart(()=>false))
        }
        if(breakApart===true && scrollTop<1400){
            return setBreakApart(x=>!x)
        }
        if(breakApart ===false && scrollTop>1400 ){
            return (
            setBreakApart(x=>!x)
            
            )
        }
        if(scrollTop<1400){
            setTheProcess(()=>'')
        }
        if(scrollTop>1400){
            setTheProcess(()=><>
            <p className='whiteText largeText'>
                1.SignUp
            </p>
            <p className='whiteText visibleDelayed'>Account creation Will allow easier collaboration, and file sharing.</p>
            
            <>
                <div className={`${"outerCircleArtSmall1"}`}>

<div  className={`${"innerCircle1ArtSmall1"}`}>
                        </div>
<div className={`${"innerCircle2ArtSmall1"}`}  >
    </div>
                    </div>

                </>
            </>)
        }
if(scrollTop>1800){
    setTheProcess(()=><>
<p className='whiteText largeText'>
                2.Select Services
            </p>
            <p className='whiteText visibleDelayed'>Everyone wants different services and not all services cost the same. By providing a customized service experience you can make an educated purchase and get only what you need.</p>

            <>
                <div className={`${"outerCircleArtSmall1"}`}>

<div  className={`${"innerCircle1ArtSmall1"}`}>
                        </div>
<div className={`${"innerCircle2ArtSmall1"}`}  >
    </div>
                    </div>

                </>

    </>)
}

if(scrollTop>2200){setTheProcess(()=><>
<p className='whiteText largeText'>
                3.Provide Details
            </p>
            <p className='whiteText visibleDelayed'>Fill out the form in the cart, give as many details as you can, and all the photos you want. This will save you headaches later and allow a quicker deployment of your site! </p>
            <>
                <div className={`${"outerCircleArtSmall1"}`}>

<div className={`${"innerCircle2ArtSmall1"}`} style={{
    transform: `translate(${14}em)`
}}  >
    </div>
<div  className={`${"innerCircle1ArtSmall1"}`}>
                        </div>
                    </div>

                </>
</>
)
}
if(scrollTop>2600){setTheProcess(()=><>
<p className='whiteText largeText'>
                4.NewSite
            </p>
            <p className='whiteText visibleDelayed'>We spend two weeks on your site. The end of the first week you get a free consultation  &#40;6k minimum &#41; to change direction of the site. And a second free consultation day three of week two. By the end of the second week you get your new site! </p>
            <>
                <div className={`${"outerCircleArtSmall1"}`}>

<div className={`${"innerCircle2ArtSmall1"}`}  >
    </div>
<div  className={`${"innerCircle1ArtSmall1"}`}>
                        </div>
                    </div>

                </>
</>
)
}
if(500<scrollTop && scrollTop<3000 &&circles===false){
    setCircles(()=>true)
}
// setHideServiceCards(()=>!hideServiceCards)

if(500<scrollTop && scrollTop>3000 && circles===true){setTheProcess(()=><></>,
setCircles(()=>!circles),
setHideServiceCards(()=>!hideServiceCards)
)}
if(hideServiceCards===false&& scrollTop<3000){
    setHideServiceCards(()=>!hideServiceCards)
}        
    },[scrollTop])


useEffect(()=>{
    const innerCircle1XDIF = xMouse - 20;
    const innerCircle1YDIF = yMouse - 35;

    setInnerCircle2X(()=>(xMouse))
    setInnerCircle2Y(()=>(yMouse))
    setInnerCircle1X(()=>(innerCircle1XDIF/2))
    setInnerCircle1Y(()=>(innerCircle1YDIF/2))
},[xMouse, yMouse])


function handleCircleArt(){
    if(breakApart===false){
    setCircleArt(()=>!circleArt)}
    if(site!==''){
        window.location="https://easy-thunder.github.io/my-personal-website/"
    }
}

function killEnlarge(){
    if(kill===false&&prep===true){
        
        setKill(()=>true)
    }


}


    return(<div onClick={killEnlarge}>


        
        <img className="center image" src={JakesSiteFirstImage }alt="Beautiful canyon "/>
        


    <div className={`blackSpace`}> 
    {hideServiceCards ? null:<><p>Click too see more details</p><section className='cardContainerBlack whiteText'>
    {services.map(service =><ServiceCardHome setKill={setKill} kill={kill} setPrep={setPrep} scrollTop={scrollTop}  service={service} key={service.id}/>)}
       </section></>}
    <p style={{color:"white"}}>Ready too explore?
        </p> 
        <p>
        ⬇️
            </p>
            
        <div className={`circles-container ${circles? "visible": "invisible"}`}>
        
            {
                circleArt? <>
                {breakApart ? null:<p className="whiteText largeText marginLeft">We  create Elegant, Engaging, and secure sites to help your business grow. Click the art too explore. </p>}
                <div onClick={handleCircleArt} className={`${breakApart? "outerSquare":"outerCircleArt"}`}>
                
<div onClick={handleCircleArt} className={`${breakApart? "innerSquare1":"innerCircle1Art"}`} style={{
    justifySelf: "center"
}}>

  {theProcess}

                        </div>
                        <div className={`${breakApart? null:"deepDark"}`}></div>
<div className={`${breakApart? "innerCircle2Invisible ": "innerCircle2Art"}`} onClick={handleCircleArt} >
    </div>
                    </div>

                </>:
                <>
            {breakApart ? null:<h3 className="whiteText largeText" >Look in the dark too see other projects. Click too highlight them. Scroll too see our streamlined process. </h3> }

            <div id="personalSite" className='personalSite' style={{
                left:"10em",
                top:"15em"
        }}>
            <div className=' whiteText zHigh'>PersonalSite</div>
            
            </div>

            <div onClick={handleCircleArt} 
            className={`${breakApart? "outerSquare":"outerCircle"}`}
            >
                <div>
                {site}
                    </div>

            <div className={`${breakApart? "innerSquare1":"innerCircle1"}`} style={{
                left:`${innerCircle1X}em`,
                top:`${innerCircle1Y}em`,
            }}>
                {theProcess}

                </div>
                </div>
                    <div onClick={handleCircleArt} className={`${breakApart? "innerCircle2Invisible ":"innerCircle2"}`} style={{
                        left:` ${innerCircle2X}em`,
                        top:`${innerCircle2Y}em`
                    }}>
                        
                    </div>
                    </>
                    }








        </div>



       
    </div>
                


    </div>)
}


export default Home