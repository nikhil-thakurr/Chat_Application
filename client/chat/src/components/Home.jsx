import React from 'react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import {io} from 'socket.io-client'

const Home = () => {
     
  const [socket,setsocket]=useState(null);
  const [message,setmessage]=useState("");
  const [msg,setmsg]=useState([]);
  const location = useLocation();

  const { name } = location.state || {};

  

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
      socketInstance.emit("user",name)
    })

    socketInstance.on('chat message',(message)=>{
        console.log(message)
        setmsg((prevMessage)=>[...prevMessage,message]);
    })

    socketInstance.on("user", (name) => {
        console.log(`${name} has joined`);
        setmsg((prevMessages) => [...prevMessages, `${name} has joined`]);

    });

    socketInstance.on("userLeft", (mssg) => {
        setmsg((prevMessages) => [...prevMessages, mssg])
      });
    return ()=>{
        socketInstance.off('chat message');
        socketInstance.disconnect();
    }
   
  }, [])
//   console.log(name,"sdsdsd")
  
  return (
    <div>
        
        <input value={message}onChange={(e) => setmessage(e.target.value)} className='border-2' />
        <button onClick={sendmessage}>send</button>

        <div className="border-2 h-max flex flex-col">
    {msg.map((m, index) => (
        <div key={index} className="mb-2">
            {m}
        </div>
    ))}
</div>

    </div>
  )
}

export default Home