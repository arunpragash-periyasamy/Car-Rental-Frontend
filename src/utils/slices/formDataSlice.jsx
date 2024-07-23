import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    locationForm: localStorage.getItem("locationForm"),
    billingForm:localStorage.getItem("billingForm"), 
    carId: localStorage.getItem("carId")
}

const formSlice = createSlice(
    {
        name: "form",
        initialState,
        reducers: {
            setLocationForm: (state, action) => {
                state.locationForm = action.payload;
                localStorage.setItem("locationForm", action.payload);
            },
            clearLocationForm: (state) => {
                state.locationForm = {};
                localStorage.removeItem("locationForm");
            },
            setCarId: (state, action) => {
                state.carId = action.payload;
                localStorage.setItem("carId", action.payload);
            },
            clearCarId: (state) => {
                state.carId = null;
                localStorage.removeItem("carId");
            },
            setBillingForm: (state, action) => {
                state.billingForm = action.payload;
                localStorage.setItem("billingForm", action.payload);
            },
            clearBillingForm: (state) => {
                state.billingForm = {};
                localStorage.removeItem("billingForm");
            }
        }
    }
)

export const { setCarId, clearCarId, setLocationForm, clearLocationForm, setBillingForm, clearBillingForm} = formSlice.actions;
export default formSlice.reducer;