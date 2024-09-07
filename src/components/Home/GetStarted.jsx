import React from "react";
import { NavLink } from "react-router-dom";
function GetStarted() {
    return (
        <div>
            <p className="font-bold text-6xl md:text-8xl pb-20 md:pb-10">
                Get Started
            </p>
            <div className="flex flex-col md:gap-7 gap-20 justify-center">
                <NavLink to="/qrcodepage">
                    <div className=" hover:text-blue-500 hover:translate-x-1 transition ease-in">
                        <h1 className="md:text-7xl text-5xl">
                            Create Your First QR Code ->
                        </h1>
                    </div>
                </NavLink>
                <NavLink to="/construction">
                    <div className="hover:text-blue-500 hover:translate-x-1 transition ease-in">
                        <h1 className="md:text-7xl text-5xl">
                            Build Resume ->
                        </h1>
                    </div>
                </NavLink>
                <NavLink to="/construction">
                    <div className=" hover:text-blue-500 hover:translate-x-1 transition ease-in">
                        <h1 className="md:text-7xl text-5xl">
                            Explore More Tools ->
                        </h1>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default GetStarted;
