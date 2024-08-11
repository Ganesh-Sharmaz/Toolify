import { duration } from "@mui/material";
import React, { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginNotification = () => {
    const notify = () => toast.success("Logged in successfully", { duration: 5000 });
    useEffect(() => {
        console.log("Login Notification is rendered and processing");
        const isLoggedIn = localStorage.getItem("loggedIn");
        console.log(isLoggedIn);
        if (isLoggedIn) {
            notify();
            localStorage.removeItem("loggedIn");
        }
    }, []);
    return <Toaster
    position="top-right"
    />;
};

export default LoginNotification;
