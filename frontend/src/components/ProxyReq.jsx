import axios from 'axios'
import React, { useState } from 'react'
import { SERVER } from '../App'

const ProxyReq = () => {
    const [url, setURL] = useState('')
    const [Reqdata, setReqData] = useState(null)
    const[loading,setLoading]=useState(false)

    const handleUrl = (e) => {
        setURL(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setLoading(!loading)
        try {
            const res = await axios.post(SERVER + `/proxy`, { url })
            console.log(res)
            setReqData(res.data)
            setLoading(!loading)
        } catch (err) {
            setReqData({ error: err.message })
        }
    }

    const handleSave=async()=>{
        try {
            const res=await axios.post(SERVER+`/saveReq`,{username:'sudhir',req_metadata:Reqdata.metadata})
            console.log(res)    
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mb-8">
                <h1 className="text-xl font-semibold text-center text-gray-800 mb-4">Proxy Request</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <input
                        type="text"
                        value={url}
                        onChange={handleUrl}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="https://example.com"
                    />
                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition duration-200"
                    >
                        Submit
                    </button>
                </form>
            </div>
            <div className="flex gap-3 p-6 w-5xl">
                <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl overflow-auto">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">Response:</h2>
                    <div className="bg-gray-100 text-sm text-left rounded-lg p-4 max-h-96 overflow-y-auto whitespace-pre-wrap break-words">
                        {Reqdata ? (
                            <pre>{JSON.stringify(Reqdata.reqdata, null, 2)}</pre>
                        ) : (
                            <p className="text-gray-500">{loading ?"loading.." : "No response yet."}</p>
                        )}
                    </div>
                </div>
                <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-3xl overflow-auto">
                    <div className='flex flex-row justify-between'>
                        <h2 className="text-lg font-semibold text-gray-800 mb-2">Response Meta-Data:</h2>
                        <button 
                            className='bg-green-500 p-3 rounded-xl mb-2 w-24 h-fit hover:bg-green-400'
                            onClick={handleSave}
                        >
                            Save
                        </button>
                    </div>
                    <div className="bg-gray-100 text-sm text-left rounded-lg p-4 max-h-96 overflow-y-auto whitespace-pre-wrap break-words">
                        {Reqdata ? (
                            <pre>{JSON.stringify(Reqdata.metadata, null, 2)}</pre>
                        ) : (
                            <p className="text-gray-500">{loading ?"loading.." : "No response yet."}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProxyReq
