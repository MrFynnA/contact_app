import { createSlice} from "@reduxjs/toolkit";

const initialState={
    contactModalActive:false,
    contactDetailModalActive:false,
    deletModalActive:false,
    deleteContact:false
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
        },
        setDetailModalActive(state){
            state.contactDetailModalActive=true
        },
        closeDetailModal(state){
            state.contactDetailModalActive=false
        },
        setDeleteModalActive(state){
            state.deletModalActive=true
        },
        closeDeleteModal(state){
            state.deletModalActive=false
        },
        setDelete(state){
            state.deleteContact=true
        }
     }
})

export const modalActions= modalSlice.actions
export default modalSlice.reducer