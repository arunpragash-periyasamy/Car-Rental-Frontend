import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    images : []
}

const carSlice = createSlice({
    name: "car",
    initialState,
    reducers: {
        setImages: (state, action) => {
            state.images = action.payload;
        },
        setImage: (state, action) => {
            state.images = [...state.images, action.payload];
        },
        clearImages: (state) => {
            state.images = [];
        }
    }}
)
export const { setImage, setImages, clearImages } = carSlice.actions;
export default carSlice.reducer;