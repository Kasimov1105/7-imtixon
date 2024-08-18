import { createSlice } from "@reduxjs/toolkit";

export const BrandSlice = createSlice({
    name: "brand",
    initialState: {
        brand: [],
        brandLoading: false,
        brandError: null
    },
    reducers: {
        saveBrand: (state, action) => {
            state.brand = action.payload
        },
        setBrandLoading: (state, action) => {
            state.brandLoading = action.payload
        },
        setBrandError: (state, action) => {
            state.brandError = action.payload
        }
    }
})

export const {saveBrand, setBrandLoading, setBrandError} = BrandSlice.actions;
export default BrandSlice.reducer