export const addTodo = (valueInput)=>{
    return {
        type:'addTodo',
        payload:valueInput
    }
}
export const update = (id) =>{
    return {
        type:'update',
        payload:id
    }
}
export const eddit = (id,content) =>{
    return {
        type:'eddit',
        payload:{
            id:id,
            content:content
        }
    }
}
export const filter = (filter)=>{
    return{
        type:'filter',
        payload:filter
    }
}
