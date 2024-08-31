import React from "react";
import { useState, useRef, useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
// import { toPng } from "html-to-image";
// import {QRCodeCanvas, QRCodeSVG} from 'qrcode.react';

import { Tabs, Tab, Chip, Card, CardBody } from "@nextui-org/react";

import { QRCode } from "react-qrcode-logo";
import { color } from "framer-motion";
import { Download } from "@mui/icons-material";
// import DownloadIcon from "@mui/icons-material/Download";
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';

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

function NormalQRCode() {
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
            <div className="w-full flex ">
                {/*start of entering details for qr code and download button  */}

                <div className="relative w-full">
                    <div className="flex flex-col pt-10">
                        <input

                        id="input"
                            className="text-[18px] bg-[#f5f5f5] placeholder:text-[#757575] px-5 h-[40px] border-none  focus-within:outline-none text-[#757575] focus:outline-icon  focus:bg-[white] rounded-xl"
                            // type="url"
                            placeholder="Enter text..."
                            value={text}
                            onChange={(e) => {
                                if (e.target.type) {
                                    setText(e.target.value);
                                }
                            }}
                        />
                    </div>
                    <div className="absolute bottom-0  flex w-full justify-center mb-10">
                        <Button
                            variant="solid"
                            size="md"
                            // aria-setsize={2xl}

                            color="primary"
                            className=" scale-110 w-32 bg-[#3276c3] hover:bg-black"
                            // className=" shadow-md outline-airbnbpara outline-double text-air-h4 p-2 px-5 rounded-full hover:outline-blue-900 hover:outline-double outline-2 "
                            onClick={handleDownload}
                        >
                            <FileDownloadOutlinedIcon/>
                            Download
                            
                        </Button>
                    </div>
                </div>

                {/*end of entering details for qr code and download button */}

                {/* start of containing qr code */}
                <div className="flex flex-col items-center w-full justify-center">
                    <div className="flex gap-5">
                        {/* Qr code div */}
                        <div className="p-5  bg-[#f8f9fc]  rounded-md">
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
                        </div>

                        {/* qr sidebar starts here */}

                        <div className=" h-[360px] w-[120px] bg-[#f8f9fc]  rounded-md flex items-center justify-center flex-col gap-[15px] ">
                            <Modal
                                backdrop={"blur"}
                                isOpen={isOpen}
                                onOpenChange={onOpenChange}
                            >
                                <ModalContent>
                                    {(onClose) => (
                                        <>
                                            <ModalHeader className="flex flex-col gap-1">
                                                You need to Log in to access the
                                                dynamic QR Codes
                                            </ModalHeader>
                                            <ModalBody>
                                                <Button
                                                    onPress={handleNavigation}
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
                                className=" bg-white w-[100px] h-[100px] p-0 rounded"
                                onPress={onOpen}
                            >
                                <div className=" bg-white  rounded">
                                    <img
                                        className=" bg-cover bg-white"
                                        src="https://res-console.cloudinary.com/deyqddomr/media_explorer_thumbnails/d424b25b8622ec93753a611e7bf2be07/detailed"
                                        alt="rocket Qr"
                                    />
                                </div>
                            </Button>
                            <Button
                                className=" bg-white w-[100px] h-[100px] p-0 rounded"
                                onPress={onOpen}
                            >
                                <div className=" bg-white rounded">
                                    {" "}
                                    <img
                                        className=" bg-cover rounded"
                                        src="https://res-console.cloudinary.com/deyqddomr/media_explorer_thumbnails/7f3cd0abbbc5744a7768576704ec59b5/detailed"
                                        alt="Instagram Qr"
                                    />
                                </div>
                            </Button>
                            <Button
                                className=" bg-white w-[100px] h-[100px] p-0 rounded"
                                onPress={onOpen}
                            >
                                <div className=" bg-white rounded">
                                    <img
                                        className=" bg-cover rounded"
                                        src="https://res-console.cloudinary.com/deyqddomr/media_explorer_thumbnails/03129445152708ee58e407c290befd28/detailed"
                                        alt="cart Qr"
                                    />
                                </div>
                            </Button>
                        </div>

                        {/* qr sidebar ends here */}
                    </div>
                </div>
                {/* end of containing qr */}
            </div>
        </>
    );
}

export default NormalQRCode;
