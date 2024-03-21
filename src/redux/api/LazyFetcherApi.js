import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = 'http://localhost:8000/v1/api';

const lazyPlaceFetcher = createAsyncThunk("lazyPlaceFetcher", async (pageNo) => {
    const url = `${baseURL}/place?page=${pageNo}`;
    try {
        const res = await fetch(url);
        if(res.status === 200){
            return await res.json();
        }else if(res.status === 204){
            return [];
        }
    } catch (err) {
        console.log(`an error in loading more(placepage):${err}`);
        return [];
    }
});

const lazyBlogFetcher = createAsyncThunk("lazyBlogFetcher", async (pageNo) => {
    const url = `${baseURL}/blog?page=${pageNo}`;
    try {
        const res = await fetch(url);
        if(res.status === 200){
            return await res.json();
        }else if(res.status === 204){
            return [];
        }
    } catch (err) {
        console.log(`an error in loading more(placepage):${err}`);
        return [];
    }
});

export { lazyPlaceFetcher,lazyBlogFetcher };