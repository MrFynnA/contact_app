import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import contactSlice from "./slices/contactSlice";


const store=configureStore({
    reducer:{
        modal:modalSlice,
        contactsItems:contactSlice
    }
})

export default store