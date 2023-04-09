




function Message({message, admin, id}){

    function removeMessage(){
        fetch(`supports/${id}`,{method:"DELETE"})
    }

    return <div>
        <h3 className={`messages ${admin? "blue":"green"}`}>{message}</h3>
    </div>
}

export default Message