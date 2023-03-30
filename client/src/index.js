import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import {BrowserRouter} from 'react-router-dom'
import { ThemeProvider } from '@material-tailwind/react'
import './index.css'
import { Elements } from '@stripe/react-stripe-js'
import { loadStripe } from '@stripe/stripe-js'

const stripePromise= loadStripe('pk_test_51MTKZtAdCijzaWdM7uAcQjk0D0O0cm7N3urEryvD5DO2kYniJ5uKNPDoqGdUtuU4bQWkAGtWRNgmDJ4Zw84udlJw00Ko0TenWC')

// (async () => {
//   const {publishableKey} = await fetch('/config').then(r=>r.json())
// const stripePromise = loadStripe(`"${publishableKey}"`)


ReactDOM.createRoot(document.getElementById('root')).render(

  <BrowserRouter>
  <ThemeProvider>
    <Elements stripe = {stripePromise}>
    <App />
    </Elements>
  </ThemeProvider>
  </BrowserRouter>,
)
// }) ()