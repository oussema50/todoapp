import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    Input,
    useDisclosure 
} from "@chakra-ui/react";
import { useDispatch } from 'react-redux';
import {useState} from 'react';
import {eddit} from '../redux/action'
const EdditTodo = (props) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const {todoCompleted,todoContent,todoId} = props;
    const dispatch = useDispatch();
    const [value,setValue] = useState(todoContent);
    const handleInput = (e)=>{
        setValue(e.target.value);
    }
    const handleBtn = ()=>{
        dispatch(eddit(todoId,value))
        onClose();
    }
    return (
      <>
        <Button disabled={todoCompleted} onClick={onOpen} colorScheme="teal" size="sm">Eddit</Button>
  
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Eddit Todo</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
                <Input 
                    type="text" 
                    borderTopRightRadius={0}
                    borderBottomRightRadius={0}
                    value={value}
                    onChange={handleInput}
                />
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="blue" size="sm" mr ="4" onClick={onClose}>
                Close
              </Button>
              <Button onClick={handleBtn} colorScheme="teal" size="sm" >Eddit Todo</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default EdditTodo;
