import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

function Home() {
    return (
        <div className="md:w-full px-5 font-inter bg-white md:px-10">
            <div className="md:flex flex-row-reverse  border-b-1">
                <div className="md:w-1/3 ">
                    <img src="/src/assets/homepage1.jpg" alt="" />
                </div>
                <div className="md:w-2/3 md:flex md:flex-col justify-center w-full text-7xl md:py-10 pb-5 md:pr-10 font-grotesk  md:space-y-4 bg-white text-text2 space-y-2">
                    <p className=" font-grotesk font-extrabold md:font-bold md:text-8xl text-pretty">
                        Welcome to Toolify
                    </p>
                    <p className="  text-3xl font-amster">
                        Big Things, Small Packages: Microservices That Pack a
                        Punch! 🤜
                    </p>
                    <p className="text-pretty font-grotesk font-medium text-3xl">
                        At Toolify, we’re all about making life easier one
                        microservice at a time. Need a snazzy QR code? A resume
                        that screams "Hire me!"? Or maybe just a way to convert
                        that stubborn PDF into something usable? We’ve got your
                        back, and then some!
                    </p>
                </div>
            </div>
            <div className=" w-full h-fit py-10 border-b-1 font-grotesk  text-text2">
                <p className="text-8xl font-grotesk  font-bold">Our Services</p>
                <div className=" cursor-pointer w-full bg-[#ffdfc6] outline-none rounded-md md:flex justify-center md:space-y-2 my-5 shadow  hover:shadow-xl  transition ease-in">
                    <div className=" md:w-[380px] ">
                        <img
                            className=" bg-contain rounded-md"
                            src="/src/assets/qrscan.jpg"
                            alt="qr-code-service-vector"
                        />
                    </div>
                    <div className="md:w-2/3 w-full px-5 md:px-0 pb-5  flex flex-col justify-center ">
                        <p className="text-5xl font-grotesk  text-[#333333] font-bold pb-3">
                            QR Code Generator
                        </p>
                        <p className="text-lg font-bold font-grotesk text-pretty">
                            Because who doesn't love a good QR code? Whether
                            you're plastering them on business cards, flyers, or
                            just using them to mess with your friends, our QR
                            code generator is the ultimate wingman.
                        </p>
                        <ul className=" space-y-1  pt-5 text-black">
                            <li className="">
                                <p>
                                    Static QR Codes: Classic, reliable, and
                                    always on point.
                                </p>
                            </li>
                            <li className="">
                                <p className="text-pretty">
                                    Dynamic QR Codes: For when you need your QR
                                    code to be as unpredictable as your plans.
                                    Customize with colors, logos, and more!
                                </p>
                            </li>
                            <li className="">
                                <p className="text-pretty">
                                    VCard QR Codes: Let people connect with you
                                    without the awkward small talk—one scan, and
                                    they’ve got your deets.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full px-5 md:px-0 pb-5  font-grotesk cursor-pointer bg-white rounded-md outline-none md:flex justify-center md:flex-row-reverse shadow hover:shadow-xl   transition ease-in my-5 ">
                    <div className="md:w-[400px] flex justify-center items-center ">
                        <img
                            className="rounded-md"
                            src="/src/assets/resumebuilder.jpg"
                            alt="qr-code-service-vector"
                        />
                    </div>
                    <div className=" md:w-2/3  flex flex-col justify-center ">
                        <p className="text-5xl text-[#333333] font-grotesk font-bold pb-3">
                            Resume Builder
                        </p>
                        <p className="text-lg font-bold font-grotesk text-pretty">
                            Craft a resume so good it practically gets you
                            hired. Whether you need to impress or just get in
                            the door, our tools will make you look like a pro—or
                            at least like one on paper.
                        </p>
                        <ul className=" space-y-1  pt-5 ">
                            <li className="  transition ease-in">
                                <p>
                                    Customizable Templates: Choose a template
                                    that matches your style—or at least, one
                                    that hides the fact that you’ve never used
                                    Excel.
                                </p>
                            </li>
                            <li className="  transition ease-in">
                                <p className="text-pretty">
                                    Guided Experience: We’ll hold your hand
                                    through the process, but not in a creepy
                                    way.
                                </p>
                            </li>
                            <li className="  transition ease-in">
                                <p className="text-pretty">
                                    Download and Share: Save your resume as a
                                    PDF, and start counting the interview
                                    requests.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="w-full font-grotesk font cursor-pointer bg-[#a3b8f1] rounded-md outline-none md:flex justify-center shadow hover:shadow-xl pb-5 transition ease-in ">
                    <div className="md:w-[400px] flex justify-center items-center ">
                        <img
                            className="rounded-md"
                            src="/src/assets/document.jpg"
                            alt="qr-code-service-vector"
                        />
                    </div>
                    <div className=" md:w-2/3 pl-5 flex flex-col justify-center ">
                        <p className="text-5xl text-text2 font-bold pb-3">
                            Document Converter
                        </p>
                        <p className="text-lg font-bold font-grotesk text-pretty">
                            Ever tried to edit a PDF and ended up screaming at
                            your screen? We feel you. Our document converter is
                            here to save your sanity.
                        </p>
                        <ul className="  space-y-1  pt-5 ">
                            <li className="  transition ease-in">
                                <p>
                                    PDF to Word: Because sometimes PDFs are just
                                    Word documents in disguise.
                                </p>
                            </li>
                            <li className="  transition ease-in">
                                <p className="text-pretty">
                                    Image to Text: Extract text from images
                                    faster than you can say, "Why didn’t I just
                                    type this?"
                                </p>
                            </li>
                            <li className="  transition ease-in">
                                <p className="text-pretty">
                                    Format Conversion: Turn any file into any
                                    other file—well, almost. We don’t do magic,
                                    just tech.
                                </p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className=" border-b-1 md:py-10 py-5 space-y-2 font-amster text-6xl md:text-[65px] text-blue-500 text-pretty  w-full items-center justify-center">
                <p>We're cooking up more features! Our devs are all in 🧑‍💻💪 </p>
                <p>( sacrificing their binge-watching habits for now )</p>
            </div>
            <div className="w-full h-fit md:py-10 py-5 text-text2 font-grotesk border-b-1 ">
                <p className="md:text-8xl text-8xl font-bold">
                    Why Choose Toolify?
                </p>
                <div className="w-full flex flex-col my-5 bg-white rounded-md px-5">
                    <div className="w-full md:flex content-center align-middle">
                        <div className="">
                            <img
                                className=" animate-pulse w-[500px]"
                                src="/src/assets/easy.jpg"
                                alt=""
                            />
                        </div>
                        <div className="font-bold md:text-8xl text-6xl flex flex-col items-center justify-center">
                            Ridiculously Easy
                            <p className=" text-3xl pt-4">
                                Our tools are designed with simplicity in
                                mind—no technical expertise required.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full md:flex my-5 bg-white rounded-md px-5">
                    <div className="w-full md:flex flex-row-reverse">
                        <div>
                            <img
                                className="animate-slidefast md:w-[500px]"
                                src="/src/assets/fast work.jpg"
                                alt=""
                            />
                        </div>
                        <div className="md:w-2/3 font-bold text-6xl md:text-8xl flex flex-col items-center justify-center">
                            Blazing Fast
                            <p className=" text-3xl pt-4">
                                Get your tasks done faster than it takes to brew
                                a cup of coffee.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="w-full flex flex-col my-5 bg-white rounded-md px-5">
                    <div className="w-full md:flex">
                        <div>
                            <img
                                className="animate-slidefast w-[500px]"
                                src="/src/assets/customize.jpg"
                                alt=""
                            />
                        </div>
                        <div className="md:w-2/3 font-bold md:text-8xl text-6xl md:flex md:flex-col items-center justify-center">
                            Customize Your Way
                            <p className=" text-3xl pt-4 md:text-center">
                                Tailor our tools to your heart’s content—because
                                one size definitely does not fit all.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full h-screen py-10 text-text2 font-grotesk border-b-1 ">
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
            </div>

            <div className="w-full flex flex-col h-screen py-10 text-text2 font-grotesk border-b-1 ">
                <div>
                    <p className="md:text-8xl text-6xl pb-14">Testimonials</p>

                    <div className="flex flex-col items-center justify-center gap-10">
                        <motion.div
                            initial={{ opacity: 0, x:-200 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{ duration:1}}
                            className="md:w-2/3 p-5 cursor-default rounded-xl space-y-5 bg-[#f1f1f1]  "
                        >
                            <p className="text-2xl font-jet italic ">
                                "Toolify made my life so much easier, I actually
                                had time for a coffee break. The QR code
                                generator is pure genius, and the resume builder
                                got me a job I didn’t even apply for!"
                            </p>
                            <p className=" font-grotesk text-lg text-center">
                                — Aniket Kumar Mahato (AKM)., Marketing Guru
                            </p>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x:-200 }}
                            whileInView={{ opacity: 1, x:0 }}
                            transition={{ duration:1, type:"tween"}}
                            className="md:w-2/3 p-5 cursor-default rounded-xl space-y-5 bg-[#f1f1f1] "
                        >
                            <p className="text-2xl font-jet italic ">
                                "Finally, a document converter that doesn’t make
                                me want to throw my computer out the window.
                                MicroPower, you’ve saved my files—and my
                                sanity."
                            </p>
                            <p className=" font-grotesk text-lg text-center">
                                — Dharmendra Yadav, CTO Microsoft
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
