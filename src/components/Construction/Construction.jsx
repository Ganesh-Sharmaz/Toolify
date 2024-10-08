// import React, from "react";
import ComingSoon from "./ComingSoon";
import { useState } from "react";
import { Close, Download, GitHub } from "@mui/icons-material";
import Marquee from "react-fast-marquee";
import {motion} from "framer-motion"

function Construction() {
    const [isVisible, setIsVisible] = useState(true);

    const closeDiv = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div className="flex flex-col text-text2 bg-white font-poppins font-bold  text-2xl">
                <Marquee pauseOnHover className="">
                    <div className="w-full gap-12 flex overflow-hidden text-pretty">
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                    </div>
                </Marquee>
                <Marquee direction="right" pauseOnHover className="">
                    <div className="w-full gap-14 flex overflow-hidden text-pretty">
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                        <div>Coming soon</div>
                    </div>
                </Marquee>
                <div
                    className=" bg-white md:h-screen w-full flex md:flex-row flex-col-reverse
                 md:justify-start   "
                >
                    {/* <ComingSoon /> */}

                    <div className=" px-5 md:px-0 md:pl-10 text-text2 w-full md:flex md:justify-center bg-[#ffffff] md:pt-[px] ">
                        <div className=" relative  flex md:flex-col text-pretty">
                            <div className="">
                                <p className="md:pt-9 pb-2 text-6xl md:text-[100px] md:h-[140px] font-inter font-bold">
                                    Whoops! 🙂‍↕️
                                </p>

                                <p className="md:text-7xl text-4xl font-medium font-amster">
                                    Our developer is currently
                                </p>
                                <p className="md:text-7xl text-4xl w-fit font-medium font-amster">
                                    binge-watching instead of coding. Please be
                                    patient!
                                </p>
                                <p className="md:text-3xl text-5xl  text-pretty font-amster text-blue-500">
                                    but hey, if you're a developer feel free to
                                    contribute 🤗
                                </p>
                                <motion.a
                                    initial={{ opacity: 0, x:200 }}
                                    whileInView={{ opacity: 1, x:0 }}
                                    transition={{ duration:1, }}
                                    href="#"
                                    className=" w-full flex justify-center pt-5 pb-2 scale-125 md:hidden"
                                >
                                    <GitHub fontSize="large" />
                                </motion.a>
                            </div>
                            <img
                                className="hidden md:flex animate-spinOnce absolute bottom-52 right-44 w-[200px]"
                                src="/src/assets/pngwing.com.png"
                                alt=""
                            />
                            <div className="absolute md:block hidden    bottom-36 right-44 animate-bounce delay-300 cursor-pointer">
                                <svg
                                    className="w-[50px] fill-black  hover:fill-blue-500 hover:text-blue-500  font-extrabold"
                                    version="1.1"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M4.0744 2.9938C4.13263 1.96371 4.37869 1.51577 5.08432 1.15606C5.84357 0.768899 7.04106 0.949072 8.45014 1.66261C9.05706 1.97009 9.11886 1.97635 10.1825 1.83998C11.5963 1.65865 13.4164 1.65929 14.7213 1.84164C15.7081 1.97954 15.7729 1.97265 16.3813 1.66453C18.3814 0.651679 19.9605 0.71795 20.5323 1.8387C20.8177 2.39812 20.8707 3.84971 20.6494 5.04695C20.5267 5.71069 20.5397 5.79356 20.8353 6.22912C22.915 9.29385 21.4165 14.2616 17.8528 16.1155C17.5801 16.2574 17.3503 16.3452 17.163 16.4167C16.5879 16.6363 16.4133 16.703 16.6247 17.7138C16.7265 18.2 16.8491 19.4088 16.8973 20.4002C16.9844 22.1922 16.9831 22.2047 16.6688 22.5703C16.241 23.0676 15.6244 23.076 15.2066 22.5902C14.9341 22.2734 14.9075 22.1238 14.9075 20.9015C14.9075 19.0952 14.7095 17.8946 14.2417 16.8658C13.6854 15.6415 14.0978 15.185 15.37 14.9114C17.1383 14.531 18.5194 13.4397 19.2892 11.8146C20.0211 10.2698 20.1314 8.13501 18.8082 6.83668C18.4319 6.3895 18.4057 5.98446 18.6744 4.76309C18.7748 4.3066 18.859 3.71768 18.8615 3.45425C18.8653 3.03823 18.8274 2.97541 18.5719 2.97541C18.4102 2.97541 17.7924 3.21062 17.1992 3.49805L16.2524 3.95695C16.1663 3.99866 16.07 4.0147 15.975 4.0038C13.5675 3.72746 11.2799 3.72319 8.86062 4.00488C8.76526 4.01598 8.66853 3.99994 8.58215 3.95802L7.63585 3.49882C7.04259 3.21087 6.42482 2.97541 6.26317 2.97541C5.88941 2.97541 5.88379 3.25135 6.22447 4.89078C6.43258 5.89203 6.57262 6.11513 5.97101 6.91572C5.06925 8.11576 4.844 9.60592 5.32757 11.1716C5.93704 13.1446 7.4295 14.4775 9.52773 14.9222C10.7926 15.1903 11.1232 15.5401 10.6402 16.9905C10.26 18.1319 10.0196 18.4261 9.46707 18.4261C8.72365 18.4261 8.25796 17.7821 8.51424 17.1082C8.62712 16.8112 8.59354 16.7795 7.89711 16.5255C5.77117 15.7504 4.14514 14.0131 3.40172 11.7223C2.82711 9.95184 3.07994 7.64739 4.00175 6.25453C4.31561 5.78028 4.32047 5.74006 4.174 4.83217C4.09113 4.31822 4.04631 3.49103 4.0744 2.9938Z" />
                                    <path d="M3.33203 15.9454C3.02568 15.4859 2.40481 15.3617 1.94528 15.6681C1.48576 15.9744 1.36158 16.5953 1.66793 17.0548C1.8941 17.3941 2.16467 17.6728 2.39444 17.9025C2.4368 17.9449 2.47796 17.9858 2.51815 18.0257C2.71062 18.2169 2.88056 18.3857 3.05124 18.5861C3.42875 19.0292 3.80536 19.626 4.0194 20.6962C4.11474 21.1729 4.45739 21.4297 4.64725 21.5419C4.85315 21.6635 5.07812 21.7352 5.26325 21.7819C5.64196 21.8774 6.10169 21.927 6.53799 21.9559C7.01695 21.9877 7.53592 21.998 7.99999 22.0008C8.00033 22.5527 8.44791 23.0001 8.99998 23.0001C9.55227 23.0001 9.99998 22.5524 9.99998 22.0001V21.0001C9.99998 20.4478 9.55227 20.0001 8.99998 20.0001C8.90571 20.0001 8.80372 20.0004 8.69569 20.0008C8.10883 20.0026 7.34388 20.0049 6.67018 19.9603C6.34531 19.9388 6.07825 19.9083 5.88241 19.871C5.58083 18.6871 5.09362 17.8994 4.57373 17.2891C4.34391 17.0194 4.10593 16.7834 3.91236 16.5914C3.87612 16.5555 3.84144 16.5211 3.80865 16.4883C3.5853 16.265 3.4392 16.1062 3.33203 15.9454Z" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="md:w-[900px] md:pt-3 flex md:items-start  ">
                        <img
                            className=" object-contain bg-white"
                            src="/src/assets/watching-removebg.png"
                            alt="Construction Site"
                        />
                    </div>
                </div>
                <div
                 className="pb-10 bg-white flex justify-center ">
                    {isVisible && (
                        <motion.div
                        initial={{ opacity: 0, }}
                                    whileInView={{ opacity: 1, }}
                                    transition={{ duration:1, }}
                                    
                        className=" transition-all bg-white relative mt-3 hover:shadow-md hover:-translate-y-[2px] ease-in-out w-[600px] md:w-[1000px] md:h-[111px] rounded-lg flex font-inter flex-col items-center justify-center text-text2 p-5 pb-10">
                            <p className="text-[18px] animate-appearance-in font-bold">
                                No Ads here 🤗
                            </p>
                            <p className=" text-[16px] animate-appearance-in md:flex">
                                Instead, you can give us a
                                <p className="pl-1 text-center font-semibold text-[#30a1c3] hover:text-title2 cursor-pointer">
                                    share on Instagram
                                </p>
                            </p>
                            <button
                                className=" absolute top-0 right-0 mt-1 mr-4 rounded-full hover:bg-[#eef0f1]"
                                onClick={closeDiv}
                            >
                                <Close />
                            </button>
                        </motion.div>
                    )}
                </div>
                <div></div>
            </div>
        </>
    );
}

export default Construction;
