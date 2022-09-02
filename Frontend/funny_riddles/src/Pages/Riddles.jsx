import { Box, Flex, HStack } from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";
import React, { useEffect, useState, useRef } from "react";
import styles from "./Styles/Riddles.module.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchRiddle } from "../Redux/Player/action";

const Riddles = () => {
  const [page, setpage] = useState(0);
  const riddle = useSelector((state) => state.playerReducer);
  console.log(riddle);
  const ref1 = useRef(null);
//   const ref2 = useRef(null);
//   const ref3 = useRef(null);
//   const ref4 = useRef(null);
  const [result, setResult] = useState("");
  const [ans,setans] = useState("");
  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRiddle(page));
  }, [page]);
  const CheckResult = () => {
    // checking logic
const value =ReactDOM.findDOMNode(this)
    // write and wrong
    let userValue;
   console.log(value);
    switch (id) {
      case 1: {
        userValue = ref1.current.innerText;
        console.log("1",ref1.current.innerText.trim());
        console.log("2",riddle.playerRiddle[0].answer.trim())
        if (userValue.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult("Right");
        } else {
          setResult("Wrong");
        }
        break;
      }
      case 2: {
        userValue = ref1.current.innerText;
        console.log("1",ref1.current.innerText.trim());
        console.log("2",riddle.playerRiddle[0].answer.trim())
        if (userValue.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult("Right");
        } else {
          setResult("Wrong");
        }
        break;
      }
      case 3: {
        userValue = ref1.current.innerText;
        console.log("1",ref1.current.innerText.trim());
        console.log("2",riddle.playerRiddle[0].answer.trim())
        if (userValue.trim() === riddle.playerRiddle[0].answer.trim()) {
          setResult("Right");
        } else {
          setResult("Wrong");
        }
        break;
      }
      case 4: {
        userValue = ref1.current.innerText;
        console.log("1",ref1.current.innerText.trim());
        console.log("2",riddle.playerRiddle[0].answer.trim())
        if (userValue.trim() === riddle.playerRiddle[0].answer.trim()) {
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
  if (riddle.isLoading) {
    return <Spinner />
  } 
  else if (riddle.isError) {
    return <Box>Something went wrong!</Box>;
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
                <Flex
                  onClick={ this.CheckResult}
                  ref={ref1}
                  className={styles.firstOption}
                >
                  {el.options[0]}
                </Flex>
                <Box
                  onClick={() => CheckResult(2)}
                  ref={ref1}
                  className={styles.secondOption}
                >
                  {el.options[1]}
                </Box>
              </HStack>
              <HStack>
                <Box
                  onClick={() => CheckResult(3)}
                  ref={ref1}
                  className={styles.thirdOption}
                >
                  {el.options[2]}
                </Box>
                <Box
                  onClick={() => CheckResult(4)}
                  ref={ref1}
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
