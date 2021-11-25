import React from "react";
import { Container, Grid } from "@mui/material";

import CardImage from "./CardImage";
import { useSelector } from "react-redux";
import { selectPhotosIdsObject } from "../features/myPhotos/myPhotosSlice";

function ListCardImage(props) {

    const photos = props.photos;
    const photosIds = useSelector(selectPhotosIdsObject);

    return (
        <Container className="cardGrid">
            <Grid container spacing={2}>
                {
                    photos !== null && typeof photos !== 'undefined' && (                      
                        photos.map(p => {
                            const photo = p;
                            return (
                                <Grid item key={photo.id} xs={3}>
                                    <CardImage
                                        photo={photo}
                                        enableImport={photosIds && (photo.id in photosIds) && photosIds[photo.id]  ? true : false}
                                        addPhotoToast={props.addPhotoToast}
                                        deletePhotoToast={props.deletePhotoToast}
                                        local = {props.local ? true : false}
                                        downloadPhoto = {props.downloadPhoto ? () => props.downloadPhoto(photo.urls.full) : null}
                                        addToMyPhotos = {props.addToMyPhotos ? () => props.addToMyPhotos(photo) : null}
                                        deletePhoto={props.deletePhoto ? () => props.deletePhoto(photo) : null}
                                        editPhotoDesc={props.editPhotoDesc ? () => props.editPhotoDesc(photo) : null}
                                        openHandler={props.openHandler ? () => props.openHandler(photo) : null}
                                    />
                                </Grid>
                            );
                        })  
                    )                
                }         
            </Grid>
        </Container>
    );
}

export default ListCardImage;