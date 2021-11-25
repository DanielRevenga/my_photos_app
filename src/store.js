import { configureStore } from "@reduxjs/toolkit";

import searchTermReducer from "./features/searchTerm/searchTermSlice";
import myPhotosReducer from "./features/myPhotos/myPhotosSlice";

export default configureStore({
    reducer: {
        searchTerm: searchTermReducer,
        myPhotos: myPhotosReducer,
    }
});