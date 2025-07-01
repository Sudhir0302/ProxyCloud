import React from 'react'
import ProxyReq from './components/ProxyReq'
import Login from './pages/Login'
import {Route,Routes } from 'react-router-dom'
export const SERVER=import.meta.env.VITE_SERVER

const Home=()=>{
  return(
    <div className='bg-gray-100'>
      <h1 className='text-3xl text-center font-bold'>ProxyCloud</h1>
      <ProxyReq />
    </div>
  )
}
const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>} />
        <Route path='/proxy' element={<Home/>} />
    </Routes>
  )
}

export default App