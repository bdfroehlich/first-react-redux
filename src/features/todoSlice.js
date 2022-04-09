import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    items: []
}

export const todoSlice = createSlice({
    // descriptive string that we will use to access a specific state object from our UI
    name: 'todos',
    initialState,
    reducers: {
        //user input is the payload in addTodo
        addTodo: (state, action) => {
            return  {items: [
                ...state.items, action.payload
            ]} 
        },
        clearTodo: () => {
            return  { items: []}
        },
        removeTodo: (state, action) => {
            console.log(action)
            //let array = current list of items
            let array = [...state.items]
            //users selected list item / index is the payload
            let index = action.payload
            //condition to check if list is not empty?
            if(index !== -1) {
                array.splice(index, 1)
                return { items: array }
            }
        }
    }  
})



export const { addTodo, clearTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer