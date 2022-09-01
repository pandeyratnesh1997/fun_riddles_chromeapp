import { Box, Button, Flex, Image, ListItem, UnorderedList } from "@chakra-ui/react";
import React from "react";
import styles from "./Styles/TopNav.module.css";
import {Link as RouterLink} from "react-router-dom";

const TopNav = () => {
  return (
    <Box className={styles.TopNav_container}>
      <Flex align={"center"} className={styles.flexer}>
        <Box className={styles.imageContainer}>
          <Image src="https://i.postimg.cc/0yb1ZkGq/attachment-105823783-removebg-preview.png" />
        </Box>
        <Box className={styles.mid_container}>
          <UnorderedList>
            <ListItem>Riddles</ListItem>
            <ListItem>Quizzes</ListItem>
            <ListItem>Contests</ListItem>
            <ListItem>About Us</ListItem>
          </UnorderedList>
        </Box>
        <Box className={styles.login_container}>
          <RouterLink to="/login"><Button colorScheme={'whatsapp'}>Sign in</Button></RouterLink>
          <RouterLink to="/register"><Button colorScheme={'whatsapp'}>Sign up</Button></RouterLink>
        </Box>
      </Flex>
    </Box>
  );
};

export default TopNav;
