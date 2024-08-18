import { createSlice } from "@reduxjs/toolkit";


export const ProductSlice = createSlice({
    name: "product",
    initialState: {
        products: [],
        loading: false,
        error: null,
    },
    reducers: {
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
        saveProducts: (state, action) => {
            state.products = action.payload;
            
        },
        setError: (state, action) => {
            state.error = action.payload
        }


    }
});

export const { setLoading, saveProducts, setError } = ProductSlice.actions;
export default ProductSlice.reducer;
