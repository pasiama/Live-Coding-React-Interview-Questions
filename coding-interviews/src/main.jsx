import { createRoot } from 'react-dom/client'
import {BrowserRouter, Routes, Route}  from 'react-router-dom'
import App from './App.jsx'
import SignIn from './components/SignIn.jsx'
import Home from './components/Home.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
   <Routes>
    <Route path='/' element={<App/>} />
    <Route path='/register' element={<SignIn/>}/>
    <Route path='/home' element={<Home/>}/>
   </Routes>
  </BrowserRouter>,
)
