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
import toast from "react-hot-toast";

const Login = () => {
    

    const navigate = useNavigate();

    const [password, setPassword] = useState("");

    const [email, setEmail] = useState("");

    const auth = getAuth();
    console.log(email, password);

    const handleLogin = (email, password) => {
        console.log("email: ", email);
        // console.log(auth)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredentials) => {
                console.log("working one: ", auth);
                console.log("working one: ", email);
                console.log("working one: ", password);
                const user = userCredentials.user;
                console.log("user logged in successfully: ", user);

                localStorage.setItem("loggedIn", "true")

                if (user) {
                    navigate("/qrcodepage");
                    console.log("Navigation to qrcodepage successfull");
                }
            })
            .catch((error) => {
                console.log("error code : ", error.code);
                console.log("error message : ", error.message);
            });
    };

    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            <Button onPress={onOpen} color="primary">
                already have an account? sign in
            </Button>
            <Modal
                backdrop={"blur"}
                className=" bg-airbnb text-white"
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
                                <Button color="primary" onPress={onClose}>
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
