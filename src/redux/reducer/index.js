import { combineReducers } from 'redux';
import todoReducer from './todoReducer'
import filterTodoReducer from './filterTodoReducer';
const allReducers = combineReducers({
    todoReducer:todoReducer,
    filterTodoReducer:filterTodoReducer,
})
export default allReducers;