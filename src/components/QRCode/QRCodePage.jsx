import React from "react";
import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { toPng } from "html-to-image";
// import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react';

// import "./QRPage.css"
import { Tabs, Tab, Chip, Card, CardBody } from "@nextui-org/react";

import { QRCode } from "react-qrcode-logo";
import { color } from "framer-motion";
import { Close, Download } from "@mui/icons-material";
import Login from "../Login/Login.jsx";

import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
} from "@nextui-org/react";
import { useNavigate } from "react-router-dom";
import LoginNotification from "../LoginNotification/LoginNotification.jsx";
import PhoneQRCode from "../QRCodePages/PhoneQRCode/PhoneQRCode.jsx";
import EmailQRCode from "../QRCodePages/EmailQRCode/EmailQRCode.jsx";
import NormalQRCode from "../QRCodePages/NormalQR/NormalQRCode.jsx";

function QRCodePage() {
    const navigate = useNavigate();

    const handleNavigation = () => {
        console.log("working");
        navigate("/signup");
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const notify = () =>
        toast.error("Enter a link or something...", {
            style: {
                borderRadius: "10px",
                background: "#333",
                color: "#fff",
            },
        });

    const [text, setText] = useState("");
    const ref = useRef(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        handleDownload();
    };
    const handleDownload = () => {
        const input = document.getElementById("input");
        // const urlRegex = /(https?:\/\/[^\s]+)/g;

        if (input.value.length > 0) {
            console.log("working");

            ref.current?.download();
        } else {
            console.log("working with notifications");
            notify();
        }
    };

    const [isVisible, setIsVisible] = useState(true);

    const closeDiv = () => {
        setIsVisible(false);
    };

    return (
        <>
            <div
                id="qrBody"
                className=" bg-white font-inter w-full  flex-col flex  justify-center items-center "
            >
                <LoginNotification />
                <Toaster position="bottom-right" />
                {isVisible && (
                    <div className=" relative mt-3 hover:shadow-md hover:-translate-y-[2px] transition-all ease-in-out w-[1000px] rounded-lg flex font-inter flex-col items-center justify-center text-text2 p-5 pb-10">
                        <p className=" animate-load text-[18px] font-bold">No Ads here 🤗</p>
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
                            <Close/>
                        </button>
                    </div>
                )}

                {/* div containting qr options and qr details */}
                <div className="flex flex-col items-center">
                    {/* start of the qr options */}

                    <div className=" mt-3 flex items-center w-full flex-col">
                        <Tabs
                            className=""
                            color="primary"
                            variant="bordered"
                            radius="full"
                            aria-label="Options"
                        >
                            <Tab
                                className=" "
                                key="photos"
                                title={
                                    <div className="  flex items-center space-x-2">
                                        <span className="text-text2">
                                            Normal
                                        </span>
                                    </div>
                                }
                            >
                                <Card className="bg-white  w-[1200px] shadow hover:shadow-md ">
                                    <CardBody>
                                        <NormalQRCode />
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="music"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span className="text-text2">
                                            Videos
                                        </span>
                                    </div>
                                }
                            >
                                <Card isBlurred className=" w-[1200px]">
                                    <CardBody>
                                        Ut enim ad minim veniam, quis nostrud
                                        exercitation ullamco laboris nisi ut
                                        aliquip ex ea commodo consequat. Duis
                                        aute irure dolor in reprehenderit in
                                        voluptate velit esse cillum dolore eu
                                        fugiat nulla pariatur.
                                    </CardBody>
                                </Card>
                            </Tab>
                            <Tab
                                key="videos"
                                title={
                                    <div className="flex items-center space-x-2">
                                        <span className="text-text2">
                                            Videos
                                        </span>
                                    </div>
                                }
                            >
                                <Card className="bg-card-background w-[1200px]">
                                    <CardBody>
                                        Excepteur sint occaecat cupidatat non
                                        proident, sunt in culpa qui officia
                                        deserunt mollit anim id est laborum.
                                    </CardBody>
                                </Card>
                            </Tab>
                        </Tabs>
                    </div>
                    {/* end of the qr options */}

                    
                </div>
            </div>
        </>
    );
}

export default QRCodePage;
