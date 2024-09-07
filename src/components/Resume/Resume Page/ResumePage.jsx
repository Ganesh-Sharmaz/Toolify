import React from "react";
import { useState } from "react";
import { Check, Close } from "@mui/icons-material";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

function ResumePage() {
    const [isVisible, setIsVisible] = useState(true);

    const closeDiv = () => {
        setIsVisible(false);
    };
    return (
        <div className=" h-fit bg-white text-text2 w-full flex flex-col font-grotesk item-center">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className=" w-full flex justify-center"
            >
                {isVisible && (
                    <div className="relative mt-3 shadow hover:shadow-md hover:-translate-y-[2px] transition-all ease-in-out w-[1000px] rounded-lg flex font-inter flex-col items-center justify-center text-text2 p-5 pb-10">
                        <p className=" animate-load text-[18px] font-bold">
                            No Ads here 🤗
                        </p>
                        <p className="  text-[16px] flex">
                            Instead, you can give us a
                            <p className="pl-1 font-semibold text-[#30a1c3] hover:text-title2 cursor-pointer">
                                share on Instagram
                            </p>
                        </p>
                        <button
                            className=" absolute top-0 right-0 mt-1 mr-4 rounded-full hover:bg-[#eef0f1]"
                            onClick={closeDiv}
                        >
                            <Close />
                        </button>
                    </div>
                )}
            </motion.div>

            <motion.div className=" h-[450px]  mt-20 md:mb-32 md:mx-10  md:flex justify-evenly md:space-x-5">
                <NavLink to="/construction" className=" hover:shadow-lg hover:scale-[1.01] group  transition ease-in-out  md:w-[600px] bg-[#eae8e8] hover:bg-[#f1f1f1] flex flex-col cursor-pointer p-5 rounded-2xl">
                <div
                    
                    
                >
                    <h1 className="   text-7xl font-bold outline-none select-none  ">
                        Build Resume
                    </h1>
                    <section className=" transition ease-in-out  pt-10 space-y-5 select-none">
                        <h2 className="text-5xl">ATS-Friendly ✅</h2>

                        <h2 className="text-5xl">Customizable ✅</h2>

                        <h2 className="text-5xl">Simple ✅</h2>
                    </section>
                </div>
                </NavLink>
                <NavLink to="ats-checker" className=" hover:bg-[#f1f1f1] h-[450px] hover:shadow-lg hover:scale-[1.01] group transition ease-in-out bg-[#eae8e8]  md:w-[600px] flex flex-col cursor-pointer p-5 select-none rounded-2xl">
                <div >
                    <h1 className=" transition ease-in-out text-7xl font-bold outline-none select-none  ">
                        Resume Checker
                    </h1>
                    <section className="pt-10 space-y-5 select-none">
                        <h2 className="text-5xl">ATS-Compatibility ✅</h2>

                        <h2 className="text-5xl">Instant Feedback ✅</h2>

                        <h2 className="text-5xl">Higher Success ✅</h2>
                    </section>
                </div>
                </NavLink>
            </motion.div>
        </div>
    );
}

export default ResumePage;
