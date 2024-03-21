import { createSlice } from '@reduxjs/toolkit'
import { accessSearchData } from '../api/searchApi'

const searchSlice = createSlice({
    name:"searchplace",
    initialState:[],
    reducers:{

    },
    extraReducers:(builder) => {
        builder.addCase(accessSearchData.fulfilled, (state,action) => {
            return [...state,...action.payload];
        });
    }
});

// export const {} = searchSlice.actions;
export default searchSlice.reducer;