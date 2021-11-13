import { Container, FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import React from "react";

import "../styles/SelectOrder.scss";

function SelectOrder(props) {

    let selectedItem = "";

    function selectChangeHandler(e) {
        selectedItem = e.target.value;
        console.log("buenas tardes");console.log(selectedItem);
        props.sortPhotos(selectedItem);
    }

    return (
        <Container>
            <FormControl fullWidth>
                <InputLabel id="sortSelect-label">Sort Photos By</InputLabel>
                <Select
                    labelId="sortSelect-label"
                    id="sortSelect"
                    value={selectedItem}
                    label="Sort"
                    onChange={selectChangeHandler}
                >
                    <MenuItem {selectedItem} value="date">Date</MenuItem>
                    <MenuItem {!!selectedItem == "width" ? "selected"  : ""} value="width">Width</MenuItem>
                    <MenuItem {!!selectedItem == "height" ? "selected"  : ""} value="height">Height</MenuItem>
                    <MenuItem {!!selectedItem == "likes" ? "selected"  : ""} value="likes">Likes</MenuItem>
                </Select>
            </FormControl>
        </Container>
    );
}

export default SelectOrder;