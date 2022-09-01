import { Box, Table, TableContainer, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react'
import {EditIcon, DeleteIcon} from '@chakra-ui/icons'
import React from 'react';
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

const GetRiddles = () => {
   const riddles = useSelector((state)=>state.adminReducer.riddles);
const navigate = useNavigate()


  return (
    <Box m={"auto"} padding="10">
        <TableContainer>
            <Table variant={'simple'}>
                <Thead>
                    <Tr>
                        <Th>Riddle</Th>
                        <Th>Answer</Th>
                        <Th>creator</Th>
                        <Th>Edit</Th>
                        <Th>Delete</Th>
                      
                    </Tr>
                </Thead>
                <Tbody>
                        {riddles?.map((el)=>{
                            return(
                                <Tr key={el._id}>
                                    <Td>{el.riddle}</Td>
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
  )
}

export default GetRiddles