import Message from "../user/Message"




function AdminChatLog  ({message}){

    function adminChatInteraction(){

    }



    return( <div onClick={adminChatInteraction} className="largeText brightRed"> <p>{message}</p> 
    
    </div>)
}

export default AdminChatLog