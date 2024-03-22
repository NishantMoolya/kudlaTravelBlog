import { createSlice } from '@reduxjs/toolkit'
import { authenticate, getUserProfile, userLogout } from '../api/userApi';

const initialUser = {
    name:"",
    email:"",
    avatar:"",
    blogs:[],
    blogs_voted:[],
    auth:false
}

const userSlice = createSlice({
    name:"user",
    initialState:initialUser,
    reducers:{
        login:(state) => {
            state.auth = true;
            //console.log("state:",state);
        }
    },
    extraReducers:(builder) => {
        builder.addCase(authenticate.pending, (state, action) => {
            state.auth = false;
          })
          .addCase(authenticate.fulfilled, (state, action) => {
            state.auth = action.payload.authenticate;
          })
          .addCase(authenticate.rejected, (state, action) => {
            state.auth = false;
          });

          builder.addCase(userLogout.fulfilled, (state, action) => {
            state.auth = action.payload.authenticate;
          });

          builder.addCase(getUserProfile.fulfilled, (state,action) => {
            const { profile,authenticate } = action.payload;
            return {...state,...profile,auth:authenticate}
          });
      }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;