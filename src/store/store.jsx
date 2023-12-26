import { configureStore } from "@reduxjs/toolkit";
import modalSlice from "./slices/modalSlice";
import contactSlice from "./slices/contactSlice";
import searchSlice from "./slices/searchSlice";


const store=configureStore({
    reducer:{
        modal:modalSlice,
        contactsItems:contactSlice,
        search:searchSlice
    }
})

export default store