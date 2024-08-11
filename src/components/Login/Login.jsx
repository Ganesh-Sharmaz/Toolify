import React from "react";
import PropTypes from 'prop-types';
import { useNavigate } from "react-router";
import ForgotPassword from "../ForgotPassword/ForgotPassword.jsx";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
import {MailIcon} from './MailIcon.jsx';
import {LockIcon} from './LockIcon.jsx';

const Login = () => {

    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    


    return (

        <>
      <Button onPress={onOpen} color="primary">already have an account? sign in</Button>
      <Modal backdrop={"blur"} className=" bg-airbnb text-white"
        isOpen={isOpen} 
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input color="primary"
                  autoFocus
                  endContent={
                    <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input color="primary"
                  endContent={
                    <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="text-white flex py-2 px-1 justify-between">
                  <Checkbox className="text-white"
                    classNames={{
                      label: "text-small",
                      color: "white",
                      labelColor: "white"
                      
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    <ForgotPassword/>
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
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
}



export default Login


