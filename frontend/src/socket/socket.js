// socket/socket.ts
import { io } from "socket.io-client";

let socket;

export const connectSocket = (userId) => {
  socket = io("http://localhost:3000", {
    query: { userId },
    withCredentials: true,
  });

  return socket;
};

export const getSocket = () => socket;
