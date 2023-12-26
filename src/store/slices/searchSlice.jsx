import { createSlice} from "@reduxjs/toolkit";

const initialState={
    searchTerm:''
}
const searchSlice=createSlice({
     name:'searchTerm',
     initialState,
     reducers:{
        setSearchTerm(state,action){
            state.searchTerm=action.payload
        },
    
     }
})

export default searchSlice.reducer
