import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slices/userSlice'
import carReducer from "../slices/carSlice";
import formReducer from "../slices/formDataSlice";
export const store = configureStore({
  reducer: {
    user: userReducer,
    car: carReducer,
    form: formReducer
  },
});
