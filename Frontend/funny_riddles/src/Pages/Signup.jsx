import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import SignUpAsAdmin from "./SignUpAsAdmin";
import SignUpAsPlayer from "./SignUpAsPlayer";

const Signup = () => {
  return (
    <Tabs margin={"8rem auto"} width="45%">
      <TabList>
        <Tab
          w="50%"
          _selected={{ color: "white", bg: "green.500" }}
          fontSize="18px"
        >
          Sign up as Player
        </Tab>
        <Tab
          w="50%"
          _selected={{ color: "white", bg: "green.500" }}
          fontSize="18px"
        >
          Sign up as Admin
        </Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <SignUpAsPlayer />
        </TabPanel>
        <TabPanel>
          <SignUpAsAdmin />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default Signup;
