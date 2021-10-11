import { Box } from '@chakra-ui/layout'
import React from 'react'
import Todo from './Todo';
import {useSelector} from 'react-redux'

const TodoList = () => {
    const todoList = useSelector(state => state.todoReducer)
    return (
        
        <Box my='4' bg="red.300" >
            {todoList.length ? <Todo todoList={todoList} />:<Box p="3">{'No Todo Yet!!'}</Box>}
        </Box>
        
    )
}

export default TodoList
