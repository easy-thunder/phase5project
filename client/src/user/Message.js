




function Message({message, admin, id}){

    function removeMessage(){
        fetch(`supports/${id}`,{method:"DELETE"})
    }

    return <div>
        <h3 onClick={removeMessage} className={`messages pointer ${admin? "blue":"green"}`}>{message}</h3>
    </div>
}

export default Message