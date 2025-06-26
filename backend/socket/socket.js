import { Server } from 'socket.io';
import express from "express";
import http from "http";
import cors from 'cors';

const app = express();


const corsOptions = {
    origin: 'https://echohive-frontend.onrender.com',
    credentials: true,
}

const server = http.createServer(app);

app.use(cors(corsOptions));

const io = new Server(server, {
    cors: {
        origin: 'https://echohive-frontend.onrender.com',
        methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
        credentials: true, // ADD THIS if you want cookies there too
        allowedHeaders: ['Content-Type', 'Authorization'], // Required for credentials
        optionsSuccessStatus: 200 // Legacy browsers choke on 204
    }
})

export const userSocketMap = {} // this map stores socket id corresponding the user id; userId --> socketId

io.on('connection', (socket) => {
    const userId = socket.handshake.query.userId;

    if (userId) {
        userSocketMap[userId] = socket.id;
        console.log(`User connected: UserId = ${userId}, SocketId = ${socket.id}`);
    }

    socket.on('disconnect', () => {
        if (userId) {
            console.log(`User disconnected: UserId = ${userId}, SocketId = ${socket.id}`);
            delete userSocketMap[userId];
        }
    })
})

export { app, server, io };