import { createSlice } from '@reduxjs/toolkit'
import { lazyBlogFetcher } from '../api/LazyFetcherApi';
import { fetchBlogResults } from '../api/searchApi';

const blogSlice = createSlice({
    name:"blogInfos",
    initialState:{
        data:[],
        isLoading:false,
        canScroll:true
    },
    extraReducers:(builder) => {
        builder
        .addCase(lazyBlogFetcher.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(lazyBlogFetcher.fulfilled, (state,action) => {
            if(action.payload.length === 0) return {...state,canScroll:false,isLoading:false}
            else return {...state,data:[...state.data,...action.payload],isLoading:false}
        })
        .addCase(lazyBlogFetcher.rejected, (state,action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchBlogResults.fulfilled, (state,action) => {
            return {...state,data:[...action.payload,...state.data]}
        })
    }
});

// export const {} = blogSlice.actions;
export default blogSlice.reducer;