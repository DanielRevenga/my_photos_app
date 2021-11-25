import { createSlice, current } from "@reduxjs/toolkit";

import { selectSearchMyPhotosTerm } from "../searchTerm/searchTermSlice";
import { selectSortTermFilter } from "../sortTermFilter/sortTermFilterSlice";

// get the local storage photos or returns an empty array otherwise
function loadMyPhotosInitialState() {
    try {
        if (localStorage.getItem("myPhotos") !== null) {
            return JSON.parse(localStorage.getItem("myPhotos"));
        }
       
        const initialState = {
            myPhotos: [],
            photosIdsObject: { },
            tags: { }
        };

        return initialState;
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
            const date = new Date();
            const imported_date = date.getFullYear() +"/"+ (date.getMonth()+1) +"/"+ date.getDate()
                +" "+ date.getHours() +":"+ date.getMinutes() +":"+ date.getSeconds();

            const newPhoto = {
                id: action.payload.photo.id,
                imported_date: imported_date,
                description: action.payload.photo.description,
                alt_description: action.payload.photo.alt_description,
                width: action.payload.photo.width,
                height: action.payload.photo.height,
                likes: action.payload.photo.likes,
                urls: {
                    full: action.payload.photo.urls.full,
                    regular: action.payload.photo.urls.regular,
                    thumb: action.payload.photo.urls.thumb,
                },
                tag: action.payload.term
            }
            state.myPhotos.push(newPhoto);
            state.photosIdsObject[action.payload.photo.id] = true;
            if (!(action.payload.term in state.tags)) {
                state.tags[action.payload.term] = 1;
            }else {
                state.tags[action.payload.term] += 1;
            }
            updateLocalStorageState(state);
        },
        deletePhoto: (state, action) => {
            // console.log(current(state.myPhotos));
            const index = state.myPhotos.findIndex(photo => photo.id === action.payload.id);
            
            state.myPhotos.splice(index, 1);
            state.photosIdsObject[action.payload.id] = false;
            state.tags[action.payload.tag] -= 1;
            updateLocalStorageState(state);
        },
        editPhotoDescription: (state, action) => {
            const index = state.myPhotos.findIndex(photo => photo.id === action.payload.id);
            let newPhoto = state.myPhotos[index];
            newPhoto.description = action.payload.description;

            state.myPhotos.splice(index, 1, newPhoto);

            updateLocalStorageState(state);
        },
        sortPhotos: (state, action) => {
            state.myPhotos.sort((a, b) => {
                if (a[action.payload] < b[action.payload]) return -1;
                if (a[action.payload] > b[action.payload]) return 1;
                return 0;
            });
        },
        toggleTag: (state, action) => {
            // if (action.payload) {
                state.tags[action.payload] = state.tags[action.payload] * -1;
            // }else {

            // }
            // state.tags[action.payload] = !state.tags[action.payload];
        }
    }
});

export const selectMyPhotos = (state) => {
    return state.myPhotos;
}

export const selectFilteredPhotos = (state) => {
    const myPhotos = selectMyPhotos(state.myPhotos);
    const searchTerm = selectSearchMyPhotosTerm(state);

    if (!searchTerm) return myPhotos;

    return myPhotos.filter(photo => {
        if (photo.description) return photo.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return photo.alt_description.toLowerCase().includes(searchTerm.toLowerCase());
    });
}

export const selectActiveTagPhotos = (state) => {
    const myPhotos = selectFilteredPhotos(state);
    const tags = state.myPhotos.tags;
    // console.log(myPhotos);

    return myPhotos.filter(photo => tags[photo.tag] > 0);
    // console.log("selectActiveTagPhotos")
    // console.log(x);
}

export const selectPhotosIdsObject = (state) => {
    return state.myPhotos.photosIdsObject;
}

export const selectSortedPhotos = (state) => {
    const myPhotos = selectFilteredPhotos(state.myPhotos);
    const sortTerm = selectSortTermFilter(state);

    return myPhotos.sort((a,b) => (a[sortTerm] > b[sortTerm]) ? 1 : ((b[sortTerm] > a[sortTerm]) ? -1 : 0)
    );
}

export const selectTags = (state) => state.myPhotos.tags;

export const {
    addPhoto,
    deletePhoto,
    editPhotoDescription,
    sortPhotos,
    toggleTag
} = myPhotosSlice.actions;

export default myPhotosSlice.reducer;

