import { Checkbox,Box,Flex,Text } from '@chakra-ui/react'
import React,{useState,useEffect} from 'react';
import EdditTodo from './EdditTodo';
import { useDispatch,useSelector } from 'react-redux';
import {update} from '../redux/action'
const Todo = ({todoList}) => {
    const filterTodo = useSelector(state => state.filterTodoReducer);
    const dispatch = useDispatch();
   
    //function to filter the todo List (completed or incompleted)
    const getTodoListFiltered = (store,filter)=>{
        switch(filter){
            case "completed":
                return store.filter(item=>item.completed);
            case "incompleted":
                let x =  store.filter(item=>!item.completed);
                 return x;
            default:
                return store;
        }
    }
    const todoListFilter = getTodoListFiltered(todoList,filterTodo);
    const handleCheckBox = (id) =>{
        dispatch(update(id))
    }
    return (
        <div>
            {console.log(todoListFilter,"todolistfilter:!!!")}
            {todoListFilter.map(item=>{
                return (
                    filterTodo === 'all'?
                    <Box  key={item.id} mb="4" p="3" >
                        <Flex justifyContent="space-between">
                            <Checkbox  display="flex" width="90%" onChange={()=>handleCheckBox(item.id)} isChecked={item.completed} colorScheme="teal">
                                <Text as={item.completed && "del"}>{item.content}</Text>
                            </Checkbox>
                            <EdditTodo 
                                todoContent = {item.content} 
                                todoCompleted = {item.completed} 
                                todoId = {item.id} 
                            />
                        </Flex>
                    </Box>:
                    <Box  key={item.id} mb="4" p="3" >
                        <Flex justifyContent="space-between">
                            <Checkbox isDisabled display="flex" width="90%" colorScheme="teal">
                                <Text as={item.completed && "del"}>{item.content}</Text>
                            </Checkbox>
                            <EdditTodo 
                                todoContent = {item.content} 
                                todoCompleted = {item.completed} 
                                todoId = {item.id} 
                            />
                        </Flex>
                    </Box>
                    )
            })}
        </div>
    )
}

export default Todo
