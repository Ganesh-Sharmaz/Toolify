import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Testimonials from "./Testimonials.jsx";
import GetStarted from "./GetStarted.jsx";
import Reason from "./Reason.jsx";
import Services from "./Services.jsx";
import FrontPage from "./FrontPage.jsx";

function Home() {
    return (
        <div className="md:w-full px-5 font-inter bg-white md:px-10">

            {/* Front Page starts here */}

            <FrontPage/>

            {/* Front Page ends here */}

            {/* Our Services page starts here */}

            <div className=" w-full h-fit py-10 border-b-1 font-grotesk  text-text2">
                <Services/>
            </div>

            {/* Our Services page ends here */}

            <div className=" border-b-1 md:py-10 py-5 space-y-2 font-amster text-6xl md:text-[65px] text-blue-500 text-pretty  w-full items-center justify-center">
                <p>We're cooking up more features! Our devs are all in 🧑‍💻💪 </p>
                <p>( sacrificing their binge-watching habits for now )</p>
            </div>

            {/* Choosing Toolify page starts here */}

            <div className="w-full h-fit md:py-10 py-5 text-text2 font-grotesk border-b-1 ">
                <Reason />
            </div>

            {/* Choosing toolify page ends here */}

            {/* Get Started page starts here */}

            <div className="w-full h-screen py-10 text-text2 font-grotesk border-b-1 ">
                <GetStarted />
            </div>

            {/* Get Started page ends here */}

            {/* Testimonials starts here */}

            <div className="w-full flex flex-col h-fit md:h-screen py-10 text-text2 font-grotesk border-b-1 ">
                <Testimonials />
            </div>

            {/* Testimonials ends here */}
        </div>
    );
}

export default Home;
