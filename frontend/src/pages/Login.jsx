import axios from 'axios';
import React, { useState } from 'react'
import { SERVER } from '../App';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate=useNavigate();
    const[username,setUsername]=useState('');
    const[password,setPassword]=useState('');
    const[error,setError]=useState('');

    const handleLogin=async(e)=>{
        e.preventDefault()
        try {
            const res=await axios.post(SERVER+`/login`,{username:username,password:password})
            console.log(res);
            if(res){
                navigate('/proxy')
            }else{
                throw new Error(res);
            }
        } catch (err) {
            setError(err.message);
        }
        setUsername('')
        setPassword('')
    }

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-400">
      <div className="bg-gray-500 text-white w-96 p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
        <form className="space-y-4" onSubmit={handleLogin}>
          <div>
            <label className="block mb-1">Username</label>
            <input
              value={username}
              onChange={(e)=>setUsername(e.target.value)}
              type="text"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter username"
              />
          </div>
          <div>
            <label className="block mb-1">Password</label>
            <input
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
              type="password"
              className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-white"
              placeholder="Enter password"
              autoComplete='true'
            />
          </div>
          <button
            className="w-full bg-blue-400 hover:bg-blue-500 text-white py-2 rounded-lg transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
