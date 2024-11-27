import { Input } from 'postcss';
import React from 'react'
import { useEffect, useState } from 'react'
import {io} from 'socket.io-client'

const Home = () => {
     
  const [socket,setsocket]=useState(null);
  const [message,setmessage]=useState();

  const sendmessage=()=>{
   if(socket ){
    socket.emit("chat",message)
   }
  }

  useEffect(() => {
    const socketInstance = io('http://localhost:3000')
    setsocket(socketInstance);

    socketInstance.on("connect",()=>{
      console.log("connected  the server")
    })

   
  }, [])
  
  return (
    <div>
        
        <input value={message}onChange={(e) => setmessage(e.target.value)} className='border-2' />
        <button onClick={sendmessage}>send</button>

        <div className='border-2 h-max'>
            {message}

        </div>

    </div>
  )
}

export default Home