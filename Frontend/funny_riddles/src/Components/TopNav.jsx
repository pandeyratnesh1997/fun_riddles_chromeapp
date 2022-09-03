import {
  Avatar,
  Badge,
  Box,
  Button,
  Flex,
  IconButton,
  Image,
  ListItem,
  Menu,
  MenuButton,
  MenuDivider,
  MenuGroup,
  MenuItem,
  MenuList,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/TopNav.module.css";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { GiHamburgerMenu, GiLetterBomb } from "react-icons/gi";
import { IoColorPaletteOutline } from "react-icons/io5";
import { FiActivity,FiDownload,FiLogOut } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";
let savedInfo = JSON.parse(localStorage.getItem("savedInfo"));

const TopNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = savedInfo || {
    email: "",
    name: "",
    role: "",
  };
  console.log("user:", user);
  let isAuth = useSelector((state) => state.authReducer.isAuth);
  console.log("isAuth:", isAuth);

  const handleLogout = () => {
    localStorage.removeItem("savedInfo");
    localStorage.removeItem("riddleapptoken");
    dispatch(logout);
  };

  const handleNavigate = () => {
    if (isAuth) {
      navigate("/riddle/create");
    } else {
      navigate("/user/login");
    }
  };
  return (
    <Box className={styles.TopNav_container}>
      <Flex align={"center"} className={styles.flexer}>
        <Box className={styles.hamburger_container}>
          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              icon={<GiHamburgerMenu />}
              variant="ghost"
              size={["sm", "md", "md"]}
            />
            <MenuList>
              <MenuItem  onClick={handleNavigate}>Riddles</MenuItem>
              <MenuItem>Quizzes</MenuItem>
              <MenuItem>Contests</MenuItem>
              <MenuItem>About Us</MenuItem>
            </MenuList>
          </Menu>
        </Box>

        <Box className={styles.imageContainer}>
          <RouterLink to="/">
            <Image src="https://i.postimg.cc/0yb1ZkGq/attachment-105823783-removebg-preview.png" />
          </RouterLink>
        </Box>
        <Box className={styles.mid_container}>
          <UnorderedList>
            <ListItem onClick={handleNavigate}>Riddles</ListItem>
            <ListItem>Quizzes</ListItem>
            <ListItem>Contests</ListItem>
            <ListItem>About Us</ListItem>
          </UnorderedList>
        </Box>

        {isAuth ? (
          <Box className={styles.profile_contianer}>
            <Menu>
              <MenuButton margin={0} padding={0}>
                <Avatar
                  size={["sm", "md", "md"]}
                  bg="green.300"
                  name={user.name}
                />
              </MenuButton>
              <MenuList width={"300px"}>
                <MenuItem>
                  <Avatar bg="green.300" name={user.name} size={"sm"} />
                  <Box ml="3">
                    <Text fontWeight="bold">
                      {user.name}
                      <Badge ml="1" colorScheme="green">
                        {user.role}
                      </Badge>
                    </Text>
                    <Text fontSize="sm">{user.email}</Text>
                  </Box>
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<IoColorPaletteOutline size={"24px"} />}>
                  Theme
                </MenuItem>
                <MenuItem icon={<FiActivity size={"24px"} />}>Activity Log</MenuItem>
                <MenuItem icon={<FiDownload size={"24px"} />}>Download app</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout} icon={<FiLogOut size={"24px"} />}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          <Box className={styles.login_container}>
            <RouterLink to="/user/login">
              <Button
                colorScheme={"whatsapp"}
                width={["80px", "80px", "140px"]}
              >
                Sign in
              </Button>
            </RouterLink>
            <RouterLink to="/user/signup">
              <Button
                colorScheme={"whatsapp"}
                width={["80px", "80px", "140px"]}
              >
                Sign up
              </Button>
            </RouterLink>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default TopNav;
