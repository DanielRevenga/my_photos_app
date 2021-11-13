import React from "react";
import { Container, Grid } from "@mui/material";

import CardImage from "./CardImage";

function ListCardImage(props) {

    const photos = props.photos;

    return (
        <Container className="cardGrid">
            <Grid container spacing={4}>
                {
                    photos !== null && typeof photos !== 'undefined' && (                      
                        photos.map(p => {
                            const photo = p;
                            return (
                                <Grid item key={photo.id} xs={3}>
                                    <CardImage
                                        photo={photo}
                                        local = {props.local ? true : false}
                                        addToMyPhotos = {props.addToMyPhotos ? () => props.addToMyPhotos(photo) : null}
                                        deletePhoto={props.deletePhoto ? () => props.deletePhoto(photo) : null}
                                        editPhotoDesc={props.editPhotoDesc ? () => props.editPhotoDesc(photo) : null}
                                        downloadPhoto={props.downloadPhoto ? () => props.downloadPhoto(photo) : null}
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