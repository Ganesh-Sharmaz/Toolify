import { duration } from "@mui/material";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const LoginNotification = () => {

    

    const notify = () => toast.success("Logged in successfully", { duration: 7000 });
    
    useEffect(() => {
        console.log("Login Notification is rendered and processing");
        const isLoggedIn = localStorage.getItem("loggedIn");
        const person = localStorage.getItem("person")
        const welcome = () => toast(`Welcome, ${person}`, {
            duration: 7000 ,
            icon: "👋",
        })
        // console.log(person)
        console.log(isLoggedIn);
        if (isLoggedIn != null && person != null) {
            console.log(
                "Working in notification"
            );
            
            notify();
            welcome();
            localStorage.removeItem("loggedIn");
            
            
        }
    }, []);
    return <Toaster
    position="bottom-right"
    />;
};

export default LoginNotification;
