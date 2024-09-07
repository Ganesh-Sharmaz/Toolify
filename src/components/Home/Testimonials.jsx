import React from 'react'
import {motion} from "framer-motion"

function Testimonials() {
  return (
    <div className=' h-fit'>
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
  )
}

export default Testimonials