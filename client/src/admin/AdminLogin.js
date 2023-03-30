


function AdminLogin(){

    function newAdmin(e){
        e.preventDefault()
        fetch('/admins',
        {method:"POST", 
        headers:{"Content-Type":"application/json"},
        body: JSON.stringify({
            key: e.target.passKey.value,
            password: e.target.password.value, 
            email: e.target.email.value
        })
    })
    }
    function signIn(e){
        e.preventDefault()
        fetch(`/admins/${e.target.email.value}/${e.target.password.value}`
        ).then(r=>r.json()).then(data=>console.log(data))

    }




    return(
        <>
        <form onSubmit={newAdmin} className="marginTopSome">
            <label>signUP</label>
            <input type='email' id="email" placeholder="email" />
            <input type="password" id="password" placeholder="password"/>
            <input type='password' id="passKey" placeholder="passKey"/>
            <input type='submit' className="pointer" />
        </form>
        <br />
        <form onSubmit={signIn}>
            <label>signIn</label>
            <input type="email" id="email" placeholder="email"/>
            <input type="password" id="password" placeholder="password"/>
            <input type='submit' className="pointer"/>
        </form>

        </>
    )
}
export default AdminLogin