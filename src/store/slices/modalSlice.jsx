import { createSlice} from "@reduxjs/toolkit";

const initialState={
    contactModalActive:false
}
const modalSlice=createSlice({
     name:'modal',
     initialState,
     reducers:{
        setContactModalActive(state){
            state.contactModalActive=!state.contactModalActive
        },
        closeContactModal(state){
            state.contactModalActive=false
        }
     }
})

export const modalActions= modalSlice.actions
export default modalSlice.reducer