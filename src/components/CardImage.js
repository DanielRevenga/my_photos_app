import React from "react";
import { Typography, Card, CardActions, CardContent, CardMedia, Button, ButtonGroup } from "@mui/material";

import "../styles/CardImage.scss";

function CardImage(props) {

    return (
        <Card className="card">
            <CardMedia
                className="cardMedia"
                component=""
                image={props.photo.urls.regular}
                title="Image title"
            />

            <CardContent className="cardContent">
                <Typography className="capitalize">
                    {props.photo.description || props.photo.alt_description}
                </Typography>
                <Typography>
                    Width: {props.photo.width || props.photo.width}
                </Typography>
            </CardContent>

            <CardActions>
                {!props.local ? 
                    <Button size="small" variant="outlined" color="primary" 
                        onClick={props.addToMyPhotos}>
                        Add to My Photos
                    </Button>
                    : (
                    <>
                    <ButtonGroup className="buttonGroup" variant="contained" aria-label="outlined primary button group">
                        <Button size="large"  color="primary" onClick={props.deletePhoto}>
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