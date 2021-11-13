import { Button, FormControl, Grid, InputLabel, Modal, OutlinedInput, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

import "../styles/ModalGetTextField.scss";

function ModalGetText(props) {

    let inputValue = "";

    function inputChangeHandler(e) {
        inputValue = e.target.value;    
    }

    function editPhotoHandler(e) {
        console.log("Modal:");
        console.log(props.photo);
        let newPhoto = {id: props.photo.id, description: inputValue};
        console.log(props.photo);
        props.editPhoto(newPhoto);
        props.closeHandler();
    }

    return (
        <Modal
            open={props.open}
            onClose={props.closeHandler}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            id="ModalGetTextField"
        >
            <Box className="box">
                <Grid 
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                    spacing={4}
                >
                
                    <Grid item  >
                        <Typography id="modal-modal-title" variant="h6" component="h2">
                            Fill the box below with the new photo description
                        </Typography>
                    </Grid>

                    <Grid item >
                        <FormControl>
                            <InputLabel htmlFor="component-outlined">Description</InputLabel>
                            <OutlinedInput
                                id="component-outlined"
                                // value={inputValue}
                                onChange={inputChangeHandler}
                                label="Name"
                                className="gridModalInput"
                                placeholder="Desc..."
                            />
                        </FormControl>
                    </Grid>

                    <Grid item  >
                        <Button
                            id="search-button"
                            variant="contained"
                            color="primary"
                            onClick={editPhotoHandler}
                        >
                            Edit
                        </Button>
                    </Grid>               
                </Grid>
            </Box>
        </Modal>
    );
}

export default ModalGetText;