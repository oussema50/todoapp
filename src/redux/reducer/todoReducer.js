let initialState = []
let nextId = 0;
const todoReducer = (state=initialState,action) => {
    console.log(action);
    switch(action.type){
        case 'addTodo':
            return [...state,{id:++nextId,content:action.payload,completed:false}];
        case 'update':
            return state.map(item=>{ 
               return item.id === action.payload ? {...item,completed:!item.completed}:item 
            });
        case 'eddit':
            return state.map(item=>{
                return item.id === action.payload.id ? {...item,content:action.payload.content}:item 
             });
        default:
            return state;
    }
}

export default todoReducer
