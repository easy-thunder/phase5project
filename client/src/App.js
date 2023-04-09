import './App.css';


import { useState, useEffect } from "react";
import { Switch, Route} from "react-router-dom"
import Header from './no_user/Header';
import UserHeader from './user/UserHeader';
import Home from './no_user/home';
import UserHome from './user/UserHome';
import About from './no_user/About';
import Cart from './user/UserCart';
import AdminHome from './admin/adminHome';
import PurchaseForm from './user/PurchaseForm';
import MainImagesForm from './FormStuff/MainImagesForm';
import PageDetailsForm from './FormStuff/PageDetailsForm';
import ReviewAndSubmit from './FormStuff/ReviewAndSubmit';
import ViewUsers from './admin/viewUsers';
import Confirmation from './user/ConfirmationPage';




function App() {
  const [user, setUser] = useState(null);
  const [services, setServices] = useState([])
  const [cart, setCart] = useState([])
  const [monthlyCost, setMonthlyCost]= useState(0)
  const [startingCost, setStartingCost] = useState(0)
  const [dark, setDark] = useState(false)
  const [formCurrent, setFormCurrent]= useState({
    user
})
  const [events, setEvents]= useState([])
  const [scrollTop, setScrollTop] = useState(0);
  const [xMouse, setXMouse] = useState(0)
    const [yMouse, setYMouse] = useState(0)



  useEffect(
    () => {
   function update (e){
        setXMouse(e.clientX/16-1)
        setYMouse(e.clientY/16-5)
    }
    document.addEventListener('mousemove', update)
    return () => {
        document.removeEventListener('mousemove', update)
    }
    },
    [xMouse, yMouse]
    )

  useEffect(() => {
      const handleScroll = event => {
        setScrollTop(window.scrollY);
      };
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);



  useEffect(() => {
    
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => {
          setUser(()=>user)
          
          
          
        })
        
        ;
      }
    });
  }, [])

useEffect(()=>{
  if(user){
  setEvents(()=>user.events)
  setFormCurrent(()=>user)
  fetch(`/user_services/${user.id}`)
          .then(r=>{if(r.ok){r.json().then(cart=>setCart(()=>cart))
          }})
  }
},[user])


  useEffect(()=> {
    fetch(`/services`)
    .then(r=>{
      if(r.ok) {
        r.json().then(services => setServices(services))
      }
    });
  }, [])


function handleCart(service, pages){
  const userService = {
    user_id: user.id,
    service_id: service.id,
    name: service.name,
    initial_price: service.initial_price,
    recurring_price: service.recurring_price,
    subsequent_price: service.subsequent_price,
    description: service.description,
    details: service.details,
    pages: pages
}



  fetch(`/user_services`, {
    method: "POST",
    headers:{"Content-Type": "application/json"},
    body: JSON.stringify(userService)
  }).then(r=>{
    r.json().then(data=>setCart([...cart, data]))
  })
  fetch(`/users/${user.id}`,{method:"PATCH",
  headers:{"Content-Type": "application/json"},
  body: JSON.stringify()
})
}


const initialPricesInCart = cart.map(item=>item.initial_price)
const subsequentPricesInCart = cart.map(item=>item.subsequent_price*item.pages)
const recurringPriceInCart = cart.map(item=>item.recurring_price)

function calculateInitialPriceTotal(){
   const initialValue = 0;
   const initialPriceTotal = initialPricesInCart.reduce(
       (accumulator, currentValue) => accumulator + currentValue, initialValue
   )
   const subsequentPriceTotal = subsequentPricesInCart.reduce(
       (accumulator, currentValue) => accumulator + currentValue, initialValue
   )

const priceTotal= initialPriceTotal + subsequentPriceTotal
setStartingCost(priceTotal)
}

function calculateMonthlyPriceTotal(){
   const initialValue = 0;
   const recurringPriceTotal = recurringPriceInCart.reduce(
       (accumulator, currentValue) => accumulator + currentValue, initialValue
   )
   setMonthlyCost(recurringPriceTotal)
}

useEffect(()=>{
  calculateMonthlyPriceTotal()
  calculateInitialPriceTotal()
},[cart]) // eslint-disable-line react-hooks/exhaustive-deps



function turnOffDark(){
  if(dark===true){
  setDark(false)}
}







  return (
    <div className={`app ${dark? "dark": null} blackFadeToWhite `} onClick={turnOffDark}>

{/* <div
        style={{
          position: 'fixed',
          padding: '10px 0',
          bottom: '0',
          backgroundColor: 'white',
          borderBottom: '3px solid black',
          width: '100%',
          color: "red",
          zIndex: 100
        }}
      >
        <h2>Scroll: {scrollTop} MX: {xMouse} MY:{yMouse}</h2>
        
      </div> */}

    { user ? 
    <div>
    <UserHeader setEvents={setEvents} scrollTop={scrollTop} user={user} setUser={setUser} setCart={setCart} setFormCurrent={setFormCurrent}/>
        <Switch>
        <Route exact path ={`/reviewAndSubmit/${user.id}`}>
          <ReviewAndSubmit user={user} events={events} formCurrent={formCurrent} setEvents={setEvents} startingCost={startingCost} monthlyCost={monthlyCost} />
        </Route>

        <Route exact path = {`/confirm`} >
        <Confirmation user={user} setCart={setCart} cart={cart} />
      </Route>

      <Route exact path = {`/admin/pasjdpofjaslkdjfp9wijef9foilkdfw`} >
        <AdminHome user={user} setServices = {setServices} services = {services}/>
      </Route>
      <Route exact path = '/admin/lakwsjsd9fpaoisjdfijjajsldkdjflasdfjkhaksiddf'>
        <ViewUsers user={user} />
      </Route>



          <Route exact path = {`/pageDetails/${user.id}`}>
            <PageDetailsForm            
            user={user} events={events} setEvents={setEvents} formCurrent={formCurrent} setFormCurrent={setFormCurrent}  />
          </Route>

      <Route exact path = {`/mainImages/${user.id}`}>
      <MainImagesForm formCurrent={formCurrent} setFormCurrent={setFormCurrent} setCart={setCart} user={user} setDark={setDark} events={events} setEvents={setEvents}/>
      </Route>
      <Route exact path = {`/`}>
        <UserHome setUser={setUser} scrollTop={scrollTop} services = {services} handleCart={handleCart} setCart={setCart} cart={cart} events={events} setEvents={setEvents} startingCost={startingCost} monthlyCost={monthlyCost} user={user} setDark={setDark} setFormCurrent={setFormCurrent} formCurrent={formCurrent}/>
      </Route>

      {/* <Route exact path ={`/purchaseForm`}>
        <PurchaseForm startingCost={startingCost} monthlyCost={monthlyCost} setCart={setCart} user={user} setDark={setDark} setFormCurrent={setFormCurrent} formCurrent={formCurrent} setUser={setUser}/>
      </Route> */}

      <Route exact path ={`/about`}>
      <About />
      </Route>

      <Route exact path ={`/cart/${user.id}`}>
      <Cart user={user} cart={cart} setCart={setCart} monthlyCost={monthlyCost} startingCost={startingCost}/>
      </Route>


        </Switch>
    </div>



    :

    <div>
    <Header setUser={setUser} scrollTop={scrollTop}/>
      <Switch>

      <Route exact path = "/" >
        <Home services = {services} xMouse={xMouse} yMouse={yMouse} scrollTop={scrollTop} />
      </Route>

      <Route exact path ={`/about`}>
      <About />
      </Route>




      </Switch>
    </div>
    }
    </div>
  );
}

export default App;