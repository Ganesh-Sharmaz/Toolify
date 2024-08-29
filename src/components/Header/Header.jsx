import {  QrCode } from "@mui/icons-material";
import { Fade, Tooltip, Zoom } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import Login from "../Login/Login.jsx";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

function Header() {

    const [userName, setUserName] = useState('')
    const [isLoggedin, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLog") === 'true'
        const storedUserName = localStorage.getItem('person')
        console.log(storedUserName)
        console.log(loggedInStatus)

        setIsLoggedIn(loggedInStatus);
        setUserName(storedUserName || '');
        console.log(userName, isLoggedin)
    },[isLoggedin,userName])

    
    
    const auth = getAuth();
    // const isLoggedIn = () => {
    //     const person = localStorage.getItem("person")
    //     // console.log(person)
    //     return person ? true : false
    // }

    // useEffect(() => {
        
    //     isLoggedIn()
    // }, []);
    
    



    return (
        <div className="  font-inter px-10 h-fit pb-2 md:h-fit md:pt-1 bg-background2 text-black  md:flex md:flex-row md:items-center md:justify-between shadow flex flex-col items-center gap-2">
            <div>
                <div className="text-[60px] font-inter text-title2 font-bold flex   ">
                    Toolify
                </div>
               
            </div>
            <div className=" p-2 w-fit    outline-blue-700 shadow rounded-full">
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                `  ${isActive ? " text-blue-400 " : "text-icon"}`
                            }
                            to="/qrcodepage"
                        >
                            <Tooltip
                                title="QR Code"
                                arrow
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 300 }}
                            >
                                <QrCode />
                            </Tooltip>
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className=" py-1 md:py-0 hidden md:block ">
                <ul className="text-[16px] text-air-h4 font-medium flex items-center gap-3 justify-center">
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                ` hover:text-blue-400 text-[16px]  hover:ring-2 p-1 px-2 rounded-full  transition-all   ${
                                    isActive ? "text-blue-600 ring-2 ring-blue-600 " : "text-text1"
                                }`
                            }
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/contact"
                            className={({ isActive }) =>
                                `hover:text-blue-400 p-1 px-2 rounded-full hover:ring-2 hover:ring-blue-400 transition-all ${isActive ? "text-blue-600 ring-2 ring-blue-600" : "text-text1"}`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        {
                            isLoggedin ? (<p className="text-text2">{userName}</p>) : (<Login>Log in</Login>)
                        }
                        
                    </li>
                    
                </ul>
            </div>
        </div>
    );
}

export default Header;
