import express from "express";
import { createServer} from "node:http";
import { Server } from "socket.io";

const app = express();
const server = createServer(app);

const io = new Server(server, {
    cors: {
        origin: "*",
        //methods: ["GET", "POST"]
    }
})

server.listen(3000, () => {
    console.log('listening on *:3000');
});

io.on("connection", (socket) => {
    console.log("Nueva conexion")
    socket.emit("Hola desde el backend")
    socket.on("Hola desde angular", (data) => {
        console.log("recibi un mensaje custom", data)
    })
})