import logo from './logo.svg';
import './App.css';
import AddTodo from './component/AddTodo';
import TodoList from './component/TodoList';
import FilterTodo from './component/FilterTodo';
import {Container,Heading} from '@chakra-ui/react'
function App() {
  return (
    <Container >
      <Heading my="4">
        Todo App
      </Heading>
      <AddTodo />
      <TodoList />
      <FilterTodo />
    </Container>
  );
}

export default App;
