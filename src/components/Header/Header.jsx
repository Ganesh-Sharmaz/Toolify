import { QrCode } from "@mui/icons-material";
import { Fade, Tooltip, Zoom } from "@mui/material";
import React from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Login from "../Login/Login.jsx";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";
// import {ReactComponent as ResumeIcon} from "./tool-svgrepo-com.svg"

function Header() {
    const [userName, setUserName] = useState("");
    const [isLoggedin, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loggedInStatus = localStorage.getItem("isLog") === "true";
        const storedUserName = localStorage.getItem("person");
        console.log(storedUserName);
        console.log(loggedInStatus);

        setIsLoggedIn(loggedInStatus);
        setUserName(storedUserName || "");
        console.log(userName, isLoggedin);
    }, [isLoggedin, userName]);

    const auth = getAuth();
    // const isLoggedIn = () => {
    //     const person = localStorage.getItem("person")
    //     // console.log(person)
    //     return person ? true : false
    // }

    // useEffect(() => {

    //     isLoggedIn()
    // }, []);

    const navigate = useNavigate()

    const handleHome = () => {
        navigate("")
    }


    return (
        <div className="  w-full font-inter md:px-10 h-fit pb-2 md:h-fit md:pt-1 bg-background2 text-black  md:flex md:flex-row md:items-center md:justify-between shadow flex flex-col items-center gap-2">
            <div>
                <div onClick={handleHome} className=" cursor-pointer text-[70px] font-inter font-bold text-title2  flex   ">
                    <img
                        className=" w-[77px] px-3"
                        src="/src/assets/tool-svgrepo-com (1).svg"
                        alt=""
                    />
                    Toolify
                </div>
            </div>
            <div className=" scale-110 p-2 w-fit flex    outline-blue-700 shadow rounded-full">
                <ul className="flex gap-2 items-center justify-center">
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                `  ${isActive ? " text-icon " : "text-text2"}`
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

                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                ` hover:text-icon  ${isActive ? " text-icon " : "text-text2"}`
                            }
                            to="/construction"
                        >
                            <Tooltip
                                title="Resume Builder"
                                arrow
                                TransitionComponent={Zoom}
                                TransitionProps={{ timeout: 300 }}
                            >
                                <svg
          className="w-[24px] font-extrabold"
          version="1.1" id="_x32_"
          viewBox="0 0 512 512"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: 'currentColor',
          }}
        >
          <path  d="M276.239,252.183c-6.37,2.127-13.165,3.308-20.239,3.308c-7.074,0-13.87-1.181-20.24-3.308
		c-46.272,7.599-70.489,41.608-70.489,82.877H256h90.728C346.728,293.791,322.515,259.782,276.239,252.183z"/>
	<path d="M256,240.788c27.43,0,49.658-22.24,49.658-49.666v-14.087c0-27.426-22.228-49.659-49.658-49.659
		c-27.43,0-49.658,22.233-49.658,49.659v14.087C206.342,218.548,228.57,240.788,256,240.788z"/>
	<path  d="M378.4,0H133.582C86.234,0,47.7,38.542,47.7,85.899v340.22C47.7,473.476,86.234,512,133.582,512h205.695
		h13.175l9.318-9.301l93.229-93.229l9.301-9.31v-13.174V85.899C464.3,38.542,425.766,0,378.4,0z M432.497,386.985H384.35
		c-24.882,0-45.074,20.183-45.074,45.073v48.139H133.582c-29.866,0-54.078-24.221-54.078-54.078V85.899
		c0-29.874,24.212-54.096,54.078-54.096H378.4c29.876,0,54.096,24.222,54.096,54.096V386.985z"/>
        </svg>
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
                                    isActive
                                        ? "text-blue-600 ring-2 ring-blue-600 "
                                        : "text-text1"
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
                                `hover:text-blue-400 p-1 px-2 rounded-full hover:ring-2 hover:ring-blue-400 transition-all ${
                                    isActive
                                        ? "text-blue-600 ring-2 ring-blue-600"
                                        : "text-text1"
                                }`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                    <li>
                        {isLoggedin ? (
                            <p className="text-text2">{userName}</p>
                        ) : (
                            <Login>Log in</Login>
                        )}
                    </li>
                </ul>
            </div>
        </div>
    
    );
}

export default Header;
