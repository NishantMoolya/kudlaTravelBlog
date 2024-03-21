import { createSlice } from '@reduxjs/toolkit'
import { lazyPlaceFetcher } from '../api/LazyFetcherApi';
import { fetchPlaceResults } from '../api/searchApi';

const placeSlice = createSlice({
    name:"placeInfos",
    initialState:{
        data:[],
        isLoading:false,
        canScroll:true
    },
    extraReducers:(builder) => {
        builder
        .addCase(lazyPlaceFetcher.pending, (state,action) => {
            state.isLoading = true;
        })
        .addCase(lazyPlaceFetcher.fulfilled, (state,action) => {
            if(action.payload.length === 0) return {...state,canScroll:false,isLoading:false}
            else return {...state,data:[...state.data,...action.payload],isLoading:false}
        })
        .addCase(lazyPlaceFetcher.rejected, (state,action) => {
            state.isLoading = true;
        });

        builder.addCase(fetchPlaceResults.fulfilled, (state,action) => {
            return {...state,data:[...action.payload,...state.data]}
        })
    }
});

// export const {} = placeSlice.actions;
export default placeSlice.reducer;