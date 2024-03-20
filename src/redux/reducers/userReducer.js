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
            console.log(action.payload);
          })
          .addCase(authenticate.rejected, (state, action) => {
            state.auth = action.payload.authenticate;
          });

          builder.addCase(userLogout.fulfilled, (state, action) => {
            state.auth = action.payload.authenticate;
            console.log(action.payload);
          });

          builder.addCase(getUserProfile.fulfilled, (state,action) => {
            const { profile } = action.payload;
            const { name,email,avatar,blogs,blogs_voted } = profile;
            state.name = name;
            state.email = email;
            state.avatar = avatar;
            state.blogs = blogs;
            state.blogs_voted = blogs_voted;
            state.auth = action.payload.authenticate;
            console.log(state.name);
          });
      }
});

export const { login } = userSlice.actions;

export default userSlice.reducer;