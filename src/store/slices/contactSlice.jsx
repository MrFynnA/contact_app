import { createSlice } from "@reduxjs/toolkit";


const initialState={
    contacts:[

    ],
    contactDetail:{},
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
        replaceContacts(state,action){
            state.contacts=action.payload
        },
        setContactDetail(state,action){
            state.contactDetail=action.payload
        },
        updateContact(state,action){
            const existingContact=state.contacts.find(items=>items.id===action.payload.id)
            if(existingContact){
                existingContact.name=action.payload.name
                existingContact.phone=action.payload.phone,
                existingContact.email=action.payload.email
            }
            // state.contacts
        }
    }
})

export const contactActions=contactSlice.actions
export default contactSlice.reducer