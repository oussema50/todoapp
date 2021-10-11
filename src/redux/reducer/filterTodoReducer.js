import visibility_fitler from '../../constants'
const initialState = visibility_fitler.ALL

const filterTodoReducer = (state = initialState,action) => {
    switch(action.type){
        case 'filter':
            return action.payload;
        default:
            return state;
    }
}

export default filterTodoReducer
