import { FormControl,Input,Flex,Button } from '@chakra-ui/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import {addTodo} from '../redux/action';
const AddTodo = () => {
    const [value,setValue] = useState('');
    const dispatch = useDispatch()
    const handleInput=(e)=>setValue(e.target.value);
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addTodo(value));
        setValue('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <Flex>
                <FormControl>
                    <Input 
                    type="text" 
                    onChange={handleInput}
                    borderTopRightRadius={0}
                    borderBottomRightRadius={0}
                    value={value} />
                    
                </FormControl>
                <Button
                 colorScheme="teal"
                 type="submit"
                 disabled={!value}
                 borderTopLeftRadius={0}
                 borderBottomLeftRadius={0}
                 >Add Todo</Button>
            </Flex>
        </form>
    )
}

export default AddTodo
