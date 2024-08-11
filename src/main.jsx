import React from 'react'
import ReactDOM from 'react-dom/client'
import {NextUIProvider} from '@nextui-org/react'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import QRCodePage from './components/QRCode/QRCodePage.jsx'
import SignUp from './components/SignUp/SignUp.jsx'
import { Provider } from 'react-redux'
import store from "./app/store.js"
import Login from './components/Login/Login.jsx'
import ForgotPassword from './components/ForgotPassword/ForgotPassword.jsx'
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx'
import Dynamic from './components/Dynamic/Dynamic.jsx'
import Variants from './components/Variants/Variants.jsx'




const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route path='qrcodepage' element={<QRCodePage/>}/>
      <Route path='dynamic' element={
        <PrivateRoute>
          <Dynamic/>
        </PrivateRoute>
      }
      />
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='signup' element={<SignUp/>}/>
      <Route path='login' element={<Login/>}/>
      <Route path='variants' element={<Variants/>}/>      
      
      
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <NextUIProvider>
    < RouterProvider router = {router}/>
    </NextUIProvider>
    </Provider>
    
    
  </React.StrictMode>,
)
