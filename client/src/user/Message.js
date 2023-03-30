




function Message({message, admin, id}){

    function removeMessage(){
        fetch(`supports/${id}`,{method:"DELETE"})
    }

    return <div>
        <h3 className={admin? "blue":"green"}>{message}</h3>
        <button onClick={removeMessage}>delete</button>
    </div>
}

export default Message