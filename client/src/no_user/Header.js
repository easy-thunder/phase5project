import { NavLink, useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import finalLogoForSite from "../assets/finalLogoForSite.png"



function Header({setUser, scrollTop}){
const history = useHistory()
const [signInHidden, setSignInHidden] = useState(true)
const [signUpHidden, setSignUpHidden] = useState(true)
const [hamburger, setHamburger] = useState(true)
const [logoSide, setLogoSide]=useState(false)
useEffect(()=>{
        if(logoSide===false && scrollTop>500){
           return setLogoSide(logoSide=>!logoSide)
        }
        if(logoSide===true && scrollTop<500){
            return setLogoSide(logoSide=>!logoSide)
        }
    },[scrollTop])
    function handleHamburger(){
        setHamburger(hamburger=>!hamburger)
        }

function hideSignIn(){
    setSignInHidden(signInHidden => !signInHidden)
    if(signUpHidden === false){
        setSignUpHidden(signInHidden=>!signInHidden)
    }
}
function hideSignUp(){
    setSignUpHidden(signUpHidden => !signUpHidden)
    if(signInHidden === false){
        setSignInHidden(signUpHidden=>!signUpHidden)
    }
}


function login(e) {
    e.preventDefault();
const email=e.target.email.value
const password=e.target.password.value


    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((r) => {
      if (r.ok) {

        r.json().then((user) => {setUser(user)
            history.push(`/`)
        });
      } 
    });
  }

  function signUp(e) {

    e.preventDefault();



        const password = e.target.password.value
        const passwordConfirm = e.target.passwordConfirm.value 
        const email = e.target.email.value

    if (passwordConfirm === password){
        fetch("/signup", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify({
            password,
            email
            }),
        }).then((r) => {
            if (r.ok) {
            r.json().then((user) => {setUser(user)
            history.push(`/`)}
            );
            } 
    }
    
    
    )
}
else{alert("passwords don't match")}

}



function adminSignUp(e){
e.preventDefault()
const admin={
    email: e.target.adminEmail.value,
    password: e.target.adminPassword.value,
    admin: true
}

fetch("/signup", {
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    },
    body: JSON.stringify(admin),
}).then((r) => {
    if (r.ok) {
    r.json().then((user) => {setUser(user)
    history.push(`/`)}
    );
    } 
}


)
}



    return(
    
           hamburger ? 
       <div className={`sticky zHigh pointer hamburger ${logoSide? "logoSide":null}`}>

        <img src={finalLogoForSite} className="pointer logo" onClick={handleHamburger}/>
        
       </div> :

    
    
    
    
    <div className={`sticky pointer  zHigh header hamburger ${logoSide? "logoMenu":null} `}>
<div className= {`sticky margin ${logoSide? "logoMenu":null}`}  >

        <img src={finalLogoForSite} className={`logo zHigh pointer`} onClick={handleHamburger}/>
</div>

<div className={`${logoSide? "logoMenu ":null}`} >

        <div className={`${logoSide? "logoMenu":null}`}>
    
<br/>
<br/>
<br/>







<NavLink to={`/`} exact >
<button >home</button>
</NavLink>       

<NavLink to={`/about`} exact >
<button>about</button>
</NavLink>
        <button onClick={hideSignIn}>sign in</button>
     

        <button onClick={hideSignUp}>sign up</button>

        {signInHidden ? null: 
            <div>
            <form onSubmit={login}>
                <input type='email' placeholder="email" id="email" />
                <input type='password' placeholder="password" id="password" />
                <input type='submit' />
            </form>
             </div>
            }
               {signUpHidden ? null: 
            <div>
            <form onSubmit={signUp}>
                <input type='email' placeholder="email" id="email" />
                <br />
                <input type='password' placeholder="password" id="password" />
                <br />
                <input type='password' placeholder="Confirm Password" id="passwordConfirm" />
                <br />
        
                <input type='submit' />
              
                    

            </form>
             </div>
            }
            </div>
            </div>
    </div>)

}

export default Header