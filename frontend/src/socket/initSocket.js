import { toast } from "react-toastify";
import { receiveNotification } from "../features/notifications/notificationSlice";
import { connectSocket } from "./socket";

export const initSocket = (dispatch, userId) => {
    const socket = connectSocket(userId);

    // socket.on("connect", () => {
    //     console.log("Connected with ID:", socket.id);
    // });

    socket.on("newNotification", (notification) => {
        dispatch(receiveNotification(notification));

        // Show toast
        toast(notification.message || "You have a new notification!", {
            type: "info",
            icon: "🔔",
        });
    });
};