import { QrCode } from "@mui/icons-material";
import { Fade, Tooltip, Zoom } from "@mui/material";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
    return (
        <div className=" font-poppins px-10 h-fit pb-2 md:h-fit md:pt-2 bg-airbnb md:flex md:flex-row md:items-center md:justify-between shadow flex flex-col items-center gap-2">
            <div>
                <div className="text-[38px] font-poppins font-bold text-air-title border-4 flex p-1 w-[350px] border-white scale-90 ">
                    <div className="w-1/2 flex justify-center items-center text-airbnb bg-white">
                        TOOL
                    </div>
                    <div className="w-1/2 flex justify-center items-center text-white">
                        STUDIO
                    </div>
                </div>
               
            </div>
            <div className=" p-2 w-fit bg-airbnb-footer rounded-full">
                <ul>
                    <li>
                        <NavLink
                            className={({ isActive }) =>
                                `${isActive ? "text-orange-400" : "text-white"}`
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
                <ul className="text-[16px] text-air-h4 flex items-center gap-8 justify-center">
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) =>
                                ` hover:text-orange-400 ${
                                    isActive ? "text-orange-400" : "text-white"
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
                                `${isActive ? "text-orange-400" : "text-white"}`
                            }
                        >
                            Contact Us
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Header;
