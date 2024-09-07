import React from 'react'

function Services() {
  return (
    <div>
                    <p className="text-7xl md:text-8xl font-grotesk  font-bold">
                        Our Services
                    </p>
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
                                you're plastering them on business cards,
                                flyers, or just using them to mess with your
                                friends, our QR code generator is the ultimate
                                wingman.
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
                                        Dynamic QR Codes: For when you need your
                                        QR code to be as unpredictable as your
                                        plans. Customize with colors, logos, and
                                        more!
                                    </p>
                                </li>
                                <li className="">
                                    <p className="text-pretty">
                                        VCard QR Codes: Let people connect with
                                        you without the awkward small talk—one
                                        scan, and they’ve got your deets.
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
                                hired. Whether you need to impress or just get
                                in the door, our tools will make you look like a
                                pro—or at least like one on paper.
                            </p>
                            <ul className=" space-y-1  pt-5 ">
                                <li className="  transition ease-in">
                                    <p>
                                        Customizable Templates: Choose a
                                        template that matches your style—or at
                                        least, one that hides the fact that
                                        you’ve never used Excel.
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
                                        Download and Share: Save your resume as
                                        a PDF, and start counting the interview
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
                                Ever tried to edit a PDF and ended up screaming
                                at your screen? We feel you. Our document
                                converter is here to save your sanity.
                            </p>
                            <ul className="  space-y-1  pt-5 ">
                                <li className="  transition ease-in">
                                    <p>
                                        PDF to Word: Because sometimes PDFs are
                                        just Word documents in disguise.
                                    </p>
                                </li>
                                <li className="  transition ease-in">
                                    <p className="text-pretty">
                                        Image to Text: Extract text from images
                                        faster than you can say, "Why didn’t I
                                        just type this?"
                                    </p>
                                </li>
                                <li className="  transition ease-in">
                                    <p className="text-pretty">
                                        Format Conversion: Turn any file into
                                        any other file—well, almost. We don’t do
                                        magic, just tech.
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>  
                </div>
  )
}

export default Services