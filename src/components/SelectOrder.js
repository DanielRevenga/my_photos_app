import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React, { useState } from "react";

import "../styles/SelectOrder.scss";

// let selectedItem="";

function SelectOrder(props) {  

    const [selectedItem, setSelectedItem] = useState("");

    function selectChangeHandler(e) {
        const selectedItem2 = e.target.value;
        setSelectedItem(selectedItem2);
        props.sortPhotos(selectedItem2);
    }

    return (
        <Container id="selectOrder">
            <FormControl fullWidth>
                <InputLabel id="sortSelect-label">Sort Photos By</InputLabel>
          
                <Select
                    labelId="sortSelect-label"
                    id="sortSelect"
                    value={selectedItem}
                    label="Sort"
                    onChange={selectChangeHandler}
                >
                    <MenuItem value="imported_date">Date</MenuItem>
                    <MenuItem value="width">Width</MenuItem>
                    <MenuItem value="height">Height</MenuItem>
                    <MenuItem value="likes">Likes</MenuItem>
                </Select>
            </FormControl>
        </Container>
    );
}

export default SelectOrder;