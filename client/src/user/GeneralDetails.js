


function GeneralDetails({user}){
    console.log(user)
    return(<div>
        <p>test</p>
        <p>{user.site_name}</p>
        <p>{user.phone}</p>
        <p>{user.url1}</p>
        <p>{user.url2}</p>
        <p>{user.url3}</p>
        <p>{user.api}</p>
        <p>{user.additional_form_details}</p>
    
    </div>)
}


export default GeneralDetails