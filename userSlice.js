import React from 'react'
import {createSlice} from '@reduxjs/toolkit'

const userSlice = createSlice({
    name: "counter",
    initialState: {
        counter:0
    },
    reducers: {
        Increment: (state) => {
            state.counter +=1
        },
        Decrement: (state) => {
            state.counter -=1
        }
    }
})
export const {Increment,Decrement} = userSlice.actions;
export default userSlice.reducer