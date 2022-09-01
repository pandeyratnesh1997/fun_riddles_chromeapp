import React, { useState } from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useToast,
  Link
} from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import styles from "./Styles/Signup.module.css";
import { useDispatch } from "react-redux";
import { Link as RouterLink,useNavigate } from "react-router-dom";
import { register } from "../Redux/AuthReducer/action";
import axios from "axios";
import { useEffect } from "react";


const SignUpAsAdmin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const role = "admin";
  const [show, setShow] = React.useState(false);

  const toast = useToast();
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleRegister = (e) => {
    e.preventDefault();
    const payload = {
      name,
      email,
      password,
      role,
    };

    dispatch(register(payload)).then((res) => {
      console.log(res);
      if (res.status === 200) {
        toast({
          position: "top",
          title: "Account created.",
          description:
            "You have registered successfully for the Timecamp. You are now being redirected to login",
          status: "success",
          duration: 5000,
          isClosable: true,
          zIndex: 10000,
        });
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 5000);
        return;
      }
      if (res.response.status === 409) {
        toast({
          position: "top",
          title: "Email has already been registered!",
          description: "This email has already been registered, please login",
          status: "error",
          duration: 5000,
          isClosable: true,
          zIndex: 10000,
        });
        setTimeout(() => {
          navigate("/login", { replace: true });
        }, 5000);
        return;
      } 
      else if(res.status === 500){
        toast({
          position: "top",
          title: "OOPS!",
          description:
            " Something went wrong while registering. Please try again!",
          status: "error",
          duration: 5000,
          isClosable: true,
        });
      }
    });
  };

  const handleClick = () => setShow(!show);

  useEffect(() => {
    document.title = 'Timecamp || Register';
  });

  return (
    <>
      <Box className={styles.sign_in_div}>
        <Heading as="h1">Sign up as Admin</Heading>
        <Heading as="h2">
          Create an account and start posting funny riddles that will make people think.
        </Heading>
      
        <Link href="https://blooming-sea-03900.herokuapp.com/google/auth/google">
        <Button className={styles.google_sign} display="flex" bg="none">
            <FcGoogle />
            <Text>Sign up with Google</Text>
        </Button>
        </Link>
        <Text className={styles.or_text}>Or</Text>
        <form onSubmit={handleRegister}>
        <Input
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            className={styles.sign_in_input}
            size={["sm", "md", "md"]}
            w={["90%", "80%", "80%"]}
          />
          <Input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            className={styles.sign_in_input}
            size={["sm", "md", "md"]}
            w={["90%", "80%", "80%"]}
          />
          <InputGroup
            className={styles.sign_in_input}
            size={["sm", "md", "md"]}
            w={["90%", "80%", "80%"]}
          >
            <Input type={show ? "text" : "password"} placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
            <InputRightElement>
              <Button
                size="sm"
                onClick={handleClick}
                bg="none"
                className={styles.show_hide_btn}
              >
                {show ? <AiFillEye /> : <AiFillEyeInvisible />}
              </Button>
            </InputRightElement>
          </InputGroup>
          <Button
            className={styles.sign_up_btn}
            display="flex"
            colorScheme="whatsapp"
            borderRadius={"50px"}
            height={["40px","50px","50px"]}
            variant={"solid"}
            type="submit"
          >
            Sign up for free
          </Button>
        </form>
        <Text className={styles.terms}>
          By signing up you agree to our
          <span>Terms of Service and Privacy Policy</span>
        </Text>
      </Box>
    </>
  );
};

export default SignUpAsAdmin;
