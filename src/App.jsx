import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header'
import Footer from './Components/Footer'
import PhotoList from './List/Phots'
import Photogallary from './List/MainContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
// import About from './List/about'
import Contact from './List/Contact'
import { store } from './Components/State/Store'
import AboutRedux from './Components/About'
import { Provider } from 'react-redux'



function App() {
  return <>
  <Provider store={store}>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Photogallary />} />
        <Route path="/about" element={<AboutRedux />}> </Route>
         <Route path="/contact"  element={<Contact />}> </Route> 
      </Routes>
    </BrowserRouter>
    </Provider>
  </>
}
export default App;
