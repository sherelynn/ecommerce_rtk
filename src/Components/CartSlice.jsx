import { createSlice } from "@reduxjs/toolkit"

const CartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {},
})

const initialState = {
    cartItems: [],
}
