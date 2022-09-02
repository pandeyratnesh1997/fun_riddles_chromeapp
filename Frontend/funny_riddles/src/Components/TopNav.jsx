import {
  Avatar,
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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../Redux/AuthReducer/action";

const TopNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('savedInfo')) || {
    email : "",
    name : "",
  }
  console.log('user:', user)
  let isAuth = useSelector((state) => state.authReducer.isAuth);
  console.log("isAuth:", isAuth);

  const handleLogout = () => {
      localStorage.removeItem("savedInfo");
      localStorage.removeItem("riddleapptoken")
      dispatch(logout)
  }

  const handleNavigate = () => {
      if(isAuth){
        navigate("/riddle/create");
      }
      else{
        navigate("/user/login");
      }
  }
  return (
    <Box className={styles.TopNav_container}>
      <Flex align={"center"} className={styles.flexer}>
        <Box className={styles.hamburger_container}>
        <Menu >
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<GiHamburgerMenu />}
            variant="ghost"
            size={["sm", "md", "md"]}
          />
          <MenuList>
            <MenuItem>Riddles</MenuItem>
            <MenuItem>Quizzes</MenuItem>
            <MenuItem>Contests</MenuItem>
            <MenuItem>About Us</MenuItem>
          </MenuList>
        </Menu>
        </Box>

        <Box className={styles.imageContainer}>
          <Image src="https://i.postimg.cc/0yb1ZkGq/attachment-105823783-removebg-preview.png" />
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
                <Avatar size={["sm","md","md"]} bg="green.300" name="suraj" />
              </MenuButton>
              <MenuList width={"300px"}>
                <MenuItem>
                  <Avatar bg="green.300" name={user.name} size={"sm"} />
                  <Box>
                    <Text marginLeft={"20px"}>{user.name}</Text>
                    <Text marginLeft={"20px"} fontSize={"14px"}>
                      {user.email}
                    </Text>
                  </Box>
                </MenuItem>
                <MenuDivider />
                <MenuItem icon={<IoColorPaletteOutline size={"24px"} />}>
                  Theme
                </MenuItem>
                <MenuItem>Activity Log</MenuItem>
                <MenuItem>Download app</MenuItem>
                <MenuDivider />
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        ) : (
          <Box className={styles.login_container}>
            <RouterLink to="/user/login">
              <Button colorScheme={"whatsapp"} width={["80px","90px","140px"]}>Sign in</Button>
            </RouterLink>
            <RouterLink to="/user/signup">
              <Button colorScheme={"whatsapp"} width={["80px","90px","140px"]}>Sign up</Button>
            </RouterLink>
          </Box>
        )}
      </Flex>
    </Box>
  );
};

export default TopNav;
