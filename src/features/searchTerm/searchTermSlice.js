import { createSlice } from "@reduxjs/toolkit";

const searchTermSlice = createSlice({
    name: "searchTerm",
    initialState: {
        dashboardTerm: "",
        myPhotosTerm: ""
    },
    reducers: {
        setSearchDashboardTerm: (state, action) => {
            state.dashboardTerm = action.payload;
        },
        setSearchMyPhotosTerm: (state, action) => {
            state.myPhotosTerm = action.payload;
        },
        clearSearchDashboardTerm: (state, action) => {
            state.dashboardTerm = "";
        },
        clearSearchMyPhotosTerm: (state, action) => {
            state.myPhotosTerm = "";
        }
    }
});

export const selectSearchDashboardTerm = (state) => {
    // console.log("gfgf");
    // console.log(state.searchTerm);
    return state.searchTerm.dashboardTerm;
}

export const selectSearchMyPhotosTerm = (state) => {
    // console.log("gfgf");
    // console.log("selectSearchMyPhotosTerm");
    // console.log(state);
    // console.log(state.searchTerm);
    // console.log(state.searchTerm.myPhotosTerm);
    // console.log("----------------");
    return state.searchTerm.myPhotosTerm;
}

export const{
    setSearchDashboardTerm,
    setSearchMyPhotosTerm,
    clearSearchDashboardTerm,
    clearSearchMyPhotosTerm
} = searchTermSlice.actions;

export default searchTermSlice.reducer;