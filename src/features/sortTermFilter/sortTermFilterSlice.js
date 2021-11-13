import { createSlice } from "@reduxjs/toolkit";

const initialState = "date";

const sortTermFilterSlice = createSlice({
    name: "sortTerm",
    initialState: initialState,
    reducers: {
        setSortTerm: (state, action) => {
            return action.payload;
        },
        
    },
});

export const selectSortTermFilter = (state) => state.sortTerm;

export const {
    setSortTerm
} = sortTermFilterSlice.actions;

export default sortTermFilterSlice.reducer;