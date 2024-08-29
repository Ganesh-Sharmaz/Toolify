import React, { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router";
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";
import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure,
    Checkbox,
    Input,
    Link,
} from "@nextui-org/react";
import { MailIcon } from "./MailIcon.jsx";
import { LockIcon } from "./LockIcon.jsx";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import toast, { Toaster } from "react-hot-toast";

const Login = ({ children }) => {
    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const [email, setEmail] = useState("");

    const auth = getAuth();

    const goToSignUp = () => {
        navigate("/signup");
    };

    const handleLogin = (email, password) => {
        console.log("email: ", email);
        console.log("password: ",password)
        const email1 = email
        const password1 = password
        // console.log(auth)
        if (email1 && password1) {
            signInWithEmailAndPassword(auth, email1, password1)
                .then((userCredentials) => {
                    console.log("working one: ", auth);
                    console.log("working one: ", email1);
                    console.log("working one: ", password1);
                    const user = userCredentials.user;
                    console.log("user logged in successfully: ", user);
                    console.log(user.displayName);

                    localStorage.setItem("loggedIn", "true");
                    // using next code for the re-render of the header
                    localStorage.setItem("isLog", "true")
                    localStorage.setItem("person", user.displayName);

                    if (user) {
                        navigate("/qrcodepage");
                        console.log("Navigation to qrcodepage successfull");
                        console.log("Re-rendering the entire page");
                        setTimeout(() => {
                            window.location.reload()
                        }, 3000);
                        
                    }
                })
                .catch((e) => {
                    toast.error("Enter email and password");

                    console.log("error code : ", e.code);
                    console.log("error message : ", e.message);
                });
        } else {
            toast.error("Enter credentials!");
        }
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Toaster position="bottom-right" />
            <Button onPress={onOpen} color="primary">
                {children}
            </Button>
            <Modal
                backdrop={"blur"}
                className=" font-poppins bg-airbnb text-white"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                placement="top-center"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">
                                Log in
                            </ModalHeader>
                            <ModalBody>
                                <Input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    color="primary"
                                    autoFocus
                                    endContent={
                                        <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Email"
                                    placeholder="Enter your email"
                                    variant="bordered"
                                />
                                <Input
                                    onChange={(e) =>
                                        setPassword(e.target.value)
                                    }
                                    value={password}
                                    color="primary"
                                    endContent={
                                        <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                                    }
                                    label="Password"
                                    placeholder="Enter your password"
                                    type="password"
                                    variant="bordered"
                                />
                                <div className="text-white flex py-2 justify-between">
                                    <Checkbox
                                        className="text-white"
                                        classNames={{
                                            label: "text-small",
                                            color: "white",
                                            labelColor: "white",
                                        }}
                                    >
                                        Remember me
                                    </Checkbox>
                                    <div className="flex items-center justify-around">
                                        <Link
                                            color="primary"
                                            href="#"
                                            size="sm"
                                        >
                                            <ForgotPassword />
                                        </Link>
                                        <Button
                                            onPress={onClose}
                                            onClick={() =>
                                                handleLogin(email, password)
                                            }
                                            color="primary"
                                        >
                                            Log in
                                        </Button>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button
                                    color="danger"
                                    variant="flat"
                                    onPress={onClose}
                                >
                                    Close
                                </Button>
                                <Button
                                    color="primary"
                                    onClick={goToSignUp}
                                    onPress={onClose}
                                >
                                    Sign in
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Login;
