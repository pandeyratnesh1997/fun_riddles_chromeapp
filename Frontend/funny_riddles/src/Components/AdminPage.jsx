// admin frontend
import React from 'react'
import { useState } from 'react'
import { Box, Button, FormControl, FormLabel, Heading, Input, Stack, Textarea, useToast } from '@chakra-ui/react'
import { useDispatch } from 'react-redux'
import { addRiddles } from '../Redux/Admin/action';
import styles from "./Styles/Admin.module.css"

const AdminPage = () => {
  const [newRiddle,setnewRiddle] = useState({
    riddle : "",
    answer : "",
    creator : ""
    
  });
  const dispatch = useDispatch();
  const toast = useToast();

const handleChange = (e)=>{
  const {name, value} = e.target;
  setnewRiddle({...newRiddle, [name] : value})
}

const handleSubmit = (e)=>{
  e.preventDefault();
  dispatch(addRiddles(newRiddle))
  /*
  dispatch(addRiddles(newRiddle)).then((r)=> {
      if(r.type==="ADD_RIDDLE_SUCCESS"){
        toast({
          title: 'Riddle saved succesfully',
          description: "you can see this in homepage",
          status: 'success',
          duration: 3000,
          isClosable: true,
        })
      }
      else if(r.type === "ADD_RIDDLE_FALIURE"){
        toast({
          title: 'Riddle  does not saved ',
          description: "something went wrong",
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      }
    }
  )
  */


}

  return (
    <>
    <Heading >Admin page</Heading>
    <Box className={styles.cont}>
    <Heading size={'lg'}>Add new Riddles</Heading>
      <Stack >
        <FormControl isRequired>
            <FormLabel>Riddle</FormLabel>
            <Textarea placeholder='enter riddle' name='riddle' value={newRiddle.riddle} onChange={handleChange}/>    
            
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Answer</FormLabel>
              <Input placeholder='enter Answer'  name='answer' value={newRiddle.answer} onChange={handleChange}/>    
        </FormControl>
            <FormControl>
            <FormLabel>Creator</FormLabel>
            <Input placeholder='enter creator name'  name='creator' value={newRiddle.creator} onChange={handleChange}/>    
            </FormControl>
            <Box>
              <br/>
              <Button colorScheme={'green'} onClick={handleSubmit}>Save</Button>
            </Box>
        </Stack>
    </Box>

    </>
  )
}

export default AdminPage