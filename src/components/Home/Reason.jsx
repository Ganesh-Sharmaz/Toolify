import React from "react";

function Reason() {
    return (
        <div>
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
                            Our tools are designed with simplicity in mind—no
                            technical expertise required.
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
                            Get your tasks done faster than it takes to brew a
                            cup of coffee.
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
                            Tailor our tools to your heart’s content—because one
                            size definitely does not fit all.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Reason;
