import React, { useEffect, useState } from "react";
import { Container, TextField } from "@mui/material";
import { Box } from "@mui/system";
import SearchIcon from '@mui/icons-material/Search';

import "../styles/SearchTerm.scss";

function SearchTerm(props) {

    // let term = "2";
    const [term, setTerm] = useState("");
    
    useEffect(() => {
        props.setSearchTerm(term);
    }, [term]);

    function textFieldChangeHandler(e) {
        const term2 = e.target.value;
        // props.setSearchTerm(term2);
        // term = term2;
        props.setSearchTerm(term);
        setTerm(term2);
        props.setSearchTerm(term);
        props.getPhotos(term2, 1);
    }

    return (
        <Container id="Search">
            <Box className="box" sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField 
                    id="search" 
                    label={props.searchPlaceholder} 
                    value={term}
                    variant="standard" 
                    fullWidth  
                    onChange={textFieldChangeHandler}
                />
            </Box>          
        </Container>
    );
}

export default SearchTerm;