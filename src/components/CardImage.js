import React from "react";
import { Typography, Card, CardActions, CardContent, CardMedia, Button, ButtonGroup, CardActionArea } from "@mui/material";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

import "../styles/CardImage.scss";

function CardImage(props) {

    function deletePhotoHandler() {
        props.deletePhoto();
        props.deletePhotoToast();
    }

    return (
        <Card className="card" id="Card">
            {/* <CardActionArea > */}

            <div className="saturate">
                <Zoom className="gfgf" zoomMargin={150} transitionDuration={1100}>                
                    <CardMedia
                        className="cardMedia"
                        component="img"
                        image={props.photo.urls.regular}
                        
                    />                 
                </Zoom>
            </div>
            
        
            <CardContent className="cardContent">
                <Typography gutterBottom variant="h5" component="div">
                    Description
                </Typography>
                <Typography className="boxS desc capitalize">
                    {props.photo.description || props.photo.alt_description}
                </Typography>

                <Typography gutterBottom variant="h5" component="div">
                    Aditional info.
                </Typography>
                <div className="boxS data" >
                    <Typography style={{
                            fontSize: "0.85em"
                        }}>
                        <span>Import date:</span> {props.photo.imported_date}
                    </Typography>
                    <Typography style={{
                            fontSize: "0.85em"
                        }}>
                        <span>Width:</span> {props.photo.width}
                    </Typography>
                    <Typography style={{
                            fontSize: "0.85em"
                        }}>
                        <span>Height:</span> {props.photo.height}
                    </Typography>
                    <Typography style={{
                            fontSize: "0.85em"
                        }}>
                        <span>Likes:</span> {props.photo.likes}
                    </Typography>
                </div>              
            </CardContent>

            <CardActions>
                {!props.local ? 
                    <Button size="small" variant="outlined" color="primary" 
                        onClick={props.addToMyPhotos} disabled={props.enableImport}>
                        Add to My Photos
                    </Button>
                    : (
                    <>
                    <ButtonGroup className="buttonGroup" variant="contained" aria-label="outlined primary button group">
                        <Button size="large"  color="primary" onClick={deletePhotoHandler}>
                            <i className="fas fa-trash-alt"></i>
                        </Button>
                        <Button size="large"  color="primary" onClick={props.openHandler}>
                            <i className="fas fa-edit"></i>
                        </Button>
                        <Button size="large"  color="primary" onClick={props.downloadPhoto}>
                            <i className="fas fa-cloud-download-alt"></i>
                        </Button>
                    </ButtonGroup>
                    </>
                    )
                }
            </CardActions>
        </Card>
    );
}

export default CardImage;