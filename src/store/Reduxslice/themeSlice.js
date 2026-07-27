import { createSlice } from "@reduxjs/toolkit"


const initialState ={
    dark:false
}

export const themechanger = createSlice({
    name:"themechanger",
    initialState,
  
    reducers:{
        themechange:(state,action)=>{
            state.dark=action.payload
        }
    }
})

export const {themechange} = themechanger.actions
export default themechanger.reducer