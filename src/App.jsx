
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './components/Home'
import Register from './components/Register'
import Edit from './components/Edit'
import Detail from './components/Detail'
import axios from 'axios';
import {Toaster} from 'react-hot-toast'


axios.defaults.baseURL = "https://sanjay-backend-crud.onrender.com";
axios.defaults.withCredentials = true;

function App() {

  return (

    <BrowserRouter>
    {/* <Navbar/> */}
    <Toaster position='bottom-right' toastOptions={{duration:3000}}/> 
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/register' element={<Register/>} />
      <Route path='/edit/:id' element={<Edit/>} />
      <Route path='/view/:id' element={<Detail/>} />

    </Routes>
    </BrowserRouter>

  )
}

export default App
