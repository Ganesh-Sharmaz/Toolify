import React from "react";
import { useState, useRef, useEffect } from "react";
import "./QRCode.css";
import toast, { Toaster } from "react-hot-toast";
// import { toPng } from "html-to-image";
// import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react';

import { QRCode } from "react-qrcode-logo";
import { color } from "framer-motion";
import { Download } from "@mui/icons-material";
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

    return (
        <>
            <div className=" h-screen flex justify-center">
                <LoginNotification />
                <Toaster position="top-right" />
                <div className="flex flex-col items-center">
                    <p className=" text-center py-3 text-air-h4 text-[18px]">
                        Convert your links into a QR Code in one click!
                    </p>
                    {/* entering details for qr code */}
                    <div className="flex flex-col gap-y-2">
                        <form onSubmit={handleSubmit}>
                            <label
                                className=" hover:outline-sky-800 flex flex-col items-center gap-y-4"
                                htmlFor="text"
                            >
                                <input
                                    id="input"
                                    className=" shadow rounded h-12  md:w-[500px] px-4 text-air-h4 border-air-border bg-airbnb border-2 flex items-center w-52"
                                    // type="url"
                                    placeholder="Enter any text"
                                    value={text}
                                    onChange={(e) => {
                                        if (e.target.type) {
                                            setText(e.target.value);
                                        }
                                    }}
                                />
                            </label>
                        </form>
                    </div>
                    {/* containing qr code */}
                    <div className="flex flex-col items-center">
                        <div className="flex gap-6">
                            {/* Qr code div */}
                            <div className=" p-5 w-fit bg-airbnb-footer my-10 rounded-md">
                                <QRCode
                                    ref={ref}
                                    ecLevel="H"
                                    size={300}
                                    quietZone={10}
                                    logoPaddingStyle="circle"
                                    logoPadding={10}
                                    bgColor="white"
                                    logoOpacity={1}
                                    qrStyle="squares"
                                    value={text}
                                />

                                {/* <QRCode
                                eyeColor={"#ff7124"}
                                ref={ref}
                                fgColor="#f2d59f"
                                logoImage="https://www.svgrepo.com/show/1320/rocket.svg"
                                ecLevel="H"
                                size={300}
                                quietZone={10}
                                logoPaddingStyle="circle"
                                logoPadding={10}
                                bgColor="white"
                                logoOpacity={1}
                                qrStyle="squares"
                                value={text}
                            /> */}
                                {/* <QRCode
                                eyeColor={"#1c274c"}
                                ref={ref}
                                fgColor="#8d93a5"
                                logoImage="https://www.svgrepo.com/show/528107/cart-large-2.svg"
                                ecLevel="H"
                                size={300}
                                quietZone={10}
                                logoPaddingStyle="circle"
                                logoPadding={10}
                                bgColor="white"
                                logoOpacity={1}
                                qrStyle="squares"
                                value={text}
                            /> */}
                                {/* <QRCode
                                eyeColor={["#B13589", "#C62F94", "#FB8A2E"]}
                                ref={ref}
                                fgColor="#E2425C"
                                logoImage="https://www.svgrepo.com/show/452229/instagram-1.svg"
                                ecLevel="H"
                                size={300}
                                quietZone={10}
                                logoPaddingStyle="circle"
                                logoPadding={10}
                                bgColor="white"
                                logoOpacity={1}
                                qrStyle="squares"
                                value={text}
                            /> */}
                                {/* <QRCode
                            eyeColor={"black"}
                            
                            ref={ref}
                            fgColor="black"
                            logoImage="https://www.svgrepo.com/show/512317/github-142.svg"
                            ecLevel="H"
                            size={300}
                            quietZone={10}
                            logoPaddingStyle="circle"
                            logoPadding={10}
                            bgColor="white"
                            logoOpacity={1}
                            qrStyle="squares"
                            value={text}
                        /> */}
                                {/* <QRCode
                            eyeColor={[
                                "#34A853",
                                "#EA4335",
                                "#4285F4"
                            ]}
                            
                            ref={ref}
                            fgColor="#FBBC04"
                            logoImage="https://www.svgrepo.com/show/353822/google-pay-icon.svg"
                            ecLevel="H"
                            size={300}
                            quietZone={10}
                            logoPaddingStyle="circle"
                            logoPadding={10}
                            bgColor="white"
                            logoOpacity={1}
                            qrStyle="squares"
                            value={text}
                        /> */}
                            </div>
                            {/* qr sidebar */}
                            <div className=" h-[360px] w-[120px] bg-airbnb-footer my-10 rounded-md flex items-center justify-center flex-col gap-[15px] ">
                                <Modal
                                    backdrop={"blur"}
                                    isOpen={isOpen}
                                    onOpenChange={onOpenChange}
                                >
                                    <ModalContent>
                                        {(onClose) => (
                                            <>
                                                <ModalHeader className="flex flex-col gap-1">
                                                    You need to Log in to access
                                                    the dynamic QR Codes
                                                </ModalHeader>
                                                <ModalBody>
                                                    <Login>Log in</Login>
                                                    <Button
                                                        onPress={
                                                            handleNavigation
                                                        }
                                                        type="solid"
                                                        color="primary"
                                                    >
                                                        sign up
                                                    </Button>
                                                </ModalBody>
                                                <ModalFooter>
                                                    <Button
                                                        color="danger"
                                                        variant="light"
                                                        onPress={onClose}
                                                    >
                                                        Close
                                                    </Button>
                                                    <Button
                                                        color="primary"
                                                        onPress={onClose}
                                                    >
                                                        Action
                                                    </Button>
                                                </ModalFooter>
                                            </>
                                        )}
                                    </ModalContent>
                                </Modal>
                                <Button
                                    className=" w-[100px] h-[100px] p-0 rounded"
                                    onPress={onOpen}
                                >
                                    <div className=" bg-airbnb rounded">
                                        <img
                                            className=" bg-cover rounded"
                                            src="https://res-console.cloudinary.com/deyqddomr/media_explorer_thumbnails/d424b25b8622ec93753a611e7bf2be07/detailed"
                                            alt="rocket Qr"
                                        />
                                    </div>
                                </Button>
                                <Button
                                    className=" w-[100px] h-[100px] p-0 rounded"
                                    onPress={onOpen}
                                >
                                    <div className=" bg-airbnb rounded">
                                        {" "}
                                        <img
                                            className=" bg-cover rounded"
                                            src="https://res-console.cloudinary.com/deyqddomr/media_explorer_thumbnails/7f3cd0abbbc5744a7768576704ec59b5/detailed"
                                            alt="Instagram Qr"
                                        />
                                    </div>
                                </Button>
                                <Button
                                    className=" w-[100px] h-[100px] p-0 rounded"
                                    onPress={onOpen}
                                >
                                    <div className=" bg-airbnb rounded">
                                        <img
                                            className=" bg-cover rounded"
                                            src="https://res-console.cloudinary.com/deyqddomr/media_explorer_thumbnails/03129445152708ee58e407c290befd28/detailed"
                                            alt="cart Qr"
                                        />
                                    </div>
                                </Button>
                            </div>
                        </div>
                        <div>
                            <Button
                                variant="solid"
                                size="md"
                                // aria-setsize={2xl}

                                color="primary"
                                className=" scale-110 w-32"
                                // className=" shadow-md outline-airbnbpara outline-double text-air-h4 p-2 px-5 rounded-full hover:outline-blue-900 hover:outline-double outline-2 "
                                onClick={handleDownload}
                            >
                                Download
                                <Download />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default QRCodePage;
