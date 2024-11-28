const express = require('express');
const app = express();
const http = require('http');

const server = http.createServer(app);
const { Server } = require("socket.io");
const io= new Server(server);
var cors = require('cors')

app.use(cors())


io.on("connection",(socket)=>{
    console.log("A User Connected");
    // socket.on('disconnect', () => {
    //     console.log('user disconnected');
    //   });

    socket.on("chat",(message)=>{
        console.log("The message is : ",message)

        io.emit('chat message', message);
   

    })

    socket.on("user",(name)=>{
        console.log(name ," has Joined")
        socket.data.name = name; 
        io.emit("user",name);
    })

    socket.on("disconnect", () => {
        const name = socket.data.name || "A user";
        console.log(`${name} has left`);
        io.emit("userLeft", `${name} has left`); // Notify all clients
    });
})


server.listen(3000,()=>{
    console.log("Server is running")
})