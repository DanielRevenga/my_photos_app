import { createSlice } from "@reduxjs/toolkit";

import { selectSearchTerm } from "../searchTerm/searchTermSlice";
import {selectSortTermFilter } from "../sortTermFilter/sortTermFilterSlice";

// get the local storage photos or returns an empty array otherwise
function loadMyPhotosInitialState() {
    try {
        if (localStorage.getItem("myPhotos") !== null) return JSON.parse(localStorage.getItem("myPhotos"));
       
        return [];
    } catch (error) {
        console.log(error);
    }
}
// updates the local storage "myPhotos" data
function updateLocalStorageState(state) {
    try {
        localStorage.setItem("myPhotos", JSON.stringify(state));
    } catch (error) {
        console.log(error);
    }
}

const initialState = loadMyPhotosInitialState();

const myPhotosSlice = createSlice({
    name: "myPhotos",
    initialState: initialState,
    reducers: {
        addPhoto: (state, action) => {
            
            const newPhoto = {
                id: action.payload.id,
                description: action.payload.description,
                alt_description: action.payload.alt_description,
                width: action.payload.width,
                height: action.payload.height,
                likes: action.payload.likes,
                urls: {
                    full: action.payload.urls.full,
                    regular: action.payload.urls.full,
                    thumb: action.payload.urls.thumb,
                },
            }

            state.push(newPhoto);         
            updateLocalStorageState(state);
        },
        deletePhoto: (state, action) => {
            const index = state.findIndex(photo => photo.id === action.payload.id);
            
            state.splice(index, 1);

            updateLocalStorageState(state);
        },
        editPhotoDescription: (state, action) => {
            const index = state.findIndex(photo => photo.id === action.payload.id);
            let newPhoto = state[index];
            newPhoto.description = action.payload.description;

            state.splice(index, 1, newPhoto);

            updateLocalStorageState(state);
        },
    }
});

export const selectPhotos = (state) => {
    return state.myPhotos;
}

export const selectFilteredPhotos = (state) => {
    const myPhotos = selectPhotos(state);
    const searchTerm = selectSearchTerm(state);

    return myPhotos.filter(photo => {
        if (photo.description) return photo.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return photo.alt_description.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

export const selectSortedPhotos = (state) => {
    const myPhotos = selectFilteredPhotos(state);
    const sortTerm = selectSortTermFilter(state);
console.log("ji");
    return myPhotos.sort((a,b) => (a[sortTerm] > b[sortTerm]) ? 1 : ((b[sortTerm] > a[sortTerm]) ? -1 : 0)
    );
}

export const {
    addPhoto,
    deletePhoto,
    editPhotoDescription
} = myPhotosSlice.actions;

export default myPhotosSlice.reducer;

