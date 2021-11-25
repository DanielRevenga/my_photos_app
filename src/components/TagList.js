import { Chip, Container, Stack } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { toggleTag } from "../features/myPhotos/myPhotosSlice";

function TagList(props) {

    const dispatch = useDispatch();
    const allTags = props.tags;
    // console.log(allTags);
    let allTagsArray = [];

    for (const [key, value] of Object.entries(allTags)) {
        const obj = {};
        obj[key] = value;
        allTagsArray.push({
            content: key,
            active: value
        });
    }

    function toggleChipsHandler(e) {
        dispatch(toggleTag(e.target.textContent));       
    }

    return (
        <Container>
            <Stack direction="row" spacing={1}>
                {
                    allTagsArray.filter(tag => tag.active)
                    .map(tag => (                       
                        <Chip key={tag.content} label={tag.content} color="primary" variant={tag.active > 0 ? "" : "outlined"} onClick={toggleChipsHandler} />
                    ))
                }
            </Stack>
        </Container>
    );
}

export default TagList;