import { createAsyncThunk } from "@reduxjs/toolkit";

const baseURL = process.env.REACT_APP_BASE_URL;
const placeURL = `${baseURL}/place`;
const blogURL = `${baseURL}/blog`;

const accessSearchData = createAsyncThunk("accessSearchData", async () => {
    const url = `${placeURL}/search`;
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(`an error in authenticating user:${err}`);
        return [];
    }
});

const fetchPlaceResults = createAsyncThunk("fetchPlaceResults", async (_id) => {
    const url = `${placeURL}/search/${_id}`;
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(`enable to fetch search result for the place(searchFetcher):${err}`);
        return [];
    }
});

const fetchBlogResults = createAsyncThunk("fetchBlogResults", async (_id) => {
    const url = `${blogURL}/search/${_id}`;
    try {
        const res = await fetch(url);
        return await res.json();
    } catch (err) {
        console.log(`enable to fetch search result for the place(searchFetcher):${err}`);
        return [];
    }
});


export { accessSearchData,fetchPlaceResults,fetchBlogResults };