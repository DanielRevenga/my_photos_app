import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from "./features/searchTerm/searchTermSlice";
import myPhotosReducer from "./features/myPhotos/myPhotosSlice";
import sortTermFilterReducer from "./features/sortTermFilter/sortTermFilterSlice";

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        myPhotos: myPhotosReducer,
        sortTerm: sortTermFilterReducer,
    }
});