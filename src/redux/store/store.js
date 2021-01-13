import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../UserSlice/UserSlice';


export default configureStore({
   reducer: {
       userSlice: userReducer
   }
});
