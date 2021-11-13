import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import SearchTerm from "../SearchTerm";
import ListCardImage from "../ListCardImage";
import { selectFilteredPhotos, deletePhoto, editPhotoDescription, selectSortedPhotos } from "../../features/myPhotos/myPhotosSlice";
import { setSearchTerm } from "../../features/searchTerm/searchTermSlice";
import { setSortTerm } from "../../features/sortTermFilter/sortTermFilterSlice";
import ModalGetText from "../ModalGetText";
import SelectOrder from "../SelectOrder";
import { Container, Grid } from "@mui/material";

function MyPhotos() {

    const [open, setOpen] = useState(false);
    const [editPhoto, setEditPhoto] = useState({});
    // const photos = useSelector(selectFilteredPhotos);
    const photos = useSelector(selectSortedPhotos);
    const dispatch = useDispatch();
    
    function searchTermHandler(term) {
        dispatch(setSearchTerm(term));
    }

    function deletePhotoHandler(photo) {
        dispatch(deletePhoto(photo));
    }

    function editPhotoDescHandler(photo) {
        dispatch(editPhotoDescription(photo));
    }

    function downloadPhotoHandler(){
        
    }

    function modalGetTextOpenHandler(photo) { 
        setEditPhoto(photo);
        setOpen(true); 
    }
    function modalGetTextCloseHandler() { setOpen(false); }

    function sortPhotoshandler(term) {
        dispatch(setSortTerm(term));
    }


    return (
        <Container>
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={7}>
                    <SearchTerm 
                        searchPlaceholder="Search descriptions"
                        getPhotos={searchTermHandler} />
                </Grid>
                <Grid item xs={5}>
                    <SelectOrder 
                        sortPhotos={sortPhotoshandler}
                    />
                </Grid>
                           
                <Grid item xs={12}>
                    <ListCardImage
                        photos={photos} 
                        local={true}
                        deletePhoto={deletePhotoHandler}
                        editPhotoDesc={editPhotoDescHandler}
                        openHandler={modalGetTextOpenHandler} /> 
                </Grid>
            </Grid>

            <ModalGetText 
                open={open}
                photo={editPhoto}
                editPhoto={editPhotoDescHandler}           
                closeHandler={modalGetTextCloseHandler}
            />
            
        </Container>
    );
}

export default MyPhotos;