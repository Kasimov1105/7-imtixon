import { createSlice } from "@reduxjs/toolkit";

export const ColorSlice = createSlice({
    name: "color",
    initialState: {
        colors: [],
        colorsLoading: false,
        colorsError: null
    },
    reducers: {
        saveColors: (state, action) => {
            state.colors = action.payload
        },
        setColorsLoading: (state, action) => {
            state.colorsLoading = action.payload
        },
        setColorsError: (state, action) => {
            state.colorsError = action.payload
        }
    }
})

export const { saveColors, setColorsLoading, setColorsError } = ColorSlice.actions;
export default ColorSlice.reducer;