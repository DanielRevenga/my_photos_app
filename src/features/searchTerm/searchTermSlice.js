import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState: "",
    reducers: {
        setSearchTerm: (state, action) => {
            return action.payload;
        },
        clearSearchTerm: (state, action) => {
            return "";
        }
    }
});

export const selectSearchTerm = (state) => state.searchTerm;

export const{
    setSearchTerm,
    clearSearchTerm
} = searchTermSlice.actions;

export default searchTermSlice.reducer;