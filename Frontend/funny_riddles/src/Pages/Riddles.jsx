import { Box, HStack } from '@chakra-ui/react'
import React, { useEffect } from 'react';
import styles from './Styles/Riddles.module.css'
import { useDispatch } from 'react-redux';
import { fetchRiddle } from '../Redux/Player/action';

const Riddles = () => {
const dispatch = useDispatch();

useEffect(()=>{
    dispatch(fetchRiddle())
},[])

  return (
    <Box className={styles.cont}>
        <Box className={styles.topDiv}>
            <Box className={styles.score}></Box>
            <Box className={styles.riddleDiv}></Box>
        </Box>
        <Box className={styles.bottomDiv}>
            <HStack>
                <Box className={styles.firstOption}></Box>
                <Box className={styles.secondOption}></Box>
            </HStack>
            <HStack>
                <Box className={styles.thirdOption}></Box>
                <Box className={styles.fourthOption}></Box>
            </HStack>
        </Box>
    </Box>
  )
}

export default Riddles


// Apple Chancery, cursive