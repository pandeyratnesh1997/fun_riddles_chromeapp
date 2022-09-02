import { Box, HStack } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react';
import styles from './Styles/Riddles.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchRiddle } from '../Redux/Player/action';

const Riddles = () => {
    const [page, setpage] = useState(0);
    const riddle = useSelector((state)=> state.playerReducer);
    console.log(riddle);
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(fetchRiddle(page))
},[page])
const CheckResult =()=>{

    // checking logic
    // write and wrong

    // setTimeout()
    setpage(page+1)
}

  return (
    <Box className={styles.cont}>
        <Box className={styles.topDiv}>
            <Box className={styles.score}></Box>
            <Box className={styles.riddleDiv}></Box>
        </Box>
        <Box className={styles.bottomDiv}>
            <HStack>
                <Box onClick={CheckResult} className={styles.firstOption}></Box>
                <Box onClick={CheckResult} className={styles.secondOption}></Box>
            </HStack>
            <HStack>
                <Box onClick={CheckResult} className={styles.thirdOption}></Box>
                <Box onClick={CheckResult} className={styles.fourthOption}></Box>
            </HStack>
        </Box>
    </Box>
  )
}

export default Riddles


// Apple Chancery, cursive