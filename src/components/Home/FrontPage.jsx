import React from 'react'

function FrontPage() {
  return (
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
  )
}

export default FrontPage