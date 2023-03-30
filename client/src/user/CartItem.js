function CartItem({itemObject, item, handleChange}){
    
function deleteCartItem(){
fetch(`/user_services/${itemObject.id}`,{method:"DELETE"})
.then(r=>{if(r.ok){r.json().then(handleChange())}})
}

    return(<div className="whiteText margin relative cardService" style={{
        backgroundImage: `url(${item.poster_url})`,
    backgroundSize: `cover`
}
    }>
        <h2 className="largeText darkBG">{item.name}</h2>
        {itemObject.pages? <h3 className="darkBG">{itemObject.pages} pages</h3>: null}
        <h3 className="darkBG">starting price:{item.initial_price}$</h3>

        {item.recurring_price? <h3 className="darkBG">monthly server fee:{item.recurring_price}$</h3>:null}


        {item.subsequent_price ? <h3 className="darkBG">subsequent_page price:{item.subsequent_price}$</h3>:null}
        <h3 className="darkBG">{item.description}</h3>
        <h3 className="darkBG">{item.details}</h3>
        <button className="darkBG" onClick={deleteCartItem}>delete</button>
        

    </div>)
}


export default CartItem