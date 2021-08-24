import { createSlice } from "@reduxjs/toolkit";

const toCartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        increment(state) {
            state.value++
            //state.value += action.payload
        },
        decrement(state) {
            state.value--
            //state.value -= action.payload
        },
        isdelete(state) {
            state = ''
        }

    }
}
)

export const { increment, decrement, isdelete } = toCartSlice.actions

export default toCartSlice.reducer