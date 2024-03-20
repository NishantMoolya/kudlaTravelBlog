import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:8000/v1/api';

const authenticate = createAsyncThunk("authUser", async () => {
    try {
        const res = await fetch(`${baseURL}/user/auth`,{
            method:"GET",
            headers:{"Content-Type":"application/json"},
            credentials:'include'
        });
        return await res.json();
    } catch (err) {
        console.log(`an error in authenticating user:${err}`);
    }
});

const userLogout = createAsyncThunk("logout", async () => {
    try {
        const res = await fetch(`${baseURL}/user/logout`,{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            credentials:'include'
        });
        return await res.json();
    } catch (err) {
        console.log(`an error in authenticating user:${err}`);
    }
});

const getUserProfile = createAsyncThunk("userProfile", async () => {
    try {
        const res = await fetch(`${baseURL}/user/profile`,{
            method:"GET",
            headers:{"Content-Type":"application/json"},
            credentials:'include'
        });
        return await res.json();
    } catch (err) {
        console.log(`an error in authenticating user:${err}`);
    }
});

export { authenticate,userLogout,getUserProfile };
