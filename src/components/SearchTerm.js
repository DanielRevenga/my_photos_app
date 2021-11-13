import React from "react";
import { Button, Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

import "../styles/SearchTerm.scss";

function SearchTerm(props) {

    let term = "";

    function textFieldChangeHandler(e) {
        
        term = e.target.value;
        props.getPhotos(term);  
    }

    function searchTermHandler(e) {
        // props.getPhotos(term);  
    }

    return (
        <Container id="Search">
            <Box className="box" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                    id="search" 
                    label={props.searchPlaceholder} 
                    variant="standard" 
                    fullWidth  
                    onChange={textFieldChangeHandler}
                />

                <Button
                    id="search-button"
                    variant="contained"
                    color="primary"
                    onClick={searchTermHandler}
                > 
                    Search 
                </Button>
            </Box>          
        </Container>
    );
}

export default SearchTerm;