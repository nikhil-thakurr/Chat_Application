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
    })
})


server.listen(3000,()=>{
    console.log("Server is running")
})