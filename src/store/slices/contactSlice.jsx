import { createSlice } from "@reduxjs/toolkit";


const initialState={
    contacts:[
        {
            id:Math.random(),
            name:"Fynn",
            phone: 545411926,
            email:'afynn09@gmail.com'

        },
        {
            id:Math.random(),
            name:"king",
            phone: 545411926,
            email:'afynn09@gmail.com'

        },
        {
            id:Math.random(),
            name:"romeo",
            phone: 545411926,
            email:'afynn09@gmail.com'

        },
        {
            id:Math.random(),
            name:"lade",
            phone: 545411926,
            email:'afynn09@gmail.com'

        },

    ]
}

const contactSlice=createSlice({
    name:"contacts",
    initialState,
    reducers:{
        addContact(state,action){
         state.contacts.unshift(action.payload)
        },

        deleteContact(state,action){
            state.contacts=state.contacts.filter(citems=>citems.id!==action.payload)

        },
    }
})

export const contactActions=contactSlice.actions
export default contactSlice.reducer