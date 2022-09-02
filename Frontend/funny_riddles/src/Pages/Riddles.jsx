import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import { useToast } from '@chakra-ui/react'
import React, { useEffect, useState, useRef } from "react";
import styles from "./Styles/Riddles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRiddle } from "../Redux/Player/action";
import { getData } from "../Redux/Admin/action";


const Riddles = () => {
  const allRiddles = useSelector((state)=>state.adminReducer.data);
  const [page, setpage] = useState(0);
  const riddle = useSelector((state) => state.playerReducer);
  console.log(riddle);
  console.log("allriddles", allRiddles)
  
  
  const [result, setResult] = useState("");
  const toast = useToast()
  const dispatch = useDispatch();
  const [ans, setans] = useState(false);
  let options
  if (page< allRiddles.length-1) {
      options  = riddle.playerRiddle[0].options;
  }
  else{
    options = false
  }

  
  

  const CheckResult = (value) => {
    if(options=== false){
      setans(true);
      return
    }
    
    switch (value) {
      case options[0]: {
        if (value.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult(()=>"Right");
        } else {
          setResult(()=>"Wrong");
        }
        break;
      }
      case options[1]: {
        console.log("2", riddle.playerRiddle[0].answer.trim());
        if (value.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult(()=>"Right");
        } else {
          setResult(()=>"Wrong");
        }
        break;
      }
      case options[2]: {
        console.log("2", riddle.playerRiddle[0].answer.trim());
        if (value.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult(()=>"Right");
        } else {
          setResult(()=>"Wrong");
        }
        break;
      }
      case options[3]: {
        console.log("2", riddle.playerRiddle[0].answer.trim());
        if (value.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult(()=>"Right");
        } else {
          setResult(()=>"Wrong");
        }
        break;
      }
      default: {
        break;
      }
    }
    console.log(result);
    if(result==="Right"){
      toast({
        title: `${result}`,
        description: "",
        status: 'success',
        duration: 1000,
        isClosable: true,
      })
    }
    else{
      toast({
        title: `${result}`,
        description: "",
        status: 'warning',
        duration: 1000,
        isClosable: true,
      })
    }
    
    // setTimeout()
    setTimeout(() => {
      setpage((page)=>page + 1);
    }, 1000);
  };

  useEffect(() => {
    

    dispatch(fetchRiddle(page));
  }, [page]);

  useEffect(()=>{
    dispatch(getData())
},[])

  // if (riddle.isLoading) {
  //   return <Spinner />
  // }
  // if (riddle.isError) {
  //   return <Box m={"200px"}>Something went wrong!</Box>;
  // }
  if(ans){
    return ( <Box m={"200px"}>
        <Heading>You have finished all levels</Heading>
    </Box> )
  }

  return (
    <div>
      {riddle.playerRiddle.map((el) => {
        return (
          <Box key={el._id} className={styles.cont}>
            <Box className={styles.topDiv}>
              <Box className={styles.score}></Box>
              <Box className={styles.riddleDiv}>{el.riddle}</Box>
            </Box>
            <Box className={styles.bottomDiv}>
              <HStack>
                <Box
                  onClick={() => CheckResult(el.options[0])}
                  className={styles.firstOption}
                >
                  {el.options[0]}
                </Box>
                <Box
                  onClick={() => CheckResult(el.options[1])}
                  className={styles.secondOption}
                >
                  {el.options[1]}
                </Box>
              </HStack>
              <HStack>
                <Box
                  onClick={() => CheckResult(el.options[2])}
                  className={styles.thirdOption}
                >
                  {el.options[2]}
                </Box>
                <Box
                  onClick={() => CheckResult(el.options[3])}
                  className={styles.fourthOption}
                >
                  {el.options[3]}
                </Box>
              </HStack>
            </Box>
          </Box>
        );
      })}
    </div>
  );
};

export default Riddles;

//
