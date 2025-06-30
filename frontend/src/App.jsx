import React from 'react'
import ProxyReq from './components/proxyReq'
export const SERVER=import.meta.env.VITE_SERVER
const App = () => {
  return (
    <div className='bg-gray-100'>
      <h1 className='text-3xl text-center font-bold'>ProxyCloud</h1>
      <ProxyReq />
    </div>
  )
}

export default App