import { Box, Flex, Heading, HStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Styles/Riddles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRiddle } from "../Redux/Player/action";

const Riddles = () => {
  const [page, setpage] = useState(0);
  const riddle = useSelector((state) => state.playerReducer);
  const [result, setResult] = useState("");
  const dispatch = useDispatch();
  const [ans,setans] = useState("");
 
  let {options} = riddle.playerRiddle[0] 
  // if(riddle.playerRiddle[0]===0){
  //    return <Box>{"level finished"}</Box>
  // }
  
 
  


  const CheckResult = (value) => {
    // checking logic

    // write and wrong
    let userValue;
  //  console.log(value);
    switch (value) {
      case options[0]: {
        if (value.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult("Right");
        } else {
          setResult("Wrong");
        }
        break;
      }
      case options[1]: {
        console.log("2",riddle.playerRiddle[0].answer.trim())
        if (value.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult("Right");
        } else {
          setResult("Wrong");
        }
        break;
      }
      case options[2]: {
       
        console.log("2",riddle.playerRiddle[0].answer.trim())
        if (value.trim()  === riddle.playerRiddle[0].answer.trim()) {
          setResult("Right");
        } else {
          setResult("Wrong");
        }
        break;
      }
      case options[3]: {
       
        console.log("2",riddle.playerRiddle[0].answer.trim())
        if (value.trim()  === riddle.playerRiddle[0].answer.trim()) {
          setResult("Right");
        } else {
          setResult("Wrong");
        }
        break;
      }
      default: {
        break;
      }
    }
console.log(result);
    // setTimeout()
    setTimeout(()=>{
        setpage(page + 1);
    },3000)
    
  };



  useEffect(() => {
  //  if()

    dispatch(fetchRiddle(page));

  }, [page]);

  // if (riddle.isLoading) {
  //   return <Spinner />
  // } 
  // else if (riddle.isError) {
  //   return <Box>Something went wrong!</Box>;
  // }
  // if(riddle.playerRiddle[0]!==undefined){
  //   return ( <Box m={"200px"}>
  //       <Heading>You have finished all levels</Heading>
  //   </Box> )
  // }

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
                  onClick={()=>CheckResult(el.options[0])}

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
