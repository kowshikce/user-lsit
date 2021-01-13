import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';


export const fetchUserFromStart = createAsyncThunk('users/fetchUsersFromStart', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    const users = response.data.map((user) => user.name);
    return users;
})

const userSlice = createSlice({
    name: 'user',
    initialState: {
        status: 'idle',
        users: [],
        error: ''
    },
    extraReducers: {
        [fetchUserFromStart.pending]: (state, action) => {
            state.status = 'pending';
        },
        [fetchUserFromStart.fulfilled]: (state, action) => {
            state.status = 'success';
            state.users = action.payload;
            state.error = '';
        },
        [fetchUserFromStart.rejected]: (state, action) => {
            state.status = 'error';
            state.users = [];
            state.error = action.payload.message;
        }
    }
});



export default userSlice.reducer;