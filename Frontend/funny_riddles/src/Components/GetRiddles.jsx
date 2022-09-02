import { Box, Heading, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'
import React, { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';

import { getData } from "../Redux/Admin/action";

const GetRiddles = () => {
   const riddles = useSelector((state)=>state.adminReducer.data);
   console.log("riddles",riddles)
const navigate = useNavigate();
const dispatch =  useDispatch();

useEffect(()=>{
    dispatch(getData())
},[])

  useEffect(() => {
    dispatch(getData());
  }, []);

  return (
    <>
    <Heading marginTop={"120px"}>Here are the riddles you added</Heading>
    {!riddles? <Box>Loading....</Box> : 
    <Box m={"20px auto"} padding="10"  width={'100%'}>
        <TableContainer  width={'100%'}>
            <Table variant='striped' colorScheme='teal' width={'100%'} textTransform='uppercase'>
                <Thead>
                    <Tr bg="blue.200">
                        <Th>Riddle</Th>
                        <Th>Answer</Th>
                        <Th>creator</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                      
                    </Tr>
                </Thead>
                <Tbody>
                        {riddles?.length > 0 && riddles.map((el)=>{
                            return(
                                <Tr key={el._id}>
                                    <Td w={'40%'}  whiteSpace={'break-spaces'}>{el.riddle}</Td>
                                    <Td>{el.answer}</Td>
                                    <Td>{el.creator}</Td>
                                    <Td onClick={()=>navigate(`/riddle/patch/${el._id}`)}><EditIcon/></Td>
                                    <Td onClick={()=>navigate(`/riddle/delete/${el._id}`)}><DeleteIcon/></Td>
                                </Tr>
                            )
                        })}
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
    }
    </>
  )
}

export default GetRiddles;
