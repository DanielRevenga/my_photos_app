import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

import ListCardImage from "../ListCardImage";
import { deletePhoto, editPhotoDescription, selectTags, selectMyPhotos, selectActiveTagPhotos, sortPhotos } from "../../features/myPhotos/myPhotosSlice";
import { setSearchMyPhotosTerm } from "../../features/searchTerm/searchTermSlice";
import ModalGetText from "../ModalGetText";
import SelectOrder from "../SelectOrder";
import { Container, Grid } from "@mui/material";
import TagList from "../TagList";
import "../../styles/MyPhotos.scss";
import SearchTerm from "../SearchTerm";

function MyPhotos() {

    const [open, setOpen] = useState(false);
    const [editPhoto, setEditPhoto] = useState({});
    // const photos = useSelector(selectFilteredPhotos);
    const activeTagPhotos = useSelector(selectActiveTagPhotos);
    const myPhotos = useSelector(selectMyPhotos);
    const dispatch = useDispatch();
    const tags = useSelector(selectTags);
    
    function searchTermHandler(term) {
        dispatch(setSearchMyPhotosTerm(term));
    }

    function deletePhotoHandler(photo) {
        dispatch(deletePhoto(photo));
    }

    function editPhotoDescHandler(photo) {
        dispatch(editPhotoDescription(photo));
    }

    function downloadPhotoHandler(downloadLink){
        const link = document.createElement('a')
        link.download = `downloadedImg.jpg`
        link.href = downloadLink
        link.click()
    }

    function modalGetTextOpenHandler(photo) { 
        setEditPhoto(photo);
        setOpen(true); 
    }
    function modalGetTextCloseHandler() { setOpen(false); }

    function sortPhotoshandler(term) {        
        dispatch(sortPhotos(term));
    }

    function toastDeleteHandler() {
        toast.info("Photo deleted successfully!");
    }

    return (
        <main id="myPhotos">
        <Container>
            <div className="filterHeader">
                <SearchTerm 
                    setSearchTerm={searchTermHandler}
                    searchPlaceholder="Search descriptions"
                    getPhotos={searchTermHandler} />      
                <SelectOrder 
                    sortPhotos={sortPhotoshandler}
                />  
            </div>
            
            <Grid container spacing={4} justifyContent="center" >           
                <Grid item xs={12} className="pTop10">
                    <TagList 
                        tags={tags}
                        myPhotos={myPhotos}
                    />
                </Grid>
                           
                <Grid item xs={12} className="pTop10">
                    <ListCardImage
                        downloadPhoto={downloadPhotoHandler}
                        photos={activeTagPhotos} 
                        local={true}
                        deletePhotoToast={toastDeleteHandler}
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
        <ToastContainer
            position="bottom-left"
            autoClose={4000}
            hideProgressBar={false}
            newestOnTop
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
        />
        </main>
    );
}

export default MyPhotos;